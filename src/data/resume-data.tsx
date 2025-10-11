import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Shazam Shakeel",
  initials: "Shazam",
  location: "Based in Pakistan 🇵🇰",
  about: "Software Engineer | Full Stack Developer",
  description:
    "Full Stack Software Engineer with 3+ years in the tech industry. Worked on B2C, e-commerce, enterprise SaaS, and FinTech applications.",
  summary:
    "Frontend Developer with 3+ years of experience specializing in architecting and deploying scalable, high-performance web platforms. Expert in TypeScript, Next.js (Streaming, ISR, Partial Hydration), and advanced state management (Redux Toolkit). Proven track record of leveraging real-time technologies (WebSockets, HLS streaming) and optimized search solutions (Typesense) to drive business results.",
  imageUrl: "https://avatars.githubusercontent.com/u/40428253?v=4",
  personalWebsiteUrl: "https://shazamshakeel.vercel.app",

  contact: {
    email: "shazamshakeel786@gmail.com",
    tel: "+923056038929",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shazamshakeel",
        icon: LinkedInIcon,
      },
      {
        name: "GitHub",
        url: "https://github.com/shazamshakeel",
        icon: GitHubIcon,
      },
      {
        name: "X",
        url: "https://x.com/shazamshakeel_",
        icon: XIcon,
      },
    ],
  },

  keyHighlights: [
    {
      title: "Experience",
      description: "3+ years in the software development industry",
      icon: "💼",
    },
    {
      title: "Leadership",
      description:
        "Led a team of 5 on two large-scale projects for KSA & UAE markets",
      icon: "🤝",
    },
    {
      title: "Industry Exposure",
      description: "Enterprise SaaS, e-Commerce, and FinTech",
      icon: "🚀",
    },
    {
      title: "Startups",
      description: "Worked with 2 startups as a freelance developer",
      icon: "📌",
    },
    {
      title: "Open Source",
      description: "Contributor to React-Alfa-Payment library",
      icon: "✨",
    },
    {
      title: "Certifications",
      description: "6+ certifications in modern web development",
      icon: "📜",
    },
    {
      title: "Education",
      description: "BS in Computer Science\nCGPA: 3.30",
      icon: "🎓",
    },
    {
      title: "Personality",
      description: "Collaborative, adaptive, and socially engaged",
      icon: "👥",
    },
    {
      title: "Languages",
      description: "English (Professional)\nUrdu (Native)",
      icon: "🌐",
    },
  ],

  work: [
    {
      company: "Vintega Solutions",
      link: "https://vintegasolutions.com",
      badges: ["Full-Time", "On-Site"],
      experiences: [
        {
          title: "MERN Stack Developer",
          start: "May 2022",
          end: "Present",
          description: "",
          bulletPoints: [
            {
              text: "Led frontend development of eCommerce platform and its Admin Panel targeting the KSA market, implementing internationalization support and advanced Next.js features (Streaming, Partial Hydration, Server-Side Authentication) to achieve GTmetrix grade B and Lighthouse scores of 89 (SSR) and 95 (static).",
              links: [],
            },
            {
              text: "Developed comprehensive auction ecosystem utilizing WebSocket technology and HLS streaming protocol, supporting 10,000+ concurrent users with real-time bidding updates, dynamic time extensions, and live notifications, resulting in a 15% increase in session duration and a 12% reduction in bounce rate.",
              links: [],
            },
            {
              text: "Built high-performance product search system using Typesense, implementing complex filters through URL query parameters to deliver sub-100ms query responses and improve SEO through search-friendly URLs.",
              links: [],
            },
            {
              text: "Ensured secure workflows across a 4-tier organizational structure by implementing Role-Based Access Control (RBAC) system with custom permissions for organizational departments.",
              links: [],
            },
            {
              text: "Enabled data-driven decisions by integrating Google Tag Manager and Google Analytics, providing actionable insights into user behavior and full customer journey tracking.",
              links: [],
            },
            {
              text: "Ensured data integrity and reduced form-related errors by building scalable, multi-step form flows with layered validation.",
              links: [],
            },
          ],
        },
      ],
    },
    {
      company: "EMI Fusion",
      link: "https://www.linkedin.com/company/emi-fusion",
      badges: ["Internship", "On-Site"],
      experiences: [
        {
          title: "Software Engineer Intern",
          start: "Feb 2022",
          end: "Apr 2022",
          description: "",
          bulletPoints: [
            {
              text: "Developed scalable, high-performance web applications with a focus on responsive UI design and smooth user experience across devices.",
              links: [],
            },
            {
              text: "Implemented data modeling and schema management using Sequelize ORM with PostgreSQL, improving backend consistency and query efficiency.",
              links: [],
            },
            {
              text: "Integrated third-party APIs, including Google Maps, to deliver location-based features and enhance functionality.",
              links: [],
            },
            {
              text: "Optimized application state management through Redux Toolkit implementation, reducing UI-related bugs and improving code maintainability across complex front-end architectures.",
              links: [],
            },
            {
              text: "Collaborated in an Agile environment, utilizing modern full-stack workflows, contributing to multiple projects through effective team coordination and professional coding practices.",
              links: [],
            },
          ],
        },
      ],
    },
  ],

  openSourceContributions: [
    {
      repository: "React-Alfa-Payment",
      link: "https://github.com/sshahzaiib/react-alfa-payment",
      badges: [],
      title: "Co-Creator & Maintainer",
      description: "",
      bulletPoints: [
        {
          text: "Co-created an open-source payment integration library for Bank Alfalah Pakistan, addressing the lack of developer-friendly documentation by providing a ready-to-use React solution.",
          links: [],
        },
      ],
    },
  ],

  education: [
    {
      university: "Government College University Faisalabad",
      degree: "Bachelor of Science in Computer Science",
      start: "2017",
      end: "2021",
      cgpa: "3.30 / 4.40",
    },
  ],

  skills: [
    {
      title: "Frontend",
      list: ["JavaScript", "Typescript", "React.js", "Next.js", "HTML", "CSS"],
    },
    {
      title: "Backend",
      list: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Redis"],
    },
    {
      title: "Libraries & Tools",
      list: [
        "Redux Toolkit",
        "RTK Query",
        "TanStack Query",
        "Tailwind CSS",
        "Material UI",
        "Shadcn UI",
        "React Hook Form",
        "Formik",
        "Zod",
        "Yup",
        "Socket.io",
        "Algolia",
        "Typesense",
        "Mongoose",
        "Sequelize",
        "Multer",
        "Joi",
        "Jest",
        "Git",
        "RESTful API",
        "Payment Gateway Integration",
        "Postman",
        "Jira",
      ],
    },
  ],

  projects: [
    {
      title: "Auxee - Secure Internal Generative AI Chat",
      techStack: [
        "TypeScript",
        "Next.js",
        "Material UI",
        "Redux Toolkit",
        "RTK Query",
        "Node.js",
        "MongoDB",
        "PostgreSQL",
        "Redis",
        "AWS",
      ],
      description:
        "Auxee is a secure internal Generative AI chat. It's designed to boost team productivity by automating research, synthesizing knowledge from internal/external sources, and drafting documents. It provides strategic, competitive, and regulatory insights via an intuitive chat interface.",
      link: "https://auxee.com",
    },
    {
      title: "MySouq - KSA Social eCommerce Platform",
      techStack: [
        "React.js",
        "Next.js",
        "Material UI",
        "Redux Toolkit",
        "RTK Query",
        "React Hook Form",
        "Zod",
      ],
      description:
        "MySouq is a B2C social commerce platform built on video-driven sales. It blends entertainment and shopping via live-show broadcasts and product ads, offering vendors and influencers a dynamic channel to boost engagement and market presence.",
      link: "https://mysouq.com",
    },
    {
      title: "Employee Hub – Staff Management Platform",
      techStack: [
        "TypeScript",
        "React.js",
        "Tailwind CSS",
        "Shadcn UI",
        "RTK Query",
        "React Hook Form",
        "Zod",
      ],
      description:
        "A comprehensive multi-user internal Admin Panel (Employee Hub) to centralize company management. It allows HR to manage records and attendance, enables managers to assign teams and track progress, and provides a self-service portal for employees to handle check-ins/outs and manage leave.",
      link: "https://github.com/shazamshakeel/Employee-Hub",
    },
    {
      title: "TeamWork – Team Collaboration Platform",
      techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "MUI",
        "Redux Toolkit",
        "React DnD",
        "Google Storage",
      ],
      description:
        "TeamWork is a web-based project management tool inspired by Trello, enabling teams to streamline workflows, organize tasks visually, and track project progress with real-time collaboration and drag-and-drop functionality.",
      link: "https://github.com/shazamshakeel/TeamWork",
    },
    {
      title: "Exam Ground – Online Exam Platform",
      techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Material UI",
        "Redux Toolkit",
        "Draw.io",
        "Google Storage",
      ],
      description:
        "A comprehensive online examination platform for assessment and student management. Key features include real-time proctoring to detect cheating, instant auto-grading for MCQs, and teacher-enabled subjective grading. It also functions as a central hub for courses, assignments, notes, and features an integrated diagram tool.",
      link: "https://github.com/shazamshakeel/Exam-Ground",
    },
    {
      title: "Yallabid – Online Auction Platform",
      techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Material UI",
        "Redux Toolkit",
        "Socket.io",
      ],
      description:
        "A dedicated luxury goods auction platform for the UAE, built with a focus on real-time interaction. The system integrates live auction streaming and a real-time bidding engine, complete with a custom scheduling system to synchronize the live video feed with displayed products and manage user bids instantly.",
      link: "https://yallabid.com",
    },
  ],

  certificates: [
    {
      title: "The Complete Web Developer",
      issuer: "Zero to Mastery",
      url: "",
    },
    {
      title: "Introduction to Node.js",
      issuer: "Frontend Masters",
      url: "https://static.frontendmasters.com/ud/c/a114398810/ehyaBEyiou/node-js-v3.pdf",
    },
    {
      title: "Complete Intro to Web Development",
      issuer: "Frontend Masters",
      url: "https://static.frontendmasters.com/ud/c/a114398810/yBlPKcpCER/web-development-v3.pdf",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "FreeCodeCamp",
      url: "https://www.freecodecamp.org/certification/shazam%20shakeel/javascript-algorithms-and-data-structures",
    },
    {
      title: "Responsive Web Design",
      issuer: "FreeCodeCamp",
      url: "https://www.freecodecamp.org/certification/shazam%20shakeel/responsive-web-design",
    },
    {
      title: "WordPress",
      issuer: "DigiSkills.pk",
      url: "https://www.linkedin.com/in/shazamshakeel/details/certifications/1760134081328/single-media-viewer/?profileId=ACoAACqcQVkBKTRslopJcCbHUAgxTpA1wz2OWAc",
    },
  ],
} as const;
