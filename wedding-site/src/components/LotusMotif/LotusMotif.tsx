interface LotusMotifProps {
  className?: string;
  flip?: boolean;
  size?: number;
}

/** Corner ornament: a pair of peacock feathers in emerald and gold (original line-art). */
export function LotusMotif({ className, flip = false, size = 120 }: LotusMotifProps) {
  const feather = (tx: number, ty: number, rot: number, s: number) => (
    <g transform={`translate(${tx} ${ty}) rotate(${rot}) scale(${s})`}>
      <path d="M0 0 C -28 -10 -28 -42 0 -54 C 28 -42 28 -10 0 0 Z" fill="var(--color-emerald)" opacity="0.55" />
      <path d="M0 -4 C -16 -12 -16 -36 0 -46 C 16 -36 16 -12 0 -4 Z" fill="var(--color-accent)" opacity="0.35" />
      <ellipse cx="0" cy="-27" rx="10" ry="14" fill="var(--color-gold-bright)" opacity="0.9" />
      <ellipse cx="0" cy="-27" rx="6.5" ry="9.5" fill="var(--color-emerald)" />
      <ellipse cx="0" cy="-27" rx="3" ry="4.6" fill="var(--color-base)" />
    </g>
  );
  return (
    <svg
      className={`lotus-motif ${className ?? ''}`}
      width={size}
      height={size}
      viewBox="0 0 120 120"
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
      aria-hidden="true"
    >
      <path d="M6 116 C 30 100, 52 78, 70 50" fill="none" stroke="var(--color-gold)" strokeWidth="1.2" />
      <path d="M6 116 C 40 106, 66 96, 96 80" fill="none" stroke="var(--color-gold-line)" strokeWidth="1" opacity="0.8" />
      {feather(70, 50, 28, 1)}
      {feather(96, 80, 62, 0.62)}
    </svg>
  );
}
