import type { Metadata } from "next";
import Circle from "@/components/Circle";
import ContactLinks from "@/components/ContactLinks";
import DeskWindow from "@/components/DeskWindow";
import Shot from "@/components/Shot";
import SiteHeader from "@/components/SiteHeader";
import { publicAsset } from "@/lib/assets";
import { navCase, wald } from "@/lib/content";

export const metadata: Metadata = {
  title: "Caso WALD · Evii Rost",
  // NO indexable hasta que Leo (dueño de WALD) dé el OK para publicar nombre, números y cita.
  // Cuando lo confirme: borrar la línea "robots" de abajo.
  robots: { index: false, follow: false },
};

const PAD = "mx-auto max-w-[1280px] px-5 min-[901px]:px-10";
const BIG = "text-[56px] font-bold leading-none tracking-[-0.03em] min-[901px]:text-[88px]";
const H2 = "text-4xl font-bold leading-[1.05] tracking-[-0.02em] min-[901px]:text-5xl";
const PILL = "self-start rounded-full px-[18px] py-2 text-sm font-bold uppercase tracking-[0.08em]";

export default function CasoWald() {
  const reel = publicAsset(wald.reel.src);
  const s1 = publicAsset(wald.stage1.shot.src);
  const s2 = wald.stage2.shots.map((x) => ({ ...x, file: publicAsset(x.src) }));

  return (
    <div className="overflow-hidden">
      <SiteHeader items={navCase} />

      <main>
        {/* Portada del caso */}
        <section className="relative overflow-hidden">
          <Circle size={520} color="terracota" style={{ right: -180, top: 32 }} />
          <Circle size={420} color="azul" style={{ left: -320, bottom: -300 }} />
          <div className={`${PAD} relative flex flex-wrap items-center gap-x-16 gap-y-10 pb-24 pt-8`}>
            <div className="flex min-w-0 flex-[1_1_460px] flex-col gap-6">
              <span className="text-[15px] font-bold uppercase tracking-[0.16em]">{wald.eyebrow}</span>
              <h1 className="text-[56px] font-bold leading-none tracking-[-0.03em] text-[#0B369A] min-[901px]:text-[96px]">{wald.title}</h1>
              <p className="max-w-[520px] text-[26px] font-medium leading-[1.3]">{wald.subtitle}</p>
              <ul className="flex flex-wrap gap-3">
                <li className="-rotate-2 rounded-full bg-[#0B369A] px-[22px] py-2.5 text-lg font-bold text-white">{wald.pills[0]}</li>
                <li className="rotate-2 rounded-full border border-[#D9D1CA] bg-[#FAF8F5] px-[22px] py-2.5 text-lg font-bold text-[#0B369A]">{wald.pills[1]}</li>
              </ul>
            </div>
            <div className="flex min-w-0 flex-[1_1_300px] justify-center">
              <div className="box-border h-[520px] w-[300px] max-w-full rotate-3 overflow-hidden rounded-[28px] border-[10px] border-[#FAF8F5] bg-[#0B369A] shadow-[0_16px_40px_rgba(58,51,46,0.25)]">
                <Shot src={reel} alt={wald.reel.alt} label={wald.reel.label} style={{ objectPosition: "0% 50%" }} />
              </div>
            </div>
          </div>
        </section>

        {/* Punto de partida */}
        <section className="border-y border-[#D9D1CA] bg-[#FAF8F5]" aria-labelledby="partida">
          <div className={`${PAD} flex flex-col gap-8 py-[72px]`}>
            <h2 id="partida" className="text-[40px] font-bold leading-[1.05] tracking-[-0.02em] text-[#0B369A]">{wald.start.title}</h2>
            <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(220px,100%),1fr))] gap-5">
              {wald.start.stats.map((s) => (
                <li key={s.label} className="rounded-2xl bg-[#ECE7E2] p-7">
                  <div className="text-[56px] font-bold leading-none text-[#0B369A]">{s.value}</div>
                  <div className="mt-2 text-[17px]">{s.label}</div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Etapa 1 */}
        <section className={`${PAD} flex flex-wrap items-center gap-x-[72px] gap-y-12 py-24`}>
          <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-[18px]">
            <span className={`${PILL} bg-[#0B369A] text-white`}>{wald.stage1.tag}</span>
            <h2 className={`${H2} text-[#0B369A]`}>{wald.stage1.title}</h2>
            <div className={`${BIG} text-[#C34811]`}>{wald.stage1.value}</div>
            <p className="text-xl">{wald.stage1.text}</p>
          </div>
          <div className="flex min-w-0 flex-[1_1_340px] justify-center">
            <DeskWindow title={wald.stage1.windowTitle} className="-rotate-2" shadow="0 12px 28px rgba(58,51,46,0.18)">
              <div className={s1 ? "" : "h-[440px]"}>
                <Shot src={s1} alt={wald.stage1.shot.alt} label={wald.stage1.shot.label} className="bg-[#0B369A]" style={{ objectPosition: "top", height: s1 ? "auto" : undefined }} />
              </div>
            </DeskWindow>
          </div>
        </section>

        {/* Etapa 2 */}
        <section className="bg-[#0B369A] text-white">
          <div className={`${PAD} flex flex-wrap items-center gap-x-[72px] gap-y-12 py-24`}>
            <div className="flex min-w-0 flex-[1_1_340px] justify-center">
              {/* Tres capturas superpuestas con sus estadísticas a la vista */}
              <div className="relative aspect-[1/1.08] w-full max-w-[520px]">
                {s2.map((x, k) => (
                  <div
                    key={x.src}
                    className="absolute box-border w-[42%] overflow-hidden rounded-xl border-[6px] border-[#FAF8F5] bg-[#0B369A] shadow-[0_12px_28px_rgba(0,0,0,0.35)]"
                    style={{ aspectRatio: x.ratio, ...[
                      { left: 0, top: "14%", transform: "rotate(-6deg)", zIndex: 1 },
                      { left: "29%", top: 0, transform: "rotate(2deg)", zIndex: 2 },
                      { left: "58%", top: "18%", transform: "rotate(7deg)", zIndex: 3 },
                    ][k] }}
                  >
                    <Shot src={x.file} alt={x.alt} label="CAPTURA" style={{ objectPosition: "top" }} />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-[18px]">
              <span className={`${PILL} bg-[#FAF8F5] text-[#0B369A]`}>{wald.stage2.tag}</span>
              <h2 className={H2}>{wald.stage2.title}</h2>
              <div className={`${BIG} text-[#FF8A5C]`}>{wald.stage2.value}</div>
              <p className="text-xl">{wald.stage2.text}</p>
              <p className="text-xl">{wald.stage2.story}</p>
              <p className="text-base text-[#ECE7E2]">{wald.stage2.note}</p>
            </div>
          </div>
        </section>

        {/* Etapa 3 */}
        <section className={`${PAD} flex flex-col gap-8 py-24`}>
          <span className={`${PILL} bg-[#C34811] text-white`}>{wald.stage3.tag}</span>
          <h2 className={`${H2} max-w-[760px] text-[#0B369A]`}>{wald.stage3.title}</h2>
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] gap-5">
            {wald.stage3.cards.map((c) => (
              <li key={c} className="flex min-h-[120px] items-end rounded-2xl border border-[#D9D1CA] bg-[#FAF8F5] p-7 text-[22px] font-bold text-[#0B369A]">{c}</li>
            ))}
          </ul>
        </section>

        {/* Cita de Leo: pendiente del OK de Leo antes de publicar */}
        <section className="bg-[#C34811] text-white">
          <figure className="mx-auto flex max-w-[980px] flex-col gap-5 px-5 py-[88px] min-[901px]:px-10">
            <blockquote className="text-[30px] font-bold leading-[1.12] tracking-[-0.02em] min-[901px]:text-[44px]">{wald.quote.text}</blockquote>
            <figcaption className="text-lg font-semibold">{wald.quote.author}</figcaption>
          </figure>
        </section>

        {/* Cierre */}
        <section id="contacto" className={`${PAD} flex flex-col items-center gap-7 pb-12 pt-24 text-center`}>
          <h2 className="max-w-[760px] text-4xl font-bold leading-[1.02] tracking-[-0.03em] text-[#0B369A] min-[901px]:text-[56px]">{wald.closing.title}</h2>
          <ContactLinks />
          <footer className="mt-14 w-full border-t border-[#D9D1CA] pt-5 text-sm">{wald.closing.footer}</footer>
        </section>
      </main>
    </div>
  );
}
