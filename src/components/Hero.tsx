
import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section 
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-500"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-radial from-dark-400 to-dark-500"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon-blue/5 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-neon-purple/10 via-transparent to-transparent"></div>
      
      {/* Grid lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div 
        className={`container mx-auto px-4 z-10 text-center transform transition-all duration-1000 ${
          loaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="block">Hello, I'm</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple font-mono">
            John Doe
          </span>
        </h1>
        
        <h2 className="text-xl md:text-2xl lg:text-3xl text-foreground/80 mb-8 font-light">
          <span className="typed-text"></span>
          <span className="animate-pulse">|</span>
        </h2>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/70 mb-12">
          I create stunning digital experiences that live at the intersection of 
          <span className="neon-text-blue mx-1">design</span> and 
          <span className="neon-text-purple mx-1">technology</span>
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a 
            href="#projects" 
            className="px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-md text-white font-medium hover:shadow-lg hover:shadow-neon-blue/20 transition-all duration-300 animate-fade-up"
            style={{ animationDelay: '200ms' }}
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 bg-transparent border border-neon-blue rounded-md text-neon-blue font-medium hover:bg-neon-blue/10 transition-all duration-300 animate-fade-up"
            style={{ animationDelay: '400ms' }}
          >
            Contact Me
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown size={28} className="text-neon-blue" />
      </a>
    </section>
  );
};

export default Hero;
