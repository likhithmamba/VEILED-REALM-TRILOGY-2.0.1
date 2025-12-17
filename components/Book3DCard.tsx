
import React from 'react';
import { Book } from '../types';
import { BookOpen } from 'lucide-react';

interface Book3DCardProps {
  book: Book;
  onClick: () => void;
}

export const Book3DCard: React.FC<Book3DCardProps> = ({ book, onClick }) => {
  return (
    <div 
      className="relative w-[280px] h-[380px] flex items-center justify-center transition-all duration-500 group cursor-pointer"
      onClick={onClick}
    >
      {/* Skewed Background Shadow (Pseudo After) */}
      <div className="absolute top-0 left-12 w-1/2 h-full bg-gradient-to-br from-gold to-crimson rounded-lg skew-x-[15deg] transition-all duration-500 filter blur-[30px] group-hover:skew-x-0 group-hover:scale-x-[1.4] opacity-50" />
      
      {/* Skewed Background Body (Pseudo Before) */}
      <div className="absolute top-0 left-12 w-1/2 h-full bg-gradient-to-br from-gold to-crimson rounded-lg skew-x-[15deg] transition-all duration-500 group-hover:skew-x-0 group-hover:scale-x-[1.4]" />

      {/* Floating Glass Panes */}
      <span className="absolute inset-0 z-20 pointer-events-none">
        {/* Top Pane */}
        <div className="absolute -top-10 left-10 w-16 h-16 rounded-lg bg-white/10 backdrop-blur-[10px] border border-white/20 shadow-xl transition-all duration-700 group-hover:translate-y-4 group-hover:-translate-x-2 flex items-center justify-center overflow-hidden">
           <img src={book.coverUrl} className="w-full h-full object-cover opacity-20 scale-150" />
        </div>
        {/* Bottom Pane */}
        <div className="absolute -bottom-10 right-10 w-16 h-16 rounded-lg bg-white/10 backdrop-blur-[10px] border border-white/20 shadow-xl transition-all duration-700 group-hover:-translate-y-4 group-hover:translate-x-2 flex items-center justify-center overflow-hidden">
           <img src={book.coverUrl} className="w-full h-full object-cover opacity-20 scale-150" />
        </div>
      </span>

      {/* Main Glass Content Area */}
      <div className="relative w-[240px] h-[320px] bg-void/40 backdrop-blur-[12px] border border-white/10 shadow-2xl rounded-lg z-10 overflow-hidden transition-all duration-500 group-hover:bg-void/60">
        
        {/* Actual Book Artwork Background */}
        <div className="absolute inset-0 opacity-40 transition-opacity duration-700 group-hover:opacity-80">
          <img 
            src={book.coverUrl} 
            alt={book.title} 
            className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-1000"
          />
        </div>

        {/* Cinematic Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        {/* Text Overlay */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <span className="text-red-500 font-cinzel font-bold text-[10px] tracking-[0.4em] mb-1 block drop-shadow-md">
            {book.subtitle}
          </span>
          <h3 className="text-white font-cinzel font-bold text-lg leading-tight mb-2 transition-colors duration-500 drop-shadow-lg group-hover:text-gold">
            {book.title}
          </h3>
          
          <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
             <p className="text-gray-300 font-montserrat text-[10px] leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                {book.description}
             </p>
          </div>

          <div className="mt-4 flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100 delay-300">
            <span className="text-gold font-cinzel font-bold text-[9px] tracking-widest uppercase">
              REVEAL TOME
            </span>
            <BookOpen className="w-3 h-3 text-gold" />
          </div>
        </div>
      </div>
    </div>
  );
};
