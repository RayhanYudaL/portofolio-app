import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

vi.mock("next/font/google", () => ({
	Geist: () => ({ variable: "--font-geist-sans" }),
	Geist_Mono: () => ({ variable: "--font-geist-mono" }),
	Inter: () => ({ variable: "--font-inter" }),
	Outfit: () => ({ variable: "--font-outfit" }),
}));
