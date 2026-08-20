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
| **Open Graph image** | No OG image exists yet, so no page declares one. |

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

## Content still to be written (not placeholder text)

The eight launch articles are scaffolded from the doc's titles with a
`TODO: draft` body. Article bodies are **not** to be written without the
client — they carry commercial and regulatory claims.

## Legal

`/privacy` and `/terms` render the doc's copy verbatim behind a visible
draft banner. Both require legal review against the final business structure,
systems, service model and applicable Australian law before publication.
