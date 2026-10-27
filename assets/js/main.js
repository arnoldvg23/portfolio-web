(() => {
  // Top bar border once the page scrolls
  const topbar = document.querySelector('.topbar');
  const onScroll = () => topbar.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Live local time in Barcelona
  document.querySelectorAll('[data-clock]').forEach((el) => {
    const fmt = new Intl.DateTimeFormat(document.documentElement.lang, {
      hour: '2-digit', minute: '2-digit', timeZone: el.dataset.tz,
    });
    const place = el.textContent;
    const tick = () => (el.textContent = `${place} · ${fmt.format(new Date())}`);
    tick();
    setInterval(tick, 15000);
  });

  // Pause looping animations while they are off screen (saves GPU and battery)
  const hero = document.querySelector('.hero');
  if ('IntersectionObserver' in window) {
    const pauser = new IntersectionObserver((entries) =>
      entries.forEach((e) => e.target.classList.toggle('is-paused', !e.isIntersecting)),
    );
    document.querySelectorAll('.hero, .marquee, .contact__panel').forEach((el) => pauser.observe(el));
  }

  // Hero reel: slow cross-fade between projects. The outgoing slide keeps drifting
  // while it fades out instead of snapping back to its starting zoom.
  const slides = document.querySelectorAll('.reel__slide');
  if (slides.length > 1 && !calm) {
    let s = 0;
    setInterval(() => {
      if (document.hidden || hero?.classList.contains('is-paused')) return;
      const out = slides[s];
      out.classList.replace('is-on', 'is-leaving');
      setTimeout(() => out.classList.remove('is-leaving'), 2000);
      s = (s + 1) % slides.length;
      slides[s].classList.add('is-on');
    }, 6000);
  }

  // Silver sheen: the highlight on the name follows the pointer, easing behind it.
  // The variable is set on the name only, so the rest of the hero isn't restyled every frame.
  const heroName = hero?.querySelector('.hero__name');
  if (heroName && !calm && window.matchMedia('(pointer: fine)').matches) {
    let target = 42;
    let current = 42;
    let raf = null;
    let left = 0;
    let width = 1;
    const measure = () => ({ left, width } = hero.getBoundingClientRect());
    measure();
    window.addEventListener('resize', measure, { passive: true });
    const step = () => {
      current += (target - current) * 0.08;
      heroName.style.setProperty('--sheen', `${current.toFixed(2)}%`);
      raf = Math.abs(target - current) > 0.1 ? requestAnimationFrame(step) : null;
    };
    hero.addEventListener('pointermove', (e) => {
      target = 15 + ((e.clientX - left) / width) * 70;
      if (!raf) raf = requestAnimationFrame(step);
    });
  }

  // Remember the language the visitor picks
  document.querySelectorAll('.lang a').forEach((a) =>
    a.addEventListener('click', () => {
      try {
        localStorage.setItem('lang', a.dataset.lang);
      } catch {}
    }),
  );

  // Reveal on scroll. Items that enter together (a row of cards) come in one after another.
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        let order = 0;
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.style.transitionDelay = `${Math.min(order++, 5) * 90}ms`;
            e.target.classList.add('is-in');
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('is-in'));
  }

  // Project filters. Where the browser supports View Transitions, the cards glide to their new place.
  const chips = document.querySelectorAll('.chip');
  const cards = document.querySelectorAll('.card');
  const applyFilter = (chip) => {
    const f = chip.dataset.filter;
    chips.forEach((c) => c.setAttribute('aria-pressed', String(c === chip)));
    chip.closest('section').querySelector('.grid').classList.toggle('is-filtered', f !== 'all');
    cards.forEach((card) => {
      const show = f === 'all' || card.dataset.tags.split(' ').includes(f);
      card.hidden = !show;
      if (show) card.classList.add('is-in');
    });
  };
  chips.forEach((chip) =>
    chip.addEventListener('click', () => {
      if (calm || !document.startViewTransition) return applyFilter(chip);
      cards.forEach((card, i) => (card.style.viewTransitionName = `card-${i}`));
      const vt = document.startViewTransition(() => applyFilter(chip));
      vt.finished.finally(() => cards.forEach((card) => (card.style.viewTransitionName = '')));
    }),
  );

  // Copy email
  document.querySelectorAll('[data-copy]').forEach((btn) =>
    btn.addEventListener('click', async () => {
      const label = btn.textContent;
      try {
        await navigator.clipboard.writeText(btn.dataset.copy);
        btn.textContent = btn.dataset.copied || 'Copied ✓';
      } catch {
        btn.textContent = btn.dataset.copy;
      }
      setTimeout(() => (btn.textContent = label), 2200);
    }),
  );

  // YouTube: load the player only when asked (faster, no tracking until play)
  document.querySelectorAll('[data-yt]').forEach((box) =>
    box.querySelector('button').addEventListener('click', () => {
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube-nocookie.com/embed/${box.dataset.yt}?autoplay=1&rel=0`;
      iframe.title = box.dataset.title;
      iframe.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
      iframe.allowFullscreen = true;
      box.replaceChildren(iframe);
    }),
  );

  // Lightbox
  const lb = document.querySelector('.lightbox');
  const zooms = [...document.querySelectorAll('.g-zoom')];
  if (!lb || !zooms.length) return;
  const lbImg = lb.querySelector('img');
  const lbCap = lb.querySelector('figcaption');
  let index = 0;
  let opener = null;
  let pending = 0;
  const fullSrc = (i) => zooms[(i + zooms.length) % zooms.length].dataset.full;

  // The current image stays up until the next one is decoded, then the new one eases in
  const show = async (i) => {
    index = (i + zooms.length) % zooms.length;
    const z = zooms[index];
    const ticket = ++pending;
    lbCap.textContent = `${z.dataset.caption} — ${index + 1} / ${zooms.length}`;
    const next = new Image();
    next.src = z.dataset.full;
    lb.classList.add('is-loading');
    try {
      // Never wait more than 1.5 s: past that, show it and let it finish loading in place
      await Promise.race([next.decode(), new Promise((r) => setTimeout(r, 1500))]);
    } catch {}
    if (ticket !== pending) return; // the visitor already moved on
    lb.classList.remove('is-loading');
    lbImg.src = z.dataset.full;
    lbImg.alt = z.dataset.caption;
    if (!calm) {
      lbImg.animate(
        [{ opacity: 0, transform: 'scale(0.985)' }, { opacity: 1, transform: 'none' }],
        { duration: 320, easing: 'cubic-bezier(0.2, 0.7, 0.1, 1)' },
      );
    }
    // Warm up the neighbours so arrows and swipes feel instant
    new Image().src = fullSrc(index - 1);
    new Image().src = fullSrc(index + 1);
  };
  const open = (i) => {
    opener = document.activeElement;
    show(i);
    lb.hidden = false;
    document.body.style.overflow = 'hidden';
    lb.querySelector('.lightbox__close').focus();
  };
  const close = () => {
    lb.hidden = true;
    document.body.style.overflow = '';
    if (opener) opener.focus();
  };

  zooms.forEach((z, i) => z.addEventListener('click', () => open(i)));
  lb.querySelector('.lightbox__close').addEventListener('click', close);
  lb.querySelector('.lightbox__prev').addEventListener('click', () => show(index - 1));
  lb.querySelector('.lightbox__next').addEventListener('click', () => show(index + 1));
  lb.addEventListener('click', (e) => {
    if (e.target === lb || e.target.classList.contains('lightbox__stage')) close();
  });
  lb.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(index - 1);
    if (e.key === 'ArrowRight') show(index + 1);
    if (e.key === 'Tab') {
      // keep focus inside the viewer
      const f = [...lb.querySelectorAll('button')];
      const first = f[0];
      const last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  // Swipe on touch screens
  let x0 = null;
  lb.addEventListener('touchstart', (e) => (x0 = e.touches[0].clientX), { passive: true });
  lb.addEventListener('touchend', (e) => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 50) show(index + (dx < 0 ? 1 : -1));
    x0 = null;
  });
})();
