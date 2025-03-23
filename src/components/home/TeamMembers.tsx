
import React, { useState } from 'react';
import { Github, Linkedin, ExternalLink, Instagram } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  branch: string;
  image: string;
  category: 'leadership' | 'core' | 'members';
  github?: string;
  linkedin?: string;
  instagram?: string;
  website?: string;
}

const teamMembers: TeamMember[] = [
  // Leadership
  {
    id: 1,
    name: 'Vishal Deep',
    role: 'PRESIDENT',
    branch: 'Electronics & Instrumentation',
    image: 'https://anarcnita.in/img/active_team/Vishal%20Deep.jpeg',
    category: 'leadership',
    github: '#',
    linkedin: '#',
    instagram: '#',
    website: '#',
  },
  {
    id: 2,
    name: 'Amitabh Anand',
    role: 'TECHNICAL LEAD | ROBOTICS DESIGN',
    branch: 'Mecchanical',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQHV6pK2dzcu4g/profile-displayphoto-shrink_400_400/B4DZVVJiaWHwAg-/0/1740890320473?e=1748476800&v=beta&t=k9qaOEATpmwaOu6qQZuzYEwstg1qYwYj7n5g-UhLY4A',
    category: 'leadership',
    github: '#',
    linkedin: '#',
    instagram: '#',
  },
  
  // Core Team
  {
    id: 3,
    name: 'Ganesh Rehan',
    role: 'TECHNICAL LEAD | EMBEDDED SYSTEM',
    branch: 'Computer Science',
    image: 'https://anarcnita.in/img/active_team/Ganesh%20Rehan%20Balivada.jpeg',
    category: 'core',
    github: '#',
    linkedin: '#',
    instagram: '#',
  },
  {
    id: 4,
    name: 'Divyansh Singhal',
    role: 'TECHNICAL LEAD | AI ML',
    branch: 'Mathematics',
    image: 'https://anarcnita.in/img/active_team/Divyansh%20Singhal.jfif',
    category: 'core',
    github: '#',
    linkedin: '#',
    instagram: '#',
  },
  {
    id: 5,
    name: 'Pranjal Kumar',
    role: 'Technical Lead & Robotics Design',
    branch: 'Computer Science',
    image: 'https://anarcnita.in/img/active_team/pranjal.jpg',
    category: 'core',
    github: '#',
    linkedin: '#',
    instagram: '#',
  },
  {
    id: 6,
    name: 'Leela Lakshmi',
    role: 'FINANCIAL LEAD',
    branch: 'Electrical Engineering',
    image: 'https://anarcnita.in/img/active_team/Leela%20Lakshmi%20Kundi.jpg',
    category: 'core',
    github: '#',
    linkedin: '#',
    instagram: '#',
  },
];

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="group relative transition-all duration-300 hover:-translate-y-2">
      <div className="glass-panel rounded-xl overflow-hidden h-full">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-anarc-dark-deeper via-transparent to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 w-full p-4">
            <h3 className="text-white font-semibold text-base">{member.name}</h3>
            <p className="text-anarc-blue font-medium text-xs mb-1">{member.role}</p>
            <p className="text-white/60 text-xs">{member.branch}</p>
          </div>
          
          <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {member.github && (
              <a 
                href={member.github} 
                className="w-7 h-7 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-anarc-blue hover:text-white transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
            )}
            {member.linkedin && (
              <a 
                href={member.linkedin} 
                className="w-7 h-7 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-anarc-blue hover:text-white transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            )}
            {member.instagram && (
              <a 
                href={member.instagram} 
                className="w-7 h-7 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-anarc-blue hover:text-white transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
            )}
            {member.website && (
              <a 
                href={member.website} 
                className="w-7 h-7 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-anarc-blue hover:text-white transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Personal Website"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamMembers: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const filteredMembers = teamMembers.filter(
    (member) => activeFilter === 'all' || member.category === activeFilter
  );

  return (
    <section id="team" className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-anarc-neon-purple/5 rounded-full filter blur-[100px]"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/80 mb-4">Our Team</span>
          <h2 className="text-gradient-blue mb-6">The Minds Behind ANARC</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Meet our diverse team of innovators, creators, and problem-solvers driving the robotics revolution at NIT Agartala.
          </p>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white/5 p-1 rounded-lg">
            {['all', 'leadership', 'core', 'members'].map((filter) => (
              <button
                key={filter}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-anarc-blue text-white shadow-neon-blue'
                    : 'text-white/70 hover:text-white'
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {filteredMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
