import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import CardGrid from "@/components/CardGrid";
import Card from "@/components/Card";
import BulletList from "@/components/BulletList";
import CtaBand from "@/components/CtaBand";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Finance process improvement for SMEs | Rely",
  description:
    "Simplify finance workflows, strengthen controls and reduce manual administration with practical process improvement support.",
  path: "/solutions/process-improvement",
});

const SIGNS = [
  "The same information is entered into multiple systems.",
  "Approvals depend on email chains and follow-up.",
  "Month-end activity is stressful and unpredictable.",
  "No one has documented the complete process.",
  "Key tasks stop when one employee is away.",
  "Reports require extensive manual preparation.",
  "The business has added people or locations without redesigning finance workflows.",
];

const SCOPE = [
  {
    title: "Current-state mapping",
    body: "Document systems, hand-offs, responsibilities, controls and pain points.",
  },
  {
    title: "Risk and gap assessment",
    body: "Identify control gaps, duplication, delays and concentration of knowledge.",
  },
  {
    title: "Future-state design",
    body: "Create a practical workflow with clearer roles, approvals and escalation points.",
  },
  {
    title: "Automation opportunities",
    body: "Identify suitable system rules, integrations and low-risk automation options.",
  },
  {
    title: "Standard operating procedures",
    body: "Develop clear process documents, checklists and responsibility matrices.",
  },
  {
    title: "Implementation support",
    body: "Help embed the revised process through staged transition and review.",
  },
];

const DELIVERABLES = [
  "Current-state process map",
  "Prioritised issue and opportunity register",
  "Future-state workflow",
  "Responsibility and approval matrix",
  "Standard operating procedures",
  "Implementation roadmap",
  "Measures to track the improvement",
];

export default function ProcessImprovementPage() {
  return (
    <>
      <div className="wrap">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Solutions", href: "/solutions" },
            { label: "Finance Process Improvement" },
          ]}
        />
      </div>

      <Hero
        eyebrow="Finance process improvement"
        titleLines={["Remove bottlenecks before", "they become business risks"]}
        sub="Rely reviews how work actually moves through your finance function, then redesigns the process to be clearer, more controlled and easier to scale."
        primary={{ label: "Request a process review", href: "/book-a-review" }}
      />

      <Section surface="cloud" labelledBy="pi-signs-heading">
        <SectionHeading
          id="pi-signs-heading"
          eyebrow="The pressure points"
          title="Signs the process needs attention"
        />
        <BulletList items={SIGNS} columns={2} />
      </Section>

      <Section labelledBy="pi-scope-heading">
        <SectionHeading
          id="pi-scope-heading"
          eyebrow="What we deliver"
          title="What the review covers"
        />
        <CardGrid columns={3}>
          {SCOPE.map((item, i) => (
            <Card key={item.title} index={i} {...item} />
          ))}
        </CardGrid>
      </Section>

      <Section surface="cloud" labelledBy="pi-deliverables-heading">
        <SectionHeading
          id="pi-deliverables-heading"
          eyebrow="What you receive"
          title="Deliverables"
        />
        <BulletList items={DELIVERABLES} columns={2} />
      </Section>

      <CtaBand
        title="Discuss a Finance Process Review"
        body="A focused conversation about how work moves through your finance function today."
        ctaLabel="Discuss a Finance Process Review"
        ctaHref="/book-a-review"
        secondary={{ label: "See all solutions", href: "/solutions" }}
      />
    </>
  );
}
