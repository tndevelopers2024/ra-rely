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

## Phase 4 — content, tools, legal (next)

`/insights`, `/insights/[slug]` (eight MDX stubs, bodies not written),
`/finance-health-check`, `/privacy`, `/terms`, plus `sitemap.ts` and
`robots.ts` once every route exists.

Awaiting sign-off before starting.
