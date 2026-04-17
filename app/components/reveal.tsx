"use client";

import { type PropsWithChildren, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type RevealProps = PropsWithChildren<{
  className?: string;
  delayMs?: number;
}>;

export function Reveal({ children, className, delayMs = 0 }: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) {
      return;
    }

    let timeoutId: number | undefined;
    let frameId: number | undefined;

    if (typeof window.IntersectionObserver === "undefined") {
      const revealNow = () => {
        frameId = window.requestAnimationFrame(() => {
          setIsVisible(true);
        });
      };

      if (delayMs > 0) {
        timeoutId = window.setTimeout(revealNow, delayMs);
      } else {
        revealNow();
      }

      return () => {
        if (typeof timeoutId === "number") {
          window.clearTimeout(timeoutId);
        }
        if (typeof frameId === "number") {
          window.cancelAnimationFrame(frameId);
        }
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          if (delayMs > 0) {
            timeoutId = window.setTimeout(() => {
              setIsVisible(true);
            }, delayMs);
          } else {
            setIsVisible(true);
          }

          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (typeof timeoutId === "number") {
        window.clearTimeout(timeoutId);
      }
    };
  }, [delayMs]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "translate-y-4 opacity-0 transition-all duration-700 will-change-transform",
        isVisible && "visible translate-y-0 opacity-100",
        className,
      )}
    >
      {children}
    </div>
  );
}