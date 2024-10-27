// src/components/Footer.jsx
import React from 'react';
import { Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-red-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Tentang LDKOM</h3>
            <p className="text-white leading-relaxed">
              Laboratorium Dasar Komputasi (LDKOM) adalah laboratorium yang berfokus 
              pada pembelajaran dasar-dasar komputasi di Universitas Andalas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#sejarah" className="text-gray-400 hover:text-white transition">
                  Sejarah
                </a>
              </li>
              <li>
                <a href="#struktur" className="text-gray-400 hover:text-white transition">
                  Struktur
                </a>
              </li>
              <li>
                <a href="#project" className="text-gray-400 hover:text-white transition">
                  Project
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail size={20} />
                <span className="text-gray-400">labdas.si.fti@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} />
                <span className="text-gray-400">+6285159538004</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/ldkomsiunand/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                >
                  <Instagram size={24} />
                </a>
                <a 
                  href="https://www.linkedin.com/company/basic-computing-laboratory-andalas-university" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Laboratorium Dasar Komputasi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;