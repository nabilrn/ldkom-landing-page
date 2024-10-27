// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Sejarah from './components/Sejarah';
import Struktur from './components/Struktur';
import ProjectSlider from './components/ProjectSlider';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Sejarah />
      <Struktur />
      <section id="project" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Project</h2>
          <div className="w-24 h-1 bg-red-900 mx-auto mb-12"></div>
          <ProjectSlider />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;