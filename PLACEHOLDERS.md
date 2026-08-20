# Placeholders — unresolved before launch

Every item below is rendered on the site as a **visible** placeholder, not as
plausible-looking fake data. Nothing here may be replaced with an invented
value; each needs client confirmation.

## Contact details

| Placeholder | Where it renders | Source |
|---|---|---|
| `hello@[approved-domain].com.au` | Footer contact column, `/contact` | Content doc, page 14 |
| `[approved business number]` | Header, footer contact column, `/contact` | Content doc, page 14 |
| `[approved hours]` | Footer contact column, `/contact` | Content doc, page 14 |
| `[privacy email]` | `/privacy` §10 | Content doc, page 15 |
| `[insert date]` | `/privacy` "Last updated" line | Content doc, page 15 |

Defined once in `lib/site.ts` (`PLACEHOLDER`). The header phone is plain text,
not a `tel:` link, until a real number exists.

## Founder profile

`/about` carries the doc's **"Insert approved biography"** block verbatim. It
must not be drafted here. Needs: experience in customer insights, data
analysis, executive reporting, finance operations improvement and Power BI;
formal qualifications and memberships **only once verified**; a professional
headshot; a concise personal statement.

## Production domain

`SITE.url` in `lib/site.ts` is `https://www.relyadvisory.com.au` — **not yet
confirmed**. Every canonical URL, `metadataBase` and the JSON-LD derive from
this single constant. Change it in one place; never introduce a second domain
(this was the highest-priority defect on the Zero Gravity audit).

## Brand assets required

| Asset | Why |
|---|---|
| **Reversed / knockout logo** | The supplied lockup is navy-and-gold ink. It disappears on navy, so the footer currently uses a typeset wordmark rather than the logo, and the header is white rather than navy. |
| **Horizontal (landscape) lockup** | The supplied file is a stacked portrait lockup. A slim sticky header can only carry it so large; the header runs taller than ideal to keep it legible. |
| **Favicon / app icons** | Currently pointing at the full PNG lockup, which will render illegibly at 32px. |
| **Designed Open Graph image** | `og-rely-advisory-group.png` is an interim built from the real logo on the ivory brand surface. A designed social card would serve better. |

`public/logo-rely-advisory-group.png` is the supplied file trimmed of its
transparent margin — same artwork, no recolouring. The original is retained at
`public/logo-by-relly.png`.

Alt text is fixed sitewide and must stay exactly:
`Rely Advisory Group logo, Accounting. Strategy. Simplified.`

## Deliberately absent — do not add without verification

Per the content doc's own instruction, none of the following exist anywhere on
the site and none may be invented:

- Testimonials, client names or client logos
- Case-study figures, transaction volumes or savings claims
- Years in business, staff counts, client counts
- Certifications, registrations, memberships, software partner badges
- `Review` or `AggregateRating` structured data
- Any stat counter — the count-up animation is wired to render a
  server-rendered real value, and is simply not used until verified numbers
  are supplied

## Forms are not connected

Both API routes (`/api/book-a-review`, `/api/contact`) validate with the shared
Zod schema, log, and return 200. **Nothing is delivered anywhere.** A submitted
form currently reaches no one. Each route carries a
`TODO: wire to <email/CRM provider>` comment. Choosing the provider is a client
decision and also a privacy-policy dependency (the policy must name the tools
actually deployed).

## Form options not specified by the doc

The content doc names these fields but not their choices. The values below are
structural defaults, not client-approved copy — confirm before launch:

| Field | Values used | Doc says |
|---|---|---|
| Number of employees | 1–10, 11–25, 26–50, 51–100, 101–250, More than 250 | "Dropdown" |
| Enquiry type (`/contact`) | The five areas of interest plus "General enquiry" | "Enquiry type" |

Accounting system (Xero / MYOB / QuickBooks / Other) and Area of interest
(AP / AR / Process / Reporting / Accountant partnership) are the doc's own
values, used verbatim.

## SEO title over budget

The Home SEO title — "Finance operations and advisory support | Rely Advisory
Group" — is 61 characters against a 60-character guideline. It is the doc's
approved copy, so it ships verbatim. Shortening it is a client copy decision.

## FAQ answers that are instructions, not answers

Two of the doc's ten FAQ "answers" are directions to the implementer rather
than anything a visitor can be shown. Both render on `/faq` inside the
"Awaiting client confirmation — not for publication" treatment, verbatim, and
**both are excluded from the `FAQPage` structured data** so search engines are
never handed them as answers.

| Question | The doc's text | Needed |
|---|---|---|
| Which systems can Rely support? | "The website should list only verified capability. Initial platforms may include Xero, MYOB, QuickBooks Online, Microsoft Excel, Microsoft 365 and Power BI." | Confirm which platforms are genuinely supported, then write the answer. |
| Is offshore support used? | "The final website must accurately describe the approved delivery model. If offshore personnel may access client information, this should be disclosed transparently with the relevant security and privacy controls." | Confirm the delivery model and any offshore access, with its security and privacy controls. |

The `FAQPage` schema currently carries 8 of 10 questions for this reason.

## Content still to be written (not placeholder text)

The eight launch articles are scaffolded from the doc's titles with a
`TODO: draft` body. Article bodies are **not** to be written without the
client — they carry commercial and regulatory claims.

## Legal

`/privacy` and `/terms` render the doc's copy verbatim behind a visible
draft banner. Both require legal review against the final business structure,
systems, service model and applicable Australian law before publication.
