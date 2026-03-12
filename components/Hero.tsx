import React, { useEffect, useState } from 'react';
import { ChevronDown, Sparkles, ScrollText } from 'lucide-react';

interface HeroProps {
    startAnimations?: boolean;
}

// All 6 book covers cycle as the hero background
const COVER_SLIDES = [
  {
    src: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop',
    label: 'Veiled Realm — Book I',
    title: 'Threads of the Forgotten',
  },
  {
    src: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2022&auto=format&fit=crop',
    label: 'Veiled Realm — Book II',
    title: 'Echoes of the Shattered Dawn',
  },
  {
    src: 'https://images.unsplash.com/photo-1614728263952-84ea206f25ab?q=80&w=1974&auto=format&fit=crop',
    label: 'Veiled Realm — Book III',
    title: 'The Eclipsed Oath',
  },
  {
    src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    label: 'Standalone — Political Thriller',
    title: 'The Crimson Architect',
  },
  {
    src: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=2070&auto=format&fit=crop',
    label: 'Standalone — Philosophy',
    title: 'Living Without Inner War',
  },
  {
    src: 'https://images.unsplash.com/photo-1505682634904-d7c8d95cdc50?q=80&w=2070&auto=format&fit=crop',
    label: 'Standalone — Essay',
    title: 'Low Light, Clear Eyes',
  },
];

export const Hero: React.FC<HeroProps> = ({ startAnimations = false }) => {
    const [scrollY, setScrollY]     = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [activeSlide, setActiveSlide] = useState(0);
    const [prevSlide, setPrevSlide]     = useState(COVER_SLIDES.length - 1);
    const [fading, setFading]           = useState(false);

    // Trigger text animations after intro overlay
    useEffect(() => {
        if (startAnimations) {
            const t = setTimeout(() => setIsVisible(true), 200);
            return () => clearTimeout(t);
        }
    }, [startAnimations]);

    // Parallax scroll
    useEffect(() => {
        const onScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Auto-cycle slides every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setPrevSlide(activeSlide);
            setFading(true);
            setTimeout(() => {
                setActiveSlide(i => (i + 1) % COVER_SLIDES.length);
                setFading(false);
            }, 800); // matches transition duration
        }, 4000);
        return () => clearInterval(interval);
    }, [activeSlide]);

    const goToSlide = (idx: number) => {
        if (idx === activeSlide) return;
        setPrevSlide(activeSlide);
        setFading(true);
        setTimeout(() => {
            setActiveSlide(idx);
            setFading(false);
        }, 800);
    };

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#030005]">

            {/* ── BACKGROUND SLIDESHOW ── */}
            <div className="absolute inset-0 w-full h-full">

                {/* Previous slide — fades out */}
                <div
                    className="absolute inset-0 bg-cover bg-center transition-opacity duration-[800ms]"
                    style={{
                        backgroundImage: `url('${COVER_SLIDES[prevSlide].src}')`,
                        opacity: fading ? 0.18 : 0,
                        transform: `scale(1.06) translateY(${scrollY * 0.12}px)`,
                        filter: 'blur(2px)',
                    }}
                />

                {/* Active slide — fades in */}
                <div
                    className="absolute inset-0 bg-cover bg-center transition-opacity duration-[800ms] animate-slow-zoom"
                    style={{
                        backgroundImage: `url('${COVER_SLIDES[activeSlide].src}')`,
                        opacity: fading ? 0 : 0.28,
                        transform: `scale(1.06) translateY(${scrollY * 0.12}px)`,
                    }}
                />

                {/* Dark vignette — keeps text readable over any cover */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#030005]/80 via-[#030005]/50 to-[#030005]" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#030005]/90 via-transparent to-[#030005]/90" />
            </div>

            {/* ── SLIDE DOTS (bottom-center) ── */}
            <div className={`absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2 z-10 transition-opacity duration-1000 delay-[1200ms] ${isVisible ? 'opacity-70' : 'opacity-0'}`}>
                {COVER_SLIDES.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => goToSlide(idx)}
                        className={`transition-all duration-300 rounded-full ${
                            activeSlide === idx
                                ? 'w-5 h-1.5 bg-yellow-500'
                                : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/60'
                        }`}
                    />
                ))}
            </div>

            {/* ── FOREGROUND CONTENT ── */}
            <div
                className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center"
                style={{
                    transform: `translateY(${scrollY * 0.3}px)`,
                    opacity: Math.max(0, 1 - scrollY / 600),
                }}
            >
                {/* Eyebrow */}
                <div
                    className={`mb-8 flex items-center justify-center space-x-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent to-yellow-600/60" />
                    <span className="text-yellow-500/80 font-cinzel tracking-[0.3em] text-[10px] md:text-xs font-bold uppercase">
                        The Complete Works of Imperial X
                    </span>
                    <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-yellow-600/60" />
                </div>

                {/* Main Title */}
                <div className="relative mb-8">
                    <h1
                        className={`text-5xl md:text-8xl lg:text-9xl font-cinzel font-bold text-white tracking-widest transition-all duration-[1.2s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isVisible ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-110 blur-md'}`}
                    >
                        IMPERIAL<span className="text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-red-900"> X</span>
                    </h1>
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-red-900/20 blur-[80px] -z-10 transition-opacity duration-[2s] delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />
                </div>

                {/* Tagline */}
                <p
                    className={`text-base md:text-xl text-gray-300 font-montserrat font-normal tracking-widest mb-4 uppercase transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    Dark Fantasy &nbsp;·&nbsp; Political Philosophy &nbsp;·&nbsp; Inner War
                </p>

                {/* Stats */}
                <div
                    className={`flex gap-10 mb-10 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    {[['6', 'Books'], ['3', 'Genres']].map(([num, lbl]) => (
                        <div key={lbl} className="text-center">
                            <span className="block text-2xl md:text-3xl font-cinzel font-bold text-yellow-500">{num}</span>
                            <span className="block text-[9px] font-montserrat tracking-[0.2em] text-gray-500 uppercase mt-1">{lbl}</span>
                        </div>
                    ))}
                </div>

                {/* Quote */}
                <div
                    className={`border-l-2 border-red-700 pl-6 py-2 max-w-xl mx-auto text-left bg-gradient-to-r from-gray-900/60 to-transparent backdrop-blur-sm mb-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                >
                    <p className="italic text-gray-300 font-reading text-base md:text-lg font-normal">
                        "I don't write about heroes. I write about people who survive when the world forgets them."
                    </p>
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
                        onClick={() => scrollToSection('newsletter')}
                        className="group relative px-8 py-4 overflow-hidden bg-red-800 text-white font-cinzel font-bold tracking-widest transition-all duration-300 hover:bg-red-700 shadow-lg hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]"
                    >
                        <span className="relative z-10 flex items-center gap-3 text-xs md:text-sm">
                            JOIN THE REALM
                            <Sparkles className="w-4 h-4 text-yellow-400 group-hover:rotate-12 transition-transform" />
                        </span>
                    </button>
                </div>
            </div>

            {/* Scroll cue */}
            <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-500 z-20 transition-opacity duration-1000 delay-[1500ms] ${isVisible ? 'opacity-60' : 'opacity-0'}`}>
                <ChevronDown className="w-6 h-6" />
            </div>
        </div>
    );
};