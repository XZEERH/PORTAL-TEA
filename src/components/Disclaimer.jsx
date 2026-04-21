import React from 'react';
import { motion } from 'framer-motion'; 
import { ShieldCheck, Zap } from 'lucide-react';

export const Disclaimer = ({ onAccept }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden bg-black">
      {/* Cinematic Flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="glass max-w-2xl w-full p-10 md:p-16 rounded-[3rem] relative overflow-hidden border border-white/10"
      >
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        <header className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="font-orbitron text-[9px] tracking-[0.8em] text-white/30 mb-6 uppercase">
              --- PROTOKOL INISIASI ---
            </h2>
          </motion.div>

          <div className="relative inline-block mb-4">
            <h1 className="eac-logo-text text-6xl md:text-8xl">
             TEA
            </h1>
            {/* Dekorasi Minimalis Pengganti Black Hole */}
            <div className="absolute -right-4 top-0 w-1 h-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          </div>

          <p className="font-orbitron text-[10px] tracking-[0.4em] text-white/40 mt-6 uppercase">The Editor Of Astronomy</p>
        </header>

        <div className="space-y-10 mb-16 text-white/60 leading-relaxed font-light">
          <p className="text-center italic text-sm text-white/40">
            "Menjelajahi cakrawala, menembus batas pengetahuan antariksa."
          </p>

          <div className="grid gap-8">
            <div className="flex items-center gap-6 group">
              <div className="p-4 rounded-2xl bg-white/5 text-white border border-white/5 group-hover:border-white/20 transition-all">
                <Zap size={22} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-orbitron text-[10px] font-bold text-white mb-1 tracking-[0.2em] uppercase">Akses Navigasi</h3>
                <p className="text-[11px] text-white/30">Dashboard terpadu untuk seluruh modul astronomi.</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="p-4 rounded-2xl bg-white/5 text-white border border-white/5 group-hover:border-white/20 transition-all">
                <ShieldCheck size={22} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-orbitron text-[10px] font-bold text-white mb-1 tracking-[0.2em] uppercase">Data Terenkripsi</h3>
                <p className="text-[11px] text-white/30">Keamanan data anggota adalah prioritas utama kami.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-10">
          <button
            onClick={onAccept}
            className="neon-button px-16 py-8 rounded-full font-orbitron text-[11px] font-bold tracking-[0.5em] text-black uppercase"
          >
            MASUK PORTAL
          </button>

          <div className="flex flex-col items-center gap-2">
            <p className="font-orbitron text-[8px] tracking-[0.5em] text-white/20 uppercase">
                TEA ASTRONOMI PORTAL &copy; 2026
            </p>
            <p className="font-orbitron text-[9px] tracking-[0.4em] text-white/40 uppercase font-bold">
              Dibuat oleh XZEERH
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
