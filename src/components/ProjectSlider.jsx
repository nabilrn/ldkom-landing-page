import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const projects = [
    {
      title: "Website Kelurahan Tanah Lapang",
      image: "/assets/Kelurahan_Tanah_Lapang.png",
      description: "Website Profil Kelurahan Tanah Lapang",
      link: "https://kelurahantanahlapang.id/" // Link ke domain/repo
    },
    {
      title: "U-lapor",
      image: "/assets/U-lapor.png",
      description: "Sistem Informasi Pengaduan Mahasiswa Universitas Andalas",
      link: "https://pengaduan.ilhamnofal.my.id/page/" // Link ke domain/repo
    },
    {
      title: "Alamanac+",
      image: "/assets/Almanac+.png",
      description: "Project Hackathon firetech 2024",
      link: "https://github.com/nabilrn/hackaton.git" // Link ke domain/repo
    },
    {
      title: "Fti Organizer",
      image: "/assets/FTIOrganizer.png",
      description: "Sistem informasi pengelolaan kegiatan FTI",
      link: "http://localhost:5000" // Link ke domain/repo
    },
    {
      title: "Khanny Dental",
      image: "/assets/Khanny Dental.png",
      description: "Sistem Booking Dokter Gigi",
      link: "http://localhost/DentalWebPHP" // Link ke domain/repo
    },
    {
      title: "Penukaran Prodi",
      image: "/assets/Penukaran Prodi.png",
      description: "Sistem Informasi Penukaran Prodi di Fakultas Teknoogi Informasi",
      link: "https://github.com/nabilrn/Penukaran-Prodi.git" // Link ke domain/repo
    },
    {
      title: "Web Remedial",
      image: "/assets/Remedial.jpg",
      description: "Sistem Informasi Manajemen Remedial Sistem Informasi",
      link: "https://github.com/Ilhamnof/12_Pendaftaran-dan-Manajemen-Remedial.git" // Link ke domain/repo
    },
    {
      title: "Sistem Perpustakaan",
      image: "/assets/Sistem Perpustakaan.jpg",
      description: "Sistem Informasi Perpustakaan Universitas Andalas",
      link: "https://github.com/rmdsftr/tbldkom.git" // Link ke domain/repo
    }
    
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const handleProjectClick = (e) => {
    // Mencegah klik dari tombol navigasi memicu link
    if (e.target.closest('button')) {
      return;
    }
    // Buka link di tab baru
    window.open(projects[currentSlide].link, '_blank');
  };

  return (
    <div 
      className="relative max-w-4xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div 
        className="overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform hover:scale-[1.02]"
        onClick={handleProjectClick}
      >
        <div className="relative h-[400px]">
          <img 
            src={projects[currentSlide].image}
            alt={projects[currentSlide].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-white text-center p-6">
              <h3 className="text-2xl font-bold mb-2">{projects[currentSlide].title}</h3>
              <p className="text-lg">{projects[currentSlide].description}</p>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ProjectSlider;