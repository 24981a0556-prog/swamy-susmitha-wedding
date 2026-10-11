import { useState, useCallback } from 'react';
import { AUDIO_CONFIG } from './data/wedding';
import { useAudio } from './hooks/useAudio';
import { Navbar } from './components/ui/Navbar';
import { FloatingAudio } from './components/ui/FloatingAudio';
import { Hero } from './components/sections/Hero';
import { MeetTheCouple } from './components/sections/MeetTheCouple';
import { WeddingJourney } from './components/sections/WeddingJourney';
import { OurStory } from './components/sections/OurStory';
import { PreWeddingVideo } from './components/sections/PreWeddingVideo';
import { RSVP } from './components/sections/RSVP';
import { PhotoGallery } from './components/sections/PhotoGallery';
import { Footer } from './components/sections/Footer';

export function App() {
  const [hasOpened, setHasOpened] = useState(false);
  const { play, toggle, isPlaying, error } = useAudio(AUDIO_CONFIG.src);

  const handleOpenInvitation = useCallback(() => {
    setHasOpened(true);
    play();
  }, [play]);

  return (
    <div className="min-h-screen bg-[#fcf8f0] text-[#420813] selection:bg-[#dbaa3e] selection:text-[#420813]">
      {/* Floating Audio Controls */}
      <FloatingAudio isPlaying={isPlaying} onToggle={toggle} error={error} />

      {/* Floating Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Section 1: Hero / Invitation Cover with Gopuram & Banana Trees */}
        <Hero onOpenInvitation={handleOpenInvitation} hasOpened={hasOpened} />

        {/* Section 2: Meet the Couple with Peacock Arches & Stone Countdown */}
        <MeetTheCouple />

        {/* Section 3: The Wedding Journey with Pada Mudra Footsteps */}
        <WeddingJourney />

        {/* Section 4: Our Story Timeline */}
        <OurStory />

        {/* Section 5: Pre-Wedding Film */}
        <PreWeddingVideo />

        {/* Section 6: RSVP */}
        <RSVP />

        {/* Section 7: Photo Gallery & Lightbox */}
        <PhotoGallery />
      </main>

      {/* Final Section / Footer with Sri Sita Rama Kalyanam Artwork */}
      <Footer />
    </div>
  );
}

export default App;
