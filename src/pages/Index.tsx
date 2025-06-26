
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import WorkflowSection from '@/components/WorkflowSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WorkflowSection />
      <Footer />
    </div>
  );
};

export default Index;
