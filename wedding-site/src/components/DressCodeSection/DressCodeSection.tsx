import type { WeddingData } from '../../types/wedding';
import { useReveal } from '../../hooks/useReveal';
import { Divider } from '../Divider/Divider';
import './DressCodeSection.css';

interface DressCodeSectionProps {
  data: WeddingData;
}

export function DressCodeSection({ data }: DressCodeSectionProps) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <>
      <Divider />
      <section className="section dress-code" aria-label="Wardrobe suggestions">
        <span className="section__eyebrow">Wardrobe</span>
        <h2 className="section__title">
          Colours of the celebration
          <span className="section__title-telugu">వేడుక రంగులు</span>
        </h2>

        <div ref={ref} className="reveal dress-code__strip">
          {data.dressCode.map((entry) => (
            <div className="dress-code__entry" key={entry.eventId}>
              <div className="dress-code__swatches" aria-hidden="true">
                {entry.swatches.map((color, i) => (
                  <span
                    key={color + i}
                    className="dress-code__swatch"
                    style={{ background: color }}
                  />
                ))}
              </div>
              <h3 className="dress-code__title">{entry.eventTitle}</h3>
              <span className="dress-code__title-telugu">{entry.teluguTitle}</span>
              <p className="dress-code__palette">{entry.palette}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
