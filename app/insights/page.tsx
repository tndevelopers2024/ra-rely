import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import CardGrid from "@/components/CardGrid";
import Card from "@/components/Card";
import CtaBand from "@/components/CtaBand";
import { pageMetadata } from "@/lib/metadata";
import { getArticles, isDraft } from "@/lib/insights";

export const metadata: Metadata = pageMetadata({
  title: "Finance operations insights for Australian SMEs | Rely",
  description:
    "Practical articles, guides and tools for improving cash flow, finance processes, reporting and business visibility.",
  path: "/insights",
});

/**
 * The doc names four featured resources. Only the Health Check exists — the
 * other three are rendered visibly unavailable rather than as links that lead
 * nowhere or promises the business cannot yet keep.
 */
const RESOURCES = [
  {
    title: "Finance Operations Health Check",
    body: "A short assessment that identifies process risk, capacity pressure and reporting gaps.",
    href: "/finance-health-check",
  },
  {
    title: "The Month-End Readiness Checklist",
    body: "A practical checklist to improve consistency before reporting begins.",
    pending: true,
  },
  {
    title: "Debtor Management Playbook",
    body: "A relationship-sensitive approach to invoicing, follow-up, disputes and escalation.",
    pending: true,
  },
  {
    title: "Management Reporting Guide",
    body: "What owners should expect from a useful monthly management pack.",
    pending: true,
  },
];

export default function InsightsPage() {
  const articles = getArticles();

  return (
    <>
      <Hero
        eyebrow="Practical knowledge for growing businesses"
        titleLines={["Finance operations", "made clearer"]}
        sub="Plain-English guidance for business owners, finance teams and accounting partners who want stronger processes, clearer reporting and better commercial decisions."
        primary={{
          label: "Complete the Finance Operations Health Check",
          href: "/finance-health-check",
        }}
      />

      <Section labelledBy="resources-heading">
        <SectionHeading
          id="resources-heading"
          eyebrow="Tools and guides"
          title="Featured resources"
        />
        <CardGrid columns={2}>
          {RESOURCES.map((item, i) => (
            <Card key={item.title} index={i} {...item} />
          ))}
        </CardGrid>
      </Section>

      <Section surface="cloud" labelledBy="articles-heading">
        <SectionHeading
          id="articles-heading"
          eyebrow="Articles"
          title="Launch article plan"
          intro="These articles are scaffolded and awaiting drafting. Each is excluded from search indexing until its body is written and reviewed."
        />
        <CardGrid columns={2}>
          {articles.map((article, i) => (
            <Card
              key={article.slug}
              index={i}
              title={article.title}
              body={
                isDraft(article)
                  ? "Draft — the body of this article has not been written yet."
                  : article.summary
              }
              href={`/insights/${article.slug}`}
            />
          ))}
        </CardGrid>
      </Section>

      <CtaBand
        title="Complete the Finance Operations Health Check"
        body="Answer ten practical questions and receive an indicative view of process resilience, control and management visibility."
        ctaLabel="Complete the Finance Operations Health Check"
        ctaHref="/finance-health-check"
        secondary={{ label: "See all solutions", href: "/solutions" }}
      />
    </>
  );
}
