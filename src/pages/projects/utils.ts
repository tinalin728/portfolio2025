// utils.ts
import type { ProjectCard } from "./types";
import { PROJECT_CARDS } from "./const"; // adjust path

export function getNextTwo(currentId: string): ProjectCard[] {
  const n = PROJECT_CARDS.length;
  const idx = PROJECT_CARDS.findIndex(p => p.id === currentId);
  if (idx < 0 || n <= 1) return [];
  return [PROJECT_CARDS[(idx + 1) % n], PROJECT_CARDS[(idx + 2) % n]];
}

export function getPrevTwo(currentId: string): ProjectCard[] {
  const n = PROJECT_CARDS.length;
  const idx = PROJECT_CARDS.findIndex(p => p.id === currentId);
  if (idx < 0 || n <= 1) return [];
  return [PROJECT_CARDS[(idx - 1 + n) % n], PROJECT_CARDS[(idx - 2 + n) % n]];
}
