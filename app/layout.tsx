import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  display: "swap",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Rayhan Yuda Lesmana",
  description:
    "Portfolio profesional Rayhan Yuda Lesmana, Software Engineer berfokus pada pengembangan web modern.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
