import Eyebrow from "./Eyebrow";
import styles from "./SectionHeading.module.css";

type Props = {
  title: string;
  eyebrow?: string;
  intro?: string;
  /** Defaults to h2. Pages own their single h1. */
  as?: "h1" | "h2" | "h3";
  align?: "left" | "centre";
  id?: string;
};

export default function SectionHeading({
  title,
  eyebrow,
  intro,
  as: Tag = "h2",
  align = "left",
  id,
}: Props) {
  return (
    <header
      className={`${styles.head} ${align === "centre" ? styles.centre : ""}`}
      data-reveal
    >
      {eyebrow && <Eyebrow plain={align === "centre"}>{eyebrow}</Eyebrow>}
      <Tag id={id} className={`display ${styles.title}`}>
        {title}
      </Tag>
      {intro && <p className={styles.intro}>{intro}</p>}
    </header>
  );
}
