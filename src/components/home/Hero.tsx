
import React, { useEffect, useRef } from 'react';
import { ChevronDown, Bot } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();

      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;

      const moveX = x * 20;
      const moveY = y * 20;

      const glowElements = heroRef.current.querySelectorAll('.glow-element');
      glowElements.forEach((element) => {
        if (element instanceof HTMLElement) {
          const depth = parseFloat(element.dataset.depth || '5');
          element.style.transform = `translate(${moveX * depth}px, ${moveY * depth}px)`;
        }
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-anarc-dark-deeper">
        <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-anarc-dark-deeper"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-anarc-blue/20 rounded-full filter blur-[100px] glow-element animate-pulse-slow" data-depth="2"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-anarc-neon-purple/20 rounded-full filter blur-[100px] glow-element animate-pulse-slow" data-depth="3" style={{ animationDelay: '0.4s' }}></div>

      {/* Decorative circuit lines */}
      <div className="absolute top-20 left-10 w-20 h-20 border-l-2 border-t-2 border-anarc-blue/20 rounded-tl-xl glow-element" data-depth="4"></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 border-r-2 border-b-2 border-anarc-blue/20 rounded-br-xl glow-element" data-depth="4"></div>

      {/* Animated tech symbol */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 glow-element" data-depth="1">
        <div className="relative w-40 h-40 sm:w-52 sm:h-52 rounded-full border border-white/5 flex items-center justify-center animate-rotate-slow">
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border border-anarc-blue/20 flex items-center justify-center animate-rotate-slow" style={{ animationDirection: 'reverse' }}>
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-white/5 flex items-center justify-center">
              {/* <Bot className="w-12 h-12 sm:w-16 sm:h-16 text-anarc-blue animate-pulse-slow" /> */}
            </div>
          </div>
          <div className="absolute h-4 w-4 bg-red-500 rounded-full top-0 left-1/2 -translate-x-1/2 shadow-red-500"></div>
          <div className="absolute h-3 w-3 bg-green-400 rounded-full bottom-6 right-0 shadow-green-400"></div>
          <div className="absolute h-2 w-2 bg-yellow-500 rounded-full bottom-0 left-1/3 shadow-yellow-500"></div>

        </div>
      </div>

      {/* Hero content */}
      <div className="container mx-auto px-4 pt-20 md:pt-0 z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/80 mb-6 animate-fade-in">
            <span className="inline-block w-2 h-2 rounded-full bg-anarc-blue mr-2 animate-pulse"></span>
            NIT Agartala Robotics Club
          </div>

          <h1 className="text-gradient-blue mb-6 animate-fade-in animate-delay-100">
            Innovating the <br className="sm:hidden" />
            Future with Robotics
          </h1>

          <p className="text-lg sm:text-xl text-white/70 mb-8 max-w-xl mx-auto animate-fade-in animate-delay-200">
            ANARC is a club of tech enthusiasts pushing the boundaries of robotics, automation, and artificial intelligence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animate-delay-300">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-anarc-blue hover:bg-anarc-blue-light text-white font-medium transition-all duration-300 shadow-md hover:shadow-neon-blue"
            >
              Explore Projects
            </a>
            <a
              href="#about"
              className="px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 text-white font-medium border border-white/10 transition-all duration-300"
            >
              About Us
            </a>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-fade-in animate-delay-1000">
        <a
          href="#about"
          className="flex flex-col items-center text-white/50 hover:text-white transition-colors duration-300"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
