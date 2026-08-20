import { FORM_SECURITY_NOTICE } from "@/lib/site";
import styles from "./SecurityNotice.module.css";

/** Rendered beside every form. Styled so it cannot be missed. */
export default function SecurityNotice() {
  return (
    <aside className={styles.notice} aria-labelledby="security-notice-title">
      <span className={styles.mark} aria-hidden="true" />
      <div>
        <p id="security-notice-title" className={styles.title}>
          {FORM_SECURITY_NOTICE.title}
        </p>
        <p className={styles.body}>{FORM_SECURITY_NOTICE.body}</p>
      </div>
    </aside>
  );
}
