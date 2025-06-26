
import React, { useEffect, useRef } from 'react';

const WorkflowSection = () => {
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in-right');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      stepRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const steps = [
    {
      number: 1,
      title: "Klik Kirim Pesan Sekarang",
      description: "Untuk mengirim pesan WhatsApp otomatis, klik tombol Kirim Pesan Sekarang di halaman utama atau di bagian kanan atas layar.",
      icon: (
        <img src="../icons8-cursor-60.png" alt="Klik" className="h-8 w-8" />
      ),
    },
    {
      number: 2,
      title: "Tulis Pesan",
      description: "Buat pesan WhatsApp dengan format yang Anda inginkan. Tambahkan teks, emoji, dan media sesuai kebutuhan.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
    },
    {
      number: 3,
      title: "Kirim Pesan",
      description: "WAKirim akan membuka WhatsApp Web anda dan tinggal klik kirim pesan Anda. Anda bisa bersantai!",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
    }
  ];

  return (
    <div id="workflow-section" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Cara Kerja <span className="text-primary">WAKirim</span></h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Pengiriman pesan WhatsApp otomatis yang mudah dalam 3 langkah sederhana
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 hidden md:block" style={{ transform: 'translateX(-50%)' }}></div>
          
          {/* Steps */}
          <div className="space-y-20 md:space-y-0">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                ref={(el) => (stepRefs.current[index] = el)}
                className="opacity-0 flex flex-col md:flex-row items-center md:even:flex-row-reverse"
              >
                {/* Step Content */}
                <div className="w-full md:w-5/12 mb-8 md:mb-0 md:px-6">
                  <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold mr-4">
                        {step.number}
                      </span>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="w-full md:w-2/12 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-white shadow-xl border-4 border-white flex items-center justify-center z-10">
                    {step.icon}
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="w-full md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowSection;
