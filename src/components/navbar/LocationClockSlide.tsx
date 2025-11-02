import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  city?: string;
  region?: string;
  timeZone?: string; // e.g. "America/Vancouver"
  swapEveryMs?: number; // how often to swap location and time
  scrambleMs?: number; // how long the scramble runs
  frameMs?: number; // frame length for the scramble
  showMeridiem?: boolean; // show AM or PM
};

export function LocationClockSlide({
  city = "Vancouver",
  region = "BC",
  timeZone = "America/Vancouver",
  swapEveryMs = 3500,
  scrambleMs = 1500,
  frameMs = 70,
  showMeridiem = true,
}: Props) {
  const [showTime, setShowTime] = useState(false); // location first
  const [now, setNow] = useState(() => new Date());
  const [mounted, setMounted] = useState(false);
  const [display, setDisplay] = useState(`${city}, ${region}`);
  const lastSwapRef = useRef<"loc" | "time">("loc");

  useEffect(() => setMounted(true), []);

  // live clock tick
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  // swap between location and time
  useEffect(() => {
    const t = setInterval(() => setShowTime((s) => !s), swapEveryMs);
    return () => clearInterval(t);
  }, [swapEveryMs]);

  // format time with seconds, 12 hour, optional AM or PM
  const timeText = useMemo(() => {
    const parts = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
      timeZone,
    });
    if (showMeridiem) return parts; // "08:09:32 AM"
    return parts.replace(/\s?[AP]M$/i, ""); // "08:09:32"
  }, [now, timeZone, showMeridiem]);

  // when showing time, update the text live without scrambling
  useEffect(() => {
    if (!mounted) return;
    if (showTime && lastSwapRef.current === "time") {
      setDisplay(timeText);
    }
  }, [showTime, timeText, mounted]);

  // run scramble only when the mode changes
  useEffect(() => {
    if (!mounted) return;

    const from = display;
    const to = showTime ? timeText : `${city}, ${region}`;
    lastSwapRef.current = showTime ? "time" : "loc";

    // do not scramble if text is already the same
    if (from === to) return;

    // pad to same length
    const maxLen = Math.max(from.length, to.length);
    const toPadded = to.padEnd(maxLen, " ");

    // slower, smoother scramble
    const keepChar = (c: string) => c === " " || c === "," || c === ":";
    const glyphs = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

    const steps = Math.max(1, Math.floor(scrambleMs / frameMs));
    // bias reveals toward later frames for a calmer feel
    const reveals = Array.from({ length: maxLen }, () =>
      Math.floor(Math.pow(Math.random(), 1.6) * steps)
    );

    let frame = 0;
    let raf = 0;

    const tick = () => {
      frame++;
      let out = "";
      for (let i = 0; i < maxLen; i++) {
        if (frame >= reveals[i]) {
          out += toPadded[i];
        } else if (keepChar(toPadded[i])) {
          out += toPadded[i];
        } else {
          out += glyphs[Math.floor(Math.random() * glyphs.length)];
        }
      }
      setDisplay(out.trimEnd());

      if (frame < steps) {
        raf = window.setTimeout(tick, frameMs) as unknown as number;
      } else {
        setDisplay(to.trimEnd()); // ensure exact final text
      }
    };

    raf = window.setTimeout(tick, frameMs) as unknown as number;
    return () => window.clearTimeout(raf);
  }, [showTime]); // only when toggling modes

  if (!mounted) {
    return (
      <div className="uppercase tracking-[1px] text-[12.5px] leading-[1.2] text-right">
        {city}, {region}
      </div>
    );
  }

  return (
    <div className="hidden md:block uppercase tracking-[1px] text-[12.5px] leading-[1.2] text-right">
      <span aria-live="polite">{display}</span>
    </div>
  );
}
