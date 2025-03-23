
import React, { useEffect, useRef } from 'react';
import { Cpu, Zap, Users, Award } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, delay }) => {
  return (
    <div className={`glass-panel p-6 rounded-xl animate-fade-in ${delay}`}>
      <div className="w-12 h-12 rounded-lg bg-anarc-blue/10 flex items-center justify-center mb-4 text-anarc-blue">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  );
};

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );
    
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((element) => {
      observer.observe(element);
    });
    
    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);
  
  return (
    <section 
      id="about" 
      ref={aboutRef}
      className="relative py-20 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-anarc-blue/5 rounded-full filter blur-[100px]"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-anarc-neon-purple/5 rounded-full filter blur-[100px]"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/80 mb-4 reveal opacity-0">About Us</span>
          <h2 className="text-gradient-blue mb-6 reveal opacity-0">The ANARC Legacy</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto reveal opacity-0">
            Established with a vision to foster innovation in robotics, ANARC has been at the forefront of technological advancement at NIT Agartala.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="reveal opacity-0">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-white/70 mb-6">
              ANARC is committed to creating a collaborative environment where students can explore the fascinating world of robotics, develop cutting-edge solutions, and contribute to technological advancement.
            </p>
            <p className="text-white/70">
              We provide resources, mentorship, and opportunities for hands-on experience in designing, building, and programming robots, preparing members for future careers in technology and engineering.
            </p>
          </div>
          
          <div className="glass-panel-dark rounded-xl p-6 relative overflow-hidden reveal opacity-0">
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <ul className="space-y-4">
                {[
                  "Foster innovation through collaborative robotics projects",
                  "Provide practical, hands-on learning experiences",
                  "Represent NIT Agartala in national and global competitions",
                  "Create a supportive community for tech enthusiasts",
                  "Bridge the gap between academic learning and industry applications"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-5 h-5 rounded-full bg-anarc-blue/20 flex items-center justify-center mr-3 mt-1">
                      <span className="w-2 h-2 rounded-full bg-anarc-blue"></span>
                    </span>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-anarc-blue/10 rounded-br-3xl"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Feature 
            icon={<Cpu className="w-6 h-6" />}
            title="Innovation Hub"
            description="A space for creative minds to collaborate and bring robotic ideas to life."
            delay="animate-delay-100"
          />
          <Feature 
            icon={<Zap className="w-6 h-6" />}
            title="Tech Workshops"
            description="Regular sessions to learn about cutting-edge technologies and practices."
            delay="animate-delay-200"
          />
          <Feature 
            icon={<Users className="w-6 h-6" />}
            title="Community"
            description="A network of passionate individuals sharing knowledge and expertise."
            delay="animate-delay-300"
          />
          <Feature 
            icon={<Award className="w-6 h-6" />}
            title="Competitions"
            description="Opportunities to showcase skills in local and national robotics contests."
            delay="animate-delay-400"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
