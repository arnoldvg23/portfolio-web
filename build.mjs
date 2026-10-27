// Generates the site from content.mjs, once per language:
//   English → index.html, work/*.html    Spanish → es/…    Catalan → ca/…
// Run: node build.mjs
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { languages, order, site, ui, metaLabels, filters, projects as allProjects } from './content.mjs';

// Projects in the order set in content.mjs (any not listed go at the end)
const projects = [
  ...order.map((slug) => allProjects.find((p) => p.slug === slug)).filter(Boolean),
  ...allProjects.filter((p) => !order.includes(p.slug)),
];

const year = new Date().getFullYear();
const DEFAULT = languages[0][0];
let lang = DEFAULT; // language being built right now

// Text in the current language (plain strings are shared by all languages)
const t = (v) => (v && typeof v === 'object' && !Array.isArray(v) ? (v[lang] ?? v[DEFAULT]) : v);
const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const tx = (v) => esc(t(v));
const num = (i) => String(i + 1).padStart(2, '0');
const prefix = (l) => (l === DEFAULT ? '' : `${l}/`);

// Reads width/height from a JPEG or PNG so every <img> gets real dimensions (no layout jumps)
const sizes = {};
const size = (src) => {
  if (sizes[src]) return sizes[src];
  let d;
  try {
    d = readFileSync(new URL(`./assets/img/${src}`, import.meta.url));
  } catch {
    throw new Error(`Image not found: assets/img/${src}`);
  }
  if (d[0] === 0x89 && d[1] === 0x50) return (sizes[src] = [d.readUInt32BE(16), d.readUInt32BE(20)]);
  let i = 2;
  while (i < d.length) {
    if (d[i] !== 0xff) { i++; continue; }
    const m = d[i + 1];
    if (m >= 0xc0 && m <= 0xc3) return (sizes[src] = [d.readUInt16BE(i + 7), d.readUInt16BE(i + 5)]);
    i += 2 + d.readUInt16BE(i + 2);
  }
  throw new Error(`Could not read size of assets/img/${src} (use .jpg or .png)`);
};
const img = (root, src, alt, attrs = '') => {
  const [w, h] = size(src);
  // Lazy by default; an explicit loading="..." in attrs wins (the first attribute in the tag is the one browsers use)
  const loading = attrs.includes('loading=') ? '' : ' loading="lazy"';
  return `<img src="${root}assets/img/${src}" alt="${esc(alt)}" width="${w}" height="${h}"${loading} decoding="async"${attrs}>`;
};

const svg = (d, cls = 'ico') => `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true">${d}</svg>`;
const arrowRight = svg('<path d="M5 12h14M13 6l6 6-6 6"/>');
const arrowUpRight = svg('<path d="M7 17L17 7M8 7h9v9"/>');
const arrowDown = svg('<path d="M12 5v14M6 13l6 6 6-6"/>');
// Thin line icons for "What I do"
const icons = {
  phone: '<rect x="6.5" y="2.5" width="11" height="19" rx="2.5"/><path d="M10.5 18.5h3"/>',
  web: '<rect x="2.5" y="4" width="19" height="15" rx="2"/><path d="M2.5 8.5h19M6 6.3h.01M8.5 6.3h.01"/>',
  app: '<rect x="3" y="3" width="7.5" height="7.5" rx="1.5"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5"/><path d="M17.25 13.5v7.5M13.5 17.25H21"/>',
  mark: '<circle cx="12" cy="12" r="9.5"/><path d="M8 16l4-8 4 8M9.5 13h5"/>',
  book: '<path d="M12 6.5C10 5 7 4.5 3 4.5v14c4 0 7 .5 9 2 2-1.5 5-2 9-2v-14c-4 0-7 .5-9 2zM12 6.5v14"/>',
  camera: '<path d="M3 8.5a2 2 0 0 1 2-2h2.5L9 4.5h6l1.5 2H19a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><circle cx="12" cy="13" r="3.5"/>',
  film: '<rect x="2.5" y="5" width="19" height="14" rx="2"/><path d="M10 9.2v5.6l4.8-2.8z"/>',
};

// `page` is the path of this page inside a language folder: 'index.html' or 'work/<slug>.html'
function layout({ root, page, title, description, body, ogImage, extraHead = '', bodyClass = '' }) {
  const base = root + prefix(lang);
  const switcher = languages
    .map(
      ([l, short, name]) =>
        `<a href="${root}${prefix(l)}${page}" hreflang="${l}" lang="${l}" aria-label="${short} — ${name}" data-lang="${l}"${l === lang ? ' aria-current="true"' : ''}>${short}</a>`,
    )
    .join('');
  const alternates = site.url
    ? languages
        .map(([l]) => `<link rel="alternate" hreflang="${l}" href="${site.url.replace(/\/$/, '')}/${prefix(l)}${page}">`)
        .join('\n') + `\n<link rel="alternate" hreflang="x-default" href="${site.url.replace(/\/$/, '')}/${page}">`
    : '';

  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta name="author" content="${esc(site.name)}">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:image" content="${root}assets/img/${ogImage}">
<meta property="og:locale" content="${{ en: 'en_GB', es: 'es_ES', ca: 'ca_ES' }[lang] || lang}">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#0B0B0C">
<meta name="color-scheme" content="dark">
${alternates}
<link rel="icon" href="${root}assets/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:ital,wdth,wght@0,62..125,100..900;1,62..125,100..900&family=Instrument+Serif:ital@0;1&family=IBM+Plex+Mono:wght@400;500&display=swap">
<link rel="stylesheet" href="${root}assets/css/style.css">
<script>document.documentElement.classList.add('js')</script>${extraHead}
<script src="${root}assets/js/main.js" defer></script>
</head>
<body class="${bodyClass}">
<a class="skip" href="#main">${tx(ui.skip)}</a>
<header class="topbar">
  <div class="topbar__inner">
    <a class="brand" href="${base}index.html" aria-label="${esc(site.name)} — ${tx(ui.home)}">
      <span class="brand__mark" aria-hidden="true">AV</span>
      <span class="brand__name">${esc(site.name)}</span>
    </a>
    <nav class="nav" aria-label="${tx(ui.mainNav)}">
      <a href="${base}index.html#work">${tx(ui.work)}</a>
      <a href="${base}index.html#services">${tx(ui.services)}</a>
      <a href="${base}index.html#experience">${tx(ui.experience)}</a>
      <a href="${base}index.html#about">${tx(ui.about)}</a>
    </nav>
    <div class="topbar__right">
      <nav class="lang" aria-label="${tx(ui.language)}">${switcher}</nav>
      <a class="pill pill--light topbar__cta" href="${base}index.html#contact">${tx(ui.letsTalk)} ${arrowUpRight}</a>
    </div>
  </div>
</header>
<main id="main">
${body}
</main>
<footer class="footer">
  <div class="wrap footer__inner">
    <span>© ${year} ${esc(site.name)}</span>
    <span>${tx(site.role)} · ${esc(site.location)}</span>
    <span class="footer__links">${[['Email', `mailto:${site.email}`], ...site.links]
      .map(([label, href]) => `<a href="${esc(href)}"${href.startsWith('http') ? ' target="_blank" rel="noopener"' : ''}>${tx(label)}</a>`)
      .join('')}</span>
    <a href="#main" class="footer__top">${tx(ui.backToTop)}</a>
  </div>
</footer>
<div class="lightbox" hidden role="dialog" aria-modal="true" aria-label="${tx(ui.viewer)}">
  <button class="lightbox__btn lightbox__close" type="button" aria-label="${tx(ui.close)}">${svg('<path d="M6 6l12 12M18 6L6 18"/>')}</button>
  <button class="lightbox__btn lightbox__prev" type="button" aria-label="${tx(ui.prevImage)}">${svg('<path d="M15 6l-6 6 6 6"/>')}</button>
  <figure class="lightbox__stage"><img alt=""><figcaption></figcaption></figure>
  <button class="lightbox__btn lightbox__next" type="button" aria-label="${tx(ui.nextImage)}">${svg('<path d="M9 6l6 6-6 6"/>')}</button>
</div>
<div class="grain" aria-hidden="true"></div>
</body>
</html>
`;
}

// ---------- Home ----------

function cardMedia(p, root) {
  if (p.card.phones) {
    return `<div class="card__phones" style="--card-bg:${p.card.bg}">${p.card.phones
      .map((src) => `<span class="card__phone">${img(root, src, '')}</span>`)
      .join('')}</div>`;
  }
  const pos = p.card.pos ? ` style="object-position:${p.card.pos}"` : '';
  return img(root, p.card.img, '', pos);
}

// Mosaic: rows of 7+5, 4+4+4, 5+7, 4+4+4 columns (of 12); a last unfinished row shares the width
function spans(count) {
  const rows = [[7, 5], [4, 4, 4], [5, 7], [4, 4, 4]];
  const out = [];
  let r = 0;
  while (out.length < count) {
    const row = rows[r++ % rows.length];
    const left = count - out.length;
    if (left < row.length) out.push(...Array(left).fill(12 / left));
    else out.push(...row);
  }
  return out;
}

function home(root) {
  const reel = site.reel
    .map((src, i) => `<div class="reel__slide${i === 0 ? ' is-on' : ''}">${img(root, src, '', i === 0 ? ' fetchpriority="high" loading="eager"' : '')}</div>`)
    .join('');

  const marqueeItems = site.marquee
    .map((m, i) => `<span class="${i % 2 ? 'serif' : 'cond'}">${tx(m)}</span><span class="marquee__sep" aria-hidden="true"></span>`)
    .join('');

  const questions = site.questions
    .map((q, i) => `<li class="question reveal"><span class="mono">${num(i)}</span><p>${tx(q)}</p></li>`)
    .join('');

  const experience = site.experience
    .map(
      (x) => `<li class="job reveal">
        <span class="job__when mono">${tx(x.when)}</span>
        <div class="job__main">
          <h3 class="job__role">${tx(x.role)}</h3>
          <p class="job__org">${tx(x.org)}</p>
          ${t(x.text) ? `<p class="job__text">${tx(x.text)}</p>` : ''}
        </div>
        <div class="job__side">
          ${t(x.where) ? `<span class="job__where">${tx(x.where)}</span>` : ''}
          ${x.tags.length ? `<span class="job__tags">${x.tags.map((g) => `<span>${esc(g)}</span>`).join('')}</span>` : ''}
        </div>
      </li>`,
    )
    .join('');

  const layoutSpans = spans(projects.length);
  const cards = projects
    .map(
      (p, i) => `
      <li class="card reveal span-${layoutSpans[i]}" data-tags="${p.tags.join(' ')}">
        <a class="card__link" href="work/${p.slug}.html">
          <div class="card__media">${cardMedia(p, root)}</div>
          <div class="card__text">
            <span class="card__meta"><b>${num(i)}</b> · ${tx(p.category)}</span>
            <h3 class="card__title">${tx(p.title)}</h3>
            <p class="card__short">${tx(p.short)}</p>
          </div>
          <span class="card__go" aria-hidden="true">${arrowUpRight}</span>
        </a>
      </li>`,
    )
    .join('');

  const chips = filters
    .map(([key, label]) => {
      const count = key === 'all' ? projects.length : projects.filter((p) => p.tags.includes(key)).length;
      return `<button type="button" class="chip" data-filter="${key}" aria-pressed="${key === 'all'}">${tx(label)}<sup>${count}</sup></button>`;
    })
    .join('');

  const services = site.services
    .map(
      (c, i) => `<li class="cap">
        ${svg(icons[c.icon] || icons.mark, 'cap__icon')}
        <div><h3 class="cap__title"><span class="mono">${num(i)}</span>${tx(c.title)}</h3><p>${tx(c.text)}</p></div>
      </li>`,
    )
    .join('');

  const links = site.links
    .map(([label, href]) => `<li><a href="${esc(href)}" target="_blank" rel="noopener">${tx(label)} ${arrowUpRight}</a></li>`)
    .join('');

  const [first, ...rest] = site.name.split(' ');
  const hello = t(ui.hello);
  const aboutVisual = site.portrait
    ? `<figure class="about__portrait">${img(root, site.portrait, site.name)}</figure>`
    : `<div class="about__quote" aria-hidden="true"><span class="about__mark">AV</span><p>${t(site.quote)}</p></div>`;

  const body = `
<section class="hero" aria-labelledby="hero-title">
  <div class="reel" aria-hidden="true">${reel}</div>
  <div class="hero__inner wrap">
    <p class="hero__eyebrow mono">${tx(site.role)} — ${esc(site.location)}</p>
    <h1 id="hero-title" class="hero__name">
      <span class="line"><span class="metal">${esc(first)}</span></span>
      <span class="line"><span class="metal">${esc(rest[0] || '')}</span></span>
      <span class="sr-only"> ${esc(rest.slice(1).join(' '))}</span>
    </h1>
    <p class="hero__tagline">${tx(site.tagline)}</p>
    <div class="hero__bottom">
      <div class="hero__intro">
        <p>${tx(site.intro)}</p>
        <div class="hero__actions">
          <a class="pill pill--light" href="#work">${tx(ui.viewWork)} ${arrowDown}</a>
          <a class="pill" href="#contact">${tx(ui.letsTalk)}</a>
        </div>
      </div>
      <dl class="hero__facts">
        <div><dt class="mono">${tx(ui.status)}</dt><dd><span class="live" aria-hidden="true"></span>${tx(site.status)}</dd></div>
        <div><dt class="mono">${tx(ui.currently)}</dt><dd>${tx(site.currently)}</dd></div>
        <div><dt class="mono">${tx(ui.localTime)}</dt><dd><span data-clock data-tz="${esc(site.timeZone)}">${esc(site.location)}</span></dd></div>
      </dl>
    </div>
  </div>
</section>

<div class="marquee" aria-hidden="true">
  <div class="marquee__track">${marqueeItems}${marqueeItems}</div>
</div>

<section id="approach" class="approach wrap" aria-labelledby="approach-title">
  <div class="approach__head reveal">
    <span class="mono label"><b>${num(0)}</b> — ${tx(ui.approach)}</span>
    <h2 id="approach-title" class="section-title">${t(ui.approachTitle)}</h2>
  </div>
  <ol class="questions">${questions}</ol>
  <p class="approach__note reveal">${tx(ui.approachNote)}</p>
</section>

<section id="work" class="work wrap" aria-labelledby="work-title">
  <div class="section-head">
    <div>
      <span class="mono label"><b>${num(1)}</b> — ${tx(ui.work)}</span>
      <h2 id="work-title" class="section-title">${t(ui.selectedWork)}</h2>
    </div>
    <div class="chips" role="group" aria-label="${tx(ui.filterLabel)}">${chips}</div>
  </div>
  <ul class="grid">${cards}
  </ul>
</section>

<section id="services" class="caps wrap" aria-labelledby="caps-title">
  <div class="section-head">
    <div>
      <span class="mono label"><b>${num(2)}</b> — ${tx(ui.services)}</span>
      <h2 id="caps-title" class="section-title">${t(ui.servicesTitle)}</h2>
    </div>
  </div>
  <div class="caps__grid">
    <ul class="caps__list reveal">${services}</ul>
    <aside class="caps__side reveal">
      <div class="panel">
        <h3 class="mono label">${tx(ui.skills)}</h3>
        <ul class="tags">${site.skills.map((d) => `<li>${tx(d)}</li>`).join('')}</ul>
      </div>
      <div class="panel">
        <h3 class="mono label">${tx(ui.tools)}</h3>
        <ul class="tools">${site.tools.map((d) => `<li>${tx(d)}</li>`).join('')}</ul>
      </div>
    </aside>
  </div>
</section>

<section id="experience" class="experience wrap" aria-labelledby="exp-title">
  <div class="section-head">
    <div>
      <span class="mono label"><b>${num(3)}</b> — ${tx(ui.experience)}</span>
      <h2 id="exp-title" class="section-title">${t(ui.experienceTitle)}</h2>
    </div>
  </div>
  <ol class="jobs">${experience}
    ${site.education
      .map(
        ([a, b]) => `<li class="job job--edu reveal">
        <span class="job__when mono">${tx(ui.education)}</span>
        <div class="job__main"><h3 class="job__role">${tx(b)}</h3><p class="job__org">${tx(a)}</p></div>
        <div class="job__side"></div>
      </li>`,
      )
      .join('')}
  </ol>
</section>

<section id="about" class="about wrap" aria-labelledby="about-title">
  <div class="about__visual reveal">${aboutVisual}</div>
  <div class="about__main reveal">
    <span class="mono label"><b>${num(4)}</b> — ${tx(ui.about)}</span>
    <h2 id="about-title" class="section-title">${esc(hello)}${/['’]$/.test(hello) ? '' : ' '}<em>${esc(first)}</em>.</h2>
    ${site.bio.map((b) => `<p>${tx(b)}</p>`).join('')}
  </div>
</section>

<section id="contact" class="contact wrap" aria-labelledby="contact-title">
  <div class="contact__panel reveal">
    <div class="contact__main">
      <span class="mono label"><b>${num(5)}</b> — ${tx(ui.contact)}</span>
      <h2 id="contact-title" class="contact__title"><span class="metal">${t(ui.contactTitle)}</span></h2>
    </div>
    <div class="contact__side">
      <p>${tx(ui.contactText)}</p>
      <a class="pill pill--light pill--big" href="mailto:${esc(site.email)}">${esc(site.email)} ${arrowRight}</a>
      <button class="pill" type="button" data-copy="${esc(site.email)}" data-copied="${tx(ui.copied)}">${tx(ui.copyEmail)}</button>
      ${links ? `<ul class="contact__links">${links}</ul>` : ''}
    </div>
  </div>
</section>`;

  // On the English home page only: first-time visitors whose browser is in Spanish or Catalan
  // are sent to their language. Once someone picks a language, that choice is respected.
  const others = languages.map(([l]) => l).filter((l) => l !== DEFAULT);
  const redirect =
    lang === DEFAULT
      ? `\n<script>try{if(!localStorage.getItem('lang')){var l=(navigator.languages||[navigator.language]).map(function(x){return String(x).slice(0,2).toLowerCase()}).find(function(x){return ${JSON.stringify(
          languages.map(([l]) => l),
        )}.indexOf(x)>-1});if(${JSON.stringify(others)}.indexOf(l)>-1)location.replace(l+'/index.html'+location.hash)}}catch(e){}</script>`
      : '';

  return layout({
    root,
    page: 'index.html',
    title: `${site.name} — ${t(site.role)}`,
    description: t(site.description),
    body,
    ogImage: 'porco-rosso/hero.jpg',
    extraHead: redirect,
    bodyClass: 'is-home',
  });
}

// ---------- Project pages ----------

function gallery(p, root) {
  return p.gallery
    .map((row) => {
      const items = row
        .map(([src, altText, frame]) => {
          const alt = t(altText);
          const [w, h] = size(src);
          const ar = w / h;
          const f = frame || p.frame || 'plain';
          return `<figure class="g-item frame-${f}${ar < 0.8 ? ' is-portrait' : ''}" style="--ar:${ar.toFixed(4)}">
          <button type="button" class="g-zoom" data-full="${root}assets/img/${src}" data-caption="${esc(alt)}" aria-label="${tx(ui.enlarge)}: ${esc(alt)}">${img(root, src, alt)}</button>
        </figure>`;
        })
        .join('');
      // Rows made only of tall screens keep a fixed column size, so a short row doesn't blow up
      const allPortrait = row.every(([src]) => {
        const [w, h] = size(src);
        return w / h < 0.8;
      });
      return `<div class="g-row${allPortrait && row.length > 1 ? ' g-row--tall' : ''} reveal">${items}</div>`;
    })
    .join('\n');
}

function extras(p) {
  let out = '';
  if (p.palette) {
    out += `<div class="palette reveal">${p.palette
      .map(
        ([name, hex, extra]) => `<div class="swatch" style="--sw:${hex}">
          <span class="swatch__chip"></span>
          <span class="swatch__name">${tx(name)}</span>
          <span class="mono swatch__code">${hex}${extra ? ` · ${tx(extra)}` : ''}</span>
        </div>`,
      )
      .join('')}</div>`;
  }
  if (p.specs) {
    out += `<div class="specs panel reveal"><h2 class="mono label">${tx(ui.printSpec)}</h2><dl>${p.specs
      .map(([k, v]) => `<div><dt>${tx(k)}</dt><dd>${tx(v)}</dd></div>`)
      .join('')}</dl></div>`;
  }
  return out;
}

function projectPage(p, i, root) {
  const next = projects[(i + 1) % projects.length];
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const lead = p.lead ?? p.short;

  const meta = p.meta.map(([k, v]) => `<div><dt>${tx(metaLabels[k] ?? k)}</dt><dd>${tx(v)}</dd></div>`).join('');
  const links = (p.links || [])
    .map(([label, href]) => `<a class="pill pill--light" href="${esc(href)}" target="_blank" rel="noopener">${tx(label)} ${arrowUpRight}</a>`)
    .join('');

  let feature = '';
  if (p.hero) {
    feature = `<figure class="feature feature--svg reveal" style="--ar:${(p.hero.w / p.hero.h).toFixed(4)}">
      <img src="${root}assets/img/${p.hero.svg}" alt="${tx(p.hero.alt)}" width="${p.hero.w}" height="${p.hero.h}">
    </figure>`;
  }
  if (p.video) {
    const [w, h] = size(p.video.poster);
    feature = `<div class="feature video reveal" data-yt="${p.video.id}" data-title="${tx(p.video.title)}">
      <img src="${root}assets/img/${p.video.poster}" alt="" width="${w}" height="${h}">
      <button type="button" class="video__play" aria-label="${tx(ui.playVideo)}: ${tx(p.video.title)}">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l11-6.5z"/></svg>
        <span>${tx(ui.playFilm)}</span>
      </button>
    </div>`;
  }

  const cover = p.card.img || p.card.phones[0];
  const body = `
<article class="project">
  <header class="project__head wrap">
    <a class="back mono" href="../index.html#work">${tx(ui.allWork)}</a>
    <span class="mono label"><b>${num(i)}</b> — ${tx(p.category)}</span>
    <h1 class="project__title"><span class="metal">${tx(p.title)}</span></h1>
    <p class="project__lead">${tx(lead)}</p>
  </header>
${
  p.goal
    ? `
  <section class="need wrap">
    <div class="need__panel reveal">
      <span class="mono label">${tx(ui.businessNeed)}</span>
      <p>${tx(p.goal)}</p>
    </div>
  </section>`
    : ''
}
  <section class="project__info wrap">
    <div class="project__body">${p.body.map((b) => `<p>${tx(b)}</p>`).join('')}
      ${links ? `<div class="project__links">${links}</div>` : ''}
    </div>
    <dl class="project__meta panel">${meta}</dl>
  </section>

  <section class="project__gallery wrap" aria-label="${tx(ui.projectImages)}">
    ${feature}
    ${gallery(p, root)}
    ${extras(p)}
  </section>

  <nav class="pager wrap" aria-label="${tx(ui.moreProjects)}">
    <a class="pager__prev" href="${prev.slug}.html"><span class="mono">${tx(ui.previous)}</span><span class="pager__title">${tx(prev.title)}</span></a>
    <a class="pager__next" href="${next.slug}.html">
      <span class="pager__bg" aria-hidden="true">${img(root, next.card.img || next.card.phones[0], '')}</span>
      <span class="mono">${tx(ui.nextProject)}</span>
      <span class="pager__title metal">${tx(next.title)}</span>
      <span class="pager__cat mono">${tx(next.category)}</span>
    </a>
  </nav>
</article>`;

  return layout({
    root,
    page: `work/${p.slug}.html`,
    title: `${t(p.title)} — ${site.name}`,
    description: `${t(lead)} ${t(p.category)}. ${t(ui.projectBy)} ${site.name}.`,
    body,
    ogImage: cover,
    bodyClass: 'is-project',
  });
}

// ---------- Write ----------

const out = (path) => new URL(`./${path}`, import.meta.url);
for (const [l] of languages) {
  rmSync(out(`${prefix(l)}work/`), { recursive: true, force: true });
  if (l !== DEFAULT) rmSync(out(prefix(l)), { recursive: true, force: true });
}
for (const [l] of languages) {
  lang = l;
  const p = prefix(l);
  const depth = p ? 1 : 0;
  mkdirSync(out(`${p}work/`), { recursive: true });
  writeFileSync(out(`${p}index.html`), home('../'.repeat(depth)));
  projects.forEach((proj, i) => writeFileSync(out(`${p}work/${proj.slug}.html`), projectPage(proj, i, '../'.repeat(depth + 1))));
}
console.log(`Built ${languages.length} languages × (home + ${projects.length} projects).`);
