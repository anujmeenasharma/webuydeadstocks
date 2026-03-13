import { NextResponse } from 'next/server';

export async function POST(request) {
  // Create a response that redirects or just returns success
  const response = NextResponse.json({ message: 'Logged out successfully' }, { status: 200 });

  // Clear the cookie by setting maxAge to 0
  response.cookies.set({
    name: 'admin_token',
    value: '',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0,
  });

  return response;
}
