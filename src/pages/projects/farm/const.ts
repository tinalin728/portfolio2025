import type { ProjectCard } from "../types";
import type { FarmDetail, Problem } from "./type";

export const FARM_SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "research", label: "Research" },
  { id: "design", label: "Design" },
  { id: "reflection", label: "Reflection" },
] as const;

const OVERVIEW = {
  final: [
    {
      title: "Consistent visual identity",
      description:
        "Developed a refreshed style guide with clear hierarchy and accessible colors.",
      images: { src: "/assets/tims/message.png", alt: "error message" },
    },
    {
      title: "Full website redesign",
      description:
        "Rebuilt over ten pages with a cohesive and scalable layout.",
      images: {
          src: "/assets/tims/button_new.png",
          alt: "original offer detail screen",
        },
    },
    {
      title: "Simplified navigation",
      description:
        "Reorganized sitemap to make it easier for schools and families to find information.",
      images: { src: "/assets/tims/message.png", alt: "error message" },
  
    },

    {
      title: "New content and structure",
      description:
        "Introduced dedicated pages for Education, Gardens, and Community to highlight programs and impact.",
      images: {
          src: "/assets/tims/menu_new.png",
          alt: "Offer Details",
        }
    },
  ],
} satisfies FarmDetail["overview"];

const FARM_IMPACT = [
  {
    id: "engagementTime",
    display: "↑ 86%",
    label: "Avg engagement time per user",
    before: "1m 12s",
    after: "2m 08s",
  },
  {
    id: "viewsPerUser",
    display: "↑ 89.12%",
    label: "Views per active user",
    before: "2.74",
    after: "5.19",
  },
  {
    id: "eventCount",
    display: "↑ 81.62%",
    label: "Event count per active user",
    before: "8.27",
    after: "15.02",
  },
  {
    id: "scroll",
    display: "↑ 194.5%",
    label: "Scroll Depth",
    before: "2,090",
    after: "6,155",
  },
] as const;
export const FARM_FEATURES = [
  {
    title: "Redefined visual",
    description:
      "Developed a refreshed style guide with clear hierarchy and accessible colors.",
    images: { src: "/assets/farm/styleguide.png", alt: "style guide" },
  },
  {
    title: "Full website redesign with new pages and content",
    description:
      "Rebuilt over 10 pages with a cohesive and scalable layout.",
    images: { src: "/assets/farm/redesign.png", alt: "redesign images" },   
  },
] as const;

export const UX_AUDIT_PROBLEMS: readonly Problem[] = [
  {
    title: "Content Inconsistency",
    description:
      "Outdated or duplicate info, titles not matching content, key details missing.",
    image: { src: "/assets/farm/false.svg", alt: "Content inconsistency svg" },
  },
  {
    title: "Poor Hierarchy",
    description:
      "Light body weights, oversized button text, unclear type scale and hierarchy.",
    image: { src: "/assets/farm/pic.svg", alt: "Readability and hierarchy issues svg" },
  },
  {
    title: "Responsive Design Issues",
    description:
      "Cluttered desktop, weak spacing, mobile not optimized.",
    image: { src: "/assets/farm/phone.svg", alt: "Layout and responsiveness issues svg" },
  },
  {
    title: "Confusing Navigation",
    description:
      "Unclear labels and structure, key pages hard to find.",
    image: { src: "/assets/farm/tag.svg", alt: "Navigation confusion example svg" },
  },
] as const

export  const SWATCHES = [
    { name: "Harvest Red", hex: "#C14A2B", text: "text-white-100" },
    { name: "Soil Plum", hex: "#3F1B2B", text: "text-white-100" },
    { name: "Cream Mist", hex: "#FAF8F5", text: "text-[#3F1B2B]" },
    { name: "Oat Beige", hex: "#F4EDE3", text: "text-[#3F1B2B]" },
  ] as const;


export const FARM_DETAIL: FarmDetail = {
  id: "stable-harvest-farm-redesign",
  title: "Stable Harvest Farm Website Redesign",
  category: "Redesigned and built a non profit website for real users",
  cover: "/assets/farm/cover.webm",
  coverHover: "/assets/farm/farm-video.webm",
  intro: {
    title: "Redesigning Stable Harvest Farm's Website",
    subtitle: "case study & web development",
    timeline: "3 months, Aug-Oct 2025",
    role: "UX/UI Designer, Visual Designer, Web Developer",
    tools: "Figma, Adobe Illustrator, WordPress, CSS/JS",
    src: "/assets/tims/cover.jpg",
  },

  overview: OVERVIEW,
  problems: UX_AUDIT_PROBLEMS,
  impact: FARM_IMPACT,
  features: FARM_FEATURES,
  palette: SWATCHES
};

export const FARM_CARD: ProjectCard = {
  id: FARM_DETAIL.id,
  title: FARM_DETAIL.title,
  category: FARM_DETAIL.category,
  cover: FARM_DETAIL.cover,
  coverHover: FARM_DETAIL.coverHover,
};
