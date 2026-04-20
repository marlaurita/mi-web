// ============================================================
//  COMMUNITY DATA — marilau.tech
//  Actividades como mentora, speaker y organizadora.
//  Para agregar una nueva actividad, añade un objeto al array
//  correspondiente (talks, events, mentorship) siguiendo la
//  misma estructura.
// ============================================================

// --- TALKS (Charlas) ---
// Ordenadas de más reciente a más antigua.
export const talks = [
  {
    id: 'liderazgo-tecnico',
    image: '/community/talks/liderazgo-tecnico.jpg',
    date: '2025-11-29',
    attendees: 100,
    type: 'in-person',
    es: {
      title: 'Liderazgo técnico: ¿Pasión o presión?',
      description:
        'Explora la dualidad del liderazgo técnico: herramientas y perspectivas para decidir si es el rol correcto para ti.',
      linkLabel: null,
    },
    en: {
      title: 'Technical Leadership: Passion or Pressure?',
      description:
        'Exploring the duality of technical leadership — tools and perspectives for making an informed decision about whether it\'s the right role for you.',
      linkLabel: null,
    },
    link: null,
  },
  {
    id: 'feature-toggles',
    image: '/community/talks/feature-toggles.jpg',
    date: '2025-10-04',
    attendees: 30,
    type: 'in-person',
    es: {
      title: 'Feature Toggles 101: Controla tus releases',
      description:
        'Cómo usar Firebase Remote Config para releases seguros, iteraciones y rollbacks con ejemplos prácticos para equipos mobile y web.',
      linkLabel: 'Ver evento',
    },
    en: {
      title: 'Feature Toggles 101: Control Your Releases',
      description:
        'How to use Firebase Remote Config for safe feature releases, iteration, and rollbacks — with practical examples for mobile/web teams.',
      linkLabel: 'View event',
    },
    link: 'https://luma.com/y5g70b70?tk=WK6knc',
  },
  {
    id: 'roadmap-caos',
    image: '/community/talks/roadmap-caos.jpg',
    date: '2025-09-26',
    attendees: 2000,
    type: 'in-person',
    es: {
      title: 'Roadmap-tizando el caos: desbloqueando la conversación que todos evitan',
      description:
        'Cómo alinear equipos técnicos, de diseño y producto alrededor de un roadmap sin procesos pesados, transformando la evasión en co-creación.',
      linkLabel: 'Ver en Nerdear.la',
    },
    en: {
      title: 'Roadmapifying Chaos: Unlocking the Conversation Everyone Avoids',
      description:
        'How to align technical, design, and product teams around a roadmap without heavy processes — transforming avoidance into co-creation.',
      linkLabel: 'View at Nerdear.la',
    },
    link: 'https://nerdear.la/agenda/roadmap-tizando-el-caos-desbloqueando-la-conversacion-que-todos-evitan/',
  },
  {
    id: 'its-not-fake',
    image: '/community/talks/its-not-fake.jpg',
    date: '2025-08-29',
    attendees: 30,
    type: 'in-person',
    es: {
      title: "It's not fake, soy buena en esto y lo sé",
      description:
        'Más allá del síndrome del impostor: cómo pasar del modo supervivencia a un liderazgo auténtico y seguro que empodere a los equipos.',
      linkLabel: 'Ver cobertura',
    },
    en: {
      title: "It's Not Fake, I'm Good at This and I Know It",
      description:
        'Beyond imposter syndrome — how to move from survival mode to authentic, confident leadership that empowers teams.',
      linkLabel: 'See coverage',
    },
    link: 'https://www.uoh.cl/its-not-fake-soy-buena-en-esto-y-lo-se-la-charla-que-inspiro-a-jovenes-del-liceo-ernesto-pinto-lagarrigue-de-rancagua/',
  },
  {
    id: 'mis-inseguridades',
    image: '/community/talks/mis-inseguridades.jpg',
    date: '2024-12-02',
    attendees: 15,
    type: 'in-person',
    es: {
      title: 'Mis inseguridades y yo nos vamos de entrevista',
      description:
        'Prepara conversaciones contigo misma, con recruiters y entrevistadores técnicos para construir confianza en situaciones de entrevista.',
      linkLabel: 'Ver reel',
    },
    en: {
      title: 'My Insecurities and I Go to an Interview',
      description:
        'Prepare conversations with yourself, recruiters, and technical interviewers to build confidence in job interview situations.',
      linkLabel: 'Watch reel',
    },
    link: 'https://www.instagram.com/reel/DDIC71mpkq8/?igsh=dGdnMzVpam1qcmll',
  },
  {
    id: 'elevator-pitch',
    image: '/community/talks/elevator-pitch.png',
    date: '2024-03-23',
    attendees: 50,
    type: 'in-person',
    es: {
      title: '¿Por qué necesitamos un Elevator Pitch?',
      description:
        'Cómo crear un elevator pitch para vencer el síndrome del impostor, vender propuestas de valor y captar la atención de quienes toman decisiones.',
      linkLabel: null,
    },
    en: {
      title: 'Why Do We Need an Elevator Pitch?',
      description:
        'How creating an elevator pitch helps defeat imposter syndrome, sell value propositions, and capture decision-makers\' attention.',
      linkLabel: null,
    },
    link: null,
  },
  {
    id: 'web-to-mobile',
    image: '/community/talks/web-to-mobile.png',
    date: '2023-11-19',
    attendees: 100,
    type: 'virtual',
    es: {
      title: 'From web to mobile development: how to start',
      description:
        'Similitudes y diferencias entre los paradigmas web y mobile, con un demo en vivo de Flutter para motivar a developers a dar el salto.',
      linkLabel: 'Ver en YouTube',
    },
    en: {
      title: 'From Web to Mobile Development: How to Start',
      description:
        'Similarities and differences between web and mobile paradigms, with a live Flutter demo to motivate developers to make the jump.',
      linkLabel: 'Watch on YouTube',
    },
    link: 'https://www.youtube.com/live/CRkwt50K0qU?si=6apht3v5GwTJrPgS&t=19467',
  },
]

// --- EVENTS (Eventos organizados) ---
// Ordenados de más reciente a más antiguo.
export const events = [
  {
    id: 'wtm-chile-2025',
    image: '/community/events/wtm-chile-2025.jpg',
    date: '2025-04-26',
    attendees: 200,
    speakers: 12,
    type: 'hybrid',
    es: {
      title: 'WTM Chile: Redefine Possible — Mujeres que transforman la tecnología',
      description:
        'Evento por el Día Internacional de la Mujer 2025 y el Día Internacional de las Niñas en las TIC. 200 asistentes, 12 speakers 100% femeninas en la UNAB, Santiago.',
      linkLabel: 'Ver evento',
    },
    en: {
      title: 'WTM Chile: Redefine Possible — Women Transforming Technology',
      description:
        'International Women\'s Day 2025 event celebrating women in tech and the International Girls in ICT Day. 200 attendees, 12 female speakers at UNAB, Santiago.',
      linkLabel: 'View event',
    },
    link: 'https://lu.ma/cth2o0bm',
  },
  {
    id: 'iwd-santiago-2024',
    image: '/community/events/iwd-santiago-2024.jpg',
    date: '2024-03-23',
    attendees: 250,
    speakers: 16,
    type: 'hybrid',
    es: {
      title: 'IWD Santiago: Impact The Future',
      description:
        'Evento de un día completo con 15+ speakers abordando síndrome del impostor, IA/ML, carrera, liderazgo y comunidad. Con intérprete de lenguaje de señas e inclusión total.',
      linkLabel: 'Ver fotos',
    },
    en: {
      title: 'IWD Santiago: Impact The Future',
      description:
        'Full-day event with 15+ speakers covering imposter syndrome, AI/ML, career development, leadership, and community. With sign language interpretation and full accessibility.',
      linkLabel: 'View photos',
    },
    link: 'https://photos.app.goo.gl/3rijtsvLA8w65o579',
  },
]

// --- MENTORSHIP (Mentoría) ---
// Ordenadas de más reciente a más antigua.
export const mentorship = [
  {
    id: 'verdades-mitos-digital',
    image: '/community/mentorship/verdades-mitos-digital.jpg',
    date: '2025-03-14',
    hours: 5,
    es: {
      title: 'Verdades o mitos de la convivencia digital',
      description:
        'Talleres con estudiantes, docentes y funcionarios del Ministerio de Educación sobre bienestar digital y convivencia digital saludable desde edades tempranas.',
      linkLabel: null,
    },
    en: {
      title: 'Truths or Myths of Digital Coexistence',
      description:
        'Workshops with students, teachers, and education ministry officials on digital wellness and healthy digital coexistence from early ages.',
      linkLabel: null,
    },
    link: null,
  },
  {
    id: '4geeks-academy',
    image: '/community/mentorship/4geeks-academy.jpg',
    date: '2025-01-29',
    hours: 2,
    es: {
      title: 'Mentoría — 4Geeks Academy',
      description:
        'Feedback y mentoría durante presentaciones de proyectos finales de una cohorte Full Stack JavaScript/Python/React/Flask.',
      linkLabel: 'Ver academia',
    },
    en: {
      title: 'Mentorship — 4Geeks Academy',
      description:
        'Feedback and mentoring during final project presentations for a Full Stack JavaScript/Python/React/Flask cohort.',
      linkLabel: 'View academy',
    },
    link: 'https://www.linkedin.com/school/4geeks-academy-latam/',
  },
  {
    id: 'laboratoria-bootcamp',
    image: '/community/mentorship/laboratoria-bootcamp.jpg',
    date: '2024-08-07',
    hours: 20,
    es: {
      title: 'Mentoría de carrera — Laboratoria (5 meses)',
      description:
        'Acompañé a una egresada de Laboratoria en sus desafíos post-bootcamp: marca personal, autoconciencia y navegación del mercado tech.',
      linkLabel: 'Ver post',
    },
    en: {
      title: 'Career Mentorship — Laboratoria (5 months)',
      description:
        'Mentored a Laboratoria graduate through post-bootcamp career challenges, personal brand development, and self-awareness.',
      linkLabel: 'View post',
    },
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7270793654376579072/',
  },
  {
    id: 'carmen-carvajal',
    image: '/community/mentorship/carmen-carvajal.jpg',
    date: '2024-04-25',
    hours: 3,
    es: {
      title: 'Liceo Carmen Carvajal — Niñas en STEM',
      description:
        'Enseñé a estudiantes de secundaria cómo abordar problemas sociales y resolverlos con tecnología, promoviendo el interés en STEM.',
      linkLabel: 'Ver reel',
    },
    en: {
      title: 'Carmen Carvajal High School — Girls in STEM',
      description:
        'Taught high school girls how to approach social problems and solve them with technology, promoting STEM interest.',
      linkLabel: 'Watch reel',
    },
    link: 'https://www.instagram.com/reel/C6Mnt6VxmX2/?igsh=MWttcHNlYXd0MnJseQ==',
  },
  {
    id: 'laboratoria-technical-oct',
    image: '/community/mentorship/laboratoria-technical-oct.png',
    date: '2023-10-01',
    hours: 3,
    es: {
      title: 'Preparación entrevistas técnicas — Laboratoria',
      description:
        'Preparé a mujeres de Laboratoria para enfrentar sus primeras entrevistas técnicas mediante pair programming en JavaScript.',
      linkLabel: null,
    },
    en: {
      title: 'Technical Interview Prep — Laboratoria',
      description:
        'Taught Laboratoria women to prepare for and face their first technical interviews through pair programming in JavaScript.',
      linkLabel: null,
    },
    link: null,
  },
  {
    id: 'laboratoria-technical-apr',
    image: '/community/mentorship/laboratoria-technical-apr.png',
    date: '2023-04-24',
    hours: 3,
    es: {
      title: 'Preparación entrevistas técnicas — Laboratoria',
      description:
        'Preparé a mujeres de Laboratoria para enfrentar sus primeras entrevistas técnicas mediante pair programming en JavaScript.',
      linkLabel: null,
    },
    en: {
      title: 'Technical Interview Prep — Laboratoria',
      description:
        'Taught Laboratoria women to prepare for and face their first technical interviews through pair programming in JavaScript.',
      linkLabel: null,
    },
    link: null,
  },
]
