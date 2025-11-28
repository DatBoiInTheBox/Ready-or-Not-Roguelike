
const ITEMS = [
  // Pistols (cheap)
  { id: "g19", name: "G19", category: "Pistols", type: "weapon", price: 0, rarity: "Common", description: "Standard 9mm sidearm. Owned at start.", ammoType: "9mm_jhp" },
  { id: "509", name: "509", category: "Pistols", type: "weapon", price: 300, rarity: "Common", description: "" },
  { id: "b92x", name: "B92X", category: "Pistols", type: "weapon", price: 350, rarity: "Common", description: "" },
  { id: "fiveseven", name: "FIVESEVEN", category: "Pistols", type: "weapon", price: 400, rarity: "Uncommon", description: "", ammoType: "5_7x28" },
  { id: "usp45", name: "USP45", category: "Pistols", type: "weapon", price: 450, rarity: "Uncommon", description: "", ammoType: "45_acp" },
  { id: "trpl", name: "TRPL (Non-Lethal Pistol)", category: "Non-Lethal", type: "weapon", price: 900, rarity: "Epic", description: "Non-lethal pistol option." },

  // SMGs (small/cheap)
  { id: "mp9", name: "MP9", category: "SMGs", type: "weapon", price: 900, rarity: "Uncommon", description: "", ammoType: "9mm_fmj" },
  { id: "spc9", name: "SPC9", category: "SMGs", type: "weapon", price: 1000, rarity: "Uncommon", description: "", ammoType: "9mm_fmj" },
  { id: "mpx", name: "MPX", category: "SMGs", type: "weapon", price: 1100, rarity: "Rare", description: "", ammoType: "9mm_fmj" },
  { id: "ump9", name: "UMP-9", category: "SMGs", type: "weapon", price: 1100, rarity: "Rare", description: "", ammoType: "9mm_fmj" },
  { id: "ump45", name: "UMP-45", category: "SMGs", type: "weapon", price: 1200, rarity: "Rare", description: "", ammoType: "45_acp" },

  // Shotguns (mid)
  { id: "590m", name: "590M", category: "Shotguns", type: "weapon", price: 1300, rarity: "Uncommon", description: "", ammoType: "12g_buck" },
  { id: "870cqb", name: "870CQB", category: "Shotguns", type: "weapon", price: 1400, rarity: "Uncommon", description: "", ammoType: "12g_buck" },
  { id: "supernova", name: "SUPERNOVA", category: "Shotguns", type: "weapon", price: 1450, rarity: "Rare", description: "" },

  // ARs (mid-high / high)
  { id: "mk18", name: "MK18", category: "ARs", type: "weapon", price: 1900, rarity: "Rare", description: "", ammoType: "5_56" },
  { id: "arn180", name: "ARN-180", category: "ARs", type: "weapon", price: 2000, rarity: "Rare", description: "", ammoType: "5_56" },
  { id: "f90", name: "F90", category: "ARs", type: "weapon", price: 2100, rarity: "Rare", description: "", ammoType: "5_56" },
  { id: "mk17", name: "MK17 (7.62 SCAR)", category: "ARs", type: "weapon", price: 3000, rarity: "Epic", description: "", ammoType: "7_62" },

  // Non-Lethal (expensive)
  { id: "vpl25", name: "VPL-25 (Non-Lethal Launcher)", category: "Non-Lethal", type: "weapon", price: 4500, rarity: "Epic", description: "High-end non-lethal launcher." },
  { id: "beanbag", name: "Beanbag Shotgun", category: "Non-Lethal", type: "weapon", price: 2200, rarity: "Rare", description: "Less-lethal shotgun option.", ammoType: "beanbag" },

  // Armor
  { id: "stab_vest", name: "Stab Vest", category: "Armor", type: "armor", price: 500, rarity: "Common", description: "" },
  { id: "light_armor", name: "Light Armor", category: "Armor", type: "armor", price: 900, rarity: "Uncommon", description: "" },
  { id: "heavy_armor", name: "Heavy Armor", category: "Armor", type: "armor", price: 1300, rarity: "Rare", description: "" },

  // Helmets / Facewear / Mounts
  { id: "helmet_only", name: "Helmet Only", category: "Helmets", type: "helmet", price: 300, rarity: "Common", description: "" },
  { id: "ballistic_mask", name: "Ballistic Mask", category: "Helmets", type: "helmet", price: 600, rarity: "Rare", description: "" },
  { id: "nvgs", name: "NVGs", category: "Helmets", type: "mount", price: 1200, rarity: "Rare", description: "" },

  // Tactical / Deployables
  { id: "flashbang", name: "Flashbang", category: "Tactical", type: "tactical", price: 150, rarity: "Common", description: "" },
  { id: "cs_gas", name: "CS Gas", category: "Tactical", type: "tactical", price: 200, rarity: "Uncommon", description: "" },
  { id: "stinger", name: "Stinger", category: "Tactical", type: "tactical", price: 175, rarity: "Uncommon", description: "" },
  { id: "taser", name: "Taser", category: "Tactical", type: "tactical", price: 600, rarity: "Rare", description: "" },

  // Ammo items (buying a "mag" adds +1 to that ammo count)
  { id: "9mm_jhp", name: "9mm JHP Mag", category: "Ammo", type: "ammo", price: 35, rarity: "Common", description: "Common defensive 9mm JHP mag. Buying adds +1 mag." },
  { id: "9mm_fmj", name: "9mm FMJ Mag", category: "Ammo", type: "ammo", price: 30, rarity: "Common", description: "Full metal jacket 9mm mag." },
  { id: "45_acp", name: ".45 ACP Mag", category: "Ammo", type: "ammo", price: 55, rarity: "Uncommon", description: "" },
  { id: "5_56", name: "5.56 NATO Mag", category: "Ammo", type: "ammo", price: 85, rarity: "Uncommon", description: "" },
  { id: "7_62", name: "7.62 Mag", category: "Ammo", type: "ammo", price: 110, rarity: "Rare", description: "" },
  { id: "12g_buck", name: "12ga Buckshot", category: "Ammo", type: "ammo", price: 70, rarity: "Uncommon", description: "" },
  { id: "beanbag", name: "Beanbag Round", category: "Ammo", type: "ammo", price: 150, rarity: "Rare", description: "" }
];

/* ====== Game constants ====== */
const BASE_PAY = 1000; // payout base used in mission flow (unchanged)
const START_STATE = {
  balance: 0,
  ownedWeapons: ["g19"],       // player starts owning G19
  ownedArmor: [],              // armor ids
  ownedHelmet: null,
  ownedTactical: [],           // deployables owned (these are items you keep until death)
  ammoCounts: { "9mm_jhp": 3 }, // player starts with 3 9mm JHP mags
};

/* ====== Persistence ====== */
const STORAGE_KEY = "ron_roguelike_v1";
function loadState(){
  const raw = localStorage.getItem(STORAGE_KEY);
  if(!raw) return structuredClone(START_STATE);
  try{
    const obj = JSON.parse(raw);
    // ensure keys exist
    obj.balance = obj.balance ?? START_STATE.balance;
    obj.ownedWeapons = obj.ownedWeapons ?? [];
    obj.ownedArmor = obj.ownedArmor ?? [];
    obj.ownedHelmet = obj.ownedHelmet ?? null;
    obj.ownedTactical = obj.ownedTactical ?? [];
    obj.ammoCounts = obj.ammoCounts ?? {};
    return obj;
  }catch(e){
    console.warn("Load parse failed, resetting to start", e);
    return structuredClone(START_STATE);
  }
}
function saveState(){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

/* ====== State ====== */
let state = loadState();

/* ====== Missions (existing pool) ====== */
const MISSIONS = [
  "Thank You, Come Again (4U Gas Station)",
  "23 Megabytes A Second (San Uriel Condominiums)",
  "Twisted Nerve (213 Park Homes)",
  "The Spider (Brixley Talent Time)",
  "Neon Tomb (Neon Nightclub)",
  "Relapse (Wenderly Hills Hotel)",
  "The Sinful Way (Red Library)"
];

let currentMission = "";
let timerInterval = null;
let timerSeconds = 0;

/* ====== DOM Helpers ====== */
const el = id => document.getElementById(id);
const formatMoney = n => `$${n.toLocaleString()}`;

/* ====== UI Init / Render ====== */
function refreshBalance(){ el("balance").innerText = `Balance: ${formatMoney(state.balance)}`; }
function getItemById(id){ return ITEMS.find(i=>i.id===id); }
function rarityClass(r){ return r.toLowerCase().replace(/\s+/g,""); }

function renderBriefLoadout(){
  const container = el("brief-loadout");
  container.innerHTML = "";
  // weapons
  if(state.ownedWeapons.length===0){
    container.innerHTML = `<div class="badge">No weapons owned</div>`;
  } else {
    state.ownedWeapons.forEach(id=>{
      const it = getItemById(id);
      const name = it ? it.name : id;
      const div = document.createElement("div");
      div.className = "badge";
      div.innerText = name;
      container.appendChild(div);
    });
  }
  // armor
  if(state.ownedArmor.length) state.ownedArmor.forEach(a=>{ const it=getItemById(a); const d=document.createElement("div"); d.className="badge"; d.innerText=it?.name||a; container.appendChild(d); });
  if(state.ownedHelmet) { const it=getItemById(state.ownedHelmet); const d=document.createElement("div"); d.className="badge"; d.innerText=it?.name||state.ownedHelmet; container.appendChild(d); }

  // ammo summary
  const ammoSumm = document.createElement("div");
  ammoSumm.style.display="flex";
  ammoSumm.style.gap="8px";
  ammoSumm.style.flexWrap="wrap";
  for(const [ammo,count] of Object.entries(state.ammoCounts)){
    const it = getItemById(ammo);
    if(!it || count<=0) continue;
    const d = document.createElement("div");
    d.className="badge";
    d.innerText = `${it.name} × ${count}`;
    ammoSumm.appendChild(d);
  }
  container.appendChild(ammoSumm);
}

function renderItemsGrid(category){
  const grid = el("itemsGrid");
  grid.innerHTML = "";

  const items = ITEMS.filter(i => i.category === category);
  items.forEach(item=>{
    const card = document.createElement("div");
    card.className = "card";

    const title = document.createElement("div");
    title.className = "title";
    title.innerHTML = `<span>${item.name}</span><span class="price">${item.price>0?formatMoney(item.price):"Owned"}</span>`;

    const rarity = document.createElement("div");
    rarity.className = `rarity ${rarityClass(item.rarity)}`;
    rarity.innerText = item.rarity;

    const desc = document.createElement("div");
    desc.className = "desc";
    desc.innerText = item.description || "";

    const row = document.createElement("div");
    row.className = "row";

    // Buy / Owned logic
    const isOwned = (() => {
      if(item.type === "weapon") return state.ownedWeapons.includes(item.id);
      if(item.type === "armor") return state.ownedArmor.includes(item.id);
      if(item.type === "helmet") return state.ownedHelmet === item.id;
      if(item.type === "tactical") return state.ownedTactical.includes(item.id);
      if(item.type === "ammo") return false; // ammo can be bought repeatedly (counts)
      return false;
    })();

    const buyBtn = document.createElement("button");
    buyBtn.className = "buyBtn";
    if(item.type === "ammo"){
      buyBtn.innerText = `BUY +1 ($${item.price})`;
    } else {
      buyBtn.innerText = isOwned ? "OWNED" : `BUY ($${item.price})`;
      if(isOwned) buyBtn.classList.add("disabled");
    }

    buyBtn.addEventListener("click", () => buyItem(item.id));

    // ownership badge for weapons/armor etc
    const rightSide = document.createElement("div");
    if(isOwned){
      const ownedBadge = document.createElement("span");
      ownedBadge.className = "ownedBadge";
      ownedBadge.innerText = "OWNED";
      rightSide.appendChild(ownedBadge);
    } else {
      rightSide.appendChild(buyBtn);
    }

    row.appendChild(rarity);
    row.appendChild(rightSide);

    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(row);

    grid.appendChild(card);
  });
}

/* ====== Shop / Tab UI ====== */
function openShop(category="Pistols"){
  el("shopPanel").style.display = "block";
  el("panelTitle").innerText = "Shop — " + category;
  // set active tab
  document.querySelectorAll(".tab").forEach(t => t.classList.toggle("active", t.dataset.tab === category));
  renderItemsGrid(category);
}
function closeShop(){
  el("shopPanel").style.display = "none";
  renderBriefLoadout();
}

/* ====== Buying Logic ====== */
function buyItem(id){
  const item = getItemById(id);
  if(!item) return alert("Item not found.");
  if(item.price > state.balance) return alert("Not enough money.");

  // Ammo: increment count by 1 (ammo persists)
  if(item.type === "ammo"){
    state.ammoCounts[item.id] = (state.ammoCounts[item.id] ?? 0) + 1;
    state.balance -= item.price;
    saveState(); refreshBalance(); renderBriefLoadout(); renderItemsGrid(item.category);
    return;
  }

  // Weapon / Armor / Tactical / Helmet purchases: must not already own
  if(item.type === "weapon"){
    if(state.ownedWeapons.includes(item.id)) return;
    state.ownedWeapons.push(item.id);
    state.balance -= item.price;
  } else if(item.type === "armor"){
    if(state.ownedArmor.includes(item.id)) return;
    state.ownedArmor.push(item.id);
    state.balance -= item.price;
  } else if(item.type === "helmet"){
    if(state.ownedHelmet === item.id) return;
    state.ownedHelmet = item.id;
    state.balance -= item.price;
  } else if(item.type === "tactical"){
    if(!state.ownedTactical.includes(item.id)) state.ownedTactical.push(item.id);
    state.balance -= item.price;
  } else {
    // fallback
    state.balance -= item.price;
  }

  saveState();
  refreshBalance();
  renderBriefLoadout();
  renderItemsGrid(item.category);
}

/* ====== Mission Flow (existing logic, extended to add payout to balance) ====== */
function beginRun(){
  el("screen-start").style.display = "none";
  assignMission();
  el("screen-mission").style.display = "block";
  renderBriefLoadout();
}

function assignMission(){
  currentMission = MISSIONS[Math.floor(Math.random()*MISSIONS.length)];
  el("mission-name").innerText = currentMission;
  // ensure correct screens
  el("screen-mission").style.display = "block";
  el("screen-timer").style.display = "none";
  el("screen-score").style.display = "none";
  el("screen-results").style.display = "none";
}

function startMissionTimer(){
  el("screen-mission").style.display = "none";
  el("screen-timer").style.display = "block";
  timerSeconds = 0; updateTimer();
  timerInterval = setInterval(() => { timerSeconds++; updateTimer(); }, 1000);
}

function updateTimer(){
  const mins = Math.floor(timerSeconds / 60);
  const sec = timerSeconds % 60;
  el("timer").innerText = `${mins}:${sec.toString().padStart(2,"0")}`;
}

function finishMission(){
  clearInterval(timerInterval);
  el("screen-timer").style.display = "none";
  el("screen-score").style.display = "block";
}

function getMultiplier(score){
  if(score >= 90) return 1.75;
  if(score >= 80) return 1.5;
  if(score >= 70) return 1.25;
  if(score >= 60) return 1.0;
  if(score >= 50) return 0.75;
  return 0.25;
}

function submitScore(){
  const raw = parseInt(el("scoreInput").value);
  if(isNaN(raw)) return alert("Enter a valid score.");
  const multiplier = getMultiplier(raw);
  const earned = Math.floor(BASE_PAY * multiplier);
  state.balance += earned;
  saveState();
  refreshBalance();

  el("money-earned").innerText = `Score: ${raw} → You earned ${formatMoney(earned)}`;
  el("screen-score").style.display = "none";
  el("screen-results").style.display = "block";
  renderBriefLoadout();
}

/* ====== Roguelike Death Simulation ====== */
function simulateDeath(){
  // lose weapons, armor, helmet, tactical deployables
  state.ownedWeapons = []; // weapons lost
  state.ownedArmor = [];
  state.ownedHelmet = null;
  state.ownedTactical = [];
  saveState();
  refreshBalance();
  renderBriefLoadout();
  alert("You died: all weapons, armor, helmet and deployables have been lost. Ammo and money persist.");
}

/* ====== UI wiring ====== */
function wireUI(){
  // top-level buttons
  el("startRunBtn").addEventListener("click", beginRun);
  el("openLoadout").addEventListener("click", () => {
    // open shop panel to a pseudo-loadout view: show owned items by switching to first tab and just viewing brief
    openShop("Pistols");
  });
  el("openShop").addEventListener("click", () => openShop("Pistols"));
  el("startMissionBtn").addEventListener("click", startMissionTimer);
  el("finishBtn").addEventListener("click", finishMission);
  el("submitScoreBtn").addEventListener("click", submitScore);
  el("continueBtn").addEventListener("click", () => {
    assignMission();
  });
  el("simulateDeathBtn").addEventListener("click", simulateDeath);

  // shop controls
  el("closeShop").addEventListener("click", closeShop);
  document.querySelectorAll(".tab").forEach(t=>{
    t.addEventListener("click", ()=>{
      document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));
      t.classList.add("active");
      renderItemsGrid(t.dataset.tab);
      el("panelTitle").innerText = "Shop — " + t.dataset.tab;
    });
  });

  // initial render
  refreshBalance();
  renderBriefLoadout();
}

/* ====== On load ====== */
document.addEventListener("DOMContentLoaded", ()=>{
  // ensure defaults exist
  state = loadState();
  // set initial balance if not present
  if(typeof state.balance !== "number") state.balance = START_STATE.balance;
  wireUI();
  assignMission();
});
