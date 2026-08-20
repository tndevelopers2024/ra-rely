import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import DraftBanner from "@/components/DraftBanner";
import LegalSections, { type LegalSection } from "@/components/LegalSections";
import { pageMetadata } from "@/lib/metadata";
import { PLACEHOLDER } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Website terms and disclaimer | Rely Advisory Group",
  description:
    "Terms governing use of the Rely Advisory Group website and important limitations relating to general information and regulated services.",
  path: "/terms",
});

const SECTIONS: LegalSection[] = [
  {
    heading: "General information only",
    body: "Website content is general information and does not take account of a visitor’s specific objectives, financial position or circumstances. It is not legal, tax, investment or financial product advice.",
  },
  {
    heading: "Regulated services",
    body: "Rely provides finance operations, administrative support, reporting and process improvement services. Tax advice, BAS services and other regulated services are provided only where appropriately authorised or in collaboration with the client’s registered practitioner.",
  },
  {
    heading: "No client relationship",
    body: "Using the website, submitting an enquiry or attending an initial discussion does not create a client relationship. A relationship begins only when written engagement terms are agreed.",
  },
  {
    heading: "Accuracy and availability",
    body: "Rely aims to keep information useful and current but does not warrant that all content is complete, error-free or suitable for every purpose. Website access may be changed or interrupted.",
  },
  {
    heading: "Third-party links",
    body: "Links to third-party services are provided for convenience. Rely is not responsible for third-party content, availability, privacy or security practices.",
  },
  {
    heading: "Intellectual property",
    body: "Unless otherwise stated, website text, brand elements and original resources belong to Rely Advisory Group and may not be reproduced commercially without permission.",
  },
  {
    heading: "Liability",
    body: "To the extent permitted by law, Rely excludes liability arising from reliance on general website information. Nothing in these terms excludes rights that cannot lawfully be excluded.",
  },
  {
    heading: "Governing law",
    body: "The final clause should specify the appropriate Australian jurisdiction following legal review.",
  },
];

export default function TermsPage() {
  return (
    <>
      <Hero
        eyebrow="Legal draft for review"
        titleLines={["Website Terms", "and Disclaimer"]}
        sub="Terms governing use of the Rely Advisory Group website and important limitations relating to general information and regulated services."
      />

      <Section>
        <DraftBanner>
          Last updated: {PLACEHOLDER.lastUpdated}. This draft must be reviewed
          against the final business structure, systems, service model and
          applicable Australian law before publication. The governing-law clause
          is not yet settled.
        </DraftBanner>
      </Section>

      <Section surface="cloud">
        <LegalSections sections={SECTIONS} />
      </Section>
    </>
  );
}
