import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import CardGrid from "@/components/CardGrid";
import Card from "@/components/Card";
import BulletList from "@/components/BulletList";
import Manifesto from "@/components/Manifesto";
import CtaBand from "@/components/CtaBand";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Management reporting and Power BI dashboards | Rely",
  description:
    "Turn financial and operational data into clear management reporting, practical dashboards and decision-focused business insight.",
  path: "/solutions/reporting-insights",
});

const PRINCIPLES = [
  "Clear executive summary focused on material movements and priorities.",
  "Performance against budget, forecast or prior period.",
  "Cash-flow, debtor and creditor visibility.",
  "Revenue, margin and customer or service trends where data supports the analysis.",
  "Operational KPIs linked to business objectives.",
  "Action owners and next steps, not commentary alone.",
];

const SERVICES = [
  {
    title: "Monthly management packs",
    body: "Consistent, concise reporting for owners and leadership teams.",
  },
  {
    title: "Cash-flow visibility",
    body: "Practical short-term views of expected receipts, commitments and pressure points.",
  },
  {
    title: "Debtor and creditor dashboards",
    body: "Ageing, concentration, trends, actions and exceptions.",
  },
  {
    title: "Power BI dashboards",
    body: "Interactive reporting designed around management questions and accessible KPIs.",
  },
  {
    title: "Budget versus actual analysis",
    body: "Explain significant movements and focus attention on controllable drivers.",
  },
  {
    title: "Insight commentary",
    body: "Convert data into implications, risks, opportunities and recommended actions.",
  },
];

export default function ReportingInsightsPage() {
  return (
    <>
      <div className="wrap">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Solutions", href: "/solutions" },
            { label: "Reporting and Business Insights" },
          ]}
        />
      </div>

      <Hero
        eyebrow="Reporting and business insights"
        titleLines={["Move from financial", "information to business action"]}
        sub="Rely converts operational and financial data into reporting that helps management understand what changed, why it matters and what should happen next."
        primary={{
          label: "Improve your management reporting",
          href: "/book-a-review",
        }}
      />

      <Section surface="cloud" labelledBy="ri-principles-heading">
        <SectionHeading
          id="ri-principles-heading"
          eyebrow="What good looks like"
          title="Reporting designed for decisions"
        />
        <BulletList items={PRINCIPLES} columns={2} />
      </Section>

      <Section labelledBy="ri-services-heading">
        <SectionHeading
          id="ri-services-heading"
          eyebrow="What we deliver"
          title="Reporting services"
        />
        <CardGrid columns={3}>
          {SERVICES.map((item, i) => (
            <Card key={item.title} index={i} {...item} />
          ))}
        </CardGrid>
      </Section>

      {/* The one pinned word-by-word set piece on the site. */}
      <Manifesto
        id="ri-principle-heading"
        eyebrow="The Rely reporting principle"
        title="Data → Insight → Recommendation"
        text="A useful report should not simply show what happened. It should help leaders decide what to do next."
      />

      <CtaBand
        title="Request a Reporting Review"
        body="A focused conversation about what your management reporting should tell you."
        ctaLabel="Request a Reporting Review"
        ctaHref="/book-a-review"
        secondary={{ label: "See all solutions", href: "/solutions" }}
      />
    </>
  );
}
