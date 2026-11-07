"use client";

import { useEffect, useState } from "react";
import { contact, services, SERVICE_EVENT } from "@/lib/content";
import Window from "./Window";

const SERVICES = [...services.items.map((s) => s.title), "No estoy seguro"];

const WA_PATH = "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";
const IG_PATH = "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z";

const field =
  "w-full rounded-xl border border-[#0B369A]/15 bg-white/70 px-4 py-3 text-sm text-[#0B369A] placeholder-[#0B369A]/40 transition-colors focus:border-[#C34811] focus:outline-none";

export default function CTA() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [servicio, setServicio] = useState<string>("");

  // Preselecciona el servicio elegido en las ventanas del home
  useEffect(() => {
    const onService = (e: Event) => setServicio((e as CustomEvent<string>).detail);
    window.addEventListener(SERVICE_EVENT, onService);
    return () => window.removeEventListener(SERVICE_EVENT, onService);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("/api/contact", { method: "POST", body: data });
      if (res.ok) {
        setStatus("ok");
        form.reset();
        setServicio("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const links = [
    { ...contact.email, icon: <path d="M3 6h18v12H3zM3 7l9 6 9-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /> },
    { ...contact.instagram, icon: <path d={IG_PATH} fill="currentColor" /> },
    { ...contact.whatsapp, icon: <path d={WA_PATH} fill="currentColor" /> },
  ].filter((l) => l.href);

  return (
    <section id="contacto" className="bg-[#CFC6BE]/60 px-6 py-24">
      <div className="reveal mx-auto max-w-2xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#0B369A]">{contact.eyebrow}</p>
        <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-[#0B369A] sm:text-6xl">
          {contact.title}
        </h2>
        <p className="mt-4 text-lg text-[#0B369A]/75">{contact.subtitle}</p>

        <ul className="mt-8 flex flex-wrap justify-center gap-3">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#0B369A] px-6 py-3 font-bold text-[#0B369A] transition hover:bg-[#0B369A] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C34811]"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden>{l.icon}</svg>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-10 text-left">
          <Window title="Nuevo mensaje">
            <div className="p-5 pt-2 sm:p-8 sm:pt-3">
              {status === "ok" ? (
                <div className="py-8 text-center">
                  <p className="text-xl font-bold text-[#0B369A]">¡Mensaje enviado!</p>
                  <p className="mt-1 text-sm text-[#0B369A]/70">Te respondo a la brevedad.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input type="hidden" name="servicio" value={servicio} />
                  <div>
                    <p className="mb-3 text-xs font-bold uppercase tracking-wider text-[#0B369A]/60">
                      ¿Sobre qué querés consultar? <span className="font-normal normal-case">(opcional)</span>
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {SERVICES.map((s) => {
                        const selected = servicio === s;
                        return (
                          <button
                            key={s}
                            type="button"
                            aria-pressed={selected}
                            onClick={() => setServicio(selected ? "" : s)}
                            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                              selected
                                ? "border-[#C34811] bg-[#C34811] text-white"
                                : "border-[#0B369A]/20 text-[#0B369A] hover:border-[#C34811]"
                            }`}
                          >
                            {s}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <input name="nombre" type="text" placeholder="Tu nombre" aria-label="Tu nombre" required className={field} />
                    <input name="email" type="email" placeholder="Tu email" aria-label="Tu email" required className={field} />
                  </div>
                  <textarea name="mensaje" placeholder="¿En qué te puedo ayudar?" aria-label="Mensaje" required rows={4} className={`${field} resize-none`} />
                  {status === "error" && (
                    <p role="alert" className="text-sm font-semibold text-red-700">Algo salió mal. Intentá de nuevo.</p>
                  )}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="self-center rounded-full bg-[#C34811] px-10 py-4 text-base font-bold text-white shadow-lg shadow-[#C34811]/25 transition hover:-translate-y-0.5 hover:bg-[#0B369A] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {status === "sending" ? "Enviando..." : "Enviar mensaje"}
                  </button>
                </form>
              )}
            </div>
          </Window>
        </div>
      </div>
    </section>
  );
}
