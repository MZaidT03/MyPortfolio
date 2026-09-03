import imgProject1 from "../assets/project1.png";
import imgEcommerce from "../assets/ecommerce_mockup.jpg";
import imgDashboard from "../assets/dashboard_mockup.jpg";
import imgMobile from "../assets/mobile_mockup.jpg";
import imgChat from "../assets/chat_mockup.jpg";
import imgAs2Hero from "../assets/as2_hero_male.jpg";
import imgAbdullahGym from "../assets/abdullah_gym.png";

const portfolioData = {
  name: "Muhammad Zaid Tahir",
  role: "Creative Developer & Technical Founder",
  coordinates: "32.1877° N, 74.1945° E",
  location: "Gujranwala, Pakistan",
  edition: "VOL. 26 // EDITION NO. 01",
  status: "AVAILABLE FOR SELECT COMMISSIONS",
  contact: "muhammadzaidtahir90@gmail.com",
  socials: {
    github: "https://github.com/MZaidT03",
    linkedin: "https://www.linkedin.com/in/zaid-tahir-0b0933159/",
    agency: "https://codeinntech.netlify.app/",
  },
  metrics: [
    { value: "04+", label: "Years Experience", description: "Engineering modern web & mobile architectures" },
    { value: "25+", label: "Completed Deployments", description: "Production systems delivered worldwide" },
    { value: "99.8%", label: "Uptime & Quality", description: "High-integrity, tested codebases" },
    { value: "100%", label: "Client Satisfaction", description: "Bespoke digital partnerships" },
  ],
  about: {
    heroStatement: "CRAFTING BESPOKE DIGITAL REALMS AT THE INTERSECTION OF RIGOROUS ENGINEERING & BRUTALIST AESTHETICS.",
    paragraph1:
      "I am Muhammad Zaid Tahir, a Creative Developer and Software Engineer based in Gujranwala, Pakistan. I operate where architectural precision meets avant-garde editorial aesthetics. Rather than building mundane interfaces, I design high-impact digital experiences that evoke emotion, establish brand authority, and scale without friction.",
    paragraph2:
      "My craft is rooted in the modern React and React Native ecosystems, extending into distributed backend services, real-time sync engines, and WebGL/SVG shader interactions. As the founder of CodeInn' Tech, I collaborate with ambitious founders and design studios globally to translate raw vision into formidable, award-winning software.",
  },
  brand: {
    name: "CodeInn' Tech",
    tagline: "High-Caliber Digital Craft & Engineering Studio",
    badge: "FOUNDER & LEAD ARCHITECT",
    description:
      "CodeInn' Tech is an independent creative development practice dedicated to the realization of modern web applications, cross-platform mobile ecosystems, and bespoke visual design systems. We engineer digital artifacts characterized by fluid micro-interactions, robust technical resilience, and uncompromising aesthetics.",
    website: "https://codeinntech.netlify.app/",
    services: [
      "Bespoke Web Applications (React / Next.js)",
      "Cross-Platform Mobile Engineering (React Native / Expo)",
      "High-Performance Architecture & Cloud APIs",
      "Interactive Experiences & Shader Design",
    ],
  },
  skillCategories: [
    {
      index: "01",
      title: "Core Web & Frontend",
      skills: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5/CSS3", "Framer Motion"],
    },
    {
      index: "02",
      title: "Mobile & Runtimes",
      skills: ["React Native", "Expo", "SQLite", "Mobile Gestures", "Cross-Platform Sync"],
    },
    {
      index: "03",
      title: "Backend & Systems",
      skills: ["Node.js", "Supabase", "PostgreSQL", "Firebase", "GraphQL", "REST APIs"],
    },
    {
      index: "04",
      title: "Tooling & Design Systems",
      skills: ["Docker", "Git & GitHub", "Figma", "Vite", "WebGL / Shaders", "CI/CD Workflows"],
    },
  ],
  // Flat list for physics drag pill experience
  allSkills: [
    { name: "React", category: "Core Web", level: "Primary" },
    { name: "React Native", category: "Mobile", level: "Primary" },
    { name: "Next.js", category: "Framework", level: "Primary" },
    { name: "TypeScript", category: "Language", level: "Primary" },
    { name: "JavaScript (ES6+)", category: "Language", level: "Primary" },
    { name: "Tailwind CSS", category: "Styling", level: "Primary" },
    { name: "Node.js", category: "Backend", level: "Secondary" },
    { name: "Supabase", category: "Database", level: "Secondary" },
    { name: "PostgreSQL", category: "Database", level: "Secondary" },
    { name: "Firebase", category: "Cloud", level: "Secondary" },
    { name: "GraphQL", category: "API", level: "Secondary" },
    { name: "Expo", category: "Mobile", level: "Secondary" },
    { name: "Docker", category: "DevOps", level: "Secondary" },
    { name: "Git & GitHub", category: "Version Control", level: "Primary" },
    { name: "Figma", category: "Design", level: "Secondary" },
    { name: "SQLite", category: "Mobile DB", level: "Secondary" },
    { name: "WebGL / SVG", category: "Creative Code", level: "Primary" },
  ],
  projects: [
    {
      index: "01",
      title: "AS2 Wholesale Atelier",
      category: "High-Fashion B2B & Manufacturing",
      year: "2025",
      description:
        "A high-fashion digital flagship and B2B wholesale platform for private-label couture and UK apparel manufacturing (Sharma London Ltd). Engineered with brutalist tailoring presentation, an interactive 50+ master silhouettes catalogue, dynamic showroom aesthetics, direct enquiry desk, and lightning-fast client-side navigation.",
      tech: ["React", "Tailwind CSS", "Vite", "Editorial UI", "B2B E-Commerce"],
      image: imgAs2Hero,
      liveUrl: "https://as2-wholesale.netlify.app/",
      githubUrl: "https://github.com/MZaidT03",
      stats: { metric: "50+", label: "Master Silhouettes & Styles" },
    },
    {
      index: "02",
      title: "Construction Management Platform",
      category: "Enterprise Web Application",
      year: "2025",
      description:
        "An enterprise-scale management system engineered for general contractors and real estate builders. Features real-time inventory tracking, multi-phase milestone invoicing, dynamic subcontractor dispatch, and secure cloud sync powered by Supabase and PostgreSQL.",
      tech: ["React", "Supabase", "PostgreSQL", "Tailwind CSS", "Vite"],
      image: imgProject1,
      liveUrl: "https://github.com/MZaidT03",
      githubUrl: "https://github.com/MZaidT03",
      stats: { metric: "35%", label: "Workflow Efficiency Gain" },
    },
    {
      index: "03",
      title: "Abdullah Gym 1 Fitness Platform",
      category: "Health & Fitness Web Portal",
      year: "2025",
      description:
        "A high-energy digital web platform and member portal engineered for Abdullah Gym 1 in Gujranwala. Designed with dedicated separate gender shifts ensuring 100% privacy, certified master trainer showcases, interactive service modules, and seamless mobile PWA capabilities.",
      tech: ["Next.js", "React", "Tailwind CSS", "PWA", "TypeScript"],
      image: imgAbdullahGym,
      liveUrl: "https://abdullahgym1.online/",
      githubUrl: "https://github.com/MZaidT03",
      stats: { metric: "100%", label: "Private Gender Shift Scheduling" },
    },
    {
      index: "04",
      title: "Aurora Haute Couture Storefront",
      category: "Luxury E-Commerce System",
      year: "2025",
      description:
        "An ultra-refined digital flagship designed for dark luxury apparel. Delivers sub-second server-rendered catalog navigation, bespoke editorial transitions, custom currency conversion, and a streamlined Stripe checkout architecture.",
      tech: ["Next.js", "Stripe", "GraphQL", "Tailwind CSS", "TypeScript"],
      image: imgEcommerce,
      liveUrl: "https://github.com/MZaidT03",
      githubUrl: "https://github.com/MZaidT03",
      stats: { metric: "99/100", label: "Lighthouse Performance" },
    },
    {
      index: "05",
      title: "Apex Real-Time Chat & Spaces",
      category: "Cross-Platform Communication",
      year: "2024",
      description:
        "High-concurrency chat ecosystem running across desktop and mobile. Implements end-to-end WebSocket synchronization, encrypted group rooms, offline queue caching, and instant media previews.",
      tech: ["React Native", "Firebase", "Expo", "WebSockets", "Node.js"],
      image: imgChat,
      liveUrl: "https://github.com/MZaidT03",
      githubUrl: "https://github.com/MZaidT03",
      stats: { metric: "<45ms", label: "Real-Time Message Latency" },
    },
    {
      index: "06",
      title: "Zenith Capital Terminal",
      category: "Fintech & Data Visualization",
      year: "2024",
      description:
        "High-density analytics workstation rendering millions of time-series records. Features interactive financial charting, portfolio risk telemetry, dark luxury theme switches, and dynamic SVG vector graphs.",
      tech: ["React", "D3.js", "Node.js", "TypeScript", "Tailwind CSS"],
      image: imgDashboard,
      liveUrl: "https://github.com/MZaidT03",
      githubUrl: "https://github.com/MZaidT03",
      stats: { metric: "60 FPS", label: "Data Render Frame Rate" },
    },
    {
      index: "07",
      title: "Pulse Biometric Fitness Companion",
      category: "Native Mobile Experience",
      year: "2024",
      description:
        "An intuitive mobile companion app engineered with React Native and Expo. Seamlessly tracks heart rate variability, workout progression, sleep restoration cycles, and offline SQLite telemetry with native haptics.",
      tech: ["React Native", "Expo", "SQLite", "Native Animations"],
      image: imgMobile,
      liveUrl: "https://github.com/MZaidT03",
      githubUrl: "https://github.com/MZaidT03",
      stats: { metric: "100%", label: "Offline First Architecture" },
    },
  ],
};

export default portfolioData;
