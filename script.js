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

/* restored from the back/forward cache (e.g. pressing Back from a project):
   the page was left with the transition panel covering the screen, and no JS
   re-runs on a bfcache restore — so reset it here, otherwise we stay stuck on
   the dark "loading" cover */
window.addEventListener('pageshow', (e) => {
  if (!e.persisted) return;
  if (flip) {
    if (flip.classList.contains('cover')) flip.classList.add('reveal'); // covered page → reveal
    else flip.classList.remove('enter', 'reveal');                      // index → tuck away
  }
  loader?.classList.add('is-out'); // never re-show the loader on restore
});

/* ---------- 1b-ii. WORKS GROUP FILTER + Arch.⇄Tech. switch ---------- */
const WORK_GROUPS = {
  arch: ['landscape', 'housing', 'public'],
  tech: ['visual', 'event', 'archive']
};
const worksSwitch = document.getElementById('worksSwitch');
/* point the switch at the OTHER group, and label it for that group */
const setWorksSwitch = (current) => {
  if (!worksSwitch) return;
  const other = current === 'tech' ? 'arch' : 'tech';
  worksSwitch.dataset.enterGroup = other;
  worksSwitch.querySelector('.works__switch-label').textContent =
    other === 'arch' ? 'Arch.' : 'Tech.';
};
const filterWorks = (g) => {
  const cats = WORK_GROUPS[g];
  document.querySelectorAll('.wrow').forEach((row) => {
    row.style.display = (!cats || cats.includes(row.dataset.cat)) ? '' : 'none';
  });
  setWorksSwitch(g);
};
if (worksSwitch) {
  worksSwitch.addEventListener('click', (e) => {
    e.preventDefault();
    filterWorks(worksSwitch.dataset.enterGroup);
    document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' });
  });
}

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
    window.__enterMedia?.();   // begin clip playback only now the cover is gone
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
  /* Arch. / Tech. marks enter the site with the works filtered to that group */
  enter.querySelectorAll('[data-enter-group]').forEach((a) => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      filterWorks(a.getAttribute('data-enter-group'));
      openSite(document.getElementById('works'));
    });
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

/* keep the index grid uniform: every thumbnail is the same 4:3 size at a fixed
   spacing. Only a genuinely long landscape (大橫式, ≥1.9× wide) breaks out to its
   own full-width row. Everything else — including portrait photos and vertical
   videos — stays in the uniform 4:3 cell and is centre-cropped to fit, so the
   row height and gaps never change. */
const flagOrient = (m) => {
  const w = m.naturalWidth || m.videoWidth, h = m.naturalHeight || m.videoHeight;
  if (!w || !h) return;
  const shot = m.closest('.wrow__shot');
  if (!shot) return;
  const r = w / h;
  if (r >= 1.9) shot.classList.add('wrow__shot--full');
};
document.querySelectorAll('.wrow__gallery img').forEach(img => {
  if (img.complete && img.naturalWidth) flagOrient(img);
  else img.addEventListener('load', () => flagOrient(img));
});
document.querySelectorAll('.wrow__gallery video').forEach(v => {
  if (v.readyState >= 1) flagOrient(v);
  else v.addEventListener('loadedmetadata', () => flagOrient(v));
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

/* ---------- 6. MEDIA PERFORMANCE ---------- */
/* The galleries hold ~10 clips (some 20–30 MB) plus many large photos.
   Autoplaying every video at once pegs the CPU and makes scrolling janky, so
   only run a video while it's on screen — pause the rest and resume them as
   they scroll back into view. Images are decoded off the main thread. */
(() => {
  const vids = document.querySelectorAll('.wrow__gallery video, .case__frame video, #cCover video');
  /* while the entry splash covers the index, the work clips are technically in
     the viewport, so the observer would start decoding several at once (incl. the
     big ones) behind the cover — that stutters the intro marquee and reads as a
     ghosted/doubled screen. Keep everything paused until the site is entered. */
  let entered = !document.body.classList.contains('enter-lock');
  if (vids.length && 'IntersectionObserver' in window) {
    const vio = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        const v = en.target;
        if (en.isIntersecting && entered) { const p = v.play(); if (p) p.catch(() => {}); }
        else v.pause();
      });
    }, { rootMargin: '150px 0px' });
    vids.forEach((v) => {
      v.removeAttribute('autoplay'); // playback is controlled by visibility now
      v.pause();
      vio.observe(v);
    });
    /* called when the entry cover slides away — start playing whatever's in view */
    window.__enterMedia = () => {
      if (entered) return;
      entered = true;
      vids.forEach((v) => { vio.unobserve(v); vio.observe(v); });
    };
  } else {
    window.__enterMedia = () => {};
  }
  document.querySelectorAll('.wrow__gallery img, .case__frame img').forEach((img) => {
    img.decoding = 'async';
  });
})();
