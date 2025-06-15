
import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "Understanding Thread Lifecycle in Java",
      excerpt: "A comprehensive guide to Java thread states, transitions, and best practices for concurrent programming.",
      date: "December 10, 2024",
      readTime: "8 min read",
      category: "Java",
      tags: ["Multithreading", "Concurrency", "Java"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop"
    },
    {
      title: "Optimizing SQL Queries for High Performance",
      excerpt: "Learn practical techniques to improve database query performance and reduce execution time.",
      date: "December 5, 2024",
      readTime: "12 min read",
      category: "Database",
      tags: ["SQL", "Performance", "Database"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=200&fit=crop"
    },
    {
      title: "Building Scalable Banking Systems with Java",
      excerpt: "Key architectural decisions and design patterns for developing robust financial applications.",
      date: "November 28, 2024",
      readTime: "10 min read",
      category: "System Design",
      tags: ["Java", "Architecture", "Banking"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop"
    },
    {
      title: "Disk Scheduling Algorithms Explained",
      excerpt: "Comparing FCFS, SSTF, SCAN, and C-SCAN algorithms with practical implementations and performance analysis.",
      date: "November 20, 2024",
      readTime: "15 min read",
      category: "Operating Systems",
      tags: ["Algorithms", "OS", "Performance"],
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=200&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <section className="py-16 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Tech Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sharing insights on Java development, system programming, database optimization, 
              and software engineering concepts.
            </p>
          </section>

          {/* Featured Post */}
          <section className="py-8">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-12">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 mb-4">
                Featured Post
              </Badge>
              <h2 className="text-3xl font-bold mb-4">
                Understanding Thread Lifecycle in Java
              </h2>
              <p className="text-xl opacity-90 mb-6">
                A deep dive into Java concurrency, covering thread states, synchronization mechanisms, 
                and practical examples for building thread-safe applications.
              </p>
              <div className="flex items-center gap-6 text-sm opacity-80 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  8 min read
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Mehtab
                </div>
              </div>
              <div className="flex items-center gap-2 text-white">
                <span>Read Full Article</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section className="py-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-white/90 text-gray-800">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      {/* Meta Info */}
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </div>
                        <span>{post.date}</span>
                      </div>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      {/* Read More */}
                      <div className="flex items-center gap-2 text-blue-600 group-hover:gap-3 transition-all">
                        <span className="font-medium">Read More</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Newsletter CTA */}
          <section className="py-16 text-center">
            <div className="bg-white rounded-2xl p-12 border">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
              <p className="text-xl text-gray-600 mb-8">
                Get notified about new blog posts on Java development and system programming.
              </p>
              <div className="max-w-md mx-auto flex gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Blog;
