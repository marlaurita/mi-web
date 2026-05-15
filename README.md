# marilau.tech

Sitio web personal de **marilau** — hub de mentoría, blog, comunidad y contacto.

## Stack

- React 18 + Vite 5
- React Router DOM 7
- CSS puro con variables (sin librería de UI externa)
- Lucide React (íconos)
- Fuentes: Space Grotesk + Inter (Google Fonts)
- Deploy: GitHub Pages via GitHub Actions

## Rutas

| Ruta | Descripción |
|------|-------------|
| `/` | Landing principal (Hero, About, Mentoring, Blog, Community, Contact) |
| `/:lang/blog/:slug` | Post individual de blog (ej: `/es/blog/mi-post`, `/en/blog/my-post`) |
| `/blog/:slug` | Redirect al post con el idioma activo |
| `/links` | Página estilo Linktree con links y redes sociales |

## Estructura

```
src/
├── main.jsx            # Entry point con ThemeProvider + LanguageProvider
├── App.jsx             # Router (Home + BlogPost + Links)
├── index.css           # Estilos globales, variables CSS dark/light mode
├── theme.js            # Tokens de diseño (colors, lightColors, fuentes, radios)
├── theme/
│   └── ThemeContext.jsx  # Contexto de dark/light mode con persistencia en localStorage
├── i18n/
│   ├── LanguageContext.jsx
│   ├── es.js
│   └── en.js
├── data/
│   └── community.js    # Actividades de comunidad (charlas, eventos, mentoría)
├── components/
│   ├── Navbar/         # Incluye toggle sol/luna y toggle de idioma
│   ├── Hero/
│   ├── About/
│   ├── Mentoring/
│   ├── Blog/
│   ├── Community/
│   ├── Contact/
│   └── Footer/
└── pages/
    ├── BlogPost/       # Página dinámica de posts (/:lang/blog/:slug)
    └── Links/          # Página estilo Linktree (/links)
scripts/
└── optimize-images.js  # Convierte imágenes de public/community/ a WebP
public/
├── community/
│   ├── events/         # Imágenes de eventos organizados (.jpg/.png + .webp)
│   ├── talks/          # Imágenes de charlas (.jpg/.png + .webp)
│   └── mentorship/     # Imágenes de sesiones de mentoría (.jpg/.png + .webp)
├── 404.html            # Redirect para SPA routing en GitHub Pages
├── CNAME               # Dominio personalizado (marilau.tech)
└── profile.png
```

## Desarrollo

```bash
npm install
npm run dev
```

## Build y deploy

El deploy se ejecuta automáticamente al hacer push a `main` vía GitHub Actions.

```bash
npm run build   # build local
```

## Personalización

- **Texto del sitio:** `src/i18n/es.js` (español) / `src/i18n/en.js` (inglés)
- **Colores/marca:** `src/theme.js` — editar `colors` para dark mode y `lightColors` para light mode
- **Links de /links:** arrays `LINKS` y `SOCIALS` en `src/pages/Links/Links.jsx`
- **Formulario de contacto:** conectar a Formspree o EmailJS en `Contact.jsx`

## Dark / Light mode

El sitio incluye un toggle sol/luna en la barra de navegación. El tema se persiste en `localStorage` bajo la clave `ml-theme` (`'dark'` | `'light'`). El valor se aplica como atributo `data-theme` en `<html>` antes de que React renderice (script inline en `index.html`) para evitar flash de tema incorrecto.

Las variables CSS del tema viven en `src/index.css`:

```css
:root { /* dark mode — valores por defecto */ }
[data-theme="light"] { /* overrides para light mode */ }
```

Todos los valores `rgba` de acento usan `rgba(var(--accent-rgb), X)` en lugar de colores hardcodeados, lo que permite cambiar el color de acento globalmente modificando solo `--accent-rgb` en cada bloque de tema.

## Accesibilidad

El sitio cumple **WCAG 2.1 AA** en dark mode y light mode, verificado con axe-core:

- Todos los labels de formulario están asociados a sus inputs via `htmlFor`/`id`
- Botones con solo íconos tienen `aria-label`
- El menú hamburger tiene `aria-expanded` dinámico
- Jerarquía de headings correcta (h1 → h2 → h3)
- `:focus-visible` definido globalmente con el color de acento
- `lang="es"` en `<html>`

Para correr una auditoría de accesibilidad local:

```bash
npx @axe-core/cli http://localhost:5173
```

## Agregar actividades de comunidad

Las actividades de la sección Community viven en `src/data/community.js`. Hay tres arrays: `talks`, `events` y `mentorship`. Para agregar una nueva, añade un objeto al array correspondiente:

```js
{
  id: 'id-unico',
  image: '/community/talks/nombre-imagen.jpg',  // en public/community/
  date: 'YYYY-MM-DD',
  attendees: 100,   // opcional según categoría
  hours: 3,         // solo en mentorship
  es: {
    title: 'Título en español',
    description: 'Descripción en español.',
    linkLabel: 'Ver más',   // null si no hay link
  },
  en: {
    title: 'Title in English',
    description: 'Description in English.',
    linkLabel: 'See more',
  },
  link: 'https://...',  // null si no hay link
}
```

Las imágenes se alojan en `public/community/{events|talks|mentorship}/`. La paginación (6 items por página) se activa automáticamente cuando hay más de 6 items en un tab. Los arrays están ordenados de más reciente a más antiguo.

Después de agregar imágenes nuevas, correr:

```bash
npm run optimize-images
```

Esto genera versiones `.webp` junto a cada original (900px max, quality 85). El componente sirve WebP automáticamente con fallback al original para navegadores que no lo soporten.
