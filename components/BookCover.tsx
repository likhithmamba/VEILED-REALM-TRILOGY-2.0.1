
import React from 'react';
import { Book } from '../types';

interface BookCoverProps {
  book: Book;
  className?: string;
}

export const BookCover: React.FC<BookCoverProps> = ({ book, className = "" }) => {
  return (
    <div className={`relative w-[220px] h-[300px] flex items-center justify-center group ${className}`}>
      {/* Skewed Background Body */}
      <div className="absolute top-0 left-12 w-1/2 h-full bg-gradient-to-br from-gold to-crimson rounded-lg skew-x-[15deg] transition-all duration-500 group-hover:skew-x-0 group-hover:scale-x-[1.4]" />

      {/* Glass Floating Panes */}
      <span className="absolute inset-0 z-20 pointer-events-none">
        <div className="absolute -top-8 left-8 w-12 h-12 rounded-lg bg-white/10 backdrop-blur-[10px] border border-white/20 shadow-xl group-hover:translate-y-2 group-hover:-translate-x-1 transition-all duration-500" />
        <div className="absolute -bottom-8 right-8 w-12 h-12 rounded-lg bg-white/10 backdrop-blur-[10px] border border-white/20 shadow-xl group-hover:-translate-y-2 group-hover:translate-x-1 transition-all duration-500" />
      </span>

      {/* Main Glass Image Area */}
      <div className="relative w-[190px] h-[254px] bg-void/60 backdrop-blur-[10px] border border-white/10 shadow-2xl rounded-lg z-10 overflow-hidden">
        <img 
          src={book.coverUrl} 
          alt={book.title} 
          className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
      </div>
    </div>
  );
};
