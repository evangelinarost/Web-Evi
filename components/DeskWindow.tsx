import type { ReactNode } from "react";

/** Ventana de escritorio con tres puntitos y título (se usa en Servicios y en el caso). */
export default function DeskWindow({
  title,
  children,
  className = "",
  shadow = "0 14px 30px rgba(0,0,0,0.22)",
  widthClass = "w-[300px]",
}: {
  title: string;
  children: ReactNode;
  className?: string;
  shadow?: string;
  widthClass?: string;
}) {
  return (
    <div
      className={`${widthClass} max-w-full overflow-hidden rounded-xl border border-[#D9D1CA] bg-[#FAF8F5] ${className}`}
      style={{ boxShadow: shadow }}
    >
      <div className="flex h-[30px] items-center gap-[5px] border-b border-[#D9D1CA] bg-[#ECE7E2] px-3">
        <i className="block h-[7px] w-[7px] rounded-full bg-[#C34811]" />
        <i className="block h-[7px] w-[7px] rounded-full bg-[#A89F96]" />
        <i className="block h-[7px] w-[7px] rounded-full bg-[#A89F96]" />
        <span className="ml-2 text-xs font-bold text-[#0B369A]">{title}</span>
      </div>
      {children}
    </div>
  );
}
