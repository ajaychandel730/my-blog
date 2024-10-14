export { default } from "next-auth/middleware";
import { getToken } from "next-auth/jwt";
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  
    // if(request.nextUrl.pathname === "/"){
    //    const token = await getToken({req : request, secret : process.env.AUTH_SECRET});
    //    console.log("token:", token);
    // }

  return NextResponse.next();
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/',
}