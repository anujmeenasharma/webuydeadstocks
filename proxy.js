import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

// Same secret as in lib/auth.js
const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret_for_development_only_12345';
const key = new TextEncoder().encode(JWT_SECRET);

// GCC Country Codes — auto-switch to Arabic
const gccCountries = ['AE', 'SA', 'QA', 'KW', 'OM', 'BH'];

export async function proxy(request) {
  const { pathname } = request.nextUrl;

  // --- 1. Admin Authentication Logic ---
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    const token = request.cookies.get('admin_token')?.value;

    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
    try {
      await jwtVerify(token, key);
      return NextResponse.next(); // Explicitly return passed auth
    } catch {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  // --- 2. Skip i18n for paths that don't need it ---
  const shouldSkipI18n =
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/uploads') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/admin') ||
    pathname.match(/\.[a-z0-9]+$/i); // static file extensions (.ico, .xml, .png, etc.)

  if (shouldSkipI18n) {
    return NextResponse.next();
  }

  // --- 3. Prevent direct access to internal /en or /ar folders ---
  if (pathname === '/en' || pathname.startsWith('/en/')) {
    const publicPath = pathname.replace(/^\/en/, '') || '/';
    return NextResponse.redirect(new URL(publicPath, request.url));
  }
  if (pathname === '/ar' || pathname.startsWith('/ar/')) {
    const publicPath = pathname.replace(/^\/ar/, '/arabic') || '/arabic';
    return NextResponse.redirect(new URL(publicPath, request.url));
  }

  // --- 4. Parse public URL for locale ---
  const isArabicRoute = pathname === '/arabic' || pathname.startsWith('/arabic/');
  // publicPathWithoutLocale is what we append to /en or /ar internally
  const publicPathWithoutLocale = isArabicRoute ? (pathname.replace(/^\/arabic/, '') || '/') : pathname;

  // --- 5. User Preference Cookie & Geolocation Redirects ---
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;

  if (cookieLocale) {
    // If user prefers Arabic but is on English route, redirect to Arabic route
    if (cookieLocale === 'ar' && !isArabicRoute) {
      const redirectPath = `/arabic${publicPathWithoutLocale === '/' ? '' : publicPathWithoutLocale}`;
      return NextResponse.redirect(new URL(redirectPath, request.url));
    }
    // If user prefers English but is on Arabic route, redirect to English route
    if (cookieLocale === 'en' && isArabicRoute) {
      return NextResponse.redirect(new URL(publicPathWithoutLocale, request.url));
    }
  } else {
    // No cookie -> Detect Geolocation
    const country = request.geo?.country || request.headers.get('x-vercel-ip-country');
    const isGcc = country && gccCountries.includes(country.toUpperCase());

    // If GCC user lands on English URL, auto-redirect to Arabic
    if (isGcc && !isArabicRoute) {
      const redirectPath = `/arabic${publicPathWithoutLocale === '/' ? '' : publicPathWithoutLocale}`;
      return NextResponse.redirect(new URL(redirectPath, request.url));
    }
    // (If non-GCC user lands on Arabic URL without a cookie, we just let them stay on the Arabic site)
  }

  // --- 6. Rewrite clean URLs to internal Next.js [lang] files ---
  // /about -> rewritten to /en/about
  // /arabic/about -> rewritten to /ar/about
  const internalLocale = isArabicRoute ? 'ar' : 'en';
  const internalPath = `/${internalLocale}${publicPathWithoutLocale === '/' ? '' : publicPathWithoutLocale}`;

  // Next.js will render the page located at app/[lang]/... using 'en' or 'ar' as params.lang
  return NextResponse.rewrite(new URL(internalPath, request.url));
}

export const config = {
  // Match all paths except Next.js internals and explicit static asset folders
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
