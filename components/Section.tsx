import styles from "./Section.module.css";

export type Surface = "white" | "ivory" | "cloud" | "navy";

type Props = {
  children: React.ReactNode;
  surface?: Surface;
  id?: string;
  className?: string;
  /** Render children edge-to-edge instead of inside the max-width container. */
  bleed?: boolean;
  labelledBy?: string;
};

export default function Section({
  children,
  surface = "white",
  id,
  className,
  bleed,
  labelledBy,
}: Props) {
  const cls = ["section-pad", styles[surface], className].filter(Boolean).join(" ");

  return (
    <section id={id} className={cls} aria-labelledby={labelledBy}>
      {bleed ? children : <div className="wrap">{children}</div>}
    </section>
  );
}
