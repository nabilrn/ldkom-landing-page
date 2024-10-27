// src/components/Struktur.jsx
import React, { useState } from 'react';
import { X } from 'lucide-react';

const Struktur = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="struktur" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Struktur Organisasi
        </h2>
        <div className="w-24 h-1 bg-red-900 mx-auto mb-12"></div>

        <div className="max-w-4xl mx-auto">
          {/* Image Container */}
          <div 
            className="bg-white rounded-lg shadow-xl p-6 cursor-pointer hover:shadow-2xl 
                       transition-shadow duration-300"
            onClick={() => setShowModal(true)}
          >
            <img 
              src="/assets/struktur-organisasi.png"
              alt="Struktur Organisasi LDKOM"
              className="w-full h-auto"
            />
            
            {/* View Larger Hint */}
            <div className="text-center mt-4 text-gray-600">
              Klik untuk melihat gambar lebih besar
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center 
                      justify-center p-4" onClick={() => setShowModal(false)}>
          <div className="relative max-w-7xl max-h-[90vh] overflow-auto">
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 bg-white rounded-full p-2 
                         hover:bg-gray-100 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setShowModal(false);
              }}
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Large Image */}
            <img 
              src="/assets/struktur-organisasi.png"
              alt="Struktur Organisasi LDKOM"
              className="w-auto max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Struktur;