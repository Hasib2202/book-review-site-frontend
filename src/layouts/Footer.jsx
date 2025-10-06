import { Link } from 'react-router-dom';
import { Separator } from '../components/ui/separator';
import { BookOpen, Mail, Github, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto max-w-screen-xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                BookHaven
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Discover, review, and share your favorite books with fellow readers.
              Join our community of book lovers today.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/books" className="hover:text-foreground transition-colors">Browse Books</Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-foreground transition-colors">Reviews</Link>
              </li>
              <li>
                <Link to="/categories" className="hover:text-foreground transition-colors">Categories</Link>
              </li>
              <li>
                <Link to="/authors" className="hover:text-foreground transition-colors">Authors</Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Community</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/forums" className="hover:text-foreground transition-colors">Forums</Link>
              </li>
              <li>
                <Link to="/book-clubs" className="hover:text-foreground transition-colors">Book Clubs</Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-foreground transition-colors">Events</Link>
              </li>
              <li>
                <Link to="/reading-challenges" className="hover:text-foreground transition-colors">Reading Challenges</Link>
              </li>
              <li>
                <Link to="/recommendations" className="hover:text-foreground transition-colors">Recommendations</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/help" className="hover:text-foreground transition-colors">Help Center</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-foreground transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link to="/api" className="hover:text-foreground transition-colors">API Documentation</Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} BookHaven. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Made with ❤️ for book lovers everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}
