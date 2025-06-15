
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, Code, ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 min-h-[80vh] pt-16">
          {/* Left side - Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <Avatar className="w-80 h-80 border-4 border-white shadow-2xl">
                <AvatarImage src="/placeholder.svg" alt="Profile" />
                <AvatarFallback className="text-6xl bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                  M
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl">👋</span>
              </div>
            </div>
          </div>

          {/* Right side - Introduction */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Mehtab
              </h1>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
                <Badge variant="secondary" className="px-3 py-1 text-lg">Java Developer</Badge>
                <Badge variant="secondary" className="px-3 py-1 text-lg">BCA Final Year</Badge>
                <Badge variant="secondary" className="px-3 py-1 text-lg">Tech Enthusiast</Badge>
              </div>
              <p className="text-lg text-gray-600 max-w-md mx-auto lg:mx-0 leading-relaxed">
                Passionate <strong>Final Year BCA Student</strong> specializing in Java development, 
                database systems, and full-stack web technologies. Ready to contribute to 
                innovative software solutions.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                asChild
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link to="/projects">
                  <Code className="mr-2 h-5 w-5" />
                  View Projects
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full hover:bg-blue-100">
                <Github className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full hover:bg-blue-100">
                <Linkedin className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full hover:bg-blue-100">
                <Mail className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Skills Overview */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Core Expertise</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Java Development</h3>
              <p className="text-gray-600 text-sm">Core Java, Swing, Multithreading</p>
            </div>
            
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Database Systems</h3>
              <p className="text-gray-600 text-sm">SQL, MySQL, Database Design</p>
            </div>
            
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Web Development</h3>
              <p className="text-gray-600 text-sm">HTML, CSS, JavaScript, React</p>
            </div>
            
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">System Programming</h3>
              <p className="text-gray-600 text-sm">OS Concepts, Algorithms</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Collaborate?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            I'm actively seeking opportunities to contribute to meaningful projects 
            and grow as a software developer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg" 
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-xl"
            >
              <Link to="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Link>
            </Button>
            <Button 
              asChild
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-6 text-lg font-semibold rounded-xl"
            >
              <Link to="/about">
                <ArrowRight className="mr-2 h-5 w-5" />
                Learn More About Me
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
