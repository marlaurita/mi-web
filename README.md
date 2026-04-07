# marilau.tech

Sitio web personal de **marilau** — hub de mentoría, blog, comunidad y contacto.

## Stack

- React 18 + Vite 5
- CSS inline / sin librería de UI externa
- Fuentes: Space Grotesk + Inter (Google Fonts)

## Estructura

```
src/
├── content.js      # Todo el texto del sitio
├── theme.js        # Colores y tokens de diseño
├── components/     # Secciones: Hero, About, Mentoring, Blog, Community, Contact
└── i18n/           # Traducciones
```

## Desarrollo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Personalización

- **Texto:** editar `src/content.js`
- **Colores/marca:** editar `src/theme.js`
- **Logo:** reemplazar placeholder en `Hero.jsx` con imagen real
- **Formulario de contacto:** conectar a Formspree o EmailJS en el componente Contact
- **Links sociales:** actualizar URLs en `src/content.js` (actualmente apuntan a `#`)
