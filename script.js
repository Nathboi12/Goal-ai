/* ---------------- matching engine ---------------- */
const STOP = new Set("a an the is are was were be been am i you your my me we our it its of to in on at for with and or but do does did can could would should will just please how what when where who why which that this these those there here so if as by from about into".split(" "));
const stem = w => w.length > 3 ? w.replace(/(ing|ed)$/, "").replace(/s$/, "") : w;
const toks = s => s.toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/)
  .filter(w => w && !STOP.has(w)).map(stem);
const norm = s => s.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();

const index = KB.map(e => ({
  e,
  variants: e.q.map(q => ({ raw: norm(q), t: new Set(toks(q)) })),
  kw: new Set((e.k || []).flatMap(toks))
}));

function score(entry, userRaw, userSet) {
  let best = 0;
  for (const v of entry.variants) {
    if (v.raw === userRaw) return 1;
    if (!v.t.size || !userSet.size) continue;
    let hit = 0;
    userSet.forEach(t => { if (v.t.has(t)) hit++; });
    best = Math.max(best, hit / Math.sqrt(v.t.size * userSet.size));
  }
  let kwHits = 0;
  userSet.forEach(t => { if (entry.kw.has(t)) kwHits++; });
  return Math.min(1, best + Math.min(kwHits, 2) * 0.2);
}

function answer(text) {
  const raw = norm(text), set = new Set(toks(text));
  let top = null, topScore = 0;
  for (const entry of index) {
    const s = score(entry, raw, set);
    if (s > topScore) { topScore = s; top = entry; }
  }
  return topScore >= 0.45 ? top.e.a : FALLBACK;
}

/* ---------------- chat UI ---------------- */
const log = document.getElementById("log");
const input = document.getElementById("input");
document.getElementById("botname").textContent = BOT_NAME;
document.title = BOT_NAME;

function add(text, who) {
  const d = document.createElement("div");
  d.className = "msg " + who;
  d.textContent = text;
  log.appendChild(d);
  log.scrollTop = log.scrollHeight;
  return d;
}

function ask(text) {
  text = text.trim();
  if (!text) return;
  add(text, "me");
  const t = add("…", "bot typing");
  setTimeout(() => { t.className = "msg bot"; t.textContent = answer(text); log.scrollTop = log.scrollHeight; }, 450);
}

document.getElementById("bar").addEventListener("submit", e => {
  e.preventDefault();
  ask(input.value);
  input.value = "";
});

const chips = document.getElementById("chips");
KB.filter(e => e.chip).forEach(e => {
  const b = document.createElement("button");
  b.type = "button";
  b.textContent = e.q[0];
  b.addEventListener("click", () => ask(e.q[0]));
  chips.appendChild(b);
});

add(GREETING, "bot");
