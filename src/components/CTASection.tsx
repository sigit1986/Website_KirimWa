
import React from 'react';
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <div className="section-padding bg-gradient-to-r from-whatsapp-dark to-primary">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Siap Meningkatkan Pemasaran WhatsApp Anda?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl">
            Mulai gunakan WAKirim sekarang dan rasakan kemudahan mengirim pesan WhatsApp otomatis untuk bisnis Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6">
              Mulai Gratis
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
              Jadwalkan Demo
            </Button>
          </div>
          <p className="text-sm text-white/70 mt-6">
            Tidak perlu kartu kredit. Mulai dengan 100 pesan gratis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
