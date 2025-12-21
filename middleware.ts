export { default } from "next-auth/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { rateLimit } from "./lib/rateLimit";

export async function middleware(request: NextRequest) {
  // limiting
  if (!request.nextUrl.pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  const headerList = request.headers;
  const ip =
    headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    headerList.get("x-real-ip") ??
    "unknown";

  if (!rateLimit(ip)) {
    return NextResponse.json(
      { error: "To many requests." },
      { status: 429, headers: { "Content-Type": "application/json" } }
    );
  }

  //
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/:path*",
};
