import styles from "./Callout.module.css";

type Props = {
  title: string;
  body: string;
  /** ivory is the premium moment; cloud is the quieter supporting note. */
  tone?: "ivory" | "cloud";
  headingLevel?: "h2" | "h3";
  id?: string;
};

export default function Callout({
  title,
  body,
  tone = "ivory",
  headingLevel: Tag = "h3",
  id,
}: Props) {
  return (
    <aside className={`${styles.callout} ${styles[tone]}`} data-reveal>
      <hr className={`gold-rule ${styles.rule}`} />
      <Tag id={id} className={`display ${styles.title}`}>
        {title}
      </Tag>
      <p className={styles.body}>{body}</p>
    </aside>
  );
}
