/**
 * Image Optimization Script
 * =========================
 * Generates responsive WebP variants from original wedding photos.
 * Outputs to public/images/optimized/ without modifying originals.
 *
 * Usage: node scripts/optimize-images.mjs
 */

import sharp from 'sharp';
import { mkdir, access } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const INPUT_DIR = join(__dirname, '..', 'public', 'images');
const OUTPUT_DIR = join(__dirname, '..', 'public', 'images', 'optimized');

/** Responsive width breakpoints */
const SIZES = [
  { width: 1920, suffix: '1920w', quality: 82 },
  { width: 1024, suffix: '1024w', quality: 80 },
  { width: 640, suffix: '640w', quality: 78 },
];

/** Map source filenames to clean output slugs */
const IMAGE_MAP = {
  '1 jpg.jpg.jpeg': 'photo-1',
  '2 jpg.jpg.jpeg': 'photo-2',
  '3 jpg.jpg.jpeg': 'photo-3',
  '4 jpg.jpg.jpeg': 'photo-4',
  '5 jpg.jpg.jpeg': 'photo-5',
  'DSC09870.jpg.jpeg': 'save-the-date',
  'bride.jpeg': 'bride',
  'groom.jpeg': 'groom',
};

async function fileExists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function optimize() {
  await mkdir(OUTPUT_DIR, { recursive: true });

  let successCount = 0;
  let failCount = 0;

  for (const [filename, slug] of Object.entries(IMAGE_MAP)) {
    const inputPath = join(INPUT_DIR, filename);

    if (!(await fileExists(inputPath))) {
      console.warn(`  ⚠ Skipping ${filename} — file not found`);
      failCount++;
      continue;
    }

    console.log(`Processing: ${filename}`);

    for (const { width, suffix, quality } of SIZES) {
      const outputFilename = `${slug}-${suffix}.webp`;
      const outputPath = join(OUTPUT_DIR, outputFilename);

      try {
        const result = await sharp(inputPath)
          .resize(width, null, { withoutEnlargement: true, fit: 'inside' })
          .webp({ quality, effort: 4 })
          .toFile(outputPath);

        const sizeKB = Math.round(result.size / 1024);
        console.log(`  → ${outputFilename} (${result.width}×${result.height}, ${sizeKB} KB)`);
        successCount++;
      } catch (err) {
        console.error(`  ✗ Failed ${outputFilename}: ${err.message}`);
        failCount++;
      }
    }
  }

  console.log(`\n✅ Done: ${successCount} optimized, ${failCount} failed/skipped`);
}

optimize().catch((err) => {
  console.error('Optimization failed:', err);
  process.exit(1);
});
