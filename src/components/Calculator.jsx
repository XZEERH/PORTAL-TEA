export default function Calculator({ navigate }) {
  return (
    <div className="max-w-2xl mx-auto p-6 pt-12 animate-fade">
      <button 
        onClick={() => navigate('dashboard')}
        className="text-gray-400 font-orbitron text-sm tracking-widest hover:text-[#ff00ff] mb-8 flex items-center gap-2 transition-colors"
      >
        <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        KEMBALI
      </button>

      <div className="glass-panel p-8 border-[#ff00ff]/30">
        <div className="text-center mb-8">
          <h2 className="font-orbitron text-3xl font-bold tracking-widest text-[#ff00ff] neon-text-magenta mb-2">ASTRO CALC</h2>
          <p className="text-gray-400 text-sm">Sistem Kalkulasi Fisika Antariksa</p>
        </div>

        <div className="grid gap-4">
          <div className="bg-black/50 p-4 border border-white/10 rounded">
            <label className="text-xs text-[#ff00ff] font-orbitron tracking-widest block mb-2">TAHUN CAHAYA -> KILOMETER</label>
            <div className="flex gap-2">
              <input type="number" placeholder="Input Light Years..." className="flex-1 bg-transparent border-b border-white/30 text-white p-2 focus:outline-none focus:border-[#ff00ff]" />
              <button className="bg-[#ff00ff]/20 text-[#ff00ff] px-4 rounded border border-[#ff00ff] font-orbitron text-xs">HITUNG</button>
            </div>
          </div>

          <div className="bg-black/50 p-4 border border-white/10 rounded opacity-60">
            <label className="text-xs text-gray-400 font-orbitron tracking-widest block mb-2">MASSA RELATIVISTIK (LOCKED)</label>
            <p className="text-xs text-gray-600">Fitur membutuhkan izin Sektor Alpha Level 2.</p>
          </div>
        </div>
      </div>
    </div>
  );
}