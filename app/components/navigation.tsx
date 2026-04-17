"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/app/components/theme-toggle";

type NavItem = {
  href: string;
  label: string;
};

const navItems: NavItem[] = [
  { href: "#about", label: "Profil" },
  { href: "#projects", label: "Portofolio" },
  { href: "#experience", label: "Pengalaman" },
  { href: "#blog", label: "Arsip" },
  { href: "#contact", label: "Kontak" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <nav
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4"
        aria-label="Navigasi utama"
      >
        <a
          href="#hero"
          className="font-display text-xl font-semibold tracking-tight text-foreground"
          onClick={closeMenu}
        >
          Rayhan.dev
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((currentState) => !currentState)}
          className="rounded-md border border-border px-3 py-2 text-sm font-medium text-foreground md:hidden"
        >
          {isOpen ? "Tutup" : "Menu"}
        </button>

        <div
          id="mobile-navigation"
          data-testid="mobile-menu"
          data-state={isOpen ? "open" : "closed"}
          className={cn(
            "absolute left-0 top-full w-full border-b border-border bg-background px-6 pb-5 pt-3 md:static md:w-auto md:border-0 md:bg-transparent md:p-0",
            isOpen ? "block" : "hidden md:block",
          )}
        >
          <div className="flex flex-col items-stretch gap-4 md:flex-row md:items-center md:gap-5">
            <ul className="flex flex-col gap-3 md:flex-row md:items-center md:gap-5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className="text-sm font-medium text-muted transition hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
