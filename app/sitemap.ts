import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { getArticles, isDraft } from "@/lib/insights";

/** Every URL derives from SITE.url — there is one production domain. */
const ROUTES = [
  "/",
  "/solutions",
  "/solutions/accounts-payable",
  "/solutions/accounts-receivable",
  "/solutions/process-improvement",
  "/solutions/reporting-insights",
  "/industries",
  "/how-we-work",
  "/for-accountants",
  "/about",
  "/insights",
  "/faq",
  "/finance-health-check",
  "/book-a-review",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages = ROUTES.map((route) => ({
    url: new URL(route, SITE.url).toString(),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: route === "/" ? 1 : 0.7,
  }));

  // Undrafted article stubs are noindex, so they stay out of the sitemap too.
  const articles = getArticles()
    .filter((article) => !isDraft(article))
    .map((article) => ({
      url: new URL(`/insights/${article.slug}`, SITE.url).toString(),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

  return [...pages, ...articles];
}
