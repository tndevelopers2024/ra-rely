import styles from "./PlaceholderBlock.module.css";

type Props = {
  /** The doc's instruction, kept verbatim. */
  title: string;
  body: string;
  headingLevel?: "h2" | "h3";
  id?: string;
};

/**
 * Content the content doc explicitly defers to the client. Rendered so it
 * reads as unmistakably unfinished rather than as approved copy — never
 * filled with plausible-looking substitutes. Listed in PLACEHOLDERS.md.
 */
export default function PlaceholderBlock({
  title,
  body,
  headingLevel: Tag = "h3",
  id,
}: Props) {
  return (
    <div className={styles.block} data-placeholder="true" data-reveal>
      <p className={styles.flag}>Awaiting client confirmation — not for publication</p>
      <Tag id={id} className={styles.title}>
        {title}
      </Tag>
      <p className={styles.body}>{body}</p>
    </div>
  );
}
