"use client";

import { useEffect, useState } from "react";
import { projects } from "@/lib/content";
import Window from "./Window";

function Folder({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 120 96" className="w-full drop-shadow-[0_10px_10px_rgba(11,54,154,0.25)]" aria-hidden>
      <path d="M6 18a8 8 0 0 1 8-8h28l10 10h54a8 8 0 0 1 8 8v8H6z" fill="#3E67C4" />
      <g className="origin-bottom transition-transform duration-300" style={{ transform: open ? "rotateX(-18deg)" : "none", transformOrigin: "bottom" }}>
        <rect x="6" y="30" width="108" height="58" rx="8" fill="#2F55AE" />
        <rect x="6" y="30" width="108" height="8" rx="4" fill="#fff" opacity=".18" />
      </g>
    </svg>
  );
}

export default function Projects() {
  const [openId, setOpenId] = useState<string | null>(null);
  const current = projects.items.find((p) => p.id === openId);

  useEffect(() => {
    if (!openId) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenId(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openId]);

  return (
    <section id="proyectos" className="bg-[#CFC6BE]/60 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mb-12 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#0B369A]">{projects.eyebrow}</p>
          <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-[#0B369A] sm:text-5xl">
            {projects.title}
          </h2>
          <p className="mt-3 text-[#0B369A]/70">{projects.hint}</p>
        </div>

        <ul className="reveal flex flex-wrap justify-center gap-6 sm:justify-start sm:gap-10">
          {projects.items.map((p) => {
            const isOpen = openId === p.id;
            return (
              <li key={p.id}>
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : p.id)}
                  aria-expanded={isOpen}
                  aria-controls={`proyecto-${p.id}`}
                  className="group flex w-36 flex-col items-center gap-3 rounded-2xl p-3 transition hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0B369A] sm:w-44"
                >
                  <Folder open={isOpen} />
                  <span className={`rounded-lg px-3 py-1 text-sm font-bold shadow-sm ${isOpen ? "bg-[#C34811] text-white" : "bg-[#FAF8F5] text-[#0B369A]"}`}>
                    {p.name}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        {current && (
          <div id={`proyecto-${current.id}`} role="region" aria-label={current.name} className="mt-10">
            <Window title={`${current.name}`}>
              <div className="p-5 pt-2 sm:p-8 sm:pt-3">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="max-w-2xl">
                    <h3 className="text-2xl font-extrabold text-[#0B369A]">{current.name}</h3>
                    {current.sample && (
                      <span className="mt-2 inline-block rounded-full border border-dashed border-[#C34811] px-3 py-1 text-xs font-bold text-[#0B369A]">
                        Contenido de ejemplo — reemplazar con material real
                      </span>
                    )}
                    <p className="mt-4 leading-relaxed text-[#0B369A]/80">{current.description}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setOpenId(null)}
                    className="rounded-full border border-[#0B369A]/20 px-4 py-2 text-sm font-bold text-[#0B369A] transition hover:bg-[#0B369A]/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0B369A]"
                  >
                    Cerrar carpeta
                  </button>
                </div>

                <h4 className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-[#0B369A]">Servicios realizados</h4>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {current.services.map((s) => (
                    <li key={s} className="rounded-full bg-[#0B369A]/[0.08] px-4 py-1.5 text-sm font-semibold text-[#0B369A]">{s}</li>
                  ))}
                </ul>

                <h4 className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-[#0B369A]">Galería</h4>
                <ul className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                  {current.gallery.map((g, i) => (
                    <li key={i} className="aspect-[4/5] overflow-hidden rounded-xl">
                      {g.src ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover" />
                      ) : (
                        <div className="grid h-full w-full place-items-center border-2 border-dashed border-[#0B369A]/25 bg-[#0B369A]/[0.04] p-2 text-center text-xs font-semibold text-[#0B369A]/50">
                          Espacio para pieza 4:5
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </Window>
          </div>
        )}
      </div>
    </section>
  );
}
