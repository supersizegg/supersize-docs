import { aliases, pages } from "./content.js";

const app = document.querySelector("#app");
const pageBySlug = new Map(pages.map((page) => [page.slug, page]));

function normalizePath(pathname) {
  let path = pathname || "/";
  path = path.replace(/\/index\.html$/, "/");
  if (!path.startsWith("/")) path = `/${path}`;
  if (path !== "/" && !path.endsWith("/")) path = `${path}/`;
  return aliases[path] || path;
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function navMarkup(currentSlug) {
  return pages
    .map((page) => {
      const active = page.slug === currentSlug ? "active" : "";
      const current = page.slug === currentSlug ? 'aria-current="page"' : "";
      return `<a class="nav-link ${active}" href="${page.slug}" data-doc-link ${current}>${escapeHtml(page.navTitle)}</a>`;
    })
    .join("");
}

function render(page) {
  document.title = `${page.title} - Slimecoin Docs`;

  const logo = page.heroLogo
    ? `<img class="hero-logo" src="/logo/slimecoinio.png" alt="Slimecoin.io" />`
    : "";

  app.innerHTML = `
    <div class="site-shell">
      <aside class="sidebar">
        <a class="brand" href="/" data-doc-link aria-label="Slimecoin Docs home">
          <img src="/logo/slime.png" alt="" />
          <span>Slimecoin Docs</span>
        </a>
        <nav class="side-nav" aria-label="Docs navigation">
          ${navMarkup(page.slug)}
        </nav>
      </aside>

      <div class="page-shell">
        <header class="topbar">
          <a class="mobile-brand" href="/" data-doc-link aria-label="Slimecoin Docs home">
            <img src="/logo/slime.png" alt="" />
            <span>Docs</span>
          </a>
          <nav class="mobile-nav" aria-label="Mobile docs navigation">
            ${navMarkup(page.slug)}
          </nav>
          <a class="topbar-button" href="/games/" data-doc-link>Games</a>
        </header>

        <main class="content-grid">
          <article class="article">
            <header class="article-header">
              ${logo}
              <p class="eyebrow">${escapeHtml(page.eyebrow)}</p>
              <h1>${escapeHtml(page.title)}</h1>
              <p class="description">${escapeHtml(page.description)}</p>
            </header>
            <div class="doc-content">
              ${page.content}
            </div>
          </article>

          <aside class="toc-shell" aria-label="On this page">
            <div class="toc-card">
              <p>On this page</p>
              <nav id="toc"></nav>
            </div>
          </aside>
        </main>
      </div>
    </div>
  `;

  buildToc();
}

function buildToc() {
  const article = document.querySelector(".doc-content");
  const toc = document.querySelector("#toc");
  const headings = [...article.querySelectorAll("h2, h3")];

  if (!headings.length) {
    toc.innerHTML = "";
    return;
  }

  const usedIds = new Set();
  const links = headings.map((heading) => {
    let id = heading.id || slugify(heading.textContent);
    let suffix = 2;
    while (usedIds.has(id)) {
      id = `${slugify(heading.textContent)}-${suffix}`;
      suffix += 1;
    }
    usedIds.add(id);
    heading.id = id;
    const level = heading.tagName === "H3" ? "toc-depth-2" : "";
    return `<a class="${level}" href="#${id}">${escapeHtml(heading.textContent)}</a>`;
  });

  toc.innerHTML = links.join("");
}

function renderCurrentRoute() {
  const slug = normalizePath(window.location.pathname);
  const page = pageBySlug.get(slug) || pageBySlug.get("/");
  render(page);
}

document.addEventListener("click", (event) => {
  const link = event.target.closest("a");
  if (!link) return;

  const url = new URL(link.href, window.location.href);
  const slug = normalizePath(url.pathname);

  if (url.origin !== window.location.origin || !pageBySlug.has(slug)) return;

  event.preventDefault();
  window.history.pushState({}, "", slug);
  render(pageBySlug.get(slug));
  window.scrollTo({ top: 0, behavior: "auto" });
});

window.addEventListener("popstate", renderCurrentRoute);
renderCurrentRoute();
