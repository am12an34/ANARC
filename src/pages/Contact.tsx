
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/home/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-anarc-dark text-white">
      <Navbar />
      <main className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
            {/* Contact form will be added here */}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
