import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Sparkles, CheckCircle2, Award, HeartHandshake, Eye, Zap, Shield, Target, MapPin } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface AboutProps {
  lang: 'ID' | 'EN';
}

export default function About({ lang }: AboutProps) {
  const t = TRANSLATIONS[lang];

  return (
    <section id="about" className="py-20 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-white text-[#0f172a] overflow-hidden relative border-b border-slate-200">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
        
        {/* Section Heading Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2" id="about-heading">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
export default function About({ lang }: AboutProps) {
  const t = TRANSLATIONS[lang];

  return (
    <section id="about" className="py-20 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-white text-[#0f172a] overflow-hidden relative border-b border-slate-200">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
        
        {/* Section Heading Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2" id="about-heading">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-['Great_Vibes'] text-4xl sm:text-5xl text-red-600 font-normal block leading-tight">
              About AGRA NGAHIJI TRANS
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-4xl text-[#0f172a] tracking-tight uppercase leading-tight"
          >
            Profil, Visi & <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-amber-600 to-red-700">Misi Perusahaan</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed font-medium max-w-2xl mx-auto pt-1"
          >
            Mengenal identitas, komitmen, serta Visi & Misi utama AGRA NGAHIJI TRANS sebagai penyedia Jasa Angkutan Sewa Khusus, Travel Antar-Kota, & Door-to-Door Service terdepan.
          </motion.p>
        </div>

        {/* 1. PROFIL PERUSAHAAN */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden space-y-8 text-left"
        >
          <div className="border-b border-slate-100 pb-5">
            <span className="font-['Great_Vibes'] text-3xl sm:text-4xl text-red-600 font-normal block leading-tight">
              Identitas Usaha & Layanan
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-[#0f172a] uppercase tracking-tight">
              Profil Perusahaan <span className="text-red-600">AGRA NGAHIJI TRANS</span>
            </h3>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
              Jasa Angkutan Sewa Khusus, Travel Antar-Kota, & Door-to-Door Service
            </p>
          </div>

          <div className="space-y-4 text-slate-700 font-sans text-sm sm:text-base leading-relaxed font-medium">
            <p>
              <strong className="text-[#0f172a] font-bold">AGRA NGAHIJI TRANS</strong> adalah penyedia jasa angkutan sewa khusus, travel antar-kota, dan door-to-door service yang berpusat di <strong className="text-slate-900 font-bold">Kp. Sukajadi, Desa Mekarsari, Kec. Agrabinta, Kab. Cianjur, Jawa Barat</strong>.
            </p>
            <p>
              Dengan slogan <strong className="text-red-600 italic">"Solusi Perjalanan Aman, Nyaman, dan Terpercaya Selatan Cianjur – Jabodetabek – Bandung"</strong>, kami hadir melayani kebutuhan transportasi harian penglaju, keluarga, rombongan, serta wisatawan dengan wilayah operasional utama melingkupi <strong className="text-slate-900 font-bold">Agrabinta (Cianjur Selatan), Pelabuhanratu, Puncak, Bandung, Jakarta (Jabodetabek)</strong>, dan sekitarnya.
            </p>
            <p>
              Kami mengoperasikan unit armada terawat seperti <strong className="text-red-600 font-bold">Toyota Avanza</strong>, <strong className="text-red-600 font-bold">Daihatsu Luxio</strong>, <strong className="text-red-600 font-bold">Toyota Calya</strong>, dan <strong className="text-red-600 font-bold">Daihatsu Sigra</strong>. Semua unit selalu dalam kondisi bersih, wangi, ber-AC dingin, dan siap melayani perjalanan jarak jauh secara optimal.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-red-50/60 border border-red-100 flex items-start gap-3">
              <Award className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-display font-bold text-xs uppercase text-[#0f172a] block">Keselamatan Utama</span>
                <span className="text-[11px] text-slate-600 font-medium block mt-0.5">Armada selalu terawat & laik jalan</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <Zap className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-display font-bold text-xs uppercase text-[#0f172a] block">Tepat Waktu & Fleksibel</span>
                <span className="text-[11px] text-slate-600 font-medium block mt-0.5">Komitmen jadwal keberangkatan</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <HeartHandshake className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-display font-bold text-xs uppercase text-[#0f172a] block">Layanan Door-to-Door</span>
                <span className="text-[11px] text-slate-600 font-medium block mt-0.5">Penjemputan langsung ke lokasi asal</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. VISI & MISI PERUSAHAAN */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden space-y-8 text-left"
        >
          <div className="border-b border-slate-100 pb-5">
            <span className="font-['Great_Vibes'] text-3xl sm:text-4xl text-red-600 font-normal block leading-tight">
              Vision & Mission
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-[#0f172a] uppercase tracking-tight">
              Visi & Misi <span className="text-red-600">AGRA NGAHIJI TRANS</span>
            </h3>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
              Mengutamakan Keselamatan, Ketepatan Waktu, dan Kenyamanan Penumpang
            </p>
          </div>

          {/* VISI BOX */}
          <div className="space-y-3">
            <h4 className="font-display font-extrabold text-base sm:text-lg text-[#0f172a] uppercase tracking-tight flex items-center gap-2">
              <Target className="w-5 h-5 text-red-600" />
              <span>VISI PERUSAHAAN</span>
            </h4>
            <div className="bg-gradient-to-br from-red-50/70 via-slate-50 to-white border-l-4 border-red-600 p-5 sm:p-6 rounded-r-2xl border-y border-r border-slate-200/80 shadow-xs">
              <p className="font-sans text-sm sm:text-base text-slate-800 leading-relaxed font-bold italic">
                "Menjadi penyedia jasa angkutan sewa khusus dan travel terdepan di wilayah Cianjur Selatan yang mengutamakan keselamatan, ketepatan waktu, dan kenyamanan penumpang."
              </p>
            </div>
          </div>

          {/* MISI LIST */}
          <div className="space-y-4 pt-2">
            <h4 className="font-display font-extrabold text-base sm:text-lg text-[#0f172a] uppercase tracking-tight flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-red-600" />
              <span>MISI UTAMA PERUSAHAAN</span>
            </h4>

            <div className="space-y-3">
              
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-red-200 transition-colors">
                <span className="text-red-600 font-extrabold text-lg mt-0.5 shrink-0">✓</span>
                <div>
                  <strong className="font-display font-bold text-sm text-[#0f172a] uppercase tracking-wide block">
                    1. Keselamatan Nomor Satu
                  </strong>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mt-1">
                    Menyediakan armada yang selalu terawat, laik jalan, dan ditangani oleh pengemudi handal berpengalaman.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-red-200 transition-colors">
                <span className="text-red-600 font-extrabold text-lg mt-0.5 shrink-0">✓</span>
                <div>
                  <strong className="font-display font-bold text-sm text-[#0f172a] uppercase tracking-wide block">
                    2. Layanan Antar-Jemput (Door-to-Door)
                  </strong>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mt-1">
                    Memberikan kemudahan penjemputan langsung dari lokasi asal hingga ke tempat tujuan secara praktis dan efisien.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-red-200 transition-colors">
                <span className="text-red-600 font-extrabold text-lg mt-0.5 shrink-0">✓</span>
                <div>
                  <strong className="font-display font-bold text-sm text-[#0f172a] uppercase tracking-wide block">
                    3. Tepat Waktu & Fleksibel
                  </strong>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mt-1">
                    Menjaga komitmen jadwal keberangkatan untuk kenyamanan para penglaju dan wisatawan.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-red-200 transition-colors">
                <span className="text-red-600 font-extrabold text-lg mt-0.5 shrink-0">✓</span>
                <div>
                  <strong className="font-display font-bold text-sm text-[#0f172a] uppercase tracking-wide block">
                    4. Tarif Terjangkau & Transparan
                  </strong>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mt-1">
                    Menawarkan harga sewa/tiket yang kompetitif dan jujur tanpa biaya tersembunyi (mulai dari Rp 150.000).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-red-200 transition-colors">
                <span className="text-red-600 font-extrabold text-lg mt-0.5 shrink-0">✓</span>
                <div>
                  <strong className="font-display font-bold text-sm text-[#0f172a] uppercase tracking-wide block">
                    5. Pelayanan Pelanggan Prima
                  </strong>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mt-1">
                    Melayani pemesanan dengan ramah, cepat, dan responsif selama 24 jam (0858-6433-5465 / 0857-9871-2377).
                  </p>
                </div>
              </div>

            </div>
          </div>

        </motion.div>

        {/* 3. LOKASI KANTOR & WILAYAH OPERASIONAL */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden text-left space-y-6 border border-slate-800"
        >
          <div>
            <span className="font-['Great_Vibes'] text-3xl sm:text-4xl text-red-500 font-normal block leading-tight">
              Coverage & Office
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
              Wilayah Operasional & <span className="text-red-500">Lokasi Kantor</span>
            </h3>
            <p className="text-xs text-slate-300 font-medium mt-1">
              Melayani Penjemputan Door-to-Door Kawasan Cianjur Selatan, Bandung, & Jabodetabek
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="flex items-center gap-2.5 text-red-400 font-bold text-sm uppercase">
                <MapPin className="w-5 h-5 text-red-500 shrink-0" />
                <span>Alamat Garasi & Kantor Resmi</span>
              </div>
              <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                Kp. Sukajadi, Desa Mekarsari, Kec. Agrabinta, Kab. Cianjur, Jawa Barat.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="flex items-center gap-2.5 text-amber-400 font-bold text-sm uppercase">
                <Shield className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Wilayah Operasional Utama</span>
              </div>
              <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                Agrabinta (Cianjur Selatan), Pelabuhanratu, Puncak, Bandung, Jakarta (Jabodetabek), dan sekitarnya.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
      </div>
    </section>
  );
}
