import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import Circle from "@/components/Circle";
import DeskWindow from "@/components/DeskWindow";
import Shot from "@/components/Shot";
import SiteHeader from "@/components/SiteHeader";
import { publicAsset } from "@/lib/assets";
import { type ServiceItem, adsExample, calendarExample, contact, editExample, contentExamples, postExamples, sessionExamples, navPages, servicesPage } from "@/lib/content";

export const metadata: Metadata = { title: "Servicios · Evii Rost" };

type Cell = ["b" | "t" | "g", string];
const CAL: Cell[] = [
  ["g", ""], ["b", "Post"], ["g", ""], ["t", "Reel"], ["g", ""], ["b", "Story"], ["g", ""],
  ["t", "Reel"], ["g", ""], ["b", "Post"], ["g", ""], ["t", "Story"], ["b", "Reel"], ["g", ""],
];
const CELL = { b: "bg-[#0B369A] text-white", t: "bg-[#C34811] text-white", g: "bg-[#ECE7E2]" } as const;

function Row({
  item,
  bg,
  reverse = false,
  children,
}: {
  item: ServiceItem;
  bg: string;
  reverse?: boolean;
  children: ReactNode;
}) {
  return (
    <section className={`flex flex-wrap items-center gap-x-16 gap-y-8 ${reverse ? "flex-row-reverse" : ""}`}>
      <div
        className="relative flex h-[320px] min-w-0 flex-[1_1_420px] items-center justify-center overflow-hidden rounded-[28px] min-[901px]:h-[380px]"
        style={{ background: bg }}
      >
        {children}
      </div>
      <div className="flex min-w-0 flex-[1_1_360px] flex-col gap-4">
        <span aria-hidden className="text-[56px] font-bold leading-none tracking-[-0.03em] text-[#C34811] min-[901px]:text-[88px]">{item.n}</span>
        <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.02em] text-[#0B369A] min-[901px]:text-5xl">{item.title}</h2>
        {item.text && <p className="max-w-[460px] text-[21px] leading-[1.45]">{item.text}</p>}
        {item.more && <p className="max-w-[460px] text-[21px] leading-[1.45]">{item.more}</p>}
        {item.tags && (
          <ul className="flex max-w-[460px] flex-wrap gap-2" aria-label="Qué incluye">
            {item.tags.map((t) => (
              <li key={t} className="rounded-full bg-[#0B369A] px-3.5 py-1.5 text-[14px] font-semibold text-white">{t}</li>
            ))}
          </ul>
        )}
        {item.cta && (
          <Link
            href={item.cta.href}
            className="self-start rounded-full bg-[#C34811] px-6 py-3 text-[17px] font-bold text-white no-underline transition hover:bg-[#0B369A]"
          >
            {item.cta.label}
          </Link>
        )}
        <span className="self-start rounded-full border border-[#D9D1CA] bg-[#FAF8F5] px-[18px] py-2 text-[15px] font-semibold">{item.example}</span>
      </div>
    </section>
  );
}

export default function Servicios() {
  const calendar = publicAsset(calendarExample.src);
  const edit = publicAsset(editExample.src);
  const ads = publicAsset(adsExample.src);
  const [i1, i2, i3, i4, i5, i6] = servicesPage.items;

  return (
    <div className="relative overflow-hidden">
      <Circle size={440} color="azul" style={{ right: -300, top: 640 }} />
      <SiteHeader items={navPages} />

      <main className="relative mx-auto flex max-w-[1280px] flex-col gap-24 px-5 pb-28 pt-12 min-[901px]:px-10">
        <h1 className="text-[52px] font-bold leading-none tracking-[-0.03em] text-[#0B369A] min-[901px]:text-[88px]">{servicesPage.title}</h1>

        {/* 01 · Estrategia y gestión de redes */}
        <Row item={i1} bg="#0B369A">
          <DeskWindow title="Calendario de contenidos" className="-rotate-3" widthClass="w-[300px] min-[901px]:w-[370px]">
            {calendar ? (
              <a href={calendarExample.src} target="_blank" rel="noopener noreferrer" aria-label="Ver el calendario completo en una pestaña nueva" className="block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={calendar} alt={calendarExample.alt} loading="lazy" decoding="async" className="block h-auto w-full" />
              </a>
            ) : (
              <div className="grid grid-cols-7 gap-1 p-3 text-center text-[10px] font-semibold text-[#6F675F]">
                {["L", "M", "X", "J", "V", "S", "D"].map((d) => <span key={d}>{d}</span>)}
                {CAL.map(([k, l], i) => <span key={i} className={`h-[30px] rounded-[5px] text-[10px] font-semibold leading-[30px] ${CELL[k]}`}>{l}</span>)}
              </div>
            )}
          </DeskWindow>
        </Row>

        {/* 02 · Contenido y guiones */}
        <Row item={i2} bg="#C34811" reverse>
          <div className="flex items-center justify-center -space-x-5">
            {contentExamples.map((x, k) => (
              <div
                key={x.src}
                className="box-border h-[210px] w-[112px] shrink-0 overflow-hidden rounded-2xl border-[5px] border-[#FAF8F5] bg-[#0B369A] shadow-[0_14px_30px_rgba(0,0,0,0.3)] min-[901px]:h-[262px] min-[901px]:w-[140px]"
                style={{ transform: ["rotate(-7deg) translateY(8px)", "rotate(1deg) translateY(-8px)", "rotate(8deg) translateY(10px)"][k], zIndex: k === 1 ? 2 : 1 }}
              >
                <Shot src={publicAsset(x.src)} alt={x.alt} label="CAPTURA" style={{ objectPosition: "top" }} />
              </div>
            ))}
          </div>
          <span className="absolute bottom-[6%] right-[5%] z-10 rotate-4 rounded-full bg-[#FAF8F5] px-[18px] py-2 text-lg font-bold text-[#0B369A]">Reel + guion</span>
        </Row>

        {/* 03 · Posteos y carruseles */}
        <Row item={i3} bg="#D9D1CA">
          <div className="flex items-center justify-center -space-x-5 min-[901px]:-space-x-8">
            {postExamples.map((x, k) => (
              <div
                key={x.src}
                className="box-border aspect-[4/5] w-[76px] shrink-0 overflow-hidden rounded-lg border-[4px] border-[#FAF8F5] bg-[#0B369A] shadow-[0_12px_26px_rgba(58,51,46,0.3)] min-[901px]:w-[132px] min-[901px]:border-[5px]"
                style={{ transform: ["rotate(-9deg) translateY(10px)", "rotate(-3deg) translateY(-12px)", "rotate(2deg) translateY(6px)", "rotate(5deg) translateY(-10px)", "rotate(10deg) translateY(10px)"][k], zIndex: k === 2 ? 3 : k === 1 || k === 3 ? 2 : 1 }}
              >
                <Shot src={publicAsset(x.src)} alt={x.alt} label="POST" style={{ objectPosition: "top" }} />
              </div>
            ))}
          </div>
        </Row>

        {/* 04 · Edición de video */}
        <Row item={i4} bg="#0B369A" reverse>
          {edit ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={edit}
              alt={editExample.alt}
              width={1100}
              height={733}
              loading="lazy"
              decoding="async"
              className="block h-auto w-[86%] max-w-[500px] -rotate-3 drop-shadow-[0_14px_26px_rgba(0,0,0,0.35)]"
            />
          ) : (
            <DeskWindow title="Edición de video">
              <div className="relative flex flex-col gap-[9px] p-4">
                <div className="flex gap-[5px]">
                  <span className="h-[26px] w-20 rounded-[5px] bg-[#0B369A]" />
                  <span className="h-[26px] w-[50px] rounded-[5px] bg-[#C34811]" />
                  <span className="h-[26px] w-[110px] rounded-[5px] bg-[#0B369A]" />
                </div>
                <div className="flex gap-[5px] pl-[30px]">
                  <span className="box-border h-5 w-[120px] rounded-[5px] bg-[#6F675F] pl-2 text-[10px] font-semibold leading-5 text-white">Subtítulos</span>
                  <span className="h-5 w-[70px] rounded-[5px] bg-[#D9D1CA]" />
                </div>
                <div className="flex gap-[5px]">
                  <span className="h-3.5 w-[170px] rounded-[5px] bg-[#D9D1CA]" />
                  <span className="h-3.5 w-[60px] rounded-[5px] bg-[#A89F96]" />
                </div>
                <span aria-hidden className="absolute left-[136px] top-2 h-24 w-0.5 bg-[#C34811]" />
              </div>
            </DeskWindow>
          )}
        </Row>

        {/* 05 · Campañas en Meta Ads: gráfico ilustrativo, sin números */}
        <Row item={i5} bg="#C34811">
          {ads ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={ads}
              alt={adsExample.alt}
              width={1100}
              height={733}
              loading="lazy"
              decoding="async"
              className="block h-auto w-[86%] max-w-[500px] rotate-3 drop-shadow-[0_14px_26px_rgba(0,0,0,0.35)]"
            />
          ) : (
            <DeskWindow title="Gestión de pauta">
              <div className="flex gap-3.5 px-4 pt-3 text-[11px] font-semibold">
                <span className="flex items-center"><i className="mr-[5px] inline-block h-2 w-2 rounded-full bg-[#0B369A]" />Alcance</span>
                <span className="flex items-center"><i className="mr-[5px] inline-block h-2 w-2 rounded-full bg-[#C34811]" />Clientes</span>
              </div>
              <svg width="300" height="120" viewBox="0 0 300 120" role="img" aria-label="Gráfico ilustrativo de campaña" className="block h-auto w-full">
                <path d="M20 90 L80 70 L140 76 L200 44 L276 18" fill="none" stroke="#0B369A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20 106 L80 100 L140 94 L200 84 L276 68" fill="none" stroke="#C34811" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1 8" />
              </svg>
            </DeskWindow>
          )}
        </Row>

        {/* 06 · Fotos y UGC (marcadores) */}
        <Row item={i6} bg="#D9D1CA" reverse>
          <div className="flex items-center justify-center -space-x-6">
            {sessionExamples.map((x, k) => (
              <div
                key={x.src}
                className={`box-border shrink-0 bg-[#FAF8F5] px-2 pb-7 pt-2 shadow-[0_12px_26px_rgba(58,51,46,0.3)] ${k === 0 ? "w-[150px] min-[901px]:w-[230px]" : "w-[170px] min-[901px]:w-[290px]"}`}
                style={{ transform: k === 0 ? "rotate(-5deg) translateY(-8px)" : "rotate(4deg) translateY(14px)", zIndex: k }}
              >
                <div style={{ aspectRatio: x.ratio }} className="overflow-hidden bg-[#0B369A]">
                  <Shot src={publicAsset(x.src)} alt={x.alt} label="FOTO DE LA SESIÓN" />
                </div>
              </div>
            ))}
          </div>
        </Row>

        <div>
          <a
            href={contact.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-[#C34811] px-[30px] py-4 text-[17px] font-bold text-white no-underline transition hover:bg-[#0B369A]"
          >
            {servicesPage.cta}
          </a>
        </div>
      </main>
    </div>
  );
}
