import styles from "./StackedBlocks.module.css";

export type Block = { title: string; body: string };

type Props = {
  blocks: Block[];
  headingLevel?: "h2" | "h3";
};

/**
 * Vertical blocks — used for the industry sections. Deliberately not a pinned
 * horizontal rail: that suits a photo portfolio, not five text blocks.
 */
export default function StackedBlocks({
  blocks,
  headingLevel: Tag = "h2",
}: Props) {
  return (
    <div className={styles.list}>
      {blocks.map((block, i) => (
        <article
          key={block.title}
          className={styles.block}
          data-reveal
          style={{ "--reveal-delay": `${Math.min(i, 4) * 0.06}s` } as React.CSSProperties}
        >
          <span className={styles.num} aria-hidden="true">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className={styles.content}>
            <Tag className={`display ${styles.title}`}>{block.title}</Tag>
            <p className={styles.body}>{block.body}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
