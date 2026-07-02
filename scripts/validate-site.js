import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { pages } from "../src/content.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ignoredDirectories = new Set([".git", ".vercel", "public"]);

function exists(rootDirectory, relativePath) {
  return fs.existsSync(path.join(rootDirectory, relativePath));
}

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory() && ignoredDirectories.has(entry.name)) return [];
    if (entry.isDirectory()) return walk(absolute);
    return [absolute];
  });
}

export const requiredFiles = [
  "index.html",
  "src/app.js",
  "src/content.js",
  "src/styles.css",
  "logo/slime.png",
  "logo/slimecoinio.png",
];

export function validateSite(rootDirectory = root) {
  const failures = [];

  for (const file of requiredFiles) {
    if (!exists(rootDirectory, file)) failures.push(`Missing required file: ${file}`);
  }

  for (const page of pages) {
    const routeFile = page.slug === "/" ? "index.html" : `${page.slug.slice(1)}index.html`;
    if (!exists(rootDirectory, routeFile)) failures.push(`Missing route entrypoint: ${routeFile}`);
    const routePath = path.join(rootDirectory, routeFile);
    if (fs.existsSync(routePath)) {
      const routeHtml = fs.readFileSync(routePath, "utf8");
      if (!routeHtml.includes('rel="icon" type="image/png" href="/logo/slime.png"')) {
        failures.push(`Route does not use Slimecoin logo favicon: ${routeFile}`);
      }
    }
    if (!page.title || !page.description || !page.content) {
      failures.push(`Incomplete page metadata: ${page.slug}`);
    }
  }

  if (exists(rootDirectory, "docs.json")) {
    failures.push("docs.json should not exist after cutting Mintlify");
  }

  const mdxFiles = walk(rootDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => path.relative(rootDirectory, file));

  for (const file of mdxFiles) {
    failures.push(`MDX file should not remain in first-party docs app: ${file}`);
  }

  const validRoutes = new Set(pages.map((page) => page.slug));
  const contentLinks = pages.flatMap((page) => {
    const matches = [...page.content.matchAll(/href="([^"]+)"/g)];
    return matches.map((match) => ({ page: page.slug, href: match[1] }));
  });

  for (const { page, href } of contentLinks) {
    if (href.startsWith("/") && !validRoutes.has(href)) {
      failures.push(`Unknown docs link on ${page}: ${href}`);
    }
  }

  return failures;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const failures = validateSite(root);

  if (failures.length) {
    console.error(failures.join("\n"));
    process.exit(1);
  }

  console.log(`Validated ${pages.length} docs pages and ${requiredFiles.length} required files.`);
}
