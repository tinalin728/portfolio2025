import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export function useScrollTop() {
  const location = useLocation();
  const navType = useNavigationType(); 

  useEffect(() => {
    if (location.hash) return;
    if (navType === "POP") return;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname, location.search, navType]);
}
