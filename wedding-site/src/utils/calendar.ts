import type { CalendarInfo } from '../types/wedding';

/** Formats an ISO date + "HH:mm" local time into the UTC-less compact form Google Calendar expects. */
function toGoogleDateTime(date: string, time: string): string {
  const [y, m, d] = date.split('-').map(Number);
  const [hh, mm] = time.split(':').map(Number);
  const local = new Date(y, (m ?? 1) - 1, d, hh, mm);
  const pad = (n: number) => String(n).padStart(2, '0');
  return (
    `${local.getFullYear()}${pad(local.getMonth() + 1)}${pad(local.getDate())}` +
    `T${pad(local.getHours())}${pad(local.getMinutes())}00`
  );
}

/** Builds a working Google Calendar "render" event-creation URL. */
export function buildGoogleCalendarUrl(info: CalendarInfo): string {
  const start = toGoogleDateTime(info.date, info.startTime);
  const end = toGoogleDateTime(info.date, info.endTime);
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: info.title,
    dates: `${start}/${end}`,
    details: info.description,
    location: info.location,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

/** Builds a Google Maps directions URL for a given place query. */
export function buildGoogleMapsUrl(query: string): string {
  const params = new URLSearchParams({ api: '1', query });
  return `https://www.google.com/maps/search/?${params.toString()}`;
}
