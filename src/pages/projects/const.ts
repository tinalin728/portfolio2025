import type { ProjectCard } from './types'
import { TIMS_DETAIL } from './tim-hortons/const'
import { SOLAR_DETAIL } from './solar/const'
import { FARM_DETAIL } from './farm/const'
import { SURVEY_DETAIL } from './survey/const'

const toCard = (p: {
  id: string, title: string, category: string, cover: string, coverHover: string
}): ProjectCard => ({
  id: p.id,
  title: p.title,
  category: p.category,
  cover: p.cover,
  coverHover: p.coverHover,
})

export const PROJECT_CARDS = [
  toCard(FARM_DETAIL),
  toCard(SURVEY_DETAIL),
  toCard(TIMS_DETAIL),
  toCard(SOLAR_DETAIL),
] as const
