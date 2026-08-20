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

## Phase 2 — core conversion path (next)

`/`, `/solutions`, `/solutions/accounts-payable`,
`/solutions/accounts-receivable`, `/solutions/process-improvement`,
`/solutions/reporting-insights`, `/book-a-review`, `/contact`.

Awaiting sign-off before starting.
