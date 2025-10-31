// src/pages/projects/tim-hortons/const.ts
import type { ProjectCard } from "../types";
import type { TimsDetail } from "./type";

export const TIMS_SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "research", label: "Research" },
  { id: "design", label: "Design" },
  { id: "iteration", label: "Iteration" },
  { id: "reflection", label: "Reflection" },
] as const;

const OVERVIEW = {
  final: [
    {
      id: "instant",
      block: {
        title: "Instant Tap",
        description:
          "Offers' section is brought back on the Home screen. No Activate button for faster checkout.",
        images: [
          { src: "/assets/tims/home_new.png", alt: "Homepage" },
          {
            src: "/assets/tims/button_new.png",
            alt: "original offer detail screen",
          },
        ],
      },
    },
    {
      id: "clarity",
      block: {
        title: "More Clarity",
        description:
          "Offer details sit in a single, easy view. You jump straight to eligible items, not the full menu. A sensible default is preselected based on past orders, so you move quicker.",
        images: [
          {
            type:'video',
            src: "/assets/tims/offer.webm",
            alt: "Offer Details",
          },
          { src: "/assets/tims/menu_new.png", alt: "Offer Menu" },
        ],
      },
    },
    {
      id: "control",
      block: {
        title: "More User Control",
        description:
          "Offer items are grouped clearly in the cart, and you can edit them in place. If you pick a second offer, a prompt lets you replace the current one or keep what you have. Fewer mistakes, less confusion.",
        images: [
          { src: "/assets/tims/cart.png", alt: "cart page - edit button" },
          { src: "/assets/tims/message.png", alt: "error message" },
        ],
      },
    },
  ],
} satisfies TimsDetail["overview"];

const RESEARCH = {
  survey: [
    {
      image: { src: "/assets/tims/user1.png", alt: "user 1" },
      quote:
        "I cannot tell which items qualify, I keep bouncing between screens.",
    },
    {
      image: { src: "/assets/tims/user2.png", alt: "user 2" },
      quote: "Why am I at the full menu screen? Is the offer applied?",
    },
    {
      image: { src: "/assets/tims/user3.png", alt: "user 3" },
      quote:
        "I selected the wrong item, but the cart won't let me edit the item.",
    },
    {
      image: { src: "/assets/tims/user3.png", alt: "user 3" },
      quote: "What are my offer items?",
    },
    {
      image: { src: "/assets/tims/user3.png", alt: "user 3" },
      quote: "They don't tell me which items are eligible for my offer.",
    },
    {
      image: { src: "/assets/tims/user3.png", alt: "user 3" },
      quote: "I hate scrolling through the full menu.",
    },
  ],
  problems: [
    {
      title: "Lack of clarity and feedback",
      icon: { src: "/assets/tims/eye.svg", alt: "eye icon" },
      description:
        "There were <span class='italic dark:text-white-100'>no visual cues </span>showing which items matched the offer, and no confirmation that an offer was applied. The “Activate” button added to the confusion, with no warning when offers conflicted or failed to apply.",
      images: [
        {
          type:'video',
          src: "/assets/tims/oldflow.webm",
          alt: "original offer screen",
        },
        {
          src: "/assets/tims/original-detail.png",
          alt: "original offer detail screen",
        },
      ],
    },
    {
      title: "Lack of flexibility and efficiency of use",
      icon: { src: "/assets/tims/clock.svg", alt: "clock icon" },
      description:
        "Users were sent to the full menu with no filters, forcing them to <span class='italic dark:text-white-100'>scroll and search manually </span> for eligible items.",
      images: [
        { src: "/assets/tims/menu_original.png", alt: "original menu screen" },
        {
          src: "/assets/tims/original-donut.png",
          alt: "original menu screen 2",
        },
      ],
    },
    {
      title: "Lack of user control",
      icon: { src: "/assets/tims/hand.svg", alt: "hand icon" },
      description:
        "Users couldn’t change or remove offer items once added. <span class='italic dark:text-white-100'>There was no edit option. </span> When using both rewards and offers, labels like “Reward” appeared without context, making it unclear what was applied.",
      images: [
        { src: "/assets/tims/cart-original.png", alt: "original cart screen" },
      ],
    },
  ],
} as const;

const DESIGN = {
  competitor: {
    src: "/assets/tims/c-analysis.png",
    alt: "competitor analysis",
  },

  journey: { src: "/assets/tims/journey-map.jpg", alt: "User Persona Image" },

  flow: [
    {
      label: "core offer Flow",
      image: {
        src: "/assets/tims/core.jpg",
        alt: "Offer Order Flow Diagram",
      },
    },
    {
      label: "Offer Conflict Flow",
      image: {
        src: "/assets/tims/conflict.jpg",
        alt: "Error Message Handling Flow Diagram",
      },
    },
  ],
  wireframes: [
    {
      label: "mid-fi wireframe",
      image:{
          src: "/assets/tims/design-midFi.jpg",
          alt: "mid-fi wireframe",
      }
    },
    {
      label: "high-fi wireframe",
      image:{
          src: "/assets/tims/design-highFi.png",
          alt: "high-fi wireframe",
      }
    },
  ],
};

const ITERATION = {
  before: {
    src: "/assets/tims/init-design.png",
    alt: "initial design screens",
  },
  after: { src: "/assets/tims/iteration-screen.png", alt: "iteration screens" },
};

const REFLECTION = {
  content: [
    '<span class="font-bold"> Simplicity Wins </span>: User interviews showed me how small moments of confusion can add up and make things frustrating. I realized that good design starts with listening to users and making things simple. It’s not just about how something looks—it should feel easy to use. The less people have to think, the smoother everything feels. Removing extra steps and making information clear makes a huge difference.',
    '<span  class="font-bold">User Testing Made a HUGE Difference</span>: Testing helped me catch small but important issues, like missing visual cues and unclear offer details. Without feedback, I might not have noticed them.',
    '<span  class="font-bold">Small Changes Matter </span>:  I focused a lot on improving the flow, but I realized that small UI tweaks—like clearer labels and better organization—made a big impact on how easy the app was to use.',
  ],
};

export const TIMS_DETAIL: TimsDetail = {
  id: "tim-hortons-case-study",
  title: "Tim Horton's App Redesign",
  category: "Making offer redemption smoother for users",
  cover: "/assets/tims/tims-cover.jpg",
  coverHover: "/assets/tims/tims-cover-hover.png",
  intro: {
    title: "Reimagining the flow of redeeming offers on Tim Horton's app",
    subtitle: "UX case study",
    timeline: "4 weeks, July 2024",
    role: "UX researcher, UX/UI Designer",
    tools: 'Figma',
    src: "/assets/tims/cover.jpg",
  },
  overview: OVERVIEW,
  research: RESEARCH,
  design: DESIGN,
  iteration: ITERATION,
  reflection: REFLECTION,
};

export const TIMS_CARD: ProjectCard = {
  id: TIMS_DETAIL.id,
  title: TIMS_DETAIL.title,
  category: TIMS_DETAIL.category,
  cover: TIMS_DETAIL.cover,
  coverHover: TIMS_DETAIL.coverHover,
};
