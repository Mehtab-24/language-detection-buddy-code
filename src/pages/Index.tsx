
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, Eye, ExternalLink, Code, Briefcase, GraduationCap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 min-h-[80vh]">
          {/* Left side - Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <Avatar className="w-80 h-80 border-4 border-white shadow-2xl">
                <AvatarImage src="/placeholder.svg" alt="Profile" />
                <AvatarFallback className="text-6xl bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                  JD
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl">👋</span>
              </div>
            </div>
          </div>

          {/* Right side - Name, Position, Buttons */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                John Doe
              </h1>
              <p className="text-2xl lg:text-3xl text-blue-600 font-medium mb-6">
                BCA Student (2nd Year)
              </p>
              <p className="text-lg text-gray-600 max-w-md mx-auto lg:mx-0">
                Passionate about programming and technology. Currently pursuing Bachelor of Computer Applications, 
                learning modern development practices and building exciting projects.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Code className="mr-2 h-5 w-5" />
                View Portfolio
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Eye className="mr-2 h-5 w-5" />
                View Resume
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

      {/* About Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">About Me</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">My Journey</h3>
              <p className="text-gray-600 leading-relaxed">
                I'm currently a second-year BCA student with a passion for software development 
                and emerging technologies. I enjoy learning new programming languages and 
                building projects that solve real-world problems.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Python', 'HTML', 'CSS', 'JavaScript', 'DBMS', 'SQL', 'Git', 'React', 'Data Structures'].map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Academic Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Java Console Application", desc: "A console-based application demonstrating OOP concepts" },
              { title: "Database Management System", desc: "Student management system with SQL database integration" },
              { title: "Web Development Project", desc: "Responsive website built with HTML, CSS, and JavaScript" }
            ].map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-purple-500 rounded-md flex items-center justify-center">
                    <Code className="h-16 w-16 text-white" />
                  </div>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>
                    {project.desc}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2 mb-4">
                    <Badge variant="outline">Academic</Badge>
                    <Badge variant="outline">Learning</Badge>
                  </div>
                  <Button variant="ghost" className="w-full group-hover:bg-blue-50">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Education</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">Bachelor of Computer Applications (BCA)</h3>
                  <p className="text-blue-600 font-medium">Currently in 2nd Year</p>
                  <p className="text-gray-500">2023 - 2026 (Expected)</p>
                  <p className="text-gray-600 mt-2">
                    Studying core computer science subjects including programming, databases, 
                    web development, and software engineering principles.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            I'm always eager to learn and collaborate on interesting projects.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-xl"
          >
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
