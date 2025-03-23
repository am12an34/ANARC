
import React from 'react';
import { Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "ANARC has provided me with invaluable hands-on experience and mentorship that shaped my career in robotics engineering.",
    author: "Buvan Varun",
    role: "Associate Software Engineer , Amdocs",
    image: "https://anarcnita.in/img/alumni/IMG-20211227-WA0000%20-%20Buvan%20Varun%20R%20P.jpg"
  },
  {
    id: 2,
    quote: "The projects and competitions at ANARC pushed me to think creatively and solve complex engineering challenges.",
    author: "Shivangi Chaturvedi",
    role: "SDE , Flipkart",
    image: "https://anarcnita.in/img/alumni/IMG_20210831_234523_862%20-%20Shivangi%20Chaturvedi.jpg"
  },
  {
    id: 3,
    quote: "Being part of ANARC was transformative for my professional development and opened doors to amazing opportunities.",
    author: "Santosh Verma",
    role: "HFounder & CEO , IoTronix",
    image: "https://anarcnita.in/img/alumni/15%20-%20-%20Santosh%20Verma.jpg"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-anarc-neon-cyan/5 rounded-full filter blur-[100px]"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/80 mb-4">Testimonials</span>
          <h2 className="text-gradient-blue mb-6">What Our Alumni Say</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Hear from former ANARC members about how their experiences shaped their careers and perspectives.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="glass-panel rounded-xl p-6 relative transform transition-all duration-300 hover:-translate-y-2"
            >
              <Quote className="w-10 h-10 text-anarc-blue/30 absolute top-6 left-6" />
              <div className="pt-8 pb-4">
                <p className="text-white/90 mb-8 relative z-10 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.author}</h4>
                    <p className="text-sm text-anarc-blue">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
