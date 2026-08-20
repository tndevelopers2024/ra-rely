import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import DraftBanner from "@/components/DraftBanner";
import LegalSections, { type LegalSection } from "@/components/LegalSections";
import { pageMetadata } from "@/lib/metadata";
import { PLACEHOLDER } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Privacy policy | Rely Advisory Group",
  description:
    "Read how Rely Advisory Group collects, uses, stores and protects personal information provided through the website.",
  path: "/privacy",
});

const SECTIONS: LegalSection[] = [
  {
    heading: "1. Our commitment",
    body: "Rely Advisory Group respects privacy and is committed to handling personal information responsibly. This policy explains the information collected through the website and business interactions, how it may be used and the choices available to individuals.",
  },
  {
    heading: "2. Information we may collect",
    body: "Information may include names, business contact details, enquiry information, appointment details, website usage information and records provided during an authorised client engagement. The public website should not be used to send bank details, tax file numbers, passwords, payroll records or confidential financial files.",
  },
  {
    heading: "3. How information may be collected",
    body: "Information may be collected through website forms, booking tools, email, telephone, meetings, referrals, service delivery and standard website technologies.",
  },
  {
    heading: "4. How information may be used",
    body: "Information may be used to respond to enquiries, assess service requirements, deliver agreed services, manage relationships, improve the website, meet legal obligations and communicate relevant information where permitted.",
  },
  {
    heading: "5. Disclosure and service providers",
    body: "Information may be disclosed to authorised personnel, technology providers and professional advisers where reasonably required. Any offshore access or processing must be clearly disclosed and governed by appropriate contractual and security controls.",
  },
  {
    heading: "6. Storage and security",
    body: "Rely will use reasonable administrative, technical and physical safeguards appropriate to the information handled. No internet transmission or storage system can be guaranteed to be completely secure.",
  },
  {
    heading: "7. Access and correction",
    body: "Individuals may request access to or correction of personal information held about them, subject to applicable legal limitations.",
  },
  {
    heading: "8. Cookies and analytics",
    body: "The website may use essential cookies and approved analytics tools. The final policy should identify the tools actually deployed and explain available choices.",
  },
  {
    heading: "9. Retention",
    body: "Personal information should be retained only for as long as needed for the relevant purpose or legal requirement, then securely deleted or de-identified where appropriate.",
  },
  {
    heading: "10. Contact and complaints",
    body: `Privacy questions or complaints may be sent to ${PLACEHOLDER.privacyEmail}. Rely will respond within a reasonable period and explain available escalation pathways where applicable.`,
  },
  {
    heading: "11. Changes to this policy",
    body: "The policy may be updated when practices, systems or legal requirements change. The latest version will appear on the website.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Hero
        eyebrow="Legal draft for review"
        titleLines={["Privacy Policy"]}
        sub="How Rely Advisory Group collects, uses, stores and protects personal information provided through the website."
      />

      <Section>
        <DraftBanner>
          Last updated: {PLACEHOLDER.lastUpdated}. This draft must be reviewed
          against the final business structure, systems, service model and
          applicable Australian law before publication.
        </DraftBanner>
      </Section>

      <Section surface="cloud">
        <LegalSections sections={SECTIONS} />
      </Section>
    </>
  );
}
