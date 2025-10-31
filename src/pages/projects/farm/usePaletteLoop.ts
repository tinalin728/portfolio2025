// hooks/usePaletteRevealLoop.ts
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import type React from "react";

type Opts = {
  revealSec?: number;
  pauseSec?: number;
  fadeSec?: number;     // renamed for clarity
  startDelaySec?: number;
  selector?: string;
};

export function usePaletteLoop(
  root: React.RefObject<HTMLElement | null>,
  {
    revealSec = 1,
    pauseSec = 1.5,
    fadeSec = 0.8,
    startDelaySec = 0,
    selector = ".js-fill",
  }: Opts = {}
) {
  useGSAP(
    () => {
      const scope = root.current;
      if (!scope) return;

      const fills = gsap.utils.toArray<HTMLElement>(selector, scope);
      if (!fills.length) return;

      // start hidden from top, reveal downward
      gsap.set(fills, {
        clipPath: "inset(0% 0% 100% 0%)",
        WebkitClipPath: "inset(0% 0% 100% 0%)",
        opacity: 1,
      });

      const tl = gsap.timeline({ repeat: -1, delay: startDelaySec });

      // ensure opacity is 1 at the beginning of each loop
      tl.set(fills, { opacity: 1 }, 0);

      // reveal each tile in order, top to bottom
      fills.forEach((f) => {
        tl.to(f, {
          clipPath: "inset(0% 0% 0% 0%)",
          WebkitClipPath: "inset(0% 0% 0% 0%)",
          duration: revealSec,
          ease: "power2.out",
        });
      });

      // hold with all visible
      tl.to({}, { duration: pauseSec });

      // fade everything out together, like one picture
      tl.to(fills, { opacity: 0, duration: fadeSec, ease: "power2.inOut" });

      return () => tl.kill();
    },
    { scope: root }
  );
}
