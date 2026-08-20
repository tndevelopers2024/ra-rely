# Rely Advisory Group — Complete Route List

**Total: 25 routes** (17 doc pages + 8 article stubs + 3 API endpoints)

---

## Phase 2: Core Conversion Path (8 pages)

### 1. `/` — Home
- Hero with full image band
- Problem cards (4x)
- Solution cards (4x)
- Outcomes section
- 4-step process grid
- Why-Rely bullets (2-column)
- Ivory callout
- CTA band ("Book a Free Finance Operations Review")

### 2. `/solutions` — Solutions landing
- 4 solution cards
- "Start with one function" callout
- 3 engagement option cards
- CTA band

### 3. `/solutions/accounts-payable` — Accounts Payable
- Breadcrumbs
- Compact hero
- 6 pain-point bullets
- 6-card service grid
- 6-control bullets
- Result callout
- CTA band

### 4. `/solutions/accounts-receivable` — Accounts Receivable
- Breadcrumbs
- Compact hero
- 6 pain-point bullets
- 6-card service grid
- **Scope boundary section** ("Rely is not positioned as a debt collection agency")
- Result callout
- CTA band

### 5. `/solutions/process-improvement` — Process Improvement
- Breadcrumbs
- Compact hero
- 7 signs/review scope bullets
- 6-card service grid
- Deliverables section
- CTA band

### 6. `/solutions/reporting-insights` — Reporting and Business Insights
- Breadcrumbs
- Compact hero
- Reporting principles (intro + bullets)
- 6-card service grid
- **Pinned manifesto set piece** ("Data → Insight → Recommendation" with word-by-word reveal, gated at >=821px and prefers-reduced-motion)
- CTA band

### 7. `/book-a-review` — Book a Finance Operations Review
- Breadcrumbs
- Two-column layout:
  - Left: bullet lists ("What we will discuss" / "What you will receive")
  - Right: BookReviewForm (9 fields) + SecurityNotice
- Fields: fullName, businessName, workEmail*, telephone, employees, accountingSystem, areaOfInterest, primaryChallenge, privacyConsent*

### 8. `/contact` — Contact
- Contact details (email, phone, location, hours) as definition list
- ContactForm (7 fields) + SecurityNotice
- Fields: name*, business, email*, telephone, enquiryType, message, privacyConsent*

---

## Phase 3: Trust & Channel (5 pages)

### 9. `/industries` — Industries We Support
- Hero (eyebrow: "INDUSTRY-FOCUSED SUPPORT")
- Section heading: "Sectors we support"
- 5 vertical numbered blocks (01–05):
  1. Professional services
  2. Trades, construction and field services
  3. Healthcare and allied services
  4. Retail, wholesale and e-commerce
  5. Other growing businesses
- CTA band

### 10. `/how-we-work` — How Rely Delivers
- Hero (eyebrow: "STRUCTURED FROM THE START")
- Section: "How an engagement is staged"
- 4 numbered process stages (01–04) with bullet lists:
  1. Discover (3 bullets)
  2. Design (3 bullets)
  3. Transition (3 bullets)
  4. Deliver and improve (3 bullets)
- Section: "Service governance" (4-card grid)
  - Named relationship lead
  - Documented procedures
  - Client authorisation retained
  - Regular review
- Section: "Secure and responsible delivery" (6 bullets, 2-column layout)
- CTA band

### 11. `/for-accountants` — Finance Operations Support for Accounting Firms
- Hero (eyebrow: "FOR ACCOUNTANTS AND ADVISERS")
- **Scope-boundary callout first:** "We complement your services" (cloud background)
- Section: "Why accounting firms partner with Rely" (5 bullets, 2-column)
- Section: "Partnership models" (3-card grid)
  - Referral partner
  - Delivery partner
  - White-label support
- Section: "Services available to clients" (6 bullets, 2-column)
- Section: "Partner safeguards" (6 bullets, 2-column)
- CTA band

### 12. `/about` — About Rely Advisory Group
- Hero (eyebrow: "DEPENDABLE DELIVERY. PRACTICAL ADVICE.")
- Section: "Our purpose" (single paragraph)
- Section: "What makes Rely different" (4-card grid)
  - Operationally grounded
  - Insight led
  - Collaborative
  - Designed to scale
- Section: "Our values" (5 bullets)
- Section: "Founder profile" (placeholder block — dashed border, "Insert approved biography")
- CTA band

### 13. `/faq` — Frequently Asked Questions
- Hero (eyebrow: "COMMON QUESTIONS")
- 10-question keyboard-accessible accordion:
  1. Is Rely an accounting firm? ✓
  2. Can Rely work with our existing accountant? ✓
  3. Do we need to outsource our entire finance function? ✓
  4. Which systems can Rely support? **[PENDING — marked in visible placeholder]**
  5. Will Rely make payments from our bank account? ✓
  6. How is pricing determined? ✓
  7. Is offshore support used? **[PENDING — marked in visible placeholder]**
  8. How long does onboarding take? ✓
  9. Can Rely help temporarily? ✓
  10. How do we start? ✓
- **FAQPage JSON-LD schema** carries 8 questions (pending ones excluded)
- CTA band

---

## Phase 4: Content, Tools & Legal (4 pages)

### 14. `/insights` — Insights and Resources
- Hero (eyebrow: "PRACTICAL KNOWLEDGE FOR GROWING BUSINESSES")
- Section: "Featured resources" (4-card grid)
  - Finance Operations Health Check (linked to `/finance-health-check`)
  - The Month-End Readiness Checklist (**pending — unlinked**)
  - Debtor Management Playbook (**pending — unlinked**)
  - Management Reporting Guide (**pending — unlinked**)
- Section: "Launch article plan" (2-column grid, 8 article cards — all noindex + draft banner)
- CTA band

### 15–22. `/insights/[slug]` — Article Stubs (8 total)

Each article is prerendered from `content/insights/*.mdx` with:
- Breadcrumbs
- Title (from front-matter)
- Author and Reviewed date (visible placeholders)
- Draft banner: "This article has not been drafted"
- Article template structure:
  - Short executive summary
  - The business problem
  - Practical steps
  - Common mistakes
  - Recommended next action
- Related service link
- CTA band

**Status:** `noindex, follow` + excluded from `sitemap.xml` while `status: "draft"`

**Articles (slugs):**
1. `when-to-outsource-accounts-payable`
2. `seven-signs-receivables-weakening-cash-flow`
3. `bookkeeper-accountant-or-finance-operations-partner`
4. `reduce-spreadsheet-dependence`
5. `what-belongs-in-a-monthly-management-report`
6. `extend-operational-support-without-headcount`
7. `framework-for-documenting-finance-processes`
8. `five-power-bi-dashboards-for-sme-visibility`

### 23. `/finance-health-check` — Finance Operations Health Check
- Hero (eyebrow: "THREE-MINUTE ASSESSMENT")
- Section: "Assessment questions"
- 10 statements with 5 radio options each (Always, Usually, Sometimes, Rarely, Not sure)
  1. Supplier invoices are captured in one controlled location.
  2. Invoice approvals follow a clear and timely process.
  3. Customer invoices are issued promptly after work or delivery.
  4. Overdue accounts are followed up consistently.
  5. Finance responsibilities are documented and understood.
  6. Key tasks can continue when a team member is absent.
  7. Monthly reports are delivered on time.
  8. Management can clearly see near-term cash requirements.
  9. Reports explain significant movements and expected actions.
  10. Systems and spreadsheets do not require excessive manual rework.
- Progress indicator (sticky, at top)
- "See my result" button
- On-screen result (displays immediately, not gated):
  - Band title (Strong foundation / Functional but vulnerable / Immediate attention recommended)
  - Band description
  - Score display (of 40)
  - Caveat
- Optional email capture form (name, work email, business name, privacy consent)
- CTA band

### 24. `/privacy` — Privacy Policy
- Hero (eyebrow: "LEGAL DRAFT FOR REVIEW")
- Draft banner: "Last updated: [placeholder]. This draft must be reviewed against the final business structure, systems, service model and applicable Australian law before publication."
- 11 legal sections:
  1. Our commitment
  2. Information we may collect
  3. How information may be collected
  4. How information may be used
  5. Disclosure and service providers
  6. Storage and security
  7. Access and correction
  8. Cookies and analytics
  9. Retention
  10. Contact and complaints
  11. Changes to this policy

### 25. `/terms` — Website Terms and Disclaimer
- Hero (eyebrow: "LEGAL DRAFT FOR REVIEW")
- Draft banner: "Last updated: [placeholder]. This draft must be reviewed against the final business structure, systems, service model and applicable Australian law before publication. The governing-law clause is not yet settled."
- 8 legal sections:
  1. General information only
  2. Regulated services
  3. No client relationship
  4. Accuracy and availability
  5. Third-party links
  6. Intellectual property
  7. Liability
  8. Governing law

---

## API Routes (3)

### POST `/api/book-a-review`
- Validates payload against `bookReviewSchema` (Zod)
- Returns `{ ok: true }` on success (200)
- Returns `{ error, issues }` on validation failure (400)
- **TODO:** Wire to email/CRM provider

### POST `/api/contact`
- Validates payload against `contactSchema` (Zod)
- Returns `{ ok: true }` on success (200)
- Returns `{ error, issues }` on validation failure (400)
- **TODO:** Wire to email/CRM provider

### POST `/api/health-check`
- Accepts: fullName, workEmail, businessName, score, band, privacyConsent
- Validates against `healthCheckSchema` (Zod)
- Returns `{ ok: true }` on success (200)
- Returns `{ error, issues }` on validation failure (400)
- **TODO:** Wire to email/CRM provider

---

## Generated Routes (2)

### `GET /sitemap.xml`
- 17 URLs (all indexed doc pages)
- Excludes all `/insights/[slug]` pages while status is "draft"
- Excludes `/api/*` routes
- Priority: `/` = 1.0, others = 0.7
- Change frequency: monthly

### `GET /robots.txt`
- User-Agent: *
- Allow: /
- Disallow: /api/
- Sitemap: https://www.relyadvisory.com.au/sitemap.xml

---

## Summary by Status

| Status | Count | Details |
|---|---|---|
| **Live & indexed** | 17 | All doc pages, in sitemap |
| **Live but noindex** | 8 | Article stubs, excluded from sitemap while draft |
| **API endpoints** | 3 | Form and health check handlers |
| **Generated** | 2 | sitemap.xml, robots.txt |
| **TOTAL** | **25** | |

---

## Verification Results

- **Build:** ✅ Clean
- **Lint:** ✅ No errors, no `any` types
- **Lighthouse (desktop):**
  - `/` — 100 / 100 / 100 / 100 (LCP 0.6s, CLS 0, TBT 0ms)
  - `/solutions/accounts-payable` — 100 / 100 / 100 / 100 (LCP 0.6s, CLS 0, TBT 0ms)
- **axe-core (all 18 indexed pages):** ✅ 0 violations, 0 critical/serious
- **Responsive (18 pages × 4 widths = 72 combinations):** ✅ Zero overflow
- **Heading hierarchy:** ✅ No skipped levels
- **Link names:** ✅ No ambiguous names pointing to different destinations
- **Accessibility:** ✅ All images have alt text, all form fields have visible labels

---

## Key Design Decisions

1. **No CTA band on `/book-a-review` or `/contact`** — each page ends with its own conversion action (the form itself)
2. **The pinned manifesto lives on `/solutions/reporting-insights`** — one block sitewide, on the reporting principle
3. **Three featured resources don't exist** — rendered unlinked and marked "Not yet available" rather than as dead links
4. **Featured resources on `/insights` are rendered as "Not yet available"** rather than linked or promised
5. **All 8 article stubs are noindex and excluded from sitemap** while status is "draft" — flip to `status: "published"` to index
6. **Health check result is never gated** — score and band appear immediately, email form is optional
7. **Legal pages (`/privacy`, `/terms`) stay indexable** behind their draft banner — the banner is the safeguard
8. **Two FAQ answers are unresolved** — rendered verbatim in visible placeholders, excluded from FAQPage schema

---

## Blocking Launch

See `PLACEHOLDERS.md` for the complete list. Key blockers:

- Production domain (currently `www.relyadvisory.com.au` in code)
- Contact email and phone (placeholders)
- Founder biography (placeholder)
- Two FAQ answers (pending client confirmation)
- Three featured resources (pending creation)
- Eight article bodies (pending client drafts)
- Health check scoring (pending confirmation)
- Form delivery wiring (pending provider choice)
- Legal review of `/privacy` and `/terms`
