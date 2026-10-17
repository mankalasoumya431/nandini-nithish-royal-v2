interface TempleSilhouetteProps {
  className?: string;
}

/**
 * A quiet section divider: a stepped gopuram (temple tower) silhouette with
 * a kalasha at its crown, flanked by banana-leaf fronds — the shape of a
 * mandapam entrance rather than a literal scene. Original line-and-flat-fill
 * artwork in the site's own palette, kept as a silhouette so it reads as
 * ornament rather than illustration.
 */
export function TempleSilhouette({ className }: TempleSilhouetteProps) {
  return (
    <svg
      className={`temple-silhouette ${className ?? ''}`}
      viewBox="0 0 360 140"
      preserveAspectRatio="xMidYMax meet"
      aria-hidden="true"
    >
      {/* left banana leaves */}
      <g opacity="0.6">
        <path
          d="M40 140 C 10 120, 4 90, 20 62 C 30 92, 34 116, 40 140 Z"
          fill="var(--color-emerald)"
          opacity="0.4"
        />
        <path
          d="M55 140 C 30 116, 26 86, 44 58 C 50 90, 52 116, 55 140 Z"
          fill="var(--color-emerald)"
          opacity="0.55"
        />
        <path d="M40 140 C 34 112, 30 88, 24 66" stroke="var(--color-emerald)" strokeWidth="0.8" fill="none" opacity="0.5" />
      </g>

      {/* right banana leaves */}
      <g opacity="0.6">
        <path
          d="M320 140 C 350 120, 356 90, 340 62 C 330 92, 326 116, 320 140 Z"
          fill="var(--color-emerald)"
          opacity="0.4"
        />
        <path
          d="M305 140 C 330 116, 334 86, 316 58 C 310 90, 308 116, 305 140 Z"
          fill="var(--color-emerald)"
          opacity="0.55"
        />
        <path d="M320 140 C 326 112, 330 88, 336 66" stroke="var(--color-emerald)" strokeWidth="0.8" fill="none" opacity="0.5" />
      </g>

      {/* gopuram silhouette, stepped tiers narrowing upward */}
      <g fill="none" stroke="var(--color-accent)" strokeWidth="1.1" opacity="0.75">
        <path d="M120 140 L120 118 L240 118 L240 140" />
        <path d="M128 118 L136 96 L224 96 L232 118" />
        <path d="M140 96 L146 78 L214 78 L220 96" />
        <path d="M152 78 L157 62 L203 62 L208 78" />
        <path d="M163 62 L167 48 L193 48 L197 62" />
        <path d="M172 48 L176 34 L184 34 L188 48" />
      </g>
      {/* tier hairlines */}
      <g stroke="var(--color-gold-line)" strokeWidth="0.7" opacity="0.6">
        <line x1="128" y1="118" x2="232" y2="118" />
        <line x1="140" y1="96" x2="220" y2="96" />
        <line x1="152" y1="78" x2="208" y2="78" />
        <line x1="163" y1="62" x2="197" y2="62" />
        <line x1="172" y1="48" x2="188" y2="48" />
      </g>

      {/* kalasha finial */}
      <path d="M180 34 L180 22" stroke="var(--color-gold)" strokeWidth="1" />
      <path
        d="M180 14 C 183 17 183 21 180 23 C 177 21 177 17 180 14 Z"
        fill="var(--color-gold-bright)"
      />
      <circle cx="180" cy="12" r="1.6" fill="var(--color-gold)" />

      {/* base line */}
      <line x1="70" y1="140" x2="290" y2="140" stroke="var(--color-gold-line)" strokeWidth="0.8" opacity="0.5" />
    </svg>
  );
}
