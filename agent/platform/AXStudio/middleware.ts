import { NextResponse, NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
    // const token = localStorage.getItem('token');
    const token = request.headers.get('Authorization');
    // console.log(token+"tokentokentokentokentokentokentoken");
    const isAuthenticated = true;
    
    if (isAuthenticated)
         return NextResponse.next()
    return NextResponse.redirect(new URL('/auth/login', request.url))
}
 
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - and etc.
     */
    '/((?!_next/static|_next/image|favicon.ico|static|public|asset|auth/login|business-book/api/auth/login|layout/images|themes).*)',
  ],
}