import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "./ui/button";

export default function Footer() {
  return (
    <footer className="bg-rely-navy text-white pt-16 pb-8 lg:pt-24 lg:pb-12 border-t-[4px] border-advisory-gold">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-white text-rely-navy flex items-center justify-center font-heading font-bold text-lg leading-none pt-1">
                R
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-white">
                Rely Advisory
              </span>
            </Link>
            <p className="text-cloud-grey/80 mb-8 max-w-sm">
              Better finance operations. Clearer business decisions. Practical
              support for growing Australian businesses.
            </p>
            <Link
              href="/book-a-review"
              className={buttonVariants({
                variant: "outline",
                className:
                  "text-white border-white hover:text-rely-navy hover:bg-white",
              })}
            >
              Book a Free Review <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="lg:col-span-2 lg:col-start-7">
            <h3 className="font-heading font-semibold text-advisory-gold mb-4 uppercase tracking-wider text-sm">
              Solutions
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/solutions/accounts-payable"
                  className="text-cloud-grey/80 hover:text-white transition-colors text-sm"
                >
                  Accounts Payable
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/accounts-receivable"
                  className="text-cloud-grey/80 hover:text-white transition-colors text-sm"
                >
                  Accounts Receivable
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/process-improvement"
                  className="text-cloud-grey/80 hover:text-white transition-colors text-sm"
                >
                  Process Improvement
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/reporting-insights"
                  className="text-cloud-grey/80 hover:text-white transition-colors text-sm"
                >
                  Reporting & Insights
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-heading font-semibold text-advisory-gold mb-4 uppercase tracking-wider text-sm">
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/about"
                  className="text-cloud-grey/80 hover:text-white transition-colors text-sm"
                >
                  About Rely
                </Link>
              </li>
              <li>
                <Link
                  href="/how-we-work"
                  className="text-cloud-grey/80 hover:text-white transition-colors text-sm"
                >
                  How We Work
                </Link>
              </li>
              <li>
                <Link
                  href="/industries"
                  className="text-cloud-grey/80 hover:text-white transition-colors text-sm"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  href="/for-accountants"
                  className="text-cloud-grey/80 hover:text-white transition-colors text-sm"
                >
                  For Accountants
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-heading font-semibold text-advisory-gold mb-4 uppercase tracking-wider text-sm">
              Resources
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/insights"
                  className="text-cloud-grey/80 hover:text-white transition-colors text-sm"
                >
                  Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/finance-health-check"
                  className="text-cloud-grey/80 hover:text-white transition-colors text-sm"
                >
                  Health Check
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-cloud-grey/80 hover:text-white transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-cloud-grey/80 hover:text-white transition-colors text-sm"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 pb-4 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-cloud-grey/60 font-medium">
            <span>&copy; {new Date().getFullYear()} Rely Advisory Group.</span>
            <span className="hidden lg:inline">|</span>
            <span className="text-advisory-gold">Australian oversight</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-advisory-gold">Flexible support</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-advisory-gold">Secure processes</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-advisory-gold">Actionable insights</span>
          </div>
          <div className="flex items-center gap-6 text-xs text-cloud-grey/60">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Website Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
