import type { Metadata } from "next";
import { SITE } from "./site";

const OG_IMAGE = {
  url: "/og-rely-advisory-group.png",
  width: 1200,
  height: 630,
  alt: SITE.logoAlt,
};

type PageMeta = {
  /** The doc's SEO title, verbatim. */
  title: string;
  /** The doc's meta description, verbatim. */
  description: string;
  /** Route path, e.g. "/solutions". Canonicals always resolve against
   *  SITE.url — there is exactly one production domain. */
  path: string;
};

export function pageMetadata({ title, description, path }: PageMeta): Metadata {
  const url = new URL(path, SITE.url).toString();

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      locale: "en_AU",
      type: "website",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
