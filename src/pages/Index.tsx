
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Update the title and meta description for SEO
    document.title = "John Doe | Full Stack Developer & Designer";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Professional portfolio of John Doe, a Full Stack Developer & Designer specializing in creating modern digital experiences.");
    }
    
    // Implement typed text effect on hero section
    const typedTextElement = document.querySelector('.typed-text');
    if (typedTextElement) {
      const texts = [
        "Full Stack Developer",
        "UI/UX Designer",
        "Problem Solver",
        "Tech Enthusiast"
      ];
      let textIndex = 0;
      let charIndex = 0;
      let isDeleting = false;
      let typingSpeed = 100;
      
      const type = () => {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
          typedTextElement.textContent = currentText.substring(0, charIndex - 1);
          charIndex--;
          typingSpeed = 50; // Faster when deleting
        } else {
          typedTextElement.textContent = currentText.substring(0, charIndex + 1);
          charIndex++;
          typingSpeed = 100; // Normal speed when typing
        }
        
        if (!isDeleting && charIndex === currentText.length) {
          // Pause at the end of typing
          isDeleting = true;
          typingSpeed = 1500; // Wait before deleting
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length; // Move to next text
          typingSpeed = 500; // Pause before typing new text
        }
        
        setTimeout(type, typingSpeed);
      };
      
      setTimeout(type, 1000); // Start after 1 second
    }
  }, []);
  
  return (
    <div className="min-h-screen bg-dark-400 text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
