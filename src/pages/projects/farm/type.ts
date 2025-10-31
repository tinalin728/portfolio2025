import type { ProjectCard } from '../types'

export type Media = { src: string, alt?: string, type?: 'image' | 'video' }
export type DesignBlock = { title: string, description?: string, images: Media }
export type Problem = {
  title: string
  description: string
  image: Media
}

export type ImpactItem = {
  id: string;          
  display: string;   
  label: string;       
  before?: string;    
  after?: string;    
};


export type HexColor = `#${string}`;
export type TailwindTextClass = `text-${string}` | `text-[#${string}]`;

export type Swatch = {
  name: string;
  hex: HexColor;
  text: TailwindTextClass;
};

export type FarmDetail = ProjectCard & {
  intro: {
    title: string
    subtitle: string
    timeline: string
    role: string
    tools: string
    src: string
  }
  
    overview: {
      final: readonly DesignBlock[]
    }
impact: readonly ImpactItem[];
features: readonly DesignBlock[];
problems: readonly Problem[];
palette: readonly Swatch[];

}
