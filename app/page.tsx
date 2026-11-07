import { existsSync } from "node:fs";
import path from "node:path";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import CTA from "@/components/CTA";
import { hero } from "@/lib/content";

export default function Home() {
  // Si existe la versión sonriente del sticker en public/sticker/, se activa sola.
  const smileSrc = existsSync(path.join(process.cwd(), "public", "sticker", hero.smileFile))
    ? `/sticker/${hero.smileFile}`
    : null;

  return (
    <main>
      <Hero smileSrc={smileSrc} />
      <Services />
      <Projects />
      <About />
      <CTA />
    </main>
  );
}
