
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  position: string;
  company: string;
  image: string;
  rating: number;
  testimonial: string;
}

const TestimonialCard = ({
  name,
  position,
  company,
  image,
  rating,
  testimonial
}: TestimonialCardProps) => {
  return (
    <div className="glass-card p-6 h-full flex flex-col hover:shadow-[0_0_20px_rgba(184,50,251,0.15)] transition-all duration-300">
      {/* Quote mark */}
      <div className="text-6xl font-serif text-neon-purple/20 mb-4">"</div>
      
      {/* Testimonial content */}
      <p className="text-foreground/80 mb-6 flex-grow">
        {testimonial}
      </p>
      
      {/* Stars */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i}
            size={16}
            className={i < rating ? "text-neon-purple fill-neon-purple" : "text-foreground/20"}
          />
        ))}
      </div>
      
      {/* Author info */}
      <div className="flex items-center">
        <img 
          src={image} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover border-2 border-neon-purple/30 mr-4"
        />
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm text-foreground/60">{position} at {company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
