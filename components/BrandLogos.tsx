import { brandLogos } from "@/lib/content";

/** Un logo: siempre 24 px de alto y algo atenuados, para que no resalten. Los que traen fondo de color van como bloque con esquinas de 10 px. */
function Logo({ logo }: { logo: (typeof brandLogos)[number] }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={logo.src}
      alt=""
      width={logo.w}
      height={logo.h}
      loading="lazy"
      decoding="async"
      draggable={false}
      className={`block h-6 w-auto max-w-none shrink-0 opacity-70 ${logo.block ? "rounded-[10px]" : ""}`}
    />
  );
}

/**
 * Cinta de logos que corre sola en loop (la lista va duplicada; la segunda copia es aria-hidden).
 * Se pausa con el mouse, tiene difuminado en los bordes y queda quieta con "reducir movimiento".
 * Sin texto con los nombres: solo logos (alt vacío).
 */
export function LogoMarquee() {
  return (
    <div className="logo-marquee">
      <ul className="logo-marquee-track">
        {brandLogos.map((l) => (
          <li key={l.src} className="logo-marquee-item"><Logo logo={l} /></li>
        ))}
        {brandLogos.map((l) => (
          <li key={`${l.src}-2`} className="logo-marquee-item logo-marquee-copy" aria-hidden="true"><Logo logo={l} /></li>
        ))}
      </ul>
    </div>
  );
}

/** Grilla fija (sin movimiento) para la página de Contenido. */
export function LogoGrid() {
  return (
    <ul className="flex flex-wrap items-center gap-x-10 gap-y-6">
      {brandLogos.map((l) => (
        <li key={l.src}><Logo logo={l} /></li>
      ))}
    </ul>
  );
}
