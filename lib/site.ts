/**
 * Sitewide constants. Content copy lives with its page; only cross-page
 * structure and the unresolved client placeholders live here.
 */

export const SITE = {
  name: "Rely Advisory Group",
  /** TODO: replace once the production domain is approved. Every canonical
   *  URL derives from this single value — never introduce a second domain. */
  url: "https://www.relyadvisory.com.au",
  logoAlt: "Rely Advisory Group logo, Accounting. Strategy. Simplified.",
  trustStatement:
    "Australian relationship management. Structured finance operations. Secure delivery. Actionable business insight.",
} as const;

/** Unresolved client details. Rendered as visible placeholders — see PLACEHOLDERS.md. */
export const PLACEHOLDER = {
  email: "hello@[approved-domain].com.au",
  telephone: "[approved business number]",
  location: "Sydney, NSW. Services available remotely across Australia.",
  hours: "Monday to Friday, [approved hours] AEST/AEDT",
  privacyEmail: "[privacy email]",
  lastUpdated: "[insert date]",
} as const;

export type NavLink = { label: string; href: string };

export const SOLUTIONS: NavLink[] = [
  { label: "Accounts Payable Support", href: "/solutions/accounts-payable" },
  { label: "Accounts Receivable Support", href: "/solutions/accounts-receivable" },
  { label: "Finance Process Improvement", href: "/solutions/process-improvement" },
  { label: "Reporting and Business Insights", href: "/solutions/reporting-insights" },
];

export const NAV: NavLink[] = [
  { label: "Industries", href: "/industries" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "For Accountants", href: "/for-accountants" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
];

export const FOOTER_COLUMNS: { label: string; links: NavLink[] }[] = [
  { label: "Solutions", links: SOLUTIONS },
  {
    label: "Company",
    links: [
      { label: "About Rely", href: "/about" },
      { label: "How We Work", href: "/how-we-work" },
      { label: "Industries", href: "/industries" },
      { label: "For Accountants", href: "/for-accountants" },
    ],
  },
  {
    label: "Resources",
    links: [
      { label: "Insights", href: "/insights" },
      { label: "Finance Operations Health Check", href: "/finance-health-check" },
      { label: "Frequently Asked Questions", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const LEGAL_LINKS: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Website Terms and Disclaimer", href: "/terms" },
];

/** The security notice rendered beside every form (content blueprint, page 12). */
export const FORM_SECURITY_NOTICE = {
  title: "Protect sensitive information",
  body: "Do not submit bank details, tax file numbers, payroll files, passwords or confidential financial records through this form. Secure information-sharing arrangements will be established if an engagement proceeds.",
} as const;
