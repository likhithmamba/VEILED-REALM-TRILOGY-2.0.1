
import React, { useEffect, useState } from 'react';
import { BOOKS } from '../constants';
import { Book } from '../types';
import { Book3DCard } from './Book3DCard';

interface BookGridProps {
  onBookSelect: (book: Book) => void;
}

export const BookGrid: React.FC<BookGridProps> = ({ onBookSelect }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24 max-w-7xl mx-auto px-6 place-items-center">
      {BOOKS.map((book, idx) => (
        <div 
          key={book.id} 
          className={`transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: `${idx * 150}ms` }}
        >
          <Book3DCard book={book} onClick={() => onBookSelect(book)} />
        </div>
      ))}
    </div>
  );
};
