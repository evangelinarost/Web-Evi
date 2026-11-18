import { howToWork } from "@/lib/content";

type Card = (typeof howToWork.cards)[number];

/** Una tarjeta con forma de ventana de escritorio (barra con tres puntos y título). */
function WorkCard({ c }: { c: Card }) {
  const f = c.featured;
  return (
    <li
      className={`relative flex flex-col overflow-hidden rounded-2xl border ${
        f
          ? "border-[#0B369A] bg-[#0B369A] text-white shadow-[0_20px_44px_rgba(11,54,154,0.35)] min-[901px]:-translate-y-3 min-[901px]:-rotate-1"
          : "border-[#D9D1CA] bg-[#FAF8F5] shadow-[0_12px_28px_rgba(58,51,46,0.14)]"
      }`}
    >
      <div className={`flex h-[30px] flex-none items-center gap-[5px] border-b px-3.5 ${f ? "border-[#0A2F85] bg-[#0A2F85]" : "border-[#D9D1CA] bg-[#ECE7E2]"}`}>
        <i className={`block h-[7px] w-[7px] rounded-full ${f ? "bg-[#FF8A5C]" : "bg-[#C34811]"}`} />
        <i className={`block h-[7px] w-[7px] rounded-full ${f ? "bg-[#6F86C6]" : "bg-[#A89F96]"}`} />
        <i className={`block h-[7px] w-[7px] rounded-full ${f ? "bg-[#6F86C6]" : "bg-[#A89F96]"}`} />
        <span className={`ml-2 text-xs font-bold ${f ? "text-white" : "text-[#0B369A]"}`}>{c.window}</span>
      </div>
      {c.badge && (
        <span className="absolute right-4 top-11 rotate-3 rounded-full bg-[#C34811] px-3.5 py-1.5 text-[13px] font-bold uppercase tracking-[0.06em] text-white">
          {c.badge}
        </span>
      )}
      <div className={`flex flex-1 flex-col gap-3.5 p-7 ${c.badge ? "pt-10" : ""}`}>
        <h3 className={`text-[30px] font-bold leading-[1.08] tracking-[-0.02em] ${f ? "text-white" : "text-[#0B369A]"}`}>{c.title}</h3>
        <p className="text-lg leading-[1.45]">{c.text}</p>
        <ul className="flex flex-col gap-[9px] text-[17px] leading-[1.35]">
          {c.items.map((t) => (
            <li key={t} className="flex items-start gap-2.5">
              <span aria-hidden className={`mt-[7px] block h-[9px] w-[9px] flex-none rounded-full ${f ? "bg-[#FF8A5C]" : "bg-[#C34811]"}`} />
              {t}
            </li>
          ))}
        </ul>
        <a
          href={c.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-auto self-start rounded-full px-[26px] py-3.5 text-base font-bold no-underline hover:underline hover:underline-offset-4 ${
            f
              ? "mt-5 bg-[#C34811] text-white focus-visible:outline-white"
              : "mt-5 border-2 border-[#0B369A] bg-[#FAF8F5] text-[#0B369A]"
          }`}
        >
          {c.cta}
        </a>
      </div>
    </li>
  );
}

/** Bloque "Cómo trabajar conmigo": tres formas de contratar, con la oferta nueva destacada. */
export default function HowToWork() {
  return (
    <section className="relative mx-auto flex max-w-[1280px] flex-col gap-10 px-5 pb-10 pt-16 min-[901px]:px-10 min-[901px]:pt-[104px]" aria-labelledby="como-trabajar">
      <div className="flex max-w-[820px] flex-col gap-3.5">
        <span className="text-[15px] font-bold uppercase tracking-[0.16em]">{howToWork.eyebrow}</span>
        <h2 id="como-trabajar" className="text-[38px] font-bold leading-[1.04] tracking-[-0.03em] text-[#0B369A] min-[901px]:text-[56px]">{howToWork.title}</h2>
        <p className="max-w-[700px] text-[22px] leading-[1.45]">{howToWork.text}</p>
      </div>
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] items-stretch gap-7">
        {howToWork.cards.map((c) => (
          <WorkCard key={c.title} c={c} />
        ))}
      </ul>
      <p className="mt-2 text-center text-lg font-semibold">{howToWork.closing}</p>
    </section>
  );
}
