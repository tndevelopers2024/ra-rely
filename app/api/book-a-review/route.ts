import { NextResponse } from "next/server";
import { bookReviewSchema } from "@/lib/schemas";

/**
 * Booking submissions.
 *
 * TODO: wire to <email/CRM provider>. Nothing is delivered anywhere yet —
 * the payload is validated and logged, and the caller gets a 200. Until this
 * is wired, a submitted form is not reaching anyone.
 */
export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = bookReviewSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed.", issues: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const { fullName, businessName, workEmail, areaOfInterest } = parsed.data;
  console.info("[book-a-review] submission", {
    fullName,
    businessName,
    workEmail,
    areaOfInterest,
  });

  return NextResponse.json({ ok: true });
}
