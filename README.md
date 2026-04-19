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
