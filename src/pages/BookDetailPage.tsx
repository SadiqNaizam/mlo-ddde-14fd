import React from 'react';
import { Link } from 'react-router-dom';

// Custom Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Shadcn/UI Components
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';

// Icons
import { ShoppingCart, Headphones, Star } from 'lucide-react';

// Placeholder data for a single book
const bookData = {
  id: '978-0-7653-2635-5',
  title: 'The Way of Kings',
  author: 'Brandon Sanderson',
  coverImageUrl: 'https://placehold.co/400x600/663322/FFFFFF?text=The+Way+of+Kings',
  price: 29.99,
  rating: 4.8,
  reviews: 1245,
  synopsis: "Roshar is a world of stone and storms. Uncanny tempests of incredible power sweep across the rocky terrain... It has been centuries since the fall of the ten consecrated orders known as the Knights Radiant, but their Shardblades and Shardplate remain: mystical swords and suits of armor that transform ordinary men into near-invincible warriors. Men trade kingdoms for Shardblades. Wars were fought for them, and won by them. One such war rages on a ruined landscape called the Shattered Plains. There, Kaladin, who traded his medical apprenticeship for a spear to protect his little brother, has been reduced to slavery. In a war that makes no sense, where ten armies fight separately against a single foe, he struggles to save his men and to fathom the leaders who consider them expendable.",
  details: {
    publisher: 'Tor Books',
    publicationDate: 'August 31, 2010',
    pages: 1007,
    isbn: '978-0-7653-2635-5',
    genre: 'Epic Fantasy',
  },
  authorBio: "Brandon Sanderson is an American author of epic fantasy and science fiction. He is best known for the Cosmere fictional universe, in which most of his fantasy novels are set. He is also known for finishing Robert Jordan's fantasy series The Wheel of Time."
};

const BookDetailPage = () => {
  console.log('BookDetailPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-stone-50 text-stone-800">
      <Header />
      <main className="flex-grow container py-8 md:py-12">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Store</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{bookData.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-[1fr,2fr] gap-8 lg:gap-12">
          {/* Left Column: Book Cover */}
          <aside>
            <Card className="overflow-hidden shadow-lg border-stone-200">
              <CardContent className="p-0">
                <img 
                  src={bookData.coverImageUrl} 
                  alt={`Cover of ${bookData.title}`} 
                  className="w-full h-auto object-cover"
                />
              </CardContent>
            </Card>
          </aside>

          {/* Right Column: Book Info & Actions */}
          <section>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-2">{bookData.title}</h1>
            <p className="text-lg text-stone-600 mb-4">by <span className="font-semibold text-stone-800">{bookData.author}</span></p>
            
            <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1 text-amber-500">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="font-bold text-stone-800">{bookData.rating}</span>
                </div>
                <span className="text-sm text-stone-500">({bookData.reviews} reviews)</span>
            </div>

            <Separator className="my-6" />

            <div className="flex items-baseline gap-4 mb-6">
                <span className="text-4xl font-bold text-red-700">${bookData.price}</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
                <Link to="/checkout" state={{ bookId: bookData.id }}>
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Purchase Now
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                <Headphones className="mr-2 h-5 w-5" />
                Listen to Sample
              </Button>
            </div>

            <Tabs defaultValue="synopsis" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-stone-200">
                <TabsTrigger value="synopsis">Synopsis</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="author">About the Author</TabsTrigger>
              </TabsList>
              <TabsContent value="synopsis" className="mt-4 p-4 bg-white rounded-md border border-stone-200">
                <p className="text-base leading-relaxed">{bookData.synopsis}</p>
              </TabsContent>
              <TabsContent value="details" className="mt-4 p-4 bg-white rounded-md border border-stone-200">
                <ul className="space-y-2 text-sm">
                    <li><strong>Publisher:</strong> {bookData.details.publisher}</li>
                    <li><strong>Publication Date:</strong> {bookData.details.publicationDate}</li>
                    <li><strong>Pages:</strong> {bookData.details.pages}</li>
                    <li><strong>ISBN:</strong> {bookData.details.isbn}</li>
                    <li><strong>Genre:</strong> {bookData.details.genre}</li>
                </ul>
              </TabsContent>
              <TabsContent value="author" className="mt-4 p-4 bg-white rounded-md border border-stone-200">
                 <p className="text-base leading-relaxed">{bookData.authorBio}</p>
              </TabsContent>
            </Tabs>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookDetailPage;