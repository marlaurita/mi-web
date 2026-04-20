// ============================================================
//  optimize-images.js
//  Convierte las imágenes de public/community/ a WebP (900px max,
//  quality 85) y las deja junto a los originales.
//  Uso: node scripts/optimize-images.js
//  Correr cada vez que se agreguen imágenes nuevas.
// ============================================================

import sharp from 'sharp'
import { readdir, stat } from 'fs/promises'
import { join, extname, basename } from 'path'

const ROOT    = 'public/community'
const MAX_W   = 900
const QUALITY = 85
const EXTS    = new Set(['.jpg', '.jpeg', '.png'])

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files   = []
  for (const e of entries) {
    const full = join(dir, e.name)
    if (e.isDirectory())      files.push(...await walk(full))
    else if (EXTS.has(extname(e.name).toLowerCase())) files.push(full)
  }
  return files
}

const files = await walk(ROOT)
let converted = 0

for (const file of files) {
  const out = file.replace(/\.(jpg|jpeg|png)$/i, '.webp')
  await sharp(file)
    .rotate()                                          // respeta orientación EXIF
    .resize({ width: MAX_W, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(out)

  const [orig, optim] = await Promise.all([stat(file), stat(out)])
  const saved = Math.round((1 - optim.size / orig.size) * 100)
  console.log(`✓ ${basename(out).padEnd(50)} ${(orig.size / 1024).toFixed(0).padStart(6)}KB → ${(optim.size / 1024).toFixed(0).padStart(5)}KB  (-${saved}%)`)
  converted++
}

console.log(`\n${converted} imágenes convertidas.`)
