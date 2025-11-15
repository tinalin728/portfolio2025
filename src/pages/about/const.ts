export type Media = { src: string, alt: string }
export type ExperienceItem = {
  company: string
  role: string
  time: string
  logoSrc: string  
  alt: string
  content: string[]
  logoClass?: string
  companyClass?:string
}
export type AboutMeta = {
  title: string;
  description: string;
  image: string; 
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
    role: "Multimedia Web Designer & Developer",
    time: "July 2025 - Present",
    logoSrc: "/assets/about/shf.svg",
    alt: "Stable Harvest Farm logo",
    content: [
      "Managing end-to-end digital experience across web, social, and email.",
      "Led a customized WordPress redesign and rebuilt the information architecture across 10 plus pages, increasing average engagement time by 86%, views per user by 89.12% and events per user by 81.62%.",
    ],
    logoClass: "w-[59px] lg:translate-x-[3.4rem] lg:group-hover:translate-x-[4.2rem]",
    companyClass: "lg:group-hover:translate-x-[4.1rem]"
  },
  {
    company: "Simuhealth",
    role: "Web Development & QA Intern",
    time: "May - July 2025",
    logoSrc: "/assets/about/simu.svg",
    alt: "Simnuhealth logo",
    content: [
      "Performed quality assurance testing to detect and fix UI bugs in a TypeScript and Remix-based application, collaborating with cross-functional team members",
    ],
     logoClass: "w-12 lg:translate-x-[3rem] lg:group-hover:translate-x-[3.5rem]",
     companyClass: "lg:group-hover:translate-x-14"
  },
  {
    company: "Convergence & Pixel Ramen",
    role: "Media Design Intern",
    time: "May - July 2025",
    logoSrc: "/assets/about/convergence.svg",
    alt: "Convergence & Pixel Ramen logo",
    content: [
      "Created on brand social graphic assets and videos using Illustrator, Photoshop, and After Effects.",
    ],
    logoClass: "w-20 lg:translate-x-[5.2rem] lg:group-hover:translate-x-[5.5rem]",
    companyClass: "lg:group-hover:translate-x-[5.5rem]"
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
