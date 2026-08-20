"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ACCOUNTING_SYSTEMS,
  AREAS_OF_INTEREST,
  EMPLOYEE_BANDS,
  bookReviewSchema,
  type BookReviewValues,
} from "@/lib/schemas";
import {
  CheckboxField,
  SelectField,
  TextField,
  TextareaField,
} from "./FormFields";
import SecurityNotice from "./SecurityNotice";
import styles from "./Form.module.css";

export default function BookReviewForm() {
  const [sent, setSent] = useState(false);
  const [failed, setFailed] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<BookReviewValues>({
    resolver: zodResolver(bookReviewSchema),
    mode: "onBlur",
  });

  const onSubmit = handleSubmit(async (values) => {
    setFailed(false);
    try {
      const res = await fetch("/api/book-a-review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setSent(true);
    } catch {
      setFailed(true);
    }
  });

  if (sent) {
    return (
      <div className={styles.success} role="status">
        <hr className={`gold-rule ${styles.successRule}`} />
        <h3 className={`display ${styles.successTitle}`}>
          Thank you — your review request has been received
        </h3>
        <p className={styles.successBody}>
          We will be in touch to arrange a focused 30-minute conversation about
          your current finance operations.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.layout}>
      <form className={styles.form} onSubmit={onSubmit} noValidate>
        <div className={styles.grid}>
          <TextField
            id="fullName"
            label="Full name"
            required
            autoComplete="name"
            disabled={isSubmitting}
            error={errors.fullName?.message}
            {...register("fullName")}
          />
          <TextField
            id="businessName"
            label="Business name"
            required
            autoComplete="organization"
            disabled={isSubmitting}
            error={errors.businessName?.message}
            {...register("businessName")}
          />
          <TextField
            id="workEmail"
            label="Work email"
            type="email"
            required
            autoComplete="email"
            disabled={isSubmitting}
            error={errors.workEmail?.message}
            {...register("workEmail")}
          />
          <TextField
            id="telephone"
            label="Telephone"
            type="tel"
            autoComplete="tel"
            disabled={isSubmitting}
            error={errors.telephone?.message}
            {...register("telephone")}
          />
          <SelectField
            id="employees"
            label="Number of employees"
            required
            placeholder="Select a range"
            options={EMPLOYEE_BANDS}
            disabled={isSubmitting}
            error={errors.employees?.message}
            {...register("employees")}
          />
          <SelectField
            id="accountingSystem"
            label="Accounting system"
            required
            placeholder="Select a system"
            options={ACCOUNTING_SYSTEMS}
            disabled={isSubmitting}
            error={errors.accountingSystem?.message}
            {...register("accountingSystem")}
          />
          <SelectField
            id="areaOfInterest"
            label="Area of interest"
            required
            placeholder="Select an area"
            options={AREAS_OF_INTEREST}
            disabled={isSubmitting}
            error={errors.areaOfInterest?.message}
            {...register("areaOfInterest")}
          />
          <TextareaField
            id="primaryChallenge"
            label="Primary challenge"
            disabled={isSubmitting}
            error={errors.primaryChallenge?.message}
            {...register("primaryChallenge")}
          />
          <CheckboxField
            id="privacyConsent"
            required
            disabled={isSubmitting}
            error={errors.privacyConsent?.message}
            label="I consent to Rely Advisory Group handling the information in this form in line with its Privacy Policy."
            {...register("privacyConsent")}
          />
        </div>

        {failed && (
          <p className={styles.formError} role="alert">
            Something went wrong sending your request. Please try again, or
            contact us directly.
          </p>
        )}

        <button
          type="submit"
          className="btn btn-solid"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending…" : "Book my free review"}
        </button>
      </form>

      <div className={styles.aside}>
        <SecurityNotice />
      </div>
    </div>
  );
}
