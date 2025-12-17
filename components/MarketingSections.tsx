
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Download, Mail, User, BookOpen, Database, Lock, Sparkles, Zap, Image, Monitor, Eye, Scroll, ShieldAlert, Swords } from 'lucide-react';
import { BIO_TEXT, BIO_QUOTE, LORE_ITEMS, CHARACTERS, DOWNLOADS, STARTER_PACK } from '../constants';
import { Book3DCard } from './Book3DCard';

// Helper Hook for Scroll Animations
const useScrollObserver = () => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.1, rootMargin: '0px' }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return { elementRef, isVisible };
};

// 2. ABOUT IMPERIALX
export const AboutSection: React.FC = () => (
  <section className="py-32 px-6 bg-gradient-to-b from-gray-950 to-gray-900 border-b border-white/5">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
      <div className="md:w-1/2 relative">
        <div className="relative border border-white/10 p-10 bg-white/[0.02] backdrop-blur-sm rounded-sm hover:bg-white/[0.04] transition-colors duration-500">
          <h3 className="text-yellow-400 font-cinzel text-xs tracking-[0.2em] uppercase mb-4 font-bold">The Architect</h3>
          <h2 className="text-4xl font-cinzel text-white mb-6 tracking-wide">IMPERIAL X</h2>
          <p className="text-gray-200 font-montserrat leading-loose text-lg font-normal">
            {BIO_TEXT}
          </p>
        </div>
      </div>
      <div className="md:w-1/2 text-center md:text-left">
        <div className="relative py-8">
           <span className="absolute top-0 left-0 text-6xl text-red-900/50 font-serif leading-none">“</span>
           <blockquote className="text-2xl font-cinzel text-gray-100 italic leading-relaxed relative z-10 px-8">
            {BIO_QUOTE}
           </blockquote>
           <span className="absolute bottom-0 right-0 text-6xl text-red-900/50 font-serif leading-none">”</span>
        </div>
      </div>
    </div>
  </section>
);

// 4. LORE
export const LoreSection: React.FC = () => {
  const { elementRef, isVisible } = useScrollObserver();

  const getIcon = (term: string) => {
    switch (term) {
      case 'The Veil': return <Eye className="w-8 h-8 md:w-12 md:h-12" />;
      case 'The Oath': return <Scroll className="w-8 h-8 md:w-12 md:h-12" />;
      case 'The Eclipser': return <ShieldAlert className="w-8 h-8 md:w-12 md:h-12" />;
      case 'Riftborn': return <Swords className="w-8 h-8 md:w-12 md:h-12" />;
      case 'Mirrorseed': return <Sparkles className="w-8 h-8 md:w-12 md:h-12" />;
      default: return <Sparkles className="w-8 h-8 md:w-12 md:h-12" />;
    }
  };

  return (
    <section ref={elementRef} className="py-32 px-6 bg-[#030005] border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(153,27,27,0.15)_0%,_transparent_60%)] pointer-events-none opacity-40"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-cinzel text-gold mb-4 tracking-[0.15em]">GLOSSARY OF THE REALM</h2>
          <div className="w-24 h-[1px] bg-red-800 mx-auto mb-6 shadow-[0_0_10px_#991b1b]"></div>
          <p className="text-gray-400 font-montserrat text-sm uppercase tracking-[0.3em] font-bold">Tap a Thread to Expand Reality</p>
        </div>
        
        <div className={`flex flex-col md:flex-row w-full min-h-[500px] md:h-[600px] gap-2 p-2 bg-white/[0.02] border border-white/5 rounded-sm transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          {LORE_ITEMS.map((item) => (
            <div 
              key={item.id}
              className="group flex-1 min-w-0 md:hover:flex-[4] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer relative border border-crimson/10 bg-[#080508]/80 hover:bg-[#0c080c] hover:border-crimson/40 overflow-hidden flex items-center justify-center p-6"
            >
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <span className="md:rotate-[-90deg] whitespace-nowrap transition-all duration-700 uppercase tracking-[0.4em] font-cinzel text-gray-500 group-hover:text-gold group-hover:opacity-0 group-hover:scale-150 text-sm md:text-lg">
                    {item.term}
                 </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-crimson/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-150 transform translate-y-10 group-hover:translate-y-0 flex flex-col items-center text-center max-w-lg">
                 <div className="mb-8 text-gold drop-shadow-[0_0_15px_rgba(202,138,4,0.4)]">
                    {getIcon(item.term)}
                 </div>
                 <h3 className="text-2xl md:text-4xl font-cinzel text-white mb-6 tracking-widest">{item.term}</h3>
                 <div className="w-12 h-[1px] bg-crimson/50 mb-8" />
                 <p className="text-gray-200 font-reading text-lg md:text-xl leading-relaxed italic px-4">
                    {item.definition}
                 </p>
                 <div className="mt-12 w-2 h-2 bg-crimson rotate-45 shadow-[0_0_10px_#991b1b]" />
              </div>
              <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/10 group-hover:border-gold/50 transition-all duration-500" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-white/10 group-hover:border-gold/50 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 5. CHARACTERS
export const CharacterSection: React.FC = () => {
  const { elementRef, isVisible } = useScrollObserver();

  return (
    <section ref={elementRef} className="py-32 px-6 max-w-7xl mx-auto bg-gray-900/50">
      <div className={`text-center mb-20 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="text-3xl font-cinzel text-white mb-2 tracking-[0.2em] uppercase">Dramatis Personae</h2>
        <div className="w-16 h-[1px] bg-red-800 mx-auto mt-6" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {CHARACTERS.map((char, index) => (
          <div 
            key={char.id} 
            className={`group relative border border-white/5 bg-white/[0.02] p-8 hover:bg-white/[0.04] hover:border-red-900/30 transition-all duration-700 hover:-translate-y-2 rounded-sm transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-900 rounded-full flex items-center justify-center border border-gray-800 group-hover:border-yellow-600/50 transition-colors shadow-lg">
                <User className="w-6 h-6 text-gray-400 group-hover:text-yellow-400 transition-colors" />
              </div>
              <h3 className="text-lg font-cinzel text-white mb-3 group-hover:text-yellow-100 transition-colors">{char.name}</h3>
              <span className="text-[10px] font-montserrat text-red-500 tracking-widest uppercase block mb-6 font-bold">{char.role}</span>
              <p className="text-gray-300 text-sm italic font-serif leading-relaxed group-hover:text-gray-200 font-normal">"{char.quote}"</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// 7. THE ARCHIVE
interface VaultSectionProps {
  onOpenStarterPack?: () => void;
}

export const VaultSection: React.FC<VaultSectionProps> = ({ onOpenStarterPack }) => {
  const { elementRef, isVisible } = useScrollObserver();

  return (
    <section ref={elementRef} className="relative py-40 px-6 bg-[#030005] overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_rgba(45,27,78,0.1)_0%,_transparent_60%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`flex flex-col items-center mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
           <span className="text-red-600 font-mono text-xs tracking-[0.2em] font-bold mb-4 block">ACCESS GRANTED</span>
           <h2 className="text-5xl md:text-7xl font-cinzel text-white mb-6 tracking-[0.1em] text-shadow">THE ARCHIVE</h2>
           <p className="text-gray-400 uppercase tracking-[0.3em] text-xs font-bold">Knowledge is the first weapon</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div className={`relative order-2 lg:order-1 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-x-10'}`}>
             <div className="relative aspect-square max-w-md mx-auto flex items-center justify-center">
                <div className="absolute inset-0 border border-white/5 rounded-full animate-spin-slow" />
                <div className="absolute inset-12 border border-dashed border-white/10 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />
                <div className="absolute inset-0 bg-yellow-500/5 blur-[80px] rounded-full" />
                
                <div className="relative bg-gray-900/50 border border-white/10 p-12 rounded-sm backdrop-blur-md shadow-2xl flex flex-col items-center">
                   <Database className="w-16 h-16 text-yellow-500/80 mb-6" />
                   <div className="w-full h-[1px] bg-white/10 mb-4" />
                   <div className="flex justify-between w-full text-[10px] font-mono text-gray-400 uppercase tracking-widest font-bold">
                      <span>Status</span>
                      <span className="text-green-500">Active</span>
                   </div>
                </div>
             </div>
          </div>

          <div className={`order-1 lg:order-2 space-y-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0 translate-x-10'}`}>
             
             {/* 3D Starter Pack Card Integration */}
             <div className="flex flex-col items-center lg:items-start">
               <span className="text-gold font-mono text-[10px] tracking-[0.4em] mb-4 uppercase font-bold ml-2">Legacy Tome</span>
               <Book3DCard 
                 book={STARTER_PACK} 
                 onClick={() => onOpenStarterPack?.()} 
               />
             </div>

             <div className="grid grid-cols-2 gap-4">
                {DOWNLOADS.filter(d => !d.title.includes('Free Sample')).map((item, idx) => (
                   <div key={item.id} className="group relative border border-white/10 bg-white/[0.02] overflow-hidden rounded-sm cursor-pointer h-32 hover:border-yellow-600/30 transition-all">
                      <div className={`absolute inset-0 bg-gradient-to-br ${idx === 0 ? 'from-red-900/20 to-black' : 'from-blue-900/20 to-black'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      
                      <div className="absolute inset-0 p-4 flex flex-col justify-between z-10">
                         <div className="flex justify-between items-start">
                            {idx === 0 ? <Image className="w-4 h-4 text-gray-400 group-hover:text-white" /> : <Monitor className="w-4 h-4 text-gray-400 group-hover:text-white" />}
                            <span className="text-[9px] font-mono text-red-500 border border-red-900/30 px-1 py-0.5 rounded bg-black/50 font-bold">
                               {item.type.includes('4K') ? '4K' : 'HD'}
                            </span>
                         </div>
                         <div>
                            <span className="text-gray-200 font-cinzel text-[10px] group-hover:text-yellow-400 transition-colors block mb-1 font-bold">
                               {item.title.replace('Wallpaper Pack ', '')}
                            </span>
                            <span className="text-[9px] text-gray-500 font-mono block">{item.size}</span>
                         </div>
                      </div>
                   </div>
                ))}
             </div>

          </div>

        </div>
      </div>
    </section>
  );
};

// 8. NEWSLETTER
export const NewsletterSection: React.FC = () => (
  <section id="newsletter" className="py-32 px-6 bg-gradient-to-t from-black to-gray-950 border-t border-white/5">
    <div className="max-w-2xl mx-auto text-center">
      <Mail className="w-10 h-10 text-gray-400 mx-auto mb-6" />
      <h2 className="text-4xl font-cinzel text-white mb-4 tracking-wide">JOIN THE REALM</h2>
      <p className="text-gray-200 font-montserrat mb-10 text-lg font-normal">
        The Veil whispers only to those who remember. Subscribe for lore drops and hidden codes.
      </p>
      <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
        <input 
          type="email" 
          placeholder="Enter your email address" 
          className="bg-white/5 border border-white/10 px-6 py-4 text-white focus:outline-none focus:border-red-900/50 transition-colors text-center font-montserrat font-normal placeholder:text-gray-500"
        />
        <button className="bg-red-700 text-white px-8 py-4 font-cinzel font-bold tracking-[0.2em] hover:bg-red-600 transition-colors shadow-lg hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]">
          SUBSCRIBE
        </button>
      </form>
    </div>
  </section>
);

// 9. BEHIND THE VEIL
export const AuthorNoteSection: React.FC = () => (
  <section className="py-24 px-6 bg-black">
    <div className="max-w-3xl mx-auto text-center">
      <h3 className="text-xs font-cinzel text-gray-400 tracking-[0.3em] uppercase mb-8 font-bold">Behind The Veil</h3>
      <p className="text-xl md:text-2xl font-serif text-gray-200 leading-relaxed italic opacity-95">
        "Veiled Realm started as a question: 'What remains when the world insists you don’t exist?' Every story is a fragment of something I refused to forget."
      </p>
      <div className="mt-8 text-yellow-600/80 font-cinzel text-xs tracking-widest font-bold">— Imperial X</div>
    </div>
  </section>
);
