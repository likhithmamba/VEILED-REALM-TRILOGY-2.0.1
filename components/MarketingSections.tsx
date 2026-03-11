
import React, { useState, useEffect, useRef } from 'react';
import { User, BookOpen, Database, Lock, Sparkles, Zap, Image, Monitor, Eye, Scroll, ShieldAlert, Swords } from 'lucide-react';
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
  const [activeUniverse, setActiveUniverse] = useState<'veiled-realm' | 'crimson-architect'>('veiled-realm');

  const getIcon = (term: string) => {
    switch (term) {
      case 'The Veil': return <Eye className="w-8 h-8 md:w-12 md:h-12" />;
      case 'The Oath': return <Scroll className="w-8 h-8 md:w-12 md:h-12" />;
      case 'The Eclipser': return <ShieldAlert className="w-8 h-8 md:w-12 md:h-12" />;
      case 'Riftborn': return <Swords className="w-8 h-8 md:w-12 md:h-12" />;
      case 'Mirrorseed': return <Sparkles className="w-8 h-8 md:w-12 md:h-12" />;
      case 'The GRPI': return <Database className="w-8 h-8 md:w-12 md:h-12" />;
      case 'Coherence Audit': return <Eye className="w-8 h-8 md:w-12 md:h-12" />;
      case 'Managed Dissolution': return <Zap className="w-8 h-8 md:w-12 md:h-12" />;
      default: return <Sparkles className="w-8 h-8 md:w-12 md:h-12" />;
    }
  };

  const filteredLore = LORE_ITEMS.filter(item => item.universe === activeUniverse);

  return (
    <section ref={elementRef} className="py-32 px-6 bg-[#030005] border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(153,27,27,0.15)_0%,_transparent_60%)] pointer-events-none opacity-40"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-cinzel text-gold mb-4 tracking-[0.15em]">A World Built on Forgetting</h2>
          <div className="w-24 h-[1px] bg-red-800 mx-auto mb-6 shadow-[0_0_10px_#991b1b]"></div>
          <p className="text-gray-400 font-montserrat text-sm uppercase tracking-[0.3em] font-bold mb-8">Tap a Thread to Expand Reality</p>
          
          <div className="flex justify-center gap-4 mb-4">
            <button 
              onClick={() => setActiveUniverse('veiled-realm')}
              className={`px-4 py-2 border text-xs font-cinzel tracking-widest uppercase rounded-sm transition-all duration-300 ${activeUniverse === 'veiled-realm' ? 'bg-red-900/20 border-red-900/50 text-red-500' : 'bg-white/5 border-white/10 text-gray-500 hover:text-gray-300'}`}
            >
              Veiled Realm
            </button>
            <button 
              onClick={() => setActiveUniverse('crimson-architect')}
              className={`px-4 py-2 border text-xs font-cinzel tracking-widest uppercase rounded-sm transition-all duration-300 ${activeUniverse === 'crimson-architect' ? 'bg-blue-900/20 border-blue-900/50 text-blue-500' : 'bg-white/5 border-white/10 text-gray-500 hover:text-gray-300'}`}
            >
              Crimson Architect
            </button>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className={`flex flex-col md:flex-row flex-wrap w-full min-h-[400px] md:h-[500px] gap-2 p-2 bg-white/[0.02] border border-white/5 rounded-sm transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            {filteredLore.map((item) => (
              <div 
                key={item.id}
                className={`group flex-1 min-w-[250px] md:hover:flex-[4] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer relative border bg-[#080508]/80 hover:bg-[#0c080c] overflow-hidden flex items-center justify-center p-6 ${activeUniverse === 'veiled-realm' ? 'border-crimson/10 hover:border-crimson/40' : 'border-blue-900/20 hover:border-blue-500/40'}`}
              >
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                   <span className="md:rotate-[-90deg] whitespace-nowrap transition-all duration-700 uppercase tracking-[0.4em] font-cinzel text-gray-500 group-hover:text-gold group-hover:opacity-0 group-hover:scale-150 text-sm md:text-lg">
                      {item.term}
                   </span>
                </div>
                <div className={`absolute inset-0 bg-gradient-to-b opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ${activeUniverse === 'veiled-realm' ? 'from-crimson/10 to-transparent' : 'from-blue-900/20 to-transparent'}`} />
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-150 transform translate-y-10 group-hover:translate-y-0 flex flex-col items-center text-center max-w-lg">
                   <div className="mb-8 text-gold drop-shadow-[0_0_15px_rgba(202,138,4,0.4)]">
                      {getIcon(item.term)}
                   </div>
                   <h3 className="text-2xl md:text-4xl font-cinzel text-white mb-6 tracking-widest">{item.term}</h3>
                   <div className={`w-12 h-[1px] mb-8 ${activeUniverse === 'veiled-realm' ? 'bg-crimson/50' : 'bg-blue-500/50'}`} />
                   <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-700 delay-100 overflow-hidden">
                     <p className="text-gray-200 font-reading text-sm md:text-base leading-relaxed italic px-4">
                        {item.definition}
                     </p>
                   </div>
                   <div className={`mt-12 w-2 h-2 rotate-45 ${activeUniverse === 'veiled-realm' ? 'bg-crimson shadow-[0_0_10px_#991b1b]' : 'bg-blue-500 shadow-[0_0_10px_#3b82f6]'}`} />
                </div>
                <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/10 group-hover:border-gold/50 transition-all duration-500" />
                <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-white/10 group-hover:border-gold/50 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// 5. CHARACTERS
export const CharacterSection: React.FC = () => {
  const { elementRef, isVisible } = useScrollObserver();

  const veiledRealmChars = CHARACTERS.filter(c => c.series === 'veiled-realm');
  const crimsonArchitectChars = CHARACTERS.filter(c => c.series === 'crimson-architect');

  const getBookColor = (bookId: number) => {
    switch (bookId) {
      case 1: return 'red';
      case 2: return 'blue';
      case 3: return 'purple';
      case 4: return 'emerald';
      default: return 'gray';
    }
  };

  return (
    <section ref={elementRef} className="py-32 px-6 max-w-7xl mx-auto bg-gray-900/50">
      <div className={`text-center mb-20 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="text-3xl font-cinzel text-white mb-2 tracking-[0.2em] uppercase">Dramatis Personae</h2>
        <div className="w-16 h-[1px] bg-red-800 mx-auto mt-6" />
      </div>
      
      <div className="space-y-24">
        {/* Veiled Realm Characters */}
        <div>
          <h3 className="text-2xl font-cinzel text-gold mb-8 tracking-widest text-center border-b border-white/10 pb-4">Veiled Realm</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {veiledRealmChars.map((char, index) => {
              const color = getBookColor(char.bookId);
              return (
                <div 
                  key={char.id} 
                  className={`group relative border border-white/5 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-all duration-700 hover:-translate-y-2 rounded-sm transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} hover:border-${color}-900/30`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="relative z-10 text-center flex flex-col h-full">
                    <div className={`w-16 h-16 mx-auto mb-6 bg-gray-900 rounded-full flex items-center justify-center border border-gray-800 group-hover:border-${color}-600/50 transition-colors shadow-lg shrink-0`}>
                      <User className={`w-6 h-6 text-gray-400 group-hover:text-${color}-400 transition-colors`} />
                    </div>
                    <h3 className="text-lg font-cinzel text-white mb-3 group-hover:text-yellow-100 transition-colors">{char.name}</h3>
                    <span className={`text-[10px] font-montserrat text-${color}-500 tracking-widest uppercase block mb-6 font-bold`}>{char.role}</span>
                    
                    <div className="flex-1 flex flex-col justify-center">
                      <p className="text-gray-300 text-sm italic font-serif leading-relaxed group-hover:text-gray-200 font-normal transition-all duration-500">
                        "{char.quote}"
                      </p>
                      
                      <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100">
                        <span className={`block mt-4 text-[9px] text-${color}-400 font-cinzel tracking-widest uppercase text-center border-t border-white/10 pt-4`}>
                          Appears in: {char.bookTitle}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Crimson Architect Characters */}
        <div>
          <h3 className="text-2xl font-cinzel text-blue-400 mb-8 tracking-widest text-center border-b border-white/10 pb-4">The Crimson Architect</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {crimsonArchitectChars.map((char, index) => {
              const color = getBookColor(char.bookId);
              return (
                <div 
                  key={char.id} 
                  className={`group relative border border-white/5 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-all duration-700 hover:-translate-y-2 rounded-sm transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} hover:border-${color}-900/30`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="relative z-10 text-center flex flex-col h-full">
                    <div className={`w-16 h-16 mx-auto mb-6 bg-gray-900 rounded-full flex items-center justify-center border border-gray-800 group-hover:border-${color}-600/50 transition-colors shadow-lg shrink-0`}>
                      <User className={`w-6 h-6 text-gray-400 group-hover:text-${color}-400 transition-colors`} />
                    </div>
                    <h3 className="text-lg font-cinzel text-white mb-3 group-hover:text-blue-100 transition-colors">{char.name}</h3>
                    <span className={`text-[10px] font-montserrat text-${color}-500 tracking-widest uppercase block mb-6 font-bold`}>{char.role}</span>
                    
                    <div className="flex-1 flex flex-col justify-center">
                      <p className="text-gray-300 text-sm italic font-serif leading-relaxed group-hover:text-gray-200 font-normal transition-all duration-500">
                        "{char.quote}"
                      </p>
                      
                      <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100">
                        <span className={`block mt-4 text-[9px] text-${color}-400 font-cinzel tracking-widest uppercase text-center border-t border-white/10 pt-4`}>
                          Appears in: {char.bookTitle}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
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
export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setFormStatus("loading");
    setTimeout(() => {
      setFormStatus("success");
      setEmail("");
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section id="newsletter" className="py-32 px-6 bg-gradient-to-t from-black to-gray-950 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-yellow-400 font-cinzel text-xs tracking-[0.2em] uppercase mb-4 font-bold">The Realm Dispatch</h3>
        <h2 className="text-4xl font-cinzel text-white mb-6 tracking-wide">ENTER THE ARCHIVE</h2>
        <p className="text-gray-200 font-montserrat mb-8 text-lg font-normal">
          First access to new chapters. Hidden lore. Launch alerts. No noise — only signal.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs font-montserrat text-gray-300 flex items-center gap-2"><BookOpen className="w-3 h-3 text-gold"/> Early Chapters</span>
          <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs font-montserrat text-gray-300 flex items-center gap-2"><Lock className="w-3 h-3 text-gold"/> Exclusive Lore</span>
          <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs font-montserrat text-gray-300 flex items-center gap-2"><Zap className="w-3 h-3 text-gold"/> Launch Alerts</span>
          <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs font-montserrat text-gray-300 flex items-center gap-2"><ShieldAlert className="w-3 h-3 text-gold"/> No Spam. Ever.</span>
        </div>

        <form className="flex flex-col gap-4 max-w-md mx-auto" onSubmit={handleSubscribe}>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address" 
            disabled={formStatus === "loading" || formStatus === "success"}
            className="bg-white/5 border border-white/10 px-6 py-4 text-white focus:outline-none focus:border-red-900/50 transition-colors text-center font-montserrat font-normal placeholder:text-gray-500 disabled:opacity-50"
          />
          <button 
            type="submit"
            disabled={formStatus === "loading" || formStatus === "success"}
            className="bg-red-700 text-white px-8 py-4 font-cinzel font-bold tracking-[0.2em] hover:bg-red-600 transition-colors shadow-lg hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] disabled:opacity-50 disabled:hover:bg-red-700"
          >
            {formStatus === "loading" ? "SEALING OATH..." : formStatus === "success" ? "WELCOME TO THE ARCHIVE" : "SUBSCRIBE"}
          </button>
          <p className="text-[10px] text-gray-500 font-montserrat mt-4 uppercase tracking-widest">
            By subscribing, you join the Archive. The Archive does not forget.
          </p>
        </form>
      </div>
    </section>
  );
};

// 9. BEHIND THE VEIL
export const AuthorNoteSection: React.FC = () => (
  <section className="py-32 px-6 bg-black relative border-t border-white/5">
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
      <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-red-900/50 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-700 shadow-[0_0_30px_rgba(153,27,27,0.3)]">
        <img src="https://picsum.photos/seed/author/400/400" alt="Likhith CK" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      </div>
      <div>
        <h3 className="text-yellow-400 font-cinzel text-xs tracking-[0.2em] uppercase mb-4 font-bold">Behind The Veil — The Realm Dispatch</h3>
        <h2 className="text-3xl font-cinzel text-white mb-6">Likhith CK</h2>
        <p className="text-gray-400 font-montserrat mb-6 text-sm leading-relaxed">
          {BIO_TEXT}
        </p>
        <blockquote className="border-l-2 border-red-800 pl-6 py-2 text-gray-300 font-fantasy text-xl italic">
          "{BIO_QUOTE}"
        </blockquote>
      </div>
    </div>
  </section>
);
