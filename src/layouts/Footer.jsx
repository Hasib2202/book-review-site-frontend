import { Link } from 'react-router-dom';
import { Separator } from '../components/ui/separator';
import { BookOpen, Mail, Github, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto max-w-screen-xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4 group">
              <BookOpen className="h-6 w-6 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-serif text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent hover:from-emerald-400 hover:via-purple-400 hover:to-blue-400 transition-all duration-500">
                BookHaven
              </span>
            </Link>
            <p className="font-sans text-sm text-muted-foreground mb-6 leading-relaxed">
              Discover, review, and share your favorite books with fellow readers.
              Join our vibrant community of book lovers today.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/bookhaven" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 hover:scale-110 transition-all duration-300" aria-label="Follow us on Twitter">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="https://instagram.com/bookhaven" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 hover:scale-110 transition-all duration-300" aria-label="Follow us on Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://github.com/bookhaven" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 hover:scale-110 transition-all duration-300" aria-label="View our GitHub">
                <Github className="h-4 w-4" />
              </a>
              <a href="mailto:contact@bookhaven.com" className="p-2 rounded-full bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 hover:scale-110 transition-all duration-300" aria-label="Contact us via email">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="font-sans text-muted-foreground hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Home</Link>
              </li>
              <li>
                <Link to="/books" className="font-sans text-muted-foreground hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Browse Books</Link>
              </li>
              <li>
                <Link to="/reviews" className="font-sans text-muted-foreground hover:text-emerald-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Reviews</Link>
              </li>
              <li>
                <Link to="/categories" className="font-sans text-muted-foreground hover:text-amber-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Categories</Link>
              </li>
              <li>
                <Link to="/authors" className="font-sans text-muted-foreground hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Authors</Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-foreground">Community</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/forums" className="font-sans text-muted-foreground hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Forums</Link>
              </li>
              <li>
                <Link to="/book-clubs" className="font-sans text-muted-foreground hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Book Clubs</Link>
              </li>
              <li>
                <Link to="/events" className="font-sans text-muted-foreground hover:text-emerald-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Events</Link>
              </li>
              <li>
                <Link to="/reading-challenges" className="font-sans text-muted-foreground hover:text-amber-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Reading Challenges</Link>
              </li>
              <li>
                <Link to="/recommendations" className="font-sans text-muted-foreground hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Recommendations</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-foreground">Support</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/help" className="font-sans text-muted-foreground hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Help Center</Link>
              </li>
              <li>
                <Link to="/contact" className="font-sans text-muted-foreground hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Contact Us</Link>
              </li>
              <li>
                <Link to="/privacy" className="font-sans text-muted-foreground hover:text-emerald-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="font-sans text-muted-foreground hover:text-amber-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">Terms of Service</Link>
              </li>
              <li>
                <Link to="/api" className="font-sans text-muted-foreground hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">API Documentation</Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <p className="font-mono text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} BookHaven. All rights reserved.
          </p>
          <p className="font-sans text-sm text-muted-foreground flex items-center gap-1">
            Made with <span className="text-red-400 animate-pulse">❤️</span> for book lovers everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}
