import type { ProjectCard } from "../types";
import type { SurveyDetail } from "./type";
import { Eye, Layers2, Smile } from "lucide-react";


export const SURVEY_SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "research", label: "Research" },
  { id: "design", label: "Design" },
  { id: "iteration", label: "Iteration" },
  { id: "reflection", label: "Reflection" },
] as const;

export const SURVEY_DETAIL: SurveyDetail = {
  id: "survey",
  title: "Mobile Survey Experience Design",
  category: "Making post-simulation surveys more intuitive for students",
  cover: "/assets/survey/cover.jpg",
  coverHover: "/assets/survey/final.webm",
  intro: {
    title: "Mobile Survey Experience Design",
    subtitle: "UX case study",
    timeline: "3 weeks, June 2025",
    role: "UX/UI designer",
    tools: "Figma",
    src: "/assets/survey/banner.jpg",
  },

  directions:[
{
    title: "Breaking the survey into smaller sections",
    description: "Users see one focused group of questions at a time instead of a long page. A progress bar or question counter shows how many sections are left, making the survey feel more manageable.",
    mediaType: "video",
    mediaSrc: "/assets/survey/sections.webm"
  },
  {
    title: "Using emojis to make capture emotions",
    description: "Emojis reduce language load. The meaning is instantly clear across languages and reading levels.",
        mediaType: "image",

    mediaSrc: "/assets/survey/emojis.png"
  },
  {
    title: "Auto-collapsing answered questions",
    description: "Answered questions collapse to show only the choice made, reducing overwhelm and creating a visual sense of progress.",
        mediaType: "video",

    mediaSrc: "/assets/survey/collapse.webm"
  }],
  approachCards: [
    {
      icon: Eye,
      title: "Always visible",
      description: "All options stay visible. No collapsing layout."
    },
    {
      icon: Layers2,
      title: "Clear structure",
      description: "Visual design elements make section transitions obvious and easy to follow"
    },
    {
      icon: Smile,
      title: "Expressive feedback",
      description: "Emojis animate on selection, giving immediate visual confirmation"
    }
  ]
};

export const SURVEY_CARD: ProjectCard = {
  id: SURVEY_DETAIL.id,
  title: SURVEY_DETAIL.title,
  category: SURVEY_DETAIL.category,
  cover: SURVEY_DETAIL.cover,
  coverHover: SURVEY_DETAIL.coverHover,
};