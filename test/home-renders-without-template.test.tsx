import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ThemeProvider } from "@/app/components/theme-provider";
import Home from "@/app/page";

describe("home page", () => {
  it("renders portfolio heading and removes default template copy", () => {
    render(
      <ThemeProvider>
        <Home />
      </ThemeProvider>,
    );

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /rayhan yuda lesmana/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.queryByText(/to get started, edit the page.tsx file/i),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: /deploy now/i }),
    ).not.toBeInTheDocument();
  });
});
