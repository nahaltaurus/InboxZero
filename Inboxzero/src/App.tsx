import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Benefits } from './components/Benefits';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white text-gray-900">
      <div className="container mx-auto px-4 py-16">
        <Navbar />
        <Hero />
      </div>
      
      <HowItWorks />
      
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose InboxZero?</h2>
        <Benefits />
      </div>

      <footer className="border-t border-gray-100 mt-24 py-8">
        <div className="container mx-auto px-4 text-center text-gray-500">
          <p>© 2024 InboxZero. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;