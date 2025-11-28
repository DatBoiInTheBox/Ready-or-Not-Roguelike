const missions = [
    { name: "Thank You, Come Again", base: 500 },
    { name: "23 Megabytes A Second", base: 750 },
    { name: "Twisted Nerve", base: 1000 },
    { name: "The Spider", base: 1200 },
    { name: "Ides of March", base: 1500 },
    { name: "Sinuous Trail", base: 650 }
];

const multipliers = [
    { grade: "S", value: 1.75 },
    { grade: "A", value: 1.5 },
    { grade: "B", value: 1.25 },
    { grade: "C", value: 1.0 },
    { grade: "D", value: 0.75 },
    { grade: "F", value: 0.25 }
];

function generateMission() {
    const m = missions[Math.floor(Math.random() * missions.length)];
    const r = multipliers[Math.floor(Math.random() * multipliers.length)];

    const payout = Math.floor(m.base * r.value);

    document.getElementById("mission").innerHTML = `
        <h2>${m.name}</h2>
        <p>Base Pay: $${m.base}</p>
        <p>Performance Grade: ${r.grade}</p>
    `;

    document.getElementById("payout").innerHTML = `
        <h2>Total Payout: $${payout}</h2>
    `;
}

