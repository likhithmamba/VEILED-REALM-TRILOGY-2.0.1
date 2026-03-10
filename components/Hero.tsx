import React, { useEffect, useState } from 'react';
import { ChevronDown, Sparkles, ScrollText } from 'lucide-react';

interface HeroProps {
  startAnimations?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ startAnimations = false }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (startAnimations) {
      // Small delay to ensure doors are cracking open before text slams in
      const timer = setTimeout(() => setIsVisible(true), 200);
      return () => clearTimeout(timer);
    }
  }, [startAnimations]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
      
      {/* Animated Background Layer */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
         {/* Nebula Image with Slow Zoom Animation */}
         <div 
            className="absolute inset-0 bg-cover bg-center animate-slow-zoom"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5980?q=80&w=2072&auto=format&fit=crop')",
              opacity: 0.3
            }} 
         />
         {/* Gradient Overlay to darken */}
         <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-[#030303]/60 to-[#030303]"></div>
         <div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-transparent to-[#030303]"></div>
      </div>

      {/* Foreground Content */}
      <div 
        className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center"
        style={{ transform: `translateY(${scrollY * 0.3}px)`, opacity: Math.max(0, 1 - scrollY / 600) }}
      >
        {/* Animated Reveal Header */}
        <div 
          className={`mb-6 flex items-center justify-center space-x-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent to-gold"></div>
          <span className="text-gold font-cinzel tracking-[0.3em] text-[10px] md:text-xs font-bold uppercase shadow-gold drop-shadow-md">
            The Complete Works of
          </span>
          <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-gold"></div>
        </div>
        
        {/* Main Title - Dramatic Scale In */}
        <div className="relative mb-6">
          <h1 
            className={`text-6xl md:text-8xl lg:text-[140px] font-cinzel font-bold text-white tracking-widest transition-all duration-[1.2s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] leading-none ${isVisible ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-110 blur-md'}`}
          >
            IMPERIAL<span className="text-transparent bg-clip-text bg-gradient-to-b from-red-600 to-red-900">X</span>
          </h1>
          {/* Glow Effect behind text */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-red-900/20 blur-[80px] -z-10 transition-opacity duration-[2s] delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />
        </div>
        
        <p 
          className={`text-sm md:text-lg text-gray-400 font-cinzel tracking-[0.35em] uppercase mb-10 max-w-3xl transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          Dark Fantasy &nbsp;·&nbsp; Political Philosophy &nbsp;·&nbsp; Inner War
        </p>

        <div 
           className={`border-l-2 border-red-600 pl-6 py-2 max-w-2xl mx-auto text-left bg-gradient-to-r from-gray-900/60 to-transparent backdrop-blur-sm mb-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
        >
          <p className="italic text-gray-300 font-reading text-lg md:text-xl font-normal leading-relaxed">
            "I don't write about heroes. I write about people who survive when the world forgets them."
          </p>
        </div>

        {/* Stats Row */}
        <div className={`flex flex-wrap justify-center gap-8 md:gap-12 mb-12 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center">
            <span className="block font-cinzel text-2xl md:text-4xl text-gold font-bold">6</span>
            <span className="text-[10px] font-cinzel tracking-[0.3em] text-gray-500 uppercase">Books</span>
          </div>
          <div className="text-center">
            <span className="block font-cinzel text-2xl md:text-4xl text-gold font-bold">3</span>
            <span className="text-[10px] font-cinzel tracking-[0.3em] text-gray-500 uppercase">Genres</span>
          </div>
          <div className="text-center">
            <span className="block font-cinzel text-2xl md:text-4xl text-gold font-bold">980+</span>
            <span className="text-[10px] font-cinzel tracking-[0.3em] text-gray-500 uppercase">Pages</span>
          </div>
          <div className="text-center">
            <span className="block font-cinzel text-2xl md:text-4xl text-gold font-bold">1</span>
            <span className="text-[10px] font-cinzel tracking-[0.3em] text-gray-500 uppercase">Vision</span>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div 
          className={`flex flex-col md:flex-row gap-6 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <button 
            onClick={() => scrollToSection('books')}
            className="group relative px-8 py-4 overflow-hidden bg-white/5 border border-white/10 text-gray-100 font-cinzel font-bold tracking-widest transition-all duration-300 hover:border-red-500/50 hover:bg-red-900/10 backdrop-blur-sm"
          >
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
            <span className="relative z-10 flex items-center gap-3 text-xs md:text-sm">
              EXPLORE THE CATALOG
              <ScrollText className="w-4 h-4 text-red-500" />
            </span>
          </button>

          <button 
            onClick={() => scrollToSection('vault')}
            className="group relative px-8 py-4 overflow-hidden bg-red-800 text-white font-cinzel font-bold tracking-widest transition-all duration-300 hover:bg-red-700 shadow-lg hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-3 text-xs md:text-sm">
              ENTER THE ARCHIVE
              <Sparkles className="w-4 h-4 text-yellow-400 group-hover:rotate-12 transition-transform" />
            </span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-400 z-20 transition-opacity duration-1000 delay-[1500ms] flex flex-col items-center gap-2 ${isVisible ? 'opacity-80' : 'opacity-0'}`}>
        <span className="font-cinzel text-[10px] tracking-[0.3em] uppercase">Descend</span>
        <ChevronDown className="w-6 h-6" />
      </div>
    </div>
  );
};