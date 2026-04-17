import { About } from "@/app/components/about";
import { Hero } from "@/app/components/hero";
import { Navigation } from "@/app/components/navigation";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="mx-auto w-full max-w-6xl px-6">
        <Hero />
        <About />
      </div>
    </main>
  );
}
