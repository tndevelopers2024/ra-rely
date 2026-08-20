import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import HealthCheck from "@/components/HealthCheck";
import CtaBand from "@/components/CtaBand";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Free finance operations health check | Rely",
  description:
    "Assess the strength of your accounts payable, receivables, finance processes and management reporting in a few minutes.",
  path: "/finance-health-check",
});

export default function FinanceHealthCheckPage() {
  return (
    <>
      <Hero
        eyebrow="Three-minute assessment"
        titleLines={[
          "How ready is your finance",
          "operation to support growth?",
        ]}
        sub="Answer ten practical questions and receive an indicative view of process resilience, control and management visibility."
      />

      <Section labelledBy="assessment-heading">
        <SectionHeading
          id="assessment-heading"
          eyebrow="The assessment"
          title="Assessment questions"
          intro="Your result appears on screen as soon as you finish. Sending it to your inbox is optional."
        />
        <HealthCheck />
      </Section>

      <CtaBand
        title="Turn your result into a plan"
        body="A free Finance Operations Review looks at your actual systems, volumes and priorities."
        ctaLabel="Book a Finance Operations Review"
        ctaHref="/book-a-review"
        secondary={{ label: "See all solutions", href: "/solutions" }}
      />
    </>
  );
}
