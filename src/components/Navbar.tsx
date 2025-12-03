import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Home,
  Info,
  Users,
  Briefcase,
  PhoneCall
} from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About Us', icon: Info },
    { path: '/partners', label: 'Our Partners', icon: Users },
    { path: '/services', label: 'Services', icon: Briefcase },
    { path: '/contact', label: 'Contact', icon: PhoneCall }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
            ? 'bg-white shadow-lg'
            : 'bg-white/90 backdrop-blur-sm shadow-lg'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="https://ik.imagekit.io/ri5cvrkrr/LOGO-.png?updatedAt=1732207359661"
                alt="STE Logo"
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  className={`text-sm font-medium transition-all duration-300 px-3 py-2 flex items-center gap-2 ${isActive(path)
                      ? 'text-brand-primary border-b-2 border-brand-primary'
                      : 'text-gray-700 hover:text-brand-primary'
                    }`}
                >
                  <Icon size={16} className="flex-shrink-0" />
                  {label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden focus:outline-none text-gray-700 hover:text-brand-primary min-h-[44px] min-w-[44px] p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white shadow-lg rounded-b-2xl">
              <div className="px-4 pt-2 pb-6 space-y-2">
                {navLinks.map(({ path, label, icon: Icon }) => (
                  <Link
                    key={path}
                    to={path}
                    className={`flex items-center gap-3 py-3 text-sm font-medium transition-all duration-300 rounded-lg ${isActive(path)
                        ? 'text-brand-primary bg-gray-100 px-4'
                        : 'text-gray-700 hover:text-brand-primary hover:bg-gray-50 px-4'
                      }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon size={18} className="flex-shrink-0" />
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;