import type { Metadata } from "next";
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
  title: "Finance operations support for accounting firms | Rely",
  description:
    "Extend client support with reliable AP, AR, reporting and finance process services that complement your accounting practice.",
  path: "/for-accountants",
});

const WHY = [
  "Support clients whose operational finance needs have grown beyond basic bookkeeping.",
  "Improve the quality and timeliness of records received by the practice.",
  "Expand client support without immediately recruiting another internal team.",
  "Retain visibility through agreed reporting and communication protocols.",
  "Create referral or delivery revenue under a transparent commercial arrangement.",
];

const MODELS = [
  {
    title: "Referral partner",
    body: "The accountant introduces the client. Rely contracts directly with the client and keeps the accountant appropriately informed.",
  },
  {
    title: "Delivery partner",
    body: "Rely completes defined finance operations while the accountant retains the primary advisory relationship.",
  },
  {
    title: "White-label support",
    body: "Rely operates behind the practice brand under agreed confidentiality, service and communication standards.",
  },
];

const SERVICES = [
  "Accounts payable and supplier administration",
  "Accounts receivable and customer follow-up",
  "Finance workflow documentation and improvement",
  "Management reporting and dashboards",
  "Short-term capacity during growth, leave or transition",
  "Operational preparation to support cleaner month-end and year-end processes",
];

const SAFEGUARDS = [
  "Written role and scope boundaries",
  "No direct marketing outside the agreed relationship",
  "Confidentiality and data-access controls",
  "Escalation protocols",
  "Transparent fee or commission arrangements",
  "Regulated services delivered only by appropriately registered practitioners",
];

export default function ForAccountantsPage() {
  return (
    <>
      <Hero
        eyebrow="For accountants and advisers"
        titleLines={["Reliable finance operations", "support for your clients"]}
        sub="Rely works alongside accounting firms to provide practical AP, AR, reporting and process support, allowing accountants to remain focused on tax, compliance and higher-value advisory work."
        primary={{ label: "Discuss a partnership", href: "/contact" }}
      />

      {/* Scope boundary from the content doc — placed before the pitch. */}
      <Section surface="ivory">
        <Callout
          title="We complement your services"
          body="Rely does not seek to replace the client’s accountant or compete for tax, audit or regulated compliance work."
          headingLevel="h2"
          tone="cloud"
        />
      </Section>

      <Section labelledBy="why-partner-heading">
        <SectionHeading
          id="why-partner-heading"
          eyebrow="The rationale"
          title="Why accounting firms partner with Rely"
        />
        <BulletList items={WHY} columns={2} />
      </Section>

      <Section surface="cloud" labelledBy="models-heading">
        <SectionHeading
          id="models-heading"
          eyebrow="Ways to work together"
          title="Partnership models"
        />
        <CardGrid columns={3}>
          {MODELS.map((item, i) => (
            <Card key={item.title} index={i} {...item} />
          ))}
        </CardGrid>
      </Section>

      <Section labelledBy="partner-services-heading">
        <SectionHeading
          id="partner-services-heading"
          eyebrow="What we deliver"
          title="Services available to clients"
        />
        <BulletList items={SERVICES} columns={2} />
      </Section>

      <Section surface="cloud" labelledBy="safeguards-heading">
        <SectionHeading
          id="safeguards-heading"
          eyebrow="Protecting the relationship"
          title="Partner safeguards"
        />
        <BulletList items={SAFEGUARDS} columns={2} />
      </Section>

      <CtaBand
        title="Book a Partner Conversation"
        body="A focused discussion about referral, delivery and white-label arrangements."
        ctaLabel="Book a Partner Conversation"
        ctaHref="/book-a-review"
        secondary={{ label: "See all solutions", href: "/solutions" }}
      />
    </>
  );
}
