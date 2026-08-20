import styles from "./CardGrid.module.css";

type Props = {
  children: React.ReactNode;
  /** 2 drives the 2x2 grids, 3 the 3x2 service grids. */
  columns?: 2 | 3;
  className?: string;
};

export default function CardGrid({ children, columns = 2, className }: Props) {
  const cls = [styles.grid, styles[`cols${columns}`], className]
    .filter(Boolean)
    .join(" ");
  return <div className={cls}>{children}</div>;
}
