"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ENQUIRY_TYPES,
  contactSchema,
  type ContactValues,
} from "@/lib/schemas";
import {
  CheckboxField,
  SelectField,
  TextField,
  TextareaField,
} from "./FormFields";
import SecurityNotice from "./SecurityNotice";
import styles from "./Form.module.css";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [failed, setFailed] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
  });

  const onSubmit = handleSubmit(async (values) => {
    setFailed(false);
    try {
      const res = await fetch("/api/contact", {
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
          Thank you — your enquiry has been received
        </h3>
        <p className={styles.successBody}>
          We will respond with the most appropriate next step.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.layout}>
      <form className={styles.form} onSubmit={onSubmit} noValidate>
        <div className={styles.grid}>
          <TextField
            id="name"
            label="Name"
            required
            autoComplete="name"
            disabled={isSubmitting}
            error={errors.name?.message}
            {...register("name")}
          />
          <TextField
            id="business"
            label="Business"
            autoComplete="organization"
            disabled={isSubmitting}
            error={errors.business?.message}
            {...register("business")}
          />
          <TextField
            id="email"
            label="Email"
            type="email"
            required
            autoComplete="email"
            disabled={isSubmitting}
            error={errors.email?.message}
            {...register("email")}
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
            id="enquiryType"
            label="Enquiry type"
            required
            placeholder="Select an enquiry type"
            options={ENQUIRY_TYPES}
            disabled={isSubmitting}
            error={errors.enquiryType?.message}
            {...register("enquiryType")}
          />
          <TextareaField
            id="message"
            label="Message"
            required
            disabled={isSubmitting}
            error={errors.message?.message}
            {...register("message")}
          />
          <CheckboxField
            id="contactPrivacyConsent"
            required
            disabled={isSubmitting}
            error={errors.privacyConsent?.message}
            label="I consent to Rely Advisory Group handling the information in this form in line with its Privacy Policy."
            {...register("privacyConsent")}
          />
        </div>

        {failed && (
          <p className={styles.formError} role="alert">
            Something went wrong sending your enquiry. Please try again, or
            contact us directly.
          </p>
        )}

        <button type="submit" className="btn btn-solid" disabled={isSubmitting}>
          {isSubmitting ? "Sending…" : "Send enquiry"}
        </button>
      </form>

      <div className={styles.aside}>
        <SecurityNotice />
      </div>
    </div>
  );
}
