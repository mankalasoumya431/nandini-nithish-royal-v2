import type { WeddingData } from '../../types/wedding';
import { useReveal } from '../../hooks/useReveal';
import { buildGoogleMapsUrl } from '../../utils/calendar';
import { Divider } from '../Divider/Divider';
import './VenueSection.css';

interface VenueSectionProps {
  data: WeddingData;
}

export function VenueSection({ data }: VenueSectionProps) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <>
      <Divider />

      <section className="section venue" aria-label="Wedding venues">
        <div ref={ref} className="reveal">
          {/* <span className="section__eyebrow">Venues</span> */}

          <div className="venue__cards" >
            {data.venue.map((venue) => {
              const mapsUrl = venue.mapUrl ?? buildGoogleMapsUrl(venue.mapQuery);

              return (
                <article className="venue__card" key={venue.name} style={{marginTop:'20px'}}>
                  <span className="section__eyebrow" style={{fontSize:'15px'}}>{venue.venue}</span>

                  <h2 className="section__title">
                    {venue.name}
                    <span className="section__title-telugu">
                      {venue.teluguName}
                    </span>
                  </h2>

                  <div className="venue__ornament" aria-hidden="true">
                    <svg width="64" height="40" viewBox="0 0 64 40">
                      <path
                        d="M32 4 L32 20 M20 20 Q32 34 44 20"
                        fill="none"
                        stroke="var(--color-gold)"
                        strokeWidth="1.2"
                      />
                      <circle
                        cx="32"
                        cy="4"
                        r="2.4"
                        fill="var(--color-accent)"
                      />
                    </svg>
                  </div>

                  <address className="venue__address">
                    {venue.addressLines.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </address>

                  <a
                    className="venue__button"
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Get directions to ${venue.name}`}
                  >
                    Get directions
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}