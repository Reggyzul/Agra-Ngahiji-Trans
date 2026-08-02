import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Ticket, ArrowRight, MapPin, Users, Calendar, Phone, ChevronDown } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface HeroProps {
  onRentClick: () => void;
  onVisiMisiClick?: () => void;
  lang: 'ID' | 'EN';
}

export default function Hero({ onRentClick, onVisiMisiClick, lang }: HeroProps) {
  const [name, setName] = useState('');
  const [origin, setOrigin] = useState('Agrabinta (Cianjur Selatan)');
  const [destination, setDestination] = useState('Jakarta / Jabodetabek');
  const [passengers, setPassengers] = useState('1 Orang');

  const t = TRANSLATIONS[lang];

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waNumber = '6285864335465';
    const textTemplate = `Halo AGRA NGAHIJI TRANS, saya ingin pesan tiket travel / sewa mobil:

📋 *INFO PEMESANAN:*
• Nama: *${name || 'Calon Penumpang'}*
• Asal Penjemputan: *${origin}*
• Tujuan Pengantaran: *${destination}*
• Jumlah Penumpang: *${passengers}*

Mohon informasi jadwal keberangkatan & ketersediaan tempat. Terima kasih!`;

    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(textTemplate)}`;
    window.open(waUrl, '_blank', 'noreferrer');
  };

  const handleWhatsAppPesanBtn = () => {
    const waNumber = '6285864335465';
    const text = encodeURIComponent('Halo AGRA NGAHIJI TRANS, saya berminat pesan tiket travel / sewa mobil rute Cianjur Selatan - Jabodetabek - Bandung. Mohon info lengkap.');
    window.open(`https://wa.me/${waNumber}?text=${text}`, '_blank', 'noreferrer');
  };

  const handleScrollToRoutes = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-28 sm:pt-36 pb-12 bg-white text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Card Container */}
        <div className="relative rounded-[32px] overflow-hidden bg-slate-950 shadow-2xl p-6 sm:p-10 lg:p-12 border border-slate-800 text-white">
          
          {/* Background Fleet Showcase Image Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30 scale-105 pointer-events-none transition-transform duration-700"
            style={{ backgroundImage: `url('/team_red.avif')` }}
          />
          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/60 pointer-events-none" />

          {/* Core Content Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* LEFT COLUMN: HEADLINE & SUBTITLE & CTA BUTTONS */}
            <div className="lg:col-span-7 space-y-6 text-left" id="hero-text-container">
              
              {/* Tag Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/30 border border-red-500/40 text-red-400 text-xs font-bold uppercase tracking-wider">
                <span>AGRA NGAHIJI TRANS</span>
              </div>

              {/* Bold Large Headline */}
              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight"
              >
                Solusi Perjalanan Aman, <br />
                <span className="text-[#20ba59]">Nyaman & Terpercaya</span>
              </motion.h1>

              {/* Sub-headline Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl font-normal opacity-90"
              >
                Melayani Jasa Angkutan Sewa Khusus, Travel Antar-Kota, & Door-to-Door Service rute Agrabinta (Cianjur Selatan), Pelabuhanratu, Puncak, Bandung, Jakarta (Jabodetabek), dan sekitarnya.
              </motion.p>

              {/* Two CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-3 pt-2"
              >
                {/* Red Pesan Button */}
                <button
                  onClick={handleWhatsAppPesanBtn}
                  className="bg-red-600 hover:bg-red-700 text-white font-sans font-bold text-sm px-6 py-3 rounded-full shadow-lg shadow-red-600/30 transition-all duration-200 cursor-pointer flex items-center gap-2 border border-red-500/20 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                  <span>Pesan Sekarang</span>
                </button>

                {/* Light Button */}
                <button
                  onClick={handleScrollToRoutes}
                  className="bg-slate-100 hover:bg-white text-slate-800 font-sans font-bold text-sm px-7 py-3 rounded-full transition-all duration-200 cursor-pointer shadow-sm hover:shadow active:scale-95 border border-slate-200"
                >
                  <span>Rute & Layanan</span>
                </button>
              </motion.div>

            </div>

            {/* RIGHT COLUMN: FLOATING WHITE BOOKING CARD */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white text-slate-900 rounded-[24px] p-6 sm:p-7 shadow-2xl border border-slate-100 text-left relative overflow-hidden"
              >
                {/* Card Title Bar */}
                <div className="flex items-center gap-2.5 pb-4 mb-5 border-b border-slate-100">
                  <Ticket className="w-5 h-5 text-red-600 shrink-0" />
                  <h3 className="font-display font-bold text-base text-slate-800 tracking-tight">
                    Cek Reservasi Cepat
                  </h3>
                </div>

                {/* Interactive Booking Form */}
                <form onSubmit={handleQuickSubmit} className="space-y-4 font-sans text-xs">
                  
                  {/* Nama Anda Input */}
                  <div className="space-y-1.5">
                    <label className="block font-semibold text-slate-600 text-xs">
                      Nama Anda
                    </label>
                    <input
                      type="text"
                      placeholder="Masukkan nama anda"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:bg-white focus:outline-none text-slate-800 font-medium transition-all text-xs"
                    />
                  </div>

                  {/* Asal & Tujuan Inputs */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label className="block font-semibold text-slate-600 text-xs">
                        Asal Penjemputan
                      </label>
                      <select
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)}
                        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:bg-white focus:outline-none text-slate-800 font-semibold cursor-pointer transition-all text-xs"
                      >
                        <option value="Agrabinta (Cianjur Selatan)">Agrabinta (Cianjur Selatan)</option>
                        <option value="Pelabuhanratu">Pelabuhanratu</option>
                        <option value="Jalur Puncak">Jalur Puncak</option>
                        <option value="Bandung">Bandung</option>
                        <option value="Jakarta / Jabodetabek">Jakarta / Jabodetabek</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block font-semibold text-slate-600 text-xs">
                        Tujuan Pengantaran
                      </label>
                      <select
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:bg-white focus:outline-none text-slate-800 font-semibold cursor-pointer transition-all text-xs"
                      >
                        <option value="Jakarta / Jabodetabek">Jakarta / Jabodetabek</option>
                        <option value="Bandung">Bandung</option>
                        <option value="Pelabuhanratu">Pelabuhanratu</option>
                        <option value="Jalur Puncak">Jalur Puncak</option>
                        <option value="Agrabinta (Cianjur Selatan)">Agrabinta (Cianjur Selatan)</option>
                      </select>
                    </div>
                  </div>

                  {/* Jumlah Penumpang Select */}
                  <div className="space-y-1.5">
                    <label className="block font-semibold text-slate-600 text-xs">
                      Jumlah Penumpang / Carter
                    </label>
                    <select
                      value={passengers}
                      onChange={(e) => setPassengers(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:bg-white focus:outline-none text-slate-800 font-semibold cursor-pointer transition-all text-xs"
                    >
                      <option value="1 Orang">1 Orang (Reguler)</option>
                      <option value="2 Orang">2 Orang (Reguler)</option>
                      <option value="3 Orang">3 Orang (Reguler)</option>
                      <option value="4+ Orang / Carter Privat Mobil">4+ Orang / Carter Privat Mobil</option>
                    </select>
                  </div>

                  {/* Full-width Red Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-sans font-bold text-sm py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer border border-red-500/20 active:scale-98"
                    >
                      Pesan Sekarang via WA
                    </button>
                  </div>

                </form>
              </motion.div>
            </div>

          </div>

        </div>

        {/* FLOATING DOWN ARROW BUTTON: Profil Selengkapnya */}
        <div className="pt-8 flex justify-center">
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={onVisiMisiClick}
            className="group flex flex-col items-center gap-1.5 cursor-pointer focus:outline-none"
            id="hero-floating-profil-btn"
          >
            <span className="font-sans font-bold text-xs sm:text-sm text-slate-700 group-hover:text-red-600 transition-colors bg-white/95 px-5 py-1.5 rounded-full border border-slate-200 shadow-sm group-hover:shadow-md group-hover:border-red-200">
              Profil & Visi Misi
            </span>
            <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center shadow-md group-hover:bg-red-700 group-hover:scale-110 transition-all animate-bounce">
              <ChevronDown className="w-5 h-5" />
            </div>
          </motion.button>
        </div>

      </div>
    </section>
  );
}
