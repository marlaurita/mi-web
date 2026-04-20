# marilau.tech

Sitio web personal de **marilau** — hub de mentoría, blog, comunidad y contacto.

## Stack

- React 18 + Vite 5
- React Router DOM 7
- CSS puro con variables (sin librería de UI externa)
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
├── main.jsx            # Entry point con LanguageProvider
├── App.jsx             # Router (Home + BlogPost + Links)
├── index.css           # Estilos globales y variables CSS
├── theme.js            # Tokens de diseño (colores, fuentes, radios)
├── content.js          # Exporta contenido en español por defecto
├── data/
│   └── community.js    # Actividades de comunidad (charlas, eventos, mentoría)
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── About/
│   ├── Mentoring/
│   ├── Blog/
│   ├── Community/
│   ├── Contact/
│   └── Footer/
├── pages/
│   ├── BlogPost/       # Página dinámica de posts (/:lang/blog/:slug)
│   └── Links/          # Página Linktree (/links)
└── i18n/
    ├── LanguageContext.jsx
    ├── es.js
    └── en.js
public/
├── community/
│   ├── events/         # Imágenes de eventos organizados
│   ├── talks/          # Imágenes de charlas
│   └── mentorship/     # Imágenes de sesiones de mentoría
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
- **Colores/marca:** `src/theme.js`
- **Links de /links:** array `LINKS` y `SOCIALS` en `src/pages/Links/Links.jsx`
- **Formulario de contacto:** conectar a Formspree o EmailJS en `Contact.jsx`

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
