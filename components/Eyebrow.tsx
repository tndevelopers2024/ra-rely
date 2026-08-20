type Props = {
  children: React.ReactNode;
  /** Drops the leading rule — use for centred sections. */
  plain?: boolean;
  className?: string;
};

export default function Eyebrow({ children, plain, className }: Props) {
  const cls = ["eyebrow", plain ? "eyebrow-plain" : "", className]
    .filter(Boolean)
    .join(" ");
  return <p className={cls}>{children}</p>;
}
