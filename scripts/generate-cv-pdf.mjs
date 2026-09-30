import { join } from "node:path";
import { preview } from "astro";
import { chromium } from "playwright";

const outDir = "dist/cv";

const targets = [
    { path: "/cv/", file: "iago-fernandez-picos-cv-es.pdf" },
    { path: "/en/cv/", file: "iago-fernandez-picos-cv-en.pdf" },
];

const server = await preview({ root: ".", logLevel: "warn" });
const baseUrl = `http://localhost:${server.port}`;
const browser = await chromium.launch();

try {
    const page = await browser.newPage();

    for (const target of targets) {
        await page.goto(baseUrl + target.path, { waitUntil: "networkidle" });
        await page.evaluate(() => document.fonts.ready);

        await page.pdf({
            path: join(outDir, target.file),
            format: "A4",
            printBackground: true,
            preferCSSPageSize: true,
        });

        console.log(`✓ ${target.file}`);
    }
} finally {
    await browser.close();
    await server.stop();
}
