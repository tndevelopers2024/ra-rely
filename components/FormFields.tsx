"use client";

import { forwardRef } from "react";
import styles from "./FormFields.module.css";

type BaseProps = {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
};

function describedBy(id: string, error?: string) {
  return error ? `${id}-error` : undefined;
}

function Label({ id, label, required }: BaseProps) {
  return (
    <label htmlFor={id} className={styles.label}>
      {label}
      {required ? (
        <span className={styles.req} aria-hidden="true">
          *
        </span>
      ) : (
        <span className={styles.optional}> (optional)</span>
      )}
    </label>
  );
}

function Error({ id, error }: { id: string; error?: string }) {
  if (!error) return null;
  return (
    <p id={`${id}-error`} className={styles.error} role="alert">
      {error}
    </p>
  );
}

type InputProps = BaseProps & React.InputHTMLAttributes<HTMLInputElement>;

export const TextField = forwardRef<HTMLInputElement, InputProps>(
  function TextField({ id, label, error, required, ...rest }, ref) {
    return (
      <div className={styles.field}>
        <Label id={id} label={label} required={required} />
        <input
          {...rest}
          id={id}
          ref={ref}
          className={styles.input}
          aria-required={required ? "true" : undefined}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={describedBy(id, error)}
        />
        <Error id={id} error={error} />
      </div>
    );
  }
);

type SelectProps = BaseProps &
  React.SelectHTMLAttributes<HTMLSelectElement> & {
    options: readonly string[];
    placeholder: string;
  };

export const SelectField = forwardRef<HTMLSelectElement, SelectProps>(
  function SelectField(
    { id, label, error, required, options, placeholder, ...rest },
    ref
  ) {
    return (
      <div className={styles.field}>
        <Label id={id} label={label} required={required} />
        <div className={styles.selectWrap}>
          <select
            {...rest}
            id={id}
            ref={ref}
            defaultValue=""
            className={styles.input}
            aria-required={required ? "true" : undefined}
            aria-invalid={error ? "true" : undefined}
            aria-describedby={describedBy(id, error)}
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <span className={styles.caret} aria-hidden="true" />
        </div>
        <Error id={id} error={error} />
      </div>
    );
  }
);

type TextareaProps = BaseProps &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextareaField = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function TextareaField({ id, label, error, required, ...rest }, ref) {
    return (
      <div className={`${styles.field} ${styles.full}`}>
        <Label id={id} label={label} required={required} />
        <textarea
          {...rest}
          id={id}
          ref={ref}
          rows={5}
          className={`${styles.input} ${styles.textarea}`}
          aria-required={required ? "true" : undefined}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={describedBy(id, error)}
        />
        <Error id={id} error={error} />
      </div>
    );
  }
);

type CheckboxProps = Omit<BaseProps, "label"> & {
  label: React.ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const CheckboxField = forwardRef<HTMLInputElement, CheckboxProps>(
  function CheckboxField({ id, label, error, required, ...rest }, ref) {
    return (
      <div className={`${styles.field} ${styles.full}`}>
        <div className={styles.checkRow}>
          <input
            {...rest}
            type="checkbox"
            id={id}
            ref={ref}
            className={styles.checkbox}
            aria-required={required ? "true" : undefined}
            aria-invalid={error ? "true" : undefined}
            aria-describedby={describedBy(id, error)}
          />
          <label htmlFor={id} className={styles.checkLabel}>
            {label}
            {required && (
              <span className={styles.req} aria-hidden="true">
                *
              </span>
            )}
          </label>
        </div>
        <Error id={id} error={error} />
      </div>
    );
  }
);
