/**
 * TEA Astronomy Web Portal - Core App Logic
 * Designed for pure Vanilla JS execution (Acode / Termux friendly)
 */

// --- STATE MANAGEMENT ---
const App = {
    currentView: 'intro', // 'intro' or 'hub'
    container: document.getElementById('app')
};

// --- ICON LIBRARY (Minimalist SVGs) ---
const Icons = {
    thunder: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
    shield: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>`,
    user: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`,
    quiz: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
    chat: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>`,
    globe: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
    calc: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="8" y1="6" x2="16" y2="6"></line><line x1="16" y1="14" x2="16" y2="14.01"></line><line x1="16" y1="10" x2="16" y2="10.01"></line><line x1="16" y1="18" x2="16" y2="18.01"></line><line x1="8" y1="10" x2="8" y2="10.01"></line><line x1="8" y1="14" x2="8" y2="14.01"></line><line x1="8" y1="18" x2="8" y2="18.01"></line><line x1="12" y1="10" x2="12" y2="10.01"></line><line x1="12" y1="14" x2="12" y2="14.01"></line><line x1="12" y1="18" x2="12" y2="18.01"></line></svg>`,
    arrow: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`
};

// --- COMPONENT: Intro Portal (Screen 1) ---
const IntroScreen = () => `
    <div class="intro-layout fade-in">
        <div class="intro-left">
            <div class="intro-subtitle">- PROTOKOL INISIASI -</div>
            <h1 class="intro-title">TEA</h1>
            <h2 class="intro-desc">Explorers Astronomy Community</h2>
        </div>
        <div class="intro-right">
            <p class="intro-quote">"Menjelajahi cakrawala, menembus batas pengetahuan antariksa."</p>
            <div class="intro-cards-container">
                <div class="mini-card">
                    ${Icons.thunder}
                    <div>
                        <h4>AKSES NAVIGASI</h4>
                        <p>Dashboard terpadu untuk seluruh modul astronomi.</p>
                    </div>
                </div>
                <div class="mini-card">
                    ${Icons.shield}
                    <div>
                        <h4>DATA TERENKRIPSI</h4>
                        <p>Keamanan data anggota adalah prioritas utama kami.</p>
                    </div>
                </div>
            </div>
            <button class="action-btn" onclick="triggerTransition('hub', '#00f3ff')">
                MASUK PORTAL ${Icons.arrow}
            </button>
        </div>
    </div>
`;

// --- COMPONENT: Hub Card Reusable ---
const HubCard = ({ badge, icon, title, desc, actionType, accent }) => `
    <div class="hub-card fade-in">
        <div class="card-top">
            <div class="card-icon">${icon}</div>
            ${badge ? `<div class="card-badge">${badge}</div>` : ''}
        </div>
        <div class="card-body">
            <h3>${title}</h3>
            <p>${desc}</p>
        </div>
        <div class="card-footer">
            ${actionType === 'link' 
                ? `<button class="action-btn" onclick="triggerTransition('hub', '${accent}')">BUKA PORTAL ${Icons.arrow}</button>` 
                : `<div class="system-active"><div class="active-dot"></div> SYSTEM ACTIVE</div>`
            }
        </div>
    </div>
`;

// --- COMPONENT: The Hub (Screen 2) ---
const HubScreen = () => {
    const cardsData =[
        { badge: 'REGISTRATION', icon: Icons.user, title: 'SEKTOR ALPHA', desc: 'Pendaftaran Anggota Baru TEA - Sektor Alpha', actionType: 'link', accent: '#00f3ff' },
        { badge: 'SIMULATION', icon: Icons.quiz, title: 'QUIZZ GALAXY', desc: 'Uji Pengetahuan Kosmik Lu dengan Tantangan Futuristik', actionType: 'link', accent: '#ff00ff' },
        { badge: 'COMMUNICATION', icon: Icons.chat, title: 'SALURAN TEA', desc: 'Update berita astronomi via WhatsApp Channel', actionType: 'link', accent: '#00f3ff' },
        { badge: 'ARCHIVE', icon: Icons.globe, title: 'WARTA ANTARIKSA', desc: 'Dashboard artikel & feed berita luar angkasa (Web Utama)', actionType: 'link', accent: '#00f3ff' },
        { badge: 'UTILITY', icon: Icons.calc, title: 'ASTRO CALC', desc: 'Alat hitung konversi & rumus fisika astronomi', actionType: 'system', accent: '#ffffff' }
    ];

    return `
        <div class="hub-container fade-in">
            <header class="hub-header">
                <div class="brand-group">
                    <img src="assets/favicon-tea.jpg" class="brand-logo" alt="TEA" onerror="this.src='https://via.placeholder.com/40/050505/00f3ff?text=T'">
                    <span class="brand-text">TEA</span>
                </div>
                <div class="menu-text">MENU</div>
            </header>

            <div class="hub-hero">
                <h1>THE HUB</h1>
                <p>Pusat Kendali Navigasi Antariksa TEA</p>
            </div>

            <div class="hub-grid">
                ${cardsData.map(card => HubCard(card)).join('')}
            </div>
        </div>
    `;
};

// --- TRANSITION & RENDER ENGINE ---
function renderUI() {
    App.container.innerHTML = ''; // Clear DOM
    if (App.currentView === 'intro') {
        App.container.innerHTML = IntroScreen();
    } else if (App.currentView === 'hub') {
        App.container.innerHTML = HubScreen();
    }
    // Scroll to top on render
    window.scrollTo(0, 0);
}

// Universal Loader Transition
window.triggerTransition = (destinationView, accentColor = '#00f3ff') => {
    const loader = document.getElementById('loader');
    const fill = document.getElementById('loader-fill');
    const percentText = document.getElementById('loader-percent');
    const statusText = document.getElementById('loader-text');

    // Setup Custom Accent for the clicked portal
    fill.style.boxShadow = `0 0 15px ${accentColor}`;
    fill.style.backgroundColor = accentColor;
    statusText.style.color = '#ffffff';

    // Show Overlay
    loader.style.display = 'flex';
    setTimeout(() => { loader.style.opacity = '1'; }, 10);

    let progress = 0;
    statusText.innerText = "Loading Sistem...";

    // Simulate Network/Processing Load
    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 12) + 4; // Jump between 4-15%
        
        if (progress > 50) {
            statusText.innerText = "Membuka Sistem...";
            statusText.style.color = accentColor;
            statusText.style.textShadow = `0 0 10px ${accentColor}`;
        }

        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            
            // Wait a beat at 100% then transition
            setTimeout(() => {
                App.currentView = destinationView;
                renderUI();
                
                // Fade out loader
                loader.style.opacity = '0';
                setTimeout(() => { 
                    loader.style.display = 'none'; 
                }, 500);
            }, 600);
        }

        fill.style.width = `${progress}%`;
        percentText.innerText = `${progress}%`;
    }, 120);
};

// --- INITIALIZE BOOT ---
window.onload = () => {
    renderUI();
};