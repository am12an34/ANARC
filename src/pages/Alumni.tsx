
import React from 'react';
import Navbar from '../components/layout/Navbar';
import AlumniSection from '../components/alumni/AlumniSection';
import Footer from '../components/home/Footer';

const Alumni = () => {
  return (
    <div className="min-h-screen bg-anarc-dark text-white">
      <Navbar />
      <main className="pt-20">
        <AlumniSection />
      </main>
      <Footer />
    </div>
  );
};

export default Alumni;
