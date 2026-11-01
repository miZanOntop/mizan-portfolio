(() => {
  'use strict';
  const S = window.SITE;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch {} }
  };

  /* ---------- Entrance animation ---------- */
  const introName = $('#introName');
  introName.innerHTML = [...introName.textContent].map((c, i) =>
    `<span style="animation-delay:${0.08 * i + 0.1}s">${c === ' ' ? '&nbsp;' : c}</span>`).join('');
  document.body.classList.add('locked');
  const endIntro = () => {
    $('#intro').classList.add('done');
    document.body.classList.remove('locked');
    setTimeout(() => document.body.classList.add('ready'), 350);
  };
  setTimeout(endIntro, reduce ? 100 : 2100);

  /* ---------- Theme (pull cord) ---------- */
  const body = document.body;
  const saved = store.get('theme');
  if (saved) body.dataset.theme = saved;
  $('#cord').addEventListener('click', e => {
    const c = e.currentTarget;
    c.classList.remove('pulled'); void c.offsetWidth; c.classList.add('pulled');
    body.dataset.theme = body.dataset.theme === 'dark' ? 'light' : 'dark';
    store.set('theme', body.dataset.theme);
  });

  /* ---------- Clock (Nepal time) ---------- */
  const fmtT = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: S.timezone });
  const fmtD = new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short', year: 'numeric', timeZone: S.timezone });
  const tick = () => {
    const now = new Date(), t = fmtT.format(now) + ' NPT';
    $('#clock').textContent = t; $('#clock2').textContent = t + ' now';
    $('#date').textContent = fmtD.format(now);
  };
  tick(); setInterval(tick, 20000);
  $('#year2').textContent = new Date().getFullYear();

  /* ---------- Mobile menu ---------- */
  const burger = $('#burger'), links = $('#navLinks'), nav = $('#nav');
  const setMenu = open => {
    links.classList.toggle('open', open); nav.classList.toggle('menu-open', open);
    burger.setAttribute('aria-expanded', open); body.classList.toggle('locked', open);
  };
  burger.addEventListener('click', () => setMenu(!links.classList.contains('open')));
  $$('a', links).forEach(a => a.addEventListener('click', () => setMenu(false)));

  /* ---------- Rotating role flip card ---------- */
  const card = $('#flip .flip__card'), txt = $('#flipText');
  let ri = 0; txt.textContent = S.roles[0];
  if (!reduce) setInterval(() => {
    card.classList.remove('in'); card.classList.add('out');
    setTimeout(() => {
      ri = (ri + 1) % S.roles.length; txt.textContent = S.roles[ri];
      card.classList.remove('out'); card.classList.add('in');
    }, 380);
  }, 2600);

  /* ---------- Journey list ---------- */
  const jList = $('#jList');
  jList.innerHTML = S.journey.map(j => `
    <article class="jitem">
      <small>${j.when}</small>
      <h3>${j.title}</h3>
      <div class="org">${j.org}</div>
      <p class="t"><span>${j.text}</span></p>
    </article>`).join('');
  const jItems = $$('.jitem'), yearEl = $('#year'), jBar = $('#jBar'), jCount = $('#jCount'), track = $('#journeyTrack');
  let jIdx = -1;
  const setJ = i => {
    if (i === jIdx) return;
    jIdx = i;
    jItems.forEach((el, k) => el.classList.toggle('active', k === i));
    yearEl.classList.add('swap');
    setTimeout(() => { yearEl.textContent = S.journey[i].big; yearEl.classList.remove('swap'); }, 220);
    jCount.textContent = `${String(i + 1).padStart(2, '0')} / ${String(S.journey.length).padStart(2, '0')}`;
  };
  const updateJourney = () => {
    const r = track.getBoundingClientRect();
    const total = r.height - innerHeight;
    const p = Math.min(1, Math.max(0, -r.top / total));
    jBar.style.transform = `scaleX(${p})`;
    setJ(Math.min(S.journey.length - 1, Math.floor(p * S.journey.length * 0.999)));
  };

  /* ---------- Skills ---------- */
  $('#skillsGrid').innerHTML = S.skills.map(s => `
    <div class="scard rv">
      <div class="scard__icon">${s.icon}</div>
      <h3>${s.title}</h3>
      <ul>${s.items.map(i => `<li>${i}</li>`).join('')}</ul>
    </div>`).join('');
  $$('.scard').forEach(c => c.addEventListener('pointermove', e => {
    const r = c.getBoundingClientRect();
    c.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    c.style.setProperty('--my', (e.clientY - r.top) + 'px');
  }));

  /* ---------- Works ---------- */
  const screens = {
    ttt: `<div class="scr scr--ttt"><small>MIND ✕ HEART</small><div class="ttt"><b class="m">✕</b><b class="h">♥</b><b></b><b></b><b class="m">✕</b><b class="h">♥</b><b class="h">♥</b><b></b><b class="m">✕</b></div></div>`,
    shop: `<div class="scr scr--shop"><h4>Daju Bhai Wine Shop</h4><div class="bottles"><i></i><i></i><i></i></div></div>`,
    work: `<div class="scr scr--work"><div class="row"></div><div class="row"></div><div class="row"></div><div class="row"></div></div>`,
    soon: `<div class="scr scr--soon">Coming soon</div>`
  };
  $('#worksList').innerHTML = S.works.map(w => `
    <article class="work rv">
      <div class="work__text">
        <span class="work__tag">${w.tag}</span>
        <h3>${w.title}</h3>
        <div class="sub">${w.sub}</div>
        <p class="d">${w.text}</p>
        <div class="chips">${w.chips.map(c => `<span>${c}</span>`).join('')}</div>
        ${w.link ? `<a class="btn btn--light" href="${w.link}" target="_blank" rel="noopener">${w.linkLabel} <span>↗</span></a>` : ''}
      </div>
      <div class="monitor"><div class="monitor__body">
        <div class="monitor__screen">${screens[w.screen] || ''}</div>
        <div class="monitor__stand"></div><div class="monitor__base"></div>
      </div></div>
    </article>`).join('');

  /* ---------- Socials ---------- */
  $('#socialList').innerHTML = S.socials.filter(s => s.url).map(s =>
    `<li><a href="${s.url}" ${s.url.startsWith('mailto') ? '' : 'target="_blank" rel="noopener"'}>${s.name}<small>${s.handle} ↗</small></a></li>`).join('');

  /* ---------- Door -> section transition ---------- */
  $$('.door').forEach(d => d.addEventListener('click', e => {
    const target = $(d.dataset.target), p = $('#portal');
    const r = d.getBoundingClientRect();
    p.style.setProperty('--c', d.dataset.color);
    p.style.setProperty('--x', (r.left + r.width / 2) + 'px');
    p.style.setProperty('--y', (r.top + r.height / 2) + 'px');
    if (reduce) { target.scrollIntoView(); return; }
    p.classList.remove('off'); p.classList.add('on');
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = 'auto';
      target.scrollIntoView();
      document.documentElement.style.scrollBehavior = '';
      p.classList.add('off');
      setTimeout(() => p.classList.remove('on', 'off'), 700);
    }, 650);
  }));

  /* ---------- Scroll reveal ---------- */
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: .12 });
  $$('.rv').forEach((el, i) => { el.style.transitionDelay = (i % 3) * 80 + 'ms'; io.observe(el); });

  /* ---------- Nav state on scroll ---------- */
  const sections = ['home', 'world', 'journey', 'skills', 'works', 'contact'].map(id => $('#' + id));
  const navLinks = $$('.nav__links a');
  const onScroll = () => {
    nav.classList.toggle('scrolled', scrollY > 30);
    const mid = innerHeight * 0.35;
    let cur = sections[0];
    sections.forEach(s => { if (s.getBoundingClientRect().top <= mid) cur = s; });
    navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + cur.id));
    const heroLight = cur.id === 'home' && body.dataset.theme === 'light';
    nav.classList.toggle('on-dark', cur.id !== 'home' && !links.classList.contains('open'));
    if (heroLight) nav.classList.remove('on-dark');
    updateJourney();
  };
  let ticking = false;
  addEventListener('scroll', () => { if (!ticking) { requestAnimationFrame(() => { onScroll(); ticking = false; }); ticking = true; } }, { passive: true });
  addEventListener('resize', onScroll);
  onScroll();

  /* ---------- Contact form ---------- */
  const form = $('#form'), note = $('#formNote');
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(form));
    if (!d.name || !/^\S+@\S+\.\S+$/.test(d.email || '') || !d.message) {
      note.className = 'form__note err'; note.textContent = 'Please fill in your name, a valid email and a message.'; return;
    }
    if (S.formspree) {
      note.className = 'form__note'; note.textContent = 'Sending…';
      try {
        const r = await fetch(S.formspree, { method: 'POST', headers: { Accept: 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify(d) });
        if (!r.ok) throw 0;
        form.reset(); note.className = 'form__note ok'; note.textContent = 'Thanks! Your message is on its way — I\'ll reply soon.';
      } catch { note.className = 'form__note err'; note.textContent = 'Something went wrong. Please try again or email me directly.'; }
    } else {
      const sub = encodeURIComponent('Portfolio message from ' + d.name);
      const bod = encodeURIComponent(d.message + '\n\n— ' + d.name + ' (' + d.email + ')');
      location.href = `mailto:${S.email}?subject=${sub}&body=${bod}`;
      note.className = 'form__note ok'; note.textContent = 'Opening your email app…';
    }
  });
})();
