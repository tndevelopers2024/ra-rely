import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import BulletList from "@/components/BulletList";
import BookReviewForm from "@/components/BookReviewForm";
import { pageMetadata } from "@/lib/metadata";
import styles from "./page.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Book a finance operations review | Rely",
  description:
    "Book a focused conversation about accounts payable, receivables, finance processes, reporting and operational priorities.",
  path: "/book-a-review",
});

const DISCUSS = [
  "Your current finance team and operating model",
  "The systems and tools currently used",
  "Invoice and transaction volumes",
  "The most time-consuming or risky activities",
  "Cash-flow and reporting visibility",
  "Immediate priorities and desired outcomes",
];

const RECEIVE = [
  "An initial view of the key finance operations issues",
  "Practical next-step recommendations",
  "A clear indication of whether Rely can help",
  "If appropriate, a proposed scope and engagement approach",
];

export default function BookAReviewPage() {
  return (
    <>
      <Hero
        eyebrow="Free 30-minute review"
        titleLines={[
          "Identify the next practical",
          "improvement in your finance operation",
        ]}
        sub="This focused conversation helps clarify the current pressure points, the business impact and whether Rely is the right fit to assist."
      />

      <Section surface="cloud">
        <div className={styles.twoUp}>
          <div>
            <SectionHeading
              id="discuss-heading"
              eyebrow="The conversation"
              title="What we will discuss"
            />
            <BulletList items={DISCUSS} />
          </div>
          <div>
            <SectionHeading
              id="receive-heading"
              eyebrow="The outcome"
              title="What you will receive"
            />
            <BulletList items={RECEIVE} />
          </div>
        </div>
      </Section>

      <Section labelledBy="form-heading">
        <SectionHeading
          id="form-heading"
          eyebrow="Request your review"
          title="Book a Finance Operations Review"
          intro="No obligation. A focused 30-minute conversation about your current finance operations."
        />
        <BookReviewForm />
      </Section>
    </>
  );
}
