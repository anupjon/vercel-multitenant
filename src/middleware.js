import { NextRequest, NextResponse } from 'next/server';

import { rootDomain } from '../lib/utils';




export async function middleware(request) {

  const { pathname } = request.nextUrl;
  const hostname = request.headers.get('host');

  console.log('middleware', rootDomain);

  return NextResponse.next();
}


export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. all root files inside /public (e.g. /favicon.ico)
     */
    '/((?!api|_next|[\\w-]+\\.\\w+).*)'
  ]
};