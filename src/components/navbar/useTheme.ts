import { useEffect, useState } from "react";

type Theme = "light" | "dark";
const THEME_KEY = "theme";

export function useTheme() {
  // lazy init, read once from storage or system preference
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem(THEME_KEY) as Theme | null;
    if (saved === "light" || saved === "dark") return saved;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  });


 useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    html.classList.toggle("dark", theme === "dark");
    body.classList.remove("dark");
    html.style.colorScheme = theme === "dark" ? "dark" : "light";
    localStorage.setItem(THEME_KEY, theme);  
  }, [theme]);

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === THEME_KEY && (e.newValue === "light" || e.newValue === "dark")) {
        setTheme(e.newValue as Theme);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  return { theme, setTheme };
}
