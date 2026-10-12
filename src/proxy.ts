import { NextResponse, type NextRequest } from "next/server";
import { tours } from "@/content/tours";
import { servicePages } from "@/content/services";

/**
 * Returns a real 404 status for unknown tour and service slugs.
 * With Cache Components the page streams before `notFound()` runs, which would
 * otherwise produce a 200 (soft 404). Known slugs pass straight through.
 */
const tourSlugs = new Set(tours.map((t) => t.slug));
const serviceSlugs = new Set(servicePages.map((s) => s.slug));

export function proxy(request: NextRequest) {
  const [, section, slug] = request.nextUrl.pathname.split("/");
  const known = section === "tours" ? tourSlugs.has(slug) : serviceSlugs.has(slug);
  if (!known) {
    return NextResponse.rewrite(new URL("/page-not-found", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/tours/:slug", "/services/:slug"],
};
