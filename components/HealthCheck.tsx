"use client";

import { useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  HEALTH_CHECK_MAX,
  HEALTH_CHECK_OPTIONS,
  HEALTH_CHECK_QUESTIONS,
  HEALTH_CHECK_WEIGHTS,
  healthCheckBand,
  healthCheckSchema,
  type HealthCheckValues,
} from "@/lib/schemas";
import { CheckboxField, TextField } from "./FormFields";
import SecurityNotice from "./SecurityNotice";
import Button from "./Button";
import styles from "./HealthCheck.module.css";

type Option = (typeof HEALTH_CHECK_OPTIONS)[number];

export default function HealthCheck() {
  const [answers, setAnswers] = useState<Record<number, Option>>({});
  const [showResult, setShowResult] = useState(false);
  const [incomplete, setIncomplete] = useState(false);
  const [sent, setSent] = useState(false);
  const [failed, setFailed] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  const answered = Object.keys(answers).length;
  const total = HEALTH_CHECK_QUESTIONS.length;
  const complete = answered === total;

  const score = useMemo(
    () =>
      Object.values(answers).reduce(
        (sum, option) => sum + HEALTH_CHECK_WEIGHTS[option],
        0
      ),
    [answers]
  );

  const band = healthCheckBand(score);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<HealthCheckValues>({
    resolver: zodResolver(healthCheckSchema),
    mode: "onBlur",
    values: { score, band: band.title } as HealthCheckValues,
  });

  function onSeeResult() {
    if (!complete) {
      setIncomplete(true);
      return;
    }
    setIncomplete(false);
    setShowResult(true);
    // Move focus to the result so keyboard and screen-reader users land on it.
    requestAnimationFrame(() => resultRef.current?.focus());
  }

  const onSubmit = handleSubmit(async (values) => {
    setFailed(false);
    try {
      const res = await fetch("/api/health-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, score, band: band.title }),
      });
      if (!res.ok) throw new Error("Request failed");
      setSent(true);
    } catch {
      setFailed(true);
    }
  });

  return (
    <div className={styles.wrap}>
      {/* Progress is announced politely, not on every keystroke. */}
      <div className={styles.progress}>
        <div className={styles.progressText} aria-live="polite">
          {answered} of {total} answered
        </div>
        <div
          className={styles.track}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={total}
          aria-valuenow={answered}
          aria-label="Assessment progress"
        >
          <div
            className={styles.fill}
            style={{ "--progress": `${(answered / total) * 100}%` } as React.CSSProperties}
          />
        </div>
      </div>

      <ol className={styles.questions}>
        {HEALTH_CHECK_QUESTIONS.map((question, i) => (
          <li key={question} className={styles.question}>
            <fieldset className={styles.fieldset}>
              <legend className={styles.legend}>
                <span className={styles.num} aria-hidden="true">
                  {i + 1}.
                </span>
                {question}
              </legend>
              <div className={styles.options}>
                {HEALTH_CHECK_OPTIONS.map((option) => {
                  const id = `q${i}-${option.replace(/\s+/g, "-")}`;
                  return (
                    <span key={option} className={styles.option}>
                      <input
                        type="radio"
                        id={id}
                        name={`question-${i}`}
                        value={option}
                        className={styles.radio}
                        checked={answers[i] === option}
                        onChange={() =>
                          setAnswers((prev) => ({ ...prev, [i]: option }))
                        }
                      />
                      <label htmlFor={id} className={styles.optionLabel}>
                        {option}
                      </label>
                    </span>
                  );
                })}
              </div>
            </fieldset>
          </li>
        ))}
      </ol>

      {incomplete && (
        <p className={styles.error} role="alert">
          Answer all {total} statements to see your indicative result.
        </p>
      )}

      {!showResult && (
        <Button onClick={onSeeResult}>See my result</Button>
      )}

      {showResult && (
        <div
          className={styles.result}
          ref={resultRef}
          tabIndex={-1}
          role="status"
        >
          <hr className={`gold-rule ${styles.resultRule}`} />
          <p className={styles.resultLabel}>Indicative result</p>
          <h3 className={`display ${styles.resultTitle}`}>{band.title}</h3>
          <p className={styles.resultBody}>{band.body}</p>
          <p className={styles.score}>
            Score: {score} of {HEALTH_CHECK_MAX}
          </p>
          <p className={styles.caveat}>
            This is an indicative self-assessment, not advice. A Finance
            Operations Review looks at your actual systems and volumes.
          </p>
        </div>
      )}

      {showResult && !sent && (
        <div className={styles.capture}>
          <div>
            <h3 className={`display ${styles.captureTitle}`}>
              Receive my result and recommendations
            </h3>
            <p className={styles.captureBody}>
              Your result is already shown above. Send it to your inbox with
              written recommendations if that is useful.
            </p>
            <form className={styles.form} onSubmit={onSubmit} noValidate>
              <TextField
                id="hcFullName"
                label="Full name"
                required
                autoComplete="name"
                disabled={isSubmitting}
                error={errors.fullName?.message}
                {...register("fullName")}
              />
              <TextField
                id="hcWorkEmail"
                label="Work email"
                type="email"
                required
                autoComplete="email"
                disabled={isSubmitting}
                error={errors.workEmail?.message}
                {...register("workEmail")}
              />
              <TextField
                id="hcBusinessName"
                label="Business name"
                autoComplete="organization"
                disabled={isSubmitting}
                error={errors.businessName?.message}
                {...register("businessName")}
              />
              <CheckboxField
                id="hcPrivacyConsent"
                required
                disabled={isSubmitting}
                error={errors.privacyConsent?.message}
                label="I consent to Rely Advisory Group handling the information in this form in line with its Privacy Policy."
                {...register("privacyConsent")}
              />
              {failed && (
                <p className={styles.error} role="alert">
                  Something went wrong sending your result. Please try again.
                </p>
              )}
              <button
                type="submit"
                className="btn btn-solid"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending…" : "Receive my result and recommendations"}
              </button>
            </form>
          </div>
          <SecurityNotice />
        </div>
      )}

      {sent && (
        <div className={styles.result} role="status">
          <hr className={`gold-rule ${styles.resultRule}`} />
          <h3 className={`display ${styles.resultTitle}`}>
            Thank you — your result is on its way
          </h3>
          <p className={styles.resultBody}>
            We will follow up with written recommendations based on your
            answers.
          </p>
        </div>
      )}
    </div>
  );
}
