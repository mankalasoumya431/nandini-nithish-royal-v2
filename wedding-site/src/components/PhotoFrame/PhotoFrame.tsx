import './PhotoFrame.css';

interface PhotoFrameProps {
  src?: string;
  alt: string;
  /** Fallback initial shown when no photo has been added yet */
  initial?: string;
  shape?: 'arch' | 'round';
  className?: string;
}

/**
 * A photo frame in the invitation's own hand: a temple-arch silhouette with
 * a slim double gold hairline, a soft ivory mat, a small finial at the crown,
 * and a thin corner flourish at the base — echoing the arch-shaped portraits
 * and hanging ornaments on printed Telugu wedding cards. Falls back to a
 * lightly-lettered mat when no photo has been supplied yet, so the layout
 * looks intentional even before real photos are dropped in.
 */
export function PhotoFrame({ src, alt, initial, shape = 'arch', className }: PhotoFrameProps) {
  return (
    <div className={`photo-frame photo-frame--${shape} ${className ?? ''}`}>
      {shape === 'arch' && (
        <svg className="photo-frame__finial" viewBox="0 0 40 26" aria-hidden="true">
          <path d="M20 26 V10" stroke="var(--color-gold)" strokeWidth="1.2" fill="none" />
          <path
            d="M20 2 C 23 6 23 10 20 12 C 17 10 17 6 20 2 Z"
            fill="var(--color-gold-bright)"
          />
          <circle cx="20" cy="1" r="1.6" fill="var(--color-gold)" />
        </svg>
      )}

      <span className="photo-frame__corner photo-frame__corner--bl" aria-hidden="true" />
      <span className="photo-frame__corner photo-frame__corner--br" aria-hidden="true" />

      <div className="photo-frame__mat">
        {src ? (
          <img src={src} alt={alt} className="photo-frame__img" loading="lazy" />
        ) : (
          <span className="photo-frame__placeholder" aria-hidden="true">
            {initial}
          </span>
        )}
      </div>
    </div>
  );
}
