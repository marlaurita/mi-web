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
      { label: 'Servicios', href: 'mentoring' },
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
    description: 'Construyo y mejoro productos tech con foco en calidad, experiencia y decisiones claras. Trabajo con personas, equipos y proyectos que necesitan destrabar problemas, mejorar su producto o crecer con claridad en tecnología.',
    cta1:        'Trabajemos juntos',
    cta2:        'Conoce mi trabajo',
    badge:       '🚀 Disponible para mentorías',
  },

  // --- SOBRE MÍ ---
  about: {
    sectionLabel: 'Sobre mí',
    title:        'Construyo puentes entre las personas y la tecnología',
    paragraphs: [
      'Soy Ingeniera en Informática especializada en desarrollo mobile front-end, con experiencia en liderazgo técnico y diseño centrado en el usuario.',
      'A lo largo de mi carrera he combinado el trabajo técnico con la mentoría, la docencia y la construcción de comunidades, creando espacios donde aprender, equivocarse y crecer.',
      'Me interesa especialmente cómo mejorar la comunicación entre desarrollo, diseño y producto para construir soluciones más coherentes, eficientes y humanas.',
      'Además de mentorías, trabajo como consultora apoyando equipos y proyectos en la construcción y mejora de productos digitales, especialmente en el desarrollo mobile.'
    ],
    stats: [
      { value: '12+',   label: 'Años de experiencia' },
      { value: '20+', label: 'Productos desarrollados' },
      { value: '40+',   label: 'Personas mentoreadas' },
    ],
    skills: [
      'Desarrollo de Software',
      'Educación Tecnológica',
      'Liderazgo Técnico',
      'Crecimiento Profesional',
      'Comunicación Efectiva',
      'Inteligencia Artificial',
      'Mobile Apps'
    ],
    skillsLabel: 'Áreas de trabajo',
  },

  // --- MENTORÍAS ---
  mentoring: {
    sectionLabel: 'Trabajemos juntos',
    title:        'Acompañamiento para tu camino en tech',
    description:  'Dependiendo de lo que necesites, puedo acompañarte desde lo técnico, lo estratégico o lo formativo.',
    popularBadge: 'Más popular',
    plans: [
      {
        name:        'Mentorías',
        price:       'Consultar',
        period:      '',
        description: 'Acompañamiento 1:1 para desarrolladores que quieren crecer en creación de software, mejorar su criterio técnico y avanzar con más claridad en su carrera.',
        features: [
          'Primera sesión gratis',
          'Desarrollo (bases y buenas prácticas)',
          'Revisión de código y proyectos',
          'Preparación laboral (CV, entrevistas, roadmap)',
          'Toma de decisiones técnicas',
        ],
        cta:         'Quiero esta mentoría',
        highlighted: true,
      },
      {
        name:        'Consultoría técnica',
        price:       'Consultar',
        period:      '/ mes',
        description: 'Ayudo a equipos y productos a destrabar problemas, mejorar la calidad del desarrollo y tomar decisiones técnicas con mayor claridad.',
        features: [
          'Auditoría de apps',
          'Mejora de performance',
          'Revisión de arquitectura frontend',
          'Alineación entre diseño y desarrollo',
          'Definición de buenas prácticas',
          'Adopción de Inteligencia Artificial'
        ],
        cta:         'Solicitar sesión',
        highlighted: false,
      },
      {
        name:        'Proyectos Pequeños',
        price:       'Consultar',
        period:      '',
        description: 'Colaboro en proyectos acotados donde se necesita experiencia en desarrollo mobile y foco en experiencia de usuario.',
        features: [
          'Desarrollo de features específicos',
          'Prototipos funcionales',
          'Mejora de experiencia en apps existentes'
        ],
        cta:         'Conversemos',
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
        tagKey:   'softskills',
        tag:      'Softskills',
        date:     'Mayo 2026',
        slug:     'ego-del-desarrollador',
        title:    'Ego del desarrollador y por qué regularlo te hará mejor profesional',
        excerpt:  'Tu código puede ser impecable, pero si tu ego no está regulado puede costarte empleos, discusiones y oportunidades. Te cuento cómo reconocerlo y qué hacer.',
        readTime: '5 min',
        content: [
          { type: 'paragraph', text: 'El ego, del latín "yo", es la estructura psicológica que organiza nuestra autopercepción, conciencia e identidad. Actúa como mediador entre los instintos y la moral, ayudándonos a interpretar la realidad. Aunque necesario para la autoestima, un ego desmedido puede distorsionar la realidad y generar comportamientos defensivos.' },
          { type: 'paragraph', text: 'Visto desde el lado del desarrollo de software o para la construcción de una carrera profesional es vital entender los procesos que debemos dominar para hacernos llamar expertos en un tema, sin embargo cuando aparte de la expertiz empezamos a menospreciar las demás áreas externas a nuestra profesión, caemos en un error común: creer que esas áreas no son importantes, porque solo lo que hacemos es lo que cuenta y lo que importa.' },
          { type: 'paragraph', text: 'No te juzgo, a mí me pasó, me costó empleos, me costó discusiones, poca apertura evidenciada de muchas maneras por parte de mi persona, y solo los años de experiencia me hicieron ver que mi ignorancia no solo era atrevida sino que además era escandalosa. Tampoco me culparía (ni te culparía), puesto que las mallas curriculares de la universidad muchas veces no cubren estos temas que son más de gestión, y si los cubren es probable que como adolescentes tengamos más hambre de conocimientos técnicos que de entender cómo funciona el ciclo completo del desarrollo de un producto.' },
          { type: 'paragraph', text: 'Saliendo de ti y de mí, muchos de los productos que no ven la luz del éxito es porque probablemente hubo una persona en un rol muy técnico que usó su bala de plata sin considerar el panorama completo.' },

          { type: 'h2', text: '¿Tienes el ego regulado? Responde estas preguntas' },
          { type: 'paragraph', text: 'Para reconocer este patrón de ego desmedido — o confirmar que ya está controlado — te invito a responder:' },
          { type: 'list', items: [
            '¿Tus status en la daily son muy técnicos?',
            '¿No entiendes por qué las métricas del equipo son importantes y por qué deben mejorarse, como velocidad, rendimiento, métricas DORA?',
            '¿No entiendes por qué hay que hablar de KPI\'s, OKR\'s, ROI, entre otros?',
            '¿Las ceremonias como refinamientos, retrospectivas, PRE Planning, PI planning y todas aquellas conversaciones que no consisten en revisar temas técnicos te dan mucha flojera?',
            '¿No ves todo el panorama y ojalá solo enfocarte en una tarea a la vez?',
            '¿No entiendes por qué las personas de otros roles a veces quieren entender temas técnicos ni por qué es importante que entiendan?',
          ]},
          { type: 'paragraph', text: 'Si te identificas con 3 o más, puede ser una señal interesante para explorar, y puede que hasta descubras nuevos campos donde te gustaría expandir tu conocimiento. ¡Valioso!, sobretodo ahora en vista de que gracias a la IA, los perfiles generalistas adquieren mucha importancia y valor en la industria.' },

          { type: 'h2', text: 'Consejos útiles, tanto si tu ego es "desmedido" como si eres un alma curiosa' },

          { type: 'h3', text: 'Ten sesiones recurrentes con tu equipo' },
          { type: 'paragraph', text: 'Ten sesiones recurrentes con todos los miembros de tu equipo, al menos media hora al mes. Aunque no haya nada de que hablar, fortalece una relación más allá de lo técnico: conoce cómo es un día a día de esa persona, sus procesos y cómo desde tu rol podrías ayudar a agilizar sus tareas.' },

          { type: 'h3', text: 'Entiende las métricas y su impacto en el negocio' },
          { type: 'paragraph', text: 'De las métricas vienen: cantidad de usuarios felices con el producto o servicio, cantidad de usuarios nuevos, el ingreso que justifica nuestro sueldo, y en noticias no tan buenas también vienen cantidad de reclamos o de descontento con la experiencia que se ofrece.' },

          { type: 'h3', text: 'Conoce a tus usuarios' },
          { type: 'paragraph', text: 'Las personas técnicas somos un usuario más, es correcto, pero no somos los usuarios con la última palabra ni con la palabra de más peso. Es importante explorar afuera las necesidades reales de las personas. Algo que tú crees que funciona, afuera puede resultar de las cosas que menos le interesa a los usuarios para su día a día, y por ende puede que se vean afectadas las métricas de las que hablamos más arriba.' },

          { type: 'h3', text: 'Ceremonias = oportunidad de aprendizaje y contexto' },
          { type: 'paragraph', text: 'Aunque no necesariamente aportes directamente, aprender a filtrar dónde puedes obtener conocimiento será de mucha ayuda para tu entendimiento del negocio. En las ceremonias relacionadas al equipo siempre será importante tu feedback, por lo que no debería ser negociable tu asistencia.' },

          { type: 'h3', text: 'Normalicemos hablar de expectativas' },
          { type: 'paragraph', text: 'Si tu interés es un crecimiento profesional, puedes encontrar una ruta de aprendizaje en las expectativas de las otras personas hacia tu rol o hacia tu persona. Además también puedes entender qué quieren escuchar de ti esas personas a la hora de dar un status; por ejemplo: hablar de si tienes algún riesgo, bloqueo o dependencia con un área externa a tu equipo, en lugar de hablar de "una confusión en formato de logs".' },

          { type: 'h3', text: 'Invierte en tu educación' },
          { type: 'paragraph', text: 'Sobretodo en temas que te interesen. Gratis puedes encontrar eventos de comunidades, perfiles en redes sociales que hablen de temas donde tengas interés, incluso workshops o webinars. Si quieres invertir un poco más, puedes encontrar recursos como educación en línea, libros, o algo más académico ofrecido por alguna universidad como diplomado o maestría.' },

          { type: 'h3', text: 'Mira fuera de la caja' },
          { type: 'paragraph', text: 'A veces una solución que solo estás implementando para tu equipo puede funcionar para toda la organización, y solo tú podrías darte cuenta de ese impacto. La invitación es a mirar los problemas transversales y siempre pensar en ellos a la hora de generar una solución técnica.' },

          { type: 'paragraph', text: 'Lo importante no es juzgar un sistema ni a ti mismo: es tener un reconocimiento de la situación y querer hacer algo al respecto, donde el mayor beneficio será para ti mismo/a y para el entorno donde trabajas. Más veces de las que imaginas, actitud > aptitud.' },
          { type: 'paragraph', text: '¿Has aplicado alguno de estos consejos en lo que va de año? ¿Agregarías alguno propio? ¿De qué temas te gustaría que siga publicando?' },
        ],
      },
      {
        tagKey:   'mentoring',
        tag:      'Softskills',
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
    sectionLabel:   'Comunidad',
    title:          'Construyendo tech en colectivo',
    description:    'Como embajadora WTM he dado charlas, organizado eventos y mentoreado a personas en distintas etapas de su carrera tech. Aquí está el registro.',
    tabTalks:       'Charlas',
    tabEvents:      'Eventos',
    tabMentorship:  'Mentoría',
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
      { name: 'LinkedIn',  href: 'https://www.linkedin.com/in/marilautech/', icon: 'linkedin' },
      { name: 'GitHub',    href: 'https://github.com/marlaurita/', icon: 'github' },
      { name: 'Instagram', href: 'https://www.instagram.com/marilau.tech', icon: 'instagram' },
    ],
    email:        'marilau.codes@gmail.com',
    availability: 'Respondo en menos de 48 horas hábiles.',
  },

  // --- FOOTER ---
  footer: {
    tagline:           'Tecnología con propósito.',
    availabilityLabel: 'Disponible para mentorías',
    copyright:         '© 2026 marilau.tech — Hecho con 💙, vibe coding y mucho té.',
    navTitle:          'Navegación',
    legalTitle:        'Legal',
    links: [
      { label: 'Política de privacidad', href: '#' },
      { label: 'Términos de uso',        href: '#' },
    ],
  },
}
