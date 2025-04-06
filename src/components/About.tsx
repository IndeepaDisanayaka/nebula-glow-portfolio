
import { CodeIcon, BriefcaseIcon, GraduationCapIcon } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-dark-400">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center mx-auto">About Me</h2>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                  alt="John Doe" 
                  className="w-full h-auto rounded-lg object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-500/80 to-transparent"></div>
              </div>
              
              <div className="absolute -bottom-5 -right-5 h-24 w-24 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full opacity-30 blur-2xl animate-pulse"></div>
              <div className="absolute -top-5 -left-5 h-24 w-24 bg-neon-purple rounded-full opacity-20 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
            
            <div className="animate-fade-up">
              <h3 className="text-2xl font-bold mb-4">
                Full Stack <span className="neon-text-blue">Developer</span> & 
                <span className="neon-text-purple"> Designer</span>
              </h3>
              
              <p className="text-foreground/80 mb-6">
                I'm a passionate developer with 5+ years of experience creating beautiful, 
                functional, and user-centered digital experiences. With a background in both design 
                and development, I bring a unique perspective to every project.
              </p>
              
              <p className="text-foreground/80 mb-8">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open source, or enjoying outdoor adventures.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-neon-blue">•</span>
                  <span>React</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-neon-blue">•</span>
                  <span>Node.js</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-neon-blue">•</span>
                  <span>TypeScript</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-neon-blue">•</span>
                  <span>Figma</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-neon-blue">•</span>
                  <span>UI/UX Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-neon-blue">•</span>
                  <span>Cloud Services</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Experience timeline */}
          <div className="mt-24">
            <h3 className="text-2xl font-bold mb-8 text-center">Experience & Education</h3>
            
            <div className="relative border-l-2 border-neon-blue/30 ml-3 md:ml-0 md:mx-auto md:max-w-2xl space-y-12 pl-6">
              {/* Timeline items */}
              <TimelineItem 
                title="Senior Frontend Developer"
                company="Tech Innovations Inc."
                date="2022 - Present"
                icon={<BriefcaseIcon size={20} className="text-neon-blue" />}
              >
                Leading the frontend team in developing modern web applications using React and TypeScript.
              </TimelineItem>
              
              <TimelineItem 
                title="Full Stack Developer"
                company="Digital Solutions"
                date="2019 - 2022"
                icon={<CodeIcon size={20} className="text-neon-blue" />}
              >
                Built and maintained scalable web applications using React, Node.js, and AWS.
              </TimelineItem>
              
              <TimelineItem 
                title="Masters in Computer Science"
                company="University of Technology"
                date="2016 - 2018"
                icon={<GraduationCapIcon size={20} className="text-neon-purple" />}
              >
                Specialized in web technologies and user experience design with honors.
              </TimelineItem>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Timeline Item Component
const TimelineItem = ({ 
  title, 
  company, 
  date, 
  children, 
  icon 
}: { 
  title: string; 
  company: string; 
  date: string; 
  children: React.ReactNode; 
  icon: React.ReactNode 
}) => {
  return (
    <div className="relative animate-fade-up group">
      {/* Circle */}
      <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border-2 border-neon-blue flex items-center justify-center bg-dark-300 group-hover:bg-neon-blue/20 transition-colors duration-300">
        {icon}
      </div>
      
      {/* Content */}
      <div className="glass-card p-5 hover:shadow-[0_0_15px_rgba(0,230,255,0.15)] transition-all duration-300">
        <h4 className="text-xl font-semibold">{title}</h4>
        <div className="flex justify-between items-center mb-2">
          <p className="text-foreground/70">{company}</p>
          <span className="text-neon-blue text-sm font-mono">{date}</span>
        </div>
        <p className="text-foreground/80">
          {children}
        </p>
      </div>
    </div>
  );
};

export default About;
