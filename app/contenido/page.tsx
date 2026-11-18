import type { Metadata } from "next";
import Circle from "@/components/Circle";
import { LogoGrid } from "@/components/BrandLogos";
import { TONES, VideoFace, videoCardClass } from "@/components/Placeholders";
import SiteHeader from "@/components/SiteHeader";
import { brands, contact, contentSection, navPages, videos } from "@/lib/content";

export const metadata: Metadata = { title: "Contenido · Evii Rost" };

export default function Contenido() {
  return (
    <div className="relative overflow-hidden">
      <Circle size={460} color="terracota" style={{ right: -260, top: 340 }} />
      <SiteHeader items={navPages} />

      <main className="relative mx-auto flex max-w-[1280px] flex-col gap-16 px-5 pb-28 pt-12 min-[901px]:px-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-[52px] font-bold leading-none tracking-[-0.03em] text-[#0B369A] min-[901px]:text-[72px]">{contentSection.title}</h1>
          <p className="text-2xl font-medium">{contentSection.subtitle}</p>
        </div>

        {/* Logos de marcas: grilla fija, sin movimiento */}
        <section aria-labelledby="marcas" className="flex flex-col gap-5">
          <h2 id="marcas" className="text-sm font-bold uppercase tracking-[0.16em]">{brands.pageTitle}</h2>
          <LogoGrid />
        </section>

        {/* Videos: marcadores 9:16 hasta tener los Reels reales (no son enlaces todavía) */}
        <section id="videos" aria-label="Videos" className="scroll-mt-6 grid grid-cols-2 gap-4 min-[640px]:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] min-[640px]:gap-6">
          {videos.page.map((tone, i) => (
            <div key={i} className={videoCardClass} style={{ background: TONES[tone].bg }}>
              <VideoFace tone={tone} />
            </div>
          ))}
        </section>

        <div>
          <a
            href={contact.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-[#C34811] px-[30px] py-4 text-[17px] font-bold text-white no-underline transition hover:bg-[#0B369A]"
          >
            {contentSection.cta}
          </a>
        </div>
      </main>
    </div>
  );
}
