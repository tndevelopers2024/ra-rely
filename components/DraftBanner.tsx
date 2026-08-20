import styles from "./DraftBanner.module.css";

/**
 * The content doc marks the privacy policy and terms as legal drafts. The
 * banner is deliberately impossible to miss — these must not be treated as
 * final without legal review.
 */
export default function DraftBanner({ children }: { children: React.ReactNode }) {
  return (
    <aside className={styles.banner} data-placeholder="true">
      <p className={styles.label}>Legal draft for review</p>
      <p className={styles.body}>{children}</p>
    </aside>
  );
}
