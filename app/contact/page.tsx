import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { pageMetadata } from "@/lib/metadata";
import { PLACEHOLDER } from "@/lib/site";
import styles from "./page.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Contact Rely Advisory Group",
  description:
    "Contact Rely Advisory Group about finance operations support, reporting, process improvement or accountant partnerships.",
  path: "/contact",
});

/** Unresolved client details render as visible placeholders — see PLACEHOLDERS.md. */
const DETAILS: { label: string; value: string; pending: boolean }[] = [
  { label: "Email", value: PLACEHOLDER.email, pending: true },
  { label: "Telephone", value: PLACEHOLDER.telephone, pending: true },
  { label: "Location", value: PLACEHOLDER.location, pending: false },
  { label: "Business hours", value: PLACEHOLDER.hours, pending: true },
];

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Contact Rely"
        titleLines={[
          "Let’s discuss what is slowing",
          "your finance operation down",
        ]}
        sub="Tell us briefly what you are trying to improve. We will respond with the most appropriate next step."
      />

      <Section surface="cloud" labelledBy="details-heading">
        <SectionHeading
          id="details-heading"
          eyebrow="Contact details"
          title="How to reach Rely"
        />
        <dl className={styles.details}>
          {DETAILS.map((item) => (
            <div key={item.label} className={styles.row} data-reveal>
              <dt className={styles.term}>{item.label}</dt>
              <dd className={styles.value}>
                {item.pending ? (
                  <span className={styles.pending} data-placeholder="true">
                    {item.value}
                  </span>
                ) : (
                  item.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section labelledBy="enquiry-heading">
        <SectionHeading
          id="enquiry-heading"
          eyebrow="Send a message"
          title="General enquiry"
          intro="Tell us briefly what you are trying to improve. We will respond with the most appropriate next step."
        />
        <ContactForm />
      </Section>
    </>
  );
}
