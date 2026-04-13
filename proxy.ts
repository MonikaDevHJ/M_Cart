import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher(["/seller(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth(); // ✅ FIX HERE

  // ✅ If logged in → block going back to sign-in
  if (userId && req.nextUrl.pathname === "/sign-in") {
    return NextResponse.redirect(new URL("/seller", req.url));
  }

  // ✅ Protect seller route
  if (isProtectedRoute(req) && !userId) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};