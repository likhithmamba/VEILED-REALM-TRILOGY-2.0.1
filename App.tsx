import React, { useState, useEffect } from 'react';
import { Twitter, Instagram, ChevronUp } from 'lucide-react';

// --- CONSTANTS ---
import { STARTER_PACK } from './constants';

// --- COMPONENTS ---
import { Timeline } from './components/Timeline';
import { BookGrid } from './components/BookGrid';
import { GrimoireModal } from './components/GrimoireModal';
import { 
  AboutSection, 
  LoreSection, 
  CharacterSection, 
  VaultSection, 
  NewsletterSection, 
  AuthorNoteSection 
} from './components/MarketingSections';
import { Hero } from './components/Hero';
import { MouseTrail } from './components/MouseTrail';
import { IntroOverlay } from './components/IntroOverlay';

// --- UI COMPONENTS ---

const StickyNav = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div 
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 transform ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="bg-black/90 backdrop-blur-md border-b border-red-900/30 px-6 py-4 flex justify-between items-center shadow-[0_5px_20px_rgba(0,0,0,0.8)]">
        <div className="hidden md:flex items-center gap-3">
           <div className="w-2 h-2 bg-red-600 rotate-45" />
           <span className="text-yellow-500 font-cinzel font-bold tracking-widest text-xs">IMPERIALX</span>
        </div>
        <div className="flex gap-8 mx-auto md:mx-0">
           {['books', 'lore', 'characters', 'vault'].map((item) => (
             <button 
               key={item}
               onClick={() => scrollTo(item)}
               className="text-gray-300 hover:text-white font-cinzel text-xs tracking-[0.2em] uppercase transition-colors hover:scale-105 transform duration-200"
             >
               {item}
             </button>
           ))}
        </div>
        <button 
          onClick={() => scrollTo('newsletter')}
          className="hidden md:block bg-red-900/20 border border-red-900/50 text-red-500 px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-red-900 hover:text-white transition-all rounded-sm"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

const ScrollToTopRune = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 1200);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-40 p-4 bg-black border border-yellow-600/30 rounded-full text-yellow-500 shadow-[0_0_15px_rgba(202,138,4,0.2)] transition-all duration-500 hover:border-yellow-500 hover:shadow-[0_0_25px_rgba(202,138,4,0.5)] group ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
    </button>
  );
};

const MysticalDivider = () => (
  <div className="relative w-full h-32 flex items-center justify-center overflow-hidden pointer-events-none">
    <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-red-900/50 to-transparent" />
    <div className="absolute w-1/2 h-[1px] bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent blur-[2px]" />
    <div className="relative z-10 w-3 h-3 bg-red-800 rotate-45 border border-yellow-500/50 shadow-[0_0_15px_#991b1b] animate-pulse" />
  </div>
);

// --- MAIN COMPONENT ---

export default function App() {
  // --- STATE ---
  const [activeBook, setActiveBook] = useState(null);
  const [showStarterPack, setShowStarterPack] = useState(false);
  const [introFinished, setIntroFinished] = useState(false);

  // --- EFFECTS ---
  useEffect(() => {
    document.title = "Veiled Realm Trilogy | Imperial X";
  }, []);

  // --- RENDER ---
  return (
    <div className="min-h-screen bg-[#030005] text-gray-200 font-body selection:bg-red-900 selection:text-white overflow-x-hidden relative antialiased">
      
      <IntroOverlay onComplete={() => setIntroFinished(true)} />

      <div className="fixed inset-0 pointer-events-none z-0 bg-[#030005]">
         <div className="absolute inset-0 opacity-20 animate-pulse-slow bg-[radial-gradient(circle_at_20%_30%,_rgba(153,27,27,0.15)_0%,_transparent_40%)]" />
         <div className="absolute inset-0 opacity-10 animate-pulse-slow" style={{ animationDelay: '3s' }}>
            <div className="absolute top-1/4 right-1/4 w-[40vw] h-[40vw] bg-[radial-gradient(circle,_rgba(202,138,4,0.05)_0%,_transparent_60%)] rounded-full mix-blend-screen" />
         </div>
      </div>

      <div className="fixed inset-0 pointer-events-none z-[1] opacity-[0.015] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/noise.png')]" />

      <MouseTrail />
      <StickyNav />
      <ScrollToTopRune />

      <div className="relative z-10">
        <Hero startAnimations={introFinished} />
        <MysticalDivider />

        <div id="about">
          <AboutSection />
        </div>
        <MysticalDivider />

        <section id="books" className="py-32 px-6 relative bg-gradient-to-b from-[#030005] to-[#0a0a0a]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24 animate-fade-in-up">
              <h2 className="text-5xl md:text-6xl font-fantasy text-white mb-4 drop-shadow-lg tracking-wide">The Catalog</h2>
              <div className="w-24 h-1 bg-red-800 mx-auto rounded-full mb-6 shadow-[0_0_15px_#991b1b]" />
              <p className="text-gray-200 max-w-2xl mx-auto text-lg font-normal leading-relaxed">
                From a world where memory is weaponised, to a ruler who builds power with an expiration date, to the war you never admitted you were fighting.
              </p>
            </div>
            <BookGrid onBookSelect={setActiveBook} />
          </div>
        </section>
        <MysticalDivider />

        <div id="lore">
          <LoreSection />
        </div>
        <MysticalDivider />

        <div id="characters">
          <CharacterSection />
        </div>
        <MysticalDivider />

        <Timeline />
        <MysticalDivider />

        <div id="vault">
          <VaultSection onOpenStarterPack={() => setShowStarterPack(true)} />
        </div>
        <MysticalDivider />

        <div id="newsletter">
          <NewsletterSection />
        </div>
        
        <AuthorNoteSection />

        <footer className="py-16 bg-black border-t border-white/10 text-sm text-gray-400 font-sans relative z-10">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <h4 className="text-yellow-500 font-fantasy text-lg mb-2 tracking-widest opacity-90">IMPERIAL X</h4>
              <p className="font-normal text-gray-500 mb-6 max-w-sm">Dark fantasy for those who refuse to be erased.</p>
              <p className="font-normal text-gray-600">© 2026 ImperialX — All rights reserved.</p>
            </div>
            
            <div>
              <h5 className="text-white font-cinzel tracking-widest text-xs mb-4">TRILOGY</h5>
              <ul className="space-y-3 font-montserrat text-xs">
                <li><a href="#" className="hover:text-red-500 transition-colors">Threads of the Forgotten</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Echoes of the Shattered Dawn</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">The Eclipsed Oath</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-white font-cinzel tracking-widest text-xs mb-4">STANDALONES</h5>
              <ul className="space-y-3 font-montserrat text-xs">
                <li><a href="#" className="hover:text-red-500 transition-colors">The Crimson Architect</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Living Without Inner War</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Low Light, Clear Eyes</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-white font-cinzel tracking-widest text-xs mb-4">CONNECT</h5>
              <ul className="space-y-3 font-montserrat text-xs">
                <li><a href="#" className="hover:text-red-500 transition-colors">Newsletter</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors flex items-center gap-2"><Instagram size={14} /> Instagram</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors flex items-center gap-2"><Twitter size={14} /> Twitter / X</a></li>
                <li><a href="mailto:reach@imperialxfiction.com" className="hover:text-red-500 transition-colors">reach@imperialxfiction.com</a></li>
              </ul>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 text-center md:text-right">
            <span className="font-cinzel text-[10px] tracking-[0.4em] text-gray-600 uppercase">AUTHORITY MUST EXPIRE. RESPONSIBILITY MUST NOT.</span>
          </div>
        </footer>
      </div>

      {activeBook && (
        <GrimoireModal book={activeBook} onClose={() => setActiveBook(null)} />
      )}

      {showStarterPack && (
        <GrimoireModal book={STARTER_PACK} onClose={() => setShowStarterPack(false)} />
      )}

    </div>
  );
}