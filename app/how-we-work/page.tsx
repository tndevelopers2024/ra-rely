import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import ProcessStages from "@/components/ProcessStages";
import CardGrid from "@/components/CardGrid";
import Card from "@/components/Card";
import BulletList from "@/components/BulletList";
import CtaBand from "@/components/CtaBand";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "How Rely delivers outsourced finance support",
  description:
    "Understand Rely Advisory Group’s structured onboarding, secure delivery model, service governance and continuous improvement approach.",
  path: "/how-we-work",
});

const STAGES = [
  {
    title: "Discover",
    points: [
      "Understand the business, systems, stakeholders and priorities.",
      "Review transaction volumes, timing requirements and current pain points.",
      "Clarify what remains with the client, accountant and other providers.",
    ],
  },
  {
    title: "Design",
    points: [
      "Define the service scope and delivery timetable.",
      "Document workflows, approvals, access and escalation points.",
      "Agree reporting, security and quality-review requirements.",
    ],
  },
  {
    title: "Transition",
    points: [
      "Complete controlled knowledge transfer and system setup.",
      "Test the process using an agreed pilot period.",
      "Resolve gaps before moving to steady-state delivery.",
    ],
  },
  {
    title: "Deliver and improve",
    points: [
      "Complete agreed activities under documented procedures.",
      "Provide regular reporting and service communication.",
      "Review exceptions, capacity and improvement opportunities.",
    ],
  },
];

const GOVERNANCE = [
  {
    title: "Named relationship lead",
    body: "A consistent contact responsible for communication, priorities and issue resolution.",
  },
  {
    title: "Documented procedures",
    body: "Agreed workflows reduce dependence on informal knowledge.",
  },
  {
    title: "Client authorisation retained",
    body: "The client retains final approval over payments and material business decisions.",
  },
  {
    title: "Regular review",
    body: "Service outcomes, exceptions, volumes and improvement priorities are reviewed at an agreed frequency.",
  },
];

const SECURITY = [
  "Role-based system access and least-privilege principles",
  "Multi-factor authentication where supported",
  "Approved collaboration and file-sharing tools",
  "Confidentiality obligations for all delivery personnel",
  "No sensitive financial information requested through the public website",
  "Agreed data retention, access removal and incident escalation procedures",
];

export default function HowWeWorkPage() {
  return (
    <>
      <Hero
        eyebrow="Structured from the start"
        titleLines={["A clear, controlled way to", "improve finance operations"]}
        sub="Rely uses a staged approach so responsibilities, controls, communication and expected outcomes are agreed before ongoing delivery begins."
        primary={{
          label: "Start with a Finance Operations Review",
          href: "/book-a-review",
        }}
      />

      <Section labelledBy="stages-heading">
        <SectionHeading
          id="stages-heading"
          eyebrow="The engagement"
          title="How an engagement is staged"
        />
        <ProcessStages stages={STAGES} />
      </Section>

      <Section surface="cloud" labelledBy="governance-heading">
        <SectionHeading
          id="governance-heading"
          eyebrow="Accountability"
          title="Service governance"
        />
        <CardGrid columns={2}>
          {GOVERNANCE.map((item, i) => (
            <Card key={item.title} index={i} {...item} />
          ))}
        </CardGrid>
      </Section>

      <Section labelledBy="security-heading">
        <SectionHeading
          id="security-heading"
          eyebrow="Security"
          title="Secure and responsible delivery"
        />
        <BulletList items={SECURITY} columns={2} />
      </Section>

      <CtaBand
        title="Start with a Finance Operations Review"
        body="A focused conversation about scope, controls and the right level of support."
        ctaLabel="Start with a Finance Operations Review"
        ctaHref="/book-a-review"
        secondary={{ label: "See all solutions", href: "/solutions" }}
      />
    </>
  );
}
