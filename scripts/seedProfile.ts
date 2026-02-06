import { redis } from '../src/lib/redis'
import { UserProfile } from '../src/types/userProfile'

const initialProfile: UserProfile = {
  firstName: 'Ruther',
  lastName: 'Tenido',
  profession: 'Sr. Software Engineer',
  professionAlias: 'Im just a guy who codes.',
  email: 'ruthertenido@gmail.com',
  professionDescription:
    "I'm a Full Stack Web Developer from the Philippines, skilled in creating dynamic web applications from concept to deployment. I excel in continuous integration and development for superior user experiences and am passionate about using innovative technologies to build robust, scalable solutions for clients.",
  aboutMe: [
    {
      text: 'Hi ! Ruther here!',
      space: true,
    },
    {
      text: "I'm a dedicated Full-stack Web Developer in the Philippines and a programming enthusiast. Embracing the ever-evolving nature of web development, I find joy in continuous learning. Each day brings new discoveries...",
      space: true,
    },
    {
      text: 'I love working with logic and structures of coding, whether it be simple or a wide variety of projects.',
      space: true,
    },
  ],
  skills: [
    { name: 'JavaScript (ES6+)' },
    { name: 'TypeScript' },
    { name: 'Node. js' },
    { name: 'React' },
    { name: 'NextJS' },
    { name: 'Docker' },
    { name: 'NGINX' },
    { name: 'Kubernetes' },
    { name: 'GraphQL' },
    { name: 'Jest.js' },
    { name: 'MySQL' },
    { name: 'MongoDB' },
    { name: 'Postgres' },
    { name: 'Puppeteer/NightmareJS' },
    { name: 'HTML & (S)CSS' },
  ],
  experiences: [
    {
      company: 'Dashlabs.ai',
      position: 'Software Engineer',
      duration: 'Oct. - Present',
      description: [
        'Worked as professional full stack web-developer',
        'The goal is to work as a team leader of a small team',
        'Maintaning and providing a high quility product while managing a small team',
      ],
      technologies: [
        'JavaScript',
        'TypeScript',
        'React',
        'NextJS',
        'GraphQL',
        'Jest.js',
        'MongoDB',
        'HTML & (S)CSS',
      ],
    },
    {
      company: 'SquidPay',
      position: 'Front-end Developer',
      duration: 'Apr. 2021 - Oct. 2021',
      description: [
        ' Worked as a Professional REACT Front-End Developer',
        'The goal is to create a user interface without using any third-party modules or frameworks to create a performance-wise application.',
      ],
      technologies: [
        'JavaScript',
        'TypeScript',
        'React',
        'NextJS',
        'Redux',
        'Jest.js',
        'HTML & (S)CSS',
      ],
    },
    {
      company: 'Theoria Medical',
      position: 'Full Stack Web Developer',
      duration: 'Mar. 2021 - Oct. 2021',
      description: [
        'Full-stack web developer using MERN text Stack',
        'The goal is to work with the team and provide precise performance-wise application',
        'Designed and Developed OPEN API for the company that passed the Drummond test',
      ],
      technologies: [
        'JavaScript',
        'TypeScript',
        'Node.js',
        'Express',
        'GraphQL',
        'MongoDB',
        'Mongoose',
        'React',
        'NextJS',
        'Redux',
        'Jest.js',
        'HTML & (S)CSS',
      ],
    },
    {
      company: 'Solo Freelancing',
      position: 'Full Stack Web Developer',
      duration: 'Aug. 2020 - Mar. 2021',
      description: [
        'Worked as freelancer web developer ,my choice for improving my skills and self discipline',
        'Interfaced with clients on a weekly basis, providing good quality product and technological expertise',
      ],
      technologies: [
        'JavaScript',
        'TypeScript',
        'Node.js',
        'Express',
        'GraphQL',
        'MongoDB',
        'Mongoose',
        'React',
        'NextJS',
        'Redux',
        'Jest.js',
        'Docker',
        'NGINX',
        'Kubernetes',
        'Puppeteer/NightmareJS',
        'MySQL',
        'PostgreSQL',
        'HTML & (S)CSS',
      ],
    },
    {
      company: 'Flower Store PH',
      position: 'Full Stack Web Developer',
      duration: 'Dec. 2018 - Jul. 2020',
      description: [
        'Worked with a team of four web developer to build an end to end system for the company, and two ecommerce website at the same time while maintaining the quality of the application for the customer .',
        'Collaborate on maintaining and organizing database for future proof data storing.',
        'Helped on renovating for automation little by little, a big step up for the company.',
      ],
      technologies: [
        'JavaScript',
        'TypeScript',
        'Node.js',
        'Express',
        'GraphQL',
        'React',
        'NextJS',
        'Redux',
        'Jest.js',
        'Puppeteer/NightmareJS',
        'MySQL',
        'PostgreSQL',
        'PHP',
        'Laravel',
        'HTML & (S)CSS',
      ],
    },
  ],

  projects: [
    {
      title: 'My Chatbot',
      description:
        "An AI-powered chatbot widget, built for Next.js, that answers questions about a user's professional background and can share their resume or schedule meetings. It's easily customizable and installable in any Next.js project.",
      techStack: [
        'Next.js',
        'React',
        'TypeScript',
        'TailwindCSS',
        'Shadcn/UI',
        'OpenAI',
        'Gemini',
        'Google API',
        'Redis',
        'PNPM',
        'Turborepo',
        'HTML & (S)CSS',
      ],
      link: 'https://codenicer.cv',
      github: 'https://github.com/codenicer/my-chatbot',
      image: '/images/projects/my-chatbot.png',
    },
    {
      title: 'My Portfolio v2',
      description:
        'My Portfolio v2 is a modern and responsive portfolio website built typescript. It showcases my skills, projects, and experiences in a clean and professional manner.',
      techStack: [
        'Next.js',
        'React',
        'TypeScript',
        'TailwindCSS',
        'Redis',
        'HTML & (S)CSS',
      ],
      link: 'https://codenicer.cv',
      github: 'https://github.com/codenicer/who-am-i-v2',
    },
    {
      title: 'My Portfolio v1',
      description:
        'My Portfolio v1 is a modern and responsive portfolio website built javascript. It showcases my skills, projects, and experiences in a clean and professional manner.',
      techStack: [
        'Next.js',
        'React',
        'Javascript',
        'TailwindCSS',
        'HTML & (S)CSS',
      ],
      link: 'https://codenicer.netlify.app',
      github: 'https://github.com/codenicer/who-i-am',
    },
    {
      title: 'Flowerstore PH',
      description:
        'A Ecommerce website that focus on selling flowers and give happiness for the clients. The main goal of the application was to control and organized orders from clients that will direct to main System, also to provide fast and better service.',
      techStack: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'HTML & (S)CSS'],
      github: 'https://github.com/codenicer/demo-fs-public',
      link: 'https://www.flowerstoreph.com',
    },
    {
      title: 'Minimart PH',
      description:
        'This project is an Ecommerce website that was build upon pandemic starts just to help customer, its goals is to enable customers to get their daily essentials delivered to their doorstep.',
      techStack: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'HTML & (S)CSS'],
      github: 'https://github.com/codenicer/demo-mm-public',
    },
    {
      title: 'End to End System',
      description:
        'An end to end system for mananging client data and aligning data collected for internal process. The porpuse of the system is to automate data processing that will slow the process. Its also used to monitor full business statistics in real-time',
      techStack: [
        'Javascript',
        'React',
        'NodeJS',
        'Javascript',
        'Express',
        'Mysql',
        'Sequelize',
      ],
      github: 'https://github.com/codenicer/demo-system-public',
    },
    {
      title: 'Ticketing App',
      description:
        'A ticketing app build for school project, structured with microservices architecture, A full application divided into 6 services, each service with its own database. Payments handled by stripe.',
      techStack: [
        'Typescript',
        'Docker',
        'Nginx',
        'Mongodb',
        'Nodejs',
        'Express',
        'Redis',
        'Stripe',
      ],
      github: 'https://github.com/codenicer/microservices-ticketing-app',
    },
  ],
  socialLinks: [
    {
      name: 'Github',
      url: 'https://github.com/codenicer',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/code-nicer/',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/code.Nicer/',
    },
    {
      name: 'Twitter',
      url: '#',
    },
  ],
  personalContext: {
    assistant: {
      name: 'Tiaga Bot',
    },
    professional: {
      currentRole: 'Sr. Software Engineer',
      company: 'Dashlabs.ai',
      skills: [
        { name: 'JavaScript', experience: 5 },
        { name: 'TypeScript', experience: 4 },
        { name: 'Node.js', experience: 5 },
        { name: 'GraphQL', experience: 4 },
        { name: 'Express', experience: 4 },
        { name: 'React', experience: 5 },
        { name: 'NextJS', experience: 4 },
        { name: 'Docker', experience: 2 },
        { name: 'NGINX', experience: 2 },
        { name: 'Kubernetes', experience: 2 },
        { name: 'Jest.js', experience: 2 },
        { name: 'MongoDB', experience: 5 },
        { name: 'MySQL', experience: 2 },
        { name: 'PostgreSQL', experience: 2 },
        { name: 'Mongoose', experience: 2 },
        { name: 'Redis', experience: 3 },
        { name: 'Puppeteer/NightmareJS', experience: 2 },
        { name: 'HTML & (S)CSS', experience: 5 },
        { name: 'PHP', experience: 2 },
        { name: 'Laravel', experience: 2 },
      ],
      experience: 6,
      currentRoutine:
        'Every morning I wake up, check my emails, and enjoy a cup of coffee before attending a meeting and reviewing my deadlines; at noon, I start coding, take a lunch break with another coffee, and then continue working throughout the afternoon, ensuring I complete my weekly tasks before their deadlines.',
      jobSearchStatus: 'active',
    },
    information: {
      name: 'Ruther',
      lastName: 'Tenido',
      email: 'ruther.tenido@gmail.com',
      phone: '+639984731209',
      location: {
        city: 'Manila',
        country: 'Philippines',
        openToRelocation: true,
      },
      resumeUrl: 'https://codenicer.cv/Tenido-Ruther-V.-Resume.pdf',
    },
    preferences: {
      minSalary: 1,
      maxSalary: 1,
      location: 'Manila, Philippines',
      remoteWork: true,
    },
  },
}

async function seedProfile() {
  try {
    await redis.set('user:profile', JSON.stringify(initialProfile))

    process.exit(0)
  } catch (error) {
    console.error('Error seeding profile:', error)
    process.exit(1)
  }
}

seedProfile()
