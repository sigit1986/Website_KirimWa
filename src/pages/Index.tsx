
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import WorkflowSection from '@/components/WorkflowSection';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      {/* <FeaturesSection />
      <WorkflowSection />
      <StatsSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection /> */}
      <Footer />
    </div>
  );
};

export default Index;
