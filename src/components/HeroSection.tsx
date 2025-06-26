
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const phoneRef = useRef<HTMLDivElement>(null);
  const bubbleRef1 = useRef<HTMLDivElement>(null);
  const bubbleRef2 = useRef<HTMLDivElement>(null);
  const bubbleRef3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Stagger animations for message bubbles
    if (bubbleRef1.current) {
      setTimeout(() => {
        bubbleRef1.current?.classList.add('animate-bubble-pop');
      }, 500);
    }

    if (bubbleRef2.current) {
      setTimeout(() => {
        bubbleRef2.current?.classList.add('animate-bubble-pop');
      }, 1000);
    }

    if (bubbleRef3.current) {
      setTimeout(() => {
        bubbleRef3.current?.classList.add('animate-bubble-pop');
      }, 1500);
    }
  }, []);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/page');
  };

  return (
    <div className="min-h-screen pt-20 section-padding flex flex-col md:flex-row items-center bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="w-full md:w-1/2 mb-12 md:mb-0">
        <div className="space-y-6 max-w-xl">
          <div className="inline-block bg-white/80 backdrop-blur-sm rounded-full px-4 py-1 border border-primary/20">
            <p className="text-sm font-medium text-primary flex items-center">
              <MessageSquare className="w-4 h-4 mr-2" /> WhatsApp Otomatis
            </p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Kirim Pesan WhatsApp <span className="text-primary">Otomatis</span>
          </h1>
          <p className="text-lg text-gray-600">
            Platform untuk kirim pesan WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="btn-primary" onClick={handleClick}>
            Kirim Pesan Sekarang
            </Button>
            <Button variant="outline" className="border-whatsapp-dark text-whatsapp-dark hover:bg-whatsapp-dark/5" 
            onClick={() => {
              const section = document.getElementById('workflow-section');
              if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
              }
            }}>
              Pelajari Cara Kerja...
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative">
          {/* Animated Phone */}
          <div 
            ref={phoneRef} 
            className="relative bg-gray-900 rounded-[40px] p-3 w-[280px] h-[580px] shadow-2xl animate-phone-float"
          >
            {/* Phone Screen */}
            <div className="relative w-full h-full rounded-[32px] bg-gray-100 overflow-hidden">
              {/* WhatsApp Interface */}
              <div className="w-full h-16 bg-whatsapp-dark flex items-center px-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                  <div>
                    <p className="text-white text-sm font-semibold">WAKirim Broadcast</p>
                    <p className="text-white/70 text-xs">Pesan otomatis terkirim...</p>
                  </div>
                </div>
              </div>
              
              {/* Messages Container */}
              <div className="p-4 h-[calc(100%-4rem)] bg-[url('https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg')] bg-cover">
                {/* Message Bubbles */}
                <div 
                  ref={bubbleRef1} 
                  className="max-w-[85%] ml-auto mb-3 p-3 bg-[#dcf8c6] rounded-lg shadow-sm opacity-0"
                >
                  <p className="text-sm">Halo! Terima kasih sudah berlangganan layanan kami.</p>
                  <p className="text-right text-xs text-gray-500">09:41</p>
                </div>
                
                <div 
                  ref={bubbleRef2} 
                  className="max-w-[85%] ml-auto mb-3 p-3 bg-[#dcf8c6] rounded-lg shadow-sm opacity-0"
                >
                  <p className="text-sm">Diskon 25% untuk semua produk kami minggu ini!</p>
                  <p className="text-right text-xs text-gray-500">09:42</p>
                </div>
                
                <div 
                  ref={bubbleRef3} 
                  className="max-w-[85%] ml-auto mb-3 p-3 bg-[#dcf8c6] rounded-lg shadow-sm opacity-0"
                >
                  <p className="text-sm">Kunjungi website kami untuk info lebih lanjut.</p>
                  <p className="text-right text-xs text-gray-500">09:43</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-[10%] -left-12 -z-10 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-[10%] -right-12 -z-10 w-32 h-32 bg-whatsapp-blue/20 rounded-full blur-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
