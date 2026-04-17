import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Projects } from "@/app/components/projects";

describe("projects section", () => {
  it("renders featured and regular project cards from Indonesian portfolio data", () => {
    render(<Projects />);

    expect(screen.getByText("Portofolio")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /proyek pilihan\./i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: /lihat proyek lainnya/i,
      }),
    ).toHaveAttribute("href", "#blog");

    expect(screen.getByText("01 — Featured")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 3,
        name: /apicentrum portal/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        level: 3,
        name: /loccana/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 3,
        name: /apicentrum devportal/i,
      }),
    ).toBeInTheDocument();

    expect(screen.getByText("Laravel")).toBeInTheDocument();
    expect(screen.getByText("Bootstrap")).toBeInTheDocument();
    expect(screen.getAllByText(/detail proyek/i)).toHaveLength(3);
  });
});