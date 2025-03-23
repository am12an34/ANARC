
import React from 'react';
import { Award, Users, Rocket, Code } from 'lucide-react';

interface StatItem {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const Stats: React.FC = () => {
  const stats: StatItem[] = [
    {
      icon: <Award className="w-8 h-8 text-anarc-neon-purple" />,
      value: "15+",
      label: "Awards Won"
    },
    {
      icon: <Rocket className="w-8 h-8 text-anarc-neon-cyan" />,
      value: "30+",
      label: "Projects Completed"
    },
    {
      icon: <Users className="w-8 h-8 text-anarc-neon-green" />,
      value: "50+",
      label: "Active Members"
    },
    {
      icon: <Code className="w-8 h-8 text-anarc-blue" />,
      value: "10+",
      label: "Research Papers"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-anarc-dark-deeper to-anarc-dark"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-anarc-neon-purple/5 rounded-full filter blur-[150px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="glass-panel rounded-xl p-6 text-center transform transition-transform hover:scale-105 duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-white/5">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold mb-2 text-white">{stat.value}</h3>
              <p className="text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
