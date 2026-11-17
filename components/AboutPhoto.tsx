import { aboutPage } from "@/lib/content";

/** Foto de "Sobre mí": panel azul inclinado detrás y la foto enmarcada, con una leve inclinación. */
export default function AboutPhoto({ lazy = false, compact = false }: { lazy?: boolean; compact?: boolean }) {
  return (
    <div className={`relative mx-auto w-full py-6 ${compact ? "max-w-[300px]" : "max-w-[420px]"}`}>
      <div aria-hidden className="absolute inset-x-[2%] bottom-0 top-[14%] -rotate-3 rounded-3xl bg-[#0B369A]" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={aboutPage.photoSrc}
        alt={aboutPage.photoAlt}
        width={724}
        height={1086}
        loading={lazy ? "lazy" : undefined}
        decoding="async"
        className="relative mx-auto block h-auto w-[72%] rotate-2 rounded-3xl border-[8px] border-[#FAF8F5] shadow-[0_16px_36px_rgba(58,51,46,0.3)]"
      />
    </div>
  );
}
