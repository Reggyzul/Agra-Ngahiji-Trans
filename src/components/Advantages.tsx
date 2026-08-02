import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Banknote, 
  Car, 
  CheckCircle2, 
  MessageCircle, 
  Sparkles,
  HeartHandshake
} from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface AdvantagesProps {
  onBookClick?: () => void;
  lang?: 'ID' | 'EN';
}

export default function Advantages({ onBookClick, lang = 'ID' }: AdvantagesProps) {
  const t = TRANSLATIONS[lang];

export default function Advantages({ onBookClick, lang = 'ID' }: AdvantagesProps) {
  const t = TRANSLATIONS[lang];

  const advantagesList = [
    {
      id: 'keselamatan-nomor-satu',
      icon: <ShieldCheck className="w-7 h-7 text-red-600" />,
      badge: 'Prioritas Utama',
      badgeBg: 'bg-red-50 text-red-700 border-red-200',
      title: 'Keselamatan Nomor Satu',
      description: 'Menyediakan armada (Avanza, Luxio, Calya, Sigra) yang selalu terawat, laik jalan, bersih, wangi, ber-AC dingin, dan ditangani oleh pengemudi handal berpengalaman.',
      highlights: ['Armada Terawat & Laik Jalan', 'Bersih, Wangi & AC Cold', 'Pengemudi Handal Berpengalaman']
    },
    {
      id: 'door-to-door',
      icon: <MapPin className="w-7 h-7 text-amber-600" />,
      badge: 'Bebas Repot',
      badgeBg: 'bg-amber-50 text-amber-800 border-amber-200',
      title: 'Layanan Antar-Jemput (Door-to-Door)',
      description: 'Memberikan kemudahan penjemputan langsung dari lokasi asal hingga diantar tepat ke lokasi tujuan tanpa perlu ganti armada.',
      highlights: ['Jemput Langsung di Alamat Asal', 'Pengantaran Sampai Lokasi Tujuan', 'Layanan Reguler & Carter Drop']
    },
    {
      id: 'tepat-waktu',
      icon: <Clock className="w-7 h-7 text-teal-600" />,
      badge: 'Jadwal Terjamin',
      badgeBg: 'bg-teal-50 text-teal-700 border-teal-200',
      title: 'Tepat Waktu & Fleksibel',
      description: 'Menjaga komitmen jadwal keberangkatan untuk kenyamanan para penglaju dan wisatawan di rute Cianjur Selatan – Jabodetabek – Bandung.',
      highlights: ['Komitmen Jam Keberangkatan', 'Fleksibel Rute Custom', 'Pengemudi Santun & Tangkas']
    },
    {
      id: 'tarif-transparan',
      icon: <Banknote className="w-7 h-7 text-emerald-600" />,
      badge: 'Harga Jujur',
      badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      title: 'Tarif Terjangkau & Transparan',
      description: 'Menawarkan harga sewa/tiket yang kompetitif dan jujur mulai dari Rp 150.000 tanpa biaya tersembunyi atau tambahan tidak jelas.',
      highlights: ['Mulai dari Rp 150.000', 'Tanpa Biaya Tersembunyi', 'Respon CS 24 Jam']
    }
  ];

  const handleWhatsAppConsultation = (title: string) => {
    const waNumber = '6285864335465';
    const message = `Halo AGRA NGAHIJI TRANS, saya ingin bertanya info selengkapnya mengenai layanan: ${title}. Terima kasih!`;
    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  return (
    <section id="advantages" className="py-20 bg-white text-[#0f172a] relative overflow-hidden border-b border-slate-200">
      
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#0b192c_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3" id="advantages-heading">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 font-display font-extrabold text-xs uppercase tracking-wider shadow-sm">
            <Sparkles className="w-4 h-4 text-red-600" />
            <span>MENGAPA MEMILIH AGRA NGAHIJI TRANS</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#0f172a] tracking-tight uppercase leading-tight">
            Keunggulan Layanan <span className="text-red-600">AGRA NGAHIJI TRANS</span>
          </h2>

          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Komitmen terbaik kami untuk memberikan pengalaman perjalanan yang aman, nyaman, dan terpercaya di rute Cianjur Selatan – Jabodetabek – Bandung.
          </p>
        </div>

        {/* 4 Grid Advantages Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantagesList.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              key={item.id}
              className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-md hover:shadow-2xl hover:border-red-400 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Card Top Glow Accent */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="space-y-4 text-left">
                {/* Badge & Icon Row */}
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider border ${item.badgeBg}`}>
                    {item.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="font-display font-black text-lg text-[#0f172a] group-hover:text-red-600 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-slate-600 leading-relaxed mt-2 font-medium">
                    {item.description}
                  </p>
                </div>

                {/* Checklist Bullet Points */}
                <div className="pt-2 space-y-1.5 border-t border-slate-100">
                  {item.highlights.map((point, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Quick Action */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">CS 24 Jam</span>
                <button
                  onClick={() => handleWhatsAppConsultation(item.title)}
                  className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Tanya CS</span>
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Highlighted Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden text-left border border-slate-800"
          id="advantages-guarantee-banner"
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/30 text-red-400 text-xs font-bold uppercase tracking-wider">
                <HeartHandshake className="w-4 h-4 text-red-400" />
                <span>KOMITMEN AGRA NGAHIJI TRANS</span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight uppercase">
                Siap Melayani Perjalanan Anda 24 Jam
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                Pesan tiket perjalanan atau sewa carter privat via WhatsApp Fast Response (0858-6433-5465 / 0857-9871-2377).
              </p>
            </div>

            <a
              href="https://wa.me/6285864335465?text=Halo%20AGRA%20NGAHIJI%20TRANS,%20saya%20ingin%20pesan%20tiket%20travel%20/%20sewa%20mobil"
              target="_blank"
              rel="noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white font-sans font-extrabold text-xs uppercase px-7 py-3.5 rounded-2xl shadow-xl transition-all flex items-center gap-2 shrink-0 cursor-pointer"
            >
              <MessageCircle className="w-4.5 h-4.5 fill-current" />
              <span>Hubungi WA (0858-6433-5465)</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
