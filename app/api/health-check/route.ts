import { NextResponse } from "next/server";
import { healthCheckSchema } from "@/lib/schemas";

/**
 * Emailed health-check results.
 *
 * TODO: wire to <email/CRM provider>. Nothing is delivered anywhere yet —
 * the payload is validated and logged, and the caller gets a 200. The
 * on-screen result does not depend on this route.
 */
export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = healthCheckSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed.", issues: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const { fullName, workEmail, score, band } = parsed.data;
  console.info("[health-check] result requested", { fullName, workEmail, score, band });

  return NextResponse.json({ ok: true });
}
