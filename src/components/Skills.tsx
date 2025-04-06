import { Code, PaintBucket, Server, Database, LineChart, Lightbulb } from 'lucide-react';
import SkillBar from './SkillBar';

const Skills = () => {
  // Frontend skills
  const frontendSkills = [
    { name: "React / React Native", percentage: 95 },
    { name: "JavaScript / TypeScript", percentage: 90 },
    { name: "HTML5 / CSS3", percentage: 92 },
    { name: "TailwindCSS / SASS", percentage: 88 },
  ];
  
  // Backend skills
  const backendSkills = [
    { name: "Node.js / Express", percentage: 85 },
    { name: "Python / Django", percentage: 75 },
    { name: "RESTful APIs", percentage: 90 },
    { name: "GraphQL", percentage: 80 },
  ];
  
  // Other skills
  const otherSkills = [
    { name: "UI/UX Design", percentage: 85 },
    { name: "Docker / Kubernetes", percentage: 70 },
    { name: "AWS / Cloud Services", percentage: 75 },
    { name: "Testing / CI/CD", percentage: 80 },
  ];
  
  return (
    <section id="skills" className="py-24 bg-dark-400">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mx-auto">My Skills</h2>
        <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-16">
          A comprehensive overview of my technical skills and areas of expertise.
        </p>
        
        {/* Skill boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          <SkillBox 
            title="Frontend Development"
            icon={<Code size={40} />}
            delay={0}
          >
            Building responsive and interactive user interfaces with modern frameworks and libraries.
          </SkillBox>
          
          <SkillBox 
            title="UI/UX Design"
            icon={<PaintBucket size={40} />}
            color="neon-purple"
            delay={100}
          >
            Creating intuitive and visually appealing designs with a focus on user experience.
          </SkillBox>
          
          <SkillBox 
            title="Backend Development"
            icon={<Server size={40} />}
            delay={200}
          >
            Developing robust server-side applications and APIs to power web applications.
          </SkillBox>
          
          <SkillBox 
            title="Database Design"
            icon={<Database size={40} />}
            color="neon-purple"
            delay={300}
          >
            Designing and implementing efficient database schemas for various applications.
          </SkillBox>
          
          <SkillBox 
            title="Data Visualization"
            icon={<LineChart size={40} />}
            delay={400}
          >
            Creating interactive and insightful data visualizations to communicate complex information.
          </SkillBox>
          
          <SkillBox 
            title="Problem Solving"
            icon={<Lightbulb size={40} />}
            color="neon-purple"
            delay={500}
          >
            Applying analytical thinking to solve complex technical challenges efficiently.
          </SkillBox>
        </div>
        
        {/* Skill bars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Frontend
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-neon-blue rounded-full"></span>
            </h3>
            
            {frontendSkills.map((skill, index) => (
              <SkillBar 
                key={index}
                name={skill.name}
                percentage={skill.percentage}
                delay={index * 100}
              />
            ))}
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Backend
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-neon-purple rounded-full"></span>
            </h3>
            
            {backendSkills.map((skill, index) => (
              <SkillBar 
                key={index}
                name={skill.name}
                percentage={skill.percentage}
                color="from-neon-purple to-neon-pink"
                delay={index * 100 + 400}
              />
            ))}
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Other Skills
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full"></span>
            </h3>
            
            {otherSkills.map((skill, index) => (
              <SkillBar 
                key={index}
                name={skill.name}
                percentage={skill.percentage}
                color="from-neon-blue via-neon-purple to-neon-pink"
                delay={index * 100 + 800}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Skill Box Component
interface SkillBoxProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  color?: string;
  delay?: number;
}

const SkillBox = ({ title, icon, children, color = "neon-blue", delay = 0 }: SkillBoxProps) => {
  return (
    <div 
      className="glass-card p-6 hover:shadow-[0_0_20px_rgba(0,230,255,0.15)] transition-all duration-300 animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`text-${color} mb-4`}>
        {icon}
      </div>
      
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-foreground/70">{children}</p>
    </div>
  );
};

export default Skills;
