/* Yenhsing Cheng — interactions
   Loader · Menu overlay · Works index · Clock · Reveals */

/* ---------- 0. THEME (persisted) ---------- */
document.documentElement.dataset.theme = localStorage.getItem('theme') || 'light';

/* ---------- 1. LOADER (index only) ---------- */
const loader = document.getElementById('loader');
if (loader) {
  const loaderNum = document.getElementById('loaderNum');
  const loaderFill = document.getElementById('loaderFill');
  let n = 0;
  const tickLoad = setInterval(() => {
    n = Math.min(100, n + Math.ceil(Math.random() * 11));
    loaderNum.textContent = String(n).padStart(3, '0');
    loaderFill.style.width = n + '%';
    if (n >= 100) {
      clearInterval(tickLoad);
      setTimeout(() => loader.classList.add('is-out'), 260);
    }
  }, 80);
}

/* ---------- 1b. PAGE TRANSITION (ayond-style flip) ---------- */
const flip = document.getElementById('pageflip');
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* arriving on a covered page (work.html) → reveal by sliding the panel away */
if (flip && flip.classList.contains('cover')) {
  requestAnimationFrame(() => setTimeout(() => flip.classList.add('reveal'), 80));
}

/* leaving via a flip link → slide the panel up to cover, then navigate */
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[data-flip]');
  if (!a || !flip) return;
  const href = a.getAttribute('href');
  if (!href || href.startsWith('#')) return;
  e.preventDefault();
  const label = a.getAttribute('data-flip-label')
    || a.querySelector('.wrow__title')?.textContent || '';
  flip.querySelector('.pageflip__label').textContent = label;
  if (reduceMotion) { location.href = href; return; }
  flip.classList.remove('reveal');
  flip.classList.add('enter');
  setTimeout(() => { location.href = href; }, 560);
});

/* ---------- 1c. ENTRY COVER (sitoh-style) → slides up into the index ---------- */
const enter = document.getElementById('enter');
if (enter && location.hash && location.hash !== '#top') {
  /* arriving at a section (e.g. back from a project) — skip the splash entirely */
  enter.classList.add('is-open');
  enter.style.display = 'none';
} else if (enter) {
  document.body.classList.add('enter-lock');
  /* entering skips the hero statement and lands straight on Works.
     The jump happens instantly while the cover still hides the viewport,
     so it's invisible — the cover then slides up to reveal Works. */
  const openSite = (target) => {
    if (enter.classList.contains('is-open')) return;
    enter.classList.add('is-open');
    document.body.classList.remove('enter-lock');
    const dest = target || document.getElementById('works');
    if (dest) dest.scrollIntoView({ block: 'start', behavior: 'instant' });
    setTimeout(() => { enter.style.display = 'none'; }, 1050);
  };
  document.getElementById('enterGo')?.addEventListener('click', () => openSite());
  enter.addEventListener('click', (e) => { if (!e.target.closest('a')) openSite(); });
  window.addEventListener('keydown', (e) => {
    if (enter.classList.contains('is-open')) return;
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') { e.preventDefault(); openSite(); }
  });
  window.addEventListener('wheel', () => openSite(), { once: true, passive: true });
  window.addEventListener('touchmove', () => openSite(), { once: true, passive: true });
  /* entry nav links open the cover and land on their own target section */
  enter.querySelectorAll('a[data-enter]').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      openSite(document.querySelector(a.getAttribute('href')));
    });
  });
  /* entry "About" link enters the site, then reveals the About overlay */
  enter.querySelector('[data-enter-about]')?.addEventListener('click', (e) => {
    e.preventDefault();
    openSite();
    setMenu(true);
  });
}

/* ---------- 1d. INTRO HELLO — typewriter on hover/focus ---------- */
const helloBox = document.querySelector('.enter__hello');
const helloWord = document.querySelector('.enter__word');
if (helloBox && helloWord) {
  const paras = Array.from(helloBox.querySelectorAll('p'));
  const fullText = paras.map(p => p.textContent);   // remember the original lines
  let typeTimer = null;

  const stopTyping = () => { clearTimeout(typeTimer); typeTimer = null; };

  const type = () => {
    if (helloBox.classList.contains('is-shown')) return;  // already revealed — keep it on screen
    helloBox.classList.add('is-shown');
    stopTyping();
    helloBox.classList.add('is-typing');
    paras.forEach(p => { p.textContent = ''; });
    let pi = 0, ci = 0;
    const SPEED = 12;                 // ms per character — fast
    const step = () => {
      if (pi >= paras.length) { helloBox.classList.remove('is-typing'); typeTimer = null; return; }
      const line = fullText[pi];
      paras[pi].textContent = line.slice(0, ++ci);
      if (ci >= line.length) { pi++; ci = 0; }
      typeTimer = setTimeout(step, SPEED);
    };
    if (reduceMotion) {               // no animation preference → show instantly
      paras.forEach((p, i) => { p.textContent = fullText[i]; });
      helloBox.classList.remove('is-typing');
      return;
    }
    typeTimer = setTimeout(step, 470); // start after the blue line has drawn up
  };

  const wrap = helloWord.closest('.enter__word-wrap') || helloWord;
  wrap.addEventListener('mouseenter', type);
  helloWord.addEventListener('focus', type);
}

/* ---------- 2. MENU OVERLAY ---------- */
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
/* the header toggle in the work index swaps its label when the About panel opens */
const aboutToggle = document.querySelector('.head__nav [data-about]');
const aboutLabel = aboutToggle?.querySelector('.head__menu-label');
const setMenu = (open) => {
  document.body.classList.toggle('menu-open', open);
  menuBtn?.setAttribute('aria-expanded', String(open));
  menu?.setAttribute('aria-hidden', String(!open));
  aboutToggle?.setAttribute('aria-expanded', String(open));
  if (aboutLabel) aboutLabel.textContent = open ? 'Works' : 'About / Contact';
};
menuBtn?.addEventListener('click', () => setMenu(!document.body.classList.contains('menu-open')));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

/* "About" links toggle the menu overlay (About now lives inside the menu) */
document.querySelectorAll('[data-about]').forEach(a => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    setMenu(!document.body.classList.contains('menu-open'));
  });
});

/* close menu after navigating, then smooth-scroll to target */
document.querySelectorAll('[data-link]').forEach(a => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      setMenu(false);
      const target = document.querySelector(href);
      // wait for the menu close transition before scrolling
      setTimeout(() => target?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 120);
    }
  });
});

/* ---------- 3. WORKS INDEX ---------- */
const wrows = Array.from(document.querySelectorAll('.wrow'));

/* link each row to its case-study page (id read from the row's data-id) */
wrows.forEach(row => {
  const id = row.dataset.id;
  const link = row.querySelector('.wrow__link');
  if (id && link) link.setAttribute('href', `work.html?p=${id}`);
});

/* if a title is a single word too wide to fit its column (can't wrap), stack the
   row so the title spans full width and the brief + images start below it */
const fitTitles = () => {
  wrows.forEach(row => {
    const t = row.querySelector('.wrow__title');
    if (!t) return;
    row.classList.remove('wrow--stack');            // reset to measure side-by-side
    if (t.scrollWidth > t.clientWidth + 1) row.classList.add('wrow--stack');
  });
};
fitTitles();
document.fonts?.ready.then(fitTitles);              // re-check once the display font loads
let fitRAF = 0;
window.addEventListener('resize', () => {
  cancelAnimationFrame(fitRAF);
  fitRAF = requestAnimationFrame(fitTitles);
});

/* a super-long photo (one side ≥1.9× the other) gets its own full-width row,
   shown uncropped instead of being squeezed into a 4:3 thumbnail */
const flagLong = (m) => {
  const w = m.naturalWidth || m.videoWidth, h = m.naturalHeight || m.videoHeight;
  if (!w || !h) return;
  if (Math.max(w, h) / Math.min(w, h) >= 1.9) m.closest('.wrow__shot')?.classList.add('wrow__shot--full');
};
document.querySelectorAll('.wrow__gallery img').forEach(img => {
  if (img.complete && img.naturalWidth) flagLong(img);
  else img.addEventListener('load', () => flagLong(img));
});
document.querySelectorAll('.wrow__gallery video').forEach(v => {
  if (v.readyState >= 1) flagLong(v);
  else v.addEventListener('loadedmetadata', () => flagLong(v));
});

/* ---------- 4. CLOCK (Taipei) ---------- */
const menuClock = document.getElementById('menuClock');
const tick = () => {
  const t = new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Taipei', hour12: false });
  if (menuClock) menuClock.textContent = `${t} TPE`;
};
tick(); setInterval(tick, 1000);

/* ---------- 5. WORKS INDEX — all rows visible at once ---------- */
/* no scroll-reveal: every project shows immediately, so the next one isn't
   hidden until you scroll down to it. */
