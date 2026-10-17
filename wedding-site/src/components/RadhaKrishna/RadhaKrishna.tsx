interface RadhaKrishnaProps {
  className?: string;
  size?: number;
}

/**
 * A small Radha-Krishna motif in profile, drawn as simple linework with
 * flat gold/maroon fills — Krishna at right with a peacock-feather crown
 * and flute, Radha at left, hands joined at centre. Original artwork built
 * to match the site's existing line-art register (see Monogram, Divider),
 * not traced or copied from any reference image.
 */
export function RadhaKrishna({ className, size = 120 }: RadhaKrishnaProps) {
  return (
    <svg
      className={`radha-krishna ${className ?? ''}`}
      width={size}
      height={size}
      viewBox="0 0 200 200"
      aria-hidden="true"
    >
      {/* halo arch behind both figures */}
      <path
        d="M30 150 C 30 70, 80 30, 100 30 C 120 30, 170 70, 170 150"
        fill="none"
        stroke="var(--color-gold-line)"
        strokeWidth="1"
        opacity="0.5"
      />

      {/* joined hands / centre motif */}
      <path
        d="M92 128 C 96 122, 104 122, 108 128"
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="100" cy="126" r="2.2" fill="var(--color-gold)" />

      {/* ---- Radha (left) ---- */}
      <g>
        {/* dupatta / drape */}
        <path
          d="M46 190 C 40 150, 44 110, 62 92 C 74 104, 78 130, 74 190 Z"
          fill="var(--color-petal)"
          opacity="0.85"
        />
        {/* neck + face profile, facing right */}
        <path
          d="M64 92 C 60 84, 60 74, 66 68 C 74 62, 84 66, 86 76 C 87 84, 82 90, 76 94 L 74 108 L 64 108 Z"
          fill="var(--color-surface)"
          stroke="var(--color-accent)"
          strokeWidth="1"
        />
        {/* headpiece + bindi dot */}
        <path
          d="M66 68 C 70 60, 82 60, 86 68"
          fill="none"
          stroke="var(--color-gold)"
          strokeWidth="1.2"
        />
        <circle cx="80" cy="76" r="1.4" fill="var(--color-accent)" />
        {/* earring + necklace hint */}
        <circle cx="85" cy="84" r="1.6" fill="var(--color-gold)" />
        <path d="M68 106 C 72 110, 78 110, 82 106" fill="none" stroke="var(--color-gold)" strokeWidth="1" />
        {/* arm reaching to centre */}
        <path
          d="M74 118 C 82 122, 88 124, 93 127"
          fill="none"
          stroke="var(--color-surface)"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M74 118 C 82 122, 88 124, 93 127"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </g>

      {/* ---- Krishna (right) ---- */}
      <g>
        {/* garment */}
        <path
          d="M154 190 C 160 150, 156 110, 138 92 C 126 104, 122 130, 126 190 Z"
          fill="var(--color-emerald)"
          opacity="0.85"
        />
        {/* neck + face profile, facing left */}
        <path
          d="M136 92 C 140 84, 140 74, 134 68 C 126 62, 116 66, 114 76 C 113 84, 118 90, 124 94 L 126 108 L 136 108 Z"
          fill="var(--color-petal-deep)"
          opacity="0.9"
          stroke="var(--color-emphasis)"
          strokeWidth="1"
        />
        {/* peacock feather crown */}
        <path d="M134 68 C 130 58, 128 48, 130 40" fill="none" stroke="var(--color-emerald)" strokeWidth="1.2" />
        <ellipse cx="130" cy="38" rx="4" ry="7" fill="var(--color-emerald)" opacity="0.8" />
        <circle cx="130" cy="37" r="1.6" fill="var(--color-gold)" />
        <path
          d="M114 68 C 118 60, 128 60, 134 68"
          fill="none"
          stroke="var(--color-gold)"
          strokeWidth="1.2"
        />
        {/* earring */}
        <circle cx="115" cy="84" r="1.6" fill="var(--color-gold)" />
        {/* flute held across, arm reaching to centre */}
        <path
          d="M126 118 C 118 122, 112 124, 107 127"
          fill="none"
          stroke="var(--color-petal-deep)"
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.9"
        />
        <path
          d="M126 118 C 118 122, 112 124, 107 127"
          fill="none"
          stroke="var(--color-emphasis)"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path
          d="M100 100 L138 78"
          stroke="var(--color-gold)"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <circle cx="106" cy="97" r="1" fill="var(--color-accent)" />
        <circle cx="114" cy="92" r="1" fill="var(--color-accent)" />
        <circle cx="122" cy="87" r="1" fill="var(--color-accent)" />
      </g>

      {/* base flourish */}
      <path
        d="M60 190 C 100 182, 100 182, 140 190"
        fill="none"
        stroke="var(--color-gold-line)"
        strokeWidth="0.8"
        opacity="0.5"
      />
    </svg>
  );
}