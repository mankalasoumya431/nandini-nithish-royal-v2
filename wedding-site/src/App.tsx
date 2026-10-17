import { useEffect, useState } from 'react';
import { InvitationIntro } from './components/InvitationIntro/InvitationIntro';
import { Hero } from './components/Hero/Hero';
import { CoupleSection } from './components/CoupleSection/CoupleSection';
import { DateReveal } from './components/DateReveal/DateReveal';
import { EventsSection } from './components/EventsSection/EventsSection';
import { LiveStreamSection } from './components/LiveStreamSection/LiveStreamSection';
import { DressCodeSection } from './components/DressCodeSection/DressCodeSection';
import { VenueSection } from './components/VenueSection/VenueSection';
import { Footer } from './components/Footer/Footer';
import { weddingData } from './data/weddingData';
import './App.css';
import { TempleSilhouette } from './components/TempleSilhouette/TempleSilhouette';
import { RadhaKrishna } from './components/RadhaKrishna/RadhaKrishna';

const INTRO_SEEN_KEY = 'invitation-opened';

export default function App() {
  // Skip the intro on a same-session revisit (e.g. tab refresh) so it never
  // feels like a wall between the guest and the details they came back for.
  const [showIntro, setShowIntro] = useState(
    () => typeof window !== 'undefined' && !window.sessionStorage.getItem(INTRO_SEEN_KEY)
  );

  useEffect(() => {
    document.body.classList.toggle('intro-lock', showIntro);
  }, [showIntro]);

  const handleOpen = () => {
    window.sessionStorage.setItem(INTRO_SEEN_KEY, '1');
    setShowIntro(false);
  };

  return (
    <div className="app">
      {showIntro && <InvitationIntro data={weddingData} onOpen={handleOpen} />}

      <div className="app__frame" aria-hidden={showIntro}>
        <div className="app__frame-border" aria-hidden="true" />
        <span className="app__frame-corner app__frame-corner--tl" aria-hidden="true" />
        <span className="app__frame-corner app__frame-corner--tr" aria-hidden="true" />
        <span className="app__frame-corner app__frame-corner--bl" aria-hidden="true" />
        <span className="app__frame-corner app__frame-corner--br" aria-hidden="true" />
        <main className="app__content">
          <Hero data={weddingData} />
          <TempleSilhouette className="section-divider" />
          <CoupleSection data={weddingData} />
          <DateReveal data={weddingData} />
          <EventsSection data={weddingData} />
          {weddingData.youtubeUrl && <LiveStreamSection data={weddingData} />}
          <VenueSection data={weddingData} />
          <Footer data={weddingData} />
        </main>
      </div>
    </div>
  );
}
