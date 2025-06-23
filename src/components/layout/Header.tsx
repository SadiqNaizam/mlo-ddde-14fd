import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { BookOpen, Search, UserCircle } from 'lucide-react';

const Header: React.FC = () => {
  console.log('Header loaded');

  // Using a boolean to simulate user login state
  const isLoggedIn = true;

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors hover:text-amber-200 ${
      isActive ? 'text-amber-200' : 'text-stone-300'
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-700 bg-stone-900/90 text-stone-200 backdrop-blur supports-[backdrop-filter]:bg-stone-900/60">
      <div className="container flex h-20 items-center">
        {/* Left Section: Logo & Nav */}
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <BookOpen className="h-7 w-7 text-amber-400" />
            <span className="font-serif text-xl font-bold tracking-tight">The Reading Room</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <NavLink to="/" className={navLinkClasses}>
              Store
            </NavLink>
            <NavLink to="/my-library" className={navLinkClasses}>
              My Library
            </NavLink>
          </nav>
        </div>

        {/* Middle Section: Search */}
        <div className="flex-1 px-4 lg:px-16">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
            <Input
              type="search"
              placeholder="Search by title, author, or genre..."
              className="w-full rounded-full bg-stone-800 border-stone-700 pl-10 text-stone-200 placeholder:text-stone-500 focus:ring-amber-400"
            />
          </div>
        </div>

        {/* Right Section: User Controls */}
        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <UserCircle className="h-6 w-6" />
                  <span className="sr-only">User Menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-stone-800 border-stone-700 text-stone-200">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-stone-700" />
                <DropdownMenuItem className="focus:bg-stone-700 focus:text-amber-200">Profile</DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-stone-700 focus:text-amber-200">Settings</DropdownMenuItem>
                <DropdownMenuSeparator className="bg-stone-700" />
                <DropdownMenuItem className="text-red-400 focus:bg-red-900/50 focus:text-red-300">Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button variant="outline" className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-stone-900">
              Login
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;