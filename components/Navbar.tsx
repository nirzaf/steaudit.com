'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Home,
  Info,
  Users,
  Briefcase,
  PhoneCall
} from 'lucide-react';
import { useLocale } from './LocaleProvider';

const Navbar = () => {
  const { locale, isRTL, toggleLocale } = useLocale();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = locale === 'ar'
    ? [
      { path: '/', label: 'الرئيسية', icon: Home },
      { path: '/about', label: 'من نحن', icon: Info },
      { path: '/partners', label: 'شركاؤنا', icon: Users },
      { path: '/services', label: 'الخدمات', icon: Briefcase },
      { path: '/contact', label: 'تواصل معنا', icon: PhoneCall }
    ]
    : [
      { path: '/', label: 'Home', icon: Home },
      { path: '/about', label: 'About Us', icon: Info },
      { path: '/partners', label: 'Our Partners', icon: Users },
      { path: '/services', label: 'Services', icon: Briefcase },
      { path: '/contact', label: 'Contact', icon: PhoneCall }
    ];

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/98 backdrop-blur-lg shadow-lg'
          : 'bg-white/90 backdrop-blur-md shadow-md'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center h-20 lg:h-24 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="relative h-10 sm:h-12 lg:h-14 w-auto"
              >
                <img
                  src="https://ik.imagekit.io/ri5cvrkrr/LOGO-.png?updatedAt=1732207359661"
                  alt="STE Logo"
                  width={140}
                  height={56}
                  loading="eager"
                  className="h-10 sm:h-12 lg:h-14 w-auto transition-all duration-300"
                  style={{ color: 'transparent', filter: 'invert(0)' }}
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className={`hidden md:flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-1 lg:space-x-2'}`}>
              {navLinks.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  href={path}
                  className="relative group"
                >
                  <div className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 ${isActive(path)
                    ? 'text-brand-secondary bg-gradient-to-r from-brand-secondary/10 to-brand-accent/10'
                    : 'text-brand-primary/70 hover:text-brand-secondary hover:bg-brand-neutral/50'
                    }`}>
                    <Icon size={16} className="flex-shrink-0" />
                    <span>{label}</span>
                  </div>
                  {isActive(path) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-secondary to-brand-accent"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
              <button
                onClick={toggleLocale}
                className="ml-2 flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-neutral/70 text-brand-primary hover:bg-brand-neutral transition-colors duration-200 font-semibold"
                aria-label={locale === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
              >
                <span className="text-xl">{locale === 'ar' ? '🇬🇧' : '🇶🇦'}</span>
                <span className="text-sm">{locale === 'ar' ? 'EN' : 'AR'}</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : 'flex-row'} gap-2`}>
              <button
                onClick={toggleLocale}
                className="md:hidden flex items-center gap-1 px-3 py-2 rounded-lg bg-brand-neutral/70 text-brand-primary hover:bg-brand-neutral transition-colors duration-200 font-semibold"
                aria-label={locale === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
              >
                <span className="text-lg">{locale === 'ar' ? '🇬🇧' : '🇶🇦'}</span>
                <span className="text-xs">{locale === 'ar' ? 'EN' : 'AR'}</span>
              </button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="md:hidden focus:outline-none text-brand-primary/80 hover:text-brand-secondary min-h-[44px] min-w-[44px] p-2 rounded-lg hover:bg-brand-neutral/30 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="md:hidden overflow-hidden bg-white/98 backdrop-blur-lg shadow-xl rounded-b-2xl border-t border-brand-neutral/20"
              >
                <div className={`px-4 pt-4 pb-6 space-y-1 ${isRTL ? 'text-right' : ''}`}>
                  {navLinks.map(({ path, label, icon: Icon }, index) => (
                    <motion.div
                      key={path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.2 }}
                    >
                      <Link
                        href={path}
                        className={`flex items-center gap-3 py-3.5 px-4 text-sm font-semibold transition-all duration-300 rounded-xl ${isActive(path)
                          ? 'text-white bg-gradient-to-r from-brand-secondary to-brand-accent shadow-md'
                          : 'text-brand-primary/80 hover:text-brand-secondary hover:bg-brand-neutral/60 active:scale-95'
                          }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Icon size={18} className="flex-shrink-0" />
                        <span>{label}</span>
                      </Link>
                    </motion.div>
                  ))}
                  <div className="pt-3">
                    <button
                      onClick={() => {
                        toggleLocale();
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-neutral/70 text-brand-primary font-semibold hover:bg-brand-neutral transition-colors duration-200"
                      aria-label={locale === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
                    >
                      <span className="text-xl">{locale === 'ar' ? '🇬🇧' : '🇶🇦'}</span>
                      <span>{locale === 'ar' ? 'EN' : 'AR'}</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-20 lg:h-24"></div>
    </>
  );
};

export default Navbar;
