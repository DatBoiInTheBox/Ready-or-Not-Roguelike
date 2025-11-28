const MISSION_MUSIC = {
  "Thank You, Come Again (4U Gas Station)": "audio/thank_you_4u.mp3",
  "23 Megabytes A Second (San Uriel Condominiums)": "audio/23mbs_san_uriel.mp3",
  "Twisted Nerve (213 Park Homes)": "audio/twisted_nerve.mp3",
  "The Spider (Brixley Talent Time)": "audio/the_spider.mp3",
  "Neon Tomb (Neon Nightclub)": "audio/neon_tomb.mp3",
  "A Lethal Obsession": "audio/alethalobsession.mp3",
  "Sinuous Trail": "audio/mindjolt.mp3",
};

const ITEMS = [
  { id: "g19", name: "G19", category: "Pistols", type: "weapon", price: 0, rarity: "Common", description: "Standard 9mm sidearm. Owned at start.", ammoType: "9mm_jhp" },
  { id: "509", name: "509", category: "Pistols", type: "weapon", price: 300, rarity: "Common", description: "" },
  { id: "b92x", name: "B92X", category: "Pistols", type: "weapon", price: 350, rarity: "Common", description: "" },
  { id: "fiveseven", name: "FIVESEVEN", category: "Pistols", type: "weapon", price: 400, rarity: "Uncommon", description: "", ammoType: "5_7x28" },
  { id: "usp45", name: "USP45", category: "Pistols", type: "weapon", price: 450, rarity: "Uncommon", description: "", ammoType: "45_acp" },

  { id: "mp9", name: "MP9", category: "SMGs", type: "weapon", price: 900, rarity: "Uncommon", description: "", ammoType: "9mm_fmj" },
  { id: "spc9", name: "SPC9", category: "SMGs", type: "weapon", price: 1000, rarity: "Uncommon", description: "", ammoType: "9mm_fmj" },
  { id: "mpx", name: "MPX", category: "SMGs", type: "weapon", price: 1100, rarity: "Rare", description: "", ammoType: "9mm_fmj" },

  { id: "590m", name: "590M", category: "Shotguns", type: "weapon", price: 1300, rarity: "Uncommon", description: "", ammoType: "12g_buck" },
  { id: "870cqb", name: "870CQB", category: "Shotguns", type: "weapon", price: 1400, rarity: "Uncommon", description: "", ammoType: "12g_buck" },
  { id: "supernova", name: "SUPERNOVA", category: "Shotguns", type: "weapon", price: 1450, rarity: "Rare", description: "" },

  { id: "mk18", name: "MK18", category: "ARs", type: "weapon", price: 1900, rarity: "Rare", description: "", ammoType: "5_56" },
  { id: "arn180", name: "ARN-180", category: "ARs", type: "weapon", price: 2000, rarity: "Rare", description: "", ammoType: "5_56" },
  { id: "f90", name: "F90", category: "ARs", type: "weapon", price: 2100, rarity: "Rare", description: "", ammoType: "5_56" },
  { id: "mk17", name: "MK17 (7.62 SCAR)", category: "ARs", type: "weapon", price: 3000, rarity: "Epic", description: "", ammoType: "7_62" },

  { id: "vpl25", name: "VPL-25 (Non-Lethal Launcher)", category: "Non-Lethal", type: "weapon", price: 4500, rarity: "Epic", description: "High-end non-lethal launcher." },
  { id: "beanbag_sg", name: "Beanbag Shotgun", category: "Non-Lethal", type: "weapon", price: 2200, rarity: "Rare", description: "Less-lethal shotgun option.", ammoType: "beanbag_round" },

  { id: "stab_vest", name: "Stab Vest", category: "Armor", type: "armor", price: 500, rarity: "Common", description: "" },
  { id: "light_armor", name: "Light Armor", category: "Armor", type: "armor", price: 900, rarity: "Uncommon", description: "" },
  { id: "heavy_armor", name: "Heavy Armor", category: "Armor", type: "armor", price: 1300, rarity: "Rare", description: "" },

  { id: "helmet_only", name: "Helmet Only", category: "Helmets", type: "helmet", price: 300, rarity: "Common", description: "" },
  { id: "ballistic_mask", name: "Ballistic Mask", category: "Helmets", type: "helmet", price: 600, rarity: "Rare", description: "" },
  { id: "nvgs", name: "NVGs", category: "Helmets", type: "mount", price: 1200, rarity: "Rare", description: "" },

  { id: "flashbang", name: "Flashbang", category: "Tactical", type: "tactical", price: 150, rarity: "Common", description: "" },
  { id: "cs_gas", name: "CS Gas", category: "Tactical", type: "tactical", price: 200, rarity: "Uncommon", description: "" },
  { id: "stinger", name: "Stinger", category: "Tactical", type: "tactical", price: 175, rarity: "Uncommon", description: "" },
  { id: "taser", name: "Taser", category: "Tactical", type: "tactical", price: 600, rarity: "Rare", description: "" },

  { id: "9mm_jhp", name: "9mm JHP Mag", category: "Ammo", type: "ammo", price: 35, rarity: "Common", description: "Buy adds +1 mag." },
  { id: "9mm_fmj", name: "9mm FMJ Mag", category: "Ammo", type: "ammo", price: 30, rarity: "Common", description: "Buy adds +1 mag." },
  { id: "45_acp", name: ".45 ACP Mag", category: "Ammo", type: "ammo", price: 55, rarity: "Uncommon", description: "" },
  { id: "5_56", name: "5.56 NATO Mag", category: "Ammo", type: "ammo", price: 85, rarity: "Uncommon", description: "" },
  { id: "7_62", name: "7.62 Mag", category: "Ammo", type: "ammo", price: 110, rarity: "Rare", description: "" },
  { id: "12g_buck", name: "12ga Buckshot", category: "Ammo", type: "ammo", price: 70, rarity: "Uncommon", description: "" },
  { id: "beanbag_round", name: "Beanbag Round", category: "Ammo", type: "ammo", price: 150, rarity: "Rare", description: "" }
];

const BASE_PAY = 1000;
const START_STATE = {
  balance: 0,
  ownedWeapons: ["g19"],
  ownedArmor: [],
  ownedHelmet: null,
  ownedTactical: [],
  ammoCounts: { "9mm_jhp": 3 },
  // equipped slots
  equipped: { primary: null, secondary: "g19", armor: null, helmet: null }
};

const STORAGE_KEY = "ron_roguelike_v2";
function loadState(){
  const raw = localStorage.getItem(STORAGE_KEY);
  if(!raw) return structuredClone(START_STATE);
  try{
    const obj = JSON.parse(raw);
    obj.balance = obj.balance ?? START_STATE.balance;
    obj.ownedWeapons = obj.ownedWeapons ?? [];
    obj.ownedArmor = obj.ownedArmor ?? [];
    obj.ownedHelmet = obj.ownedHelmet ?? null;
    obj.ownedTactical = obj.ownedTactical ?? [];
    obj.ammoCounts = obj.ammoCounts ?? {};
    obj.equipped = obj.equipped ?? structuredClone(START_STATE.equipped);
    return obj;
  }catch(e){
    console.warn("Load parse failed, resetting to start", e);
    return structuredClone(START_STATE);
  }
}
function saveState(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }

/* ====== State ====== */
let state = loadState();

/* ====== Missions ====== */
const MISSIONS = [
  "Thank You, Come Again",
  "23 Megabytes A Second",
  "Twisted Nerve",
  "The Spider",
  "Neon Tomb",
  "A Lethal Obession",
  "Ides of March",
  "Sinuous Trail"
];

let currentMission = "";
let timerInterval = null;
let timerSeconds = 0;

/* ====== DOM Helpers ====== */
const el = id => document.getElementById(id);
const formatMoney = n => `$${n.toLocaleString()}`;
function getItemById(id){ return ITEMS.find(i=>i.id===id); }
function rarityClass(r){ return r.toLowerCase().replace(/\s+/g,""); }

function ensureMusicPlayer(){
  let audio = el("musicPlayer");
  if(!audio){
    audio = document.createElement("audio");
    audio.id = "musicPlayer";
    audio.preload = "auto";
    audio.style.display = "none";
    document.body.appendChild(audio);
  }
  return audio;
}

function resolveMusicForMission(name){
  const DEFAULT = "audio/mindjolt.mp3";
  if(!name) return DEFAULT;
  if(MISSION_MUSIC[name]) return MISSION_MUSIC[name];
  const norm = s => (s||"").toLowerCase().replace(/[^a-z0-9]+/g,"");
  const q = norm(name);
  for(const key of Object.keys(MISSION_MUSIC)){
    if(key.toLowerCase().includes(name.toLowerCase()) || name.toLowerCase().includes(key.toLowerCase())) return MISSION_MUSIC[key];
    if(norm(key).includes(q) || q.includes(norm(key))) return MISSION_MUSIC[key];
  }
  for(const key of Object.keys(MISSION_MUSIC)){
    if(key.toLowerCase().includes(q) || q.includes(key.toLowerCase())) return MISSION_MUSIC[key];
  }
  return DEFAULT;
}

/* ====== Renderers ====== */
function refreshBalance(){ el("balance").innerText = `Balance: ${formatMoney(state.balance)}`; }

function renderBriefLoadout(){
  const container = el("brief-loadout");
  container.innerHTML = "";
  if(state.ownedWeapons.length===0) container.innerHTML = `<div class="badge">No weapons owned</div>`;
  state.ownedWeapons.forEach(id=>{
    const it = getItemById(id);
    const d=document.createElement("div"); d.className="badge"; d.innerText = it?.name||id; container.appendChild(d);
  });
  state.ownedArmor.forEach(a=>{ const it=getItemById(a); const d=document.createElement("div"); d.className="badge"; d.innerText = it?.name||a; container.appendChild(d); });
  if(state.ownedHelmet){ const it=getItemById(state.ownedHelmet); const d=document.createElement("div"); d.className="badge"; d.innerText = it?.name||state.ownedHelmet; container.appendChild(d); }

  const ammoSumm = document.createElement("div"); ammoSumm.style.display="flex"; ammoSumm.style.gap="8px"; ammoSumm.style.flexWrap="wrap";
  for(const [ammo,count] of Object.entries(state.ammoCounts)){
    const it = getItemById(ammo);
    if(!it || count<=0) continue;
    const d = document.createElement("div"); d.className="badge"; d.innerText = `${it.name} × ${count}`; ammoSumm.appendChild(d);
  }
  container.appendChild(ammoSumm);
}

function renderItemsGrid(category){
  const grid = el("itemsGrid"); grid.innerHTML="";
  const items = ITEMS.filter(i => i.category === category);
  items.forEach(item=>{
    const card = document.createElement("div"); card.className="card";
    const title = document.createElement("div"); title.className="title";
    title.innerHTML = `<span>${item.name}</span><span class="price">${item.price>0?formatMoney(item.price):"Owned"}</span>`;
    const rarity = document.createElement("div"); rarity.className=`rarity ${rarityClass(item.rarity)}`; rarity.innerText=item.rarity;
    const desc = document.createElement("div"); desc.className="desc"; desc.innerText = item.description || "";
    const row = document.createElement("div"); row.className="row";

    const isOwned = (() => {
      if(item.type === "weapon") return state.ownedWeapons.includes(item.id);
      if(item.type === "armor") return state.ownedArmor.includes(item.id);
      if(item.type === "helmet") return state.ownedHelmet === item.id;
      if(item.type === "tactical") return state.ownedTactical.includes(item.id);
      return false;
    })();

    const buyBtn = document.createElement("button"); buyBtn.className="buyBtn";
    if(item.type === "ammo") buyBtn.innerText = `BUY +1 (${formatMoney(item.price)})`;
    else buyBtn.innerText = isOwned ? "OWNED" : `BUY (${formatMoney(item.price)})`;
    if(isOwned && item.type !== "ammo") buyBtn.classList.add("disabled");
    buyBtn.addEventListener("click", ()=> buyItem(item.id));

    const rightSide = document.createElement("div");
    if(isOwned && item.type !== "ammo"){
      const ownedBadge = document.createElement("span"); ownedBadge.className="ownedBadge"; ownedBadge.innerText="OWNED"; rightSide.appendChild(ownedBadge);
    } else rightSide.appendChild(buyBtn);

    row.appendChild(rarity); row.appendChild(rightSide);
    card.appendChild(title); card.appendChild(desc); card.appendChild(row);
    grid.appendChild(card);
  });
}

/* ====== Loadout Panel Render ====== */
function renderLoadoutPanel(){
  // equipped
  const eq = el("equippedList"); eq.innerHTML="";
  const primaryName = state.equipped.primary ? (getItemById(state.equipped.primary)?.name || state.equipped.primary) : "None";
  const secondaryName = state.equipped.secondary ? (getItemById(state.equipped.secondary)?.name || state.equipped.secondary) : "None";
  const armorName = state.equipped.armor ? (getItemById(state.equipped.armor)?.name || state.equipped.armor) : "None";
  const helmetName = state.equipped.helmet ? (getItemById(state.equipped.helmet)?.name || state.equipped.helmet) : "None";
  eq.innerHTML = `<div class="badge">Primary: ${primaryName}</div><div class="badge">Secondary: ${secondaryName}</div><div class="badge">Armor: ${armorName}</div><div class="badge">Helmet: ${helmetName}</div>`;

  // owned weapons grid
 // owned weapons grid
  const gw = el("ownedWeaponsGrid"); gw.innerHTML="";
  state.ownedWeapons.forEach(wid=>{
    const it = getItemById(wid);
    const card = document.createElement("div"); card.className="card";
    card.innerHTML = `<div class="title"><span>${it?.name||wid}</span><span class="price">${it?.price?formatMoney(it.price):"Owned"}</span></div>
                      <div class="desc">${it?.description||""}</div>`;
    const row = document.createElement("div"); row.className="row";

    if(it && it.category === "Pistols"){
      const equipS = document.createElement("button");
      equipS.innerText = "Equip Secondary";
      equipS.addEventListener("click", ()=>{ state.equipped.secondary = it.id; saveState(); renderLoadoutPanel(); renderBriefLoadout(); });
      row.appendChild(equipS);
    } else {
      const equipP = document.createElement("button");
      equipP.innerText = "Equip Primary";
      equipP.addEventListener("click", ()=>{ state.equipped.primary = it.id; saveState(); renderLoadoutPanel(); renderBriefLoadout(); });
      row.appendChild(equipP);
    }

    card.appendChild(row);
    gw.appendChild(card);
  });

  // owned armor grid
  const ga = el("ownedArmorGrid"); ga.innerHTML="";
  state.ownedArmor.forEach(aid=>{
    const it = getItemById(aid);
    const card = document.createElement("div"); card.className="card";
    card.innerHTML = `<div class="title"><span>${it?.name||aid}</span><span class="price">${formatMoney(it.price)}</span></div><div class="desc">${it?.description||""}</div>`;
    const row = document.createElement("div"); row.className="row";
    const equip = document.createElement("button"); equip.innerText="Equip"; equip.addEventListener("click", ()=>{ state.equipped.armor = it.id; saveState(); renderLoadoutPanel(); });
    row.appendChild(equip);
    card.appendChild(row);
    ga.appendChild(card);
  });
  if(state.ownedHelmet){
    // show helmet separately if owned
    const h = getItemById(state.ownedHelmet);
    const card = document.createElement("div"); card.className="card";
    card.innerHTML = `<div class="title"><span>${h?.name||state.ownedHelmet}</span><span class="price">${formatMoney(h.price)}</span></div><div class="desc">${h?.description||""}</div>`;
    const row = document.createElement("div"); row.className="row";
    const equip = document.createElement("button"); equip.innerText="Equip"; equip.addEventListener("click", ()=>{ state.equipped.helmet = h.id; saveState(); renderLoadoutPanel(); });
    row.appendChild(equip); card.appendChild(row); ga.appendChild(card);
  }

  // ammo list
  const am = el("ownedAmmo"); am.innerHTML="";
  for(const [id,count] of Object.entries(state.ammoCounts)){
    const it = getItemById(id);
    if(!it) continue;
    const card = document.createElement("div"); card.className="card";
    card.innerHTML = `<div class="title"><span>${it.name}</span><span class="price">× ${count}</span></div><div class="desc">${it.description||""}</div>`;
    am.appendChild(card);
  }
}

/* ====== Buying Logic ====== */
function buyItem(id){
  const item = getItemById(id);
  if(!item) return alert("Item not found.");
  if(item.price > state.balance) return alert("Not enough money.");

  if(item.type === "ammo"){
    state.ammoCounts[item.id] = (state.ammoCounts[item.id] ?? 0) + 1;
    state.balance -= item.price;
  } else if(item.type === "weapon"){
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
    state.balance -= item.price;
  }

  saveState();
  refreshBalance();
  renderBriefLoadout();
  renderItemsGrid(item.category);
}
/* ====== Mission Picker ====== */
function openPickerThenChoose(){
  // show overlay
  const overlay = el("pickerOverlay"); overlay.style.display = "flex";
  const strip = el("pickerStrip"); strip.innerHTML = "";
  el("pickerResult").style.display = "none";
  el("pickerPointer").style.display = "block";

  // Make repeated list to give long strip; clone missions multiple times
  const sequence = [];
  for(let r=0;r<6;r++) sequence.push(...MISSIONS);
  // convert to card elements
  sequence.forEach(name=>{
    const c = document.createElement("div"); c.className="pickerCard";
    c.innerText = name;
    strip.appendChild(c);
  });

  
  const container = el("pickerContainer");
  const pointerX = container.clientWidth / 2;

  const total = strip.children.length;
  const chosenIndex = Math.floor(Math.random() * total);

  function setOffset(offset){
    strip.style.transform = `translateX(${offset}px)`;
  }

  function getCardCenter(elm){
    const rect = elm.getBoundingClientRect();
    const stripRect = strip.getBoundingClientRect();
    return rect.left - stripRect.left + rect.width/2;
  }

  setOffset(0);

  let speed = 40 + Math.random()*40;
  function computeDesiredOffsetForIndex(index){
    const card = strip.children[index];
    const cardCenter = getCardCenter(card);
    return pointerX - cardCenter;
  }

  let offset = 0;
  let frames = 0;
  const maxFrames = 200;
  const chosenFinalOffset = () => computeDesiredOffsetForIndex(chosenIndex);

  const interval = setInterval(()=>{
    frames++;
    offset -= speed;
    setOffset(offset);

    if(frames % 12 === 0) speed *= 0.85;

    const desired = chosenFinalOffset();
    if(Math.abs(offset - desired) < 10 || frames > maxFrames){
      clearInterval(interval);
      setOffset(desired);
      Array.from(strip.children).forEach(c=>c.classList.remove("selected"));
      strip.children[chosenIndex].classList.add("selected");
      el("pickedName").innerText = strip.children[chosenIndex].innerText;
      el("pickedMsg").innerText = `${strip.children[chosenIndex].innerText} HAS BEEN SELECTED AS YOUR NEXT MISSION`;
      el("pickerResult").style.display = "block";

      const chosenName = strip.children[chosenIndex].innerText;
      const audio = ensureMusicPlayer();
      const musicFile = resolveMusicForMission(chosenName) || "audio/mindjolt.mp3";

      audio.onerror = () => {
        if(audio.dataset.fallbackApplied) return;
        audio.dataset.fallbackApplied = "1";
        audio.src = "audio/mindjolt.mp3";
        audio.load();
        audio.play().catch(()=>{});
      };

      audio.dataset.fallbackApplied = "";
      audio.src = musicFile;
      audio.load();
      audio.play().catch(()=>{ /* may be blocked if unlock failed; ignore */ });

      el("confirmPicked").onclick = ()=>{
        audio.pause();
        audio.currentTime = 0;
        overlay.style.display = "none";
        currentMission = strip.children[chosenIndex].innerText;
        el("mission-name").innerText = currentMission;
        el("screen-mission").style.display = "block";
      };
    }

  }, 30);
}

/* ====== Mission Flow ====== */
function beginRun(){
  el("screen-start").style.display = "none";
  const audioUnlock = ensureMusicPlayer();
  audioUnlock.muted = true;
  audioUnlock.play().then(()=>{ audioUnlock.pause(); audioUnlock.muted = false; }).catch(()=>{ audioUnlock.muted = false; });
  openPickerThenChoose();
  renderBriefLoadout();
}

function assignMission(){ /* kept for backward compatibility */ }

function startMissionTimer(){
  if(!state.equipped.primary && !state.equipped.secondary){
    if(!confirm("You have no equipped weapons. Start mission anyway?")) return;
  }

  const audio = ensureMusicPlayer();
  audio.pause(); audio.currentTime = 0;

  el("screen-mission").style.display = "none";
  el("screen-timer").style.display = "block";
  timerSeconds = 0; updateTimer();
  timerInterval = setInterval(()=>{ timerSeconds++; updateTimer(); }, 1000);
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

/* ====== Death (lose everything except balance) ====== */
function simulateDeath(){
  state.ownedWeapons = [];
  state.ownedArmor = [];
  state.ownedHelmet = null;
  state.ownedTactical = [];
  state.ammoCounts = {};
  state.equipped = { primary: null, secondary: null, armor: null, helmet: null };
  saveState(); refreshBalance(); renderBriefLoadout(); alert("You died: all weapons, armor, helmet, deployables and ammo have been lost. Money persists.");
}

/* ====== UI wiring ====== */
function wireUI(){
  el("startRunBtn").addEventListener("click", beginRun);
  el("openLoadout").addEventListener("click", ()=>{ el("loadoutPanel").style.display = "block"; renderLoadoutPanel(); });
  el("openShop").addEventListener("click", ()=> openShop("Pistols"));
  el("startMissionBtn").addEventListener("click", startMissionTimer);
  el("finishBtn").addEventListener("click", finishMission);
  el("submitScoreBtn").addEventListener("click", submitScore);
  el("continueBtn").addEventListener("click", ()=> {
    el("screen-results").style.display = "none";
    openPickerThenChoose();
  });
  el("simulateDeathBtn").addEventListener("click", simulateDeath);

  el("closeLoadout").addEventListener("click", ()=> el("loadoutPanel").style.display = "none");
  el("closeShop").addEventListener("click", closeShop);

  document.querySelectorAll(".tab").forEach(t=>{
    t.addEventListener("click", ()=>{
      document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));
      t.classList.add("active");
      renderItemsGrid(t.dataset.tab);
      el("panelTitle").innerText = "Shop — " + t.dataset.tab;
    });
  });
}

/* ====== Shop open/close ====== */
function openShop(category="Pistols"){
  el("shopPanel").style.display = "block";
  el("panelTitle").innerText = "Shop — " + category;
  document.querySelectorAll(".tab").forEach(t => t.classList.toggle("active", t.dataset.tab === category));
  renderItemsGrid(category);
}

function closeShop(){ el("shopPanel").style.display = "none"; renderBriefLoadout(); }

/* ====== On load ====== */
document.addEventListener("DOMContentLoaded", ()=>{
  state = loadState();
  if(typeof state.balance !== "number") state.balance = START_STATE.balance;
  wireUI();
  refreshBalance();
  renderBriefLoadout();
  ensureMusicPlayer(); // create audio node if absent
});