
import { useEffect, useState } from 'react';
import TestimonialCard from './TestimonialCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkScreenSize();
    
    // Add event listener
    window.addEventListener('resize', checkScreenSize);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CTO",
      company: "TechSolutions",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      rating: 5,
      testimonial: "John is an exceptional developer who consistently delivers beyond expectations. His technical expertise and creative problem-solving have been invaluable to our projects."
    },
    {
      name: "Michael Chen",
      position: "Product Manager",
      company: "Innovate Inc.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      rating: 5,
      testimonial: "Working with John was a game-changer for our product. His attention to detail and understanding of user experience transformed our platform completely."
    },
    {
      name: "Emily Rodriguez",
      position: "Design Director",
      company: "Creative Studios",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1622&q=80",
      rating: 4,
      testimonial: "John bridges the gap between design and development perfectly. He not only implemented our designs flawlessly but also suggested improvements that enhanced the overall user experience."
    },
    {
      name: "David Wilson",
      position: "Founder",
      company: "Startup Vision",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      rating: 5,
      testimonial: "From concept to completion, John was instrumental in bringing our vision to life. His technical skill combined with business acumen made him an invaluable partner for our startup."
    },
    {
      name: "Lisa Thompson",
      position: "Marketing Director",
      company: "Global Brand",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      rating: 5,
      testimonial: "The web application John developed has significantly increased our conversion rates. His understanding of both technology and user psychology resulted in an exceptional product."
    }
  ];
  
  const nextSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - (isMobile ? 1 : 3) ? 0 : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - (isMobile ? 1 : 3) : prevIndex - 1
    );
  };
  
  return (
    <section id="testimonials" className="py-24 bg-dark-500">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mx-auto">Testimonials</h2>
        <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-16">
          What clients and colleagues have to say about working with me.
        </p>
        
        <div className="relative">
          {/* Carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-all duration-500 ease-in-out" 
              style={{ 
                transform: `translateX(-${activeIndex * (100 / (isMobile ? 1 : 3))}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className={`${isMobile ? 'w-full' : 'w-1/3'} flex-shrink-0 p-3`}
                >
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button 
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-dark-300/80 p-3 rounded-full text-foreground/70 hover:text-neon-purple transition-colors duration-300"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-dark-300/80 p-3 rounded-full text-foreground/70 hover:text-neon-purple transition-colors duration-300"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {[...Array(testimonials.length - (isMobile ? 0 : 2))].map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-neon-purple w-6' : 'bg-foreground/30'
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
