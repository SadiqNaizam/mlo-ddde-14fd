import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import BookDetailPage from "./pages/BookDetailPage";
import CheckoutPage from "./pages/CheckoutPage";
import E-ReaderView from "./pages/E-ReaderView";
import Homepage from "./pages/Homepage";
import MyLibraryPage from "./pages/MyLibraryPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();


const App = () => (
<QueryClientProvider client={queryClient}>
    <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
        <Routes>


          <Route path="/" element={<Homepage />} />
          <Route path="/book-detail" element={<BookDetailPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/e--reader" element={<E-ReaderView />} />
          <Route path="/my-library" element={<MyLibraryPage />} />
          {/* catch-all */}
          <Route path="*" element={<NotFound />} />


        </Routes>
    </BrowserRouter>
    </TooltipProvider>
</QueryClientProvider>
);

export default App;
