import type { WeddingData } from '../../types/wedding';
import { Divider } from '../Divider/Divider';
import { EventCard } from './EventCard/EventCard';
import './EventsSection.css';

interface EventsSectionProps {
  data: WeddingData;
}

export function EventsSection({ data }: EventsSectionProps) {
  return (
    <>
      <Divider />
      <section className="section section--wide events" aria-label="Wedding events schedule">
        <span className="section__eyebrow">Celebrations</span>
        <h2 className="section__title">
          Events schedule
          <span className="section__title-telugu">వేడుకల వివరాలు</span>
        </h2>

        <ol className="events__list">
          {data.events.map((event, i) => (
            <EventCard key={event.id} event={event} index={i} />
          ))}
        </ol>
      </section>
    </>
  );
}
