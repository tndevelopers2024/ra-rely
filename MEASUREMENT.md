# Measurement framework

From the content blueprint, page 18 (internal — not published as a route).

| Objective | Primary measure | Supporting measure |
|---|---|---|
| Generate qualified demand | Finance review bookings | Form completion rate |
| Build accountant channel | Partner conversations | Accountant page conversion |
| Build authority | Organic visits to insights | Resource downloads |
| Improve relevance | Service page engagement | CTA click-through |
| Improve conversion quality | Accepted proposals | Lead-to-proposal rate |

## Editorial principle

Every page should answer four questions quickly:

1. Is this for me?
2. What problem does Rely solve?
3. Why should I trust Rely?
4. What should I do next?

Each page closes with its own CTA band carrying that page's specific CTA
label from the content doc — these are deliberately not collapsed into one
generic button, because CTA click-through is a tracked measure above.

## Instrumentation — not yet wired

No analytics tool is installed. The doc requires the final privacy policy to
name the tools actually deployed, so analytics selection is a client decision
and a privacy-policy dependency, not a build default. When chosen, the events
that matter are:

- `book_a_review` form submission (primary conversion)
- `contact` form submission
- `finance_health_check` completion, and the separate email-capture step
- CTA band clicks, attributed by page
- Outbound clicks from `/for-accountants` to `/book-a-review`
