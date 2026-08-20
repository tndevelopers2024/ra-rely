import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import CardGrid from "@/components/CardGrid";
import Card from "@/components/Card";
import StepGrid from "@/components/StepGrid";
import BulletList from "@/components/BulletList";
import Callout from "@/components/Callout";
import CtaBand from "@/components/CtaBand";
import ImageBand from "@/components/ImageBand";
import Button from "@/components/Button";
import { pageMetadata } from "@/lib/metadata";
import styles from "./page.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Finance operations and advisory support | Rely Advisory Group",
  description:
    "Improve accounts payable, receivables, finance processes and reporting with practical support for growing Australian businesses.",
  path: "/",
});

const PROBLEMS = [
  {
    title: "Slow customer payments",
    body: "Overdue invoices and inconsistent follow-up are putting unnecessary pressure on cash flow.",
  },
  {
    title: "Time-consuming supplier administration",
    body: "Invoice processing, approvals and payment preparation consume valuable internal time.",
  },
  {
    title: "Limited financial visibility",
    body: "Reports arrive late, rely on manual spreadsheets or do not explain what action management should take.",
  },
  {
    title: "Processes that depend on individuals",
    body: "Critical activities sit in inboxes, spreadsheets and undocumented knowledge, creating avoidable business risk.",
  },
];

const SOLUTIONS = [
  {
    title: "Accounts Payable",
    body: "Create a more controlled, visible and efficient supplier payment process.",
    href: "/solutions/accounts-payable",
  },
  {
    title: "Accounts Receivable",
    body: "Improve invoicing discipline, debtor follow-up and cash collection visibility.",
    href: "/solutions/accounts-receivable",
  },
  {
    title: "Finance Process Improvement",
    body: "Remove bottlenecks, clarify controls and design processes that can scale.",
    href: "/solutions/process-improvement",
  },
  {
    title: "Reporting and Business Insights",
    body: "Turn financial information into accessible dashboards, commentary and management action.",
    href: "/solutions/reporting-insights",
  },
];

const STEPS = [
  {
    title: "Understand",
    body: "We review your systems, transaction volumes, workflows and priorities.",
  },
  {
    title: "Stabilise",
    body: "We clarify responsibilities, document processes and address immediate gaps.",
  },
  {
    title: "Improve",
    body: "We simplify workflows, strengthen controls and introduce suitable reporting or automation.",
  },
  {
    title: "Support",
    body: "We deliver reliable ongoing support and regularly review performance and priorities.",
  },
];

const OUTCOMES = [
  "Improve cash flow through structured invoicing, follow-up and debtor visibility.",
  "Reduce finance administration so business owners and internal teams can focus on customers and growth.",
  "Strengthen financial controls through clear responsibilities, documented workflows and appropriate reviews.",
  "Gain better visibility through practical dashboards and management reporting.",
  "Scale finance support flexibly as transaction volumes and business complexity increase.",
];

const WHY = [
  "A consistent Australian point of contact who understands your business.",
  "Disciplined delivery supported by documented processes and agreed responsibilities.",
  "Flexible services that can expand as your business grows.",
  "Reporting presented as insights, actions and implications, not simply accounting outputs.",
  "A collaborative approach that complements your accountant and existing team.",
];

export default function HomePage() {
  return (
    <>
      <Hero
        variant="full"
        eyebrow="Finance operations and business insight"
        titleLines={["Better finance operations.", "Clearer business decisions."]}
        sub="Rely Advisory Group helps growing Australian businesses improve accounts payable, strengthen receivables, streamline finance processes and gain clearer visibility of performance, without the cost of building a large internal finance team."
        primary={{
          label: "Book a Free Finance Operations Review",
          href: "/book-a-review",
        }}
        secondary={{ label: "Explore our solutions", href: "/solutions" }}
        meta={[
          "Australian oversight",
          "Flexible support",
          "Secure processes",
          "Actionable insights",
        ]}
      />

      <Section surface="cloud" labelledBy="problems-heading">
        <SectionHeading
          id="problems-heading"
          eyebrow="The pressure points"
          title="Is your finance function keeping pace with your business?"
        />
        <CardGrid columns={2}>
          {PROBLEMS.map((item, i) => (
            <Card key={item.title} index={i} {...item} />
          ))}
        </CardGrid>
      </Section>

      <Section labelledBy="solutions-heading">
        <SectionHeading
          id="solutions-heading"
          eyebrow="Our solutions"
          title="Practical finance support built around your business"
        />
        <CardGrid columns={2}>
          {SOLUTIONS.map((item, i) => (
            <Card key={item.title} index={i} {...item} />
          ))}
        </CardGrid>
        <div className={styles.gridAction}>
          <Button href="/solutions" variant="line">
            View all solutions
          </Button>
        </div>
      </Section>

      {/* TODO: shot required — an Australian SME finance team reviewing a
          management report on screen in a real workspace. Neutral brand-toned
          placeholder until the photography is commissioned. */}
      <ImageBand
        src="/placeholder-finance-workspace.png"
        alt="Placeholder for a photograph of an Australian business finance team reviewing management reporting"
      />

      <Section labelledBy="outcomes-heading">
        <SectionHeading
          id="outcomes-heading"
          eyebrow="The outcome"
          title="More than completed transactions"
        />
        <BulletList items={OUTCOMES} />
      </Section>

      <Section surface="cloud" labelledBy="process-heading">
        <SectionHeading
          id="process-heading"
          eyebrow="Our approach"
          title="How Rely works"
        />
        <StepGrid steps={STEPS} />
      </Section>

      <Section labelledBy="why-heading">
        <SectionHeading
          id="why-heading"
          eyebrow="Why Rely"
          title="Why businesses choose Rely"
        />
        <BulletList items={WHY} columns={2} />
      </Section>

      <Section surface="ivory">
        <Callout
          title="Not sure where to begin?"
          body="A free Finance Operations Review identifies immediate pressure points, practical improvements and the most appropriate level of support."
          headingLevel="h2"
          tone="cloud"
        />
      </Section>

      <CtaBand
        title="Book your free review"
        body="No obligation. A focused 30-minute conversation about your current finance operations."
        ctaLabel="Book a Free Finance Operations Review"
        ctaHref="/book-a-review"
      />
    </>
  );
}
