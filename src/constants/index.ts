import { Globe, Smartphone, Gamepad2, Link2, Cloud, Code2, Server, Cpu, Layers, Users, Briefcase, MessageSquare } from "lucide-react";

/* Navigation links */
export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Technologies", path: "/technologies" },
  { label: "Engagement Models", path: "/engagement-models" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
] as const;

/* Services */
export const SERVICES = [
  {
    title: "Web Development",
    description: "Scalable, responsive web applications built with cutting-edge frameworks. From SPAs to enterprise portals.",
    icon: Globe,
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile experiences that delight users across iOS and Android.",
    icon: Smartphone,
  },
  {
    title: "Game Development",
    description: "Immersive gaming experiences powered by modern engines and real-time multiplayer capabilities.",
    icon: Gamepad2,
  },
  {
    title: "Blockchain Solutions",
    description: "Decentralized applications, smart contracts, and Web3 integrations for the next generation of the internet.",
    icon: Link2,
  },
  {
    title: "Cloud & Backend Systems",
    description: "Robust cloud infrastructure, microservices architecture, and scalable backend systems.",
    icon: Cloud,
  },
] as const;

/* Technology stacks */
export const TECH_CATEGORIES = [
  {
    category: "Frontend",
    icon: Code2,
    technologies: ["React", "Next.js", "Angular", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: Server,
    technologies: ["Node.js", "Express", "NestJS", "Golang", "Python"],
  },
  {
    category: "Mobile",
    icon: Smartphone,
    technologies: ["React Native", "Flutter"],
  },
  {
    category: "Emerging",
    icon: Cpu,
    technologies: ["Blockchain", "Solidity", "Web3.js"],
  },
] as const;

/* Engagement Models */
export const ENGAGEMENT_MODELS = [
  {
    title: "Project-Based Development",
    description: "End-to-end project delivery with defined scope, timeline, and budget. Ideal for businesses with clear requirements.",
    icon: Layers,
    features: ["Fixed scope & timeline", "Dedicated project manager", "Milestone-based delivery", "Post-launch support"],
  },
  {
    title: "Dedicated Resources",
    description: "Augment your team with skilled developers who work exclusively on your projects as an extension of your team.",
    icon: Users,
    features: ["Full-time dedicated team", "Direct communication", "Flexible scaling", "Monthly billing"],
  },
  {
    title: "IT Consultancy",
    description: "Strategic technology consulting to help you make informed decisions about architecture, tools, and processes.",
    icon: Briefcase,
    features: ["Architecture review", "Technology assessment", "Process optimization", "Growth strategy"],
  },
] as const;

/* Contact info */
export const CONTACT_INFO = {
  email: "tribirdsitservices@gmail.com",
  phone: "9589288541",
} as const;

export const CONTACT_INFO_2 = {
  email: "dollymalviya971@gmail.com",
  phone: "8128414841",
} as const;

/* Service dropdown options for contact form */
export const SERVICE_OPTIONS = [
  "Web Development",
  "Mobile App Development",
  "Game Development",
  "Blockchain Solutions",
  "Cloud & Backend Systems",
  "IT Consultancy",
  "Other",
] as const;

/* Client logos placeholder names */
export const CLIENT_LOGOS = [
  "Ionaught Technologies", "SNDK", "VerdeVidaenergies", "TakeOff", "VastraVilla", "Many More..."
] as const;
