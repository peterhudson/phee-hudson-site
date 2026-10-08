// Takes screenshots of every concept with real paintings, for design review.
// Run by .github/workflows/screenshots.yml; output goes to the `screenshots` branch.
import { chromium } from "playwright";
import { mkdirSync } from "fs";

const BASE = process.env.BASE || "http://127.0.0.1:8080/";
const OUT = process.env.OUT || "shots";
mkdirSync(OUT, { recursive: true });

const pages = [
  ["index", ""],
  ["summit", "summit/"],
  ["gallery-home", "gallery/"],
  ["gallery-collection", "gallery/#/c/mountains"],
  ["gallery-work", "gallery/#/w/prints/0"],
  ["gallery-about", "gallery/#/about"],
  ["gallery-contact", "gallery/#/contact"],
  ["boathouse", "boathouse/"],
];
const viewports = [
  ["desktop", { width: 1440, height: 900 }],
  ["mobile", { width: 390, height: 844, isMobile: true, deviceScaleFactor: 2 }],
];

const browser = await chromium.launch();
for (const [vn, vp] of viewports) {
  const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height }, isMobile: !!vp.isMobile, deviceScaleFactor: vp.deviceScaleFactor || 1 });
  for (const [name, path] of pages) {
    const pg = await ctx.newPage();
    const errors = [];
    pg.on("pageerror", (e) => errors.push(e.message));
    pg.on("requestfailed", (r) => errors.push("failed: " + r.url()));
    pg.on("response", (r) => { if (r.status() >= 400) errors.push(r.status() + " " + r.url()); });
    await pg.goto(BASE + path, { waitUntil: "networkidle" });
    await pg.waitForTimeout(1500);
    // First screen exactly as a visitor sees it.
    await pg.screenshot({ path: `${OUT}/${vn}-${name}-fold.png` });
    // Scroll through so lazy images and reveal animations fire, then capture the whole page.
    const h = await pg.evaluate(() => document.body.scrollHeight);
    for (let y = 0; y < h; y += vp.height / 2) { await pg.evaluate((y) => scrollTo(0, y), y); await pg.waitForTimeout(200); }
    await pg.waitForLoadState("networkidle");
    await pg.waitForTimeout(1500);
    await pg.evaluate(() => scrollTo(0, 0));
    await pg.waitForTimeout(400);
    await pg.screenshot({ path: `${OUT}/${vn}-${name}-full.png`, fullPage: true });
    const broken = await pg.evaluate(() => [...document.images].filter((i) => i.complete && i.naturalWidth === 0).map((i) => i.src));
    console.log(`${vn} ${name}: errors=${JSON.stringify(errors)} brokenImages=${broken.length}`);
    await pg.close();
  }
  // Lightbox open state.
  const pg = await ctx.newPage();
  await pg.goto(BASE + "summit/", { waitUntil: "networkidle" });
  await pg.click("#grid .card");
  await pg.waitForTimeout(2500);
  await pg.screenshot({ path: `${OUT}/${vn}-summit-lightbox.png` });
  await pg.close();
  // Summit hero at each slide, since text contrast varies with the painting behind it.
  const hp = await ctx.newPage();
  await hp.goto(BASE + "summit/", { waitUntil: "networkidle" });
  for (let i = 0; i < 5; i++) {
    await hp.waitForTimeout(i === 0 ? 2000 : 6600);
    await hp.screenshot({ path: `${OUT}/${vn}-summit-hero-${i + 1}.png` });
  }
  await hp.close();
  await ctx.close();
}
await browser.close();
