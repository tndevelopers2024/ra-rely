# Build progress — Rely Advisory Group

Source of truth for copy: `Rely_Advisory_Group_Complete_Website_Content.docx`
(452 paragraphs, 68 tables — both parsed; the tables carry the SEO metadata,
card grids and form fields).

## Phase 1 — design system and component library ✅

### Stack
Next.js 16.3.1 (App Router, Turbopack) + React 19.2.8 + TypeScript.
CSS Modules only. GSAP + ScrollTrigger, Lenis smooth scroll.
`next/font/google` for Inter and Montserrat. React Hook Form + Zod installed
for Phase 2 forms.

Removed the pre-existing Tailwind v4 + shadcn scaffold (`components/ui`,
`blocks.tsx`, `Header`, `Footer`, `lib/utils.ts`, `postcss.config.mjs`) and
uninstalled `tailwindcss`, `@tailwindcss/postcss`, `framer-motion`,
`lucide-react`, `clsx`, `tailwind-merge`. All of it remains on `main`.

### Design system — `app/globals.css`
Token block, reset, `.wrap`, `.section-pad`, `.display`, `.eyebrow` /
`.eyebrow-plain`, `.gold-rule`, `.btn` / `.btn-solid` / `.btn-line` /
`.btn-invert`, `.u-link`, `.skip-link`, the `data-reveal` block and the
reduced-motion block.

### Components — `/components`, `.tsx` + `.module.css` pairs
`Nav`, `Hero`, `Section`, `SectionHeading`, `Eyebrow`, `CardGrid`, `Card`,
`StepGrid`, `BulletList`, `Callout`, `CtaBand`, `Accordion`, `Breadcrumbs`,
`Button`, `Closing`, `SmoothScroll`, `ScrollReveals`.

Server Components by default. `"use client"` only on `Nav`, `Hero`,
`Accordion`, `SmoothScroll`, `ScrollReveals`.

### Verified
- `npm run build` clean, `npm run lint` clean, no `any`
- No horizontal overflow at 375 / 768 / 1024 / 1440 (measured
  `documentElement.scrollWidth` against viewport at each width; zero
  overflowing elements)
- `prefers-reduced-motion: reduce` — nothing animates, nothing is invisible
- JS disabled — all copy present in the server HTML, all links work
- `<html lang="en-AU">`, skip link, one `h1`, `Organization` + `LocalBusiness`
  JSON-LD

## Decisions taken

**The three Zero Gravity flourishes — all three dropped, as recommended.**
Film grain (photography texture, reads as noise on a finance site; replaced by
the gold hairline system), preloader veil (costs LCP and conversions for a
buyer arriving from a Google result), dark mode (navy/gold/ivory is defined for
light only; a dark variant needs its own contrast pass across 17 pages). The
tokens keep `--bg` / `--ink` indirection so a theme can be added later.

**White header, not navy.** The supplied logo is navy-and-gold ink on a
transparent ground — it disappears on navy. Navy carries the CTA band and the
footer instead. Reversible once a knockout logo exists (`PLACEHOLDERS.md`).

**`--font-display`, not `--font-serif`.** Rely's display face is a geometric
sans (Montserrat). Naming the variable `--font-serif` would invite a module to
reach for a serif stack. The `.display` utility name is unchanged, for parity.

**`--ink-muted` at 0.72 alpha, not 0.66.** 0.66 measures 4.47:1 on `--ivory`,
just under AA for body text. 0.72 clears every surface it is used on: 5.37:1 on
white, 4.96:1 on cloud, 4.80:1 on ivory.

**Gold is decoration only.** `#C4A35A` is ~2.3:1 on white. It carries rules,
ticks, icons and the caret; navy carries all text weight. `.btn-solid:hover`
goes gold-with-navy-text rather than gold-with-white-text for the same reason.
Gold on navy measures 6.81:1 and is used for footer link hover.

**Card grids reveal via `data-reveal` with staggered `--reveal-delay`**, not a
GSAP tween. Card grids appear on nearly every page; making each one a client
component to run a tween that `data-reveal` already expresses would cost
bundle for no visible difference. GSAP stays reserved for the set pieces.

**Nav collapses at 1100px, not 960px.** At 1024 the horizontal bar was cramped
and the CTA wrapped. One `<ul>` serves both layouts — the menu markup is never
duplicated.

## Phase 1 caveats

- `app/page.tsx` is scaffolding, not the finished Home. It exercises the
  component library using the approved Home copy verbatim. Phase 2 replaces it
  with per-page metadata, the pinned "More than completed transactions" set
  piece, and the image band.
- No imagery yet. `Hero` accepts an optional `image`; no page passes one.
  Neutral `<Image>` blocks with `TODO:` shot notes land with their pages.
- Section eyebrows on the Home scaffold ("The pressure points", "Our
  solutions", "The outcome", "Our approach", "Why Rely") are navigational
  labels, not doc copy — the doc supplies one eyebrow per *page*, which the
  hero uses. Flag if you would rather these sections carried no eyebrow.

## Phase 2 — core conversion path ✅

### Routes
`/`, `/solutions`, `/solutions/accounts-payable`,
`/solutions/accounts-receivable`, `/solutions/process-improvement`,
`/solutions/reporting-insights`, `/book-a-review`, `/contact`,
plus `app/api/book-a-review/route.ts` and `app/api/contact/route.ts`.

### New components
`Manifesto` (the one pinned word-by-word set piece), `ImageBand` (full-bleed
scale + border-radius scrub), `SecurityNotice`, `FormFields`
(`TextField` / `SelectField` / `TextareaField` / `CheckboxField`),
`BookReviewForm`, `ContactForm`.

New lib: `lib/metadata.ts` (per-page metadata, one canonical domain),
`lib/schemas.ts` (Zod schemas shared by client and route).

### Verified
- Build and lint clean across 12 routes, no `any`
- **Metadata**: every page carries the doc's SEO title and meta description
  verbatim, one `h1`, `og:image` (1200×630) and `summary_large_image`
- **Canonicals**: all eight resolve to `SITE.url` — no second domain
- **Headings**: no skipped levels on any page
- **Links**: zero cases of one accessible name pointing at two destinations
  (nav/footer repeats all resolve to a single href)
- **Images**: none missing `alt`
- **Forms**: server-rendered with visible labels on every control
  (9 fields / 9 labels on `/book-a-review`, 7 / 7 on `/contact`), correct
  `aria-required` counts, errors via `aria-describedby` + `role="alert"`
- **API routes**: valid payload → 200; invalid → 400 with per-field messages;
  malformed body → 400
- **Responsive**: 8 pages × 4 widths (375/768/1024/1440) measured — all 32
  combinations report `scrollWidth === viewport`, zero overflowing elements
- **Reduced motion**: nothing animates, nothing invisible
- JS disabled: all copy, links and form controls present in the server HTML

## Phase 2 decisions

**The pinned word reveal lives on `/solutions/reporting-insights`**, on the
"Data → Insight → Recommendation" principle — one block sitewide, as specified.
It is the better host than Home's "More than completed transactions": that block
is a heading plus five bullets, while this is a single editorial sentence, which
is what the effect is for. Gated to >=821px and `no-preference`; the words are
fully opaque in CSS, so without JS the copy just reads.

**Home's hero is text-led, with the full-bleed image band mid-page.** `Hero`
supports an optional `image` and the media zoom (1.06 → 1) is implemented, but
no page passes one: the only available asset is a neutral placeholder, and a
large abstract block as the homepage's dominant element would misrepresent the
design. Pass `image` to `Hero` once hero photography exists.

**No CTA band on `/book-a-review` or `/contact`.** Each page ends with its own
conversion action — the form, submitting as "Book my free review" and "Send
enquiry" respectively. A band beneath a form pushing to that same form is noise.
Every other page ends with its own CTA band and its own doc-specified label.

## Phase 2 caveats

- **Forms deliver nowhere yet.** Both routes validate, log and return 200.
  See `PLACEHOLDERS.md`.
- **Employee bands and enquiry types are structural defaults**, not client copy
  — the doc names the fields but not the choices. Listed in `PLACEHOLDERS.md`.
- **Section eyebrows are still mine, not the doc's** ("The pressure points",
  "What we deliver", "Governance", "Scope", …). The doc supplies one eyebrow per
  page, which each hero uses. None makes a claim, but say the word and they come
  out.
- `sitemap.ts` and `robots.ts` are deliberately deferred to Phase 4, when every
  route exists — a sitemap listing unbuilt pages would be wrong.
- The Home SEO title is 61 characters against the 60-character guideline. It is
  the doc's approved copy and ships verbatim.

## Phase 3 — trust and channel ✅

### Routes
`/industries`, `/how-we-work`, `/for-accountants`, `/about`, `/faq`.

### New components
`StackedBlocks` (vertical industry blocks), `ProcessStages` (numbered stage
with its own bullet list), `PlaceholderBlock` (deferred content, rendered as
visibly unfinished). `Accordion` gained a per-item `pending` flag.

### Verified
- Build and lint clean across 17 routes, no `any`
- Metadata: doc SEO title and description verbatim on all five, one `h1` each,
  canonicals on the single domain
- Headings: no skipped levels on any of the 13 pages
- Links: zero accessible names resolving to two destinations
- `FAQPage` JSON-LD: 8 of 10 questions, the two unresolved ones excluded
- Responsive: 13 pages × 4 widths = **52 combinations, zero failures**
- Reduced motion clean; content present without JS

## Phase 3 decisions

**Industries uses vertical numbered blocks, not a pinned horizontal rail** —
a rail suits a photo portfolio, not five text blocks, as the brief notes.

**Two FAQ "answers" are implementer instructions, not answers.** "Which systems
can Rely support?" and "Is offshore support used?" both answer with directions
to whoever builds the site. Rendering them as customer-facing copy would put
"The website should list only verified capability" in front of a buyer;
rewriting them would invent claims about systems and offshore delivery on a
regulated-adjacent site. Both are kept verbatim inside the visible
"Awaiting client confirmation" treatment and excluded from the structured data.
See `PLACEHOLDERS.md`.

**Fixed an ambiguous link name on `/industries`.** The doc's page CTA
("Discuss your industry and finance challenges") was on both the hero and the
CTA band but pointing at different routes — one accessible name, two
destinations, which is the actual WCAG 2.4.4 failure. Both now resolve to
`/book-a-review`.

**The founder biography stays a placeholder.** No invented experience,
qualifications or memberships — the doc explicitly defers it.

## Phase 4 — content, tools, legal ✅

### Routes
`/insights`, `/insights/[slug]` (eight prerendered stubs),
`/finance-health-check`, `/privacy`, `/terms`, plus `app/sitemap.ts`,
`app/robots.ts` and `app/api/health-check/route.ts`.

### New components
`HealthCheck` (the ten-question assessment), `DraftBanner`, `LegalSections`.
`Card` gained a `pending` variant; `Button` gained `onClick`.

New lib: `lib/insights.ts` — reads front-matter from `content/insights/*.mdx`
at build time. No MDX runtime is installed: every body is still `TODO: draft`,
so there is nothing to render. Wire one when real bodies land.

### Verified
- Build and lint clean across 25 routes, no `any`
- **Health check exercised end to end**, not assumed: all Always → 40/40
  "Strong foundation"; all Sometimes → 20/40 "Functional but vulnerable";
  all Not sure → 0/40 "Immediate attention recommended". All three of the
  doc's bands are reachable. Focus moves to the result. An incomplete
  assessment shows an alert and does **not** reveal a result.
- Health check markup: 10 `fieldset`/`legend` pairs, 50 native radios
  (arrow-key groups work for free), a `role="progressbar"`, all ten
  statements verbatim
- `/api/health-check`: valid → 200; invalid → 400 with per-field errors
- Article stubs: `noindex, follow`, correct canonical, one `h1`,
  **zero `TODO` strings reach the rendered page**
- `sitemap.xml`: 17 URLs, all on `SITE.url`, zero draft articles
- `robots.txt`: allows `/`, disallows `/api/`, points at the sitemap
- Headings: no skipped levels across all 18 checked pages
- Links: zero accessible names resolving to two destinations
- Responsive: 18 pages × 4 widths = **72 combinations, zero failures**

## Phase 4 decisions

**The on-screen result is never gated.** The doc asks for lead capture on
"Receive my result and recommendations"; the score and band appear as soon as
the tenth answer lands, and the email form sits below it as an optional extra.
Gating a result the visitor has already earned is the dark pattern the brief
rules out.

**Three of the four featured resources do not exist**, so they are rendered
unlinked and marked "Not yet available" rather than as links to nowhere.

**Article stubs are noindex and out of the sitemap** while their front-matter
says `status: "draft"`. Publishing eight empty article pages would be worse
than not shipping them. Flipping one to `status: "published"` puts it in both.

**No MDX runtime installed.** The brief asks for MDX stubs with front-matter
and a `TODO: draft` body — that exists. Installing a rendering pipeline for
bodies that are all placeholders would add dependencies to render nothing.
`lib/insights.ts` reads the front-matter; the body pipeline is a small,
well-isolated addition when there is prose to render.

**Legal pages stay indexable** behind their draft banner. They are in the
doc's minimum launch set, and the banner is the safeguard. If you would rather
they were noindex until legal review completes, that is a one-line change.

## Remaining before launch

Everything in `PLACEHOLDERS.md`: production domain, contact details, founder
biography, two FAQ answers, three featured resources, eight article bodies,
health-check scoring confirmation, form delivery wiring, and legal review of
`/privacy` and `/terms`.

## Verification pass ✅ (against a production build)

### Lighthouse — desktop, `npm run start`

| Page | Perf | A11y | Best practices | SEO | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|
| `/` | 100 | 100 | 100 | 100 | 0.6 s | 0 | 0 ms |
| `/solutions/accounts-payable` | 100 | 100 | 100 | 100 | 0.6 s | 0 | 0 ms |

Comfortably inside the budgets (LCP < 2.5s, CLS < 0.1, INP < 200ms).

### axe-core 4.13, WCAG 2.0/2.1/2.2 A + AA, all 18 pages

**0 violations. 0 critical or serious.**

### Three real defects this pass caught

The scripted checks in earlier phases covered heading order, link ambiguity,
alt text, overflow and reduced motion — they did not catch any of these.

1. **The eyebrow was gold text at 11px.** `#C4A35A` measures 2.4:1 on white
   and 2.2:1 on cloud, far under AA. This contradicted the brand direction's
   own rule and my Phase 1 contrast check missed it — I verified `--ink-muted`
   and did not re-check `.eyebrow`. Now navy text with the gold rule retained.
2. **The numbered blocks used gold numerals** (`StepGrid`, `StackedBlocks`,
   `ProcessStages`). Being `aria-hidden` does not exempt visible text a sighted
   reader uses to follow a sequence, and 2.4:1 is under even the 3:1
   large-text threshold. Now navy.
3. **`aria-label` on a `<p>`** in `Manifesto` — ARIA prohibits naming a `<p>`
   with no role. The sentence now sits in a `.sr-only` span with the animated
   words hidden from assistive tech.

Gold now appears only as rules, ticks, arrows, carets and borders, or as text
on navy (6.8:1). That is the "navy carries the text weight, gold carries the
decoration" rule, actually enforced.

### A note on measuring contrast with animation

A first axe run reported ~30 contrast violations that were **artifacts**:
`data-reveal` elements caught mid-transition read as washed-out (a card at
0.62 opacity measures `#9fa4ae` rather than `#636b7b`), and the Manifesto's
words sit at 0.12 opacity at the start of their scrub. Re-running with
`prefers-reduced-motion` forced settles every reveal and measures the at-rest
state, which is what contrast should be judged on. The three defects above are
what survived that.

### Still not done

No manual screen-reader pass (VoiceOver/NVDA) and no real-device testing.
Automated tooling does not substitute for either.
