// ============================================================
//  MARILAU.TECH — THEME CONFIGURATION
//  Edita este archivo para personalizar todos los colores del sitio.
// ============================================================

export const colors = {
  // Colores base de la marca
  navy:    '#1F244A',   // Fondo principal (dark navy)
  ocean:   '#184F67',   // Fondo secundario / cards
  cyan:    '#66e6dd',   // Acento principal (turquesa)
  purple:  '#9a618d',   // Acento secundario (malva)
  gold:    '#F0B810',   // Highlight / CTA

  // Texto
  textPrimary:   '#F0F4FF',   // Blanco suave
  textSecondary: '#A8B4CC',   // Gris azulado
  textMuted:     '#5E6B82',   // Texto discreto

  // Fondos adicionales
  bgCard:        'rgba(24, 79, 103, 0.35)',   // Card con opacidad
  bgCardHover:   'rgba(24, 79, 103, 0.60)',
  bgOverlay:     'rgba(31, 36, 74, 0.85)',    // Overlay oscuro
  bgGlass:       'rgba(31, 36, 74, 0.50)',    // Glassmorphism

  // Bordes
  borderSubtle:  'rgba(102, 230, 221, 0.12)',
  borderAccent:  'rgba(102, 230, 221, 0.40)',
}

// Variables CSS generadas a partir de los colores — NO editar manualmente
export const cssVariables = Object.entries(colors).reduce((acc, [key, val]) => {
  acc[`--color-${key}`] = val
  return acc
}, {})

// Tipografía
export const fonts = {
  heading: "'Space Grotesk', sans-serif",
  body:    "'Inter', sans-serif",
}

// Espaciado / radios globales
export const radius = {
  sm: '6px',
  md: '12px',
  lg: '20px',
  xl: '32px',
}
