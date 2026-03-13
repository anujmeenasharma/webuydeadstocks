import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

// Same secret as in lib/auth.js
const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret_for_development_only_12345';
const key = new TextEncoder().encode(JWT_SECRET);

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // Protect all /admin routes except /admin/login
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    const token = request.cookies.get('admin_token')?.value;

    if (!token) {
      // No token found, redirect to login
      const url = request.nextUrl.clone();
      url.pathname = '/admin/login';
      return NextResponse.redirect(url);
    }

    try {
      // Verify token
      await jwtVerify(token, key);
      return NextResponse.next();
    } catch (error) {
      // Invalid token, redirect to login
      const url = request.nextUrl.clone();
      url.pathname = '/admin/login';
      // Optionally decode to see if it expired, but simple redirect is fine
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/admin/:path*'],
};
