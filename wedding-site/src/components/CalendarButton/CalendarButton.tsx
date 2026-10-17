import { buildGoogleCalendarUrl } from '../../utils/calendar';
import type { WeddingEvent } from '../../types/wedding';
import { weddingData } from '../../data/weddingData';
import './CalendarButton.css';

interface CalendarButtonProps {
  event: WeddingEvent;
}

export function CalendarButton({ event }: CalendarButtonProps) {
  const url = buildGoogleCalendarUrl({
    title: `${event.title} — ${weddingData.couple.bride.personName} & ${weddingData.couple.groom.personName}`,
    description: event.description,
    location: event.mapQuery ?? weddingData.venue[0].mapQuery,
    date: event.date,
    startTime: event.startTime,
    endTime: event.endTime || event.startTime,
  });

  return (
    <a
      className="calendar-btn"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Add ${event.title} to Google Calendar`}
    >
      <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" className="calendar-btn__icon">
        <rect x="3" y="5" width="18" height="16" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M3 9.5H21" stroke="currentColor" strokeWidth="1.4" />
        <path d="M7.5 3V6.5M16.5 3V6.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
      Add to calendar
    </a>
  );
}
