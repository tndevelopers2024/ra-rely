import Button from "./Button";
import styles from "./CtaBand.module.css";

type Props = {
  /** Each page supplies its own heading and its own CTA label. */
  title: string;
  body?: string;
  ctaLabel: string;
  ctaHref: string;
  secondary?: { label: string; href: string };
};

export default function CtaBand({
  title,
  body,
  ctaLabel,
  ctaHref,
  secondary,
}: Props) {
  return (
    <section className={styles.band} aria-labelledby="cta-heading">
      <div className={`wrap ${styles.inner}`}>
        <hr className={`gold-rule ${styles.rule}`} data-reveal />
        <h2 id="cta-heading" className={`display ${styles.title}`} data-reveal>
          {title}
        </h2>
        {body && (
          <p className={styles.body} data-reveal>
            {body}
          </p>
        )}
        <div
          className={styles.actions}
          data-reveal
          style={{ "--reveal-delay": "0.08s" } as React.CSSProperties}
        >
          <Button href={ctaHref} variant="invert">
            {ctaLabel}
          </Button>
          {secondary && (
            <Button href={secondary.href} variant="line" className={styles.ghost}>
              {secondary.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
