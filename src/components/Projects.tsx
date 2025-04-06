
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Neurotech Dashboard",
      description: "A futuristic dashboard for monitoring brain-computer interface data with real-time analytics.",
      tags: ["React", "TypeScript", "Three.js", "Node.js"],
      image: "https://images.unsplash.com/photo-1581472723648-909f4851d4ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "Quantum Finance",
      description: "Cryptocurrency portfolio tracker with AI-powered market predictions and alerts.",
      tags: ["Next.js", "TailwindCSS", "API Integration", "Recharts"],
      image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1682&q=80",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "Virtual Reality Gallery",
      description: "Interactive 3D art gallery showcasing digital works in an immersive environment.",
      tags: ["WebGL", "Three.js", "JavaScript", "GSAP"],
      image: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "AI Content Generator",
      description: "Web app that leverages GPT-4 to generate creative content for marketing campaigns.",
      tags: ["React", "Python", "OpenAI API", "Firebase"],
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1746&q=80",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "Cyberpunk Game UI",
      description: "Custom UI design system for a cyberpunk-themed RPG with animated components.",
      tags: ["Figma", "Adobe AE", "UI Design", "Animation"],
      image: "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "Neural Network Visualizer",
      description: "Interactive tool to visualize and explain neural network architectures for education.",
      tags: ["D3.js", "TypeScript", "ML/AI", "SVG Animation"],
      image: "https://images.unsplash.com/photo-1558346547-4439467bd1d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-dark-500">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mx-auto">Featured Projects</h2>
        <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-16">
          A showcase of my recent work, personal projects, and experiments with emerging technologies.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              image={project.image}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              delay={index * 100}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-neon-blue rounded-md text-neon-blue hover:bg-neon-blue/10 transition-all duration-300"
          >
            <Github size={18} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
