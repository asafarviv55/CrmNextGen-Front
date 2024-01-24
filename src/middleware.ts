import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    if(false && !request.nextUrl.pathname.includes('/login')){
        return NextResponse.redirect(new URL('/login', request.url))
    }
}
 
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|login).*)',
  ],
}