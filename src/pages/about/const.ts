export type Media = { src: string, alt: string }
export type ExperienceItem = {
  company: string
  role: string
  time: string
  logoSrc: string  
  alt: string
  content: string[]
  url?: string
}
export type AboutMeta = {
  title: string;
  description: string;
  image: string; // path under /public
};

export const ABOUT_META = {
  title: "About",
  description:
    "Designer and developer in Vancouver, focused on UX, UI, and web development. I build accessible, fast, and thoughtful products.",
  image: "/assets/about/iceland.png",
} satisfies AboutMeta;


export const EXPERIENCES = [
  {
    company: "Stable Harvest Farm",
    role: "Designer & Web Developer",
    time: "July 2025 - Present",
    logoSrc: "/assets/about/iceland.png",
    alt: "Stable Harvest Farm logo",
    content: [
      "Defined a cohesive design system, colors, typography, and components, to improve consistency across the site.",
      "Led a customized WordPress redesign and rebuilt the information architecture across 10+ pages.",
    ],
  },
  {
    company: "Simuhealth",
    role: "Front-End Developer & Quality Assurance Intern",
    time: "May - July 2025",
    logoSrc: "/assets/about/iceland.png",
    alt: "Simnuhealth logo",
    content: [
      "Ran QA with TypeScript and Remix, fixed styling and functional issues, raised accessibility quality.",
      "Supported designers with consistent components, UX research, and early product ideation."
    ],
  },
  {
    company: "Convergence & Pixel Ramen",
    role: "Media Design Intern",
    time: "May - July 2025",
    logoSrc: "/assets/about/iceland.png",
    alt: "Convergence & Pixel Ramen logo",
    content: [
      "Created on brand social graphic assets and videos using Illustrator, Photoshop, and After Effects.",
    ],
  },
] as const

export const TOOLS = [
    { src: "/assets/about/figma.svg", alt: "Figma" },
    {  src: "/assets/about/ai.svg", alt: "Illustrator" },
    { src: "/assets/about/ps.svg", alt: "Photoshop" },
    {  src: "/assets/about/ae.svg", alt: "After Effects" },
    {  src: "/assets/about/html.svg", alt: "HTML" },
    {  src: "/assets/about/css.svg", alt: "CSS" },
    {  src: "/assets/about/js.svg", alt: "JavaScript" },
    {  src: "/assets/about/react.svg", alt: "React" },
    {  src: "/assets/about/ts.png", alt: "TypeScript" },
    {  src: "/assets/about/tailwindcss.png", alt: "Tailwindcss" },
    {  src: "/assets/about/wordpress.png", alt: "WordPress" },
]
