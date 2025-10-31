
export type ProjectCard = {
  id: string
  title: string
  category: string
  cover: string
  coverHover: string
}

export type ProjectDetailBase = {
  id: string
  title: string
  category: string
  intro?: {
    title: string
    subtitle?: string
    timeline?: string
    role?: string
    tools?: string
    src?: string
  }
}


export type Intro = {
  title: string
  subtitle?: string
  timeline?: string
  role?: string
tools?: string
  src: string
}