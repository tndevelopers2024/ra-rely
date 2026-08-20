import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import CardGrid from "@/components/CardGrid";
import Card from "@/components/Card";
import BulletList from "@/components/BulletList";
import PlaceholderBlock from "@/components/PlaceholderBlock";
import CtaBand from "@/components/CtaBand";
import { pageMetadata } from "@/lib/metadata";
import styles from "./page.module.css";

export const metadata: Metadata = pageMetadata({
  title: "About Rely Advisory Group",
  description:
    "Learn how Rely combines reliable finance operations, process improvement and decision-focused reporting for Australian businesses.",
  path: "/about",
});

const DIFFERENTIATORS = [
  {
    title: "Operationally grounded",
    body: "Recommendations are designed to work in the client’s real systems and day-to-day environment.",
  },
  {
    title: "Insight led",
    body: "Reporting focuses on implications and actions, not simply data production.",
  },
  {
    title: "Collaborative",
    body: "Rely works with owners, internal teams and existing accountants rather than operating in isolation.",
  },
  {
    title: "Designed to scale",
    body: "Services can begin with one process and expand as needs, volumes and confidence grow.",
  },
];

const VALUES = [
  "Reliability: do what has been agreed, communicate early and maintain consistent standards.",
  "Clarity: simplify complex information and make responsibilities visible.",
  "Integrity: protect client information, maintain scope boundaries and escalate concerns.",
  "Practicality: recommend changes that fit the business, not theory alone.",
  "Improvement: look for sustainable ways to reduce effort, risk and uncertainty.",
];

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="Dependable delivery. Practical advice."
        titleLines={["Finance support", "businesses can rely on"]}
        sub="Rely Advisory Group was created to help growing businesses bring greater structure, visibility and commercial value to their day-to-day finance operations."
        primary={{ label: "Meet with Rely", href: "/book-a-review" }}
      />

      <Section labelledBy="purpose-heading">
        <SectionHeading
          id="purpose-heading"
          eyebrow="Why Rely exists"
          title="Our purpose"
        />
        <p className={styles.lead} data-reveal>
          Many businesses reach a point where informal processes, spreadsheets
          and fragmented responsibilities no longer provide the control or
          insight management needs. Rely helps close that gap with practical
          operational support, clearer processes and reporting designed for
          decisions.
        </p>
      </Section>

      <Section surface="cloud" labelledBy="different-heading">
        <SectionHeading
          id="different-heading"
          eyebrow="The difference"
          title="What makes Rely different"
        />
        <CardGrid columns={2}>
          {DIFFERENTIATORS.map((item, i) => (
            <Card key={item.title} index={i} {...item} />
          ))}
        </CardGrid>
      </Section>

      <Section labelledBy="values-heading">
        <SectionHeading
          id="values-heading"
          eyebrow="How we operate"
          title="Our values"
        />
        <BulletList items={VALUES} />
      </Section>

      {/* The doc defers the founder biography to the client. It stays a visible
          placeholder — no invented experience, qualifications or memberships. */}
      <Section surface="ivory" labelledBy="founder-heading">
        <SectionHeading id="founder-heading" title="Founder profile" />
        <PlaceholderBlock
          title="Insert approved biography"
          body="Include the founder’s experience in customer insights, data analysis, executive reporting, finance operations improvement and Power BI. Add formal qualifications and memberships only when verified. Use a professional headshot and a concise personal statement about why Rely was established."
        />
      </Section>

      <CtaBand
        title="Meet with Rely"
        body="A focused 30-minute conversation about your current finance operations."
        ctaLabel="Meet with Rely"
        ctaHref="/book-a-review"
        secondary={{ label: "See all solutions", href: "/solutions" }}
      />
    </>
  );
}
