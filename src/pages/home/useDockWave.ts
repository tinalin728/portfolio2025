import { useEffect, useRef } from 'react';

type Options = {
  radius?: number;                // influence width in px
  buttonSelector?: string;        // which children to animate
  ease?: number;                  // 0..1, how fast we approach target each frame
  floor?: number;                 // snap to 0 under this value, avoids micro jitter
};

export function useDockWave(opts: Options = {}) {
  const {
    radius = 120,
    buttonSelector = '.dock-btn',
    ease = 0.15,          // lower = smoother/laggier, higher = snappier
    floor = 0.002,        // snap-to-zero threshold
  } = opts;

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const btns = Array.from(root.querySelectorAll<HTMLElement>(buttonSelector));
    if (btns.length === 0) return;

    // per-button state
    const cur = new Map<HTMLElement, number>();
    const tgt = new Map<HTMLElement, number>();
    btns.forEach(b => { cur.set(b, 0); tgt.set(b, 0); });

    let raf = 0;
    let running = false;

    const strengthFromDistance = (dPx: number) =>
      Math.max(0, 1 - dPx / radius); // 0..1

    const step = () => {
      let anyMoving = false;

      for (const b of btns) {
        const c = cur.get(b)!;
        const t = tgt.get(b)!;

        const next = c + (t - c) * ease;
        const diff = Math.abs(next - c);

        if (diff > floor || Math.abs(t) > floor) {
          anyMoving = true;
          cur.set(b, next);
          b.style.setProperty('--t', next.toFixed(4));
        } else {
          // settle
          if (c !== 0) {
            cur.set(b, 0);
            b.style.setProperty('--t', '0');
          }
        }
      }

      if (anyMoving) {
        raf = requestAnimationFrame(step);
      } else {
        running = false;
      }
    };

    const kick = () => {
      if (!running) {
        running = true;
        raf = requestAnimationFrame(step);
      }
    };

    const onMove = (e: PointerEvent) => {
      const x = e.clientX;
      // write targets
      for (const b of btns) {
        const r = b.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const d = Math.abs(x - cx);
        tgt.set(b, strengthFromDistance(d));
      }
      kick();
    };

    const onLeave = () => {
      // decay to zero
      for (const b of btns) tgt.set(b, 0);
      kick();
    };

    root.addEventListener('pointermove', onMove, { passive: true });
    root.addEventListener('pointerleave', onLeave);

    return () => {
      root.removeEventListener('pointermove', onMove);
      root.removeEventListener('pointerleave', onLeave);
      cancelAnimationFrame(raf);
    };
  }, [radius, buttonSelector, ease, floor]);

  return ref;
}
