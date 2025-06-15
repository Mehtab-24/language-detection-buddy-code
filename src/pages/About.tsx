
import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { GraduationCap, Code, Database, Smartphone } from "lucide-react";

const About = () => {
  const skills = [
    { category: "Core Programming", items: ["Java", "Python", "C++", "Data Structures", "Algorithms"] },
    { category: "Database", items: ["SQL", "MySQL", "Database Design", "Query Optimization"] },
    { category: "Web Development", items: ["HTML", "CSS", "JavaScript", "React", "Node.js"] },
    { category: "System Concepts", items: ["Thread Synchronization", "Disk Scheduling", "Operating Systems"] },
    { category: "Development Tools", items: ["Git", "GitHub", "Eclipse", "VS Code", "SQL Workbench"] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <section className="py-16">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 flex justify-center">
                <Avatar className="w-64 h-64 border-4 border-white shadow-2xl">
                  <AvatarImage src="/placeholder.svg" alt="Profile" />
                  <AvatarFallback className="text-5xl bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                    M
                  </AvatarFallback>
                </Avatar>
              </div>
              
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  About Me
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  I'm a passionate <strong>Final Year BCA Student</strong> with a deep interest in 
                  software development and system-level programming. My journey in computer science 
                  has been driven by curiosity and a desire to solve real-world problems through 
                  innovative technology solutions.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  With expertise in <strong>Java development</strong>, <strong>database management</strong>, 
                  and <strong>web technologies</strong>, I'm preparing to enter the software industry 
                  as a skilled developer ready to contribute to meaningful projects.
                </p>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="py-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Education & Goals</h2>
            <div className="max-w-4xl mx-auto">
              <Card className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      Bachelor of Computer Applications (BCA)
                    </h3>
                    <p className="text-blue-600 font-medium text-lg mb-2">Final Year Student</p>
                    <p className="text-gray-500 mb-4">2023 - 2026 (Expected)</p>
                    <p className="text-gray-600 leading-relaxed">
                      Focused on core computer science fundamentals including programming paradigms, 
                      database systems, software engineering principles, and system design. 
                      Specialized coursework in Java programming, SQL database management, 
                      and modern web development technologies.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Skills Section */}
          <section className="py-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Technical Skills</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skillGroup, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg flex items-center gap-2">
                      {index === 0 && <Code className="h-5 w-5 text-blue-600" />}
                      {index === 1 && <Database className="h-5 w-5 text-green-600" />}
                      {index === 2 && <Smartphone className="h-5 w-5 text-purple-600" />}
                      {index >= 3 && <Code className="h-5 w-5 text-orange-600" />}
                      {skillGroup.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="px-2 py-1">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Career Goals */}
          <section className="py-16 bg-white rounded-2xl">
            <div className="container mx-auto px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Career Aspirations</h2>
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  My goal is to become a <strong>skilled software developer</strong> specializing in 
                  <strong>backend systems</strong> and <strong>full-stack development</strong>. 
                  I'm particularly interested in working with enterprise-level applications, 
                  database optimization, and scalable system architecture.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  I'm actively seeking opportunities to contribute to innovative projects where 
                  I can apply my Java expertise, system-level knowledge, and problem-solving 
                  skills to create impactful software solutions.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
