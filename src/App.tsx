import React, { useState } from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

function App() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("vismaychaudhari7@gmail.com").then(() => {
      setCopied(true);
      alert('Mail copied to clipboard.')
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL",
      github: "https://github.com/johndoe/ecommerce",
      tech: ["React", "Node.js", "PostgreSQL", "Redux"]
    },
    {
      title: "Task Management App",
      description: "Real-time task management application with team collaboration features",
      github: "https://github.com/johndoe/task-manager",
      tech: ["React", "Firebase", "Tailwind CSS", "TypeScript"]
    },
    {
      title: "AI Image Generator",
      description: "Web application that generates images using AI models",
      github: "https://github.com/johndoe/ai-image-gen",
      tech: ["Python", "React", "TensorFlow", "AWS"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Photo */}
      <section className="min-h-screen bg-gradient-to-br from-blue-900 to-gray-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
            <div className="lg:w-1/3">
              <img
                src="/user-components/profile_photo.png"
                alt="Profile"
                className="w-64 h-64 rounded-2xl object-cover shadow-2xl"
              />
            </div>
            <div className="lg:w-2/3 text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">Vismay Chaudhari</h1>
              <p className="text-xl md:text-2xl text-blue-200 mb-6">Software Engineer</p>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl">
              Hey there! I’m a Software Development Engineer who loves turning complex problems into elegant, scalable solutions. Whether I’m building full-stack apps with React and Python, diving into the world of cloud computing with AWS, or experimenting with machine learning, I’m always excited to learn something new. I thrive on creating systems that are not just efficient, but also enjoyable to work on. Right now, I’m on the lookout for SDE roles where I can collaborate with awesome teams, tackle interesting challenges, and continue growing as a software engineer. Let’s build something amazing together!
              </p>
              <div className="flex justify-center lg:justify-start space-x-6 mb-8">
                <a href="https://github.com/veeoid" className="text-blue-200 hover:text-white transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/vismay-chaudhari/" className="text-blue-200 hover:text-white transition-colors">
                  <Linkedin size={24} />
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="text-blue-200 hover:text-white transition-colors"
                  aria-label="Copy email to clipboard"
                >
                  <Mail size={24} />
                </button>
                <a href="/user-components/resume.pdf" className="text-blue-200 hover:text-white transition-colors">
                  <FileText size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <Github className="text-gray-600 group-hover:text-blue-600 transition-colors" size={20} />
                  </div>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">© 2024 John Developer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;