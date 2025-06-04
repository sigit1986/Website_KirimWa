
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "Rp 99.000",
      period: "/bulan",
      description: "Ideal untuk bisnis kecil yang baru memulai.",
      features: [
        "500 pesan per bulan",
        "1 nomor WhatsApp",
        "Pengiriman terjadwal",
        "Template pesan dasar",
        "Dukungan email"
      ],
      cta: "Mulai Sekarang",
      popular: false
    },
    {
      name: "Business",
      price: "Rp 299.000",
      period: "/bulan",
      description: "Solusi lengkap untuk bisnis yang berkembang.",
      features: [
        "3.000 pesan per bulan",
        "3 nomor WhatsApp",
        "Pengiriman terjadwal",
        "Semua template pesan",
        "Laporan analitik",
        "Integrasi API",
        "Dukungan prioritas"
      ],
      cta: "Pilih Paket",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Rp 999.000",
      period: "/bulan",
      description: "Untuk bisnis besar dengan kebutuhan khusus.",
      features: [
        "10.000 pesan per bulan",
        "10 nomor WhatsApp",
        "Semua fitur Business",
        "White label solution",
        "Dedicated server",
        "Account manager",
        "Solusi custom"
      ],
      cta: "Hubungi Kami",
      popular: false
    }
  ];

  return (
    <div id="pricing" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Paket <span className="text-primary">Harga</span></h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan bisnis Anda. Bayar sesuai penggunaan tanpa biaya tersembunyi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-all duration-300 ${
                plan.popular ? 'border-primary shadow-lg' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
                    Terpopuler
                  </div>
                </div>
              )}
              <CardHeader className={plan.popular ? 'bg-primary/5' : ''}>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>
                  <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500">{plan.period}</span>
                </CardDescription>
                <p className="text-sm text-gray-500 mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-primary hover:bg-whatsapp-dark' 
                      : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
