import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { About } from "@/app/components/about";

describe("about section", () => {
  it("renders about copy, stats, and skills from source portfolio", () => {
    render(<About />);

    expect(screen.getByText("Tentang Saya")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /kode yang bersih, pengalaman yang mulus\./i,
      }),
    ).toBeInTheDocument();

    expect(screen.getByText("3+")).toBeInTheDocument();
    expect(screen.getByText("Tahun Pengalaman")).toBeInTheDocument();
    expect(screen.getByText("6+")).toBeInTheDocument();
    expect(screen.getByText("Proyek Terkirim")).toBeInTheDocument();
    expect(screen.getByText("Klien & Instansi")).toBeInTheDocument();

    const skillList = screen.getByRole("list", { name: /daftar keahlian/i });
    expect(within(skillList).getByText("PHP / Laravel")).toBeInTheDocument();
    expect(within(skillList).getByText("JavaScript / jQuery")).toBeInTheDocument();
    expect(within(skillList).getByText("HTML / CSS / Tailwind")).toBeInTheDocument();
    expect(within(skillList).getByText("Next.js / React")).toBeInTheDocument();
    expect(within(skillList).getByText("Express.js / Node.js")).toBeInTheDocument();
    expect(within(skillList).getByText("MySQL / PostgreSQL")).toBeInTheDocument();

    expect(within(skillList).getAllByText(/expert|advanced|intermediate/i)).toHaveLength(
      6,
    );
  });
});
