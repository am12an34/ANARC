
import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Projects from '../components/home/Projects';
import Stats from '../components/home/Stats';
import Testimonials from '../components/home/Testimonials';
import AchievementsBanner from '../components/home/AchievementsBanner';
import Footer from '../components/home/Footer';

const Index: React.FC = () => {
  // Preload images for better performance
  useEffect(() => {
    const preloadImages = () => {
      const imagesToPreload = [
        // Add critical images to preload here
      ];
      
      imagesToPreload.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };
    
    preloadImages();
  }, []);

  return (
    <div className="min-h-screen bg-anarc-dark text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <AchievementsBanner />
        <Projects />
        <Stats />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
