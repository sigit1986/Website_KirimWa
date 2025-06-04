
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Budi Santoso",
      title: "Marketing Manager, PT Abadi Jaya",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "WAKirim telah membantu kami meningkatkan engagement pelanggan hingga 300%. Pengiriman otomatis dan terjadwal sangat membantu tim marketing kami."
    },
    {
      name: "Siti Nurhaliza",
      title: "Pemilik, Toko Online Berkah",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      quote: "Dengan WAKirim, saya bisa mengirimkan update produk baru ke ribuan pelanggan hanya dalam sekali klik. Sangat menghemat waktu dan tenaga!"
    },
    {
      name: "Ahmad Fahri",
      title: "Admin Digital, Dinas Komunikasi Kota Sejahtera",
      image: "https://randomuser.me/api/portraits/men/62.jpg",
      quote: "Sebagai instansi pemerintah, kami membutuhkan platform yang aman dan andal. WAKirim memenuhi semua kebutuhan kami untuk komunikasi dengan masyarakat."
    }
  ];

  return (
    <div id="testimonials" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Apa Kata <span className="text-primary">Pengguna Kami</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ribuan bisnis dan instansi telah merasakan manfaat WAKirim
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="h-2 bg-gradient-to-r from-primary to-whatsapp-blue"></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.title}</p>
                    </div>
                  </div>
                  <div className="mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
