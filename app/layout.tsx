import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Closing from "@/components/Closing";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollReveals from "@/components/ScrollReveals";
import { SITE } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

/* Rely's display face is a geometric sans, not a serif — the variable is
   named for its role so no module mistakes it for a serif stack. */
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Finance operations and advisory support | Rely Advisory Group",
    template: "%s",
  },
  description:
    "Improve accounts payable, receivables, finance processes and reporting with practical support for growing Australian businesses.",
  icons: { icon: "/logo-by-relly.png" },
};

/** Sitewide structured data. No Review or AggregateRating — nothing is verified. */
const organisationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/logo-by-relly.png`,
  slogan: "Accounting. Strategy. Simplified.",
  description:
    "Finance operations, process improvement and management reporting support for growing Australian businesses and their accounting partners.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sydney",
    addressRegion: "NSW",
    addressCountry: "AU",
  },
  areaServed: { "@type": "Country", name: "Australia" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU" className={`${inter.variable} ${montserrat.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <Nav />
        <SmoothScroll>
          <main id="main">{children}</main>
        </SmoothScroll>
        <Closing />
        <ScrollReveals />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organisationSchema),
          }}
        />
      </body>
    </html>
  );
}
