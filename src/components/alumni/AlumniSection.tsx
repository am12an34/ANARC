
import React, { useState } from 'react';
import { ExternalLink, Linkedin, Mail, Calendar, Building, Trophy, Sparkles } from 'lucide-react';

interface Alumni {
  id: number;
  name: string;
  image: string;
  graduationYear: string;
  role: string;
  company: string;
  location: string;
  achievements: string[];
  linkedin?: string;
  email?: string;
  website?: string;
  colorClass: string;
}

const alumniList: Alumni[] = [
  {
    id: 1,
    name: "Ashish Kumar",
    image: "https://anarcnita.in/img/alumni/1627328798012%20-%20Ashish%20Kumar.jpg",
    graduationYear: "2021",
    role: "Graduate Engineer Trainee",
    company: "Nokia",
    location: "Bangalore, India",
    achievements: ["Best Intern Award", "Tech Excellence Award"],
    linkedin: "https://linkedin.com/in/ashish-kumar",
    email: "ashish.kumar@example.com",
    website: "https://ashishkumar.dev",
    colorClass: "from-blue-500 to-teal-400"
  },
  {
    id: 2,
    name: "Buvan Varun",
    image: "https://anarcnita.in/img/alumni/IMG-20211227-WA0000%20-%20Buvan%20Varun%20R%20P.jpg",
    graduationYear: "2021",
    role: "Associate Software Engineer",
    company: "Amdocs",
    location: "Pune, India",
    achievements: ["Star Performer 2022", "Certified Cloud Developer"],
    linkedin: "https://linkedin.com/in/buvan-varun",
    email: "buvan.varun@example.com",
    website: "https://buvanvarun.tech",
    colorClass: "from-purple-500 to-indigo-500"
  },
  {
    id: 3,
    name: "Neeraj Yadav",
    image: "https://anarcnita.in/img/alumni/Neeraj.Yadav%20-%20Neeraj%20Yadav.jpg",
    graduationYear: "2021",
    role: "Graduate Engineer Trainee",
    company: "L&T",
    location: "Mumbai, India",
    achievements: ["Young Engineer Award", "Top 10 Innovators 2023"],
    linkedin: "https://linkedin.com/in/neeraj-yadav",
    email: "neeraj.yadav@example.com",
    website: "https://neerajyadav.io",
    colorClass: "from-green-400 to-cyan-500"
  },
  {
    id: 4,
    name: "Srivatsa Kanukolanu",
    image: "https://anarcnita.in/img/alumni/20211225_171246%20-%20Srivatsa%20Kanukolanu.jpg",
    graduationYear: "2021",
    role: "Associate Software Engineer",
    company: "Deloitte",
    location: "Hyderabad, India",
    achievements: ["Deloitte Tech Star", "Best Coding Hackathon 2022"],
    linkedin: "https://linkedin.com/in/srivatsa-kanukolanu",
    email: "srivatsa.kanukolanu@example.com",
    website: "https://srivatsakanukolanu.me",
    colorClass: "from-yellow-400 to-orange-500"
  },
  {
    id: 5,
    name: "Vamsi Krishna Pendyala",
    image: "https://anarcnita.in/img/alumni/IMG-20211010-WA0033%20-%20Vamsi%20Krishna%20Pendyala.jpg", // Replace with actual image URL
    graduationYear: "2019",
    role: "SDE",
    company: "Lemnisk",
    location: "India",
    achievements: ["Project Lead in AI division", "Patent Holder in ML"],
    linkedin: "https://linkedin.com/in/vamsi-krishna",
    email: "vamsi.krishna@example.com",
    website: "https://vamsikrishna.dev",
    colorClass: "from-red-500 to-pink-500"
  },
  {
    id: 6,
    name: "Shivangi Chaturvedi",
    image: "https://anarcnita.in/img/alumni/IMG_20210831_234523_862%20-%20Shivangi%20Chaturvedi.jpg", // Replace with actual image URL
    graduationYear: "2019",
    role: "SDE",
    company: "Flipkart",
    location: "India",
    achievements: ["Top Performer 2021", "Lead Developer in E-commerce Division"],
    linkedin: "https://linkedin.com/in/shivangi-chaturvedi",
    email: "shivangi.chaturvedi@example.com",
    website: "https://shivangichaturvedi.tech",
    colorClass: "from-pink-400 to-purple-500"
  }
];



interface AlumniCardProps {
  alumni: Alumni;
}

const AlumniCard: React.FC<AlumniCardProps> = ({ alumni }) => {
  return (
    <div className="group h-full">
      <div className={`rounded-xl overflow-hidden h-full transition-all duration-300 hover:shadow-lg bg-gradient-to-br ${alumni.colorClass} p-[2px]`}>
        <div className="bg-anarc-dark-deeper rounded-xl p-6 h-full flex flex-col">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-white/10">
              <img 
                src={alumni.image} 
                alt={alumni.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-white truncate">{alumni.name}</h3>
              <p className="text-white/70 text-sm mb-1">{alumni.role}</p>
              <div className="flex items-center text-white/60 text-xs">
                <Building className="w-3 h-3 mr-1" />
                <span className="truncate">{alumni.company}</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-2 mb-4 flex-1">
            <div className="flex items-center text-white/60 text-xs">
              <Calendar className="w-3 h-3 mr-2" />
              <span>Class of {alumni.graduationYear}</span>
            </div>
            
            <div className="mt-3">
              <p className="text-xs font-medium text-white/80 mb-2 flex items-center">
                <Trophy className="w-3 h-3 mr-2" /> Achievements
              </p>
              <ul className="space-y-1">
                {alumni.achievements.map((achievement, index) => (
                  <li key={index} className="text-xs text-white/70 flex items-start">
                    <Sparkles className="w-3 h-3 text-white/40 mr-2 mt-0.5" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="pt-4 border-t border-white/10 flex justify-between items-center">
            <div className="flex space-x-2">
              {alumni.linkedin && (
                <a 
                  href={alumni.linkedin}
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {alumni.email && (
                <a 
                  href={`mailto:${alumni.email}`}
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                  aria-label="Email Contact"
                >
                  <Mail className="w-4 h-4" />
                </a>
              )}
              {alumni.website && (
                <a 
                  href={alumni.website}
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Personal Website"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
            <span className="text-xs text-white/50">{alumni.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const AlumniSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredAlumni = alumniList.filter(alumni => 
    alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    alumni.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    alumni.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/80 mb-4">Our Alumni</span>
          <h2 className="text-gradient-blue mb-6">Where ANARC Innovators Go</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
            Our alumni have gone on to make significant contributions in the fields of robotics, AI, and technology around the world.
          </p>
          
          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search alumni by name, role, or company..."
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-anarc-blue/50"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAlumni.map(alumni => (
            <AlumniCard key={alumni.id} alumni={alumni} />
          ))}
        </div>
        
        {filteredAlumni.length === 0 && (
          <div className="text-center py-10">
            <p className="text-white/70">No alumni found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AlumniSection;
