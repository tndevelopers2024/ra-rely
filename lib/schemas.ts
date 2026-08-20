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
