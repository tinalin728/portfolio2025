import type { ProjectCard } from "../types";
import type { LucideIcon } from 'lucide-react';

interface designDirection {
  title: string;
  description: string;
  mediaType: 'image' | 'video';
mediaSrc: string;

}
export type ApproachCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type SurveyDetail = ProjectCard & {
  intro: {
    title: string;
    subtitle: string;
    timeline: string;
    role: string;
    tools: string;
    src: string;
  };
  directions: designDirection[];
    approachCards: ApproachCard[];


};