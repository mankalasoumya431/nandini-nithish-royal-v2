import { Monogram } from '../Monogram/Monogram';
import './InvitationSeal.css';

interface InvitationSealProps {
  onActivate: () => void;
  isOpening: boolean;
}

/**
 * The wax-seal-like circular button at the centre of the opening screen.
 * Works with a tap (mobile), a click (mouse), or Enter/Space (keyboard).
 */
export function InvitationSeal({ onActivate, isOpening }: InvitationSealProps) {
  return (
    <button
      type="button"
      className={`seal ${isOpening ? 'seal--opening' : ''}`}
      onClick={onActivate}
      aria-label="Open the wedding invitation"
      disabled={isOpening}
    >
      <span className="seal__rays" aria-hidden="true">
        {Array.from({ length: 24 }).map((_, i) => (
          <span key={i} style={{ transform: `rotate(${(i * 360) / 24}deg)` }} />
        ))}
      </span>
      <span className="seal__body">
        <Monogram size={96} className="seal__monogram" />
      </span>
    </button>
  );
}
