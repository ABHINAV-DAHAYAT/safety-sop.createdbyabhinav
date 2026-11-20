const $ = id => document.getElementById(id);
const list = $("list"), chips = $("chips"), q = $("q");
let category = "All", done = {};
try { done = JSON.parse(localStorage.getItem("sop-done") || "{}"); } catch (e) {}
const save = () => { try { localStorage.setItem("sop-done", JSON.stringify(done)); } catch (e) {} };
const esc = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

function header(){
  $("brand").textContent = SITE.company;
  document.title = SITE.company + " | Operational Safety Broadcast";
  $("foot").textContent = SITE.company + " safety procedures. Contact your supervisor if a recording is missing or out of date.";
  $("contacts").innerHTML = SITE.contacts.map(c => `<dt>${esc(c.label)}</dt><dd>${esc(c.value)}</dd>`).join("");
}
function buildChips(){
  const cats = ["All", ...new Set(SOPS.map(s => s.category))];
  chips.innerHTML = cats.map(c => `<button type="button" aria-pressed="${c===category}" data-c="${esc(c)}">${esc(c)}</button>`).join("");
}
function render(){
  const term = q.value.trim().toLowerCase();
  const items = SOPS.filter(s => (category==="All" || s.category===category) && (s.title+" "+s.category).toLowerCase().includes(term));
  const n = SOPS.filter(s => done[s.file]).length, total = SOPS.length;
  $("status").textContent = `Showing ${items.length} of ${total} procedures.`;
  $("progressText").textContent = `${n} of ${total} listened`;
  $("fill").style.width = total ? (n/total*100) + "%" : "0";
  list.innerHTML = items.length ? items.map(s => `
    <article class="sop ${done[s.file] ? "done" : ""}">
      <h3>${esc(s.title)}</h3>
      <p class="cat">${esc(s.category)}</p>
      <audio controls preload="none" src="${esc(s.file)}">Your browser does not support audio.</audio>
      <label><input type="checkbox" data-f="${esc(s.file)}" ${done[s.file] ? "checked" : ""}> I have listened to this</label>
      ${s.transcript ? `<details><summary>Read transcript</summary><p>${esc(s.transcript)}</p></details>` : ""}
    </article>`).join("") : '<p class="empty">No procedures match your search.</p>';
}
chips.addEventListener("click", e => { const b = e.target.closest("button"); if (!b) return; category = b.dataset.c; buildChips(); render(); });
q.addEventListener("input", render);
list.addEventListener("change", e => { const f = e.target.dataset.f; if (!f) return; e.target.checked ? done[f] = true : delete done[f]; save(); render(); });
list.addEventListener("play", e => list.querySelectorAll("audio").forEach(a => { if (a !== e.target) a.pause(); }), true);
header(); buildChips(); render();
