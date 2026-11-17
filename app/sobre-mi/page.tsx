import type { Metadata } from "next";
import Link from "next/link";
import AboutCollage from "@/components/AboutCollage";
import AboutPhoto from "@/components/AboutPhoto";
import Circle from "@/components/Circle";
import SiteHeader from "@/components/SiteHeader";
import { aboutPage, contact, navPages } from "@/lib/content";

export const metadata: Metadata = { title: "Sobre mí · Evii Rost" };

const PILLS = [
  { cls: "bg-[#0B369A] text-white", rot: "-rotate-2" },
  { cls: "border border-[#D9D1CA] bg-[#FAF8F5] text-[#0B369A]", rot: "rotate-2" },
  { cls: "bg-[#C34811] text-white", rot: "-rotate-1" },
];

export default function SobreMi() {
  return (
    <div className="relative overflow-hidden">
      <Circle size={520} color="azul" style={{ left: -220, bottom: -220 }} />
      <Circle size={400} color="terracota" style={{ right: -300, top: 560 }} />
      <SiteHeader items={navPages} />

      <main className="relative mx-auto flex max-w-[1280px] flex-wrap items-center gap-x-[72px] gap-y-12 px-5 pb-28 pt-10 min-[901px]:px-10">
        <div className="flex min-w-0 flex-[1_1_380px] justify-center">
          <AboutPhoto />
        </div>

        <div className="flex min-w-0 flex-[1_1_400px] flex-col gap-7">
          <span className="text-[15px] font-bold uppercase tracking-[0.16em]">{aboutPage.eyebrow}</span>
          <h1 className="text-[52px] font-bold leading-none tracking-[-0.03em] text-[#0B369A] min-[901px]:text-[62px]">{aboutPage.more.title}</h1>
          <div className="flex max-w-[600px] flex-col gap-4 text-lg leading-[1.5]">
            {aboutPage.more.intro.map((t) => <p key={t}>{t}</p>)}
          </div>
          <div className="flex max-w-[600px] flex-col gap-3 text-lg leading-[1.5]">
            <h2 className="text-[22px] font-bold leading-[1.15] tracking-[-0.01em] text-[#0B369A]">{aboutPage.more.howTitle}</h2>
            {aboutPage.more.how.map((t) => <p key={t}>{t}</p>)}
          </div>
          <ul className="flex flex-wrap gap-3.5">
            {aboutPage.pills.map((p, i) => (
              <li key={p} className={`rounded-full px-6 py-3 text-lg font-bold ${PILLS[i].cls} ${PILLS[i].rot}`}>{p}</li>
            ))}
          </ul>
          <div className="mt-2 flex flex-wrap gap-3.5">
            <Link href="/#contacto" className="rounded-full bg-[#C34811] px-[30px] py-4 text-[17px] font-bold text-white no-underline transition hover:bg-[#0B369A]">
              Hablemos
            </Link>
            <a
              href={contact.instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-[#0B369A] px-7 py-3.5 text-[17px] font-bold text-[#0B369A] no-underline transition hover:bg-[#0B369A] hover:text-white"
            >
              {contact.instagram.label}
            </a>
          </div>
        </div>

        <div className="mt-6 w-full">
          <AboutCollage />
        </div>
      </main>
    </div>
  );
}
