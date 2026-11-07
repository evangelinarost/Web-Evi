"use client";

import { useEffect, useRef, useState } from "react";
import { SERVICE_EVENT, serviceDetails, type ServiceDetail } from "@/lib/content";

/**
 * Ventana emergente de un servicio, con estética de ventana de escritorio.
 * Usa <dialog> nativo: foco atrapado, Escape y fondo inerte vienen resueltos.
 * Se cierra con la cruz, con Escape o haciendo clic fuera.
 */
export default function ServiceDialog({
  service,
  onClose,
}: {
  service: ServiceDetail;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const [copied, setCopied] = useState(false);
  const [noContact, setNoContact] = useState(false);

  useEffect(() => {
    const d = ref.current;
    if (d && !d.open) d.showModal();
    document.documentElement.classList.add("svc-lock");
    return () => document.documentElement.classList.remove("svc-lock");
  }, []);

  const consult = () => {
    const target = document.getElementById("contacto");
    if (!target) {
      // La sección de contacto todavía no existe: se ofrece copiar el nombre del servicio.
      setNoContact(true);
      return;
    }
    window.dispatchEvent(new CustomEvent(SERVICE_EVENT, { detail: service.contactLabel }));
    onClose();
    requestAnimationFrame(() => target.scrollIntoView({ behavior: "smooth", block: "start" }));
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(service.contactLabel);
      setCopied(true);
    } catch {
      /* si el portapapeles no está disponible, el campo queda seleccionable */
    }
  };

  return (
    <dialog
      ref={ref}
      className="svc-dialog"
      aria-labelledby="svc-title"
      aria-describedby="svc-text"
      onClose={onClose}
      onClick={(e) => e.target === ref.current && ref.current?.close()}
    >
      <div className="max-h-[calc(100dvh-32px)] overflow-y-auto rounded-[14px] text-left border border-[#D9D1CA] bg-[#FAF8F5] shadow-[0_30px_60px_-20px_rgba(11,54,154,0.55)]">
        <div className="sticky top-0 flex items-center gap-1.5 rounded-t-[14px] border-b border-[#D9D1CA] bg-[#ECE7E2] px-4 py-3">
          <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-[#C34811]" />
          <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-[#B8AFA5]" />
          <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-[#B8AFA5]" />
          <span className="ml-2 text-xs font-bold text-[#0B369A]">{service.title}</span>
          <button
            type="button"
            onClick={() => ref.current?.close()}
            aria-label="Cerrar ventana"
            className="ml-auto grid h-9 w-9 place-items-center rounded-full text-[#0B369A] transition hover:bg-[#0B369A]/10 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[#C34811]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" aria-hidden>
              <path d="M5 5l14 14M19 5L5 19" />
            </svg>
          </button>
        </div>

        <div className="px-6 pb-7 pt-6">
          <h2 id="svc-title" className="text-3xl font-bold leading-tight text-[#0B369A]">{service.title}</h2>
          <p id="svc-text" className="mt-3 text-base leading-relaxed text-[#3A332E]">{service.text}</p>

          <button
            type="button"
            onClick={consult}
            className="mt-6 inline-flex items-center rounded-full bg-[#C34811] px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#C34811]/25 transition hover:bg-[#0B369A] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-[#0B369A]"
          >
            {serviceDetails.cta}
          </button>

          {noContact && (
            <div className="mt-5 rounded-[10px] border border-[#D9D1CA] bg-[#ECE7E2] p-3" role="status">
              <label htmlFor="svc-copy" className="text-xs font-semibold text-[#3A332E]">
                Copiá el nombre del servicio para usarlo en tu consulta:
              </label>
              <div className="mt-2 flex gap-2">
                <input id="svc-copy" readOnly value={service.contactLabel} onFocus={(e) => e.currentTarget.select()} className="min-w-0 flex-1 rounded-lg border border-[#D9D1CA] bg-white px-3 py-2 text-sm text-[#0B369A]" />
                <button type="button" onClick={copy} className="rounded-lg bg-[#0B369A] px-4 py-2 text-sm font-semibold text-white">
                  {copied ? "Copiado" : "Copiar"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </dialog>
  );
}
