import pick from '/public/assets/pick&place.jpeg'
import maze from '/public/assets/mazebot.jpeg'
import dualAxiesSolarTracker from '/public/assets/dualAxiesSolarTracker.jpeg'

import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Code, Eye, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  team: string[];
  date: string;
  demo?: string;
  source?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Pick and Place Bot',
    description: 'A Pick and Place Robot autonomously moves objects for tasks like sorting, packaging, and assembly with precision.',
    image: pick,
    category: 'Robotics',
    technologies: ['Arduino', 'Motors', 'Sensors', 'Embedded Systems'],
    team: ['Member 1', 'Member 2'],
    date: 'March 2024',
    demo: '#',
    source: '#',
  },
  {
    id: 2,
    title: 'Maze Bot',
    description: 'The Maze Bot autonomously navigates mazes using sensors, motors, and algorithms to find the most efficient path.',
    image: maze,
    category: 'Robotics',
    technologies: ['Arduino', 'Pathfinding Algorithms', 'Sensors'],
    team: ['Member 1', 'Member 2'],
    date: 'March 2024',
    demo: '#',
    source: '#',
  },
  {
    id: 3,
    title: 'Dual-axis Solar Tracker',
    description: 'This Dual-axis Solar Tracker system adjusts solar panels to track the sun, maximizing energy efficiency and minimizing waste.',
    image: dualAxiesSolarTracker,
    category: 'Energy',
    technologies: ['Solar Tracking', 'Arduino', 'Motors', 'Sensors'],
    team: ['Member 1', 'Member 2'],
    date: 'March 2024',
    demo: '#',
    source: '#',
  },
  {
    id: 4,
    title: 'Light Following Bot',
    description: 'This robot autonomously follows light sources, adjusting its movement based on detected changes in light intensity.',
    image: 'image_path_here',
    category: 'Robotics',
    technologies: ['Arduino', 'Light Sensors', 'Motors'],
    team: ['Member 1', 'Member 2'],
    date: 'March 2024',
    demo: '#',
    source: '#',
  },
  {
    id: 5,
    title: 'Self Balancing Bot',
    description: 'A self-balancing bot uses sensors & control algorithms to maintain balance, often used in education & personal transport.',
    image: 'image_path_here',
    category: 'Robotics',
    technologies: ['Arduino', 'Gyroscope', 'Control Algorithms'],
    team: ['Member 1', 'Member 2'],
    date: 'March 2024',
    demo: '#',
    source: '#',
  },
];


interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="glass-panel rounded-xl overflow-hidden group transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-anarc-dark-deeper to-transparent"></div>
        
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-anarc-blue/80 backdrop-blur-sm text-xs font-medium text-white">
            {project.category}
          </span>
        </div>
        
        <div className="absolute top-4 right-4 flex space-x-2">
          {project.demo && (
            <a 
              href={project.demo} 
              className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-anarc-dark-deeper transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live Demo"
            >
              <Eye className="w-4 h-4" />
            </a>
          )}
          {project.source && (
            <a 
              href={project.source} 
              className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-anarc-dark-deeper transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Source Code"
            >
              <Code className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center text-white/50 text-xs mb-2">
          <Calendar className="w-3.5 h-3.5 mr-1.5" />
          <span>{project.date}</span>
        </div>
        
        <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-anarc-blue transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-white/70 mb-4 text-sm">
          {project.description}
        </p>
        
        <div className="mt-auto">
          <div className="mb-3">
            <h4 className="text-xs font-medium text-white/60 mb-1.5">Team Members</h4>
            <div className="flex flex-wrap gap-1">
              {project.team.map((member, index) => (
                <span 
                  key={index}
                  className="inline-block px-2 py-1 rounded-md bg-white/5 text-xs font-medium text-white/70"
                >
                  {member}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-xs font-medium text-white/60 mb-1.5">Technologies</h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="inline-block px-2 py-0.5 rounded-md bg-anarc-blue/10 text-xs font-medium text-anarc-blue/90"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };
  
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };
  
  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-anarc-dark-deeper to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-anarc-dark-deeper to-transparent"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-anarc-blue/5 rounded-full filter blur-[100px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/80 mb-4">Projects</span>
            <h2 className="text-gradient-blue">Our Innovative Solutions</h2>
            <p className="text-white/70 mt-4 max-w-xl">
              Explore our cutting-edge robotics projects that push the boundaries of technology and innovation.
            </p>
          </div>
          
          <div className="hidden md:flex gap-2">
            <button 
              onClick={scrollLeft}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-anarc-blue hover:border-transparent transition-colors duration-200"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={scrollRight}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-anarc-blue hover:border-transparent transition-colors duration-200"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto pb-8 gap-6 scrollbar-hidden -mx-4 px-4 snap-x"
        >
          {projects.map((project) => (
            <div key={project.id} className="min-w-[300px] sm:min-w-[350px] lg:min-w-[400px] flex-shrink-0 snap-start h-full">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Link 
            to="/projects"
            className="inline-flex items-center text-anarc-blue hover:text-anarc-blue-light transition-colors duration-200"
          >
            <span className="mr-2">View All Projects</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
