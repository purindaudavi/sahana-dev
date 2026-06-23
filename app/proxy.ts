import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createClient } from "@/app/utils/supabase/server";

const protectedPrefix = "/admin";
 
export default async function proxy(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = path.startsWith(protectedPrefix);
  const isSignInRoute = path === "/sign-in";

  const supabase = createClient(await cookies());
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (isProtectedRoute && !session?.user) {
    return NextResponse.redirect(new URL("/sign-in", req.nextUrl));
  }

  if (isSignInRoute && session?.user) {
    return NextResponse.redirect(new URL("/admin", req.nextUrl));
  }

  return NextResponse.next();
}
 
// Routes Proxy should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}