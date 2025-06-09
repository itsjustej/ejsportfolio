import React, { useState } from 'react';
import { Code, ExternalLink, Github } from 'lucide-react';

export const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');

  // MAKE TABS HOVER AND MAKE PICTURE APPEAR PRETTIER
  
  const projects = [
    {
      id: 1,
      title: "Brick Breaker",
      description: "A fully functional Brick Breaker game built with Java and JavaFX, featuring advanced collision detection, power-ups, and a sophisticated scoring system.",
      image: "BrickBreaker.png",
      techStack: ["Java", "JavaFX", "OOP"],
      category: "game",
      details: [
        "Engineered a fully functional Brick Breaker game in Java with 1000+ lines of code, applying object-oriented programming principles.",
        "Formulated and implemented game mechanics, including accurate collision detection (99% precision), power-ups, and a scoring algorithm that tracks streaks and bonus multipliers, increasing player engagement by 40%.",
        "Conceptualized a responsive UI using JavaFX, achieving 60 FPS smooth gameplay through optimized logic.",
        "Integrated file handling, enabling 100% reliable save/load functionality for game configurations."
      ],
      links: {
        github: "https://github.com/itsjustej/BrickBreakerBackend",
        demo: "https://youtu.be/tr8SMvnLqko"
      }
    },
    {
      id: 2,
      title: "Intramural Sports Stat Tracker",
      description: "A Java application designed to track and analyze statistics for university intramural sports, with data visualization for flag football and basketball.",
      image: "profile.png",
      techStack: ["React", "JavaScript", "Firebase", "Statistics"],
      category: "app",
      details: [
        "Developed an application before an allotted deadline in Java designed to track and analyze statistics for university intramural sports, projected to serve over 100 users.",
        "Incorporated advanced data visualization techniques to present statistics in an accessible and engaging manner, improving user engagement by 167%."
      ],
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      id: 3,
      title: "Visa Data Analytics Hackathon",
      description: "Won 1st place in the Visa Data Analytics Hackathon by implementing machine learning to customize a customers rewards based on their previous purchases.",
      image: "Visa.png",
      techStack: ["JavaScript", "Machine Learning", "React", "Node.Js"],
      category: "app",
      details: [
        "The Machine Learning algorithm recognized that this person likes to travel, and pays for things in 2... It deduces this person is more than likely in a relationship and gives rewards that are appealing for date spots.",
        "Applied machine learning to analyze spending data from 10,000+ mock users and recommend personalized rewards.",
        "Delivered a full-stack solution in under 24 hours, earning top honors for innovation, UX, and real-world impact."
      ],
      links: {
        github: "https://github.com/itsjustej/VisaDataScience",
        demo: "https://visarewardsplus.netlify.app/"
      }
    },
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

    // If the active tab is 'all', show all projects; 
    // otherwise, show only the projects that match the active tab's category

  return (
    <section id="projects" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Check out some of my latest projects showcasing my skills and experience.
          </p>
        </div>
        {/* Section Header */}
        
        {/* Project Filter Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                activeTab === 'all'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-slate-700 hover:bg-slate-50'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveTab('game')}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === 'game'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-slate-700 hover:bg-slate-50'
              }`}
            >
              Games
            </button>
            <button
              onClick={() => setActiveTab('app')}
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                activeTab === 'app'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-slate-700 hover:bg-slate-50'
              }`}
            >
              Applications
            </button>
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative" style={{ height: '240px' }}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.techStack.map((tech, index) => (
                        <span 
                          key={index} 
                          className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-slate-600 mb-4">{project.description}</p>
                <div className="mt-4">
                  <details className="group">
                    <summary className="flex items-center cursor-pointer text-indigo-600 font-medium">
                      <span>View Details</span>
                      <svg 
                        className="ml-2 h-5 w-5 transform transition-transform group-open:rotate-180" 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="mt-3 text-slate-600">
                      <ul className="list-disc list-inside space-y-2">
                        {project.details.map((detail, index) => (
                          <li key={index}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </details>
                </div>
                <div className="mt-6 flex justify-between">
                  <a 
                    href={project.links.github} 
                    className="inline-flex items-center text-slate-700 hover:text-indigo-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} className="mr-2" />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.links.demo} 
                    className="inline-flex items-center text-slate-700 hover:text-indigo-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* More Projects */}
        <div className="text-center mt-12">
          <a 
            href="https://github.com/itsjustej?tab=repositories" 
            className="inline-flex items-center bg-transparent border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Code size={20} className="mr-2" />
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;