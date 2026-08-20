import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import CardGrid from "@/components/CardGrid";
import Card from "@/components/Card";
import Callout from "@/components/Callout";
import CtaBand from "@/components/CtaBand";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Outsourced finance solutions for Australian SMEs | Rely",
  description:
    "Flexible accounts payable, receivables, process improvement and business reporting support designed for growing businesses.",
  path: "/solutions",
});

const SOLUTIONS = [
  {
    title: "Accounts Payable Support",
    body: "Improve supplier invoice processing, approvals, payment preparation and payable visibility.",
    href: "/solutions/accounts-payable",
  },
  {
    title: "Accounts Receivable Support",
    body: "Improve billing administration, debtor follow-up, receipt allocation and collection reporting.",
    href: "/solutions/accounts-receivable",
  },
  {
    title: "Finance Process Improvement",
    body: "Map current workflows, remove duplication, clarify controls and reduce spreadsheet dependence.",
    href: "/solutions/process-improvement",
  },
  {
    title: "Reporting and Business Insights",
    body: "Develop meaningful management reports, KPI dashboards and cash-flow visibility.",
    href: "/solutions/reporting-insights",
  },
];

const ENGAGEMENTS = [
  {
    title: "Focused support",
    body: "One defined process, agreed monthly volumes and standard reporting.",
  },
  {
    title: "Connected finance operations",
    body: "Combined AP and AR support with reconciliations, controls and management visibility.",
  },
  {
    title: "Finance operations partner",
    body: "Integrated support, advanced reporting, process improvement and regular performance reviews.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <Hero
        eyebrow="Flexible support. Practical outcomes."
        titleLines={["Finance solutions that", "grow with your business"]}
        sub="Choose support for one process or build an integrated finance operations service. Every engagement is designed around your systems, transaction volumes, internal capability and business priorities."
        primary={{ label: "Discuss your requirements", href: "/contact" }}
      />

      <Section labelledBy="choose-heading">
        <SectionHeading
          id="choose-heading"
          eyebrow="Our solutions"
          title="Choose the support you need"
        />
        <CardGrid columns={2}>
          {SOLUTIONS.map((item, i) => (
            <Card key={item.title} index={i} {...item} />
          ))}
        </CardGrid>
      </Section>

      <Section surface="ivory">
        <Callout
          title="Start with one function. Expand when the value is clear."
          body="Rely can support a defined operational process, provide temporary capacity during a period of change, or become an ongoing finance operations partner. The service can evolve without forcing the business into an oversized package."
          headingLevel="h2"
          tone="cloud"
        />
      </Section>

      <Section labelledBy="engagements-heading">
        <SectionHeading
          id="engagements-heading"
          eyebrow="How engagements are shaped"
          title="Typical engagement options"
        />
        <CardGrid columns={3}>
          {ENGAGEMENTS.map((item, i) => (
            <Card key={item.title} index={i} {...item} />
          ))}
        </CardGrid>
      </Section>

      <CtaBand
        title="Book a Finance Operations Review"
        body="A focused 30-minute conversation about your current finance operations."
        ctaLabel="Book a Finance Operations Review"
        ctaHref="/book-a-review"
      />
    </>
  );
}
