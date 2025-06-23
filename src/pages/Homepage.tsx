import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BookshelfCarousel from '@/components/BookshelfCarousel';

// NOTE: The data structure below matches the prop type defined inside the provided BookshelfCarousel.tsx component.
// The 'action' property is set to 'purchase', which should correspond to the 'store' context in the BookCover component.
const newArrivals = [
  { id: 'book-1', slug: 'shadow-and-bone', title: 'Shadow and Bone', author: 'Leigh Bardugo', coverImageUrl: 'https://placehold.co/400x600/1e293b/ffffff?text=Shadow+and+Bone', action: 'purchase' as const },
  { id: 'book-2', slug: 'dune', title: 'Dune', author: 'Frank Herbert', coverImageUrl: 'https://placehold.co/400x600/d97706/ffffff?text=Dune', action: 'purchase' as const },
  { id: 'book-3', slug: 'the-song-of-achilles', title: 'The Song of Achilles', author: 'Madeline Miller', coverImageUrl: 'https://placehold.co/400x600/be123c/ffffff?text=The+Song+of+Achilles', action: 'purchase' as const },
  { id: 'book-4', slug: 'project-hail-mary', title: 'Project Hail Mary', author: 'Andy Weir', coverImageUrl: 'https://placehold.co/400x600/0369a1/ffffff?text=Project+Hail+Mary', action: 'purchase' as const },
  { id: 'book-5', slug: 'circe', title: 'Circe', author: 'Madeline Miller', coverImageUrl: 'https://placehold.co/400x600/166534/ffffff?text=Circe', action: 'purchase' as const },
  { id: 'book-6', slug: 'klara-and-the-sun', title: 'Klara and the Sun', author: 'Kazuo Ishiguro', coverImageUrl: 'https://placehold.co/400x600/9a3412/ffffff?text=Klara+and+the+Sun', action: 'purchase' as const },
];

const bestsellers = [
  { id: 'book-7', slug: 'the-three-body-problem', title: 'The Three-Body Problem', author: 'Cixin Liu', coverImageUrl: 'https://placehold.co/400x600/4f46e5/ffffff?text=The+Three-Body+Problem', action: 'purchase' as const },
  { id: 'book-8', slug: 'the-midnight-library', title: 'The Midnight Library', author: 'Matt Haig', coverImageUrl: 'https://placehold.co/400x600/115e59/ffffff?text=The+Midnight+Library', action: 'purchase' as const },
  { id: 'book-9', slug: 'atomic-habits', title: 'Atomic Habits', author: 'James Clear', coverImageUrl: 'https://placehold.co/400x600/a16207/ffffff?text=Atomic+Habits', action: 'purchase' as const },
  { id: 'book-10', slug: 'where-the-crawdads-sing', title: 'Where the Crawdads Sing', author: 'Delia Owens', coverImageUrl: 'https://placehold.co/400x600/365314/ffffff?text=Where+the+Crawdads+Sing', action: 'purchase' as const },
  { id: 'book-11', slug: 'the-silent-patient', title: 'The Silent Patient', author: 'Alex Michaelides', coverImageUrl: 'https://placehold.co/400x600/1f2937/ffffff?text=The+Silent+Patient', action: 'purchase' as const },
  { id: 'book-12', slug: 'educated', title: 'Educated', author: 'Tara Westover', coverImageUrl: 'https://placehold.co/400x600/7c2d12/ffffff?text=Educated', action: 'purchase' as const },
];

const curatedCollections = [
  { id: 'book-13', slug: 'a-gentleman-in-moscow', title: 'A Gentleman in Moscow', author: 'Amor Towles', coverImageUrl: 'https://placehold.co/400x600/4a044e/ffffff?text=A+Gentleman+in+Moscow', action: 'purchase' as const },
  { id: 'book-14', slug: 'exhalation', title: 'Exhalation: Stories', author: 'Ted Chiang', coverImageUrl: 'https://placehold.co/400x600/6d28d9/ffffff?text=Exhalation', action: 'purchase' as const },
  { id: 'book-15', slug: 'piranesi', title: 'Piranesi', author: 'Susanna Clarke', coverImageUrl: 'https://placehold.co/400x600/ca8a04/ffffff?text=Piranesi', action: 'purchase' as const },
  { id: 'book-16', slug: 'the-house-in-the-cerulean-sea', title: 'The House in the Cerulean Sea', author: 'TJ Klune', coverImageUrl: 'https://placehold.co/400x600/06b6d4/ffffff?text=The+House+in+the+Cerulean+Sea', action: 'purchase' as const },
  { id: 'book-17', slug: 'braiding-sweetgrass', title: 'Braiding Sweetgrass', author: 'Robin Wall Kimmerer', coverImageUrl: 'https://placehold.co/400x600/15803d/ffffff?text=Braiding+Sweetgrass', action: 'purchase' as const },
  { id: 'book-18', slug: 'the-name-of-the-wind', title: 'The Name of the Wind', author: 'Patrick Rothfuss', coverImageUrl: 'https://placehold.co/400x600/854d0e/ffffff?text=The+Name+of+the+Wind', action: 'purchase' as const },
];


const Homepage = () => {
  console.log('Homepage loaded');
  return (
    <div className="bg-stone-100 min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-1">
        <section className="text-center py-16 px-4 bg-gradient-to-b from-stone-200 to-stone-100">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-800">Welcome to The Reading Room</h1>
            <p className="mt-4 text-lg text-stone-600 max-w-2xl mx-auto">
              Discover your next great adventure in a library built for the modern age.
            </p>
        </section>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
          <BookshelfCarousel title="New Arrivals" books={newArrivals} />
          <BookshelfCarousel title="Bestsellers" books={bestsellers} />
          <BookshelfCarousel title="Curated Collections" books={curatedCollections} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;