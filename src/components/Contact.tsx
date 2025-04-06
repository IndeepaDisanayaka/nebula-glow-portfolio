
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import SocialLinks from './SocialLinks';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-24 bg-dark-400">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mx-auto">Get In Touch</h2>
        <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-16">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="animate-fade-up order-2 lg:order-1">
            <div className="glass-card p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-foreground/80 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark-200 border border-dark-100 rounded-md px-4 py-3 text-foreground focus:border-neon-blue focus:outline-none focus:ring-1 focus:ring-neon-blue/50 transition-colors duration-300"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-foreground/80 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark-200 border border-dark-100 rounded-md px-4 py-3 text-foreground focus:border-neon-blue focus:outline-none focus:ring-1 focus:ring-neon-blue/50 transition-colors duration-300"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-foreground/80 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-200 border border-dark-100 rounded-md px-4 py-3 text-foreground focus:border-neon-blue focus:outline-none focus:ring-1 focus:ring-neon-blue/50 transition-colors duration-300"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-foreground/80 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-dark-200 border border-dark-100 rounded-md px-4 py-3 text-foreground focus:border-neon-blue focus:outline-none focus:ring-1 focus:ring-neon-blue/50 transition-colors duration-300 resize-none"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-md flex items-center justify-center gap-2 font-medium transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-muted cursor-not-allowed'
                      : 'bg-gradient-to-r from-neon-blue to-neon-purple hover:shadow-lg hover:shadow-neon-blue/20'
                  }`}
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
                
                {submitStatus === 'success' && (
                  <div className="mt-4 p-3 bg-green-500/20 border border-green-500/30 rounded-md text-green-400">
                    Your message has been sent successfully!
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-md text-red-400">
                    There was an error sending your message. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
          
          {/* Contact info */}
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start space-x-4">
                <div className="bg-dark-300 p-3 rounded-lg">
                  <Mail size={24} className="text-neon-blue" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Email</h4>
                  <p className="text-foreground/70">hello@johndoe.com</p>
                  <a 
                    href="mailto:hello@johndoe.com" 
                    className="text-neon-blue hover:underline"
                  >
                    Send an email
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-dark-300 p-3 rounded-lg">
                  <Phone size={24} className="text-neon-purple" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Phone</h4>
                  <p className="text-foreground/70">+1 (123) 456-7890</p>
                  <a 
                    href="tel:+11234567890" 
                    className="text-neon-purple hover:underline"
                  >
                    Give me a call
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-dark-300 p-3 rounded-lg">
                  <MapPin size={24} className="text-neon-blue" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Location</h4>
                  <p className="text-foreground/70">San Francisco, California</p>
                  <p className="text-foreground/60">Available for remote work worldwide</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-6">
                <SocialLinks />
              </div>
              <p className="mt-6 text-foreground/60">
                Feel free to connect with me on social media for updates on my latest projects and tech insights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
