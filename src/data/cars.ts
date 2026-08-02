import { Car, Testimonial } from '../types';

import { Car, Testimonial } from '../types';

export const CARS: Car[] = [
  {
    id: 'toyota-avanza',
    name: 'Toyota Avanza',
    nameAr: 'تويوتا أفانزا',
    category: 'MPV Terfavorit',
    pricePerDay: 550000,
    priceDisplay: 'Mulai dari Rp 150.000 / org | Reguler & Carter',
    image: '/avanza.avif',
    seats: 7,
    transmission: 'Manual/Matic',
    fuel: 'Bensin (Irit & Handal)',
    includeList: [
      'Bersih, Wangi & Ber-AC Dingin Double Blower',
      'Kabin Nyaman & Kursi Reclining Ergonomis',
      'Audio Touchscreen, Bluetooth & USB Charger',
      'Siap Melayani Perjalanan Jarak Jauh',
      'Pengemudi Handal & Berpengalaman'
    ],
    description: 'MPV terfavorit, aman, dan nyaman untuk perjalanan keluarga maupun perjalanan dinas.',
    rating: 5.0,
    reviewsCount: 148,
    specifications: [
      { label: 'Kapasitas Penumpang', value: '7 Kursi Penumpang' },
      { label: 'Fasilitas Utama', value: 'AC Dingin Double Blower, Audio Touchscreen, USB Port' },
      { label: 'Kondisi Unit', value: 'Bersih, Wangi, Laik Jalan & Rutin Servis' },
      { label: 'Skema Biaya', value: 'Mulai dari Rp 150.000 (Reguler / Drop / Carter)' }
    ]
  },
  {
    id: 'daihatsu-luxio',
    name: 'Daihatsu Luxio',
    nameAr: 'دايهاتسو لوكسيو',
    category: 'Kabin Luas & Lega',
    pricePerDay: 600000,
    priceDisplay: 'Mulai dari Rp 150.000 / org | Carter Rombongan',
    image: '/apv.avif',
    seats: 8,
    transmission: 'Manual/Matic',
    fuel: 'Bensin (Bertenaga)',
    includeList: [
      'Bersih, Wangi & Ber-AC Dingin Merata',
      'Kabin Sangat Luas & Lega + Pintu Geser Praktis',
      'Kapasitas Barang Bawaan Banyak',
      'Siap Melayani Perjalanan Jarak Jauh',
      'Pengemudi Handal & Berpengalaman'
    ],
    description: 'Kabin luas dan lega, pintu geser praktis, cocok untuk perjalanan grup/bawaan barang banyak.',
    rating: 4.9,
    reviewsCount: 126,
    specifications: [
      { label: 'Kapasitas Penumpang', value: '8 Kursi Penumpang' },
      { label: 'Fasilitas Utama', value: 'Kabin Extra Wide, Pintu Geser, AC Double Blower, USB Port' },
      { label: 'Kondisi Unit', value: 'Bersih, Wangi, Laik Jalan & Rutin Servis' },
      { label: 'Skema Biaya', value: 'Mulai dari Rp 150.000 (Reguler / Drop / Carter)' }
    ]
  },
  {
    id: 'toyota-calya',
    name: 'Toyota Calya',
    nameAr: 'تويوتا كاليا',
    category: 'Hemat & Praktis',
    pricePerDay: 450000,
    priceDisplay: 'Mulai dari Rp 150.000 / org | Reguler & Privat',
    image: '/calya.avif',
    seats: 7,
    transmission: 'Manual/Matic',
    fuel: 'Bensin (Sangat Hemat)',
    includeList: [
      'Bersih, Wangi & Ber-AC Dingin',
      'Kabin Nyaman & Interior Terawat',
      'Audio System, Bluetooth & Port Charger',
      'Siap Melayani Perjalanan Jarak Jauh',
      'Pengemudi Handal & Berpengalaman'
    ],
    description: 'Hemat, praktis, dan nyaman untuk perjalanan pribadi maupun reguler.',
    rating: 4.9,
    reviewsCount: 114,
    specifications: [
      { label: 'Kapasitas Penumpang', value: '7 Kursi Penumpang' },
      { label: 'Fasilitas Utama', value: 'AC Sejuk, System Audio Bluetooth, USB Charger' },
      { label: 'Kondisi Unit', value: 'Bersih, Wangi, Laik Jalan & Rutin Servis' },
      { label: 'Skema Biaya', value: 'Mulai dari Rp 150.000 (Reguler / Drop / Carter)' }
    ]
  },
  {
    id: 'daihatsu-sigra',
    name: 'Daihatsu Sigra',
    nameAr: 'دايهاتسو سيغرا',
    category: 'MPV Ekonomis',
    pricePerDay: 450000,
    priceDisplay: 'Mulai dari Rp 150.000 / org | Reguler Antar-Kota',
    image: '/sigra.avif',
    seats: 7,
    transmission: 'Manual/Matic',
    fuel: 'Bensin (Ekonomis)',
    includeList: [
      'Bersih, Wangi & Ber-AC Dingin',
      'Kenyamanan Optimal Rute Antar-Kota',
      'Audio & USB Charger Port',
      'Siap Melayani Perjalanan Jarak Jauh',
      'Pengemudi Handal & Berpengalaman'
    ],
    description: 'MPV ekonomis dengan kenyamanan optimal untuk rute antar-kota.',
    rating: 4.8,
    reviewsCount: 98,
    specifications: [
      { label: 'Kapasitas Penumpang', value: '7 Kursi Penumpang' },
      { label: 'Fasilitas Utama', value: 'AC Dingin, Audio System, Charger Port' },
      { label: 'Kondisi Unit', value: 'Bersih, Wangi, Laik Jalan & Rutin Servis' },
      { label: 'Skema Biaya', value: 'Mulai dari Rp 150.000 (Reguler / Drop / Carter)' }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'H. Hendra Wijaya',
    role: 'Pengguna Jasa Travel Agrabinta - Jakarta',
    text: 'Sangat puas naik Agra Ngahiji Trans! Jemput door to door dari Kp. Sukajadi Agrabinta langsung diantar sampai lokasi di Jakarta. Mobil Avanza-nya bersih, wangi, AC dingin, driver sangat berpengalaman di rute Cianjur Selatan.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    carModel: 'Toyota Avanza',
    date: '2026-07-28'
  },
  {
    id: '2',
    name: 'Siti Nurjanah',
    role: 'Penglaju Agrabinta - Bandung',
    text: 'Pelayanan luar biasa dari AGRA NGAHIJI TRANS. Kami sewa Luxio untuk rombongan keluarga ke Bandung. Kabinnya luas banget, barang bawaan muat banyak, jam berangkat tepat waktu, harga terjangkau tanpa biaya tersembunyi.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    carModel: 'Daihatsu Luxio',
    date: '2026-07-22'
  },
  {
    id: '3',
    name: 'Asep Kusnandar',
    role: 'Pelanggan Carter Agrabinta - Pelabuhanratu',
    text: 'Pelayanan ramah 24 jam fast response via WhatsApp. Carter mobil Calya untuk urusan bisnis dari Agrabinta ke Pelabuhanratu lancar dan nyaman sekali. Recomended banget untuk travel Cianjur Selatan!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    carModel: 'Toyota Calya',
    date: '2026-07-18'
  }
];

