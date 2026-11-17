/**
 * Portfolio content. Update contact links and portrait when supplied.
 */
export type Project = {
  name: string;
  description: string;
  problem: string;
  features: string[];
  technologies: string[];
  imageUrl: string;
  liveUrl: string;
  repoUrl: string;
};

export const profile = {
  name: 'Duncan Obeng Marfo',
  firstName: 'Duncan',
  lastName: 'Marfo',
  initials: 'DM',
  brand: 'DUNCAN OBENG MARFO',
  role: 'Software Developer & Freelance Developer',
  location: 'Ghana',
  email: '',
  linkedin: '',
  github: '',
  available: true,
  heroImage: '/duncan-obeng-marfo.png',
  intro:
    'I build practical digital products, responsive websites and web applications that help people and businesses solve real problems.',
  about: [
    'I am Duncan Obeng Marfo, a developer and Information Technology student at the University of Energy and Natural Resources (UENR) in Sunyani, Ghana. I enjoy turning ideas into useful digital experiences through software and web development.',
    'My work spans frontend interfaces, web applications, backend functionality and database-driven projects. I enjoy understanding a problem, planning a practical solution and bringing it to life through code.',
    'I have worked on projects including MoneyWise, an AI programming assistant, a student ID card service concept and a Python/Pygame basketball game. These projects reflect my interest in building technology that is useful, accessible and easy to work with.',
    'I am open to freelance opportunities, collaborations and opportunities to grow with a development team. I value clear communication, continuous learning, thoughtful problem-solving and delivering work that meets the actual needs of its users.'
  ],
  specialties: ['Web Development', 'Web Applications', 'Python & APIs']
};

export const skills: { category: string; items: string[] }[] = [
  { category: 'Languages & Web Foundations', items: ['Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS'] },
  { category: 'Frontend Development', items: ['React', 'Responsive UI', 'Component-Based Development'] },
  { category: 'Backend & Data', items: ['APIs', 'MySQL', 'SQL', 'Database Design', 'Authentication'] },
  { category: 'Tools & Platforms', items: ['Git', 'GitHub', 'VS Code', 'Vercel'] },
  { category: 'Creative Development', items: ['Pygame', 'Unity (Learning)'] }
];

export const projects: Project[] = [
  {
    name: 'MoneyWise',
    description:
      'A personal finance web app designed to help people keep track of their money, understand spending and manage their finances in one place.',
    problem:
      'Managing income and expenses can become confusing when financial activity is scattered across notes and separate tools. MoneyWise brings key money-management activities into one web experience.',
    features: [
      'Personal finance and expense-management experience',
      'Currency-aware interface',
      'Dashboard-focused presentation of financial information',
      'Responsive web experience'
    ],
    technologies: ['React', 'TypeScript', 'Web Development', 'Vercel'],
    imageUrl: "/projects/moneywise.png",
    liveUrl: 'https://getmoneywise.vercel.app/',
    repoUrl: '#'
  },
   {
    name: 'UENR ID Card Services',
    description:
      'A student-focused web app concept to help students who have lost an ID card, need a replacement or want to find information about recovering one.',
    problem:
      'Losing a student ID can create stress, especially when the card is needed for important campus activities. The project explores a clearer online way to access ID-card support.',
    features: [
      'Student ID card information',
      'Guidance for lost or replacement cards',
      'Student-focused service information',
      'Responsive home and about sections'
    ],
    technologies: ['Web Development', 'JavaScript', 'Frontend UI'],
    imageUrl: "/projects/uenr-id-card.png",
    liveUrl: 'https://uenr-idcard.vercel.app/',
    repoUrl: '#'
  },
  {
    name: 'Basketball Challenge',
    description:
      'A basketball-themed desktop game built with Python and Pygame, with a focus on interactive gameplay and a custom game window.',
    problem:
      'This project explores how programming concepts can be used to create an interactive game with visual assets, a game loop and player interaction.',
    features: [
      'Python/Pygame game structure',
      'Custom game window and frame-rate setup',
      'Player and ball visual assets',
      'Interactive game development practice'
    ],
    technologies: ['Python', 'Pygame'],
    imageUrl: 'https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg?auto=compress&cs=tinysrgb&w=1200',
    liveUrl: '#',
    repoUrl: '#'
  }
];

export const services = [
  {
    title: 'Website Development',
    description: 'Responsive websites that communicate clearly and give visitors a smooth experience.',
    items: ['Business websites', 'Personal portfolios', 'Landing pages', 'Responsive layouts']
  },
  {
    title: 'Web Application Development',
    description: 'Useful web applications shaped around real workflows and user needs.',
    items: ['Custom web applications', 'Interactive dashboards', 'User interfaces', 'Feature implementation']
  },
  {
    title: 'Backend & API Integration',
    description: 'The functionality behind an application, connecting interfaces, services and data.',
    items: ['API integration', 'Database-connected features', 'Authentication workflows', 'Server-side functionality']
  },
  {
    title: 'Website Improvement',
    description: 'Practical improvements to existing websites and applications.',
    items: ['Bug fixing', 'Responsive improvements', 'UI refinements', 'Content and feature updates']
  },
  {
    title: 'UI Implementation',
    description: 'Pixel-faithful builds that turn design files into real, working interfaces.',
    items: ['Design-to-code implementation', 'Responsive layouts', 'Modern interfaces'],
  },
];

export const process = [
  { number: '01', title: 'Understand', description: "Learn about the client's goals, users and the problem to solve." },
  { number: '02', title: 'Plan', description: 'Agree on the core features, structure and practical technology choices.' },
  { number: '03', title: 'Build', description: 'Develop the solution in clear steps, keeping usability and quality in mind.' },
  { number: '04', title: 'Test', description: 'Check important workflows, responsiveness and fix issues found.' },
  { number: '05', title: 'Deliver', description: 'Prepare the finished work for launch and explain how to use it.' }
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' }
];
