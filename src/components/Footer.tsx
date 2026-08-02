import React from 'react';
import { Phone, MapPin, MessageCircle, Facebook, Clock, ShieldCheck, Globe } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface FooterProps {
  onNavClick: (sectionId: string) => void;
  lang: 'ID' | 'EN';
}

export default function Footer({ onNavClick, lang }: FooterProps) {
  const t = TRANSLATIONS[lang];

  return (
    <footer id="contact" className="bg-[#0f172a] text-white pt-20 pb-8 border-t border-slate-800 relative overflow-hidden text-left">
      
      {/* Absolute top accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-amber-500 to-red-700" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Upper pre-footer callout section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-12 border-b border-slate-800 items-center">
          <div className="space-y-2">
            <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-white">
              AGRA NGAHIJI <span className="text-red-600">TRANS</span>
            </h3>
            <p className="font-sans text-sm text-slate-300 font-medium">
              "Solusi Perjalanan Aman, Nyaman, dan Terpercaya Selatan Cianjur – Jabodetabek – Bandung"
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-start md:justify-end gap-3">
            <a
              href="https://wa.me/6285864335465?text=Halo%20AGRA%20NGAHIJI%20TRANS,%20saya%20ingin%20tanya%20jadwal%20dan%20pemesanan%20rute%20travel"
              target="_blank"
              rel="noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white font-sans font-extrabold text-xs uppercase px-6 py-3.5 rounded-2xl shadow-lg transition-all flex items-center gap-2.5 cursor-pointer border border-red-500/30 hover:scale-105"
            >
              <MessageCircle className="w-4.5 h-4.5 fill-current" />
              <span>WA 1: 0858-6433-5465</span>
            </a>
            <a
              href="https://wa.me/6285798712377?text=Halo%20AGRA%20NGAHIJI%20TRANS,%20saya%20ingin%20tanya%20jadwal%20dan%20pemesanan%20rute%20travel"
              target="_blank"
              rel="noreferrer"
              className="bg-slate-800 hover:bg-slate-700 text-white font-sans font-extrabold text-xs uppercase px-6 py-3.5 rounded-2xl shadow-lg transition-all flex items-center gap-2.5 cursor-pointer border border-slate-700 hover:scale-105"
            >
              <Phone className="w-4.5 h-4.5 text-green-400" />
              <span>WA 2: 0857-9871-2377</span>
            </a>
          </div>
        </div>

        {/* Core Footer grid columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-16 pb-12">
          
          {/* Column 1: Brand & Office Address */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-white p-3.5 sm:p-4 rounded-2xl shadow-xl border border-white/20 inline-block group hover:scale-105 transition-transform duration-300">
                <img 
                  src="/logo.png" 
                  alt="AGRA NGAHIJI TRANS Logo" 
                  className="h-14 sm:h-16 w-auto object-contain"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
              <div>
                <span className="font-display font-black text-xl text-white block tracking-tight">
                  AGRA NGAHIJI <span className="text-red-600">TRANS</span>
                </span>
                <span className="text-xs text-slate-400 font-semibold block">
                  Jasa Angkutan Sewa Khusus & Travel
                </span>
              </div>
            </div>

            <p className="font-sans text-xs text-slate-400 leading-relaxed max-w-sm font-medium">
              Melayani Jasa Angkutan Sewa Khusus, Travel Antar-Kota, & Door-to-Door Service rute Agrabinta (Cianjur Selatan), Pelabuhanratu, Puncak, Bandung, Jakarta (Jabodetabek), dan sekitarnya.
            </p>

            <div className="text-xs text-slate-300 font-sans space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4.5 h-4.5 text-red-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <strong className="text-white">Alamat Kantor & Garasi:</strong><br />
                  Kp. Sukajadi, Desa Mekarsari, Kec. Agrabinta, Kab. Cianjur, Jawa Barat.
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4.5 h-4.5 text-green-400 shrink-0" />
                <span>CS Fast Response: <strong className="text-white">0858-6433-5465</strong> / <strong className="text-white">0857-9871-2377</strong></span>
              </div>

              <div className="flex items-center gap-2.5">
                <Globe className="w-4.5 h-4.5 text-teal-400 shrink-0" />
                <span>Media Sosial & Linktree: <a href="https://linktr.ee/linktravelagra" target="_blank" rel="noreferrer" className="text-teal-400 font-bold hover:underline">Link Travel Agra</a></span>
              </div>

              <p className="pt-2 text-slate-500 text-[11px]">©2026 AGRA NGAHIJI TRANS. Semua Hak Dilindungi.</p>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-extrabold text-sm tracking-widest text-red-500 uppercase border-l-2 border-red-600 pl-2.5">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2.5 text-xs font-sans text-slate-400 font-medium">
              <li>
                <button onClick={() => onNavClick('home')} className="hover:text-red-500 transition-colors cursor-pointer text-left w-full">
                  • Beranda utama
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('about')} className="hover:text-red-500 transition-colors cursor-pointer text-left w-full">
                  • Profil, Visi & Misi Perusahaan
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('services')} className="hover:text-red-500 transition-colors cursor-pointer text-left w-full">
                  • Rute & Layanan Perjalanan
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('cars')} className="hover:text-red-500 transition-colors cursor-pointer text-left w-full">
                  • Armada (Avanza, Luxio, Calya, Sigra)
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('advantages')} className="hover:text-red-500 transition-colors cursor-pointer text-left w-full">
                  • Keunggulan Layanan
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Location Map */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-extrabold text-sm tracking-widest text-red-500 uppercase border-l-2 border-red-600 pl-2.5">
              Customer Service 24 Jam
            </h4>

            <div className="bg-slate-800/90 p-4 rounded-2xl border border-slate-700 space-y-2.5">
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-green-400 shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">WhatsApp Fast Response 1</span>
                  <a href="https://wa.me/6285864335465" target="_blank" rel="noreferrer" className="font-display font-black text-lg text-white hover:text-green-400 transition-colors">
                    0858-6433-5465
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 border-t border-slate-700/80 pt-2">
                <MessageCircle className="w-5 h-5 text-green-400 shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">WhatsApp Fast Response 2</span>
                  <a href="https://wa.me/6285798712377" target="_blank" rel="noreferrer" className="font-display font-black text-lg text-white hover:text-green-400 transition-colors">
                    0857-9871-2377
                  </a>
                </div>
              </div>
            </div>

            <a 
              href="https://linktr.ee/linktravelagra" 
              target="_blank" 
              rel="noreferrer"
              className="bg-slate-800/90 hover:bg-slate-800 p-4 rounded-2xl border border-slate-700 space-y-1 block transition-colors group cursor-pointer"
            >
              <div className="flex items-center gap-2 text-teal-400 font-bold text-xs uppercase">
                <Globe className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" />
                <span>Linktree & Sosmed Resmi</span>
              </div>
              <p className="text-xs text-slate-300 font-medium">
                Klik untuk akses: <strong className="text-white group-hover:text-teal-300 transition-colors">Link Travel Agra</strong>
              </p>
            </a>

            {/* Embedded Google Map Agrabinta Cianjur */}
            <div className="pt-2">
              <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-xl w-full h-36 bg-slate-900 relative">
                <iframe 
                  src="https://maps.google.com/maps?q=Agrabinta,+Cianjur,+Jawa+Barat&hl=id&z=13&output=embed"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi AGRA NGAHIJI TRANS Agrabinta Cianjur Jawa Barat"
                ></iframe>
              </div>
            </div>

          </div>

        </div>

        {/* Lower Disclaimer */}
        <div className="border-t border-slate-800 pt-8 text-center text-[11px] text-slate-500 font-sans leading-relaxed">
          {t.footer_disclaimer}
        </div>

      </div>
    </footer>
  );
}
