import React, { useState } from 'react';
import { Github, Linkedin, Mail, FileText, Code2, Database, Layout, Server, Menu, X } from 'lucide-react';
import emailjs from 'emailjs-com';

function App() {
  const [copied, setCopied] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("vismaychaudhari7@gmail.com").then(() => {
      setCopied(true);
      alert('Mail copied to clipboard.')
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

    const scrollToSection = (id: string) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMenuOpen(false);
    };

  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS that showcases my professional background.",
      github: "https://github.com/veeoid/Portfolio",
      tech: ["React", "TypeScript", "Vite", "Trailwind CSS"]
    },
    {
      title: "Valorant AI Chatbot",
      description: "An AWS Bedrock LLM-powered chat app for interactive Q&A, providing insightful answers from a curated knowledge base.",
      github: "https://github.com/Nidhzzz/vct_hackathon",
      tech: ["React", "Firebase", "Tailwind CSS", "TypeScript"]
    },
    {
      title: "Memoir: Blog Platform",
      description: "Memoir is a blog platform enabling users to create, share, and discover content with features like user authentication, content management, image optimization, and seamless browsing.",
      github: "https://github.com/veeoid/memoir",
      tech: ["React", "Django", "PostgreSQL", "AWS EC2", "AWS RDS", "AWS S3", "AWS Lambda", "Vite"]
    },
    {
      title: "Serverless Function Platform",
      description: "This project is a serverless function platform designed to execute tasks or functions dynamically within a Kubernetes environment. The platform allows users to deploy, execute, and monitor functions on-demand using Kubernetes Jobs. ",
      github: "https://github.com/ndcahuang/csci-759-csci-652-final-project",
      tech: ["Python", "Django", "Kubernetes", "Docker", "Minikube", "Kubernetes Python Client", "SQLite", "HTTP REST APIs"]
    },
    {
      title: "Virtual Assistant with Sign Language using Deep Learning and TensorFlow",
      description: "This application which enables deaf-mutes to communicate with Virtual Voice Assistants using OpenCV and Tensoreflow. ",
      github: "https://github.com/veeoid/Sign_Language_Recognition_for_Digitial_Assistants",
      tech: ["Python", "OpenCV", "Tensorflow", "Pyttsx3", "speech_recognition"]
    },
    {
      title: "Yelp Review Application",
      description: "This project is a Yelp-like application that provides a user-friendly interface for exploring businesses and their reviews. It's built using Python with tkinter for the GUI and utilizes a Cassandra database to store and retrieve data.",
      github: "https://github.com/veeoid/Yelp_Review_Application",
      tech: ["Python", "tkinter", "Cassandra", "CQL (Cassandra Query Language)", "PIL (Python Imaging Library)" ]
    },
    {
      title: "Android based Fitness Application",
      description: "Android fitness app with features including workout tracking, guided tutorial programs, customizable schedules, and local data storage using SQLite for efficient user data management.",
      github: "https://github.com/veeoid/Fitness-App",
      tech: ["Java", "XML", "SQLite", "Android Studio"]
    },
    {
      title: "Instagram Trend Analysis",
      description: "This project focuses on analyzing a large-scale Instagram dataset to uncover patterns in user behavior, particularly related to location-based posting. It demonstrates advanced data processing and mining techniques using both relational (PostgreSQL) and NoSQL (MongoDB) databases to handle millions of Instagram posts, user profiles, and location data.",
      github: "https://github.com/veeoid/Instagram_Trend_Analysis",
      tech: ["PostgreSQL", "MongoDB", "Python", "SQL", "PyMongo", "psycopg2", "NoSQL"]
    }
  ]
  
  const publications = [
    {
      title: "Implementation of Virtual Assistant with Sign Language using Deep Learning and TensorFlow",
      published_at: "Second International Conference on Inventive Research in Computing Applications (IEEE)",
      year: "2020",
      description: "The paper discusses the development of a system that utilizes deep learning and sign language recognition to enable deaf-mutes to interact with voice-based virtual assistants by translating gestures into audio inputs and converting audio outputs into text.",
      link: "https://ieeexplore.ieee.org/abstract/document/9183179"
    },
    {
      title: "Hand Gestures Recognition using Deep Learning",
      published_at: "International Research Journal of Engineering and Technology (IRJET)",
      year: "2020",
      description: "The paper proposes various ideas for creating an interface that enables voice-controlled devices to accept hand gesture inputs and generate text outputs using deep learning modules.",
      link: "https://www.irjet.net/archives/V7/i3/IRJET-V7I31032.pdf"
    }
  ]
  ;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold text-indigo-600">VC</span>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-indigo-600">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-600 hover:text-indigo-600">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-indigo-600">Projects</button>
              <button onClick={() => scrollToSection('publications')} className="text-gray-600 hover:text-indigo-600">Publications</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-indigo-600">Contact</button>
              <a href="https://github.com/veeoid" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600">GitHub</a>
              <a href="https://www.linkedin.com/in/vismay-chaudhari/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600">LinkedIn</a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-indigo-600">About</button>
                <button onClick={() => scrollToSection('skills')} className="text-gray-600 hover:text-indigo-600">Skills</button>
                <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-indigo-600">Projects</button>
                <button onClick={() => scrollToSection('publications')} className="text-gray-600 hover:text-indigo-600">Publications</button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-indigo-600">Contact</button>
                <a href="https://github.com/veeoid" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600">GitHub</a>
                <a href="https://www.linkedin.com/in/vismay-chaudhari/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600">LinkedIn</a>
              </div>
            </div>
          )}
        </div>
      </nav>
      {/* Hero Section with Photo */}
      <section className="min-h-screen bg-gradient-to-br from-blue-900 to-gray-900 text-white py-20" id = "about">
        <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center space-y-6">
            <div >
              <img
                src="/user-components/profile_photo.png"
                alt="Profile"
                className="w-56 h-56 rounded-full object-cover shadow-2xl"
              />
            </div>
            
              <h1 className="text-5xl font-bold">Vismay Chaudhari</h1>
              <p className="text-xl md:text-2xl text-blue-200 mb-6">Software Engineer</p>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl">
              Hey there! I’m a Software Development Engineer who loves turning complex problems into elegant, scalable solutions. Whether I’m building full-stack apps with React and Python, diving into the world of cloud computing with AWS, or experimenting with machine learning, I’m always excited to learn something new. I thrive on creating systems that are not just efficient, but also enjoyable to work on. Right now, I’m on the lookout for SDE roles where I can collaborate with awesome teams, tackle interesting challenges, and continue growing as a software engineer. Let’s build something amazing together!
              </p>
              <div className="flex justify-center lg:justify-start space-x-6 mb-8">
                <a href="https://github.com/veeoid" className="text-blue-200 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/vismay-chaudhari/" className="text-blue-200 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer">
                  <Linkedin size={24} />
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="text-blue-200 hover:text-white transition-colors"
                  aria-label="Copy email to clipboard"
                >
                  <Mail size={24} />
                </button>
                <a href="/user-components/resume.pdf" className="text-blue-200 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer">
                  <FileText size={24} />
                </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20" id = "projects">
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
      {/* Publications Section (New) */}
      <section className="py-20 bg-white" id="publications">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Publications</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {publications.map((pub, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Research Paper Title {pub.title}</h3>
                <p className="text-gray-600 mb-4">
                  Published in {pub.published_at} ({pub.year})
                </p>
                <p className="text-gray-700 mb-4">
                  {pub.description}
                </p>
                <a
                  href={pub.link}
                  target="_blank"
                rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-700 font-medium inline-flex items-center"
                >
                  Read More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section className="py-20 bg-gray-50" id="skills">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <Code2 className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Frontend</h3>
              <p className="text-gray-600">React, TypeScript, Tailwind CSS, Next.js</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <Server className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Backend</h3>
              <p className="text-gray-600">Node.js, Express, Python, Django</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <Database className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Database</h3>
              <p className="text-gray-600">PostgreSQL, MongoDB, Redis</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <Layout className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">DevOps</h3>
              <p className="text-gray-600">Docker, AWS, CI/CD, Kubernetes</p>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-20 bg-gray-50" id="contact">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="max-w-lg mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">© 2024 Vismay Chaudhari. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;