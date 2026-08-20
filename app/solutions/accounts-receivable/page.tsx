import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import CardGrid from "@/components/CardGrid";
import Card from "@/components/Card";
import BulletList from "@/components/BulletList";
import Callout from "@/components/Callout";
import CtaBand from "@/components/CtaBand";
import { pageMetadata } from "@/lib/metadata";
import styles from "./page.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Accounts receivable support Australia | Rely",
  description:
    "Improve invoicing administration, overdue account follow-up and cash collection visibility with structured receivables support.",
  path: "/solutions/accounts-receivable",
});

const PAIN_POINTS = [
  "Invoices are raised later than they should be.",
  "Customer statements are inconsistent or not issued.",
  "Follow-up depends on the availability of the owner or a senior employee.",
  "Disputes remain unresolved because there is no clear action owner.",
  "Payments are received but not promptly allocated.",
  "Management can see aged debt but not the reasons, actions or likely collection timing.",
];

const SERVICES = [
  {
    title: "Billing support",
    body: "Prepare and distribute invoices from approved source information and agreed billing schedules.",
  },
  {
    title: "Receipt allocation",
    body: "Support accurate and timely allocation of customer receipts.",
  },
  {
    title: "Customer statements",
    body: "Prepare and distribute statements on an agreed cycle.",
  },
  {
    title: "Professional follow-up",
    body: "Conduct structured, relationship-sensitive reminders under an approved communication approach.",
  },
  {
    title: "Dispute tracking",
    body: "Record issues, assign actions and monitor resolution with the relevant internal owner.",
  },
  {
    title: "Receivables reporting",
    body: "Provide ageing, collection activity, risk and action reporting for management.",
  },
];

export default function AccountsReceivablePage() {
  return (
    <>
      <div className="wrap">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Solutions", href: "/solutions" },
            { label: "Accounts Receivable Support" },
          ]}
        />
      </div>

      <Hero
        eyebrow="Accounts receivable"
        titleLines={["Turn completed work into", "collected revenue sooner"]}
        sub="Rely introduces consistent invoicing, professional follow-up and practical debtor reporting so more revenue moves from the ledger into the bank."
        primary={{
          label: "Review your receivables process",
          href: "/book-a-review",
        }}
      />

      <Section surface="cloud" labelledBy="ar-problem-heading">
        <SectionHeading
          id="ar-problem-heading"
          eyebrow="The pressure points"
          title="Common receivables pressure points"
        />
        <BulletList items={PAIN_POINTS} columns={2} />
      </Section>

      <Section labelledBy="ar-services-heading">
        <SectionHeading
          id="ar-services-heading"
          eyebrow="What we deliver"
          title="Accounts receivable services"
        />
        <CardGrid columns={3}>
          {SERVICES.map((item, i) => (
            <Card key={item.title} index={i} {...item} />
          ))}
        </CardGrid>
      </Section>

      {/* Scope boundary from the content doc — kept prominent, not buried. */}
      <Section surface="cloud" labelledBy="ar-scope-heading">
        <SectionHeading
          id="ar-scope-heading"
          eyebrow="Scope"
          title="A professional approach to collection"
        />
        <p className={styles.scope} data-reveal>
          Rely is not positioned as a debt collection agency. Communications are
          courteous, consistent and aligned with the client&rsquo;s customer
          relationships. Formal debt recovery and legal escalation remain with
          appropriately qualified providers.
        </p>
      </Section>

      <Section surface="ivory" labelledBy="ar-result-heading">
        <SectionHeading id="ar-result-heading" title="The result" />
        <Callout
          title="Better cash-flow discipline"
          body="Consistent billing and follow-up improve visibility, reduce avoidable delays and give management a clearer view of collection risk."
          tone="cloud"
        />
      </Section>

      <CtaBand
        title="Book an Accounts Receivable Review"
        body="A focused conversation about billing discipline, follow-up and debtor visibility."
        ctaLabel="Book an Accounts Receivable Review"
        ctaHref="/book-a-review"
        secondary={{ label: "See all solutions", href: "/solutions" }}
      />
    </>
  );
}
