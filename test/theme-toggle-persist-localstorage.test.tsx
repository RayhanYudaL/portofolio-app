import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { ThemeProvider, THEME_STORAGE_KEY } from "@/app/components/theme-provider";
import { ThemeToggle } from "@/app/components/theme-toggle";

function setMatchMedia(matches: boolean) {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches,
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
}

describe("theme toggle persistence", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute("data-theme");
    document.documentElement.classList.remove("dark");
    setMatchMedia(false);
  });

  it("reads initial theme from localStorage and marks root element", async () => {
    localStorage.setItem(THEME_STORAGE_KEY, "dark");

    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>,
    );

    await waitFor(() => {
      expect(document.documentElement.dataset.theme).toBe("dark");
    });
    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });

  it("falls back to system preference when no saved theme exists", async () => {
    setMatchMedia(true);

    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>,
    );

    await waitFor(() => {
      expect(document.documentElement.dataset.theme).toBe("dark");
    });
  });

  it("toggles theme and persists selection to localStorage", async () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>,
    );

    const button = screen.getByRole("button", { name: /tema/i });

    await waitFor(() => {
      expect(document.documentElement.dataset.theme).toBe("light");
    });
    expect(button).toHaveAttribute("aria-pressed", "false");

    fireEvent.click(button);

    await waitFor(() => {
      expect(document.documentElement.dataset.theme).toBe("dark");
    });
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe("dark");
    expect(button).toHaveAttribute("aria-pressed", "true");

    fireEvent.click(button);

    await waitFor(() => {
      expect(document.documentElement.dataset.theme).toBe("light");
    });
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe("light");
    expect(button).toHaveAttribute("aria-pressed", "false");
  });

  it("falls back to system preference when localStorage getItem throws", async () => {
    setMatchMedia(true);
    vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => {
      throw new Error("localStorage getItem unavailable");
    });

    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>,
    );

    await waitFor(() => {
      expect(document.documentElement.dataset.theme).toBe("dark");
    });
  });

  it("defaults to light when matchMedia is unavailable", async () => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: undefined,
    });

    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>,
    );

    await waitFor(() => {
      expect(document.documentElement.dataset.theme).toBe("light");
    });
    expect(document.documentElement.classList.contains("dark")).toBe(false);
  });

  it("keeps toggling when localStorage setItem throws", async () => {
    const setItemSpy = vi
      .spyOn(Storage.prototype, "setItem")
      .mockImplementation(() => {
        throw new Error("localStorage setItem unavailable");
      });

    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>,
    );

    const button = screen.getByRole("button", { name: /tema/i });

    await waitFor(() => {
      expect(document.documentElement.dataset.theme).toBe("light");
    });

    fireEvent.click(button);

    await waitFor(() => {
      expect(document.documentElement.dataset.theme).toBe("dark");
    });
    expect(setItemSpy).toHaveBeenCalled();
    expect(button).toHaveAttribute("aria-pressed", "true");
  });
});
