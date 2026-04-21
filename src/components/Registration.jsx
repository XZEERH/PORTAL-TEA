export default function Registration({ navigate }) {
  return (
    <div className="max-w-xl mx-auto p-6 pt-12 animate-fade">
      <button 
        onClick={() => navigate('dashboard')}
        className="text-gray-400 font-orbitron text-sm tracking-widest hover:text-white mb-8 flex items-center gap-2 transition-colors"
      >
        <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        KEMBALI KE HUB
      </button>

      <div className="glass-panel p-8 relative overflow-hidden">
        <img 
          src="assets/favicon-tea.jpg" 
          alt="Brand" 
          className="absolute top-6 left-6 w-10 h-10 rounded border border-[#00f3ff] object-cover"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        
        <div className="text-center mb-8 mt-2">
          <h2 className="font-orbitron text-2xl font-bold tracking-widest text-[#00f3ff] neon-text-cyan">SEKTOR ALPHA</h2>
          <p className="text-gray-400 text-sm mt-2">Pendaftaran Prajurit Astronomi TEA</p>
        </div>

        <form className="flex flex-col gap-5 relative z-10" onSubmit={(e) => { e.preventDefault(); alert('Registrasi Diterima!'); navigate('dashboard'); }}>
          <div className="flex flex-col gap-1">
            <label className="font-orbitron text-xs text-gray-400 tracking-widest">CALLSIGN (USERNAME)</label>
            <input required type="text" className="w-full bg-black/40 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-[#00f3ff] focus:ring-1 focus:ring-[#00f3ff] transition-all" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-orbitron text-xs text-gray-400 tracking-widest">UMUR BUMI</label>
            <input required type="number" className="w-full bg-black/40 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-[#00f3ff] focus:ring-1 focus:ring-[#00f3ff] transition-all" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-orbitron text-xs text-gray-400 tracking-widest">ALASAN BERGABUNG</label>
            <textarea required rows="3" className="w-full bg-black/40 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-[#00f3ff] focus:ring-1 focus:ring-[#00f3ff] transition-all"></textarea>
          </div>
          <button type="submit" className="mt-4 py-4 w-full bg-[#00f3ff]/10 border border-[#00f3ff] text-[#00f3ff] font-orbitron font-bold tracking-widest uppercase hover:bg-[#00f3ff] hover:text-black transition-all">
            INISIASI PROTOKOL
          </button>
        </form>
      </div>
    </div>
  );
}