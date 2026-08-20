import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Route handlers accept POSTs only; nothing there to crawl.
      disallow: "/api/",
    },
    sitemap: new URL("/sitemap.xml", SITE.url).toString(),
  };
}
