// src/components/Sejarah.jsx
import React from 'react';

const Sejarah = () => {
  return (
    <section id="sejarah" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Sejarah</h2>
          <div className="w-24 h-1 bg-red-900 mx-auto mb-8"></div>
          
          <div className="space-y-6 text-gray-600">
            <p className="leading-relaxed">
              Laboratorium Dasar Komputasi didirikan pada 3 Februari 2016 di Fakultas 
              Teknologi Informasi, dengan Kepala Laboratorium pertama, Bapak Fajril Akbar, M.T, 
              dan Kevin Valdi Arestivo sebagai koordinator asisten pertama.
            </p>
            
            <p className="leading-relaxed">
              Awalnya, laboratorium ini dikenal dengan nama Laboratorium Dasar Sistem 
              Informasi (LDSI). Pada sekitar tahun 2017-2018, namanya diubah menjadi 
              Laboratorium Dasar Komputasi (LDKOM) hingga saat ini. Setiap tahunnya diadakan 
              rekrutmen asisten untuk membantu kegiatan di laboratoriumnya.
            </p>

            <p className="leading-relaxed">
              Laboratorium ini berfokus pada pembelajaran dasar-dasar komputer dan pemrograman, 
              menyediakan fondasi kuat bagi mahasiswa untuk memahami konsep-konsep dalam teknologi 
              informasi. Selain pembelajaran berbagai bahasa pemrograman dan teori komputasi, 
              Laboratorium Dasar Komputasi (LDKOM) juga memberikan pengenalan dasar mengenai 
              jaringan komputer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sejarah;