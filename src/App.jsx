import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Starfield } from './components/Starfield';
import { Loader } from './components/Loader';
import { Disclaimer } from './components/Disclaimer';
import { Dashboard } from './components/Dashboard';
import { Registration } from './components/Registration';
import { Calculator } from './components/Calculator';
import { Articles } from './components/Articles';

export default function App() {
  // Screen: 'disclaimer' | 'hub' | 'community-1' | 'articles' | 'calculator'
  const [currentScreen, setCurrentScreen] = useState('disclaimer');
  const [isLoading, setIsLoading] = useState(false);
  const [loaderStatus, setLoaderStatus] = useState("Menghubungkan ke Sistem...");

  useEffect(() => {
    const hasAccepted = localStorage.getItem('eac_disclaimer_accepted');
    if (hasAccepted) {
      setCurrentScreen('hub');
    }
  }, []);

  const handleAcceptDisclaimer = () => {
    localStorage.setItem('eac_disclaimer_accepted', 'true');
    transitionTo('hub', "Membuka Portal Utama...");
  };

  const transitionTo = (screen, status) => {
    setIsLoading(true);
    setLoaderStatus(status || "Menghubungkan ke Sistem...");

    // Delay 2 detik untuk kesan loading premium
    setTimeout(() => {
      setCurrentScreen(screen);
      setIsLoading(false);
    }, 2000);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'disclaimer':
        return <Disclaimer onAccept={handleAcceptDisclaimer} />;
      case 'hub':
        return <Dashboard onNavigate={(id) => transitionTo(id, `Membuka ${id.replace('-', ' ')}...`)} />;
      case 'community-1':
        return <Registration communityId={currentScreen} onBack={() => transitionTo('hub')} />;
      case 'calculator':
        return <Calculator onBack={() => transitionTo('hub')} />;
      case 'articles':
        return <Articles onBack={() => transitionTo('hub')} />;
      default:
        return <Dashboard onNavigate={(id) => transitionTo(id)} />;
    }
  };

  return (
    <div className="relative min-h-screen">
      <Starfield />

      <AnimatePresence mode="wait">
        {isLoading && (
          <Loader 
            key="loader" 
            status={loaderStatus} 
            logo="assets/favicon-tea.jpg" // Mengirim logo TEA ke komponen Loader
          />
        )}
      </AnimatePresence>

      {/* Navigation Bar - Tampil setelah disclaimer */}
      {currentScreen !== 'disclaimer' && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="fixed top-0 left-0 w-full z-40 px-6 py-6 md:py-8 flex justify-between items-center bg-gradient-to-b from-black/90 via-black/40 to-transparent backdrop-blur-[2px]"
        >
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => transitionTo('hub', "Kembali ke Pusat Kendali...")}
          >
            <div className="w-8 h-8 flex items-center justify-center relative">
              <div className="absolute inset-0 border border-white/20 rounded-full group-hover:border-white/40 transition-colors" />
              <img 
                src="assets/favicon-tea.jpg" 
                alt="TEA" 
                className="w-5 h-5 rounded-full z-10"
              />
            </div>
            <span className="eac-logo-text text-xl md:text-2xl">TEA</span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            <button 
              onClick={() => transitionTo('hub')}
              className={`nav-link ${currentScreen === 'hub' ? 'active' : ''}`}
            >
              HUB
            </button>
            <button 
              onClick={() => transitionTo('articles')}
              className={`nav-link ${currentScreen === 'articles' ? 'active' : ''}`}
            >
              WARTA
            </button>
            <button 
              onClick={() => transitionTo('calculator')}
              className={`nav-link ${currentScreen === 'calculator' ? 'active' : ''}`}
            >
              ASTRO CALC
            </button>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex flex-col items-end">
              <span className="font-orbitron text-[7px] tracking-[0.4em] text-white/20 uppercase">TEA Status</span>
              <span className="font-orbitron text-[8px] tracking-[0.2em] text-white/60 uppercase">Online</span>
            </div>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
          </div>
        </motion.nav>
      )}

      <main className={`relative z-10 ${currentScreen !== 'disclaimer' ? 'pt-20 md:pt-32' : ''}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(10px)' }}
            transition={{ duration: 0.5 }}
          >
            {renderScreen()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Visual Indicator */}
      <div className="fixed bottom-6 right-6 z-20">
        <div className="flex items-center gap-3 glass px-4 py-2 rounded-full border border-white/10">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
          <span className="font-orbitron text-[10px] tracking-widest text-white/40 uppercase">TEA System Active</span>
        </div>
      </div>
    </div>
  );
}
