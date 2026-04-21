import { useState } from 'react';
import Starfield from './components/Starfield';
import Loader from './components/Loader';
import Dashboard from './components/Dashboard';
import Registration from './components/Registration';
import Articles from './components/Articles';
import Calculator from './components/Calculator';

export default function App() {
  const [currentView, setCurrentView] = useState('intro');
  const[isNavigating, setIsNavigating] = useState(false);
  const [nextView, setNextView] = useState('');
  const [loaderColor, setLoaderColor] = useState('#00f3ff');

  // Trigger loader transition
  const navigate = (view, accent = '#00f3ff') => {
    setNextView(view);
    setLoaderColor(accent);
    setIsNavigating(true);
  };

  const handleLoadComplete = () => {
    setCurrentView(nextView);
    setIsNavigating(false);
    window.scrollTo(0, 0);
  };

  // Inline component for the absolute first view (Intro)
  const IntroPortal = () => (
    <div className="min-h-screen flex flex-col justify-center items-center p-6 text-center animate-fade">
      <p className="text-gray-400 tracking-[0.3em] text-sm mb-4 font-orbitron uppercase">- Protokol Inisiasi -</p>
      <h1 className="text-6xl md:text-8xl font-black mb-2 neon-text-cyan font-orbitron">TEA</h1>
      <h2 className="text-xl md:text-2xl text-gray-300 tracking-widest font-bold mb-8 uppercase font-orbitron">
        Explorers Astronomy Community
      </h2>
      <p className="italic text-[#00f3ff] border-l-2 border-[#00f3ff] pl-4 mb-12 max-w-md mx-auto text-lg">
        "Menjelajahi cakrawala, menembus batas pengetahuan antariksa."
      </p>
      <button 
        onClick={() => navigate('dashboard', '#00f3ff')}
        className="flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-[#00f3ff] text-[#00f3ff] font-orbitron font-bold tracking-widest hover:bg-[#00f3ff] hover:text-black hover:shadow-[0_0_20px_#00f3ff] transition-all duration-300"
      >
        MASUK PORTAL
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
      </button>
    </div>
  );

  return (
    <div className="relative min-h-screen w-full bg-[#050505] selection:bg-[#00f3ff]/30 text-white">
      <Starfield />
      
      {/* Universal Pre-loader */}
      {isNavigating && (
        <div className="fixed inset-0 z-50 bg-[#050505] flex items-center justify-center">
          <Loader accentColor={loaderColor} onComplete={handleLoadComplete} />
        </div>
      )}

      {/* Main Content Rendering */}
      {!isNavigating && (
        <div className="relative z-10 pb-20">
          {currentView === 'intro' && <IntroPortal />}
          {currentView === 'dashboard' && <Dashboard navigate={navigate} />}
          {currentView === 'registration' && <Registration navigate={navigate} />}
          {currentView === 'articles' && <Articles navigate={navigate} />}
          {currentView === 'calculator' && <Calculator navigate={navigate} />}
        </div>
      )}
    </div>
  );
}