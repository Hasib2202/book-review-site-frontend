// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { BookOpen, Star, Users, TrendingUp, ArrowRight, Quote } from 'lucide-react';

export default function HomePage() {
  // Mock data for featured books
  const featuredBooks = [
    {
      id: 1,
      title: "The Midnight Library",
      author: "Matt Haig",
      rating: 4.8,
      reviews: 2456,
      cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Project Hail Mary",
      author: "Andy Weir",
      rating: 4.9,
      reviews: 3821,
      cover: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=300&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Klara and the Sun",
      author: "Kazuo Ishiguro",
      rating: 4.6,
      reviews: 1987,
      cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop"
    }
  ];

  const stats = [
    { icon: BookOpen, label: "Books Reviewed", value: "50,000+" },
    { icon: Users, label: "Active Readers", value: "12,000+" },
    { icon: Star, label: "Total Reviews", value: "150,000+" },
    { icon: TrendingUp, label: "Monthly Growth", value: "25%" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto max-w-screen-xl px-4 py-20 lg:py-32">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="flex flex-col space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                  Discover Your Next
                  <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    Great Read
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Join thousands of readers sharing reviews, discovering new books, and building their perfect reading list.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/register">
                    Start Reading Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/books">Browse Books</Link>
                </Button>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="h-8 w-8 rounded-full bg-gradient-to-r from-primary/20 to-secondary border-2 border-background" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Join 12,000+ happy readers
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4 rotate-3">
                <div className="space-y-4">
                  <Card className="transform hover:scale-105 transition-transform">
                    <div className="aspect-[3/4] bg-gradient-to-br from-blue-500 to-purple-600 rounded-t-lg" />
                  </Card>
                  <Card className="transform hover:scale-105 transition-transform">
                    <div className="aspect-[3/4] bg-gradient-to-br from-green-500 to-teal-600 rounded-t-lg" />
                  </Card>
                </div>
                <div className="space-y-4 pt-8">
                  <Card className="transform hover:scale-105 transition-transform">
                    <div className="aspect-[3/4] bg-gradient-to-br from-orange-500 to-red-600 rounded-t-lg" />
                  </Card>
                  <Card className="transform hover:scale-105 transition-transform">
                    <div className="aspect-[3/4] bg-gradient-to-br from-pink-500 to-rose-600 rounded-t-lg" />
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <stat.icon className="h-8 w-8 text-primary mx-auto" />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-20">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">Featured Books</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the most talked-about books in our community. From bestsellers to hidden gems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredBooks.map((book) => (
              <Card key={book.id} className="group hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="aspect-[3/4] bg-gradient-to-br from-secondary to-secondary/50 rounded-t-lg flex items-center justify-center">
                    <BookOpen className="h-16 w-16 text-muted-foreground" />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">
                    {book.title}
                  </CardTitle>
                  <CardDescription className="mb-4">
                    by {book.author}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{book.rating}</span>
                      <span className="text-sm text-muted-foreground">
                        ({book.reviews} reviews)
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/books">
                View All Books
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">What Readers Say</h2>
            <p className="text-muted-foreground">
              Join our community of passionate book lovers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="text-center">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground mb-4">
                    "BookHaven has completely transformed how I discover new books.
                    The community reviews are incredibly helpful!"
                  </p>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-primary/20 to-secondary" />
                    <div className="text-left">
                      <div className="text-sm font-medium">Sarah Johnson</div>
                      <div className="text-xs text-muted-foreground">Book Enthusiast</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-screen-xl px-4">
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="p-12 text-center">
              <CardTitle className="text-3xl mb-4">
                Ready to Start Your Reading Journey?
              </CardTitle>
              <CardDescription className="text-lg mb-8 max-w-2xl mx-auto">
                Join BookHaven today and connect with fellow book lovers,
                discover your next favorite read, and share your thoughts with the community.
              </CardDescription>
              <Button size="lg" asChild>
                <Link to="/register">
                  Get Started - It's Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
