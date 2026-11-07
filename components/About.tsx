import { about } from "@/lib/content";
import Window from "./Window";

export default function About() {
  return (
    <section id="sobre-mi" className="px-6 py-24">
      <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="reveal mx-auto w-full max-w-sm -rotate-2">
          <Window title="sobre_mi.jpg">
            <div className="mx-2 mb-2 aspect-[4/5] overflow-hidden rounded-xl bg-[#CFC6BE]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={about.photo} alt={about.photoAlt} loading="lazy" className="h-full w-full object-cover" />
            </div>
          </Window>
        </div>

        <div className="reveal reveal-d2">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#0B369A]">{about.eyebrow}</p>
          <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-[#0B369A] sm:text-5xl">
            {about.title}
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#0B369A]/80">
            {about.paragraphs.map((p) => <p key={p}>{p}</p>)}
          </div>
        </div>
      </div>
    </section>
  );
}
