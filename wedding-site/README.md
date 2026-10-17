# Nandini & Nithish — Wedding Invitation (Royal Jewel Edition)

Same structure as the original site (opening seal, hero, couple, countdown,
events, live stream, venue) with a new look: midnight navy, deep emerald and
burnished gold, set in Playfair Display + Lora.

**Retheme in one place:** colors and fonts live in `src/styles/tokens.css`.
**Edit content in one place:** `src/data/weddingData.ts`.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (typically `http://localhost:5173`).

To produce a production build:

```bash
npm run build
npm run preview
```

## Editing the content

All wedding-specific content — names, Telugu text, dates, event details,
dress code, venue, and the live-stream URL — lives in one file:

```
src/data/weddingData.ts
```

Change the values there to reuse this site for a different wedding; no
component code needs to change. In particular:

- **YouTube link**: set `youtubeUrl` to a real stream URL, or leave it
  `null` to show the "link coming soon" placeholder state.
- **Venue**: `mapQuery` drives the "Get directions" button (opens Google
  Maps in a new tab with that search query).
- **Calendar events**: each entry in `events` automatically gets a working
  "Add to calendar" button (opens a pre-filled Google Calendar event).

## Project structure

```
src/
  components/
    InvitationIntro/   opening screen (monogram, seal, entrance)
    Monogram/           signature SVG medallion, reused across the site
    InvitationSeal/      tap/click/keyboard "open" button + bloom animation
    Divider/             ornamental section divider
    Hero/                 invitation heading, sacred text, couple names
    CoupleSection/        groom & bride details side by side
    DateReveal/            "Save the date" + live countdown
    Countdown/              the ticking day/hour/minute/second display
    EventsSection/           vertical timeline of Haldi/Reception/Muhurtham
      EventCard/              a single event row + its calendar button
    CalendarButton/           Google Calendar link builder + button
    LiveStreamSection/         "Watch it live" panel
    DressCodeSection/           fabric-swatch colour-story strip
    VenueSection/                 venue address + directions button
    Footer/                        closing monogram & note
  data/
    weddingData.ts    single source of truth for all content
  hooks/
    useReveal.ts       IntersectionObserver-based scroll reveal
    useCountdown.ts     ticking countdown to a target Date
  types/
    wedding.ts          shared TypeScript interfaces
  utils/
    calendar.ts          Google Calendar / Google Maps URL builders
  styles/
    tokens.css            design tokens (color, type, spacing, motion)
    global.css              base reset + shared section/reveal styles
  App.tsx / App.css          page assembly + ornamental frame
  main.tsx                    React entry point
```

## Design notes

- **Palette**: warm ivory card stock, kumkum maroon, antique gold, with a
  banana-leaf green and marigold used sparingly (dress-code swatches).
- **Type**: Cormorant Garamond for display headings, EB Garamond for body
  copy, Noto Serif Telugu for Telugu text, and Cinzel (small caps, wide
  tracking) for labels/eyebrows/buttons — evoking temple inscriptions.
- **Signature motif**: a lotus-ringed medallion with interlaced "V · M"
  initials, used as the opening seal and reused as a small mark in the
  footer.
- **Events as a timeline**: Haldi → Reception → Muhurtham are a genuine
  chronological sequence, so they're presented as a connected vertical
  timeline rather than three interchangeable cards.
- **Motion**: page-load stagger on the intro, a seal "bloom" transition into
  the site, and IntersectionObserver-driven section reveals on scroll — all
  disabled/shortened automatically when `prefers-reduced-motion: reduce` is
  set.

## Accessibility

- The opening seal is a real `<button>`: reachable by Tab, activated with
  Enter/Space, with an `aria-label` describing its action.
- The countdown uses `role="timer"` with `aria-live="polite"`.
- All interactive elements keep a minimum 44×44px touch target and a
  visible focus ring (`:focus-visible`).
- Calendar and map buttons are real links to `calendar.google.com` and
  `google.com/maps` — not decorative.

## Responsive behaviour

Layout, type scale (via `clamp()`), and spacing are tuned for phones,
tablets, laptops, and large desktops, with particular attention paid to the
countdown, event timeline, and dress-code strip collapsing to a single
column below ~620px. No horizontal scroll should appear at any width from
320px up.
