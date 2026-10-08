/*
 * Minimal accessible lightbox shared by the three concepts.
 * Usage: Lightbox.open(worksArray, index, { renderMeta(work) -> html })
 * Styling comes from CSS custom properties set by each concept:
 *   --lb-bg, --lb-fg, --lb-muted, --lb-font
 */
(function () {
  let el, imgEl, metaEl, works = [], idx = 0, opts = {}, lastFocus = null;

  function ensure() {
    if (el) return;
    el = document.createElement("div");
    el.className = "lb";
    el.setAttribute("role", "dialog");
    el.setAttribute("aria-modal", "true");
    el.setAttribute("aria-label", "Painting viewer");
    el.innerHTML = `
      <button class="lb-close" aria-label="Close">×</button>
      <button class="lb-prev" aria-label="Previous painting">‹</button>
      <figure class="lb-fig">
        <img class="lb-img" alt="" referrerpolicy="no-referrer">
        <figcaption class="lb-meta"></figcaption>
      </figure>
      <button class="lb-next" aria-label="Next painting">›</button>`;
    document.body.appendChild(el);
    imgEl = el.querySelector(".lb-img");
    metaEl = el.querySelector(".lb-meta");
    el.querySelector(".lb-close").onclick = close;
    el.querySelector(".lb-prev").onclick = () => go(-1);
    el.querySelector(".lb-next").onclick = () => go(1);
    el.addEventListener("click", (e) => { if (e.target === el) close(); });
    document.addEventListener("keydown", (e) => {
      if (!el.classList.contains("open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    });
    let x0 = null;
    el.addEventListener("touchstart", (e) => (x0 = e.touches[0].clientX), { passive: true });
    el.addEventListener("touchend", (e) => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 50) go(dx > 0 ? -1 : 1);
      x0 = null;
    });

    const css = document.createElement("style");
    css.textContent = `
      .lb{position:fixed;inset:0;z-index:1000;display:none;align-items:center;justify-content:center;
        background:var(--lb-bg,rgba(10,12,14,.96));color:var(--lb-fg,#f4f1ea);font-family:var(--lb-font,inherit)}
      .lb.open{display:flex}
      .lb-fig{margin:0;max-width:min(1400px,92vw);display:flex;flex-direction:column;align-items:center;gap:18px}
      .lb-img{max-width:100%;max-height:78vh;object-fit:contain;box-shadow:0 20px 60px rgba(0,0,0,.35);transition:opacity .25s}
      .lb-img.loading{opacity:.2}
      .lb-meta{text-align:center;max-width:640px;line-height:1.5}
      .lb-meta .t{font-size:1.15rem}
      .lb-meta .m{color:var(--lb-muted,#a9a59c);font-size:.9rem;margin-top:4px}
      .lb-meta a{color:inherit}
      .lb button{background:none;border:0;color:inherit;cursor:pointer;font-size:2.4rem;line-height:1;padding:12px;opacity:.7}
      .lb button:hover,.lb button:focus-visible{opacity:1}
      .lb-close{position:absolute;top:8px;right:12px}
      .lb-prev,.lb-next{position:absolute;top:50%;transform:translateY(-50%)}
      .lb-prev{left:4px}.lb-next{right:4px}
      @media (max-width:640px){.lb-prev,.lb-next{top:auto;bottom:8px;transform:none}.lb-img{max-height:66vh}}
    `;
    document.head.appendChild(css);
  }

  function render() {
    const w = works[idx];
    imgEl.classList.add("loading");
    imgEl.onload = () => imgEl.classList.remove("loading");
    imgEl.onerror = () => { if (imgEl.src !== w.src) imgEl.src = w.src; };
    imgEl.src = w.large || w.src;
    imgEl.alt = w.title;
    metaEl.innerHTML = opts.renderMeta ? opts.renderMeta(w) : `<div class="t">${w.title}</div>`;
    // Preload neighbours for snappy browsing.
    [idx - 1, idx + 1].forEach((i) => {
      const n = works[(i + works.length) % works.length];
      if (n) new Image().src = n.large || n.src;
    });
  }

  function go(d) { idx = (idx + d + works.length) % works.length; render(); }

  function open(list, i, o) {
    ensure();
    works = list; idx = i || 0; opts = o || {};
    lastFocus = document.activeElement;
    el.classList.add("open");
    document.body.style.overflow = "hidden";
    render();
    el.querySelector(".lb-close").focus();
  }

  function close() {
    el.classList.remove("open");
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }

  window.Lightbox = { open, close };
})();
