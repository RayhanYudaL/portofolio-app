import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Footer } from "@/app/components/footer";

describe("footer", () => {
  it("renders top anchor and social links", () => {
    render(<Footer />);

    expect(screen.getByRole("contentinfo")).toBeInTheDocument();

    expect(screen.getByRole("link", { name: /atas/i })).toHaveAttribute(
      "href",
      "#hero",
    );

    expect(screen.getByRole("link", { name: /github/i })).toHaveAttribute(
      "href",
      "https://github.com/Rayhanyl",
    );

    expect(screen.getByRole("link", { name: /linkedin/i })).toHaveAttribute(
      "href",
      "https://linkedin.com/in/rayhanyl",
    );
  });
});
