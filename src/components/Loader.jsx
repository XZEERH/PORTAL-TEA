import React from 'react';
import { motion } from 'framer-motion';

export const Loader = ({ status = "Menghubungkan ke Sistem..." }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="relative flex flex-col items-center justify-center">
        {/* Kontainer Logo */}
        <div className="relative">
          {/* Efek Cahaya Belakang (Glow) */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-white/20 rounded-full blur-[50px] pointer-events-none"
          />
          
          {/* Logo Utama dari Assets */}
          <motion.img
            src="assets/favicon-eac.jpg" // Menggunakan path yang kamu berikan
            alt="EAC Logo"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full relative z-10 border border-white/10 shadow-2xl"
            onError={(e) => {
              // Fallback jika gambar tidak ditemukan
              e.target.src = "https://via.placeholder.com/150?text=EAC"; 
            }}
          />
        </div>

        {/* Loader Spinner di sekeliling logo atau di bawahnya */}
        <div className="mt-12 relative flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 border-2 border-white/5 border-t-white/60 rounded-full"
          />
        </div>

        {/* Status Text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 font-orbitron text-[9px] md:text-[11px] tracking-[0.8em] text-white/50 uppercase text-center"
        >
          {status}
        </motion.p>
      </div>

      {/* Cinematic Flare di Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />
    </motion.div>
  );
};
