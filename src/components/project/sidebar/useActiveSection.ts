// useActiveSection.ts
import { useEffect, useRef, useState } from "react";

export type SectionLink = { id: string; label: string; parentId?: string };

/**
 * Marks a section active only when the probe line lies within that section.
 * On initial load: no active tab until a section is actually in view.
 */
export function useActiveSection(
  sections: readonly SectionLink[],
  probeY = 180
) {
  const [activeId, setActiveId] = useState<string>("");
  const ticking = useRef(false);

  useEffect(() => {
    const pairs = sections
      .map((s) => ({ s, el: document.getElementById(s.id) }))
      .filter((x): x is { s: SectionLink; el: HTMLElement } => !!x.el);

    if (pairs.length === 0) return;

    const compute = () => {
      let current = "";
      for (const { s, el } of pairs) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= probeY && rect.bottom >= probeY) {
          current = s.parentId || s.id;
          break;
        }
      }

      if (current) {
        if (current !== activeId) setActiveId(current);
      } else {
        if (activeId !== "") setActiveId("");
      }

      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(compute);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sections, probeY, activeId]);

  return activeId;
}

export function scrollToId(id: string, behavior: ScrollBehavior = "smooth") {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior, block: "start" });
}
