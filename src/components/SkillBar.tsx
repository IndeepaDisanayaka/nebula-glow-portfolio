
import { useEffect, useState } from 'react';

interface SkillBarProps {
  name: string;
  percentage: number;
  color?: string;
  delay?: number;
}

const SkillBar = ({ 
  name, 
  percentage, 
  color = 'from-neon-blue to-neon-purple', 
  delay = 0 
}: SkillBarProps) => {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(percentage);
    }, 100 + delay);
    
    return () => clearTimeout(timer);
  }, [percentage, delay]);
  
  return (
    <div className="mb-6 animate-fade-up" style={{ animationDelay: `${delay}ms` }}>
      <div className="flex justify-between items-center mb-1">
        <h4 className="text-foreground/90 font-medium">{name}</h4>
        <span className="text-sm font-mono text-neon-blue">{percentage}%</span>
      </div>
      
      <div className="h-2 w-full bg-dark-300 rounded-full overflow-hidden">
        <div 
          className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
