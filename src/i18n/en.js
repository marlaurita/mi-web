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
        highlighted: true,
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
        highlighted: false,
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
        tagKey:   'softskills',
        tag:      'Softskills',
        date:     'May 2026',
        slug:     'ego-del-desarrollador',
        title:    'Developer ego and why regulating it will make you a better professional',
        excerpt:  'Your code can be impeccable, but if your ego is unchecked it can cost you jobs, arguments, and opportunities. Here\'s how to recognise it and what to do about it.',
        readTime: '5 min',
        content: [
          { type: 'paragraph', text: 'Ego, from the Latin "I", is the psychological structure that organises our self-perception, consciousness, and identity. It acts as a mediator between instincts and morality, helping us interpret reality. Although necessary for self-esteem, an unchecked ego can distort reality and generate defensive behaviour.' },
          { type: 'paragraph', text: 'From a software development perspective — or when building a professional career — it is vital to understand the processes we must master to call ourselves experts in a subject. However, when beyond expertise we begin to undervalue areas outside our profession, we fall into a common mistake: believing those areas are not important, because only what we do counts and matters.' },
          { type: 'paragraph', text: 'I do not judge you — it happened to me. It cost me jobs, arguments, and a closed-mindedness that showed in many ways. Only years of experience made me realise that my ignorance was not only bold, but downright loud. I would not blame myself (or you), since university curricula often do not cover these more management-oriented topics — and if they do, we were probably hungrier as students for technical knowledge than for understanding the full cycle of product development.' },
          { type: 'paragraph', text: 'Beyond you and me, many products that never see the light of success probably had someone in a very technical role who used their silver bullet without considering the full picture.' },

          { type: 'h2', text: 'Is your ego in check? Answer these questions' },
          { type: 'paragraph', text: 'To recognise this pattern of unchecked ego — or confirm it is already under control — I invite you to answer:' },
          { type: 'list', items: [
            'Are your daily stand-up updates overly technical?',
            'Do you not understand why team metrics matter and why they need to improve — such as velocity, performance, DORA metrics?',
            'Do you not understand why people talk about KPIs, OKRs, ROI, and similar?',
            'Do ceremonies like refinements, retrospectives, pre-planning, PI planning, and other non-technical conversations feel like a waste of time?',
            'Do you fail to see the big picture, wishing you could just focus on one task at a time?',
            'Do you not understand why people in other roles sometimes want to grasp technical topics, or why it matters that they do?',
          ]},
          { type: 'paragraph', text: 'If you identify with 3 or more, that is an interesting signal worth exploring — and you might even discover new fields you would like to expand into. Especially now, with AI on the rise, generalist profiles are gaining significant importance and value in the industry.' },

          { type: 'h2', text: 'Practical advice — whether your ego is "unchecked" or you are simply curious' },

          { type: 'h3', text: 'Have recurring one-on-ones with your team' },
          { type: 'paragraph', text: 'Schedule recurring sessions with all members of your team — at least half an hour per month. Even when there is nothing specific to discuss, it strengthens a relationship beyond the technical: learn what someone\'s day-to-day looks like, their processes, and how from your role you could help streamline their work.' },

          { type: 'h3', text: 'Understand metrics and their business impact' },
          { type: 'paragraph', text: 'Metrics tell you how many users are happy with the product or service, how many new users are joining, and the revenue that justifies our salaries — and in less welcome news, they also reveal the volume of complaints and dissatisfaction with the experience being offered.' },

          { type: 'h3', text: 'Know your users' },
          { type: 'paragraph', text: 'We technical people are users too — true — but we are not the users with the final say or the loudest voice. It is important to explore the real needs of people out in the world. Something you think works great might turn out to be among the least relevant things to users in their day-to-day, which in turn can affect the metrics we just discussed.' },

          { type: 'h3', text: 'Ceremonies = learning and context opportunities' },
          { type: 'paragraph', text: 'Even if you do not contribute directly, learning to filter where you can gain knowledge will greatly help your understanding of the business. In team ceremonies your feedback will always matter, so your attendance should be non-negotiable.' },

          { type: 'h3', text: "Let's normalise talking about expectations" },
          { type: 'paragraph', text: 'If professional growth is your goal, you can find a learning path in the expectations others have of your role or of you specifically. You can also understand what those people want to hear from you when you give a status update — for example, talking about risks, blockers, or dependencies with external teams, rather than "a confusion in log formatting".' },

          { type: 'h3', text: 'Invest in your education' },
          { type: 'paragraph', text: 'Especially in topics that interest you. For free, you can find community events, social media profiles covering subjects you care about, and even workshops or webinars. If you want to invest a little more, there are online courses, books, or more academic offerings from universities such as diplomas or master\'s programmes.' },

          { type: 'h3', text: 'Look outside the box' },
          { type: 'paragraph', text: 'Sometimes a solution you are only implementing for your team could work for the entire organisation — and only you might realise that impact. The invitation is to look at cross-cutting problems and always keep them in mind when generating a technical solution.' },

          { type: 'paragraph', text: 'The goal is not to judge a system or yourself: it is to recognise the situation and want to do something about it, where the greatest benefit will be for you and for the environment you work in. More often than you imagine, attitude > aptitude.' },
          { type: 'paragraph', text: 'Have you applied any of these tips so far this year? Would you add any of your own? What topics would you like me to keep writing about?' },
        ],
      },
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
