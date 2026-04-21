export default function Articles({ navigate }) {
  return (
    <div className="max-w-4xl mx-auto p-6 pt-12 animate-fade">
      <div className="flex justify-between items-center mb-10 border-b border-white/10 pb-4">
        <h2 className="font-orbitron text-3xl font-bold tracking-widest text-[#00f3ff] neon-text-cyan">WARTA ANTARIKSA</h2>
        <button onClick={() => navigate('dashboard')} className="text-gray-400 font-orbitron text-xs tracking-widest hover:text-[#00f3ff] transition-colors">
          [ TUTUP WEB ]
        </button>
      </div>

      <div className="grid gap-6">
        {[1, 2, 3].map((item) => (
          <div key={item} className="glass-panel p-6 flex flex-col md:flex-row gap-6 items-center cursor-pointer">
            <div className="w-full md:w-48 h-32 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center">
               <span className="font-orbitron text-gray-600 text-xs">IMG_PLACEHOLDER</span>
            </div>
            <div className="flex-1">
              <span className="text-[#00f3ff] text-xs font-orbitron tracking-widest mb-2 block">DASHBOARD LOKAL - {new Date().toLocaleDateString()}</span>
              <h3 className="text-xl font-bold mb-2">Penemuan Eksoplanet Baru di Konstelasi Orion</h3>
              <p className="text-gray-400 text-sm">Transmisi data terbaru dari James Webb menunjukkan anomali atmosfer yang berpotensi menampung kehidupan mikroba...</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}