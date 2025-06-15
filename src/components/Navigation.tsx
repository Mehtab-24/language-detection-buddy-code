
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            Mehtab
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${
                isActive('/') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors ${
                isActive('/about') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              About
            </Link>
            <Link 
              to="/projects" 
              className={`font-medium transition-colors ${
                isActive('/projects') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Projects
            </Link>
            <Link 
              to="/blog" 
              className={`font-medium transition-colors ${
                isActive('/blog') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium transition-colors ${
                isActive('/contact') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Contact
            </Link>
          </div>

          <Button asChild className="hidden md:inline-flex">
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
