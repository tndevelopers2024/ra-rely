import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import StackedBlocks from "@/components/StackedBlocks";
import CtaBand from "@/components/CtaBand";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Finance operations support by industry | Rely",
  description:
    "Practical finance operations and reporting support for professional services, trades, healthcare and growing product businesses.",
  path: "/industries",
});

const INDUSTRIES = [
  {
    title: "Professional services",
    body: "Support for consulting, legal, recruitment, engineering, education and other service firms that need stronger billing discipline, work-in-progress visibility, debtor follow-up and management reporting.",
  },
  {
    title: "Trades, construction and field services",
    body: "Support for invoice processing, subcontractor and supplier administration, customer billing, overdue accounts and practical cash-flow visibility. Engagement scope should reflect the client’s job-management and accounting systems.",
  },
  {
    title: "Healthcare and allied services",
    body: "Structured finance administration and reporting for practices and service providers. Any sector-specific privacy, funding or compliance activities require an agreed control framework and appropriately qualified advice.",
  },
  {
    title: "Retail, wholesale and e-commerce",
    body: "Support for high transaction volumes, supplier payments, receipt allocation, reconciliations and management visibility across sales, margin and working capital.",
  },
  {
    title: "Other growing businesses",
    body: "If a business has outgrown informal processes but is not ready to build a full finance team, Rely can assess the current model and recommend a practical starting point.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <Hero
        eyebrow="Industry-focused support"
        titleLines={["Built around the way", "your business operates"]}
        sub="Every industry has different billing cycles, supplier pressures and performance measures. Rely adapts the operating model and reporting to the realities of the client’s business."
        primary={{
          label: "Discuss your industry and finance challenges",
          href: "/book-a-review",
        }}
      />

      <Section labelledBy="industries-heading">
        <SectionHeading
          id="industries-heading"
          eyebrow="Where Rely works"
          title="Sectors we support"
        />
        <StackedBlocks blocks={INDUSTRIES} headingLevel="h3" />
      </Section>

      <CtaBand
        title="Discuss your industry and finance challenges"
        body="A focused conversation about how your sector's billing cycles and supplier pressures shape the right operating model."
        ctaLabel="Discuss your industry and finance challenges"
        ctaHref="/book-a-review"
        secondary={{ label: "See all solutions", href: "/solutions" }}
      />
    </>
  );
}
