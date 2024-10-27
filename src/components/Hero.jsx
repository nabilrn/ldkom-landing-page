// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-[500px] mt-16">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("/assets/hero-bg.jpg")', // Ganti dengan gambar hero Anda
          backgroundColor: '#1e40af' // Fallback jika gambar tidak load
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
          Laboratorium Dasar Komputasi
        </h1>
        <p className="text-xl max-w-2xl animate-fade-in-delay">
          LDKOM adalah salah satu laboratorium pengabdian masyarakat di Departemen 
          Sistem Informasi Fakultas Teknologi Universitas Andalas yang berfokus pada 
          pembelajaran dasar-dasar komputasi, algoritma pemrograman, struktur data, 
          bahkan jaringan dan komunikasi data.
        </p>
        <div className="mt-8">
          <a 
            href="#sejarah" 
            className="bg-red-800 hover:bg-red-900 text-white px-6 py-3 rounded-lg 
                     transition duration-300 inline-block"
          >
            Pelajari Lebih Lanjut
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;