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

export const metadata: Metadata = pageMetadata({
  title: "Outsourced accounts payable support Australia | Rely",
  description:
    "Create a controlled, visible supplier invoice and payment process with flexible accounts payable support.",
  path: "/solutions/accounts-payable",
});

const PAIN_POINTS = [
  "Invoices are spread across personal inboxes, shared drives and accounting systems.",
  "Approvals are delayed because responsibilities are unclear.",
  "Duplicate or incorrect invoices are difficult to identify.",
  "Supplier statements are not routinely reconciled.",
  "Management lacks visibility of upcoming payments and short-term cash requirements.",
  "Senior staff spend too much time resolving routine processing issues.",
];

const SERVICES = [
  {
    title: "Invoice administration",
    body: "Capture, organise and process supplier invoices under agreed procedures.",
  },
  {
    title: "Validation and coding support",
    body: "Check key invoice details and prepare coding information in line with the approved process.",
  },
  {
    title: "Approval workflow support",
    body: "Route invoices to authorised approvers and track outstanding actions.",
  },
  {
    title: "Payment preparation",
    body: "Prepare scheduled payment information for authorised client approval. Rely does not independently release client funds.",
  },
  {
    title: "Supplier reconciliation",
    body: "Support supplier statement reconciliation and resolve identified discrepancies.",
  },
  {
    title: "AP reporting",
    body: "Provide aged payable, upcoming payment and exception reporting for management review.",
  },
];

const CONTROLS = [
  "Documented approval authorities",
  "Separation between preparation and client authorisation",
  "Clear audit trail and supporting documentation",
  "Exception and duplicate checks",
  "Defined escalation points",
  "Regular reconciliation and service review",
];

export default function AccountsPayablePage() {
  return (
    <>
      <div className="wrap">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Solutions", href: "/solutions" },
            { label: "Accounts Payable Support" },
          ]}
        />
      </div>

      <Hero
        eyebrow="Accounts payable"
        titleLines={["A more controlled way", "to manage supplier payments"]}
        sub="Rely helps businesses improve the flow of supplier invoices from receipt and validation through approval, payment preparation and reporting."
        primary={{ label: "Review your AP process", href: "/book-a-review" }}
      />

      <Section surface="cloud" labelledBy="ap-problem-heading">
        <SectionHeading
          id="ap-problem-heading"
          eyebrow="The pressure points"
          title="When accounts payable becomes a business problem"
        />
        <BulletList items={PAIN_POINTS} columns={2} />
      </Section>

      <Section labelledBy="ap-services-heading">
        <SectionHeading
          id="ap-services-heading"
          eyebrow="What we deliver"
          title="Accounts payable services"
        />
        <CardGrid columns={3}>
          {SERVICES.map((item, i) => (
            <Card key={item.title} index={i} {...item} />
          ))}
        </CardGrid>
      </Section>

      <Section surface="cloud" labelledBy="ap-controls-heading">
        <SectionHeading
          id="ap-controls-heading"
          eyebrow="Governance"
          title="Controls built into delivery"
        />
        <BulletList items={CONTROLS} columns={2} />
      </Section>

      <Section surface="ivory" labelledBy="ap-result-heading">
        <SectionHeading id="ap-result-heading" title="The result" />
        <Callout
          title="Improved visibility. Fewer surprises."
          body="A disciplined accounts payable process helps the business understand upcoming commitments, reduce avoidable delays and maintain stronger supplier relationships."
          tone="cloud"
        />
      </Section>

      <CtaBand
        title="Book an Accounts Payable Review"
        body="A focused conversation about how supplier invoices move through your business today."
        ctaLabel="Book an Accounts Payable Review"
        ctaHref="/book-a-review"
        secondary={{ label: "See all solutions", href: "/solutions" }}
      />
    </>
  );
}
