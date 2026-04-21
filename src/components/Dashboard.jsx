export default function Dashboard({ navigate }) {
  const cards =[
    { id: 'reg', badge: 'REGISTRATION', icon: UserIcon, title: 'SEKTOR ALPHA', desc: 'Pendaftaran Anggota Baru TEA - Sektor Alpha', action: () => navigate('registration', '#00f3ff'), actionText: 'BUKA PORTAL', color: '#00f3ff' },
    { id: 'quiz', badge: 'SIMULATION', icon: StarIcon, title: 'QUIZZ GALAXY', desc: 'Uji Pengetahuan Kosmik Lu dengan Tantangan Futuristik', action: () => alert('Modul Quizz sedang disiapkan!'), actionText: 'BUKA PORTAL', color: '#ff00ff' },
    { id: 'chat', badge: 'COMMUNICATION', icon: ChatIcon, title: 'SALURAN TEA', desc: 'Update berita astronomi via WhatsApp Channel', action: () => alert('Membuka WhatsApp...'), actionText: 'BUKA PORTAL', color: '#00f3ff' },
    { id: 'news', badge: 'ARCHIVE', icon: GlobeIcon, title: 'WARTA ANTARIKSA', desc: 'Dashboard artikel & feed berita luar angkasa (Web Utama)', action: () => navigate('articles', '#00f3ff'), actionText: 'BUKA PORTAL', color: '#00f3ff' },
    { id: 'calc', badge: 'UTILITY', icon: CalcIcon, title: 'ASTRO CALC', desc: 'Alat hitung konversi & rumus fisika astronomi', action: () => navigate('calculator', '#ff00ff'), actionText: 'SYSTEM ACTIVE', isSystem: true, color: '#ffffff' },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 animate-fade">
      <header className="flex justify-between items-center py-6 mb-8 border-b border-white/10">
        <div className="flex items-center gap-4">
          <div className="w-4 h-4 bg-[#00f3ff] rounded-full shadow-[0_0_10px_#00f3ff]"></div>
          <span className="font-orbitron font-bold text-xl tracking-widest">TEA</span>
        </div>
        <span className="font-orbitron text-xs text-gray-500 tracking-[0.2em]">MENU</span>
      </header>

      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-orbitron font-black mb-4 neon-text-cyan">THE HUB</h1>
        <p className="text-gray-400 tracking-[0.2em] uppercase font-orbitron text-sm md:text-base">
          Pusat Kendali Navigasi Antariksa TEA
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card) => (
          <div key={card.id} className="glass-panel p-6 flex flex-col justify-between min-h-[220px]">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center">
                <card.icon />
              </div>
              <span className="text-[10px] border border-white/20 rounded-full px-3 py-1 text-gray-400 tracking-widest font-orbitron uppercase">
                {card.badge}
              </span>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-orbitron font-bold tracking-wider mb-2 uppercase">{card.title}</h3>
              <p className="text-sm text-gray-400">{card.desc}</p>
            </div>

            <div className="mt-auto border-t border-white/10 pt-4">
              {card.isSystem ? (
                <div className="flex items-center gap-2 text-gray-400 font-orbitron text-sm tracking-widest">
                  <span className="w-2.5 h-2.5 bg-white rounded-full animate-pulse shadow-[0_0_8px_#fff]"></span>
                  {card.actionText}
                </div>
              ) : (
                <button 
                  onClick={card.action}
                  className="flex items-center gap-2 font-orbitron text-sm font-bold tracking-widest uppercase hover:text-[#00f3ff] transition-colors group"
                >
                  {card.actionText}
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Inline SVGs
const UserIcon = () => <svg className="w-6 h-6 stroke-white" fill="none" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>;
const GlobeIcon = () => <svg className="w-6 h-6 stroke-white" fill="none" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>;
const ChatIcon = () => <svg className="w-6 h-6 stroke-white" fill="none" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.84 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" /></svg>;
const CalcIcon = () => <svg className="w-6 h-6 stroke-white" fill="none" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm-7.5-11.25h10.5a2.25 2.25 0 012.25 2.25v15a2.25 2.25 0 01-2.25 2.25H6.75a2.25 2.25 0 01-2.25-2.25v-15a2.25 2.25 0 012.25-2.25z" /></svg>;
const StarIcon = () => <svg className="w-6 h-6 stroke-white" fill="none" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09l2.846.813-.813.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" /></svg>;