/* ============================================================
   GEOPOLITICS IN A MINUTE — Shared JS
   ============================================================ */

// ── Utilities ────────────────────────────────────────────────

function setLiveDate(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const opts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  el.textContent = new Date().toLocaleDateString('en-US', opts).toUpperCase();
}

function copyLink(e) {
  e.preventDefault();
  navigator.clipboard.writeText(window.location.href).then(() => {
    const btn = e.currentTarget;
    const orig = btn.textContent;
    btn.textContent = '✓ Copied!';
    setTimeout(() => btn.textContent = orig, 2000);
  });
}

// ── Index page: render featured card + grid ──────────────────

function renderIndex() {
  if (!window.ARTICLES || !ARTICLES.length) return;

  const [featured, ...rest] = ARTICLES;

  // Featured card
  const fc = document.getElementById('featured-card-slot');
  if (fc) {
    fc.innerHTML = `
      <a class="featured-card" href="${featured.url}">
        <div class="featured-card-img">
          <img src="${featured.image.src}" alt="${featured.image.alt}" loading="eager" />
        </div>
        <div class="featured-card-body">
          <div>
            <div class="card-category">${featured.categories.join(' · ')}</div>
            <h2 class="featured-card-title">${featured.title}</h2>
            <p class="featured-card-excerpt">${featured.excerpt}</p>
          </div>
          <div class="card-meta">
            <span>${featured.date}</span>
            <span class="card-meta-dot"></span>
            <span>${featured.location}</span>
            <span class="card-meta-dot"></span>
            <span class="read-link">Read full story →</span>
          </div>
        </div>
      </a>`;
  }

  // Articles grid — show up to 3 real articles, pad with placeholders
  const grid = document.getElementById('articles-grid-slot');
  if (!grid) return;

  const slots = 3;
  let html = '';

  rest.slice(0, slots).forEach(a => {
    html += `
      <a class="article-card" href="${a.url}">
        <div class="article-card-img">
          <img src="${a.image.src}" alt="${a.image.alt}" loading="lazy" />
        </div>
        <div class="article-card-body">
          <div class="card-category">${a.categories.join(' · ')}</div>
          <h3 class="article-card-title">${a.title}</h3>
          <div class="article-card-meta">${a.date} · ${a.readTime}</div>
        </div>
      </a>`;
  });

  const placeholders = slots - rest.length;
  for (let i = 0; i < Math.max(0, placeholders); i++) {
    html += `
      <div class="article-card placeholder">
        <div class="placeholder-inner">
          <div class="placeholder-icon">📰</div>
          <div class="placeholder-text">Story coming soon</div>
        </div>
      </div>`;
  }

  grid.innerHTML = html;
}

// ── Article page: render from slug ───────────────────────────

function renderArticle(slug) {
  if (!window.ARTICLES) return;
  const article = ARTICLES.find(a => a.slug === slug);
  if (!article) return;

  // <title>
  document.title = `${article.title} · Geopolitics in a Minute`;

  // meta description
  let meta = document.querySelector('meta[name="description"]');
  if (meta) meta.content = article.deck;

  // hero
  const hero = document.getElementById('article-hero');
  if (hero) {
    hero.querySelector('img').src     = article.image.src;
    hero.querySelector('img').alt     = article.image.alt;
    hero.querySelector('figcaption').textContent = article.image.caption;
  }

  // breadcrumb categories
  const bc = document.getElementById('breadcrumb-categories');
  if (bc) bc.innerHTML = article.categories.map(c => `<span class="breadcrumb-sep">›</span><span>${c}</span>`).join('');

  // category badge
  const badge = document.getElementById('article-category');
  if (badge) badge.textContent = article.categories.join(' · ');

  // title / deck / byline
  setText('article-title',    article.title);
  setText('article-deck',     article.deck);
  setText('article-date',     article.date);
  setText('article-location', article.location);
  setText('article-readtime', article.readTime);

  // body
  const body = document.getElementById('article-body');
  if (body) body.innerHTML = article.body;

  // tags
  const tags = document.getElementById('article-tags');
  if (tags) tags.innerHTML = article.tags.map(t => `<span class="tag">${t}</span>`).join('');

  // context
  const ctx = document.getElementById('article-context');
  if (ctx) {
    ctx.innerHTML = article.context
      .map(c => `<p><strong>${c.term}</strong> ${c.detail}</p>`)
      .join('');
  }

  // share links
  const shareX  = document.getElementById('share-x');
  const shareWa = document.getElementById('share-wa');
  if (shareX)  shareX.href  = `https://x.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.href)}`;
  if (shareWa) shareWa.href = `https://wa.me/?text=${encodeURIComponent(article.title + ' ' + window.location.href)}`;
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

// ── Ticker: build from all articles ─────────────────────────

function renderTicker() {
  const track = document.querySelector('.ticker-track');
  if (!track || !window.ARTICLES || !ARTICLES.length) return;

  // Use titles as ticker items, duplicated for seamless loop
  const items = ARTICLES.map(a => `<span>${a.title}</span>`).join('');
  track.innerHTML = items + items; // duplicate for CSS loop
}
