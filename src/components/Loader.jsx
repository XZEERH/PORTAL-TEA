import { useState, useEffect } from 'react';

export default function Loader({ accentColor = '#00f3ff', onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 15) + 5;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 600); // Wait briefly at 100%
          return 100;
        }
        return next;
      });
    }, 120);
    return () => clearInterval(interval);
  },[onComplete]);

  const isHalfway = progress > 50;

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-sm px-6 animate-fade">
      <img 
        src="assets/favicon-tea.jpg" 
        alt="TEA Logo" 
        className="w-28 h-28 rounded-full border-2 animate-spin-slow mb-8 object-cover"
        style={{ borderColor: accentColor, boxShadow: `0 0 30px ${accentColor}80` }}
        onError={(e) => {
          e.target.src = `https://via.placeholder.com/150/050505/${accentColor.replace('#','')}?text=TEA`;
        }}
      />
      
      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden mb-4">
        <div 
          className="h-full transition-all duration-100 ease-out"
          style={{ width: `${progress}%`, backgroundColor: accentColor, boxShadow: `0 0 10px ${accentColor}` }}
        />
      </div>

      <div className="flex justify-between w-full font-orbitron text-sm tracking-widest">
        <h2 
          className="transition-colors duration-300"
          style={{ color: isHalfway ? accentColor : '#fff', textShadow: isHalfway ? `0 0 10px ${accentColor}` : 'none' }}
        >
          {isHalfway ? 'Membuka Sistem...' : 'Loading Sistem...'}
        </h2>
        <h2 style={{ color: accentColor, textShadow: `0 0 10px ${accentColor}` }}>
          {progress}%
        </h2>
      </div>
    </div>
  );
}