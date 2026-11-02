/* ---------- Floating petals ---------- */
(function makePetals() {
  const box = document.getElementById("petals");
  if (!box || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  for (let i = 0; i < 18; i++) {
    const p = document.createElement("span");
    const size = 8 + Math.random() * 12;
    p.className = "petal" + (i % 3 === 0 ? " green" : "");
    p.style.cssText = `left:${Math.random() * 100}%;width:${size}px;height:${size}px;` +
      `animation-duration:${14 + Math.random() * 16}s;animation-delay:${-Math.random() * 20}s;` +
      `--drift:${(Math.random() - 0.5) * 220}px`;
    box.appendChild(p);
  }
})();

/* ---------- Swinging, draggable ID card (simple pendulum) ---------- */
(function lanyard() {
  const swing = document.getElementById("swing");
  if (!swing) return;
  let angle = 0.35, vel = 0, dragging = false;
  const gravity = 0.0016, damping = 0.992;

  function pivot() {
    const r = swing.getBoundingClientRect();
    // pivot = top centre of the (unrotated) element; use its parent for stability
    const s = swing.parentElement.getBoundingClientRect();
    return { x: s.left + s.width / 2, y: s.top + parseFloat(getComputedStyle(swing).top) };
  }

  swing.addEventListener("pointerdown", (e) => {
    dragging = true; vel = 0;
    swing.classList.add("dragging");
    swing.setPointerCapture(e.pointerId);
  });
  swing.addEventListener("pointermove", (e) => {
    if (!dragging) return;
    const p = pivot();
    const next = Math.atan2(p.x - e.clientX, e.clientY - p.y);
    vel = (next - angle) * 0.5;
    angle = Math.max(-1.1, Math.min(1.1, next));
  });
  const release = () => { dragging = false; swing.classList.remove("dragging"); };
  swing.addEventListener("pointerup", release);
  swing.addEventListener("pointercancel", release);

  (function tick() {
    if (!dragging) {
      vel += -Math.sin(angle) * gravity * 8;
      vel *= damping;
      angle += vel;
    }
    swing.style.transform = `rotate(${angle}rad)`;
    requestAnimationFrame(tick);
  })();
})();

/* ---------- Navigation: active link + up/down buttons ---------- */
const sections = [...document.querySelectorAll(".section")];
const links = [...document.querySelectorAll(".nav a")];
let current = 0;

function setActive(i) {
  current = i;
  links.forEach((a) =>
    a.classList.toggle("active", a.getAttribute("href") === "#" + sections[i].id)
  );
}

function updateNav() {
  const probe = window.scrollY + window.innerHeight * 0.4;
  let idx = 0;
  sections.forEach((s, i) => {
    if (s.getBoundingClientRect().top + window.scrollY <= probe) idx = i;
  });
  setActive(idx);
}

// clicking a nav link highlights it immediately, then scroll tracking takes over
let navLock = false, lockTimer;
function lockNav() {
  navLock = true;
  clearTimeout(lockTimer);
  lockTimer = setTimeout(() => { navLock = false; updateNav(); }, 200);
}
links.forEach((a, i) => a.addEventListener("click", () => { setActive(i); lockNav(); }));
window.addEventListener("scroll", () => {
  if (navLock) lockNav();
  else updateNav();
}, { passive: true });
window.addEventListener("resize", updateNav);
updateNav();

const go = (i) => {
  const n = Math.max(0, Math.min(sections.length - 1, i));
  setActive(n);
  lockNav();
  sections[n].scrollIntoView({ behavior: "smooth" });
};
document.getElementById("upBtn").addEventListener("click", () => go(current - 1));
document.getElementById("downBtn").addEventListener("click", () => go(current + 1));

/* ---------- Reveal on scroll + skill bars ---------- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (!en.isIntersecting) return;
    en.target.classList.add("in");
    const bar = en.target.querySelector(".bar i");
    if (bar) bar.style.width = bar.dataset.level + "%";
    revealObserver.unobserve(en.target);
  });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

/* ---------- Project filters ---------- */
document.querySelectorAll(".filter").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const f = btn.dataset.filter;
    document.querySelectorAll(".project").forEach((p) => {
      p.classList.toggle("hide", f !== "all" && p.dataset.cat !== f);
    });
  });
});

/* ---------- Sound toggle (soft chime, no audio file needed) ---------- */
(function sound() {
  const btn = document.getElementById("soundBtn");
  let ctx = null, on = false;
  function chime() {
    if (!on) return;
    ctx = ctx || new (window.AudioContext || window.webkitAudioContext)();
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = "sine"; o.frequency.value = 660 + Math.random() * 220;
    g.gain.setValueAtTime(0.0001, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.06, ctx.currentTime + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.35);
    o.connect(g).connect(ctx.destination);
    o.start(); o.stop(ctx.currentTime + 0.4);
  }
  btn.addEventListener("click", () => {
    on = !on;
    btn.setAttribute("aria-pressed", String(on));
    chime();
  });
  document.querySelectorAll(".btn, .nav a, .filter").forEach((el) => el.addEventListener("click", chime));
})();

/* ---------- Contact form (front-end validation only) ---------- */
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target, note = document.getElementById("formNote");
  let ok = true;
  form.querySelectorAll("input, textarea").forEach((f) => {
    const bad = !f.value.trim() || (f.type === "email" && !/^\S+@\S+\.\S+$/.test(f.value));
    f.classList.toggle("invalid", bad);
    if (bad) ok = false;
  });
  if (!ok) { note.textContent = "Please fill in all fields correctly 🌸"; return; }
  // To really receive messages, connect this form to Formspree, EmailJS, etc.
  note.textContent = "Thank you! Your message is ready to send 🍵";
  form.reset();
});

document.getElementById("year").textContent = new Date().getFullYear();
