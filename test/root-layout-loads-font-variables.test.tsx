import { isValidElement } from "react";
import { describe, expect, it } from "vitest";

import RootLayout from "@/app/layout";

describe("root layout typography", () => {
  it("exposes optimized font variables on html element", () => {
    const tree = RootLayout({ children: <div>Konten Portfolio</div> });

    expect(isValidElement(tree)).toBe(true);
    if (!isValidElement(tree)) {
      return;
    }

    expect(tree.type).toBe("html");
    expect(tree.props.className).toContain("--font-inter");
    expect(tree.props.className).toContain("--font-outfit");
  });
});
