import type { ReactNode } from "react";

interface WindowProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

/** Ventana de escritorio: tres puntitos + título. Se usa en servicios, proyectos, etc. */
export default function Window({ title, children, className = "" }: WindowProps) {
  return (
    <div
      className={`overflow-hidden rounded-[14px] border border-[#D9D1CA] bg-[#FAF8F5] text-[#0B369A] shadow-[0_10px_30px_-12px_rgba(58,51,46,0.25)] ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-[#D9D1CA] bg-[#F2EEE9] px-3.5 py-2.5">
        <span className="h-2 w-2 rounded-full bg-[#C34811]" />
        <span className="h-2 w-2 rounded-full bg-[#B8AFA5]" />
        <span className="h-2 w-2 rounded-full bg-[#B8AFA5]" />
        {title && <span className="ml-2 text-xs font-semibold tracking-tight">{title}</span>}
      </div>
      {children}
    </div>
  );
}
