'use client';

import { useForm } from 'react-hook-form';
import React, { useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type FormData = {
  phone: string;
  message: string;
  isMobile: boolean;
};

export default function Home() {
  const { register, watch } = useForm<FormData>({
    defaultValues: {
      phone: '628123456789', // Nomor default
      message: 'Silahkan masukan pesan di sini',
      isMobile: false
    }
  });

  const formData = watch();

  // Generate WA Link secara dinamis
  const waLink = useMemo(() => {
    const phone = formData.phone.replace(/[^0-9]/g, '');
    const encodedMessage = encodeURIComponent(formData.message);
    
    return formData.isMobile
      ? `https://wa.me/${phone}?text=${encodedMessage}`
      : `https://web.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;
  }, [formData]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="min-h-screen p-8 max-w-md mx-auto content-center">
        <h1 className="text-2xl font-bold mb-6">WhatsApp Sender</h1>
        
        <div className="space-y-4">
          <div>
            <label className="block mb-1">Nomor WhatsApp</label>
            <input
              {...register('phone')}
              placeholder="628123456789"
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block mb-1">Pesan</label>
            <textarea
              {...register('message')}
              rows={4}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="isMobile"
              {...register('isMobile')}
              className="mr-2"
            />
            <label htmlFor="isMobile">Optimalkan untuk Mobile</label>
          </div>

          <div className="pt-4">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg inline-flex items-center"
            >
              <WhatsAppIcon className="mr-2" />
              Buka WhatsApp
            </a>
          </div>

          {/* Preview Link */}
          <div className="mt-6 p-4 bg-gray-50 rounded">
            <p className="text-sm text-gray-500">Link yang dihasilkan:</p>
            <code className="text-xs break-all">{waLink}</code>
          </div>
        </div>
      </main>
      <Footer />
    </div>
    
  );
}

// Komponen Ikon WhatsApp (buat di components/WhatsAppIcon.tsx)
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="20" height="20">
      <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}