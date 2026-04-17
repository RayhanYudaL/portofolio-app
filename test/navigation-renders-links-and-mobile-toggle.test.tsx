import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { ThemeProvider } from "@/app/components/theme-provider";
import { Navigation } from "@/app/components/navigation";

afterEach(() => {
  cleanup();
});

describe("navigation", () => {
  it("renders Indonesian nav links, logo, and theme toggle", () => {
    render(
      <ThemeProvider>
        <Navigation />
      </ThemeProvider>,
    );

    expect(screen.getByRole("link", { name: /rayhan\.dev/i })).toHaveAttribute(
      "href",
      "#hero",
    );
    expect(screen.getByRole("link", { name: "Profil" })).toHaveAttribute(
      "href",
      "#about",
    );
    expect(screen.getByRole("link", { name: "Portofolio" })).toHaveAttribute(
      "href",
      "#projects",
    );
    expect(screen.getByRole("link", { name: "Pengalaman" })).toHaveAttribute(
      "href",
      "#experience",
    );
    expect(screen.getByRole("link", { name: "Arsip" })).toHaveAttribute(
      "href",
      "#blog",
    );
    expect(screen.getByRole("link", { name: "Kontak" })).toHaveAttribute(
      "href",
      "#contact",
    );
    expect(screen.getByRole("button", { name: /tema/i })).toBeInTheDocument();
  });

  it("toggles mobile menu open and closes after nav link click", () => {
    render(
      <ThemeProvider>
        <Navigation />
      </ThemeProvider>,
    );

    const menuToggle = screen.getByRole("button", {
      name: /toggle menu/i,
    });
    const menuContainer = screen.getByTestId("mobile-menu");

    expect(menuToggle).toHaveAttribute("aria-expanded", "false");
    expect(menuContainer).toHaveAttribute("data-state", "closed");

    fireEvent.click(menuToggle);

    expect(menuToggle).toHaveAttribute("aria-expanded", "true");
    expect(menuContainer).toHaveAttribute("data-state", "open");

    fireEvent.click(screen.getByRole("link", { name: "Profil" }));

    expect(menuToggle).toHaveAttribute("aria-expanded", "false");
    expect(menuContainer).toHaveAttribute("data-state", "closed");
  });
});
