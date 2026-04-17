import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Hero } from "@/app/components/hero";

describe("hero section", () => {
  it("renders Indonesian headline and CTA links", () => {
    render(<Hero />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /membangun website yang cepat & responsif\./i,
      }),
    ).toBeInTheDocument();

    expect(screen.getByText(/frontend developer · bandung, id/i)).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: /lihat portofolio/i,
      }),
    ).toHaveAttribute("href", "#projects");

    expect(
      screen.getByRole("link", {
        name: /hubungi saya/i,
      }),
    ).toHaveAttribute("href", "#contact");
  });
});
