import { useState } from "react";

export function useTabs(initialIndex = 0) {
  const [active, setActive] = useState(initialIndex);
  const isActive = (i: number) => i === active;
  const select = (i: number) => setActive(i);
  return { active, isActive, select };
}
