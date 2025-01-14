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
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Photo */}
      <section className="min-h-screen bg-gradient-to-br from-blue-900 to-gray-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
            <div className="lg:w-1/3">
              <img
                src="public/user-components/profile_photo.png"
                alt="Profile"
                className="w-50 h-50 rounded-2xl object-cover shadow-2xl"
              />
            </div>
            <div className="lg:w-2/3 text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">Vismay Chaudhari</h1>
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
                <a href="public/user-components/resume.pdf" className="text-blue-200 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer">
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
          <p className="text-gray-400">© 2024 Vismay Chaudhari. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;