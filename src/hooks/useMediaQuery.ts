import { useEffect, useState } from "react";

export function useMediaQuery(query: string, fallback = false) {
  const getMatch = () =>
    typeof window !== "undefined" && "matchMedia" in window
      ? window.matchMedia(query).matches
      : fallback;

  const [matches, setMatches] = useState<boolean>(getMatch);

  useEffect(() => {
    if (typeof window === "undefined" || !("matchMedia" in window)) return;

    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);

    // set once on mount
    onChange();

    // modern browsers
    if ("addEventListener" in mql) {
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    }
    // fallback for older Safari
    // @ts-expect-error legacy API
    mql.addListener(onChange);
    // @ts-expect-error legacy API
    return () => mql.removeListener(onChange);
  }, [query]);

  return matches;
}
