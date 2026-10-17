import type { WeddingEvent } from '../../../types/wedding';
import { useReveal } from '../../../hooks/useReveal';
import { CalendarButton } from '../../CalendarButton/CalendarButton';
import './EventCard.css';

interface EventCardProps {
  event: WeddingEvent;
  index: number;
}

export function EventCard({ event, index }: EventCardProps) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <li className="event-card-row">
      <div className="event-card-row__rail" aria-hidden="true">
        <span className="event-card-row__node" />
        <span className="event-card-row__index">{String(index + 1).padStart(2, '0')}</span>
      </div>

      <div ref={ref} className="reveal event-card">
        <div className="event-card__head">
          <h3 className="event-card__title">{event.title}</h3>
          <span className="event-card__title-telugu">{event.teluguTitle}</span>
        </div>

        <p className="event-card__meta">
          {event.displayDate} &nbsp;·&nbsp; {event.displayTime}
        </p>

        {event.location && <p className="event-card__location">{event.location}</p>}

        <p className="event-card__description">{event.description}</p>
        {/* <p className="event-card__audience">{event.audience}</p> */}

        {/* <CalendarButton event={event} /> */}
      </div>
    </li>
  );
}
