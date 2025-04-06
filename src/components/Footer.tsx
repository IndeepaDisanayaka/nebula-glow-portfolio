
import { ChevronUp } from 'lucide-react';
import SocialLinks from './SocialLinks';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-dark-500 border-t border-dark-300/50">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold font-mono neon-text-blue">{'<Dev/>'}</a>
            <p className="text-foreground/60 mt-2">Creating digital experiences that matter.</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
              <SocialLinks />
            </div>
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 text-foreground/60 hover:text-neon-blue transition-colors duration-300"
              aria-label="Scroll to top"
            >
              <span>Back to top</span>
              <ChevronUp size={18} />
            </button>
          </div>
        </div>
        
        <div className="border-t border-dark-300/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm">
            &copy; {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex flex-wrap justify-center md:justify-end gap-4 text-sm text-foreground/60">
            <a href="#" className="hover:text-neon-blue transition-colors duration-300">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-neon-blue transition-colors duration-300">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-neon-blue transition-colors duration-300">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
