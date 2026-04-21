import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, MapPin, MessageCircle, Download, CheckCircle2, ArrowLeft, ArrowRight, Star, Fingerprint } from 'lucide-react';
import * as htmlToImage from 'html-to-image'; // Pastikan install: npm install html-to-image

export const Registration = ({ onBack }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    hobby: '',
    skill: '',
    tiktok: '',
  });
  
  const cardRef = useRef(null);

  // Link WhatsApp Community 1
  const whatsappLink = 'https://chat.whatsapp.com/J09csfCHJ8sFYNIpf5ygpM';

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const downloadCard = () => {
    if (cardRef.current === null) return;
    
    htmlToImage.toPng(cardRef.current, { quality: 0.95 })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = `TEA-PASS-${formData.name.toUpperCase()}.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error('Oops, something went wrong!', err);
        alert('Gagal mendownload gambar. Pastikan koneksi stabil.');
      });
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 md:py-16">
      <button
        onClick={onBack}
        className="mb-8 md:mb-12 flex items-center gap-2 text-white/40 hover:text-white transition-colors font-orbitron text-[9px] md:text-[10px] tracking-[0.3em] uppercase"
      >
        <ArrowLeft size={14} /> KEMBALI KE HUB
      </button>

      <AnimatePresence mode="wait">
        {step === 1 ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="glass p-8 md:p-16 rounded-[2.5rem] border border-white/5 relative overflow-hidden"
          >
            {/* Header dengan Logo TEA */}
            <div className="flex justify-between items-start mb-12">
              <div>
                <h2 className="font-orbitron text-2xl md:text-3xl font-black mb-2 tracking-tighter">
                  REGISTRASI EXPLORER
                </h2>
                <p className="font-orbitron text-[9px] md:text-[10px] tracking-[0.4em] text-white/30 uppercase">
                  COMMUNITY 1
                </p>
              </div>
              <div className="flex items-center gap-3 bg-white/5 p-3 rounded-2xl border border-white/10">
                <img src="assets/favicon-tea.jpg" alt="TEA" className="w-8 h-8 rounded-full object-cover" />
                <span className="font-orbitron text-[8px] tracking-[0.2em] text-white font-bold uppercase hidden md:block">
                  PENDAFTARAN TEA
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Nama */}
              <div className="space-y-3">
                <label className="block text-[9px] font-orbitron text-white/30 uppercase tracking-[0.3em]">Nama</label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/[0.02] border border-white/10 rounded-2xl py-4 px-6 focus:border-white/30 focus:outline-none text-white text-sm"
                  placeholder="Nama lengkap..."
                />
              </div>

              {/* Umur */}
              <div className="space-y-3">
                <label className="block text-[9px] font-orbitron text-white/30 uppercase tracking-[0.3em]">Umur</label>
                <input
                  required
                  type="number"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  className="w-full bg-white/[0.02] border border-white/10 rounded-2xl py-4 px-6 focus:border-white/30 focus:outline-none text-white text-sm"
                  placeholder="Contoh: 17"
                />
              </div>

              {/* Hobi */}
              <div className="space-y-3">
                <label className="block text-[9px] font-orbitron text-white/30 uppercase tracking-[0.3em]">Hobi</label>
                <input
                  required
                  type="text"
                  value={formData.hobby}
                  onChange={(e) => setFormData({ ...formData, hobby: e.target.value })}
                  className="w-full bg-white/[0.02] border border-white/10 rounded-2xl py-4 px-6 focus:border-white/30 focus:outline-none text-white text-sm"
                  placeholder="Hobi Anda..."
                />
              </div>

              {/* Skill */}
              <div className="space-y-3">
                <label className="block text-[9px] font-orbitron text-white/30 uppercase tracking-[0.3em]">Skill</label>
                <input
                  required
                  type="text"
                  value={formData.skill}
                  onChange={(e) => setFormData({ ...formData, skill: e.target.value })}
                  className="w-full bg-white/[0.02] border border-white/10 rounded-2xl py-4 px-6 focus:border-white/30 focus:outline-none text-white text-sm"
                  placeholder="Keahlian (misal: Coding/Editing)"
                />
              </div>

              {/* Tiktok */}
              <div className="space-y-3 md:col-span-2">
                <label className="block text-[9px] font-orbitron text-white/30 uppercase tracking-[0.3em]">Tiktok Username</label>
                <input
                  required
                  type="text"
                  value={formData.tiktok}
                  onChange={(e) => setFormData({ ...formData, tiktok: e.target.value })}
                  className="w-full bg-white/[0.02] border border-white/10 rounded-2xl py-4 px-6 focus:border-white/30 focus:outline-none text-white text-sm"
                  placeholder="@username"
                />
              </div>

              <button
                type="submit"
                className="md:col-span-2 w-full neon-button py-5 rounded-2xl font-orbitron font-bold tracking-[0.4em] text-white text-[10px] mt-4"
              >
                GENERATE MEMBER PASS
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="id-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center"
          >
            <div className="text-center mb-8">
              <CheckCircle2 className="w-12 h-12 text-white mx-auto mb-4" />
              <h2 className="font-orbitron text-3xl font-black mb-2 tracking-tighter uppercase">Pass Terverifikasi</h2>
            </div>

            {/* Virtual ID Card 16:9 */}
            <div 
              ref={cardRef}
              className="relative w-full aspect-[16/9] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-black"
              style={{ maxWidth: '600px' }}
            >
              {/* Desain Latar Belakang */}
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/[0.05] to-transparent" />
              
              <div className="relative h-full p-8 md:p-10 flex flex-col justify-between z-10">
                {/* Atas Kartu */}
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <img src="assets/favicon-tea.jpg" alt="TEA" className="w-10 h-10 rounded-full border border-white/20" />
                    <div>
                      <h3 className="font-orbitron text-xl font-bold text-white tracking-widest">TEA</h3>
                      <p className="text-[7px] font-orbitron text-white/40 tracking-[0.3em] uppercase">The Elite Association</p>
                    </div>
                  </div>
                  <div className="px-4 py-1 bg-white/10 rounded-full border border-white/20">
                    <span className="font-orbitron text-[8px] text-white tracking-[0.2em] font-bold">MEMBER PASS</span>
                  </div>
                </div>

                {/* Tengah Kartu */}
                <div className="flex gap-8 items-center">
                   <div className="w-24 h-24 md:w-28 md:h-28 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden">
                      <Fingerprint size={48} className="text-white/20" />
                      <div className="absolute bottom-0 w-full h-1 bg-white/40 animate-pulse" />
                   </div>
                   <div className="flex-1">
                      <p className="text-[7px] font-orbitron text-white/20 uppercase tracking-[0.3em] mb-1">Elite Identifier</p>
                      <h2 className="font-orbitron text-2xl md:text-3xl font-black text-white tracking-tight uppercase truncate">{formData.name}</h2>
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div>
                          <p className="text-[6px] font-orbitron text-white/20 uppercase mb-1">Hobby</p>
                          <p className="text-[10px] font-orbitron text-white/80 uppercase">{formData.hobby}</p>
                        </div>
                        <div>
                          <p className="text-[6px] font-orbitron text-white/20 uppercase mb-1">Expertise</p>
                          <p className="text-[10px] font-orbitron text-white/80 uppercase">{formData.skill}</p>
                        </div>
                      </div>
                   </div>
                </div>

                {/* Bawah Kartu */}
                <div className="flex justify-between items-end border-t border-white/5 pt-4">
                  <div className="flex gap-6">
                    <div>
                      <p className="text-[6px] font-orbitron text-white/20 uppercase mb-1">Age</p>
                      <p className="text-[9px] font-orbitron text-white font-bold">{formData.age}</p>
                    </div>
                    <div>
                      <p className="text-[6px] font-orbitron text-white/20 uppercase mb-1">Social</p>
                      <p className="text-[9px] font-orbitron text-white font-bold lowercase">{formData.tiktok}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[6px] font-orbitron text-white/20 uppercase mb-1">Community Sector</p>
                    <p className="text-[9px] font-orbitron text-white font-bold uppercase tracking-widest">Alpha-01</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tombol Aksi */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full max-w-lg">
              <button
                onClick={() => window.open(whatsappLink, '_blank')}
                className="flex-1 bg-white text-black hover:bg-white/90 py-4 rounded-2xl font-orbitron font-bold text-[10px] tracking-[0.4em] transition-all flex items-center justify-center gap-3 uppercase"
              >
                GABUNG GRUP <ArrowRight size={14} />
              </button>
              <button
                onClick={downloadCard}
                className="px-8 bg-white/5 hover:bg-white/10 border border-white/10 py-4 rounded-2xl text-white transition-all flex items-center justify-center gap-3"
              >
                <Download size={20} strokeWidth={1.5} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
