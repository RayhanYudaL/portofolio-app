import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Archive } from "@/app/components/archive";

describe("archive section", () => {
  it("renders archive cards in Indonesian and links to GitHub", () => {
    render(<Archive />);

    expect(screen.getByText("Arsip Proyek")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /eksplorasi lainnya\./i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: /lihat github/i,
      }),
    ).toHaveAttribute("href", "https://github.com/Rayhanyl");

    expect(
      screen.getByRole("heading", {
        level: 3,
        name: /apicentrum publisher/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 3,
        name: /company profile pt swamedia informatika/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 3,
        name: /talent and careers application/i,
      }),
    ).toBeInTheDocument();

    expect(screen.getByText(/laravel · api gateway/i)).toBeInTheDocument();
    expect(screen.getByText(/jan 2023 — jan 2025/i)).toBeInTheDocument();
  });
});