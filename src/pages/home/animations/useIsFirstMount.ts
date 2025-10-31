// src/hooks/useIsFirstMount.ts
import { useEffect, useRef } from "react";

/** True only on the first render of the component. */
export function useIsFirstMount() {
  const first = useRef(true);
  useEffect(() => {
    first.current = false;
  }, []);
  return first.current;
}
