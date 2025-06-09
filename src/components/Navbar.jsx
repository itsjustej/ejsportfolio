import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // creates is open and is scrolled variables and initally sets them to false

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // When we scroll check if we're past 10 pixels
  // If we're past 10 run the handScroll method
  // handle scrolled just sets the boolean

  const toggleMenu = () => setIsOpen(!isOpen); // changes isOpen state 

  const navLinks = [ // an array of links with name and hrefs
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-30 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
        // changes the nav bar depending on the state of isScrolled
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/*
        container - Sets a max-width for content and centers it by default. it grows with screen size
        mx auto -  Applies margin-left: auto and margin-right: auto.
        px's - changes padding based on screen size
        */}
        <div className="flex justify-between items-center">
        {/*flex - put children horizontally
        justify between - Pushes content to opposite ends of the flex container:
        items center - Vertically aligns items in the center of the container
        */}
          <a href="#home" className="text-xl font-bold text-slate-800">
            Enrique Lockhart
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {/*Hides this entire <div> on all screen sizes by default
            becomes a flex container on medium screen*/}
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-indigo-600 transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            {/*Hides this contianer unless smaller than medium*/}
            <button
              onClick={toggleMenu} // created the menu (already made method) when button is clicked
              className="text-slate-800 focus:outline-none" // sets icon to dark grey
              aria-label="Toggle menu" 
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />} {/*Changes which icon to display based on menu state*/}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Links */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
          <div className="flex flex-col px-4 py-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="py-3 text-slate-600 hover:text-indigo-600 border-b border-slate-100"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
