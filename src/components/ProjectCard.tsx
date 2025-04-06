
import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  delay?: number;
}

const ProjectCard = ({ 
  title, 
  description, 
  tags, 
  image,
  githubUrl,
  liveUrl,
  delay = 0
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group relative overflow-hidden rounded-lg bg-dark-300 h-full transition-all duration-300 animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image with overlay */}
      <div className="relative h-60 w-full overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110 brightness-50' : 'scale-100'
          }`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-dark-400 via-dark-400/70 to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-70'
        }`}></div>
        
        {/* Project links */}
        <div className={`absolute inset-0 flex items-center justify-center gap-4 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          {githubUrl && (
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-dark-400/80 p-3 rounded-full hover:bg-neon-blue/20 transition-all duration-300"
              aria-label="View GitHub Repository"
            >
              <Github size={20} className="text-white" />
            </a>
          )}
          
          {liveUrl && (
            <a 
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-dark-400/80 p-3 rounded-full hover:bg-neon-purple/20 transition-all duration-300"
              aria-label="View Live Project"
            >
              <ExternalLink size={20} className="text-white" />
            </a>
          )}
        </div>
      </div>
      
      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-neon-blue transition-colors duration-300">{title}</h3>
        <p className="text-foreground/70 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs font-mono px-2 py-1 rounded-md bg-dark-200 text-neon-blue"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      {/* Neon border effect on hover */}
      <div className={`absolute inset-0 border border-neon-blue/0 rounded-lg transition-all duration-500 ${
        isHovered ? 'border-neon-blue/30 shadow-[0_0_15px_rgba(0,230,255,0.15)]' : ''
      }`}></div>
    </div>
  );
};

export default ProjectCard;
