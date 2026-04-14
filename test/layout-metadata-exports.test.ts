import { describe, expect, it } from "vitest";

import { metadata } from "@/app/layout";

describe("root layout metadata", () => {
  it("exports portfolio metadata instead of create-next-app defaults", () => {
    expect(metadata.title).toBe("Portfolio | Rayhan Yuda Lesmana");
    expect(metadata.description).toContain("Portfolio profesional");
  });
});
