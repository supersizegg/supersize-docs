import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { pages } from "../src/content.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const failures = [];

function exists(relativePath) {
  return fs.existsSync(path.join(root, relativePath));
}

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const absolute = path.join(directory, entry.name);
    if (entry.name === ".git") return [];
    if (entry.isDirectory()) return walk(absolute);
    return [absolute];
  });
}

const requiredFiles = [
  "index.html",
  "src/app.js",
  "src/content.js",
  "src/styles.css",
  "favicon.svg",
  "logo/slime.png",
  "logo/slimecoinio.png",
];

for (const file of requiredFiles) {
  if (!exists(file)) failures.push(`Missing required file: ${file}`);
}

for (const page of pages) {
  const routeFile = page.slug === "/" ? "index.html" : `${page.slug.slice(1)}index.html`;
  if (!exists(routeFile)) failures.push(`Missing route entrypoint: ${routeFile}`);
  if (!page.title || !page.description || !page.content) {
    failures.push(`Incomplete page metadata: ${page.slug}`);
  }
}

if (exists("docs.json")) failures.push("docs.json should not exist after cutting Mintlify");

const mdxFiles = walk(root)
  .filter((file) => file.endsWith(".mdx"))
  .map((file) => path.relative(root, file));

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

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Validated ${pages.length} docs pages and ${requiredFiles.length} required files.`);
