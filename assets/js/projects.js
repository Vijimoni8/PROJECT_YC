/* Renders data from projects-data.js
   - home page:  fills #projects-grid with project cards
   - project.html: builds the full interior showcase page */
(function () {
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
  ));
  const link = (p) => "project.html?p=" + encodeURIComponent(p.slug);

  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); });
  }, { threshold: 0.12 });
  const observe = (root) => root.querySelectorAll(".reveal").forEach((el) => revealObs.observe(el));

  /* ───────── HOME PAGE: project cards ───────── */
  const grid = document.getElementById("projects-grid");
  if (grid && typeof PROJECTS !== "undefined") {
    grid.innerHTML = PROJECTS.map((p, i) => `
      <a class="project-card reveal stagger-${(i % 3) + 1}" href="${link(p)}" aria-label="View ${esc(p.title)} interiors">
        <div class="project-card-img">
          <img src="${esc(p.cover)}" alt="${esc(p.title)} — ${esc(p.category)}" loading="lazy">
          <div class="project-card-count">${p.gallery.length} Interior Photos</div>
        </div>
        <div class="project-card-body">
          <div class="project-card-cat">${esc(p.category)}</div>
          <h3 class="project-card-title">${esc(p.title)}</h3>
          <div class="project-card-loc">${esc(p.location)}</div>
          <p class="project-card-sum">${esc(p.summary)}</p>
          <div class="project-card-link">View Interiors <span></span></div>
        </div>
      </a>`).join("");
    observe(grid);
  }

  /* ───────── PROJECT PAGE ───────── */
  const root = document.getElementById("project-root");
  if (!root || typeof PROJECTS === "undefined") return;

  const slug = new URLSearchParams(location.search).get("p");
  const idx = PROJECTS.findIndex((p) => p.slug === slug);

  if (idx < 0) {
    document.title = "Project not found — Yashaswini Constructions";
    root.innerHTML = `<div class="pp-missing">
        <h1>Project not found</h1>
        <a class="btn-primary" href="index.html#projects">Back to all projects</a>
      </div>`;
    return;
  }

  const p = PROJECTS[idx];
  const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  /* page title + description for browser tab / search / link previews */
  document.title = `${p.title} — ${p.category} | Yashaswini Constructions`;
  const setMeta = (sel, val) => { const m = document.querySelector(sel); if (m) m.setAttribute("content", val); };
  setMeta('meta[name="description"]', `${p.title} — ${p.summary} A ${p.category.toLowerCase()} project by Yashaswini Constructions, Bengaluru.`);
  setMeta('meta[property="og:title"]', `${p.title} | Yashaswini Constructions`);
  setMeta('meta[property="og:description"]', p.summary);
  setMeta('meta[property="og:image"]', p.cover);
  setMeta('meta[name="twitter:image"]', p.cover);

  const facts = [
    ["Category", p.category], ["Location", p.location],
    ["Built-up Area", p.area], ["Completed", p.year]
  ].filter((f) => f[1]);

  root.innerHTML = `
    <header class="pp-hero">
      <img src="${esc(p.cover)}" alt="${esc(p.title)}">
      <div class="pp-hero-inner">
        <a class="pp-back" href="index.html#projects">← All Projects</a>
        <div class="pp-cat">${esc(p.category)}</div>
        <h1 class="pp-title">${esc(p.title)}</h1>
        <div class="pp-loc">${esc(p.location)}</div>
      </div>
    </header>

    <section class="pp-about">
      <div class="reveal">
        <h3>About This Project</h3>
        <p>${esc(p.description)}</p>
      </div>
      <aside class="pp-facts reveal stagger-1">
        <h3>Project Details</h3>
        ${facts.map((f) => `<div class="pp-fact"><span>${esc(f[0])}</span><span>${esc(f[1])}</span></div>`).join("")}
        ${p.scope && p.scope.length ? `<div class="pp-tags">${p.scope.map((s) => `<span class="pp-tag">${esc(s)}</span>`).join("")}</div>` : ""}
      </aside>
    </section>

    <section class="pp-interiors" id="interiors">
      <div class="pp-interiors-head">
        <div class="kicker reveal">Interior Showcase</div>
        <h2 class="reveal stagger-1">Inside <em>${esc(p.title)}</em></h2>
      </div>
      <div class="pp-gallery">
        ${p.gallery.map((g, i) => `
          <button class="pp-shot reveal" data-i="${i}" aria-label="Open photo: ${esc(g.caption)}">
            <img src="${esc(g.src)}" alt="${esc(g.caption)} — ${esc(p.title)}" loading="lazy">
            <span class="pp-shot-cap">${esc(g.caption)}</span>
          </button>`).join("")}
      </div>
    </section>

    <div class="pp-nav" role="navigation" aria-label="More projects">
      <a class="prev" href="${link(prev)}"><small>← Previous Project</small><strong>${esc(prev.title)}</strong></a>
      <a class="next" href="${link(next)}"><small>Next Project →</small><strong>${esc(next.title)}</strong></a>
    </div>

    <section class="pp-cta">
      <h2>Like what you see? <em>Let's build yours.</em></h2>
      <div class="pp-cta-group">
        <a class="btn-primary" href="mailto:info@yashaswini.in?subject=Enquiry%20-%20${encodeURIComponent(p.title)}">Start Your Project</a>
        <a class="btn-ghost" href="index.html#projects">View All Projects</a>
      </div>
    </section>`;
  observe(root);

  /* ───────── LIGHTBOX ───────── */
  const lb = document.getElementById("lightbox");
  const lbImg = document.getElementById("lb-img");
  const lbCap = document.getElementById("lb-cap");
  const lbCount = document.getElementById("lb-count");
  let cur = 0;

  function show(i) {
    cur = (i + p.gallery.length) % p.gallery.length;
    const g = p.gallery[cur];
    lbImg.src = g.src; lbImg.alt = g.caption;
    lbCap.textContent = g.caption;
    lbCount.textContent = `${cur + 1} / ${p.gallery.length}`;
  }
  function open(i) { show(i); lb.classList.add("open"); document.body.style.overflow = "hidden"; }
  function close() { lb.classList.remove("open"); document.body.style.overflow = ""; }

  root.querySelectorAll(".pp-shot").forEach((b) => b.addEventListener("click", () => open(+b.dataset.i)));
  document.getElementById("lb-close").addEventListener("click", close);
  document.getElementById("lb-prev").addEventListener("click", () => show(cur - 1));
  document.getElementById("lb-next").addEventListener("click", () => show(cur + 1));
  lb.addEventListener("click", (e) => { if (e.target === lb) close(); });
  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(cur - 1);
    if (e.key === "ArrowRight") show(cur + 1);
  });
})();
