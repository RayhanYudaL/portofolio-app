"use client";

import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle tema"
      aria-pressed={theme === "dark"}
      onClick={toggleTheme}
      className="inline-flex items-center justify-center rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition hover:bg-accent"
    >
      Tema: {theme === "dark" ? "Gelap" : "Terang"}
    </button>
  );
}
