export const links = {
  email: "eagradnik@gmail.com",
  calendly: "https://calendly.com/zenda-websites/30min?back=1&month=2025-04",
  whatsapp: "https://wa.me/5491133750973",
  github: "https://github.com/Ezequielagradnik",
  linkedin: "https://www.linkedin.com/in/ezequiel-agradnik-a6a790331/",
}

export type Experience = {
  company: string
  role: string
  from: string
  to: string | null // null = present
  location?: string
  type?: "Part-time" | "Freelance" | "Co-founder"
  logo?: string
  initials?: string // shown when there is no logo
}

export const experience: Experience[] = [
  {
    company: "Satellites on Fire",
    role: "Automation Developer",
    from: "2026",
    to: null,
    location: "Argentina",
    type: "Part-time",
    logo: "/images/satellites-on-fire-logo.png",
  },
  {
    company: "Brandon Network",
    role: "CTO",
    from: "2025",
    to: null,
    location: "USA",
    type: "Part-time",
    logo: "/images/brandon-logo.svg",
  },
  {
    company: "PADI",
    role: "Web Developer & Process Automation",
    from: "2026",
    to: null,
    location: "Argentina",
    logo: "/images/padi-logo.png",
  },
  {
    company: "Ladder Propiedades",
    role: "Process Automation",
    from: "2026",
    to: null,
    location: "Argentina",
    type: "Freelance",
    logo: "/images/ladder.png",
  },
  {
    company: "Zenda",
    role: "Co-founder & CTO",
    from: "2025",
    to: "2025",
    location: "Argentina",
    type: "Co-founder",
    logo: "/images/zenda-logo.png",
  },
  {
    company: "LinkUp",
    role: "Full Stack Developer",
    from: "2025",
    to: "2025",
    location: "Argentina",
    type: "Freelance",
    logo: "/images/linkup-logo.png",
  },
  {
    company: "OLB Motors",
    role: "Web Developer",
    from: "2024",
    to: "2024",
    location: "Dubai",
    type: "Freelance",
    logo: "/images/olb-motors-logo.png",
  },
  {
    company: "Energy Humanities",
    role: "Web Developer",
    from: "2024",
    to: "2024",
    location: "USA",
    type: "Freelance",
    logo: "/images/energy-humanities-logo.png",
  },
  {
    company: "Tarjeta Control",
    role: "Web Developer",
    from: "2024",
    to: "2024",
    location: "Argentina",
    type: "Freelance",
    logo: "/images/tarjeta-control-logo.png",
  },
]

// Companies shown in the "Now" card, in this order.
export const now = ["Satellites on Fire", "Brandon Network", "PADI"]

export const skills: Record<string, string[]> = {
  Languages: ["JavaScript", "TypeScript", "Python", "C#"],
  Frontend: ["React", "Next.js", "Tailwind CSS", "HTML / CSS", "Framer Motion"],
  "Backend & Databases": ["Node.js", "Express.js", "Python (FastAPI)", "PostgreSQL", "MongoDB", "NoSQL"],
  "Automation & AI": ["n8n", "Claude & MCP", "Agentic AI", "ManyChat", "REST APIs & Integrations", "Web Scraping"],
  "DevOps & Cloud": ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "AWS Lambda", "Vercel", "Git & GitHub"],
  Cybersecurity: ["Network Security", "Web App Security (OWASP)", "Penetration Testing", "Linux Hardening", "Cisco Networking"],
  CMS: ["WordPress", "Shopify", "Wix", "Tiendanube"],
}

export const serviceKeys = ["fullStack", "api", "devops", "automation", "database", "testing"] as const
