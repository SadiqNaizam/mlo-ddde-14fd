import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { BookOpen, ShoppingCart } from 'lucide-react';

interface BookCoverProps {
  title: string;
  imageUrl: string;
  /** A slug or ID to link to the book's detail page */
  bookId: string;
  /** Determines which action buttons to display */
  context: 'store' | 'library';
  className?: string;
}

const BookCover: React.FC<BookCoverProps> = ({
  title,
  imageUrl,
  bookId,
  context,
  className,
}) => {
  console.log('BookCover loaded for:', title);

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.05,
        boxShadow: '0px 15px 25px -5px rgba(0, 0, 0, 0.2), 0px 10px 10px -5px rgba(0, 0, 0, 0.1)',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={cn('w-full rounded-md overflow-hidden', className)}
    >
      <div className="group relative block w-full cursor-pointer overflow-hidden rounded-md shadow-lg">
        <Link to="/book-detail" state={{ bookId }} aria-label={`View details for ${title}`}>
          <AspectRatio ratio={2 / 3}>
            <img
              src={imageUrl || 'https://via.placeholder.com/200x300'}
              alt={`Cover of ${title}`}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </AspectRatio>
        </Link>

        {/* Interactive Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="p-4 space-y-2">
            <h3 className="text-white font-bold text-lg leading-tight line-clamp-2">{title}</h3>

            {context === 'store' && (
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                <Link to="/checkout" state={{ bookId }}>
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Purchase
                </Link>
              </Button>
            )}

            {context === 'library' && (
              <Button asChild className="w-full">
                <Link to="/e--reader" state={{ bookId }}>
                  <BookOpen className="mr-2 h-4 w-4" />
                  Read Online
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BookCover;