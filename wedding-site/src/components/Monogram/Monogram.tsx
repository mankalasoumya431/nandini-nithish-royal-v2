import { weddingData } from '../../data/weddingData';
import './Monogram.css';

interface MonogramProps {
  size?: number;
  className?: string;
}

/**
 * The wedding logo: a faceted emerald gem (octagon) set in gold, with the
 * couple's initials (weddingData.monogram) and a small diamond between them.
 */
export function Monogram({ size = 120, className }: MonogramProps) {
  return (
    <svg
      className={`monogram ${className ?? ''}`}
      width={size}
      height={size}
      viewBox="0 0 200 200"
      role="img"
      aria-label={`Logo of ${weddingData.couple.bride.personName} and ${weddingData.couple.groom.personName}`}
    >
      <polygon points="194.0,100.0 166.5,166.5 100.0,194.0 33.5,166.5 6.0,100.0 33.5,33.5 100.0,6.0 166.5,33.5" className="monogram__outer" />
      <polygon points="180.0,100.0 156.6,156.6 100.0,180.0 43.4,156.6 20.0,100.0 43.4,43.4 100.0,20.0 156.6,43.4" className="monogram__inner" />
      <line x1="180.0" y1="100.0" x2="154.0" y2="100.0" className="monogram__facet" /><line x1="156.6" y1="156.6" x2="138.2" y2="138.2" className="monogram__facet" /><line x1="100.0" y1="180.0" x2="100.0" y2="154.0" className="monogram__facet" /><line x1="43.4" y1="156.6" x2="61.8" y2="138.2" className="monogram__facet" /><line x1="20.0" y1="100.0" x2="46.0" y2="100.0" className="monogram__facet" /><line x1="43.4" y1="43.4" x2="61.8" y2="61.8" className="monogram__facet" /><line x1="100.0" y1="20.0" x2="100.0" y2="46.0" className="monogram__facet" /><line x1="156.6" y1="43.4" x2="138.2" y2="61.8" className="monogram__facet" />
      <polygon points="154.0,100.0 138.2,138.2 100.0,154.0 61.8,138.2 46.0,100.0 61.8,61.8 100.0,46.0 138.2,61.8" className="monogram__core" />
      <path d="M194.0 96.0 L197.5 100.0 L194.0 104.0 L190.5 100.0 Z" className="monogram__stud" /><path d="M166.5 162.5 L170.0 166.5 L166.5 170.5 L163.0 166.5 Z" className="monogram__stud" /><path d="M100.0 190.0 L103.5 194.0 L100.0 198.0 L96.5 194.0 Z" className="monogram__stud" /><path d="M33.5 162.5 L37.0 166.5 L33.5 170.5 L30.0 166.5 Z" className="monogram__stud" /><path d="M6.0 96.0 L9.5 100.0 L6.0 104.0 L2.5 100.0 Z" className="monogram__stud" /><path d="M33.5 29.5 L37.0 33.5 L33.5 37.5 L30.0 33.5 Z" className="monogram__stud" /><path d="M100.0 2.0 L103.5 6.0 L100.0 10.0 L96.5 6.0 Z" className="monogram__stud" /><path d="M166.5 29.5 L170.0 33.5 L166.5 37.5 L163.0 33.5 Z" className="monogram__stud" />
      <g fontFamily="'Cinzel', serif">
        <text x="68" y="119" textAnchor="middle" className="monogram__letter">{weddingData.monogram[0]}</text>
        <text x="132" y="119" textAnchor="middle" className="monogram__letter">{weddingData.monogram[1]}</text>
      </g>
      <path d="M100 90 L108 100 L100 110 L92 100 Z" className="monogram__heart" />
      <path d="M70 136 H130" className="monogram__rule" />
    </svg>
  );
}
