import type { VideoTone } from "@/lib/content";

/** Marcador de logo de marca. */
export function LogoSlot({ light = false }: { light?: boolean }) {
  return (
    <div
      className={`flex h-[68px] w-[160px] items-center justify-center rounded-xl border-2 border-dashed border-[#A89F96] text-[13px] font-bold tracking-[0.1em] text-[#6F675F] ${
        light ? "bg-[#FAF8F5]" : "bg-[#ECE7E2]"
      }`}
    >
      [LOGO]
    </div>
  );
}

const TONES: Record<VideoTone, { bg: string; tagBg: string; tagFg: string; circle: string; tri: string }> = {
  A: { bg: "#0B369A", tagBg: "#FAF8F5", tagFg: "#0B369A", circle: "#FAF8F5", tri: "#C34811" },
  B: { bg: "#C34811", tagBg: "#FAF8F5", tagFg: "#0B369A", circle: "#FAF8F5", tri: "#0B369A" },
  C: { bg: "#D9D1CA", tagBg: "#0B369A", tagFg: "#FFFFFF", circle: "#0B369A", tri: "#FFFFFF" },
  D: { bg: "#D9D1CA", tagBg: "#0B369A", tagFg: "#FFFFFF", circle: "#C34811", tri: "#FFFFFF" },
  E: { bg: "#FAF8F5", tagBg: "#0B369A", tagFg: "#FFFFFF", circle: "#0B369A", tri: "#FFFFFF" },
};

/** Tarjeta de video 9:16 "Próximamente" (hasta cargar los videos reales). */
export function VideoFace({ tone }: { tone: VideoTone }) {
  const t = TONES[tone];
  return (
    <span
      className="m-3 rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.06em] min-[640px]:m-4 min-[640px]:px-3.5 min-[640px]:text-[13px] min-[640px]:tracking-[0.1em]"
      style={{ background: t.tagBg, color: t.tagFg }}
    >
      Próximamente
    </span>
  );
}

export const videoCardClass =
  "relative flex aspect-[9/16] min-w-0 items-end justify-start overflow-hidden rounded-[22px] shadow-[0_14px_30px_rgba(58,51,46,0.2)]";
export { TONES };
