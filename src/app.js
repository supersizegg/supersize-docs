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
          <a class="topbar-button" href="https://slimecoin.io/">Go to Slimecoin.io</a>
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
        </main>
      </div>
    </div>
  `;

  wrapTables();
}

function wrapTables() {
  const tables = document.querySelectorAll(".doc-content table");

  for (const table of tables) {
    const frame = document.createElement("div");
    frame.className = "table-frame";
    table.before(frame);
    frame.append(table);
  }
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
