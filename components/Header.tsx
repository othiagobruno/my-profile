import React, { useState, useEffect } from 'react';
    import { Menu, X, Github } from 'lucide-react';
    import { motion } from 'framer-motion';
    
    const Header: React.FC = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [isScrolled, setIsScrolled] = useState(false);
    
      useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
      const navLinks = [
        { name: 'Overview', href: '#about' },
        { name: 'Repositories', href: '#skills' }, // Mapped "Skills" to "Repositories" theme
        { name: 'Contribution', href: '#experience' }, // Mapped "Experience" to "Contribution"
        { name: 'Contact', href: '#contact' },
      ];
    
      return (
        <header 
          className={`fixed top-0 w-full z-50 transition-all duration-200 border-b ${
            isScrolled 
              ? 'bg-gh-bg/90 backdrop-blur-md border-gh-border' 
              : 'bg-transparent border-transparent py-2'
          }`}
        >
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo Area */}
              <div className="flex items-center gap-4">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white text-gh-bg rounded-full p-0.5"
                >
                    <Github size={32} fill="currentColor" />
                </motion.div>
                <span className="font-bold text-lg text-white tracking-tight">
                  Thiago Bruno Miranda
                </span>
              </div>
              
              {/* Desktop Nav */}
              <div className="hidden md:block">
                <div className="flex items-baseline space-x-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="px-4 py-2 rounded-md text-sm font-semibold text-gh-text hover:text-white hover:bg-gh-hover transition-all duration-200"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
    
              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-gh-text hover:text-white p-2 rounded-md hover:bg-gh-hover transition-colors"
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
    
          {/* Mobile Nav */}
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-gh-bg border-b border-gh-border overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-gh-text hover:text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gh-hover transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </header>
      );
    };
    
    export default Header;