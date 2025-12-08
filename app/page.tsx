'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Menu, 
  X, 
  ArrowRight, 
  BookOpen, 
  Users, 
  Calendar, 
  Instagram, 
  Facebook, 
  Youtube,
  GraduationCap,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

/**
 * PROJECT STRUCTURE GUIDE (For your Next.js App)
 * ------------------------------------------------
 * /app
 * layout.tsx       -> Global font (Poppins), metadata
 * page.tsx         -> The Main Landing Page (Components assembled)
 * globals.css      -> Tailwind directives & Custom CSS vars
 * /components
 * /ui              -> Buttons, Cards
 * /layout          -> Navbar, Footer
 * /sections        -> Hero, BentoGrid, NewsScroll
 * /public
 * /assets          -> Images, SVGs
 */

// --- GLOBAL STYLES & CONFIG ---
// In Next.js, use 'next/font/google' for Poppins
const COLORS = {
  primary: '#800000', // Deep Maroon
  accent: '#006633',  // Emerald Green
  bg: '#F3F4F6',      // Light Gray
  white: '#FFFFFF'
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tentang', href: '#profile' },
    { name: 'Akademik', href: '#bento' },
    { name: 'Berita', href: '#news' },
    { name: 'Kontak', href: '#footer' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200 py-4 shadow-sm' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Area */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center">
            <img src="/icon.png" alt="Logo Yayasan" className="w-full h-full object-contain" />
          </div>
          <span className={`font-bold text-xl tracking-tight ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
            Yayasan Ashabul Quran
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium hover:opacity-70 transition-opacity ${
                isScrolled ? 'text-gray-600' : 'text-gray-200'
              }`}
            >
              {link.name}
            </a>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2.5 rounded-full bg-[#006633] text-white text-sm font-semibold shadow-lg shadow-green-900/20 flex items-center gap-2"
          >
            PPDB Online <ArrowRight size={16} />
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-200 overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-800"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#800000]">
      {/* Background Video Placeholder / Abstract Shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#800000]/80 to-[#800000]" />
        <img 
          src="https://images.unsplash.com/photo-1584286595398-a59f21d313f5?q=80&w=2594&auto=format&fit=crop" 
          alt="Islamic Architecture" 
          className="w-full h-full object-cover opacity-50 mix-blend-overlay"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium mb-6 text-emerald-200">
              ✨ Penerimaan Siswa Baru Tahun 2025/2026
            </span>
          </motion.div>

          <motion.h1 
            variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]"
          >
            Membangun <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
              Generasi Qurani
            </span>
          </motion.h1>

          <motion.p 
            variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 font-light"
          >
            Yayasan Ashabul Quran menggabungkan kurikulum modern dengan nilai-nilai Islami untuk mencetak pemimpin masa depan yang berakhlak mulia.
          </motion.p>

          <motion.div 
            variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-2xl bg-white text-[#800000] font-bold text-lg shadow-xl shadow-white/10 flex items-center justify-center gap-2"
            >
              Daftar Sekarang <ArrowUpRight className="w-5 h-5" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold text-lg flex items-center justify-center gap-2 hover:bg-white/20 transition-colors"
            >
              <Users className="w-5 h-5" /> Lihat Profil
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent mx-auto" />
      </motion.div>
    </section>
  );
};

const BentoGrid = () => {
  return (
    <section id="bento" className="py-24 bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 flex items-end justify-between"
        >
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Pusat Informasi</h2>
            <p className="text-gray-500">Akses cepat ke segala hal tentang Yayasan.</p>
          </div>
        </motion.div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          
          {/* Card 1: PPDB (Large Accent) */}
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="md:col-span-1 md:row-span-2 rounded-[2rem] bg-[#006633] p-8 text-white relative overflow-hidden group cursor-pointer flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 p-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-white/20" />
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                <GraduationCap className="text-white w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold mb-2">PPDB 2025</h3>
              <p className="text-emerald-100 mb-6">Pendaftaran Peserta Didik Baru kini telah dibuka. Dapatkan potongan biaya untuk 50 pendaftar pertama.</p>
            </div>

            <div className="relative z-10 mt-auto">
              <div className="flex items-center gap-4 text-sm font-medium bg-emerald-800/50 p-4 rounded-xl backdrop-blur-sm border border-emerald-500/30">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Status: Gelombang 1 Dibuka
              </div>
              <button className="w-full mt-4 bg-white text-[#006633] py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                Daftar Online
              </button>
            </div>
          </motion.div>

          {/* Card 2: Profile (Image Heavy) */}
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="md:col-span-2 md:row-span-1 rounded-[2rem] bg-gray-900 relative overflow-hidden group cursor-pointer"
          >
            <img 
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2604&auto=format&fit=crop" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              alt="Students"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="text-emerald-400 text-sm font-bold tracking-wider uppercase mb-2 block">Tentang Kami</span>
              <h3 className="text-2xl font-bold text-white mb-2">Mencetak Hafidz Berwawasan Global</h3>
              <p className="text-gray-300 line-clamp-2">Program Tahfidz intensif yang dipadukan dengan kurikulum Cambridge untuk persiapan masa depan.</p>
            </div>
          </motion.div>

          {/* Card 3: Berita (List) */}
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="md:col-span-1 md:row-span-1 rounded-[2rem] bg-white border border-gray-200 p-6 flex flex-col justify-center cursor-pointer hover:border-emerald-500/30 transition-colors"
          >
             <div className="flex items-center justify-between mb-4">
               <h4 className="font-bold text-gray-900 flex items-center gap-2">
                 <Sparkles className="w-4 h-4 text-yellow-500" /> Prestasi
               </h4>
               <ArrowRight className="w-4 h-4 text-gray-400" />
             </div>
             <div className="space-y-4">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-lg bg-gray-100 shrink-0 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1581726707445-75c7d617936f?auto=format&fit=crop&q=80&w=100" alt="Icon" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800 line-clamp-1">Juara 1 MTQ Nasional</p>
                    <p className="text-xs text-gray-500">2 Hari yang lalu</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-lg bg-gray-100 shrink-0 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=100" alt="Icon" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800 line-clamp-1">Beasiswa Kuliah Al-Azhar</p>
                    <p className="text-xs text-gray-500">5 Hari yang lalu</p>
                  </div>
                </div>
             </div>
          </motion.div>

          {/* Card 4: Video/Multimedia */}
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="md:col-span-1 md:row-span-1 rounded-[2rem] bg-[#800000] p-6 text-white relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 p-24 bg-red-500/20 rounded-full blur-3xl translate-x-10 -translate-y-10" />
            <div>
              <Youtube className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold">Kajian Rutin</h3>
            </div>
            <div className="mt-4 pt-4 border-t border-white/20">
              <p className="text-sm text-red-100">Simak kajian ustadz kami via Live Streaming setiap Jumat.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const NewsSection = () => {
  const news = [
    { id: 1, title: "Kunjungan Syeikh dari Madinah", date: "12 Des 2023", category: "Event", img: "https://images.unsplash.com/photo-1564682057777-6f8510cb4629?auto=format&fit=crop&q=80&w=500" },
    { id: 2, title: "Ujian Tahfidz Semester Ganjil", date: "10 Des 2023", category: "Akademik", img: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&q=80&w=500" },
    { id: 3, title: "Renovasi Asrama Putri Selesai", date: "08 Des 2023", category: "Fasilitas", img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=500" },
    { id: 4, title: "Workshop Robotika Santri", date: "05 Des 2023", category: "Ekstrakurikuler", img: "https://images.unsplash.com/photo-1581092921461-eab62e97a783?auto=format&fit=crop&q=80&w=500" },
  ];

  return (
    <section id="news" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-4xl font-bold text-[#800000]">Kabar Ashabul Quran</h2>
      </div>

      {/* Horizontal Scroll Snap Container */}
      <div className="flex overflow-x-auto gap-6 px-6 pb-12 snap-x snap-mandatory hide-scrollbar">
        {/* Spacer for left padding alignment */}
        <div className="w-0 md:w-[calc((100vw-80rem)/2)] shrink-0" />
        
        {news.map((item) => (
          <motion.div 
            key={item.id}
            whileHover={{ y: -10 }}
            className="snap-center shrink-0 w-[300px] md:w-[350px] bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xl shadow-gray-200/50 group"
          >
            <div className="h-48 overflow-hidden relative">
              <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#800000] uppercase tracking-wide">
                {item.category}
              </div>
              <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                <Calendar size={14} /> {item.date}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-[#006633] transition-colors">
                {item.title}
              </h3>
              <a href="#" className="inline-flex items-center text-sm font-semibold text-[#800000] hover:gap-2 transition-all">
                Baca Selengkapnya <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          </motion.div>
        ))}
        
        {/* Spacer for right padding alignment */}
        <div className="w-6 shrink-0" />
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="footer" className="bg-[#1a1a1a] text-white pt-20 pb-10 rounded-t-[3rem] mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center">
              <img src="/icon.png" alt="Logo Yayasan" className="w-full h-full object-contain" />
           </div>
            <span className="font-bold text-2xl tracking-tight">Yayasan Ashabul Quran</span>
          </div>
          <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
            Yayasan pendidikan Islam modern yang berfokus pada tahfidz Al-Quran, sains, dan teknologi untuk masa depan yang lebih cerah.
          </p>
          <div className="flex gap-4">
            <SocialButton icon={<Instagram size={20} />} />
            <SocialButton icon={<Facebook size={20} />} />
            <SocialButton icon={<Youtube size={20} />} />
          </div>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Tautan</h4>
          <ul className="space-y-4 text-gray-400">
            <li className="hover:text-white cursor-pointer transition-colors">Tentang Kami</li>
            <li className="hover:text-white cursor-pointer transition-colors">Program Pendidikan</li>
            <li className="hover:text-white cursor-pointer transition-colors">PPDB Online</li>
            <li className="hover:text-white cursor-pointer transition-colors">Berita & Event</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Kontak</h4>
          <ul className="space-y-4 text-gray-400">
            <li>Jl. Pendidikan No. 99, Jakarta Selatan</li>
            <li>+62 812 3456 7890</li>
            <li>info@ashabulquran.sch.id</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>&copy; 2025 Yayasan Ashabul Quran. All rights reserved.</p>
        <p>Designed with ❤️ by Gen Z Dev</p>
      </div>
    </footer>
  );
};

const SocialButton = ({ icon }: {icon: any}) => (
  <motion.button
    whileHover={{ y: -5, backgroundColor: '#800000' }}
    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white transition-colors"
  >
    {icon}
  </motion.button>
);

// --- MAIN APP COMPONENT ---
export default function App() {
  return (
    <div className={`min-h-screen bg-[#F3F4F6] font-sans selection:bg-[#006633] selection:text-white`}>
      {/* In Next.js layout.tsx, you would add the font:
        import { Poppins } from 'next/font/google'
        const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] })
      */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap');
        body { font-family: 'Poppins', sans-serif; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <Header />
      <main>
        <Hero />
        <BentoGrid />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}