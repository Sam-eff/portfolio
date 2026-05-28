// Static project data — edit freely, no backend needed

export const projects = [
  {
    id: 1,
    title: "Giztrack",
    description:
      "A full-featured shop management dashboard with inventory tracking, sales reports, and a modern settings experience. Built with React and Django REST Framework.",
    technologies: ["React", "Django", "Django REST", "Tailwind CSS", "PostgreSQL"],
    category: "Web App",
    github_url: "https://github.com/sam-eff/giztrack",
    live_url: "https://giztrack.com",
    featured: true,
    img: "/giz-img.png",
    color: "from-[#007BFF] to-[#0051A8]",
  },
  {
    id: 2,
    title: "Freelancer Dashboard",
    description:
      "A clean invoicing and client management app for freelancers. Features invoice generation, client tracking, and revenue analytics.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Django", "Django REST"],
    category: "Web App",
    github_url: "https://github.com/sam-eff/freelance-dashboard",
    live_url: "",
    featured: true,
    img: "/dash-img.png",
    color: "from-[#00E5FF] to-[#007BFF]",
  },
  {
    id: 3,
    title: "Second Brain",
    description:
      "Second Brain is a sleek, AI-enhanced note-taking app built with React. It helps you capture, organize, and make sense of your thoughts — right in your browser.",
    technologies: ["React", "React-Bootstrap", "Zustand", "OpenRouter"],
    category: "Web App",
    github_url: "https://github.com/sam-eff",
    live_url: "https://second-brain-two-theta.vercel.app",
    featured: false,
    img: "/pro-img.png",
    color: "from-[#0051A8] to-[#00E5FF]",
  },
  {
    id: 4,
    title: "Autohire Car Rental",
    description:
      "A car rental platform built with React and Django REST Framework. Features car listing, booking, and user management.",
    technologies: ["React", "Django", "Django REST", "Tailwind CSS", "SQLite"],
    category: "Full-Stack",
    github_url: "https://github.com/sam-eff",
    live_url: "https://auto-hire.netlify.app",
    featured: false,
    img: "/pro-img1.png",
    color: "from-[#F24E1E] to-[#FF7262]",
  },
  {
    id: 5,
    title: "Jewelry Store UI Design",
    description:
      "A Figma-based premium design UI of an online jewelry store",
    technologies: ["Figma", "Design Tokens", "Prototyping"],
    category: "Design",
    github_url: "",
    live_url: "https://www.figma.com/design/KzbHJBHXnU2ph0zvz2Psub/Web?node-id=2001-1316&t=jkOLjTv3hs3K9qxE-1",
    featured: false,
    img: "/pale-img.png",
    // color: "from-[#F24E1E] to-[#FF7262]",
  },
  {
    id: 6,
    title: "Voltlane",
    description:
    "Voltlane is a highly refined, premium multi-category online megastore designed for a wide variety of goods including fashion, home essentials, electronics, lifestyle goods, and health & beauty products.",
    technologies: ["HTML5", "CSS", "JavaScript", "JQuery (Ajax)", "Django", "SQLite"],
    category: "Full-Stack",
    github_url: "https://github.com/sam-eff/voltlane",
    live_url: "",
    featured: false,
    img: "/pro-img2.png",
    color: "from-[#092E20] to-[#007BFF]",
  },
  {
    id: 7,
    title: "Music Player UI Design System",
    description:
      "A compact design system for a modern music player, covering playback controls, library states, visual hierarchy, and reusable Figma components.",
    technologies: ["Figma", "Design Tokens", "Prototyping"],
    category: "Design",
    github_url: "",
    live_url: "",
    featured: true,
    img: "/mus-fig.png",
    color: "from-[#F24E1E] to-[#FF7262]",
  },
  {
    id: 9,
    title: "Elegance | Haute Joaillerie & Fine Jewelry",
    description:
      "Elegance is a digital jewelry atelier presenting bespoke precious designs. The system provides an end-to-end shopping experience, featuring a dynamic collections catalog, product reviews, a real-time synchronized shopping cart and wishlist, secure multi-channel payment integrations, and a user profile management dashboard.",
    technologies: ["React (Vite)", "Django", "Django REST", "Custom CSS", "SQLite", "Stripe", "Zustand"],
    category: "Full-Stack",
    github_url: "https://github.com/Sam-eff/elegant-jewelry-store",
    live_url: "",
    featured: true,
    img: "/elegance-img.png",
    color: "from-[#F24E1E] to-[#FF7262]",
  },

];

export const categories = ["All", "Full-Stack", "Web App", "Design"];
