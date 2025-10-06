// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { BookOpen, Star, Users, ArrowRight, Quote, Sparkles, Award, Heart } from 'lucide-react';

export default function HomePage() {
  // Mock data for featured books
  const featuredBooks = [
    {
      id: 1,
      title: "The Midnight Library",
      author: "Matt Haig",
      rating: 4.8,
      reviews: 2456,
      genre: "Fiction"
    },
    {
      id: 2,
      title: "Project Hail Mary",
      author: "Andy Weir",
      rating: 4.9,
      reviews: 3821,
      genre: "Sci-Fi"
    },
    {
      id: 3,
      title: "Klara and the Sun",
      author: "Kazuo Ishiguro",
      rating: 4.6,
      reviews: 1987,
      genre: "Literary"
    }
  ];

  const stats = [
    { icon: BookOpen, label: "Books Reviewed", value: "50,000+", color: "text-blue-400" },
    { icon: Users, label: "Active Readers", value: "12,000+", color: "text-green-400" },
    { icon: Star, label: "Total Reviews", value: "150,000+", color: "text-yellow-400" },
    { icon: Award, label: "Featured Authors", value: "2,500+", color: "text-purple-400" }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* New Hero Section - Floating Books Design */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJzdGFyIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cG9seWdvbiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBwb2ludHM9IjEwLDEgMTMsOCA3LDggMTAsOCIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3N0YXIpIi8+Cjwvc3ZnPg==')] opacity-20"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-4 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-sm shadow-lg"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-5 h-7 bg-gradient-to-br from-purple-400 to-purple-600 rounded-sm shadow-lg"
            animate={{
              y: [0, 25, 0],
              rotate: [0, -8, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div
            className="absolute bottom-40 left-1/4 w-3 h-5 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-sm shadow-lg"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.div
            className="absolute bottom-20 right-1/3 w-6 h-8 bg-gradient-to-br from-rose-400 to-rose-600 rounded-sm shadow-lg"
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                <span>Welcome to BookHaven</span>
              </div>

              <h1 className="font-serif text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-tight">
                Where Stories
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent animate-pulse">
                  Come Alive
                </span>
              </h1>

              <p className="font-sans text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Dive into a universe of literary adventures. Discover, review, and share the books that shape our world.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            >
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 text-lg" asChild>
                <Link to="/register">
                  <Heart className="mr-2 h-5 w-5" />
                  Join Our Community
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white font-semibold px-8 py-4 text-lg" asChild>
                <Link to="/books">
                  Explore Library
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-12"
            >
              <div className="flex items-center justify-center space-x-8 text-slate-400 font-mono text-sm">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-1">
                    {[1, 2, 3, 4, 5].map(i => (
                      <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-r from-slate-600 to-slate-500 border-2 border-slate-800" />
                    ))}
                  </div>
                  <span>12,000+ readers worldwide</span>
                </div>
                <div className="hidden sm:flex items-center space-x-2">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <span>4.9/5 community rating</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-400 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-900 to-slate-800 border-y border-slate-700">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Join a Thriving Community
            </h2>
            <p className="font-sans text-lg text-slate-300 max-w-2xl mx-auto">
              Be part of something bigger. Connect with readers worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center space-y-3 p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm"
              >
                <stat.icon className={`h-10 w-10 sm:h-12 sm:w-12 mx-auto ${stat.color}`} />
                <div className="font-mono text-2xl sm:text-3xl lg:text-4xl font-bold text-white">{stat.value}</div>
                <div className="font-sans text-sm sm:text-base text-slate-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 mb-12 lg:mb-16"
          >
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold">
              Trending This Week
            </h2>
            <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover the most talked-about books in our community. From bestsellers to hidden gems,
              find your next literary adventure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredBooks.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="overflow-hidden border-border/50 hover:border-border transition-all duration-300 hover:shadow-2xl">
                  <CardHeader className="p-0 relative overflow-hidden">
                    <div className="aspect-[3/4] bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 flex items-center justify-center relative">
                      <BookOpen className="h-16 w-16 text-slate-400 group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-mono">
                        {book.genre}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    <div className="space-y-2">
                      <CardTitle className="font-serif text-xl group-hover:text-primary transition-colors">
                        {book.title}
                      </CardTitle>
                      <CardDescription className="font-sans text-muted-foreground">
                        by <span className="font-medium">{book.author}</span>
                      </CardDescription>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < Math.floor(book.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-slate-600'}`}
                            />
                          ))}
                        </div>
                        <span className="font-mono text-sm font-medium">{book.rating}</span>
                      </div>
                      <div className="font-mono text-sm text-muted-foreground">
                        {book.reviews.toLocaleString()} reviews
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12 lg:mt-16"
          >
            <Button variant="outline" size="lg" className="font-semibold" asChild>
              <Link to="/books">
                Explore Full Library
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 mb-12 lg:mb-16"
          >
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold">
              Reader Stories
            </h2>
            <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from our community of passionate book lovers around the world
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                quote: "BookHaven has completely transformed how I discover new books. The community reviews are incredibly helpful and authentic!",
                author: "Sarah Johnson",
                role: "Book Enthusiast",
                avatar: "SJ"
              },
              {
                quote: "I've found my new favorite authors through this platform. The recommendation system is spot-on and very personalized.",
                author: "Marcus Chen",
                role: "Fiction Reader",
                avatar: "MC"
              },
              {
                quote: "The discussions here are so insightful. I love being part of a community that truly appreciates great literature.",
                author: "Elena Rodriguez",
                role: "Literary Critic",
                avatar: "ER"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotate: -5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.02, rotate: 1 }}
                className="group"
              >
                <Card className="border-border/50 hover:border-border transition-all duration-300 bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-6 lg:p-8">
                    <div className="space-y-4">
                      <Quote className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />

                      <blockquote className="font-sans text-base lg:text-lg text-muted-foreground leading-relaxed italic">
                        "{testimonial.quote}"
                      </blockquote>

                      <div className="flex items-center space-x-3 pt-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center font-bold text-white text-sm">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">{testimonial.author}</div>
                          <div className="font-mono text-sm text-muted-foreground">{testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="overflow-hidden border-none bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-emerald-600/10 backdrop-blur-sm">
              <CardContent className="relative p-8 sm:p-12 lg:p-16 text-center">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPgo8L3N2Zz4=')] opacity-30"></div>

                <div className="relative z-10 space-y-6 lg:space-y-8">
                  <div className="space-y-4">
                    <CardTitle className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold">
                      Your Next Chapter
                      <span className="block text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text">
                        Starts Here
                      </span>
                    </CardTitle>

                    <CardDescription className="font-sans text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                      Join BookHaven today and become part of a vibrant community where every book tells a story,
                      every review sparks a conversation, and every reader finds their perfect match.
                    </CardDescription>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                      asChild
                    >
                      <Link to="/register">
                        <Heart className="mr-2 h-5 w-5" />
                        Start Your Journey - Free
                      </Link>
                    </Button>

                    <Button
                      variant="outline"
                      size="lg"
                      className="font-semibold px-8 py-4 text-lg border-2 hover:bg-secondary/20"
                      asChild
                    >
                      <Link to="/books">
                        Browse Books First
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>

                  <div className="pt-8 text-sm font-mono text-muted-foreground">
                    ✨ No credit card required • Join 12,000+ readers • Start in 30 seconds
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
