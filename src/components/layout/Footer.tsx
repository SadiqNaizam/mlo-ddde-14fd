import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const Footer: React.FC = () => {
  console.log('Footer loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-400 border-t border-stone-700">
      <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center sm:items-start">
           <div className="flex items-center gap-2 mb-2">
            <BookOpen className="h-5 w-5 text-amber-500" />
            <span className="font-serif text-lg font-bold text-stone-200">The Reading Room</span>
          </div>
          <p className="text-xs text-stone-500">
            &copy; {currentYear} The Reading Room. All rights reserved.
          </p>
        </div>
        <nav className="flex gap-4 sm:gap-6 text-sm">
          <Link to="/about" className="hover:text-amber-300 transition-colors">About Us</Link>
          <Link to="/terms" className="hover:text-amber-300 transition-colors">Terms of Service</Link>
          <Link to="/privacy" className="hover:text-amber-300 transition-colors">Privacy Policy</Link>
          <Link to="/contact" className="hover:text-amber-300 transition-colors">Contact</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;