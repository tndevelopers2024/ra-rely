import styles from "./BulletList.module.css";

type Props = {
  items: string[];
  /** Two columns for the longer lists. */
  columns?: 1 | 2;
  className?: string;
};

export default function BulletList({ items, columns = 1, className }: Props) {
  const cls = [styles.list, columns === 2 ? styles.two : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <ul className={cls}>
      {items.map((item, i) => (
        <li
          key={item}
          className={styles.item}
          data-reveal
          style={{ "--reveal-delay": `${Math.min(i, 6) * 0.05}s` } as React.CSSProperties}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
