import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BookshelfCarousel from '@/components/BookshelfCarousel';

// This is a local type definition that matches the props expected by the BookshelfCarousel component.
// The `action` prop is used by the carousel to determine the context for the BookCover component.
interface BookData {
    id: string;
    slug: string;
    title: string;
    author: string;
    coverImageUrl: string;
    action?: 'purchase' | 'read';
}

// Placeholder data representing a user's purchased books.
const myFantasyBooks: BookData[] = [
  {
    id: '1',
    slug: 'six-of-crows',
    title: 'Six of Crows',
    author: 'Leigh Bardugo',
    coverImageUrl: 'https://placehold.co/200x300/1e293b/ffffff?text=Six+of+Crows',
    action: 'read',
  },
  {
    id: '2',
    slug: 'the-name-of-the-wind',
    title: 'The Name of the Wind',
    author: 'Patrick Rothfuss',
    coverImageUrl: 'https://placehold.co/200x300/4d7c0f/ffffff?text=The+Name+of\\nthe+Wind',
    action: 'read',
  },
  {
    id: '3',
    slug: 'mistborn-the-final-empire',
    title: 'Mistborn: The Final Empire',
    author: 'Brandon Sanderson',
    coverImageUrl: 'https://placehold.co/200x300/7f1d1d/ffffff?text=Mistborn',
    action: 'read',
  },
  {
    id: '4',
    slug: 'a-darker-shade-of-magic',
    title: 'A Darker Shade of Magic',
    author: 'V.E. Schwab',
    coverImageUrl: 'https://placehold.co/200x300/581c87/ffffff?text=A+Darker\\nShade+of+Magic',
    action: 'read',
  },
  {
    id: '5',
    slug: 'the-poppy-war',
    title: 'The Poppy War',
    author: 'R.F. Kuang',
    coverImageUrl: 'https://placehold.co/200x300/b91c1c/ffffff?text=The+Poppy\\nWar',
    action: 'read',
  },
   {
    id: '6',
    slug: 'the-lies-of-locke-lamora',
    title: 'The Lies of Locke Lamora',
    author: 'Scott Lynch',
    coverImageUrl: 'https://placehold.co/200x300/9a3412/ffffff?text=The+Lies+of\\nLocke+Lamora',
    action: 'read',
  },
];

const mySciFiBooks: BookData[] = [
  {
    id: '7',
    slug: 'dune',
    title: 'Dune',
    author: 'Frank Herbert',
    coverImageUrl: 'https://placehold.co/200x300/a16207/ffffff?text=Dune',
    action: 'read',
  },
  {
    id: '8',
    slug: 'project-hail-mary',
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    coverImageUrl: 'https://placehold.co/200x300/0e7490/ffffff?text=Project+Hail\\nMary',
    action: 'read',
  },
  {
    id: '9',
    slug: 'hyperion',
    title: 'Hyperion',
    author: 'Dan Simmons',
    coverImageUrl: 'https://placehold.co/200x300/4a044e/ffffff?text=Hyperion',
    action: 'read',
  },
];


const MyLibraryPage = () => {
  console.log('MyLibraryPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-[#FBF8F3] font-serif text-stone-800">
      <Header />
      <main className="flex-grow container py-8 md:py-16">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-stone-900">My Library</h1>
          <p className="text-lg text-stone-600 mt-2 max-w-2xl mx-auto">
            Your personal collection of purchased books. Select any cover to begin reading.
          </p>
        </div>

        <div className="space-y-12">
           <BookshelfCarousel title="Fantasy Collection" books={myFantasyBooks} />
           <BookshelfCarousel title="Science Fiction" books={mySciFiBooks} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MyLibraryPage;