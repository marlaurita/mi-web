// ============================================================
//  MARILAU.TECH — CONTENIDO EN ESPAÑOL
// ============================================================

export default {

  // --- META & NAV ---
  site: {
    name:    'marilau.tech',
    tagline: 'Tecnología con propósito',
  },

  nav: {
    links: [
      { label: 'Inicio',    href: 'hero' },
      { label: 'Sobre mí', href: 'about' },
      { label: 'Mentorías', href: 'mentoring' },
      { label: 'Blog',      href: 'blog' },
      { label: 'Comunidad', href: 'community' },
      { label: 'Contacto',  href: 'contact' },
    ],
    ctaLabel: 'Agendar sesión',
  },

  // --- HERO ---
  hero: {
    greeting:    'Hola, soy',
    highlight:   'María Laura',
    role:        'Ingeniera en Informática',
    description: 'Ayudo a personas y comunidades a crecer en tecnología a través de mentoría personalizada, contenido honesto y espacios de aprendizaje colectivo.',
    cta1:        'Ver mentorías',
    cta2:        'Conoce mi trabajo',
    badge:       '🚀 Disponible para mentorías',
  },

  // --- SOBRE MÍ ---
  about: {
    sectionLabel: 'Sobre mí',
    title:        'Construyo puentes entre las personas y la tecnología',
    paragraphs: [
      'Soy Ingeniera en Informática con pasión por la educación tecnológica y el desarrollo de comunidades. Creo firmemente que la tecnología debe ser accesible para todas las personas, sin importar su punto de partida.',
      'A lo largo de mi carrera he combinado el trabajo técnico con la docencia, la mentoría y la construcción de espacios seguros donde aprender, equivocarse y crecer.',
    ],
    stats: [
      { value: '5+',   label: 'Años de experiencia' },
      { value: '100+', label: 'Personas mentoreadas' },
      { value: '3+',   label: 'Comunidades activas' },
    ],
    skills: [
      'Desarrollo de Software',
      'Educación Tecnológica',
      'Liderazgo Comunitario',
      'Mentoría Técnica',
      'Comunicación Efectiva',
      'Pensamiento Sistémico',
    ],
    skillsLabel: 'Áreas de trabajo',
  },

  // --- MENTORÍAS ---
  mentoring: {
    sectionLabel: 'Mentorías',
    title:        'Acompañamiento para tu camino en tech',
    description:  'Sesiones personalizadas para que puedas crecer con claridad, foco y apoyo real — sin rodeos ni fórmulas genéricas.',
    popularBadge: 'Más popular',
    plans: [
      {
        name:        'Sesión única',
        price:       'Consultar',
        period:      '',
        description: 'Una sesión de 60 minutos para resolver una duda puntual, revisar tu CV, preparar una entrevista o trazar tu plan de carrera.',
        features: [
          '60 minutos 1:1',
          'Revisión de perfil / CV',
          'Orientación de carrera',
          'Grabación de sesión',
        ],
        cta:         'Solicitar sesión',
        highlighted: false,
      },
      {
        name:        'Mentoría mensual',
        price:       'Consultar',
        period:      '/ mes',
        description: 'Acompañamiento continuo con sesiones semanales, seguimiento de objetivos y acceso a recursos exclusivos.',
        features: [
          '4 sesiones de 60 min',
          'Seguimiento de metas',
          'Recursos y ejercicios',
          'Canal directo por escrito',
          'Revisiones de código / proyecto',
        ],
        cta:         'Quiero esta mentoría',
        highlighted: true,
      },
      {
        name:        'Bootcamp grupal',
        price:       'Consultar',
        period:      '',
        description: 'Programa intensivo en grupo pequeño (máx. 8 personas) con enfoque práctico y comunidad de pares.',
        features: [
          'Grupos reducidos (máx. 8)',
          'Proyecto práctico incluido',
          'Comunidad privada',
          'Certificado de participación',
        ],
        cta:         'Unirme al grupo',
        highlighted: false,
      },
    ],
    note:    '¿No sabes cuál elegir? Agenda una llamada gratuita de 15 minutos y lo vemos juntas.',
    noteCta: 'Llamada gratuita →',
  },

  // --- BLOG ---
  blog: {
    sectionLabel: 'Blog',
    title:        'Ideas, aprendizajes y reflexiones',
    description:  'Escribo sobre tecnología, carrera, comunidad y todo lo que va en medio. Sin filtros.',
    posts: [
      {
        tagKey:   'mentoring',
        tag:      'Mentoría',
        date:     'Abril 2026',
        slug:     'habilidad-infravalorada-dar-recibir-mentoria',
        title:    'La habilidad más infravalorada del mundo profesional: dar y recibir mentoría',
        excerpt:  'Lejos de tener la verdad absoluta, he sido mentora y mentee durante años y te comparto las maravillas de ésta infravalorada capacidad de dar y recibir mentorías.',
        readTime: '4 min',
        content: [
          { type: 'h2', text: 'Como mentee' },

          { type: 'h3', text: '¿Cómo sé que necesito un mentor o mentora?' },
          { type: 'paragraph', text: 'Mucha Inteligencia Artificial y todo lo que quieras, pero es justo aceptar que no todos somos capaces de seguir fervientemente el camino del autoaprendizaje o de vez en cuando es super válido buscar una ayuda extra, sobretodo cuando no se tiene una idea clara de como podría verse el futuro con cierta habilidad.' },
          { type: 'paragraph', text: 'Una persona mentora:' },
          { type: 'list', items: [
            'Va a entender tu contexto actual y a donde quieres ir, también puede sugerir la meta en caso de que no esté tan clara.',
            'Podrá crear una ruta de aprendizaje y pasos a seguir para lograr un objetivo en un periodo de tiempo determinado.',
            'Te acompañará con recursos y experiencia para que sientas que tu camino no es tan solitario como pudiste haber pensado.',
            'Hará seguimiento constante para entender si se están cumpliendo tus expectativas con las sesiones de mentoría.',
          ]},
          { type: 'paragraph', text: 'Se lee genial ¿verdad? Si 2 o más de estos puntos hacen sentido para ti, un mentor puede ayudarte a encaminar tu aprendizaje de una habilidad.' },

          { type: 'h3', text: '¿Cómo aprovechar al máximo tu mentor?' },
          { type: 'paragraph', text: 'De entrada necesitas el compromiso, considerando que se está utilizando tiempo valioso tanto tuyo como de tu mentor o mentora, no conectar lo suficiente con el proceso puede terminar en sentimientos como frustración e impaciencia.' },
          { type: 'paragraph', text: 'En la primera sesión aparte de conocerse, es importante el establecimiento de expectativas de ambas partes, preguntas como: ¿En qué necesito ayuda? ¿cómo puede esta persona ayudarme? ¿cómo será la metodología de trabajo? ¿cuantas horas a la semana serán dedicadas tanto de forma síncrona como asíncrona? ¿Costo de las sesiones? ¿cuáles herramientas son necesarias? ¿Por cuanto tiempo colaboraremos en estas sesiones (es importante tener una fecha de fin)? deberían quedar respondidas o al menos encaminadas para tener una respuesta.' },
          { type: 'paragraph', text: 'Es probable que las siguientes sesiones consistan en descubrir el ritmo de trabajo adecuado para ambos, donde se pueda maximizar tu aprendizaje.' },
          { type: 'paragraph', text: 'Es importante que des feedback a tu mentor, para que él/ella puedan entender si está siendo valioso para ti la jornada de aprendizaje, o si hay cosas que deben revisar para optimizarse.' },

          { type: 'h3', text: '¿Donde se consigue un mentor?' },
          { type: 'paragraph', text: 'Dependiendo de la habilidad que deseas aprender, se puede empezar buscando en internet, comunidades existentes, o eventos que ocurran al menos dentro de tu ciudad donde puedes conectar personas con tus mismos intereses, haciendo networking seguro que alguien conocerá un mentor.' },

          { type: 'h2', text: 'Como mentor' },

          { type: 'h3', text: '¿Cómo saber si sería un buen mentor?' },
          { type: 'paragraph', text: 'Si enseñar es algo que te gusta, ves el valor de compartir conocimiento y ayudar a otras personas, sin duda es una experiencia que vale la pena vivir, hay organizaciones, como Laboratoria.la, que constantemente buscan mentoras por ejemplo para ayudar a mujeres a prepararse para entrevistas en el mercado laboral en el mundo de la tecnología.' },
          { type: 'paragraph', text: 'Requiere preparación de las sesiones, para entregar un servicio de calidad al mentee. Por eso la importancia de conocer a la persona, conocer sus expectativas, y realmente validar si podemos ayudar con su crecimiento y aprendizaje.' },
          { type: 'paragraph', text: 'Es probable que tus primeras sesiones deban ser gratis para practicar tus habilidades, y para ampliar tu red de contactos.' },

          { type: 'paragraph', text: 'Espero que desde cual sea de los 2 roles, sea algo que te motives a probar, y por favor cuéntame cómo ha sido tu experiencia con esta infravalorada habilidad.' },
        ],
      },
      
    ],
    ctaLabel:    'Ver todos los artículos',
    readArticle: 'Leer artículo →',
    readTime:    'de lectura',
    backLabel:   'Volver al blog',
    comingSoon:  'Artículo completo próximamente...',
    shareLabel:  '¡Comparte si te fue útil!',
  },

  // --- COMUNIDAD ---
  community: {
    sectionLabel: 'Comunidad',
    title:        'Construyendo tech en colectivo',
    description:  'Creo en los espacios donde las personas se apoyan mutuamente. Estos son algunos de los proyectos comunitarios en los que participo y lidero.',
    items: [
      {
        icon:        '🌐',
        name:        'Comunidad marilau.tech',
        role:        'Fundadora',
        description: 'Espacio digital para personas en tech que quieren aprender, conectar y crecer sin competencia tóxica.',
        link:        '#',
        linkLabel:   'Unirme',
      },
      {
        icon:        '👩‍💻',
        name:        'Women in Tech Latam',
        role:        'Colaboradora',
        description: 'Red de mujeres y disidencias en tecnología a lo largo de Latinoamérica. Charlas, recursos y mentorías.',
        link:        '#',
        linkLabel:   'Conocer más',
      },
      {
        icon:        '🎙️',
        name:        'Talks & Eventos',
        role:        'Speaker',
        description: 'Doy charlas sobre carrera, educación tecnológica y comunidad en eventos presenciales y virtuales.',
        link:        '#',
        linkLabel:   'Ver charlas',
      },
    ],
  },

  // --- CONTACTO ---
  contact: {
    sectionLabel: 'Contacto',
    title:        'Hablemos',
    description:  'Ya sea para una mentoría, una colaboración, una charla o simplemente conectar — escríbeme, con gusto respondo.',
    emailLabel:   'Email',
    socialLabel:  'Redes sociales',
    form: {
      nameLabel:          'Nombre',
      emailLabel:         'Email',
      subjectLabel:       'Asunto',
      messageLabel:       'Mensaje',
      namePlaceholder:    'Tu nombre',
      emailPlaceholder:   'tu@email.com',
      subjectPlaceholder: '¿En qué te puedo ayudar?',
      messagePlaceholder: 'Cuéntame un poco sobre ti y lo que buscas...',
      submitLabel:        'Enviar mensaje',
    },
    success: {
      title: '¡Mensaje enviado!',
      text:  'Te responderé pronto. ¡Gracias por escribirme!',
    },
    social: [
      { name: 'LinkedIn',  href: '#', icon: 'linkedin' },
      { name: 'GitHub',    href: '#', icon: 'github' },
      { name: 'Twitter/X', href: '#', icon: 'twitter' },
      { name: 'Instagram', href: '#', icon: 'instagram' },
    ],
    email:        'hola@marilau.tech',
    availability: 'Respondo en menos de 48 horas hábiles.',
  },

  // --- FOOTER ---
  footer: {
    tagline:           'Tecnología con propósito.',
    availabilityLabel: 'Disponible para mentorías',
    copyright:         '© 2026 marilau.tech — Hecho con 💙 y mucho té.',
    navTitle:          'Navegación',
    legalTitle:        'Legal',
    links: [
      { label: 'Política de privacidad', href: '#' },
      { label: 'Términos de uso',        href: '#' },
    ],
  },
}
