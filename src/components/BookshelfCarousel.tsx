import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BookCover from '@/components/BookCover'; // Assuming this component exists as described
import { Book } from '@/types/book'; // Assuming a shared type definition, will define locally for now

// Local type definition for demonstration purposes. Ideally, this would be in a shared types file.
// Based on the context of BookCover, it would need at least these props.
interface BookCoverProps {
    id: string;
    slug: string;
    title: string;
    author: string;
    coverImageUrl: string;
    action?: 'purchase' | 'read';
}


interface BookshelfCarouselProps {
  title: string;
  books: BookCoverProps[];
}

const BookshelfCarousel: React.FC<BookshelfCarouselProps> = ({ title, books }) => {
  console.log('BookshelfCarousel loaded with title:', title);

  return (
    <div className="w-full py-8 px-4 bg-amber-900/10 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 px-4 text-gray-800">{title}</h2>
      {books.length > 0 ? (
        <Carousel
          opts={{
            align: "start",
            loop: books.length > 5, // Only loop if there are enough books to scroll
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {books.map((book) => (
              <CarouselItem key={book.id} className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6">
                <div className="p-1">
                   <BookCover 
                     id={book.id}
                     slug={book.slug}
                     title={book.title}
                     author={book.author}
                     coverImageUrl={book.coverImageUrl}
                     action={book.action}
                   />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-12 text-gray-800 bg-white/80 hover:bg-white" />
          <CarouselNext className="mr-12 text-gray-800 bg-white/80 hover:bg-white" />
        </Carousel>
      ) : (
        <div className="text-center text-gray-500 py-10">
          <p>No books to display in this shelf.</p>
        </div>
      )}
    </div>
  );
};

export default BookshelfCarousel;