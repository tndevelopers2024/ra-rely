import Link from "next/link";
import {
  FOOTER_COLUMNS,
  LEGAL_LINKS,
  PLACEHOLDER,
  SITE,
} from "@/lib/site";
import styles from "./Closing.module.css";

export default function Closing() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.inner}`}>
        <div className={styles.top}>
          <div className={styles.brandCol}>
            {/* Typeset wordmark: the supplied logo is navy-and-gold ink, so it
                disappears on navy. A reversed asset is required — see
                PLACEHOLDERS.md. */}
            <p className={`display ${styles.wordmark}`}>{SITE.name}</p>
            <hr className={`gold-rule ${styles.rule}`} />
            <p className={styles.trust}>{SITE.trustStatement}</p>
          </div>

          <nav className={styles.cols} aria-label="Footer">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.label} className={styles.col}>
                {/* Column labels are <strong>, deliberately not headings. */}
                <strong className={styles.colLabel}>{col.label}</strong>
                <ul className={styles.colList}>
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className={styles.link}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className={styles.col}>
              <strong className={styles.colLabel}>Contact</strong>
              <ul className={styles.colList}>
                <li>
                  <span className={styles.placeholder} data-placeholder="true">
                    {PLACEHOLDER.email}
                  </span>
                </li>
                <li>
                  <span className={styles.placeholder} data-placeholder="true">
                    {PLACEHOLDER.telephone}
                  </span>
                </li>
                <li className={styles.plain}>{PLACEHOLDER.location}</li>
                <li>
                  <span className={styles.placeholder} data-placeholder="true">
                    {PLACEHOLDER.hours}
                  </span>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {year} {SITE.name}. All rights reserved.
          </p>
          <ul className={styles.legal}>
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.link}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
