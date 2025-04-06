
import { useState, useEffect } from 'react';
import { Menu, X, Download, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SocialLinks from './SocialLinks';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-400/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <span className="text-xl md:text-2xl font-bold font-mono neon-text-blue">{'<Dev/>'}</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-foreground/80 hover:text-neon-blue transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 bg-gradient-to-r from-neon-blue to-neon-purple text-white px-4 py-2 rounded-md hover:shadow-lg hover:shadow-neon-blue/20 transition-all duration-300"
          >
            <Download size={18} />
            Resume
          </a>
          <div className="hidden lg:flex items-center gap-4">
            <SocialLinks />
          </div>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute w-full bg-dark-300/95 backdrop-blur-md transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg py-2 text-foreground/80 hover:text-neon-blue transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-neon-blue to-neon-purple text-white px-4 py-2 rounded-md mt-4"
            onClick={() => setIsOpen(false)}
          >
            <Download size={18} />
            Resume
          </a>
          <div className="flex items-center justify-center gap-4 py-4">
            <SocialLinks />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
