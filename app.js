/**
 * MONOLITH EAC - Core Logic
 * Stack: ES6+, Functional UI Components
 */

// --- STATE MANAGEMENT ---
const AppState = {
    user: null,
    currentView: 'auth', // 'auth', 'portal', 'quiz'
    quizScore: 0
};

// --- DOM ELEMENTS ---
const preloader = document.getElementById('preloader');
const appContainer = document.getElementById('app');

// --- 1. PRE-LOADER SYSTEM ---
function initPreloader() {
    let progress = 0;
    const progressFill = document.getElementById('progress-fill');
    const loadingText = document.getElementById('loading-text');
    const loadingPercent = document.getElementById('loading-percent');

    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 5) + 1; // Random increment
        if (progress >= 100) progress = 100;

        progressFill.style.width = `${progress}%`;
        loadingPercent.innerText = `${progress}%`;

        // Dynamic Text Update
        if (progress > 50) {
            loadingText.innerText = "Membuka Sistem...";
            loadingText.style.color = "var(--magenta)";
            loadingText.style.textShadow = "0 0 10px var(--magenta)";
        }

        if (progress === 100) {
            clearInterval(interval);
            setTimeout(() => {
                preloader.style.opacity = 0;
                setTimeout(() => {
                    preloader.style.display = 'none';
                    appContainer.style.display = 'block';
                    renderApp(); // Mount Virtual DOM
                }, 500);
            }, 800);
        }
    }, 100);
}

// --- 2. UI COMPONENTS (JSX-like Functional Components) ---

const AuthPage = () => `
    <div class="auth-wrapper">
        <div class="glass-panel auth-card">
            <img src="assets/favicon-tea.jpg" class="auth-brand" alt="Brand" onerror="this.src='https://via.placeholder.com/40/00f3ff/000?text=EAC'">
            <h2 class="auth-header">MONOLITH EAC</h2>
            <form id="auth-form" onsubmit="handleLogin(event)">
                <div class="input-group">
                    <input type="text" id="username" class="cyber-input" placeholder="Username" required>
                    <div class="scan-line"></div>
                </div>
                <div class="input-group">
                    <input type="number" id="umur" class="cyber-input" placeholder="Umur" required>
                    <div class="scan-line"></div>
                </div>
                <div class="input-group">
                    <input type="text" id="hobi" class="cyber-input" placeholder="Hobi" required>
                    <div class="scan-line"></div>
                </div>
                <div class="input-group">
                    <textarea id="alasan" class="cyber-input" placeholder="Alasan Bergabung" rows="3" required></textarea>
                    <div class="scan-line"></div>
                </div>
                <button type="submit" class="cyber-btn">Initialize Link</button>
            </form>
        </div>
    </div>
`;

const EduCard = (title, desc) => `
    <div class="glass-panel edu-card">
        <h3>${title}</h3>
        <p style="font-size:0.9rem; color:#aaa;">${desc}</p>
    </div>
`;

const MainPortal = () => {
    const data =[
        { title: 'Black Holes', desc: 'Gravitational singularities where space and time distort.' },
        { title: 'Nebulae', desc: 'Stellar nurseries comprising massive clouds of dust and ionized gases.' },
        { title: 'Quasars', desc: 'Active galactic nuclei emitting massive amounts of electromagnetic energy.' },
        { title: 'Galactic Evolution', desc: 'The timeline of cosmic structures forming across eons.' }
    ];

    return `
        <div class="portal-container">
            <div class="header-nav">
                <h2>Welcome, <span class="cyan-glow">${AppState.user.username}</span></h2>
                <button class="cyber-btn" style="width:auto; padding: 10px 20px;" onclick="navigate('quiz')">Launch Quiz</button>
            </div>
            
            <h3 style="margin-bottom: 1rem; color: var(--magenta);">Education Hub</h3>
            <div class="grid-cards">
                ${data.map(item => EduCard(item.title, item.desc)).join('')}
            </div>

            <h3 style="margin-bottom: 1rem; margin-top: 2rem; color: var(--cyan);">Live Telemetry (API Placeholders)</h3>
            <div class="api-sections">
                <div class="glass-panel api-box">
                    <h4 style="margin-bottom: 10px;">NASA APOD API</h4>
                    <p style="color: #666; font-size: 0.8rem;">[ Standby for Data Integration ]</p>
                </div>
                <div class="glass-panel api-box">
                    <h4 style="margin-bottom: 10px;">N2YO Satellite Tracker</h4>
                    <p style="color: #666; font-size: 0.8rem;">[ Uplink Pending... ]</p>
                </div>
            </div>
        </div>
    `;
};

// --- 3. GALAXY QUIZ LOGIC ---
const quizQuestions = [
    { q: "What phenomenon occurs at the boundary of a black hole?", a:["Event Horizon", "Solar Flare", "Supernova"], correct: 0 },
    { q: "Which of these is a remnant of a dying star?", a: ["Quasar", "White Dwarf", "Asteroid"], correct: 1 },
    { q: "What force is primarily responsible for galactic evolution?", a: ["Electromagnetism", "Strong Nuclear", "Gravity"], correct: 2 }
];
let currentQ = 0;

const QuizUI = () => `
    <div class="portal-container quiz-container">
        <div class="glass-panel">
            <h2 style="color: var(--cyan); margin-bottom: 20px;">Galaxy Quiz Protocol</h2>
            <div class="neon-progress-bar" style="margin-bottom: 20px;">
                <div class="progress-fill" style="width: ${((currentQ) / quizQuestions.length) * 100}%"></div>
            </div>
            <div id="quiz-content">
                ${renderQuestion()}
            </div>
        </div>
    </div>
`;

function renderQuestion() {
    if (currentQ >= quizQuestions.length) return renderResult();
    const qData = quizQuestions[currentQ];
    return `
        <h3 style="margin-bottom:20px;">${qData.q}</h3>
        <div class="quiz-options">
            ${qData.a.map((opt, i) => `<button class="option-btn" onclick="submitAnswer(${i})">${opt}</button>`).join('')}
        </div>
    `;
}

function renderResult() {
    let rank = "Space Cadet";
    if (AppState.quizScore === 2) rank = "Stellar Navigator";
    if (AppState.quizScore === 3) rank = "Cosmic Overlord";
    
    return `
        <h3>Simulation Complete</h3>
        <p style="margin-top:10px;">Your Score: ${AppState.quizScore} / ${quizQuestions.length}</p>
        <div class="stellar-rank">${rank}</div>
        <button class="cyber-btn" style="margin-top: 20px;" onclick="resetQuiz()">Return to Portal</button>
    `;
}

// --- CONTROLLERS ---

window.handleLogin = (e) => {
    e.preventDefault();
    AppState.user = {
        username: document.getElementById('username').value,
        umur: document.getElementById('umur').value,
        hobi: document.getElementById('hobi').value
    };
    navigate('portal');
};

window.navigate = (view) => {
    AppState.currentView = view;
    renderApp();
};

window.submitAnswer = (idx) => {
    if (idx === quizQuestions[currentQ].correct) AppState.quizScore++;
    currentQ++;
    renderApp();
};

window.resetQuiz = () => {
    currentQ = 0;
    AppState.quizScore = 0;
    navigate('portal');
};

// --- RENDER ENGINE ---
function renderApp() {
    // Acts like React's ReactDOM.render()
    if (AppState.currentView === 'auth') {
        appContainer.innerHTML = AuthPage();
    } else if (AppState.currentView === 'portal') {
        appContainer.innerHTML = MainPortal();
    } else if (AppState.currentView === 'quiz') {
        appContainer.innerHTML = QuizUI();
    }
}

// Boot System
window.onload = initPreloader;