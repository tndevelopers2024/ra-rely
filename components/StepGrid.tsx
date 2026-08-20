import styles from "./StepGrid.module.css";

export type Step = { title: string; body: string };

type Props = {
  steps: Step[];
  headingLevel?: "h3" | "h4";
};

export default function StepGrid({ steps, headingLevel: Tag = "h3" }: Props) {
  return (
    <ol className={styles.grid}>
      {steps.map((step, i) => (
        <li
          key={step.title}
          className={styles.step}
          data-reveal
          style={{ "--reveal-delay": `${i * 0.08}s` } as React.CSSProperties}
        >
          <span className={styles.num} aria-hidden="true">
            {String(i + 1).padStart(2, "0")}
          </span>
          <Tag className={styles.title}>{step.title}</Tag>
          <p className={styles.body}>{step.body}</p>
        </li>
      ))}
    </ol>
  );
}
