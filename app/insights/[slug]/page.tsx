import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Section from "@/components/Section";
import CtaBand from "@/components/CtaBand";
import PlaceholderBlock from "@/components/PlaceholderBlock";
import { pageMetadata } from "@/lib/metadata";
import { getArticle, getArticles, isDraft } from "@/lib/insights";
import styles from "./page.module.css";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  const base = pageMetadata({
    title: article.title,
    // No summary is written yet, so nothing is invented for the description.
    description:
      article.summary ||
      "Practical guidance on finance operations from Rely Advisory Group.",
    path: `/insights/${article.slug}`,
  });

  // A stub must never be indexed — there is no article behind it yet.
  return isDraft(article) ? { ...base, robots: { index: false, follow: true } } : base;
}

/** The section order the content doc specifies for every article. */
const SECTIONS = [
  "Short executive summary",
  "The business problem",
  "Practical steps",
  "Common mistakes",
  "Recommended next action",
];

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const draft = isDraft(article);

  return (
    <>
      <div className="wrap">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Insights", href: "/insights" },
            { label: article.title },
          ]}
        />
      </div>

      <article>
        <Section>
          <header className={styles.head}>
            <p className="eyebrow">Insight</p>
            <h1 className={`display ${styles.title}`}>{article.title}</h1>
            <dl className={styles.byline}>
              <div className={styles.bylineRow}>
                <dt>Author</dt>
                <dd>
                  <span className={styles.pendingValue} data-placeholder="true">
                    {article.author}
                  </span>
                </dd>
              </div>
              <div className={styles.bylineRow}>
                <dt>Reviewed</dt>
                <dd>
                  <span className={styles.pendingValue} data-placeholder="true">
                    {article.reviewed}
                  </span>
                </dd>
              </div>
            </dl>
          </header>

          {draft ? (
            <PlaceholderBlock
              headingLevel="h2"
              title="This article has not been drafted"
              body="The structure below is the article template from the content blueprint. The body carries commercial and regulatory claims, so it is written by Rely, not generated. This page is excluded from search indexing until it is drafted and reviewed."
            />
          ) : null}

          <div className={styles.body}>
            {SECTIONS.map((section) => (
              <section key={section} className={styles.sectionStub}>
                <h2 className={styles.sectionTitle}>{section}</h2>
                {draft && (
                  <p className={styles.todo}>To be drafted.</p>
                )}
              </section>
            ))}
          </div>

          <p className={styles.related}>
            Related service:{" "}
            <Link href={article.relatedService} className="u-link">
              {article.relatedServiceLabel}
              <span aria-hidden="true">→</span>
            </Link>
          </p>
        </Section>
      </article>

      <CtaBand
        title="Complete the Finance Operations Health Check"
        body="Answer ten practical questions and receive an indicative view of process resilience, control and management visibility."
        ctaLabel="Complete the Finance Operations Health Check"
        ctaHref="/finance-health-check"
        secondary={{ label: "Read more insights", href: "/insights" }}
      />
    </>
  );
}
