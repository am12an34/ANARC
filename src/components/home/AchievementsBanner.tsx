
import React from 'react';
import { Trophy } from 'lucide-react';

const AchievementsBanner: React.FC = () => {
  return (
    <section className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-anarc-blue/20 to-anarc-neon-purple/20"></div>
      <div className="absolute inset-0 bg-anarc-dark-deeper/70"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center">
            <Trophy className="w-12 h-12 text-anarc-blue animate-pulse-slow mr-4" />
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">National Robotics Champion</h3>
              <p className="text-white/70">First place at the All India Robotics Competition 2023</p>
            </div>
          </div>
          
          <a 
            href="/achievements" 
            className="px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 text-white font-medium border border-white/10 transition-all duration-300"
          >
            View All Achievements
          </a>
        </div>
      </div>
    </section>
  );
};

export default AchievementsBanner;
