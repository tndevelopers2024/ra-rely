import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Accordion, { type AccordionItem } from "@/components/Accordion";
import CtaBand from "@/components/CtaBand";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Frequently asked questions | Rely Advisory Group",
  description:
    "Answers about Rely’s finance operations services, onboarding, systems, security, pricing and relationship with accountants.",
  path: "/faq",
});

/**
 * The doc's ten questions, verbatim. Two "answers" are instructions to the
 * implementer rather than answers to a visitor — they are marked pending and
 * kept out of the structured data below, so search engines are never handed
 * "The website should list only verified capability" as an answer.
 */
const FAQS: AccordionItem[] = [
  {
    question: "Is Rely an accounting firm?",
    answer:
      "Rely is positioned as a finance operations, process improvement and reporting provider. Regulated tax or BAS services are delivered only where appropriately authorised or through the client’s registered practitioner.",
  },
  {
    question: "Can Rely work with our existing accountant?",
    answer:
      "Yes. The preferred model is collaborative. Rely can manage agreed operational activities while the accountant retains tax, compliance and advisory responsibilities.",
  },
  {
    question: "Do we need to outsource our entire finance function?",
    answer:
      "No. Many engagements begin with one priority process, such as accounts receivable or management reporting.",
  },
  {
    question: "Which systems can Rely support?",
    answer:
      "The website should list only verified capability. Initial platforms may include Xero, MYOB, QuickBooks Online, Microsoft Excel, Microsoft 365 and Power BI.",
    pending: true,
  },
  {
    question: "Will Rely make payments from our bank account?",
    answer:
      "Rely may prepare payment information under the agreed process, but final approval and release should remain with authorised client personnel.",
  },
  {
    question: "How is pricing determined?",
    answer:
      "Pricing reflects transaction volumes, number of entities, process complexity, service frequency, systems, turnaround requirements and reporting scope.",
  },
  {
    question: "Is offshore support used?",
    answer:
      "The final website must accurately describe the approved delivery model. If offshore personnel may access client information, this should be disclosed transparently with the relevant security and privacy controls.",
    pending: true,
  },
  {
    question: "How long does onboarding take?",
    answer:
      "Timing depends on scope and process readiness. Rely uses discovery, design, controlled transition and review before steady-state delivery.",
  },
  {
    question: "Can Rely help temporarily?",
    answer:
      "Yes. Defined short-term support may be suitable during growth, recruitment, employee leave, system transition or process remediation.",
  },
  {
    question: "How do we start?",
    answer:
      "Book a free Finance Operations Review. Rely will clarify the issue, desired outcome and whether a scoped engagement is appropriate.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.filter((faq) => !faq.pending).map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function FaqPage() {
  return (
    <>
      <Hero
        eyebrow="Common questions"
        titleLines={["What businesses ask", "before working with Rely"]}
        sub="Answers about Rely’s finance operations services, onboarding, systems, security, pricing and relationship with accountants."
        primary={{ label: "Book a Finance Operations Review", href: "/book-a-review" }}
      />

      <Section labelledBy="faq-heading">
        <SectionHeading
          id="faq-heading"
          eyebrow="Before you get in touch"
          title="Frequently asked questions"
        />
        <Accordion items={FAQS} />
      </Section>

      <CtaBand
        title="Still deciding where to start?"
        body="Book a free Finance Operations Review. Rely will clarify the issue, desired outcome and whether a scoped engagement is appropriate."
        ctaLabel="Book a Finance Operations Review"
        ctaHref="/book-a-review"
        secondary={{ label: "See all solutions", href: "/solutions" }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
