import Link from "next/link";
import Circle from "@/components/Circle";
import AboutPhoto from "@/components/AboutPhoto";
import ContactLinks from "@/components/ContactLinks";
import Hero from "@/components/Hero";
import HowToWork from "@/components/HowToWork";
import { LogoMarquee } from "@/components/BrandLogos";
import { TONES, VideoFace, videoCardClass } from "@/components/Placeholders";
import ProjectCards from "@/components/ProjectCards";
import SiteHeader from "@/components/SiteHeader";
import { publicAsset } from "@/lib/assets";
import { aboutPage, brands, contentSection, contactSection, hero, navHome, projects, videos } from "@/lib/content";

export default function Home() {
  // Imágenes opcionales: se activan solas cuando el archivo existe en /public.
  const smileSrc = publicAsset(hero.smileSrc);
  const waldImage = publicAsset(projects.wald.image);

  return (
    <div className="relative overflow-hidden">
      <Circle size={560} color="azul" style={{ left: -200, top: 380 }} />
      <Circle size={460} color="terracota" style={{ right: -160, top: 430 }} />
      <Circle size={200} color="azul" style={{ right: "18%", top: 760 }} />

      <SiteHeader items={navHome} />

      <main>
        <Hero smileSrc={smileSrc} />

        {/* Marcas: cinta de logos que corre sola, a todo el ancho */}
        <section className="relative flex flex-col gap-6 py-10" aria-labelledby="marcas-titulo">
          <h2 id="marcas-titulo" className="px-5 text-center text-sm font-bold uppercase tracking-[0.16em]">{brands.homeTitle}</h2>
          <LogoMarquee />
        </section>

        {/* Creación de contenido para marcas */}
        <section id="contenido" className="relative">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-10 px-5 py-[88px] min-[901px]:px-10">
            <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
              <div className="flex max-w-[760px] flex-col gap-3">
                <h2 className="text-[40px] font-bold leading-[1.04] tracking-[-0.03em] text-[#0B369A] min-[901px]:text-[56px]">{contentSection.title}</h2>
                <p className="text-2xl font-medium leading-[1.35]">{contentSection.subtitle}</p>
              </div>
              <Link href="/contenido" className="text-[17px] font-bold text-[#0B369A] no-underline decoration-[#C34811] decoration-2 underline-offset-[6px] hover:underline">
                {contentSection.allLink}
              </Link>
            </div>
            <div className="flex flex-wrap justify-between gap-5">
              {videos.home.map((tone, i) => (
                <Link
                  key={i}
                  href="/contenido"
                  aria-label="Ver los videos de contenido para marcas"
                  className={`${videoCardClass} max-w-[260px] flex-[1_1_200px] no-underline`}
                  style={{ background: TONES[tone].bg }}
                >
                  <VideoFace tone={tone} />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Proyectos */}
        <section id="proyectos" className="relative mx-auto flex max-w-[1280px] flex-col gap-9 px-5 py-24 min-[901px]:px-10">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="text-5xl font-bold leading-[1.05] tracking-[-0.02em] text-[#0B369A]">{projects.title}</h2>
            <Link href="/proyectos" className="text-[17px] font-bold text-[#0B369A] no-underline decoration-[#C34811] decoration-2 underline-offset-[6px] hover:underline">
              {projects.allLink}
            </Link>
          </div>
          <ProjectCards waldImage={waldImage} />
        </section>

        {/* Sobre mí: versión resumida de la página /sobre-mi, con el mismo diseño */}
        <section id="sobre-mi" className="relative">
          <div className="mx-auto flex max-w-[1280px] flex-wrap items-center gap-x-[72px] gap-y-12 px-5 py-24 min-[901px]:px-10">
            <div className="flex min-w-0 flex-[1_1_380px] justify-center">
              <AboutPhoto lazy />
            </div>
            <div className="flex min-w-0 flex-[1_1_400px] flex-col gap-6">
              <span className="text-[15px] font-bold uppercase tracking-[0.16em]">{aboutPage.eyebrow}</span>
              <h2 className="text-5xl font-bold leading-none tracking-[-0.03em] text-[#0B369A] min-[901px]:text-[72px]">{aboutPage.title}</h2>
              <p className="max-w-[540px] text-[22px] leading-[1.45]">{aboutPage.bio}</p>
              <div>
                <Link
                  href="/sobre-mi"
                  className="inline-block rounded-full bg-[#C34811] px-[30px] py-4 text-[17px] font-bold text-white no-underline transition hover:bg-[#0B369A]"
                >
                  Conocé más sobre mí
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Cómo trabajar conmigo */}
        <HowToWork />

        {/* Contacto */}
        <section id="contacto" className="relative mx-auto flex max-w-[1280px] flex-col items-center gap-7 px-5 pb-12 pt-24 text-center min-[901px]:px-10">
          <h2 className="text-5xl font-bold leading-[1.02] tracking-[-0.03em] text-[#0B369A] min-[901px]:text-[64px]">{contactSection.title}</h2>
          <ContactLinks />
          <footer className="mt-14 w-full border-t border-[#D9D1CA] pt-5 text-sm">{contactSection.footer}</footer>
        </section>
      </main>
    </div>
  );
}
