
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

  const veiledRealmBooks = BOOKS.filter(b => b.series === 'veiled-realm');
  const standaloneBooks = BOOKS.filter(b => b.series === 'standalone');

  return (
    <div className="space-y-32">
      {/* Veiled Realm Series */}
      <div>
        <div className="text-center mb-16">
          <h3 className="text-3xl font-cinzel text-gold mb-4 tracking-widest uppercase">The Veiled Realm</h3>
          <div className="w-16 h-[1px] bg-red-800 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-24 max-w-7xl mx-auto px-6 place-items-center">
          {veiledRealmBooks.map((book, idx) => (
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
      </div>

      {/* Standalone Novels */}
      {standaloneBooks.length > 0 && (
        <div>
          <div className="text-center mb-16">
            <h3 className="text-3xl font-cinzel text-gray-300 mb-4 tracking-widest uppercase">Standalone Works</h3>
            <div className="w-16 h-[1px] bg-gray-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-24 max-w-7xl mx-auto px-6 place-items-center">
            {standaloneBooks.map((book, idx) => (
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
        </div>
      )}
    </div>
  );
};
