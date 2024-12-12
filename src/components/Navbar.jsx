import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' }
  ];

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-lg z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative">
          {/* Logo with hover animation */}
          <Link 
            to="/" 
            className="flex-shrink-0 text-2xl font-bold text-gray-800 
            hover:text-blue-600 transition-all duration-500 
            tracking-wider group"
          >
            <span className="relative">
              Your Name
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 
              transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-600 hover:text-blue-600 
                px-3 py-2 rounded-md text-sm font-medium 
                transition-all duration-300 ease-in-out 
                hover:bg-blue-50 hover:scale-105
                relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-blue-600 
                transition-all duration-300 group-hover:w-1/2 group-hover:left-0"></span>
                <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-blue-600 
                transition-all duration-300 group-hover:w-1/2 group-hover:right-0"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              type="button"
              className="bg-gray-100 inline-flex items-center justify-center 
              p-2 rounded-md text-gray-400 hover:text-blue-600 
              hover:bg-gray-200 focus:outline-none focus:ring-2 
              focus:ring-offset-2 focus:ring-blue-500
              transition-all duration-300 transform hover:rotate-90"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isOpen && (
            <div className="absolute top-full left-0 w-full md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 
              bg-white shadow-lg rounded-b-lg 
              animate-dropdown-open">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={toggleMobileMenu}
                    className="text-gray-600 hover:bg-blue-50 hover:text-blue-600 
                    block px-3 py-2 rounded-md text-base font-medium
                    transition-all duration-300 ease-in-out
                    transform hover:translate-x-2"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;