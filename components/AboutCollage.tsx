import { aboutPage } from "@/lib/content";

/** Posición y giro de cada ventana, en % de un área de 875 × 805 (como en el boceto). */
const LAYOUT = [
  { left: 0, top: 1, w: 64.7, h: 52.5, rot: -1.5 }, // Grabando (horizontal)
  { left: 68, top: 4.3, w: 31.7, h: 52, rot: 2 }, // De viaje (vertical)
  { left: 1.1, top: 59.7, w: 31, h: 37.9, rot: 1.5 }, // Editando
  { left: 34.9, top: 61.5, w: 30.5, h: 37.9, rot: -1.5 }, // En equipo
  { left: 68.3, top: 59.7, w: 30.9, h: 37.9, rot: 1.5 }, // Tu estilo
];

/** Collage de fotos como ventanas de escritorio (3 puntos y título), ordenadas como en el boceto. */
export default function AboutCollage() {
  return (
    <ul className="relative mx-auto aspect-[875/805] w-full max-w-[820px]" aria-label="Más fotos">
      {aboutPage.collage.map((f, i) => {
        const L = LAYOUT[i];
        return (
          <li
            key={f.src}
            className="absolute flex flex-col overflow-hidden rounded-xl border border-[#D9D1CA] bg-[#FAF8F5] shadow-[0_12px_28px_rgba(58,51,46,0.2)]"
            style={{ left: `${L.left}%`, top: `${L.top}%`, width: `${L.w}%`, height: `${L.h}%`, transform: `rotate(${L.rot}deg)` }}
          >
            <div className="flex h-5 shrink-0 items-center gap-1 border-b border-[#D9D1CA] bg-[#ECE7E2] px-2 min-[901px]:h-[30px] min-[901px]:gap-[5px] min-[901px]:px-3">
              <i className="block h-1.5 w-1.5 rounded-full bg-[#C34811] min-[901px]:h-[7px] min-[901px]:w-[7px]" />
              <i className="block h-1.5 w-1.5 rounded-full bg-[#A89F96] min-[901px]:h-[7px] min-[901px]:w-[7px]" />
              <i className="block h-1.5 w-1.5 rounded-full bg-[#A89F96] min-[901px]:h-[7px] min-[901px]:w-[7px]" />
              <span className="ml-1 truncate text-[10px] font-bold text-[#0B369A] min-[901px]:ml-2 min-[901px]:text-xs">{f.title}</span>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={f.src} alt={f.alt} loading="lazy" decoding="async" className="block min-h-0 w-full flex-1 object-cover" style={{ objectPosition: f.pos }} />
          </li>
        );
      })}
    </ul>
  );
}
