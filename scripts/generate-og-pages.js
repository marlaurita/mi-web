// ============================================================
//  generate-og-pages.js
//  Genera dist/{lang}/blog/{slug}/index.html por cada post
//  con los OG/Twitter Card meta tags correctos para que
//  LinkedIn y otras redes lean el contenido sin ejecutar JS.
//  Se ejecuta automáticamente como postbuild.
// ============================================================

import { readFileSync, mkdirSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT    = join(__dirname, '..')
const DIST    = join(ROOT, 'dist')
const SITE    = 'https://marilau.tech'
const OG_IMG  = `${SITE}/og-image.png`

const esContent = (await import('../src/i18n/es.js')).default
const enContent = (await import('../src/i18n/en.js')).default

// Extraer rutas de assets del index.html ya construido
const indexHtml = readFileSync(join(DIST, 'index.html'), 'utf-8')
const jsAsset  = indexHtml.match(/src="(\/assets\/index-[^"]+\.js)"/)?.[1]  ?? ''
const cssAsset = indexHtml.match(/href="(\/assets\/index-[^"]+\.css)"/)?.[1] ?? ''

function escape(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function html({ lang, locale, post }) {
  const url   = `${SITE}/${lang}/blog/${post.slug}`
  const title = `${post.title} — marilau.tech`
  const desc  = post.excerpt

  return `<!doctype html>
<html lang="${lang}">
  <head>
    <meta charset="UTF-8" />
    <script>
      (function () {
        var s = window.location.search;
        if (s.slice(1, 2) === '/') {
          var d = s.slice(1).split('&').map(function(p){ return p.replace(/~and~/g,'&'); });
          history.replaceState(null, null, d[0] + (d[1] ? '?' + d[1] : '') + window.location.hash);
        }
      })();
    </script>
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${escape(desc)}" />
    <meta name="theme-color" content="#1F244A" />

    <!-- Open Graph -->
    <meta property="og:type"        content="article" />
    <meta property="og:url"         content="${escape(url)}" />
    <meta property="og:title"       content="${escape(title)}" />
    <meta property="og:description" content="${escape(desc)}" />
    <meta property="og:image"       content="${OG_IMG}" />
    <meta property="og:image:width"  content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:locale"      content="${locale}" />

    <!-- Twitter Card -->
    <meta name="twitter:card"        content="summary_large_image" />
    <meta name="twitter:url"         content="${escape(url)}" />
    <meta name="twitter:title"       content="${escape(title)}" />
    <meta name="twitter:description" content="${escape(desc)}" />
    <meta name="twitter:image"       content="${OG_IMG}" />

    <title>${escape(title)}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
    <script type="module" crossorigin src="${jsAsset}"></script>
    <link rel="stylesheet" crossorigin href="${cssAsset}">
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`
}

const langs = [
  { lang: 'es', locale: 'es_CL', content: esContent },
  { lang: 'en', locale: 'en_US', content: enContent },
]

let count = 0
for (const { lang, locale, content } of langs) {
  for (const post of content.blog.posts) {
    const dir = join(DIST, lang, 'blog', post.slug)
    mkdirSync(dir, { recursive: true })
    writeFileSync(join(dir, 'index.html'), html({ lang, locale, post }))
    console.log(`  ✓  /${lang}/blog/${post.slug}/`)
    count++
  }
}

console.log(`\nOG pages generadas: ${count}`)
