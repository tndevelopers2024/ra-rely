# Launch checklist

From the content blueprint, page 18 (internal — not published as a route).

## Minimum viable launch

The doc's minimum launch set, mapped to routes:

- [ ] Home — `/`
- [ ] Solutions landing page — `/solutions`
- [ ] Accounts Payable — `/solutions/accounts-payable`
- [ ] Accounts Receivable — `/solutions/accounts-receivable`
- [ ] Process Improvement — `/solutions/process-improvement`
- [ ] Reporting and Insights — `/solutions/reporting-insights`
- [ ] How We Work — `/how-we-work`
- [ ] For Accountants — `/for-accountants`
- [ ] About — `/about`
- [ ] Book a Review — `/book-a-review`
- [ ] Contact — `/contact`
- [ ] Privacy Policy — `/privacy`
- [ ] Terms and Disclaimer — `/terms`

`/industries`, `/faq`, `/insights`, `/insights/[slug]` and
`/finance-health-check` are in scope for the build but sit outside the doc's
minimum launch set.

## Pre-publication approvals (client)

- [ ] Confirm legal entity name, ABN and business contact details.
- [ ] Confirm exact service scope and regulated-service boundaries.
- [ ] Verify professional qualifications, registrations, software badges and
      memberships before displaying them.
- [ ] Confirm privacy, data storage and any offshore delivery arrangements.
- [ ] Obtain legal review of privacy, terms, disclaimers and client-facing claims.
- [ ] Confirm professional indemnity and cyber insurance arrangements.
- [ ] Test all forms, consent wording, booking workflows and mobile layouts.
- [ ] Add alt text to the supplied logo:
      "Rely Advisory Group logo, Accounting. Strategy. Simplified."
      — already wired sitewide via `SITE.logoAlt`.

## Engineering gates

- [ ] `npm run build` clean, zero errors
- [ ] `npm run lint` clean, no `any`, no unused files
- [ ] Lighthouse >= 95 (performance, accessibility, best practices, SEO) on
      `/` and `/solutions/accounts-payable`
- [ ] LCP < 2.5s, CLS < 0.1, INP < 200ms
- [ ] axe DevTools / WAVE — zero critical or serious violations
- [ ] Responsive check at 375 / 768 / 1024 / 1440
- [ ] Motion check: full animation, then `prefers-reduced-motion: reduce` —
      nothing moves, nothing is invisible
- [ ] JS disabled: all content renders, all links work
- [ ] Canonicals all point to the single production domain
- [ ] Every placeholder in `PLACEHOLDERS.md` resolved or consciously deferred

## Blocking on client input

See `PLACEHOLDERS.md`. The site cannot go live while the domain, business
number, email, hours, founder bio and reversed logo are unresolved.
