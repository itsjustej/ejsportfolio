import React from 'react';
import * as Lucide from 'lucide-react';

export const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 lg:min-h-screen lg:flex lg:items-center"
    >
        {/* Can be scrolled to via #home
        Is padded and centered vertically
        Adapts its spacing */}

      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-teal-500/10 z-0"></div>
      {/* Sets background from light indigo to light teal with 10% opacity from left to right */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centers content
        horizontal padding according to screensize
        places content on top of background  */}
        <div className="lg:flex lg:items-center lg:justify-between">
          {/* Pushes content to seperate sides  
          Centers Vertically
          */}
          <div className="lg:w-1/2">
          {/* Left Child */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight mb-4 animate-fadeIn">
              <span className="text-indigo-600">Hello, I'm</span>
              <br />
              Enrique Lockhart
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 animate-fadeIn animation-delay-300">
              Rising third-year Computer Science student at North Carolina A&T State University with programming and leadership experience, 
              seeking internships to apply technical skills and gain real-world exposure.
          </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn animation-delay-500">
              {/* Stacks Children Vertically and Horizontally on Mobile */}
              {/* Contact Button */}
              <a 
                href="#contact" 
                className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-indigo-700 transition-colors duration-300"
              >
                Get In Touch
              </a>
              {/* Projects Button */}
              <a 
                href="#projects" 
                className="inline-block bg-transparent border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg font-semibold text-center hover:bg-indigo-50 transition-colors duration-300"
              >
                View My Projects
              </a>
            </div>
            <div className="flex mt-8 space-x-4 animate-fadeIn animation-delay-700">
              <a 
                href="https://github.com/itsjustej?tab=repositories" 
                target="_blank"
                className="text-slate-600 hover:text-indigo-600 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Lucide.Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/enrique-lockhart/" 
                target="_blank" 
                className="text-slate-600 hover:text-indigo-600 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Lucide.Linkedin size={24} />
              </a>
              <a 
                href="mailto:ellockhart@aggies.ncat.edu" 
                className="text-slate-600 hover:text-indigo-600 transition-colors duration-300"
                aria-label="Email"
              >
                <Lucide.Mail size={24} />
              </a>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 w-full lg:w-1/2">
          {/* Only shows on computert screens */}
            <div className="relative w-full h-96 mt-8 lg:mt-0 animate-fadeIn animation-delay-700">
              <div className="absolute inset-0 bg-indigo-600 rounded-lg transform rotate-3 opacity-10"></div>
              {/* Indigo background rotated 3° with 10% opacity */}
              <div className="absolute inset-0 bg-teal-500 rounded-lg transform -rotate-3 opacity-10"></div>
              {/* Teal background rotated -3° so straight*/}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Fills the entire right side */}
                <div className="w-72 h-72 bg-gradient-to-br from-indigo-600 to-teal-500 rounded-full opacity-80 blur-xl"></div>
                {/* A blurry glowing circle behind the card */}
              </div>
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="bg-white rounded-lg shadow-xl p-8 w-80">
                  <div className="w-24 h-24 rounded-full bg-indigo-100 mx-auto mb-4 overflow-hidden group">
                  <img
                  src="/profile.png"
                  alt="Enrique Lockhart"
                  className="w-full h-full object-cover rounded-full transform transition duration-300 ease-in-out group-hover:scale-110"
                  />
                </div>
                  <div className="text-center">
                    <h3 className="font-bold text-lg text-slate-800">Enrique Lockhart</h3>
                    <p className="text-slate-600 mb-2">Rising 3rd Year Computer Science Student</p>
                    <div className="text-sm text-slate-500 space-y-1">
                      <p>North Carolina A&T State University</p>
                      <p>Greensboro, NC</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce">
          <a href="#skills" aria-label="Scroll down">
            <Lucide.ChevronDown size={32} className="text-indigo-600" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;