import { useState } from 'react';
import { InvitationSeal } from '../InvitationSeal/InvitationSeal';
import type { WeddingData } from '../../types/wedding';
import './InvitationIntro.css';

interface InvitationIntroProps {
  data: WeddingData;
  onOpen: () => void;
}

const OPEN_ANIMATION_MS = 900;

/**
 * The first screen: a centred monogram and seal that recreates the moment
 * of opening a physical wedding card. Dismissing it (tap, click, or
 * Enter/Space) plays a bloom-and-fade transition into the main invitation.
 */
export function InvitationIntro({ data, onOpen }: InvitationIntroProps) {
  const [isOpening, setIsOpening] = useState(false);

  const handleActivate = () => {
    if (isOpening) return;
    setIsOpening(true);
    window.setTimeout(onOpen, OPEN_ANIMATION_MS);
  };

  return (
    <div
      className={`intro ${isOpening ? 'intro--opening' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Wedding invitation opening screen"
    >
      <div className="intro__frame">
        <p className="intro__eyebrow reveal-in">{data.sacredTransliteration}</p>

        <p className="intro__family reveal-in">{data.familyName} Family</p>

        <h1 className="intro__heading reveal-in">
          {data.invitationHeadingLines.map((line, i) => (
            <span key={line}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </h1>

        <div className="intro__seal-wrap reveal-in">
          <InvitationSeal onActivate={handleActivate} isOpening={isOpening} />
        </div>

        <p className="intro__names reveal-in">
          {data.couple.bride.personName.split(' ').pop()} &amp; {data.couple.groom.personName}
        </p>

        <button
          type="button"
          className="intro__hint reveal-in"
          onClick={handleActivate}
          disabled={isOpening}
        >
          Tap the seal to open
        </button>
      </div>
    </div>
  );
}
