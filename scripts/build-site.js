import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { pages } from "../src/content.js";
import { requiredFiles, validateSite } from "./validate-site.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputDirectory = path.join(root, "public");

const staticEntries = [
  "index.html",
  "favicon.svg",
  "games",
  "slime",
  "slimecoin",
  "leagues",
  "fairness-security",
  "src",
  "logo",
];

function copyEntry(relativePath) {
  const source = path.join(root, relativePath);
  const destination = path.join(outputDirectory, relativePath);
  fs.cpSync(source, destination, { recursive: true });
}

function ensureOutputFile(relativePath, failures) {
  if (!fs.existsSync(path.join(outputDirectory, relativePath))) {
    failures.push(`Missing output file: public/${relativePath}`);
  }
}

const sourceFailures = validateSite(root);
if (sourceFailures.length) {
  console.error(sourceFailures.join("\n"));
  process.exit(1);
}

fs.rmSync(outputDirectory, { recursive: true, force: true });
fs.mkdirSync(outputDirectory, { recursive: true });

for (const entry of staticEntries) {
  copyEntry(entry);
}

const outputFailures = [];
for (const file of requiredFiles) {
  ensureOutputFile(file, outputFailures);
}

for (const page of pages) {
  const routeFile = page.slug === "/" ? "index.html" : `${page.slug.slice(1)}index.html`;
  ensureOutputFile(routeFile, outputFailures);
}

if (outputFailures.length) {
  console.error(outputFailures.join("\n"));
  process.exit(1);
}

console.log(`Built ${pages.length} docs pages to public/ for Vercel.`);
