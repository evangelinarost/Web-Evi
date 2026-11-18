import Link from "next/link";
import { publicAsset } from "@/lib/assets";
import { projects } from "@/lib/content";
import Shot from "./Shot";

/** Tres tarjetas "carpeta": WALD (con enlace al caso) y dos "Próximamente". */
export default function ProjectCards({ waldImage }: { waldImage: string | null }) {
  const w = projects.wald;
  const im = projects.insideMagic;
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-x-7 gap-y-10">
      <Link href={w.href} aria-label={`Ver el caso ${w.name}`} className="folder relative block no-underline">
        <div className="ml-5 h-7 w-[120px] rounded-t-xl bg-[#0B369A]" />
        <div className="flex flex-col gap-5 rounded-2xl bg-[#0B369A] p-6 shadow-[0_14px_32px_rgba(11,54,154,0.25)]">
          <div className="relative h-[260px] overflow-hidden rounded-[10px] bg-[#FAF8F5]">
            <Shot src={waldImage} alt={w.imageAlt} label="FOTO DE PORTADA" className="bg-[#0B369A]/30 !text-[#0B369A]" style={{ objectPosition: "50% 40%" }} />
          </div>
          <div className="flex items-end justify-between gap-3 text-white">
            <div>
              <div className="text-[26px] font-bold leading-[1.1] tracking-[-0.01em]">{w.name}</div>
              <div className="mt-1 text-[15px] text-[#ECE7E2]">{w.meta}</div>
            </div>
            <div className="shrink-0 whitespace-nowrap text-[30px] font-bold leading-none text-[#FF8A5C]">{w.stat}</div>
          </div>
        </div>
      </Link>

      <Link href={im.href} aria-label={`Ver el caso ${im.name}`} className="folder relative block no-underline">
        <div className="ml-5 h-7 w-[120px] rounded-t-xl bg-[#C34811]" />
        <div className="flex flex-col gap-5 rounded-2xl bg-[#C34811] p-6 shadow-[0_14px_32px_rgba(195,72,17,0.25)]">
          <div className="h-[260px] overflow-hidden rounded-[10px] bg-[#0B0F14]">
            <Shot src={publicAsset(im.imageSrc)} alt={im.imageAlt} label="FOTO DE PORTADA" className="!text-[#ECE7E2]" style={{ objectPosition: "50% 32%" }} />
          </div>
          <div className="flex items-end justify-between gap-3 text-white">
            <div>
              <div className="text-[26px] font-bold leading-[1.1] tracking-[-0.01em]">{im.name}</div>
              <div className="mt-1 text-[15px] text-[#FAF8F5]">{im.meta}</div>
            </div>
            <div className="shrink-0 whitespace-nowrap text-[30px] font-bold leading-none text-white">{im.stat}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}
