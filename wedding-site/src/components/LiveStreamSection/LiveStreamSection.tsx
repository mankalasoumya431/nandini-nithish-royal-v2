import type { WeddingData } from '../../types/wedding';
import { useReveal } from '../../hooks/useReveal';
import { Divider } from '../Divider/Divider';
import './LiveStreamSection.css';

interface LiveStreamSectionProps {
  data: WeddingData;
}

export function LiveStreamSection({ data }: LiveStreamSectionProps) {
  const ref = useReveal<HTMLDivElement>();
  const hasLink = Boolean(data.youtubeUrl);

  return (
    <>
      <Divider />
      <section className="section livestream" aria-label="Watch the wedding live">
        <div ref={ref} className="reveal">
          <span className="section__eyebrow">From Afar</span>
          <h2 className="section__title">
            Watch it live
            <span className="section__title-telugu">ప్రత్యక్ష ప్రసారం</span>
          </h2>

          <p className="livestream__text">
            Can&rsquo;t join us in person? We&rsquo;ll be streaming the Muhurtham ceremony live on{' '}
            {data.weddingDisplayDate} at {data.weddingTime}, so you can be with us in spirit.
          </p>

          <div className="livestream__panel">
            <svg
              className="livestream__play"
              width="52"
              height="52"
              viewBox="0 0 52 52"
              aria-hidden="true"
            >
              <circle cx="26" cy="26" r="25" fill="none" stroke="currentColor" strokeWidth="1.2" />
              <path d="M21 17 L35 26 L21 35 Z" fill="currentColor" />
            </svg>

            {hasLink ? (
              <a
                className="livestream__button"
                href={data.youtubeUrl ?? undefined}
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch on YouTube
              </a>
            ) : (
              <p className="livestream__pending">
                The live stream link will appear here closer to the day.
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
