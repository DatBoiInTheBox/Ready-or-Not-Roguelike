// --- MISSIONS ---
const missions = [
    "Thank You, Come Again (4U Gas Station)",
    "23 Megabytes A Second (San Uriel Condominiums)",
    "Twisted Nerve (213 Park Homes)",
    "The Spider (Brixley Talent Time)",
    "Neon Tomb (Neon Nightclub)",
    "Relapse (Wenderly Hills Hotel)",
    "The Sinful Way (Red Library)"
];

// --- SCORE → PAY MULTIPLIER ---
function getMultiplier(score) {
    if (score >= 90) return 1.75; // S
    if (score >= 80) return 1.5;  // A
    if (score >= 70) return 1.25; // B
    if (score >= 60) return 1.0;  // C
    if (score >= 50) return 0.75; // D
    return 0.25;                  // F
}

// --- BASE PAY FOR ALL MISSIONS ---
const BASE_PAY = 1000;

// --- GAME STATE ---
let currentMission = "";
let timerInterval;
let seconds = 0;

// --- START RUN ---
function beginRun() {
    document.getElementById("screen-start").style.display = "none";
    assignMission();
}

// --- PICK RANDOM MISSION ---
function assignMission() {
    currentMission = missions[Math.floor(Math.random() * missions.length)];
    document.getElementById("mission-name").innerText = currentMission;

    document.getElementById("screen-mission").style.display = "block";
    document.getElementById("screen-timer").style.display = "none";
    document.getElementById("screen-score").style.display = "none";
    document.getElementById("screen-results").style.display = "none";
}

// --- START TIMER ---
function startMissionTimer() {
    document.getElementById("screen-mission").style.display = "none";
    document.getElementById("screen-timer").style.display = "block";

    seconds = 0;
    updateTimer();

    timerInterval = setInterval(() => {
        seconds++;
        updateTimer();
    }, 1000);
}

function updateTimer() {
    const mins = Math.floor(seconds / 60);
    const sec = seconds % 60;
    document.getElementById("timer").innerText = `${mins}:${sec.toString().padStart(2, "0")}`;
}

// --- FINISH MISSION ---
function finishMission() {
    clearInterval(timerInterval);

    document.getElementById("screen-timer").style.display = "none";
    document.getElementById("screen-score").style.display = "block";
}

// --- SUBMIT SCORE ---
function submitScore() {
    let score = parseInt(document.getElementById("scoreInput").value);

    if (isNaN(score)) {
        alert("Enter a valid score.");
        return;
    }

    const multiplier = getMultiplier(score);
    const total = Math.floor(BASE_PAY * multiplier);

    document.getElementById("money-earned").innerText =
        `Score: ${score} → You earned $${total}`;

    document.getElementById("screen-score").style.display = "none";
    document.getElementById("screen-results").style.display = "block";
}

// --- NEXT MISSION LOOP ---
function nextMission() {
    assignMission();
}

