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
      { label: 'Mentoring', href: 'mentoring' },
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
    description: 'I help people and communities grow in tech through personalized mentoring, honest content, and collaborative learning spaces.',
    cta1:        'See mentoring',
    cta2:        'Explore my work',
    badge:       '🚀 Available for mentoring',
  },

  // --- ABOUT ---
  about: {
    sectionLabel: 'About me',
    title:        'I build bridges between people and technology',
    paragraphs: [
      'I am a Computer Engineer passionate about tech education and community development. I firmly believe that technology should be accessible to everyone, regardless of where they start.',
      'Throughout my career I have combined technical work with teaching, mentoring, and building safe spaces where people can learn, make mistakes, and grow.',
    ],
    stats: [
      { value: '5+',   label: 'Years of experience' },
      { value: '100+', label: 'People mentored' },
      { value: '3+',   label: 'Active communities' },
    ],
    skills: [
      'Software Development',
      'Tech Education',
      'Community Leadership',
      'Technical Mentoring',
      'Effective Communication',
      'Systems Thinking',
    ],
    skillsLabel: 'Areas of work',
  },

  // --- MENTORING ---
  mentoring: {
    sectionLabel: 'Mentoring',
    title:        'Guidance for your journey in tech',
    description:  'Personalized sessions so you can grow with clarity, focus, and real support — no detours, no generic formulas.',
    popularBadge: 'Most popular',
    plans: [
      {
        name:        'Single session',
        price:       'Inquire',
        period:      '',
        description: 'A 60-minute session to resolve a specific question, review your CV, prepare for an interview, or map out your career plan.',
        features: [
          '60-minute 1:1',
          'Profile / CV review',
          'Career guidance',
          'Session recording',
        ],
        cta:         'Request session',
        highlighted: false,
      },
      {
        name:        'Monthly mentoring',
        price:       'Inquire',
        period:      '/ month',
        description: 'Ongoing support with weekly sessions, goal tracking, and access to exclusive resources.',
        features: [
          '4 × 60-minute sessions',
          'Goal tracking',
          'Resources & exercises',
          'Direct written channel',
          'Code / project reviews',
        ],
        cta:         'I want this mentoring',
        highlighted: true,
      },
      {
        name:        'Group bootcamp',
        price:       'Inquire',
        period:      '',
        description: 'Intensive program in a small group (max. 8 people) with a hands-on approach and peer community.',
        features: [
          'Small groups (max. 8)',
          'Practical project included',
          'Private community',
          'Certificate of participation',
        ],
        cta:         'Join the group',
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
    sectionLabel: 'Community',
    title:        'Building tech together',
    description:  'I believe in spaces where people support each other. Here are some of the community projects I participate in and lead.',
    items: [
      {
        icon:        '🌐',
        name:        'marilau.tech Community',
        role:        'Founder',
        description: 'Digital space for people in tech who want to learn, connect, and grow without toxic competition.',
        link:        '#',
        linkLabel:   'Join',
      },
      {
        icon:        '👩‍💻',
        name:        'Women in Tech Latam',
        role:        'Collaborator',
        description: 'Network of women and LGBTQ+ people in technology across Latin America. Talks, resources, and mentoring.',
        link:        '#',
        linkLabel:   'Learn more',
      },
      {
        icon:        '🎙️',
        name:        'Talks & Events',
        role:        'Speaker',
        description: 'I give talks on career, tech education, and community at in-person and virtual events.',
        link:        '#',
        linkLabel:   'See talks',
      },
    ],
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
      { name: 'LinkedIn',  href: '#', icon: 'linkedin' },
      { name: 'GitHub',    href: '#', icon: 'github' },
      { name: 'Twitter/X', href: '#', icon: 'twitter' },
      { name: 'Instagram', href: '#', icon: 'instagram' },
    ],
    email:        'hola@marilau.tech',
    availability: 'I respond within 48 business hours.',
  },

  // --- FOOTER ---
  footer: {
    tagline:           'Technology with purpose.',
    availabilityLabel: 'Available for mentoring',
    copyright:         '© 2026 marilau.tech — Made with 💙 and lots of tea.',
    navTitle:          'Navigation',
    legalTitle:        'Legal',
    links: [
      { label: 'Privacy policy', href: '#' },
      { label: 'Terms of use',   href: '#' },
    ],
  },
}
