import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { Reveal } from "@/app/components/reveal";

let ioCallback: IntersectionObserverCallback = () => {};
const observeSpy = vi.fn();
const unobserveSpy = vi.fn();
const disconnectSpy = vi.fn();

class IntersectionObserverMock implements IntersectionObserver {
  readonly root: Element | Document | null = null;
  readonly rootMargin = "0px";
  readonly thresholds: ReadonlyArray<number> = [0];

  constructor(callback: IntersectionObserverCallback) {
    ioCallback = callback;
  }

  disconnect = disconnectSpy;
  observe = observeSpy;
  takeRecords = () => [];
  unobserve = unobserveSpy;
}

describe("reveal component", () => {
  beforeEach(() => {
    observeSpy.mockClear();
    unobserveSpy.mockClear();
    disconnectSpy.mockClear();

    Object.defineProperty(window, "IntersectionObserver", {
      configurable: true,
      writable: true,
      value: IntersectionObserverMock,
    });
  });

  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("adds visible class when the element intersects", async () => {
    render(
      <Reveal>
        <div data-testid="reveal-content">Konten</div>
      </Reveal>,
    );

    const revealContainer = screen.getByTestId("reveal-content").parentElement;
    expect(revealContainer).toBeTruthy();

    const target = revealContainer as HTMLDivElement;

    expect(target).not.toHaveClass("visible");
    expect(observeSpy).toHaveBeenCalledWith(target);

    ioCallback(
      [{ isIntersecting: true, target } as IntersectionObserverEntry],
      {} as IntersectionObserver,
    );

    await waitFor(() => {
      expect(target).toHaveClass("visible");
    });

    expect(unobserveSpy).toHaveBeenCalledWith(target);
  });
});
