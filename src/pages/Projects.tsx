
import React from 'react';
import Navbar from '../components/layout/Navbar';
import ProjectsSection from '../components/home/Projects';
import Footer from '../components/home/Footer';

const Projects = () => {
  return (
    <div className="min-h-screen bg-anarc-dark text-white">
      <Navbar />
      <main className="pt-20">
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
