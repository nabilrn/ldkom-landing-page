// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/assets/logo.png" alt="LDKOM Logo" className="w-10 h-10" />
          <span className="text-lg font-semibold">Laboratorium Dasar Komputasi</span>
        </div>
        <div className="flex space-x-6">
          <a href="#sejarah" className="hover:text-red-800">Sejarah</a>
          <a href="#struktur" className="hover:text-red-800">Struktur</a>
          <a href="#project" className="hover:text-red-800">Project</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;