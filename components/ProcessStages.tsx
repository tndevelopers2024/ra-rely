import BulletList from "./BulletList";
import styles from "./ProcessStages.module.css";

export type Stage = { title: string; points: string[] };

/** Numbered delivery stages, each carrying its own bullet list. */
export default function ProcessStages({ stages }: { stages: Stage[] }) {
  return (
    <ol className={styles.list}>
      {stages.map((stage, i) => (
        <li key={stage.title} className={styles.stage} data-reveal>
          <div className={styles.head}>
            <span className={styles.num} aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className={`display ${styles.title}`}>{stage.title}</h3>
          </div>
          <BulletList items={stage.points} />
        </li>
      ))}
    </ol>
  );
}
