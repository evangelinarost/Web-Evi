import Link from "next/link";
import { site, type NavItem } from "@/lib/content";

/**
 * Encabezado compartido. Escritorio: nombre a la izquierda, menú a la derecha.
 * Celular: nombre + botón "Hablemos" arriba y el menú completo en una fila debajo.
 */
export default function SiteHeader({ items }: { items: NavItem[] }) {
  return (
    <header className="relative z-20 mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-x-8 gap-y-4 px-5 pt-5 min-[901px]:min-h-[88px] min-[901px]:gap-y-3 min-[901px]:px-10 min-[901px]:pt-0">
      <Link href="/" className="text-[22px] font-bold text-[#0B369A] no-underline">
        {site.name}
      </Link>
      <Link
        href="/#contacto"
        className="rounded-full bg-[#C34811] px-5 py-2.5 text-[15px] font-bold text-white no-underline transition hover:bg-[#0B369A] min-[901px]:hidden"
      >
        Hablemos
      </Link>
      <nav
        aria-label="Principal"
        className="order-last flex w-full justify-between border-y border-[#D9D1CA] py-3 text-[13px] font-semibold min-[901px]:order-none min-[901px]:w-auto min-[901px]:flex-wrap min-[901px]:justify-start min-[901px]:gap-x-8 min-[901px]:gap-y-2 min-[901px]:border-0 min-[901px]:p-0 min-[901px]:text-base"
      >
        {items.map((i) => (
          <Link
            key={i.href + i.label}
            href={i.href}
            className="whitespace-nowrap text-[#0B369A] no-underline decoration-[#C34811] decoration-2 underline-offset-[6px] hover:underline"
          >
            {i.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
