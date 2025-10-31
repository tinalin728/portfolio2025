import type { ProjectCard } from "../types"
export type MediaOnlySrc = { src: string }
export type FeatureId = "model" | "scroll" | "sound"

export type FeatureItem = {
  id: FeatureId
  title: string
  description: string
  src: string
}

export type SolarDetail = ProjectCard & {
  intro: {
    title: string
    subtitle: string
    timeline: string
    role: string
    tools: string
    src: string
  }

  overview: MediaOnlySrc
  inspo: MediaOnlySrc

  features: readonly FeatureItem[]

}