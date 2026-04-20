// ============================================================
//  MARILAU.TECH — CONTENT IN ENGLISH
// ============================================================

export default {

  // --- META & NAV ---
  site: {
    name:    'marilau.tech',
    tagline: 'Technology with purpose',
  },

  nav: {
    links: [
      { label: 'Home',      href: 'hero' },
      { label: 'About',     href: 'about' },
      { label: 'Services',  href: 'mentoring' },
      { label: 'Blog',      href: 'blog' },
      { label: 'Community', href: 'community' },
      { label: 'Contact',   href: 'contact' },
    ],
    ctaLabel: 'Book a session',
  },

  // --- HERO ---
  hero: {
    greeting:    "Hi, I'm",
    highlight:   'María Laura',
    role:        'Computer Engineer',
    description: 'I build and improve tech products focused on quality, experience, and clear decisions. I work with people, teams, and projects that need to unblock problems, improve their product, or grow with clarity in technology.',
    cta1:        "Let's work together",
    cta2:        'See my work',
    badge:       '🚀 Available for mentoring',
  },

  // --- ABOUT ---
  about: {
    sectionLabel: 'About me',
    title:        'I build bridges between people and technology',
    paragraphs: [
      'I am a Computer Engineer specialised in mobile front-end development, with experience in technical leadership and user-centred design.',
      'Throughout my career I have combined technical work with mentoring, teaching, and building communities, creating spaces where people can learn, make mistakes, and grow.',
      'I am particularly interested in how to improve communication between development, design, and product to build more coherent, efficient, and human solutions.',
      'Beyond mentoring, I work as a consultant supporting teams and projects in building and improving digital products, especially in mobile development.',
    ],
    stats: [
      { value: '12+', label: 'Years of experience' },
      { value: '20+', label: 'Products developed' },
      { value: '40+', label: 'People mentored' },
    ],
    skills: [
      'Software Development',
      'Tech Education',
      'Technical Leadership',
      'Professional Growth',
      'Effective Communication',
      'Artificial Intelligence',
      'Mobile Apps',
    ],
    skillsLabel: 'Areas of work',
  },

  // --- MENTORING ---
  mentoring: {
    sectionLabel: "Let's work together",
    title:        'Guidance for your journey in tech',
    description:  'Depending on what you need, I can support you from a technical, strategic, or educational angle.',
    popularBadge: 'Most popular',
    plans: [
      {
        name:        'Mentoring',
        price:       'Inquire',
        period:      '',
        description: '1:1 support for developers who want to grow in software creation, improve their technical judgment, and advance with more clarity in their career.',
        features: [
          'First session free',
          'Development (fundamentals and best practices)',
          'Code and project reviews',
          'Job preparation (CV, interviews, roadmap)',
          'Technical decision-making',
        ],
        cta:         'I want this mentoring',
        highlighted: false,
      },
      {
        name:        'Technical consulting',
        price:       'Inquire',
        period:      '/ month',
        description: 'I help teams and products unblock issues, improve development quality, and make technical decisions with greater clarity.',
        features: [
          'App audits',
          'Performance improvement',
          'Frontend architecture review',
          'Design-development alignment',
          'Best practices definition',
          'AI adoption',
        ],
        cta:         'Request session',
        highlighted: true,
      },
      {
        name:        'Small Projects',
        price:       'Inquire',
        period:      '',
        description: 'I collaborate on scoped projects that need mobile development expertise and a focus on user experience.',
        features: [
          'Specific feature development',
          'Functional prototypes',
          'UX improvement in existing apps',
        ],
        cta:         "Let's talk",
        highlighted: false,
      },
    ],
    note:    "Not sure which one to pick? Schedule a free 15-minute call and we'll figure it out together.",
    noteCta: 'Free call →',
  },

  // --- BLOG ---
  blog: {
    sectionLabel: 'Blog',
    title:        'Ideas, learnings & reflections',
    description:  'I write about technology, career, community, and everything in between. No filters.',
    posts: [
      {
        tagKey:   'mentoring',
        tag:      'Softskills',
        date:     'April 2026',
        slug:     'habilidad-infravalorada-dar-recibir-mentoria',
        title:    'The most underrated skill in the professional world: giving and receiving mentoring',
        excerpt:  'Far from having all the answers, I have been a mentor and mentee for years — here I share the wonders of this underrated ability to give and receive mentoring.',
        readTime: '4 min',
        content: [
          { type: 'h2', text: 'As a mentee' },

          { type: 'h3', text: 'How do I know I need a mentor?' },
          { type: 'paragraph', text: 'As much AI as you want, it is fair to acknowledge that not everyone can follow the self-learning path relentlessly — and it is completely valid to seek extra help, especially when you have no clear idea of what the future could look like with a certain skill.' },
          { type: 'paragraph', text: 'A mentor will:' },
          { type: 'list', items: [
            'Understand your current context and where you want to go, and can also suggest the goal if it is not yet clear.',
            'Create a learning path and steps to achieve an objective within a set timeframe.',
            'Accompany you with resources and experience so your journey feels less lonely than you might have imagined.',
            'Constantly follow up to understand whether your expectations from the mentoring sessions are being met.',
          ]},
          { type: 'paragraph', text: 'Sounds great, right? If 2 or more of these points resonate with you, a mentor can help you channel your learning of a skill.' },

          { type: 'h3', text: 'How to make the most of your mentor?' },
          { type: 'paragraph', text: 'First, you need commitment. Since both your time and your mentor\'s time are valuable, not connecting enough with the process can lead to feelings of frustration and impatience.' },
          { type: 'paragraph', text: 'In the first session, beyond getting to know each other, it is important to set expectations on both sides. Questions like: What do I need help with? How can this person help me? What will the working methodology be? How many hours per week will be dedicated synchronously and asynchronously? What is the cost of the sessions? Which tools are needed? For how long will we collaborate (having an end date is important)? These should be answered or at least pointed in a direction.' },
          { type: 'paragraph', text: 'The following sessions will likely involve finding the right working rhythm for both, where your learning can be maximised.' },
          { type: 'paragraph', text: 'It is important to give your mentor feedback so they can understand whether the learning journey is valuable to you, or if there are things that need to be adjusted.' },

          { type: 'h3', text: 'Where do you find a mentor?' },
          { type: 'paragraph', text: 'Depending on the skill you want to learn, you can start by searching online, in existing communities, or at events in your city where you can connect with people who share your interests — through networking, someone will surely know a mentor.' },

          { type: 'h2', text: 'As a mentor' },

          { type: 'h3', text: 'How to know if you would be a good mentor?' },
          { type: 'paragraph', text: 'If teaching is something you enjoy and you see the value in sharing knowledge and helping others, this is undoubtedly a worthwhile experience. Organisations like Laboratoria.la are constantly looking for mentors to help women prepare for job interviews in the tech world, for example.' },
          { type: 'paragraph', text: 'It requires session preparation to deliver a quality service to the mentee. That is why knowing the person, understanding their expectations, and truly validating whether you can help with their growth and learning is so important.' },
          { type: 'paragraph', text: 'Your first sessions will likely need to be free so you can practise your skills and expand your network.' },

          { type: 'paragraph', text: 'I hope that from whichever of the two roles, it is something that motivates you to try — and please tell me how your experience with this underrated skill has been.' },
        ],
      },
      {
        tagKey:   'career',
        tag:      'Career',
        date:     'March 2025',
        slug:     'primer-trabajo-tech-sin-titulo',
        title:    'How I landed my first tech job without a university degree',
        excerpt:  'The real story, mistakes included. What worked, what did not, and what nobody tells you in Twitter threads.',
        readTime: '5 min',
        content: [],
      },
      {
        tagKey:   'mentoring',
        tag:      'Mentoring',
        date:     'February 2025',
        slug:     'preguntas-para-tu-mentora',
        title:    'Questions you should ask your mentor (and the ones we never ask)',
        excerpt:  'After hundreds of mentoring sessions I learned that the best conversations happen when we change the questions.',
        readTime: '4 min',
        content: [],
      },
      {
        tagKey:   'community',
        tag:      'Community',
        date:     'January 2025',
        slug:     'comunidad-tech-2025',
        title:    'Why building a tech community matters more than ever in 2025',
        excerpt:  "The rise of AI doesn't displace people — it connects them in new ways. Here's how I'm thinking about the future of communities.",
        readTime: '6 min',
        content: [],
      },
    ],
    ctaLabel:    'View all articles',
    readArticle: 'Read article →',
    readTime:    'read',
    backLabel:   'Back to blog',
    comingSoon:  'Full article coming soon...',
    shareLabel:  'Share if it was useful!',
  },

  // --- COMMUNITY ---
  community: {
    sectionLabel:   'Community',
    title:          'Building tech together',
    description:    'As a WTM Ambassador I have given talks, organized events, and mentored people across different stages of their tech careers. Here\'s the record.',
    tabTalks:       'Talks',
    tabEvents:      'Events',
    tabMentorship:  'Mentorship',
  },

  // --- CONTACT ---
  contact: {
    sectionLabel: 'Contact',
    title:        "Let's talk",
    description:  'Whether for mentoring, a collaboration, a talk, or simply to connect — write to me, I am happy to respond.',
    emailLabel:   'Email',
    socialLabel:  'Social media',
    form: {
      nameLabel:          'Name',
      emailLabel:         'Email',
      subjectLabel:       'Subject',
      messageLabel:       'Message',
      namePlaceholder:    'Your name',
      emailPlaceholder:   'you@email.com',
      subjectPlaceholder: 'How can I help you?',
      messagePlaceholder: 'Tell me a bit about yourself and what you are looking for...',
      submitLabel:        'Send message',
    },
    success: {
      title: 'Message sent!',
      text:  "I will get back to you soon. Thank you for reaching out!",
    },
    social: [
      { name: 'LinkedIn',  href: 'https://www.linkedin.com/in/marilautech/', icon: 'linkedin' },
      { name: 'GitHub',    href: 'https://github.com/marlaurita/', icon: 'github' },
      { name: 'Instagram', href: 'https://www.instagram.com/marilau.tech', icon: 'instagram' },
    ],
    email:        'marilau.codes@gmail.com',
    availability: 'I respond within 48 business hours.',
  },

  // --- FOOTER ---
  footer: {
    tagline:           'Technology with purpose.',
    availabilityLabel: 'Available for mentoring',
    copyright:         '© 2026 marilau.tech — Made with 💙, vibe coding and lots of tea.',
    navTitle:          'Navigation',
    legalTitle:        'Legal',
    links: [
      { label: 'Privacy policy', href: '#' },
      { label: 'Terms of use',   href: '#' },
    ],
  },
}
