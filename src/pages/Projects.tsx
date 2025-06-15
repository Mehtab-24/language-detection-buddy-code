
import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink, Database, Code, Smartphone, Globe } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Banking Management System",
      description: "A comprehensive banking application built with Java Swing and SQL Workbench. Features include account management, transaction processing, loan management, and detailed reporting systems.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      tech: ["Java Swing", "SQL", "MySQL", "JDBC"],
      category: "Desktop Application",
      icon: <Database className="h-6 w-6" />,
      github: "#",
      demo: "#",
      features: ["Account Management", "Transaction Processing", "Loan System", "Reports"]
    },
    {
      title: "Thread Synchronization Algorithms",
      description: "Implementation of various thread synchronization techniques in Java including producer-consumer, readers-writers, and dining philosophers problems with performance analysis.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop",
      tech: ["Java", "Multithreading", "Concurrency", "Algorithm Design"],
      category: "System Programming",
      icon: <Code className="h-6 w-6" />,
      github: "#",
      demo: "#",
      features: ["Producer-Consumer", "Readers-Writers", "Dining Philosophers", "Performance Metrics"]
    },
    {
      title: "Disk Scheduling Simulator",
      description: "Java-based simulation of various disk scheduling algorithms (FCFS, SSTF, SCAN, C-SCAN) with graphical visualization and performance comparison metrics.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
      tech: ["Java", "Swing", "Algorithm Visualization", "Data Structures"],
      category: "Operating Systems",
      icon: <Code className="h-6 w-6" />,
      github: "#",
      demo: "#",
      features: ["FCFS Algorithm", "SSTF Algorithm", "SCAN & C-SCAN", "Performance Analysis"]
    },
    {
      title: "E-Commerce Web Platform",
      description: "Modern responsive e-commerce website built with HTML, CSS, JavaScript, and backend integration. Features product catalog, shopping cart, and user authentication.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=300&fit=crop",
      tech: ["HTML5", "CSS3", "JavaScript", "Node.js", "MySQL"],
      category: "Web Development",
      icon: <Globe className="h-6 w-6" />,
      github: "#",
      demo: "#",
      features: ["Product Catalog", "Shopping Cart", "User Auth", "Payment Integration"]
    },
    {
      title: "Student Information System",
      description: "Complete student management system with course enrollment, grade tracking, and administrative features. Built using Java and integrated with SQL database.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      tech: ["Java", "SQL", "JavaFX", "Database Design"],
      category: "Academic Project",
      icon: <Database className="h-6 w-6" />,
      github: "#",
      demo: "#",
      features: ["Student Records", "Course Management", "Grade Tracking", "Reports"]
    },
    {
      title: "Mobile Task Manager",
      description: "Android application for task management with local database storage, notifications, and intuitive user interface design. Built following modern Android development practices.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&h=300&fit=crop",
      tech: ["Android", "Java", "SQLite", "Material Design"],
      category: "Mobile Development",
      icon: <Smartphone className="h-6 w-6" />,
      github: "#",
      demo: "#",
      features: ["Task Creation", "Notifications", "Local Storage", "Material UI"]
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
              Featured Projects
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of my technical skills through practical applications, 
              ranging from system-level programming to full-stack web development.
            </p>
          </section>

          {/* Projects Grid */}
          <section className="py-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-white/90 text-gray-800">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      {project.icon}
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      {/* Tech Stack */}
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Tech Stack:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      {/* Key Features */}
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {project.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex gap-2 pt-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Button>
                        <Button size="sm" className="flex-1">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* GitHub CTA */}
          <section className="py-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">Explore More on GitHub</h2>
              <p className="text-xl mb-8 opacity-90">
                Check out my complete repository of projects, contributions, and code samples.
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                <Github className="mr-2 h-5 w-5" />
                View GitHub Profile
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Projects;
