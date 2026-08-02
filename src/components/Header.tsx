import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TRANSLATIONS } from '../utils/translations';

interface HeaderProps {
  activeSection: string;
  onNavClick: (sectionId: string) => void;
  lang: 'ID' | 'EN';
  setLang: (lang: 'ID' | 'EN') => void;
  currentPage: 'home' | 'about' | 'tours' | 'rentals';
  setCurrentPage: (page: 'home' | 'about' | 'tours' | 'rentals') => void;
  onBookingClick: () => void;
}

export default function Header({ activeSection, onNavClick, lang, setLang, currentPage, setCurrentPage, onBookingClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.nav_home, id: 'home', type: 'page', pageId: 'home' },
    { label: 'Profil', id: 'about', type: 'page', pageId: 'about' },
    { label: 'Rute Travel', id: 'services', type: 'section', sectionId: 'services' },
    { label: 'Armada', id: 'cars', type: 'section', sectionId: 'cars' },
    { label: 'Keunggulan', id: 'advantages', type: 'section', sectionId: 'advantages' },
    { label: t.nav_contact, id: 'contact', type: 'section', sectionId: 'contact' },
  ];

  const handleItemClick = (item: typeof navItems[0]) => {
    if (item.type === 'page') {
      setCurrentPage(item.pageId as any);
      onNavClick(item.pageId);
    } else {
      setCurrentPage('home');
      setTimeout(() => {
        onNavClick(item.sectionId as any);
      }, 100);
    }
    setIsOpen(false);
  };

  const handleWhatsAppHeader = () => {
    const message = encodeURIComponent("Halo AGRA NGAHIJI TRANS, saya ingin memesan tiket travel / sewa mobil rute Cianjur Selatan - Jabodetabek - Bandung. Mohon info ketersediaan jam & harga. Terima kasih!");
    window.open(`https://wa.me/6285864335465?text=${message}`, '_blank', 'noreferrer');
  };

  return (
    <header
      id="main-header"
      className="fixed top-0 left-0 w-full z-50 flex flex-col transition-all duration-300"
    >
      {/* Main Navigation Bar - Clean White Background */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md py-2 sm:py-3 shadow-md border-b border-slate-100 text-slate-800'
            : 'bg-white py-3 sm:py-4 border-b border-slate-100 text-slate-800'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* 1. BRAND IMAGE LOGO & TEXT */}
            <div 
              onClick={() => handleItemClick({ label: t.nav_home, id: 'home', type: 'page', pageId: 'home' })}
              className="flex items-center gap-3 cursor-pointer group shrink-0 py-1"
              id="header-logo"
            >
              <img 
                src="/logo.png" 
                alt="AGRA NGAHIJI TRANS Logo" 
                className="h-12 sm:h-14 lg:h-16 w-auto object-contain transition-all duration-300 group-hover:scale-105 drop-shadow-sm"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="flex flex-col">
                <span className="font-display font-black text-lg sm:text-xl lg:text-2xl text-slate-900 tracking-tight leading-none group-hover:text-red-600 transition-colors">
                  AGRA NGAHIJI <span className="text-red-600">TRANS</span>
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 tracking-wider uppercase mt-1">
                  Jasa Angkutan Sewa Khusus & Travel
                </span>
              </div>
            </div>

            {/* 2. DESKTOP NAV ITEMS */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 mx-auto" id="desktop-nav">
              {navItems.map((item) => {
                const isItemActive = 
                  (item.type === 'page' && currentPage === item.pageId) ||
                  (item.type === 'section' && activeSection === item.sectionId && currentPage === 'home');
                  
                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item)}
                    className={`font-sans text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                      isItemActive
                        ? 'text-red-600 font-bold border-b-2 border-red-600 pb-0.5'
                        : 'text-slate-700 hover:text-red-600'
                    }`}
                    id={`nav-link-${item.id}`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* 3. CTA BUTTON (FAR RIGHT - RED PILL) */}
            <div className="hidden lg:flex items-center shrink-0">
              <button
                onClick={handleWhatsAppHeader}
                className="bg-red-600 hover:bg-red-700 text-white font-sans font-bold text-sm py-2.5 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center gap-2 border border-red-500/20 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                <span>Pesan</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-3 lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl bg-slate-100 text-slate-800 hover:text-red-600 focus:outline-none cursor-pointer border border-slate-200"
                aria-label="Toggle menu"
                id="hamburger-btn"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-200 shadow-xl overflow-hidden text-slate-800"
            id="mobile-menu"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item)}
                  className="block w-full text-left font-display font-semibold text-base text-slate-800 hover:text-red-600 py-3 border-b border-slate-100 cursor-pointer"
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-3">
                <button
                  onClick={handleWhatsAppHeader}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-sans font-bold text-sm py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Pesan via WhatsApp (0858-6433-5465)</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}
