import Link from "next/link";

type Variant = "solid" | "line" | "invert";

type Props = {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  /** Use when the visible label is not unique across the page. */
  ariaLabel?: string;
};

const VARIANT: Record<Variant, string> = {
  solid: "btn-solid",
  line: "btn-line",
  invert: "btn-invert",
};

export default function Button({
  children,
  href,
  variant = "solid",
  type = "button",
  disabled,
  className,
  ariaLabel,
}: Props) {
  const cls = ["btn", VARIANT[variant], className].filter(Boolean).join(" ");

  if (href) {
    return (
      <Link href={href} className={cls} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={cls} disabled={disabled} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
