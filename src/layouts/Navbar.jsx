import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Button } from '../components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '../components/ui/dropdown-menu';
import { BookOpen, User, LogOut, Search, Menu, X } from 'lucide-react';

export default function Navbar() {
  const { user, signOut } = useContext(AuthContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center justify-between h-16 max-w-screen-xl px-4 mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <BookOpen className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
          <span className="font-serif text-xl sm:text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text hover:from-emerald-400 hover:via-purple-400 hover:to-blue-400 transition-all duration-500">
            BookHaven
          </span>
        </Link>

        {/* Navigation Links - Hidden on mobile */}
        <div className="items-center hidden space-x-8 lg:flex">
          <Link to="/" className="font-sans text-sm font-medium text-muted-foreground hover:text-blue-400 transition-all duration-300 hover:scale-105 transform relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="/books" className="font-sans text-sm font-medium text-muted-foreground hover:text-purple-400 transition-all duration-300 hover:scale-105 transform relative group">
            Browse Books
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="/reviews" className="font-sans text-sm font-medium text-muted-foreground hover:text-emerald-400 transition-all duration-300 hover:scale-105 transform relative group">
            Reviews
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="/about" className="font-sans text-sm font-medium text-muted-foreground hover:text-amber-400 transition-all duration-300 hover:scale-105 transform relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="items-center flex-1 hidden max-w-md mx-6 space-x-2 xl:flex">
          <div className="relative w-full group">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-focus-within:text-blue-400 transition-colors duration-300" />
            <input
              type="search"
              placeholder="Search books, authors, reviews..."
              className="font-sans flex w-full px-3 py-2 text-sm transition-all duration-300 border rounded-lg shadow-sm h-10 border-border bg-background/50 pl-10 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:border-blue-400 disabled:cursor-not-allowed disabled:opacity-50 hover:bg-background/70"
            />
          </div>
        </div>

        {/* Auth Section */}
        <div className="flex items-center space-x-4">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative w-10 h-10 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300">
                  <User className="w-5 h-5 text-blue-400" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 border-border/50 bg-card/95 backdrop-blur-sm" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="font-serif text-sm font-medium leading-none">{user.name}</p>
                    <p className="font-mono text-xs leading-none text-muted-foreground">
                      @{user.username}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="font-sans hover:bg-blue-500/10">
                  <User className="w-4 h-4 mr-2 text-blue-400" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="font-sans hover:bg-emerald-500/10">
                  <BookOpen className="w-4 h-4 mr-2 text-emerald-400" />
                  <span>My Reviews</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={signOut} className="font-sans text-red-400 hover:bg-red-500/10">
                  <LogOut className="w-4 h-4 mr-2" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center space-x-2">
              <Button variant="ghost" asChild className="font-sans font-medium hover:bg-blue-500/10 hover:text-blue-400 transition-all duration-300">
                <Link to="/login">Sign In</Link>
              </Button>
              <Button asChild className="font-sans font-medium bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
                <Link to="/register">Sign Up</Link>
              </Button>
            </div>
          )}

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-blue-500/10 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-muted-foreground hover:text-blue-400 transition-colors duration-300" />
              ) : (
                <Menu className="w-5 h-5 text-muted-foreground hover:text-blue-400 transition-colors duration-300" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <div className="relative w-full">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search books, authors, reviews..."
                  className="font-sans flex w-full px-3 py-2 text-sm transition-all duration-300 border rounded-lg shadow-sm h-10 border-border bg-background/50 pl-10 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:border-blue-400 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              {/* Mobile Navigation Links */}
              <div className="flex flex-col space-y-3">
                <Link
                  to="/"
                  className="font-sans text-base font-medium text-muted-foreground hover:text-blue-400 transition-colors duration-300 px-2 py-2 hover:bg-blue-500/5 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/books"
                  className="font-sans text-base font-medium text-muted-foreground hover:text-purple-400 transition-colors duration-300 px-2 py-2 hover:bg-purple-500/5 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Browse Books
                </Link>
                <Link
                  to="/reviews"
                  className="font-sans text-base font-medium text-muted-foreground hover:text-emerald-400 transition-colors duration-300 px-2 py-2 hover:bg-emerald-500/5 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Reviews
                </Link>
                <Link
                  to="/about"
                  className="font-sans text-base font-medium text-muted-foreground hover:text-amber-400 transition-colors duration-300 px-2 py-2 hover:bg-amber-500/5 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
              </div>

              {/* Mobile Auth Section */}
              {!user && (
                <div className="flex flex-col space-y-3 pt-4 border-t border-border/40">
                  <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start font-sans font-medium hover:bg-blue-500/10 hover:text-blue-400 transition-all duration-300">
                      Sign In
                    </Button>
                  </Link>
                  <Link to="/register" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="w-full font-sans font-medium bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
                      Sign Up
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
