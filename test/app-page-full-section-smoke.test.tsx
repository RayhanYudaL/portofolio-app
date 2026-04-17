import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ThemeProvider } from "@/app/components/theme-provider";
import Home from "@/app/page";

describe("home page full section smoke", () => {
  it("renders all major sections from navigation to footer", () => {
    const { container } = render(
      <ThemeProvider>
        <Home />
      </ThemeProvider>,
    );

    expect(screen.getByRole("navigation", { name: /navigasi utama/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();

    expect(container.querySelector("#hero")).toBeTruthy();
    expect(container.querySelector("#about")).toBeTruthy();
    expect(container.querySelector("#projects")).toBeTruthy();
    expect(container.querySelector("#experience")).toBeTruthy();
    expect(container.querySelector("#blog")).toBeTruthy();
    expect(container.querySelector("#contact")).toBeTruthy();

    expect(screen.getAllByRole("heading", { level: 2 }).length).toBeGreaterThanOrEqual(5);
    expect(screen.getByRole("contentinfo", { name: /footer/i })).toBeInTheDocument();
  });
});