export interface FamilyInfo {
  personName: string;
  personTelugu: string;
  parents: string;
  parentsTelugu: string;
}

export interface CoupleInfo {
  groom: FamilyInfo;
  bride: FamilyInfo;
}

export interface WeddingEvent {
  id: string;
  title: string;
  teluguTitle: string;
  description: string;
  audience: string;
  date: string; // ISO date, e.g. "2026-08-19"
  startTime: string; // 24h "HH:mm"
  endTime?: string; // 24h "HH:mm" (optional)
  /** Where this event happens, shown on the card, e.g. "At home · Meerpet". */
  location?: string;
  /** Full address used for the calendar entry. */
  mapQuery?: string;
  displayDate: string; // human readable, e.g. "19 August 2026"
  displayTime: string; // human readable, e.g. "6:00 PM onwards"
}

export interface DressCodeEntry {
  eventId: string;
  eventTitle: string;
  teluguTitle: string;
  palette: string;
  swatches: string[]; // hex colors
}

export interface VenueInfo {
  name: string;
  teluguName: string;
  addressLines: string[];
  mapQuery: string;
  mapEmbedQuery: string;
  venue: string;
  /** Optional pasted Google Maps share link; overrides mapQuery for the button. */
  mapUrl?: string;
}
export type VenueInfoList = VenueInfo[];

export interface CalendarInfo {
  title: string;
  description: string;
  location: string;
  date: string; // ISO date
  startTime: string; // "HH:mm"
  endTime: string; // "HH:mm"
}

export interface WeddingData {
  couple: CoupleInfo;
  /** Host family, e.g. "Pola's" */
  familyName: string;
  hosts: string;
  hostsTelugu: string;
  /** Two initials for the monogram */
  monogram: [string, string];
  invitationHeadingLines: string[];
  /** Telugu shloka, use \n for a line break */
  shloka?: string;
  /** Telugu panchangam line shown under the Muhurtham time */
  panchangamTelugu?: string;
  muhurthamNote?: string;
  invitationHeading: string;
  sacredText: string;
  sacredTransliteration: string;
  invitationMessage: string;
  weddingDate: string; // ISO date "2026-08-23"
  weddingDisplayDate: string; // "4th September 2026"
  weddingDay: string; // "Sunday"
  weddingTime: string; // "10:35 AM"
  events: WeddingEvent[];
  dressCode: DressCodeEntry[];
  venue: VenueInfoList;
  youtubeUrl: string | null;
  hashtag: string;
  /** Optional couple portrait for the Hero, e.g. '/images/couple.jpg'. */
  heroPhotoUrl?: string;
}
