import { About } from "@/app/components/about";
import { Archive } from "@/app/components/archive";
import { Experience } from "@/app/components/experience";
import { Hero } from "@/app/components/hero";
import { Navigation } from "@/app/components/navigation";
import { Projects } from "@/app/components/projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="mx-auto w-full max-w-6xl px-6">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Archive />
      </div>
    </main>
  );
}
