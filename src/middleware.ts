import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const allowedOrigins = [
  process.env.PRODUCTION_URL_MAIN,
  process.env.PRODUCTION_URL_SUB,
  'http://localhost:3000',
]

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  if (pathname === '/api/client-ip') {
    return NextResponse.next()
  }

  const origin = request.headers.get('origin')

  if (pathname.startsWith('/api')) {
    if (origin && allowedOrigins.includes(origin)) {
      return NextResponse.next({
        headers: {
          'Access-Control-Allow-Origin': origin,
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      })
    }

    return NextResponse.next({
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Max-Age': '86400',
      },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/api/:path*'],
}
