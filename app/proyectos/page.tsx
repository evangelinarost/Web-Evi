import type { Metadata } from "next";
import Circle from "@/components/Circle";
import ProjectCards from "@/components/ProjectCards";
import SiteHeader from "@/components/SiteHeader";
import { publicAsset } from "@/lib/assets";
import { navPages, projects } from "@/lib/content";

export const metadata: Metadata = { title: "Casos de éxito · Evii Rost" };

export default function Proyectos() {
  return (
    <div className="relative overflow-hidden">
      <Circle size={480} color="azul" style={{ right: -260, top: 520 }} />
      <Circle size={440} color="terracota" style={{ left: -180, bottom: -200 }} />
      <SiteHeader items={navPages} />

      <main className="relative mx-auto flex max-w-[1280px] flex-col gap-14 px-5 pb-24 pt-12 min-[901px]:px-10">
        <h1 className="text-[52px] font-bold leading-none tracking-[-0.03em] text-[#0B369A] min-[901px]:text-[88px]">{projects.title}</h1>
        <ProjectCards waldImage={publicAsset(projects.wald.image)} />
      </main>
    </div>
  );
}
