import { About } from "@/app/components/about";
import { Archive } from "@/app/components/archive";
import { Contact } from "@/app/components/contact";
import { Experience } from "@/app/components/experience";
import { Footer } from "@/app/components/footer";
import { Hero } from "@/app/components/hero";
import { Navigation } from "@/app/components/navigation";
import { Projects } from "@/app/components/projects";
import { Reveal } from "@/app/components/reveal";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-background text-foreground">
        <Navigation />
        <div className="mx-auto w-full max-w-6xl px-6">
          <Reveal>
            <Hero />
          </Reveal>
          <Reveal>
            <About />
          </Reveal>
          <Reveal>
            <Projects />
          </Reveal>
          <Reveal>
            <Experience />
          </Reveal>
          <Reveal>
            <Archive />
          </Reveal>
          <Reveal>
            <Contact />
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
