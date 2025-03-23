
import React from 'react';
import Navbar from '../components/layout/Navbar';
import TeamMembers from '../components/home/TeamMembers';
import Footer from '../components/home/Footer';

const Team = () => {
  return (
    <div className="min-h-screen bg-anarc-dark text-white">
      <Navbar />
      <main className="pt-20">
        <TeamMembers />
      </main>
      <Footer />
    </div>
  );
};

export default Team;
