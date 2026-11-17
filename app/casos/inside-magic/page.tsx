import type { Metadata } from "next";
import Circle from "@/components/Circle";
import ContactLinks from "@/components/ContactLinks";
import DeskWindow from "@/components/DeskWindow";
import Shot from "@/components/Shot";
import SiteHeader from "@/components/SiteHeader";
import { publicAsset } from "@/lib/assets";
import { insideMagic as c, navCase } from "@/lib/content";

export const metadata: Metadata = {
  title: "Caso Inside Magic · Evii Rost",
  // NO indexable hasta que Garro Travels confirme que se pueden mostrar su nombre y los números.
  // Cuando Evii avise: borrar la línea "robots" de abajo.
  robots: { index: false, follow: false },
};

const PAD = "mx-auto max-w-[1280px] px-5 min-[901px]:px-10";
const BIG = "text-[56px] font-bold leading-none tracking-[-0.03em] min-[901px]:text-[88px]";
const H2 = "text-4xl font-bold leading-[1.05] tracking-[-0.02em] min-[901px]:text-5xl";
const EYEBROW = "text-sm font-bold uppercase tracking-[0.14em] text-[#C34811]";
const PILL = "self-start rounded-full px-[18px] py-2 text-sm font-bold uppercase tracking-[0.08em]";
const CHIP = "rounded-full border border-[#D9D1CA] bg-[#FAF8F5] px-4 py-2 text-[15px] font-bold text-[#0B369A]";

export default function CasoInsideMagic() {
  const resumen = publicAsset(c.summary.src);
  const interacciones = publicAsset(c.interactions.src);

  return (
    <div className="overflow-hidden">
      <SiteHeader items={navCase} />

      <main>
        {/* Portada del caso */}
        <section className="relative overflow-hidden">
          <Circle size={520} color="azul" style={{ right: -180, top: 120 }} />
          <Circle size={420} color="terracota" style={{ left: -160, bottom: -200 }} />
          <div className={`${PAD} relative flex flex-wrap items-center gap-x-16 gap-y-10 pb-24 pt-8`}>
            <div className="flex min-w-0 flex-[1_1_460px] flex-col gap-6">
              <span className="text-[15px] font-bold uppercase tracking-[0.16em]">{c.eyebrow}</span>
              <h1 className="text-[56px] font-bold leading-none tracking-[-0.03em] text-[#0B369A] min-[901px]:text-[96px]">{c.title}</h1>
              <p className="max-w-[540px] text-[26px] font-medium leading-[1.3]">{c.subtitle}</p>
              <ul className="flex flex-wrap gap-3">
                <li className="-rotate-2 rounded-full bg-[#0B369A] px-[22px] py-2.5 text-lg font-bold text-white">{c.pills[0]}</li>
                <li className="rotate-2 rounded-full border border-[#D9D1CA] bg-[#FAF8F5] px-[22px] py-2.5 text-lg font-bold text-[#0B369A]">{c.pills[1]}</li>
              </ul>
            </div>
            <div className="flex min-w-0 flex-[1_1_300px] justify-center">
              <div className="box-border h-[520px] w-[300px] max-w-full rotate-3 overflow-hidden rounded-[28px] border-[10px] border-[#FAF8F5] bg-[#0B0F14] shadow-[0_16px_40px_rgba(58,51,46,0.25)]">
                <Shot src={resumen} alt={c.summary.heroAlt} label="CAPTURA DE ESTADÍSTICAS" style={{ objectPosition: "top" }} />
              </div>
            </div>
          </div>
        </section>

        {/* Punto de partida */}
        <section className="border-y border-[#D9D1CA] bg-[#FAF8F5]" aria-labelledby="partida">
          <div className={`${PAD} flex flex-col gap-8 py-[72px]`}>
            <div className="flex flex-col gap-2.5">
              <span className={EYEBROW}>{c.start.eyebrow}</span>
              <h2 id="partida" className="text-[40px] font-bold leading-[1.05] tracking-[-0.02em] text-[#0B369A]">{c.start.title}</h2>
            </div>
            <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(220px,100%),1fr))] gap-5">
              {c.start.stats.map((s) => (
                <li key={s.label} className="rounded-2xl bg-[#ECE7E2] p-7">
                  <div className="text-[56px] font-bold leading-none text-[#0B369A]">{s.value}</div>
                  <div className="mt-2 text-[17px]">{s.label}</div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Lo que se produjo */}
        <section className={`${PAD} flex flex-col gap-8 pt-24`} aria-labelledby="producido">
          <div className="flex flex-col gap-2.5">
            <span className={EYEBROW}>{c.produced.eyebrow}</span>
            <h2 id="producido" className={`${H2} max-w-[820px] text-[#0B369A]`}>{c.produced.title}</h2>
            <p className="max-w-[720px] text-xl leading-[1.45]">{c.produced.text}</p>
          </div>
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(200px,100%),1fr))] gap-5">
            {c.produced.stats.map((s, i) => (
              <li key={s.label} className="rounded-2xl border border-[#D9D1CA] bg-[#FAF8F5] p-7">
                <div className={`text-[64px] font-bold leading-none ${i % 2 ? "text-[#C34811]" : "text-[#0B369A]"}`}>{s.value}</div>
                <div className="mt-2 text-[17px]">{s.label}</div>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-sm font-bold uppercase tracking-[0.1em] text-[#6F675F]">{c.produced.howLabel}</span>
            <span className="rounded-full bg-[#0B369A] px-4 py-2 text-[15px] font-bold text-white">{c.produced.how[0]}</span>
            <span className="rounded-full bg-[#C34811] px-4 py-2 text-[15px] font-bold text-white">{c.produced.how[1]}</span>
            <span className={CHIP}>{c.produced.places}</span>
          </div>
        </section>

        {/* Etapa 1 · historias */}
        <section className={`${PAD} flex flex-wrap items-center gap-x-[72px] gap-y-12 py-24`}>
          <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-[18px]">
            <span className={`${PILL} bg-[#0B369A] text-white`}>{c.stage1.tag}</span>
            <h2 className={`${H2} text-[#0B369A]`}>{c.stage1.title}</h2>
            <div className={`${BIG} text-[#C34811]`}>{c.stage1.value}</div>
            <p className="text-xl leading-[1.4]">{c.stage1.text}</p>
            <div className="mt-1.5 flex flex-wrap gap-2.5">
              <span className={CHIP}>{c.stage1.days}</span>
              <span className={CHIP}>{c.produced.places}</span>
            </div>
          </div>
          <div className="flex min-w-0 flex-[1_1_340px] justify-center">
            <DeskWindow title={c.stage1.windowTitle} className="-rotate-2" shadow="0 12px 28px rgba(58,51,46,0.18)">
              <div className="h-[440px]">
                <Shot src={resumen} alt={c.summary.formatAlt} label="CAPTURA DE ESTADÍSTICAS" className="bg-[#0B0F14]" style={{ objectPosition: "bottom" }} />
              </div>
            </DeskWindow>
          </div>
        </section>

        {/* Etapa 2 · reels */}
        <section className="bg-[#0B369A] text-white">
          <div className={`${PAD} flex flex-wrap items-center gap-x-[72px] gap-y-12 py-24`}>
            <div className="flex min-w-0 flex-[1_1_340px] justify-center">
              <DeskWindow title={c.stage2.windowTitle} className="-rotate-3" shadow="0 12px 28px rgba(0,0,0,0.3)">
                <div className="h-[440px]">
                  <Shot src={interacciones} alt={c.interactions.alt} label="CAPTURA DE ESTADÍSTICAS" className="bg-[#0B0F14]" style={{ objectPosition: "top" }} />
                </div>
              </DeskWindow>
            </div>
            <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-[18px]">
              <span className={`${PILL} bg-[#FAF8F5] text-[#0B369A]`}>{c.stage2.tag}</span>
              <h2 className={H2}>{c.stage2.title}</h2>
              <div className={`${BIG} text-[#FF8A5C]`}>{c.stage2.value}</div>
              <p className="text-xl leading-[1.4]">{c.stage2.text}</p>
            </div>
          </div>
        </section>

        {/* Antes vs después */}
        <section className={`${PAD} flex flex-col gap-8 py-24`} aria-labelledby="impacto">
          <div className="flex flex-col gap-2.5">
            <span className={EYEBROW}>{c.impact.eyebrow}</span>
            <h2 id="impacto" className={`${H2} max-w-[760px] text-[#0B369A]`}>{c.impact.title}</h2>
          </div>
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] gap-5">
            {c.impact.cards.map((k) => (
              <li key={k.title} className="flex flex-col gap-1.5 rounded-2xl border border-[#D9D1CA] bg-[#FAF8F5] p-7">
                <div className="text-[64px] font-bold leading-none text-[#C34811]">{k.value}</div>
                <div className="text-xl font-bold text-[#0B369A]">{k.title}</div>
                <div className="text-base">{k.text}</div>
              </li>
            ))}
          </ul>
          <p className="max-w-[900px] rounded-2xl border-2 border-dashed border-[#A89F96] bg-[#ECE7E2] px-7 py-6 text-[17px] leading-[1.5]">
            <b>{c.impact.noteLead}</b> {c.impact.note}
          </p>
        </section>

        {/* Cierre */}
        <section id="contacto" className={`${PAD} flex flex-col items-center gap-7 pb-12 pt-12 text-center`}>
          <h2 className="max-w-[760px] text-4xl font-bold leading-[1.02] tracking-[-0.03em] text-[#0B369A] min-[901px]:text-[56px]">{c.closing.title}</h2>
          <ContactLinks />
          <footer className="mt-14 w-full border-t border-[#D9D1CA] pt-5 text-sm">{c.closing.footer}</footer>
        </section>
      </main>
    </div>
  );
}
