import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;

  const variantParam = url.searchParams.get("variant");
  const variantCookie = req.cookies.get("variant")?.value;

  const variant = variantParam ?? variantCookie ?? "a";
  const response = NextResponse.rewrite(new URL(variant, url));

  if (variantParam) {
    response.cookies.set("variant", variantParam);
  }

  return response;
}

export const config = {
  // match all request paths except for public, api, assets and _next
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
