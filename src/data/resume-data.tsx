import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Shazam Shakeel",
  initials: "Shazam",
  location: "Based in Pakistan 🇵🇰",
  about: "Software Engineer | Full Stack Developer",
  description:
    "Full Stack Software Engineer with 3+ years in the tech industry. Worked on B2C, e-commerce, enterprise SaaS, and FinTech applications.",
  summary:
    "I’m Shazam Shakeel, a Software Engineer and Full Stack Developer with over three years of experience building modern, high-quality web applications for businesses and startups. I’ve worked on eCommerce, SaaS, and enterprise platforms, helping companies enhance their digital presence, streamline operations, and provide smoother user experiences.\n\nAt Vintega Solutions, I led the development of large-scale platforms for clients in the Middle East (KSA and UAE), managing a small team and helping improve performance, security, and customer engagement. I also designed admin panels, search systems, and analytics dashboards that enabled teams to make smarter, data-driven decisions.\n\nI’m passionate about creating products that are visually appealing, user-friendly, and business-focused—whether that involves boosting website performance, developing new features, or automating processes. My goal is to help companies and clients turn ideas into reliable, impactful digital solutions that produce real results.",
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
          title: "Full Stack Developer",
          start: "May 2025",
          end: "Present",
          description: "",
          bulletPoints: [
            "Led frontend development of two large-scale B2C platforms for KSA & UAE markets, leading a team of 5 and achieved Lighthouse scores of <strong>85+ (Performance)</strong> and <strong>100 (SEO)</strong>, by utilizing advanced <strong>Next.js</strong> features (SSR, Partial Hydration, Server-Side Authentication).",
            "Engineered a facet-based search service for the eCommerce platform by migrating from MongoDB to <strong>Typesense</strong> (an in-memory engine), reducing query response times to <strong>sub-200ms</strong> and enabling typo-tolerant, instant product discovery.",
            "Developed a live streaming module on the frontend of an auction site using <strong>HLS</strong> and <strong>WebSockets</strong>, reliably supporting <strong>10,000+ concurrent users</strong> with real-time bidding, chat, and notifications, improving session duration by <strong>15%</strong>.",
            "Built a four-level deep Role Based Access Control backend system for secure authentication and authorization with customizable permissions, providing precise access control for users and administrators across different modules and data.",
          ],
        },
        {
          title: "Frontend Developer",
          start: "May 2022",
          end: "Apr 2025",
          description: "",
          bulletPoints: [
            "Designed a comprehensive, personalized Admin Panel for Merchants, Vendors Management, and Marketing/Sales Teams, which contributed to expanding market reach and increasing merchant adoption by <strong>30%</strong> through tailored user experiences.",
            "Integrated Google Tag Manager and Google Analytics for granular customer journey tracking, and built a custom administrative UI to visualize key insights (<strong>sales funnels, heat maps</strong>), enabling data-driven personalization strategies.",
            "Optimized complex multi-step form-handling system with layered, adaptive validation logic for interdependent fields, ensuring <strong>100% data integrity</strong> and scalability for high-volume data submissions.",
            "Contributed to context-aware <strong>AI Chat</strong>, implementing seamless integration with the MS Teams file selection service, notebook drafts sharing and inline spreadsheet editor for direct, prompt-driven data manipulation.",
            "Integrated secure <strong>payment gateways (Bank Alfalah, Checkout)</strong> and contributed to the open-source Bank Alfalah Payment Integration library, ensuring reliable and seamless transaction processing.",
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
            "Designed and built scalable, high-performance web applications, prioritizing responsive user interfaces and seamless UX.",
            "Utilized <strong>Sequelize ORM</strong> for efficient data modeling, schema management, and interaction with <strong>PostgreSQL</strong> databases.",
            "Integrated third-party APIs, including <strong>Google Maps</strong>, to deliver advanced location-based features and enhance application functionality.",
            "Optimized application state management through <strong>Redux Toolkit</strong> implementation, improving code maintainability and performance across complex front-end applications.",
            "Gained practical experience with the organization's <strong>SDLC</strong>, Agile environment, tools and technologies, contributing to real-world development cycles.",
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
        "Co-created an open-source payment integration library for Bank Alfalah Pakistan, addressing the lack of developer-friendly documentation by providing a ready-to-use React solution.",
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
        "MySouq is a social eCommerce platform built on video-driven sales. It blends entertainment and shopping via live-show broadcasts and product ads, offering vendors and influencers a dynamic channel to boost engagement and market presence.",
      link: "https://mysouq.com",
    },
    {
      title: "Employee Hub – Human Resource Management Platform",
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
