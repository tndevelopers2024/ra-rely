import styles from "./LegalSections.module.css";

export type LegalSection = { heading: string; body: string };

export default function LegalSections({
  sections,
}: {
  sections: LegalSection[];
}) {
  return (
    <div className={styles.doc}>
      {sections.map((section) => (
        <section key={section.heading} className={styles.section} data-reveal>
          <h2 className={styles.heading}>{section.heading}</h2>
          <p className={styles.body}>{section.body}</p>
        </section>
      ))}
    </div>
  );
}
