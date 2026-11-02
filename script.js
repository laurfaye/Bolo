:root {
  --cream: #fbf7f2;
  --pink: #f6c6d3;
  --pink-soft: #fde8ee;
  --matcha: #a9c8a0;
  --matcha-deep: #6f9a77;
  --ink: #34483a;
  --ink-soft: #5d7263;
  --glass: rgba(255, 255, 255, 0.62);
  --line: rgba(111, 154, 119, 0.22);
  --shadow: 0 18px 40px -18px rgba(111, 154, 119, 0.45);
  --radius: 22px;
}

* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: "Poppins", system-ui, sans-serif;
  color: var(--ink);
  background:
    radial-gradient(900px 500px at 12% 8%, var(--pink-soft), transparent 60%),
    radial-gradient(800px 600px at 92% 30%, #e4f0de, transparent 60%),
    radial-gradient(700px 500px at 20% 90%, #fde8ee, transparent 60%),
    var(--cream);
  background-attachment: fixed;
  overflow-x: hidden;
  line-height: 1.6;
}
a { color: inherit; text-decoration: none; }
button { font: inherit; cursor: pointer; border: 0; background: none; color: inherit; }

/* floating petals */
.petals { position: fixed; inset: 0; pointer-events: none; z-index: 0; overflow: hidden; }
.petal {
  position: absolute; top: -20px; border-radius: 80% 0 80% 0;
  background: linear-gradient(135deg, var(--pink), #fbdde5);
  opacity: .7; animation: fall linear infinite;
}
.petal.green { background: linear-gradient(135deg, var(--matcha), #cfe2c8); }
@keyframes fall {
  to { transform: translate3d(var(--drift, 60px), 110vh, 0) rotate(540deg); }
}

/* NAV */
.nav {
  position: fixed; top: 22px; left: 50%; transform: translateX(-50%);
  z-index: 50; display: flex; align-items: center; gap: 4px;
  padding: 7px; border-radius: 999px;
  background: rgba(255, 255, 255, .72); backdrop-filter: blur(14px);
  border: 1px solid var(--line); box-shadow: var(--shadow);
}
.nav a {
  padding: 10px 22px; border-radius: 999px; font-weight: 600; font-size: .95rem;
  color: var(--ink-soft); transition: .25s;
}
.nav a:hover { color: var(--ink); }
.nav a.active { background: linear-gradient(135deg, var(--pink), var(--matcha)); color: #2f4535; }
.nav-divider { width: 1px; height: 24px; background: var(--line); margin: 0 6px; }
.sound-btn {
  width: 38px; height: 38px; border-radius: 50%; display: grid; place-items: center;
  background: var(--pink-soft); color: var(--matcha-deep); transition: .25s;
}
.sound-btn:hover { transform: scale(1.08); }
.sound-btn[aria-pressed="false"] .wave { display: none; }

/* SECTIONS */
.section { position: relative; z-index: 1; min-height: 100vh; padding: 120px 6vw 80px; }
.container { max-width: 1080px; margin: 0 auto; }
.container.narrow { max-width: 640px; }
.eyebrow { letter-spacing: .22em; font-size: .78rem; font-weight: 600; color: var(--matcha-deep); margin-bottom: 8px; }
.title { font-size: clamp(2rem, 4.5vw, 3.2rem); line-height: 1.15; font-weight: 700; margin-bottom: 36px; }
.title em, h1 .grad { font-family: "Playfair Display", serif; font-style: italic; font-weight: 500; color: var(--matcha-deep); }
.sub { margin: 56px 0 20px; font-size: 1.3rem; }
.glass {
  background: var(--glass); backdrop-filter: blur(10px);
  border: 1px solid var(--line); border-radius: var(--radius);
  box-shadow: var(--shadow); padding: 28px;
}

/* HERO */
.hero { display: grid; grid-template-columns: 1.1fr .9fr; align-items: center; gap: 30px; }
.hero h1 { font-size: clamp(3rem, 7vw, 5.6rem); line-height: 1.05; font-weight: 800; letter-spacing: -.02em; }
.hero h1 .grad {
  font-family: "Poppins", sans-serif; font-style: normal; font-weight: 800;
  background: linear-gradient(90deg, #e98fae, #8fbf93); -webkit-background-clip: text; background-clip: text; color: transparent;
}
.hero h1 .dark { color: var(--ink); }
.hero-text p { margin: 34px 0 30px; max-width: 540px; color: var(--ink-soft); font-size: 1.04rem; }
.btn-row { display: flex; flex-wrap: wrap; gap: 14px; }
.btn {
  display: inline-flex; align-items: center; gap: 10px; padding: 14px 26px;
  border-radius: 14px; font-weight: 600; transition: .25s;
}
.btn.primary { background: linear-gradient(135deg, #e9a1b8, #8fbf93); color: #fff; box-shadow: 0 12px 26px -10px rgba(143, 191, 147, .9); }
.btn.ghost { background: rgba(255, 255, 255, .7); border: 1px solid var(--line); }
.btn:hover { transform: translateY(-3px); }
.find-me { display: flex; align-items: center; gap: 12px; margin-top: 40px; }
.find-me span { font-size: .75rem; font-weight: 700; letter-spacing: .15em; color: var(--matcha-deep); margin-right: 6px; }
.find-me a {
  width: 42px; height: 42px; display: grid; place-items: center; border-radius: 12px;
  background: rgba(255, 255, 255, .75); border: 1px solid var(--line); color: var(--ink-soft); transition: .25s;
}
.find-me a:hover { background: var(--pink-soft); color: var(--matcha-deep); transform: translateY(-3px); }

/* ID CARD */
.card-stage { position: relative; height: 640px; display: flex; justify-content: center; }
.swing {
  position: absolute; top: -140px; left: 50%; width: 280px; margin-left: -140px;
  transform-origin: 50% 0; display: flex; flex-direction: column; align-items: center;
  touch-action: none; cursor: grab; user-select: none;
}
.swing.dragging { cursor: grabbing; }
.strap {
  width: 34px; height: 300px; background: linear-gradient(#8fbf93, #a9c8a0);
  display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 2px;
}
.strap span {
  writing-mode: vertical-rl; font-size: .6rem; font-weight: 700; letter-spacing: .2em; color: #fff; white-space: nowrap;
}
.clip { width: 44px; height: 22px; background: linear-gradient(#e6e6e6, #bdbdbd); border-radius: 4px; margin-top: -2px; }
.id-card {
  width: 250px; margin-top: -4px; padding: 16px 16px 14px; border-radius: 16px;
  background: linear-gradient(160deg, #fff, var(--pink-soft));
  border: 6px solid #fff; box-shadow: 0 30px 50px -22px rgba(52, 72, 58, .55);
  position: relative;
}
.id-card::before {
  content: ""; position: absolute; top: 8px; left: 50%; width: 58px; height: 10px;
  margin-left: -29px; border-radius: 8px; background: rgba(111, 154, 119, .35);
}
.id-top { display: flex; justify-content: space-between; align-items: center; margin-top: 14px; }
.tag { background: var(--matcha-deep); color: #fff; font-size: .62rem; font-weight: 700; padding: 3px 10px; border-radius: 4px; letter-spacing: .1em; }
.school { font-size: .55rem; text-align: right; font-weight: 600; color: var(--ink-soft); line-height: 1.2; }
.role { font-size: 2rem; font-weight: 800; letter-spacing: -.02em; margin: 8px 0 10px; color: var(--ink); }
.photo {
  position: relative; height: 230px; border-radius: 12px; overflow: hidden;
  background: linear-gradient(135deg, var(--pink), var(--matcha));
  display: grid; place-items: center;
}
.photo img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; pointer-events: none; }
.initials { font-size: 3.4rem; font-weight: 800; color: rgba(255, 255, 255, .85); }
.name-tag {
  margin: -16px auto 0; position: relative; width: 88%; text-align: center; padding: 5px 6px;
  font-size: .62rem; font-weight: 700; letter-spacing: .08em; background: #fff; border: 1px solid var(--line);
  border-radius: 6px; transform: rotate(-2deg);
}
.id-bottom { display: flex; justify-content: space-between; align-items: flex-end; margin-top: 14px; }
.id-bottom b { font-size: 1.15rem; color: var(--matcha-deep); letter-spacing: .04em; }
.id-bottom small { font-size: .5rem; color: var(--ink-soft); }
.drag-hint { position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); font-size: .8rem; color: var(--matcha-deep); opacity: .8; }

/* SIDE BUTTONS */
.side-btns { position: fixed; right: 28px; top: 50%; transform: translateY(-50%); z-index: 40; display: flex; flex-direction: column; gap: 14px; }
.side-btns button {
  width: 56px; height: 56px; border-radius: 50%; display: grid; place-items: center;
  background: rgba(255, 255, 255, .8); border: 1px solid var(--line); color: var(--matcha-deep);
  box-shadow: var(--shadow); transition: .25s;
}
.side-btns button:hover { background: var(--pink-soft); transform: scale(1.08); }

/* ABOUT */
.about-grid { display: grid; grid-template-columns: 1.1fr .9fr; gap: 24px; text-align: justify;}
.glass h3 { margin-bottom: 12px; font-size: 1.2rem; }
.glass p { color: var(--ink-soft); margin-bottom: 12px; }
.goal b { color: var(--matcha-deep); }
.chips { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px; }
.chips span {
  font-size: .78rem; font-weight: 500; padding: 5px 13px; border-radius: 999px;
  background: var(--pink-soft); color: var(--ink); border: 1px solid rgba(233, 161, 184, .35);
}
.timeline { list-style: none; border-left: 2px dashed var(--matcha); padding-left: 18px; }
.timeline li { position: relative; margin-bottom: 18px; display: grid; }
.timeline li::before {
  content: ""; position: absolute; left: -26px; top: 6px; width: 12px; height: 12px;
  border-radius: 50%; background: var(--pink); border: 2px solid #fff; box-shadow: 0 0 0 2px var(--matcha);
}
.timeline time { font-size: .75rem; font-weight: 600; color: var(--matcha-deep); }
.timeline small { color: var(--ink-soft); }

.skills { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 18px 36px; }
.skill span { font-weight: 600; font-size: .92rem; }
.bar { height: 10px; background: rgba(169, 200, 160, .3); border-radius: 99px; margin-top: 6px; overflow: hidden; }
.bar i { display: block; height: 100%; width: 0; border-radius: 99px; background: linear-gradient(90deg, var(--pink), var(--matcha)); transition: width 1.2s cubic-bezier(.2, .8, .2, 1); }

.awards { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 18px; }
.award { display: grid; gap: 2px; padding: 22px; border-radius: var(--radius); background: var(--glass); border: 1px solid var(--line); box-shadow: var(--shadow); transition: .25s; }
.award:hover { transform: translateY(-5px); }
.award span { font-size: 1.8rem; }
.award small { color: var(--ink-soft); }

/* PROJECTS */
.filters { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 28px; }
.filter { padding: 9px 20px; border-radius: 999px; font-weight: 600; font-size: .88rem; background: rgba(255, 255, 255, .7); border: 1px solid var(--line); transition: .25s; }
.filter.active, .filter:hover { background: linear-gradient(135deg, var(--pink), var(--matcha)); color: #2f4535; }
.projects { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 22px; text-align: justify; }
.project { padding: 18px; transition: .3s; }
.project:hover { transform: translateY(-6px); }
.project.hide { display: none; }
.thumb { height: 150px; border-radius: 14px; margin-bottom: 16px; display: flex; align-items: flex-end; padding: 12px 16px; font-weight: 800; font-size: 2rem; color: rgba(255, 255, 255, .9); }
.t1 { background: linear-gradient(135deg, #f6c6d3, #cfe2c8); }
.t2 { background: linear-gradient(135deg, #cfe2c8, #f9d9e2); }
.t3 { background: linear-gradient(135deg, #f9d9e2, #a9c8a0); }

/* CONTACT */
.contact-form { display: grid; gap: 16px; }
.contact-form label { display: grid; gap: 6px; font-weight: 600; font-size: .88rem; }
.contact-form input, .contact-form textarea {
  font: inherit; padding: 13px 16px; border-radius: 12px; border: 1px solid var(--line);
  background: rgba(255, 255, 255, .9); color: var(--ink); outline: none; transition: .2s;
}
.contact-form input:focus, .contact-form textarea:focus { border-color: var(--matcha-deep); box-shadow: 0 0 0 4px rgba(169, 200, 160, .3); }
.contact-form input.invalid, .contact-form textarea.invalid { border-color: #e48aa5; }
.contact-form .btn { justify-self: start; }
.form-note { margin: 0; min-height: 1.2em; font-size: .88rem; color: var(--matcha-deep); }
footer { text-align: center; margin-top: 60px; color: var(--ink-soft); font-size: .88rem; }

/* REVEAL */
.reveal { opacity: 0; transform: translateY(26px); transition: opacity .8s ease, transform .8s ease; }
.reveal.in { opacity: 1; transform: none; }

/* RESPONSIVE */
@media (max-width: 900px) {
  .hero, .about-grid { grid-template-columns: 1fr; }
  .card-stage { height: 560px; margin-top: 30px; }
  .side-btns { right: 12px; }
  .side-btns button { width: 46px; height: 46px; }
  .nav a { padding: 9px 13px; font-size: .85rem; }
}
@media (max-width: 520px) {
  .nav { top: 12px; }
  .nav a { padding: 8px 10px; font-size: .78rem; }
  .nav-divider { margin: 0 2px; }
  .sound-btn { width: 32px; height: 32px; }
}
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; scroll-behavior: auto !important; }
  .reveal { opacity: 1; transform: none; }
}

.thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 14px;
}
.thumb { padding: 0; }

