"use client";

import { useRef, useState, type CSSProperties, type ReactNode } from "react";
import { hero, serviceDetails } from "@/lib/content";
import Sticker from "./Sticker";
import ServiceDialog from "./ServiceDialog";

/* Pieza clickeable del collage (medidas en px del lienzo 700x340). Es un <button>:
   todo su interior son <span> para que el HTML sea válido. */
function Piece({
  id,
  title,
  onOpen,
  className = "",
  style,
  i,
  barBottom = false,
  plain = false,
  btnRef,
  children,
}: {
  id: string;
  title: string;
  onOpen: (id: string, el: HTMLButtonElement) => void;
  className?: string;
  style?: CSSProperties;
  i: number;
  barBottom?: boolean;
  plain?: boolean; // sin barra de ventana (nota, tarjeta)
  btnRef?: React.Ref<HTMLButtonElement>;
  children?: ReactNode;
}) {
  const bar = (
    <span className={`flex items-center gap-1.5 bg-[#ECE7E2] px-3 py-2 ${barBottom ? "border-t" : "border-b"} border-[#D9D1CA]`}>
      <span className="cw-dots flex items-center gap-1.5">
        <i className="h-[7px] w-[7px] rounded-full bg-[#C34811]" />
        <i className="h-[7px] w-[7px] rounded-full bg-[#B8AFA5]" />
        <i className="h-[7px] w-[7px] rounded-full bg-[#B8AFA5]" />
      </span>
      <b className="cw-title ml-1 whitespace-nowrap font-bold tracking-tight text-[#0B369A] sm:ml-2">{title}</b>
    </span>
  );
  return (
    <button
      ref={btnRef}
      type="button"
      aria-haspopup="dialog"
      aria-label={`${title}: ver detalle`}
      onClick={(e) => onOpen(id, e.currentTarget)}
      className={`cw cw-btn ${plain ? "" : "overflow-hidden rounded-[10px] border border-[#D9D1CA] bg-[#FAF8F5]"} ${className}`}
      style={{ ...style, "--i": i } as CSSProperties}
    >
      {!plain && !barBottom && bar}
      {plain ? children : <span className="relative block flex-1">{children}</span>}
      {!plain && barBottom && bar}
    </button>
  );
}

type Cell = ["b" | "t" | "g", string];
const calendar: Cell[][] = [
  [["g", ""], ["b", "Post"], ["g", ""], ["t", "Reel"], ["g", ""], ["b", "Story"], ["g", ""]],
  [["t", "Reel"], ["g", ""], ["b", "Post"], ["g", ""], ["t", "Story"], ["b", "Reel"], ["g", ""]],
];
const cellColor = { b: "bg-[#0B369A]", t: "bg-[#C34811]", g: "bg-[#ECE7E2]" } as const;

export default function Hero({ smileSrc = null }: { smileSrc?: string | null }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const creationRef = useRef<HTMLButtonElement>(null);
  const [openId, setOpenId] = useState<string | null>(null);
  const service = serviceDetails.items.find((s) => s.id === openId) ?? null;

  const open = (id: string, el?: HTMLElement | null) => {
    triggerRef.current = el ?? null;
    setOpenId(id); // una ventana por vez
  };
  const close = () => {
    setOpenId(null);
    // Devuelve el foco a lo que abrió la ventana, sin mover el scroll.
    requestAnimationFrame(() => triggerRef.current?.focus({ preventScroll: true }));
  };

  // Profundidad con el cursor: solo escritorio con mouse y sin movimiento reducido,
  // y limitada al área del collage.
  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = stageRef.current;
    if (!el) return;
    const ok =
      window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 1024px)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!ok) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--px", `${(x * 14).toFixed(1)}px`);
    el.style.setProperty("--py", `${(y * 10).toFixed(1)}px`);
  };
  const onLeave = () => {
    stageRef.current?.style.setProperty("--px", "0px");
    stageRef.current?.style.setProperty("--py", "0px");
  };

  return (
    <section id="inicio" className="dots relative overflow-hidden px-6 pb-16 pt-[72px] text-center lg:pb-20">
      {/* Círculos decorativos */}
      <div aria-hidden className="pointer-events-none absolute -bottom-[14%] -left-[16%] max-[899px]:hidden aspect-square w-[min(56vw,560px)] min-w-[260px] rounded-full bg-[#0B369A]" />
      <div aria-hidden className="pointer-events-none absolute -right-[10%] bottom-[8%] max-[899px]:hidden aspect-square w-[min(36vw,430px)] min-w-[170px] rounded-full bg-[#C34811]" />
      <div aria-hidden className="pointer-events-none absolute -bottom-[10%] left-[68%] max-[899px]:hidden aspect-square w-[min(14vw,200px)] min-w-[80px] rounded-full bg-[#0B369A]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center">
        <h1 className="text-[54px] font-bold leading-[1] tracking-[-0.03em] text-[#0B369A] md:text-[96px]">
          {hero.title}
        </h1>
        <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#3A332E] sm:text-sm md:mt-4">
          {hero.eyebrow}
        </p>

        {/* Collage de servicios (700×340): cinco piezas clickeables */}
        <div
          className="collage-box mt-8 md:mt-10"
          onPointerMove={onMove}
          onPointerLeave={onLeave}
          role="group"
          aria-label="Mis servicios"
        >
          <div ref={stageRef} className="collage-stage">
            {/* Creación de contenido (ventana azul) + sticker encima */}
            <Piece
              id="contenido"
              title="Creación de contenido"
              onOpen={open}
              i={0}
              barBottom
              btnRef={creationRef}
              className="z-[3]"
              style={{ left: 258, top: 98, width: 240, height: 224 }}
            >
              <span className="absolute inset-0 block bg-[#0B369A]" />
            </Piece>

            {/* Gestión de redes */}
            <Piece id="redes" title="Gestión de redes" onOpen={open} i={1} className="z-[2]" style={{ left: 0, top: 8, width: 285, height: 152 }}>
              <span className="block px-3 pt-2.5">
                <span className="mb-1.5 grid grid-cols-7 gap-1 text-center text-[9px] font-semibold text-[#3A332E]/70">
                  {["L", "M", "X", "J", "V", "S", "D"].map((d) => <span key={d}>{d}</span>)}
                </span>
                {calendar.map((row, r) => (
                  <span key={r} className="mb-1 grid grid-cols-7 gap-1">
                    {row.map(([kind, label], k) => (
                      <span key={k} className={`flex h-[22px] items-center justify-center rounded-[5px] text-[8px] font-bold text-white ${cellColor[kind]}`}>
                        {label}
                      </span>
                    ))}
                  </span>
                ))}
              </span>
            </Piece>

            {/* Gestión de pauta — leyenda + gráfico ilustrativo, sin números */}
            <Piece id="pauta" title="Gestión de pauta" onOpen={open} i={2} className="z-[2]" style={{ left: 522, top: 0, width: 178, height: 122 }}>
              <span className="flex items-center gap-3 px-3 pt-2 text-[8.5px] font-semibold text-[#0B369A]">
                <span className="flex items-center gap-1"><i className="h-[6px] w-[6px] rounded-full bg-[#0B369A]" />Alcance</span>
                <span className="flex items-center gap-1"><i className="h-[6px] w-[6px] rounded-full bg-[#C34811]" />Clientes</span>
              </span>
              <svg viewBox="0 0 180 70" className="block w-full px-2" fill="none" aria-hidden>
                <path d="M8 62H172" stroke="#D9D1CA" strokeWidth="1.5" />
                <path d="M10 50 38 38 70 42 104 24 140 16 168 6" stroke="#0B369A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 58 40 54 74 50 108 40 140 34 168 26" stroke="#C34811" strokeWidth="2" strokeDasharray="1.5 4" strokeLinecap="round" />
              </svg>
            </Piece>

            {/* Edición de video */}
            <Piece id="video" title="Edición de video" onOpen={open} i={3} className="z-[2]" style={{ left: 22, top: 178, width: 285, height: 144 }}>
              <span className="relative block px-3 pt-3">
                <span className="flex gap-1.5">
                  <span className="h-[18px] w-[92px] rounded-[4px] bg-[#0B369A]" />
                  <span className="h-[18px] w-[46px] rounded-[4px] bg-[#C34811]" />
                  <span className="h-[18px] flex-1 rounded-[4px] bg-[#0B369A]" />
                </span>
                <span className="ml-7 mt-2 flex gap-1.5">
                  <span className="flex h-[14px] w-[100px] items-center rounded-[4px] bg-[#A89F95] px-1.5 text-[7.5px] font-bold leading-none text-white">Subtítulos</span>
                  <span className="h-[14px] w-[62px] rounded-[4px] bg-[#D9D1CA]" />
                </span>
                <span className="mt-2 flex gap-1.5">
                  <span className="h-[12px] w-[150px] rounded-[4px] bg-[#D9D1CA]" />
                  <span className="h-[12px] w-[50px] rounded-[4px] bg-[#A89F95]" />
                </span>
                <span aria-hidden className="absolute bottom-3 left-[44%] top-1.5 w-[2px] bg-[#C34811]" />
              </span>
            </Piece>

            {/* Diseño de posteos — tarjeta rotada 3°, debajo de Gestión de pauta */}
            <Piece
              id="posteos"
              title="Diseño de posteos"
              onOpen={open}
              i={4}
              plain
              className="z-[2] justify-between rounded-[16px] border-[5px] border-[#FAF8F5] bg-[#0B369A] p-4"
              style={{ left: 528, top: 136, width: 158, height: 192, rotate: "3deg" }}
            >
              <span className="block text-left text-[9px] font-bold uppercase leading-[1.25] tracking-[0.14em] text-white">
                Diseño de<br />posteos
              </span>
              <span className="block text-left text-[24px] font-bold leading-[1.05] tracking-[-0.03em] text-white">
                Tu marca,
                <br />
                <span className="text-[#FF8A5C]">en el feed</span>
              </span>
              <span className="block h-[5px] w-[34px] rounded-full bg-[#FF8A5C]" />
            </Piece>

            {/* Sticker: capa independiente, por encima de todo */}
            <Sticker className="absolute z-[5]" style={{ left: 232, top: 56, width: 296, height: 231 }} smileSrc={smileSrc} />
          </div>
        </div>

        <p className="mt-4 text-[13px] text-[#3A332E] md:mt-5 md:text-sm">{hero.hint}</p>

        <a
          href={hero.cta.href}
          className="relative z-10 mt-6 inline-flex items-center rounded-full bg-[#C34811] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#C34811]/25 transition hover:-translate-y-0.5 hover:bg-[#0B369A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0B369A] md:mt-8"
        >
          {hero.cta.label}
        </a>
      </div>

      {service && <ServiceDialog service={service} onClose={close} />}
    </section>
  );
}
