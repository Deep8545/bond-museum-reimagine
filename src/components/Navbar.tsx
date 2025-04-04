
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="content-container">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-heading font-bold text-primary">007</span>
            <span className="text-xl font-heading">MUSEUM</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="spy-link text-sm font-medium">HOME</Link>
            <Link to="/about" className="spy-link text-sm font-medium">ABOUT</Link>
            <div className="relative group">
              <button className="spy-link text-sm font-medium flex items-center gap-1">
                EXHIBITS <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-card border border-border py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="#" className="block px-4 py-2 text-sm hover:bg-accent">Bond Cars</Link>
                <Link to="#" className="block px-4 py-2 text-sm hover:bg-accent">Gadgets</Link>
                <Link to="#" className="block px-4 py-2 text-sm hover:bg-accent">Movie Props</Link>
                <Link to="#" className="block px-4 py-2 text-sm hover:bg-accent">Wardrobe</Link>
              </div>
            </div>
            <Link to="/gallery" className="spy-link text-sm font-medium">GALLERY</Link>
            <Link to="/contact" className="spy-link text-sm font-medium">CONTACT</Link>
            <Button variant="default" size="sm">BOOK TICKETS</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border animate-slide-in">
            <div className="flex flex-col p-4 space-y-4">
              <Link to="/" className="text-sm font-medium py-2" onClick={toggleMenu}>HOME</Link>
              <Link to="/about" className="text-sm font-medium py-2" onClick={toggleMenu}>ABOUT</Link>
              <div className="space-y-2">
                <div className="text-sm font-medium py-2">EXHIBITS</div>
                <div className="pl-4 space-y-2">
                  <Link to="#" className="block text-sm py-1" onClick={toggleMenu}>Bond Cars</Link>
                  <Link to="#" className="block text-sm py-1" onClick={toggleMenu}>Gadgets</Link>
                  <Link to="#" className="block text-sm py-1" onClick={toggleMenu}>Movie Props</Link>
                  <Link to="#" className="block text-sm py-1" onClick={toggleMenu}>Wardrobe</Link>
                </div>
              </div>
              <Link to="/gallery" className="text-sm font-medium py-2" onClick={toggleMenu}>GALLERY</Link>
              <Link to="/contact" className="text-sm font-medium py-2" onClick={toggleMenu}>CONTACT</Link>
              <Button variant="default" size="sm" className="w-full">BOOK TICKETS</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
