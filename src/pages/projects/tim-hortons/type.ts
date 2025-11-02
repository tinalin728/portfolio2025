import type { ProjectCard } from "../types";

export type Media = {
  src: string;
  alt?: string;
  type?: "image" | "video";
};

export type DesignBlock = {
  title: string;
  description?: string;
  images?: ReadonlyArray<Media>;
};

export type Solution = {
  id: "instant" | "clarity" | "control";
  block: DesignBlock;
};

export type SurveyItem = {
  image: Media;
  quote: string;
};

export type Problem = {
  title: string;
  icon: { src: string; alt: string };
  description: string;
  images: ReadonlyArray<Media>;
};

export type FlowTab = {
  label: string;
  image: { src: string; alt: string };
};

export type TimsDetail = ProjectCard & {
  intro: {
    title: string;
    subtitle: string;
    timeline: string;
    role: string;
    tools: string;
    src: string;
  };
  overview: {
    final: ReadonlyArray<Solution>;
  };
  research: {
    survey: ReadonlyArray<SurveyItem>;
    problems: ReadonlyArray<Problem>;
  };
  design: {
    competitor: Media;
    journey: Media;
    flow: ReadonlyArray<FlowTab>;
    wireframes: ReadonlyArray<FlowTab>;
  };
  iteration: { before: Media; after: Media };
  reflection: { content: ReadonlyArray<string> };
};
