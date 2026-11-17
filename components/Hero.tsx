"use client";

import Link from "next/link";
import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import { collageTips, hero } from "@/lib/content";
import Sticker from "./Sticker";

type Id = keyof typeof collageTips;

/** Barra superior de las ventanas: tres puntitos (el primero terracota) y título. */
function Bar({ title }: { title: string }) {
  return (
    <span className="flex h-[26px] items-center gap-[5px] border-b border-[#D9D1CA] bg-[#ECE7E2] px-[10px]">
      <i className="block h-[7px] w-[7px] rounded-full bg-[#C34811]" />
      <i className="block h-[7px] w-[7px] rounded-full bg-[#A89F96]" />
      <i className="block h-[7px] w-[7px] rounded-full bg-[#A89F96]" />
      <b className="ml-2 text-[11px] font-bold text-[#0B369A]">{title}</b>
    </span>
  );
}

/**
 * Pieza del collage: un <button> accesible. El cartelito se muestra con hover y con foco de
 * teclado (CSS). En pantallas táctiles el toque lo alterna (Safari en iPhone no enfoca botones).
 */
function Piece({
  id,
  style,
  edge,
  dir,
  open,
  onTap,
  children,
}: {
  id: Id;
  style: CSSProperties;
  edge?: "l" | "r";
  dir: "up" | "down";
  open: boolean;
  onTap: (id: Id, el: HTMLButtonElement) => void;
  children: ReactNode;
}) {
  const tip = collageTips[id];
  const tipId = `tip-${id}`;
  return (
    <button
      type="button"
      className="svc"
      data-id={id}
      data-edge={edge}
      data-open={open}
      aria-label={tip.title}
      aria-describedby={tipId}
      onClick={(e) => onTap(id, e.currentTarget)}
      style={style}
    >
      {children}
      <span id={tipId} className={`tip ${dir === "up" ? "tip-up" : "tip-down"}`}>
        <b>{tip.title}</b>
        {tip.text}
      </span>
    </button>
  );
}

const CAL: [("b" | "t" | "g"), string][] = [
  ["g", ""], ["b", "Post"], ["g", ""], ["t", "Reel"], ["g", ""], ["b", "Story"], ["g", ""],
  ["t", "Reel"], ["g", ""], ["b", "Post"], ["g", ""], ["t", "Story"], ["b", "Reel"], ["g", ""],
];
const CELL = { b: "bg-[#0B369A] text-white", t: "bg-[#C34811] text-white", g: "bg-[#ECE7E2]" } as const;

export default function Hero({ smileSrc }: { smileSrc: string | null }) {
  const [openId, setOpenId] = useState<Id | null>(null);

  const onTap = (id: Id, el: HTMLButtonElement) => {
    // Con ratón alcanzan hover y foco; solo en táctil el toque alterna el cartelito.
    if (!window.matchMedia("(hover: none)").matches) return;
    if (openId === id) { setOpenId(null); el.blur(); } else setOpenId(id);
  };

  // Tocar fuera del collage o apretar Escape cierra el cartelito abierto.
  useEffect(() => {
    if (!openId) return;
    const out = (e: PointerEvent) => {
      if (!(e.target as Element).closest(".collage-box")) setOpenId(null);
    };
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpenId(null);
    document.addEventListener("pointerdown", out);
    document.addEventListener("keydown", esc);
    return () => {
      document.removeEventListener("pointerdown", out);
      document.removeEventListener("keydown", esc);
    };
  }, [openId]);

  return (
    <section
      id="inicio"
      className="relative z-10 mx-auto flex max-w-[1280px] flex-col items-center gap-9 px-5 pb-[120px] pt-10 text-center min-[901px]:px-10"
    >
      <h1 className="text-[54px] font-bold leading-none tracking-[-0.03em] text-[#0B369A] min-[901px]:text-[96px]">
        {hero.title}
      </h1>
      <p className="-mt-3 text-[15px] font-bold uppercase tracking-[0.16em]">{hero.eyebrow}</p>

      {/* Collage de servicios (700 × 340): cinco piezas, cada una un botón */}
      <div className="collage-box" role="group" aria-label="Mis servicios">
        <div className="collage-stage">
          {/* Gestión de redes */}
          <Piece id="redes" edge="l" dir="up" open={openId === "redes"} onTap={onTap} style={{ left: 0, top: 20, width: 285, height: 150 }}>
            <span className="win">
              <Bar title="Gestión de redes" />
              <span className="grid grid-cols-7 gap-1 px-3 py-[10px] text-center text-[9px] font-semibold text-[#6F675F]">
                {["L", "M", "X", "J", "V", "S", "D"].map((d) => <span key={d}>{d}</span>)}
                {CAL.map(([k, label], i) => (
                  <span key={i} className={`h-6 rounded-[4px] text-[8px] leading-6 ${CELL[k]}`}>{label}</span>
                ))}
              </span>
            </span>
          </Piece>

          {/* Edición de video */}
          <Piece id="video" edge="l" dir="down" open={openId === "video"} onTap={onTap} style={{ left: 20, top: 190, width: 250, height: 140 }}>
            <span className="win">
              <Bar title="Edición de video" />
              <span className="relative flex flex-col gap-[7px] p-3">
                <span className="flex gap-1">
                  <span className="h-5 w-[70px] rounded-[4px] bg-[#0B369A]" />
                  <span className="h-5 w-11 rounded-[4px] bg-[#C34811]" />
                  <span className="h-5 w-[90px] rounded-[4px] bg-[#0B369A]" />
                </span>
                <span className="flex gap-1 pl-7">
                  <span className="box-border h-4 w-[100px] rounded-[4px] bg-[#6F675F] pl-1.5 text-[8px] font-semibold leading-4 text-white">Subtítulos</span>
                  <span className="h-4 w-[60px] rounded-[4px] bg-[#D9D1CA]" />
                </span>
                <span className="flex gap-1">
                  <span className="h-3 w-[150px] rounded-[4px] bg-[#D9D1CA]" />
                  <span className="h-3 w-[50px] rounded-[4px] bg-[#A89F96]" />
                </span>
                <span aria-hidden className="absolute left-[118px] top-1.5 h-[76px] w-0.5 bg-[#C34811]" />
              </span>
            </span>
          </Piece>

          {/* Creación de contenido: ventana azul (el sticker va encima, como capa aparte) */}
          <Piece id="contenido" dir="down" open={openId === "contenido"} onTap={onTap} style={{ left: 255, top: 110, width: 230, height: 220 }}>
            <span className="win !border-[#D9D1CA] !bg-[#0B369A] !shadow-[0_12px_28px_rgba(58,51,46,0.18)]">
              <span className="absolute inset-x-0 bottom-0 flex h-[34px] items-center gap-[5px] border-t border-[#D9D1CA] bg-[#FAF8F5] px-3">
                <i className="block h-[7px] w-[7px] rounded-full bg-[#C34811]" />
                <i className="block h-[7px] w-[7px] rounded-full bg-[#A89F96]" />
                <i className="block h-[7px] w-[7px] rounded-full bg-[#A89F96]" />
                <b className="ml-2 text-[11px] font-bold text-[#0B369A]">Creación de contenido</b>
              </span>
            </span>
          </Piece>

          {/* Sticker: capa independiente, por encima de las ventanas. Posición como en el diseño. */}
          <Sticker smileSrc={smileSrc} className="absolute z-[4]" style={{ left: 225, top: 66, width: 290, height: 226 }} />

          {/* Gestión de pauta: gráfico ilustrativo, sin números */}
          <Piece id="pauta" edge="r" dir="up" open={openId === "pauta"} onTap={onTap} style={{ left: 520, top: 14, width: 180, height: 120 }}>
            <span className="win">
              <Bar title="Gestión de pauta" />
              <span className="flex gap-3 px-3 pt-[7px] text-[9px] font-semibold text-[#3A332E]">
                <span className="flex items-center"><i className="mr-1 inline-block h-[7px] w-[7px] rounded-full bg-[#0B369A]" />Alcance</span>
                <span className="flex items-center"><i className="mr-1 inline-block h-[7px] w-[7px] rounded-full bg-[#C34811]" />Clientes</span>
              </span>
              <svg width="180" height="64" viewBox="0 0 180 64" aria-hidden="true" className="block">
                <path d="M14 50 L50 38 L86 42 L122 24 L166 10" fill="none" stroke="#0B369A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14 58 L50 54 L86 50 L122 44 L166 36" fill="none" stroke="#C34811" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1 6" />
              </svg>
            </span>
          </Piece>

          {/* Diseño de posteos: tarjeta rotada 3° */}
          <Piece id="posteos" edge="r" dir="down" open={openId === "posteos"} onTap={onTap} style={{ left: 530, top: 150, width: 150, height: 180 }}>
            <span className="absolute inset-0 flex rotate-3 flex-col justify-between rounded-[10px] border-[5px] border-[#FAF8F5] bg-[#0B369A] p-3.5 text-white shadow-[0_12px_28px_rgba(58,51,46,0.22)]">
              <span className="text-[11px] font-bold uppercase tracking-[0.08em]">Diseño de posteos</span>
              <span className="text-[26px] font-bold leading-none tracking-[-0.02em]">
                Tu marca,<br /><span className="text-[#FF8A5C]">en el feed</span>
              </span>
              <span className="h-1.5 w-10 rounded-[3px] bg-[#FF8A5C]" />
            </span>
          </Piece>
        </div>
      </div>

      <p className="-mt-2 text-sm font-semibold">{hero.hint}</p>
      <Link
        href={hero.cta.href}
        className="mt-4 rounded-full bg-[#C34811] px-[34px] py-4 text-[17px] font-bold text-white no-underline transition hover:bg-[#0B369A]"
      >
        {hero.cta.label}
      </Link>
    </section>
  );
}
