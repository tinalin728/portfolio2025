import type { ProjectCard } from "../types"
import type { SolarDetail } from "./type"

export const SOLAR_SECTIONS = [
  { id: "features", label: "Features" },
  { id: "reflection", label: "Reflection" },
] as const;

export const SOLAR_DETAIL: SolarDetail = {
  id: 'solar-system',
  category: 'Making space exploration feel simple and fun for users',
  title: 'Solar System Interactive Website',
  cover: '/assets/solar/cover.webm',
  coverHover: '/assets/solar/solar-cover-hover.png',

  intro: {
    title: 'Solar System Interactive Website',
    subtitle: 'Web design & development',
    timeline: '3 weeks, Dec 2024',
    role: 'Web designer & developer',
    tools: 'Figma, React, TailwindCSS',
    src: '/assets/solar/banner.jpg',
  },

  overview: { src: '/assets/solar/overview.jpg' },
  inspo: { src: '/assets/solar/inspo.png' },
  features: [
    {
      id: "sound",
      title: "Immersive Space Journey",
      description: "The background uses an HTML5 <canvas> starfield, animated with requestAnimationFrame for smooth motion and performance. A subtle ambient audio track is controlled by a HUD toggle, letting visitors choose sound on or off while keeping focus on the visuals. These work together to make visitors feel like they’re inside a spaceship traveling through the solar system.",
      src: "/assets/solar/sound.webm",
    },
    {
      id: "scroll",
      title: "Scroll guided tour",
      description: "Scroll interactions are built with GSAP. Planets scale and animate into focus with each step, creating a continuous sense of movement. Modals surface details and fun facts, and scroll behavior is temporarily disabled during modal use for clarity.",
      src: "/assets/solar/scroll.webm",
    },
    {
      id: "model",
      title: "Explore in 3D",
      description: "Realistic 3D models are presented with <model-viewer>. The component enables smooth rotate and zoom controls, with performance and accessibility maintained.",
      src: "/assets/solar/earth.webm",
    },
  ],

}

export const SOLAR_CARD: ProjectCard = {
  id: SOLAR_DETAIL.id,
  title: SOLAR_DETAIL.title,
  category: SOLAR_DETAIL.category,
  cover: SOLAR_DETAIL.cover,
  coverHover: SOLAR_DETAIL.coverHover,
}