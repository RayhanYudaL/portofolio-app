import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Experience } from "@/app/components/experience";

describe("experience section", () => {
  it("renders work and education timeline items from source portfolio", () => {
    render(<Experience />);

    expect(screen.getByText("Perjalanan Karir")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /pengalaman kerja/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /pendidikan & organisasi/i,
      }),
    ).toBeInTheDocument();

    const workTimeline = screen.getByRole("list", {
      name: /timeline pengalaman kerja/i,
    });
    expect(within(workTimeline).getAllByRole("listitem")).toHaveLength(3);
    expect(within(workTimeline).getByText(/frontend developer/i)).toBeInTheDocument();
    expect(within(workTimeline).getByText(/pt swamedia informatika/i)).toBeInTheDocument();
    expect(within(workTimeline).getByText(/it staff intern/i)).toBeInTheDocument();

    const educationTimeline = screen.getByRole("list", {
      name: /timeline pendidikan dan organisasi/i,
    });
    expect(within(educationTimeline).getAllByRole("listitem")).toHaveLength(3);
    expect(within(educationTimeline).getByText(/d4 teknik informatika/i)).toBeInTheDocument();
    expect(within(educationTimeline).getByText(/frontend mentor/i)).toBeInTheDocument();
    expect(within(educationTimeline).getByText(/anggota aktif/i)).toBeInTheDocument();
  });
});