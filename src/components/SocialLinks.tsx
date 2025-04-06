
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const SocialLinks = () => {
  return (
    <>
      <a 
        href="https://github.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-foreground/70 hover:text-neon-blue transition-colors duration-300"
        aria-label="GitHub"
      >
        <Github size={20} />
      </a>
      <a 
        href="https://linkedin.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-foreground/70 hover:text-neon-blue transition-colors duration-300"
        aria-label="LinkedIn"
      >
        <Linkedin size={20} />
      </a>
      <a 
        href="https://twitter.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-foreground/70 hover:text-neon-blue transition-colors duration-300"
        aria-label="Twitter"
      >
        <Twitter size={20} />
      </a>
      <a 
        href="https://instagram.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-foreground/70 hover:text-neon-blue transition-colors duration-300"
        aria-label="Instagram"
      >
        <Instagram size={20} />
      </a>
    </>
  );
};

export default SocialLinks;
