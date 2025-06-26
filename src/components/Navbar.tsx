
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/page');
  };
  const handleHomeClick = () => {
    navigate('/');
  }

  return (
    <nav className="bg-white py-4 px-6 md:px-12 lg:px-24 shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-bold text-whatsapp-dark">WA<span className="text-primary">Kirim.</span></span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a className="text-gray-700 hover:text-primary transition-colors"
          onClick={handleHomeClick} >Home</a>
          <a className="text-gray-700 hover:text-primary transition-colors"
          onClick={() => {
              const section = document.getElementById('workflow-section');
              if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
              }
            }} >Cara Kerja</a>
          <Button 
            className="bg-primary hover:bg-whatsapp-dark text-white"
            onClick={handleClick}
          >
            Kirim Pesan Sekarang
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="text-gray-700 focus:outline-none"
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
          <div className="flex flex-col space-y-4 px-2">
            <a href="#how-it-works" className="text-gray-700 hover:text-primary transition-colors py-2">Cara Kerja</a>
            <Button 
              className="bg-primary hover:bg-whatsapp-dark text-white w-full"
              onClick={handleClick}
            >
              Kirim Pesan Sekarang
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;