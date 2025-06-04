
import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import { ChartBarIcon } from "lucide-react";

const StatsSection = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const barRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Generate some realistic data for our chart
  const chartData = [
    { day: "Sen", messages: 820, success: 780 },
    { day: "Sel", messages: 932, success: 901 },
    { day: "Rab", messages: 901, success: 880 },
    { day: "Kam", messages: 934, success: 908 },
    { day: "Jum", messages: 1290, success: 1240 },
    { day: "Sab", messages: 1130, success: 1080 },
    { day: "Min", messages: 890, success: 850 }
  ];
  
  // Chart configuration
  const chartConfig = {
    messages: {
      label: "Pesan Terkirim",
      color: "#4CAF50"
    },
    success: {
      label: "Sukses Terkirim",
      color: "#29934A"
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Animate bars when in viewport
          barRefs.current.forEach((bar, index) => {
            if (bar) {
              setTimeout(() => {
                bar.style.setProperty('--stat-height', `${Math.random() * 30 + 70}%`);
                bar.classList.add('animate-stat-grow');
              }, index * 150);
            }
          });
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.2 }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => {
      if (chartRef.current) {
        observer.unobserve(chartRef.current);
      }
    };
  }, []);

  const stats = [
    { label: "Pesan Terkirim", value: "5M+", desc: "Pesan terkirim setiap bulan", percent: "97%" },
    { label: "Tingkat Terkirim", value: "99.8%", desc: "Rata-rata keberhasilan pengiriman", percent: "99.8%" },
    { label: "Pengguna Aktif", value: "1000+", desc: "Bisnis menggunakan WAKirim", percent: "85%" },
    { label: "Respon Diterima", value: "3.2M+", desc: "Respon diterima dari pelanggan", percent: "78%" }
  ];

  return (
    <div className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Statistik <span className="text-primary">Pengiriman</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Pantau performa pengiriman pesan WhatsApp Anda dengan statistik real-time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Chart Card */}
          <Card className="overflow-hidden">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-6">Performa Pengiriman</h3>
              <div ref={chartRef} className="h-64">
                <ChartContainer config={chartConfig}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                      <XAxis 
                        dataKey="day" 
                        axisLine={false} 
                        tickLine={false}
                        fontSize={12}
                      />
                      <YAxis 
                        axisLine={false} 
                        tickLine={false} 
                        width={30} 
                        fontSize={12} 
                        tickFormatter={(value) => `${value}`}
                      />
                      <Tooltip 
                        content={({ active, payload }) => (
                          <ChartTooltipContent 
                            active={active} 
                            payload={payload} 
                            label={payload?.[0]?.payload?.day}
                          />
                        )} 
                      />
                      <Bar 
                        dataKey="messages" 
                        fill="#4CAF50" 
                        radius={[4, 4, 0, 0]} 
                        className="animate-in fade-in duration-500" 
                        fillOpacity={0.9}
                      />
                      <Bar 
                        dataKey="success" 
                        fill="#29934A" 
                        radius={[4, 4, 0, 0]} 
                        className="animate-in fade-in duration-500 delay-150" 
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>

          {/* Stats Card */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-6">Ikhtisar Metrik</h3>
              <div className="space-y-6">
                {stats.map((stat, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{stat.label}</span>
                      <span className="text-sm font-medium">{stat.value}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-primary h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: stat.percent }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500">{stat.desc}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
