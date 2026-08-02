import React from 'react';
import { motion } from 'motion/react';
import { Plane, Anchor, MapPin, Building2, Route, Compass, Landmark, Car, CheckCircle2 } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface ServicesProps {
  lang: 'ID' | 'EN';
}

export default function Services({ lang }: ServicesProps) {
  const t = TRANSLATIONS[lang];

  const handleWhatsAppBooking = (routeTitle: string) => {
    const waNumber = '6285864335465';
    const message = `Halo AGRA NGAHIJI TRANS, saya berminat memesan tiket travel / sewa mobil rute: ${routeTitle}. Mohon info jam keberangkatan & tarif. Terima kasih!`;
    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  const routesList = [
    {
      id: 'rute-1',
      icon: <MapPin className="w-5 h-5 text-red-600" />,
      badge: 'RUTE POPULER',
      title: 'Agrabinta ⇆ Pelabuhanratu ⇆ Jakarta',
      subtitle: 'Door-to-Door / Drop Off / Carter / Reguler',
      description: 'Layanan travel antar-kota menghubungkan Agrabinta (Cianjur Selatan), Pelabuhanratu, hingga Jakarta (Jabodetabek).',
      tag: 'Door to Door'
    },
    {
      id: 'rute-2',
      icon: <Route className="w-5 h-5 text-red-600" />,
      badge: 'JALUR PUNCAK',
      title: 'Agrabinta ⇆ Jalur Puncak ⇆ Jakarta',
      subtitle: 'Door-to-Door / Reguler & Carter',
      description: 'Perjalanan aman & nyaman melalui jalur Puncak menghubungkan Cianjur Selatan ke Jakarta dan sekitarnya.',
      tag: 'Door to Door'
    },
    {
      id: 'rute-3',
      icon: <Building2 className="w-5 h-5 text-red-600" />,
      badge: 'RUTE BANDUNG',
      title: 'Agrabinta ⇆ Bandung ⇆ Jakarta',
      subtitle: 'Shuttle Reguler & Drop Off Alamat',
      description: 'Menghubungkan Agrabinta Cianjur Selatan langsung ke Kota Bandung dan Jakarta dengan waktu perjalanan efisien.',
      tag: 'Door to Door'
    },
    {
      id: 'rute-4',
      icon: <Compass className="w-5 h-5 text-red-600" />,
      badge: 'FLEKSIBEL',
      title: 'Custom Route (Rute Khusus & Carteran)',
      subtitle: 'Carter Privat 1 Mobil Full Rombongan',
      description: 'Sewa carter fleksibel bebas tentukan jam keberangkatan & rute tujuan sesuai kebutuhan Anda.',
      tag: 'Carter Privat'
    },
    {
      id: 'door-to-door',
      icon: <Landmark className="w-5 h-5 text-red-600" />,
      badge: 'JEMPUT ALAMAT',
      title: 'Layanan Antar-Jemput (Door-to-Door)',
      subtitle: 'Langsung dari Rumah ke Tempat Tujuan',
      description: 'Kemudahan penjemputan langsung di depan pintu rumah asal hingga diantar tepat di lokasi tujuan.',
      tag: 'Bebas Repot'
    },
    {
      id: 'drop-off',
      icon: <Car className="w-5 h-5 text-red-600" />,
      badge: 'DROP OFF',
      title: 'Drop Off Bandara, Stasiun & Pelabuhan',
      subtitle: 'Penjemputan / Antar 24 Jam Non-Stop',
      description: 'Layanan drop off cepat dan tepat waktu ke Bandara Soekarno-Hatta, Halim, Stasiun, atau Pelabuhanratu.',
      tag: '24 Jam Standby'
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50 text-slate-900 overflow-hidden relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2" id="services-heading">
          <span className="font-display font-bold text-xs uppercase tracking-widest text-red-600 block">
            RUTE UTAMA & LAYANAN PERJALANAN
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
            Rute Perjalanan <span className="text-red-600">AGRA NGAHIJI TRANS</span>
          </h2>
          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Melayani pengantaran & penjemputan Door-to-Door, Drop Off, Carter Privat, maupun Reguler rute Agrabinta, Pelabuhanratu, Puncak, Bandung, dan Jabodetabek.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {routesList.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              key={item.id}
              className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-red-200 transition-all duration-300 flex flex-col justify-between group text-left relative overflow-hidden"
            >
              <div className="space-y-4">
                
                {/* Header Icon + Badge Row */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-extrabold text-slate-500 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-wider border border-slate-200/60">
                    {item.badge}
                  </span>
                </div>

                {/* Title & Red Subtitle */}
                <div>
                  <h3 className="font-display font-bold text-base text-slate-900 group-hover:text-red-600 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-red-600 font-bold mt-1">
                    {item.subtitle}
                  </p>
                </div>

                {/* Description Text */}
                <p className="font-sans text-xs text-slate-500 leading-relaxed font-medium">
                  {item.description}
                </p>

              </div>

              {/* Card Footer */}
              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-1 text-xs font-medium text-emerald-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>{item.tag}</span>
                </div>

                <button
                  onClick={() => handleWhatsAppBooking(item.title)}
                  className="bg-red-600 hover:bg-red-700 text-white font-sans font-bold text-xs py-2 px-4 rounded-full shadow-md transition-all duration-200 cursor-pointer active:scale-95 border border-red-500/20"
                >
                  Pesan Rute
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
