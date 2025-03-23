
import React from 'react';
import Logo from '../ui/logo';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="relative pt-20 pb-10 overflow-hidden bg-anarc-dark-deeper">
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-anarc-blue/30 to-transparent"></div>
      <div className="absolute -top-60 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-anarc-blue/10 rounded-full filter blur-[100px] opacity-30"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <Logo className="mb-6" />
            <p className="text-white/70 mb-6">
              ANARC is the Robotics Club of NIT Agartala, fostering innovation and technical excellence in robotics and automation.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-anarc-blue hover:text-white transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-anarc-blue hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-anarc-blue hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-anarc-blue hover:text-white transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Links</h3>
            <ul className="space-y-4">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Team', href: '#team' },
                { name: 'Projects', href: '#projects' },
                { name: 'Gallery', href: '#gallery' },
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-anarc-blue transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-anarc-blue mr-3 mt-0.5" />
                <a 
                  href="mailto:anarc@nita.ac.in" 
                  className="text-white/70 hover:text-anarc-blue transition-colors duration-200"
                >
                  anarc@nita.ac.in
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-anarc-blue mr-3 mt-0.5" />
                <a 
                  href="tel:+919876543210" 
                  className="text-white/70 hover:text-anarc-blue transition-colors duration-200"
                >
                  +91 9876 543 210
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-anarc-blue mr-3 mt-0.5" />
                <span className="text-white/70">
                  NIT Agartala, Jirania, Tripura 799046, India
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Newsletter</h3>
            <p className="text-white/70 mb-4">
              Stay updated with our latest projects and events.
            </p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-anarc-blue focus:bg-white/10 transition-colors duration-200"
                required
              />
              <button 
                type="submit" 
                className="px-4 py-3 rounded-lg bg-anarc-blue hover:bg-anarc-blue-light text-white font-medium transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()}ANARC – ROBOTICS CLUB, NIT AGARTALA | DEVLOPED BY : AMAN MISHRA
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
