import Link from "next/link";
import styles from "./Card.module.css";

type Props = {
  title: string;
  body: string;
  /** When set, the whole card becomes one link whose accessible name is the
   *  title — this is what keeps card link text unique across a page. */
  href?: string;
  /** Stagger index — drives --reveal-delay. */
  index?: number;
  headingLevel?: "h3" | "h4";
  /** Resource named by the content doc that does not exist yet. Rendered
   *  unlinked and visibly unavailable rather than as a dead promise. */
  pending?: boolean;
};

export default function Card({
  title,
  body,
  href,
  index = 0,
  headingLevel: Tag = "h3",
  pending,
}: Props) {
  const delay = `${Math.min(index, 5) * 0.08}s`;

  return (
    <article
      className={`${styles.card} ${href ? styles.linked : ""} ${pending ? styles.pending : ""}`}
      data-placeholder={pending ? "true" : undefined}
      data-reveal
      style={{ "--reveal-delay": delay } as React.CSSProperties}
    >
      <Tag className={styles.title}>
        {href ? (
          <Link href={href} className={styles.link}>
            {title}
          </Link>
        ) : (
          title
        )}
      </Tag>
      <p className={styles.body}>{body}</p>
      {pending && (
        <p className={styles.pendingFlag}>Not yet available</p>
      )}
      {href && (
        <span className={styles.cue} aria-hidden="true">
          →
        </span>
      )}
    </article>
  );
}
