import {
  Hero,
  TrustStrip,
  ProblemGrid,
  ServiceCard,
  StepFlow,
  CalloutBanner,
  CTASection,
} from "@/components/blocks";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="FINANCE OPERATIONS AND BUSINESS INSIGHT"
        headline="Better finance operations. Clearer business decisions."
        body="Rely Advisory Group helps growing Australian businesses improve accounts payable, strengthen receivables, streamline finance processes and gain clearer visibility of performance, without the cost of building a large internal finance team."
        primaryCtaText="Book a Free Finance Operations Review"
        primaryCtaHref="/book-a-review"
        secondaryCtaText="Explore our solutions"
        secondaryCtaHref="/solutions"
      />

      <TrustStrip
        items={[
          "Australian oversight",
          "Flexible support",
          "Secure processes",
          "Actionable insights",
        ]}
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-heading font-bold text-rely-navy mb-6">
              Is your finance function keeping pace with your business?
            </h2>
          </div>
          <ProblemGrid
            problems={[
              {
                title: "Slow customer payments",
                description:
                  "Overdue invoices and inconsistent follow-up are putting unnecessary pressure on cash flow.",
              },
              {
                title: "Time-consuming supplier administration",
                description:
                  "Invoice processing, approvals and payment preparation consume valuable internal time.",
              },
              {
                title: "Limited financial visibility",
                description:
                  "Reports arrive late, rely on manual spreadsheets or do not explain what action management should take.",
              },
              {
                title: "Processes that depend on individuals",
                description:
                  "Critical activities sit in inboxes, spreadsheets and undocumented knowledge, creating avoidable business risk.",
              },
            ]}
          />
        </div>
      </section>

      <section className="py-24 bg-cloud-grey border-y border-cloud-grey/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-heading font-bold text-rely-navy mb-6">
                Practical finance support built around your business
              </h2>
            </div>
            <Link
              href="/solutions"
              className={buttonVariants({ variant: "secondary" })}
            >
              View all solutions
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <ServiceCard
              title="Accounts Payable"
              description="Create a more controlled, visible and efficient supplier payment process."
              href="/solutions/accounts-payable"
            />
            <ServiceCard
              title="Accounts Receivable"
              description="Improve invoicing discipline, debtor follow-up and cash collection visibility."
              href="/solutions/accounts-receivable"
            />
            <ServiceCard
              title="Finance Process Improvement"
              description="Remove bottlenecks, clarify controls and design processes that can scale."
              href="/solutions/process-improvement"
            />
            <ServiceCard
              title="Reporting and Business Insights"
              description="Turn financial information into accessible dashboards, commentary and management action."
              href="/solutions/reporting-insights"
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-4xl font-heading font-bold text-rely-navy mb-8">
                More than completed transactions
              </h2>
              <ul className="flex flex-col gap-6">
                {[
                  "Improve cash flow through structured invoicing, follow-up and debtor visibility.",
                  "Reduce finance administration so business owners and internal teams can focus on customers and growth.",
                  "Strengthen financial controls through clear responsibilities, documented workflows and appropriate reviews.",
                  "Gain better visibility through practical dashboards and management reporting.",
                  "Scale finance support flexibly as transaction volumes and business complexity increase.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-advisory-gold" />
                    </div>
                    <span className="text-lg text-charcoal/80 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-warm-ivory rounded-sm p-12 h-full flex flex-col justify-center border border-cloud-grey">
              <h3 className="text-2xl font-heading font-bold text-rely-navy mb-10">
                How Rely works
              </h3>
              <StepFlow
                steps={[
                  {
                    title: "1. Understand",
                    description:
                      "We review your systems, transaction volumes, workflows and priorities.",
                  },
                  {
                    title: "2. Stabilise",
                    description:
                      "We clarify responsibilities, document processes and address immediate gaps.",
                  },
                  {
                    title: "3. Improve",
                    description:
                      "We simplify workflows, strengthen controls and introduce suitable reporting or automation.",
                  },
                  {
                    title: "4. Support",
                    description:
                      "We deliver reliable ongoing support and regularly review performance and priorities.",
                  },
                ]}
              />
            </div>
          </div>

          <div className="max-w-3xl mb-16 mt-24">
            <h2 className="text-4xl font-heading font-bold text-rely-navy mb-6">
              Why businesses choose Rely
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              "A consistent Australian point of contact who understands your business.",
              "Disciplined delivery supported by documented processes and agreed responsibilities.",
              "Flexible services that can expand as your business grows.",
              "Reporting presented as insights, actions and implications, not simply accounting outputs.",
              "A collaborative approach that complements your accountant and existing team.",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-cloud-grey p-8 rounded-sm border-t-2 border-rely-navy"
              >
                <p className="text-charcoal/80 text-lg">{item}</p>
              </div>
            ))}
          </div>

          <CalloutBanner
            title="The promise"
            text="Australian relationship management. Structured finance operations. Secure delivery. Actionable business insight."
          />
        </div>
      </section>

      <CTASection
        title="Not sure where to begin?"
        text="A free Finance Operations Review identifies immediate pressure points, practical improvements and the most appropriate level of support."
        buttonText="Book your free review"
        buttonHref="/book-a-review"
        microcopy="No obligation. A focused 30-minute conversation about your current finance operations."
      />
    </>
  );
}
