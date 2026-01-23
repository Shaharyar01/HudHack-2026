/* THEME TOGGLE LOGIC */
function toggleTheme(isChecked) {
    const body = document.body;
    if (isChecked) {
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');
    }
}

/* LOAD SAVED THEME */
const savedTheme = localStorage.getItem('theme');
const checkbox = document.getElementById('checkbox');
if (savedTheme === 'light') { document.body.classList.add('light-mode'); checkbox.checked = true; }

/* EASTER EGG LOGIC (KONAMI) */
const secretCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let currentSequence = [];
document.addEventListener('keydown', (e) => {
    currentSequence.push(e.key);
    currentSequence = currentSequence.slice(-secretCode.length);
    if (JSON.stringify(currentSequence) === JSON.stringify(secretCode)) {
        document.getElementById('secretModal').style.display = 'flex';
        console.log("%cSYSTEM OVERRIDE DETECTED: ACCESS GRANTED", "color: #2dd4bf; font-weight: bold; font-size: 16px;");
    }
});

/* CHALLENGE 2: SETTING THE COOKIE FLAG (The Cookie Monster) */
document.cookie = "hudhack_token=HUDHACK{C00K13_M0NST3R}; path=/";

/* CHALLENGE 4: THE CONSOLE LOG (The Console Cowboy) */
/* Decodes to: HUDHACK{B4S364_D3C0D3R} */
const msg = "U3lzdGVtIERpYWdub3N0aWM6IERhdGEgQ29ycnVwdGlvbi4gUmVjb3ZlcmVkIEZyYWdtZW50OiBIVURIQUNLe0I0UzM2NF9EM0MwRDNSfQ==";
console.log("%c⚠️ SYSTEM WARNING ⚠️", "color: red; font-weight: bold; font-size: 20px;");
console.log("Error 0x5F: Unknown string detected in memory buffer.");
console.log("Raw Data: " + msg);
console.log("Hint: Use a Base64 decoder to analyse the raw data.");

/* COUNTDOWN TIMER: UPDATED TO 10 AM */
const eventTime = new Date("2026-02-26T10:00:00").getTime();
function updateCountdown() {
    const now = new Date().getTime();
    const diff = eventTime - now;
    if (diff <= 0) return;
    document.getElementById("days").innerText = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0");
    document.getElementById("hours").innerText = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, "0");
    document.getElementById("minutes").innerText = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0");
    document.getElementById("seconds").innerText = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");
}
setInterval(updateCountdown, 1000);
updateCountdown();

/* BACK TO TOP BUTTON LOGIC */
window.addEventListener('scroll', () => {
    const btn = document.getElementById('backToTop');
    if (window.scrollY > 300) btn.classList.add('visible');
    else btn.classList.remove('visible');
});