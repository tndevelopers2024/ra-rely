import { z } from "zod";

/** Shared by the client form and its API route, so validation cannot drift. */

export const EMPLOYEE_BANDS = [
  "1–10",
  "11–25",
  "26–50",
  "51–100",
  "101–250",
  "More than 250",
] as const;

export const ACCOUNTING_SYSTEMS = [
  "Xero",
  "MYOB",
  "QuickBooks",
  "Other",
] as const;

export const AREAS_OF_INTEREST = [
  "Accounts payable",
  "Accounts receivable",
  "Finance process improvement",
  "Reporting and business insights",
  "Accountant partnership",
] as const;

export const ENQUIRY_TYPES = [
  "Accounts payable",
  "Accounts receivable",
  "Finance process improvement",
  "Reporting and business insights",
  "Accountant partnership",
  "General enquiry",
] as const;

const consent = z.literal(true, {
  message: "Please confirm you have read how your information is handled.",
});

export const bookReviewSchema = z.object({
  fullName: z.string().trim().min(1, "Enter your full name."),
  businessName: z.string().trim().min(1, "Enter your business name."),
  workEmail: z.string().trim().email("Enter a valid work email address."),
  telephone: z.string().trim().optional(),
  employees: z.enum(EMPLOYEE_BANDS, {
    message: "Select the number of employees.",
  }),
  accountingSystem: z.enum(ACCOUNTING_SYSTEMS, {
    message: "Select an accounting system.",
  }),
  areaOfInterest: z.enum(AREAS_OF_INTEREST, {
    message: "Select an area of interest.",
  }),
  primaryChallenge: z.string().trim().max(2000).optional(),
  privacyConsent: consent,
});

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Enter your name."),
  business: z.string().trim().optional(),
  email: z.string().trim().email("Enter a valid email address."),
  telephone: z.string().trim().optional(),
  enquiryType: z.enum(ENQUIRY_TYPES, { message: "Select an enquiry type." }),
  message: z.string().trim().min(1, "Tell us briefly what you want to improve."),
  privacyConsent: consent,
});

export type BookReviewValues = z.infer<typeof bookReviewSchema>;
export type ContactValues = z.infer<typeof contactSchema>;

/* ---------------- Finance Operations Health Check ---------------- */

/** The doc's five response options, in order. */
export const HEALTH_CHECK_OPTIONS = [
  "Always",
  "Usually",
  "Sometimes",
  "Rarely",
  "Not sure",
] as const;

/** The doc's ten statements, verbatim and in order. */
export const HEALTH_CHECK_QUESTIONS = [
  "Supplier invoices are captured in one controlled location.",
  "Invoice approvals follow a clear and timely process.",
  "Customer invoices are issued promptly after work or delivery.",
  "Overdue accounts are followed up consistently.",
  "Finance responsibilities are documented and understood.",
  "Key tasks can continue when a team member is absent.",
  "Monthly reports are delivered on time.",
  "Management can clearly see near-term cash requirements.",
  "Reports explain significant movements and expected actions.",
  "Systems and spreadsheets do not require excessive manual rework.",
] as const;

/**
 * Scoring weights and band thresholds are NOT specified by the content doc.
 * These are structural defaults — confirm with the client before launch.
 * "Not sure" scores zero deliberately: an absence of visibility is itself a
 * weak signal, not a neutral one.
 */
export const HEALTH_CHECK_WEIGHTS: Record<(typeof HEALTH_CHECK_OPTIONS)[number], number> = {
  Always: 4,
  Usually: 3,
  Sometimes: 2,
  Rarely: 1,
  "Not sure": 0,
};

export const HEALTH_CHECK_MAX = HEALTH_CHECK_QUESTIONS.length * 4;

/** The doc's three indicative bands, wording verbatim. */
export const HEALTH_CHECK_BANDS = [
  {
    min: 30,
    title: "Strong foundation",
    body: "Core processes appear controlled. Focus on optimisation, automation and decision insight.",
  },
  {
    min: 18,
    title: "Functional but vulnerable",
    body: "Processes operate, but several areas depend on manual effort or individual knowledge.",
  },
  {
    min: 0,
    title: "Immediate attention recommended",
    body: "Gaps in control, capacity or visibility may be affecting cash flow and increasing operational risk.",
  },
] as const;

export function healthCheckBand(score: number) {
  return HEALTH_CHECK_BANDS.find((band) => score >= band.min) ?? HEALTH_CHECK_BANDS[2];
}

export const healthCheckSchema = z.object({
  fullName: z.string().trim().min(1, "Enter your full name."),
  workEmail: z.string().trim().email("Enter a valid work email address."),
  businessName: z.string().trim().optional(),
  score: z.number().int().min(0).max(HEALTH_CHECK_MAX),
  band: z.string().trim().min(1),
  privacyConsent: consent,
});

export type HealthCheckValues = z.infer<typeof healthCheckSchema>;
