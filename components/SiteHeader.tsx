import Link from "next/link";
import { site, type NavItem } from "@/lib/content";

/** Encabezado compartido: nombre a la izquierda, menú a la derecha. */
export default function SiteHeader({ items }: { items: NavItem[] }) {
  return (
    <header className="relative z-20 mx-auto flex min-h-[88px] max-w-[1280px] flex-wrap items-center justify-between gap-x-8 gap-y-3 px-5 min-[901px]:px-10">
      <Link href="/" className="text-[22px] font-bold text-[#0B369A] no-underline">
        {site.name}
      </Link>
      <nav aria-label="Principal" className="flex flex-wrap gap-x-8 gap-y-2 text-base font-semibold">
        {items.map((i) => (
          <Link
            key={i.href + i.label}
            href={i.href}
            className="text-[#0B369A] no-underline decoration-[#C34811] decoration-2 underline-offset-[6px] hover:underline"
          >
            {i.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
