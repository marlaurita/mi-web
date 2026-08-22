# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev              # dev server en http://localhost:5173
npm run build            # build + postbuild (genera OG pages por post)
npm run preview          # sirve el dist localmente
npm run deploy           # build + push a gh-pages (requiere permisos)
npm run optimize-images  # convierte public/community/**/*.{jpg,png} a WebP
```

No hay linter configurado ni suite de tests. El deploy a producción se hace automáticamente vía GitHub Actions al hacer push a `main`.

## Arquitectura

### Contenido e i18n

Todo el texto del sitio vive en `src/i18n/es.js` y `src/i18n/en.js` como un objeto default exportado. `LanguageContext` provee `{ lang, toggleLang, content }` a todo el árbol — los componentes consumen `content.sectionName` directamente. Para agregar o editar texto, solo se tocan esos dos archivos.

Los posts del blog viven dentro del mismo objeto i18n, en `content.blog.posts`. Cada post tiene un `slug` idéntico en ambos idiomas. El `postbuild` script (`scripts/generate-og-pages.js`) itera esos arrays y genera `dist/{lang}/blog/{slug}/index.html` con los meta OG correctos para cada post.

### Tema (dark/light)

`ThemeContext` (`src/theme/ThemeContext.jsx`) gestiona el tema. Persiste en `localStorage` como `ml-theme`. Aplica `data-theme="dark|light"` en `<html>`. Un script inline en `index.html` lo aplica antes de que React renderice para evitar flash.

Las variables CSS en `src/index.css` siguen este patrón:

```css
:root { /* dark — valores por defecto */ }
[data-theme="light"] { /* overrides */ }
```

**Convención crítica:** nunca hardcodear `rgba(102, 230, 221, X)`. Usar siempre `rgba(var(--accent-rgb), X)`. `--accent-rgb` vale `102, 230, 221` en dark y `26, 31, 66` en light, lo que cambia globalmente el color de acento entre modos.

`--color-cyan` en light mode vale `#1A1F42` (navy) — no es el turquesa de marca. Los componentes que necesitan el turquesa real en light mode (como el card featured de Mentoring) lo hardcodean como `#66e6dd`.

### Tokens de diseño

`src/theme.js` exporta `colors` y `lightColors` como referencia documental. Las variables CSS de `:root` en `index.css` son la fuente de verdad en runtime — `theme.js` no se inyecta dinámicamente.

### Routing

SPA con React Router DOM 7. GitHub Pages no soporta rutas client-side, así que `public/404.html` redirige al index codificando la ruta como query param, y un script inline en `index.html` la decodifica antes de que el router arranque.

### Accesibilidad

El sitio cumple WCAG 2.1 AA en ambos modos. Para verificar:

```bash
# con el dev server corriendo
npx @axe-core/cli http://localhost:5173

# para escanear en light mode, forzar temporalmente en index.html:
# var t = 'light'; // revertir después
```

### Agregar posts al blog

1. Agregar el objeto post al inicio de `blog.posts` en `src/i18n/es.js`
2. Agregar la traducción al inicio de `blog.posts` en `src/i18n/en.js` (mismo `slug` y `tagKey`)
3. El campo `content` es un array de bloques `{ type: 'h2'|'h3'|'paragraph'|'list', text, items }`. Si está vacío, la card no es clickeable.

### Agregar actividades de comunidad

Los arrays `talks`, `events` y `mentorship` están en `src/data/community.js`, ordenados de más reciente a más antiguo. La paginación (6 items/tab) se activa automáticamente. Después de agregar imágenes en `public/community/`, correr `npm run optimize-images` para generar los `.webp`.
