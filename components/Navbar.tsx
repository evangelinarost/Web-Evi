"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Marca la sección visible
  useEffect(() => {
    const sections = site.nav
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Esc cierra el menú y devuelve el foco al botón
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const linkCls = (id: string) =>
    `text-base font-semibold transition-colors hover:text-[#0B369A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0B369A] ${
      active === id ? "text-[#0B369A] underline decoration-[#C34811] decoration-2 underline-offset-[8px]" : "text-[#0B369A]"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3">
      <nav
        aria-label="Principal"
        className={`mx-auto flex max-w-7xl items-center justify-between gap-6 rounded-full px-6 py-3 transition-all duration-300 ${
          scrolled || open
            ? "border border-[#0B369A]/10 bg-[#ECE7E2]/90 shadow-lg shadow-[#0B369A]/10 backdrop-blur-xl"
            : "border border-transparent"
        }`}
      >
        <a href="#inicio" className="relative text-lg font-bold tracking-tight text-[#0B369A]">
          {site.name}
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {site.nav.map((l) => (
            <a key={l.href} href={l.href} className={linkCls(l.href.slice(1))}>
              {l.label}
            </a>
          ))}
        </div>

        <button
          ref={buttonRef}
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="flex h-11 w-11 items-center justify-center rounded-full text-[#0B369A] transition hover:bg-[#0B369A]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0B369A] md:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div
          id="menu-movil"
          className="mx-auto mt-2 flex max-w-7xl flex-col gap-1 rounded-3xl border border-[#0B369A]/10 bg-[#E4DDD6] p-3 shadow-xl shadow-[#0B369A]/10 md:hidden"
        >
          {site.nav.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`rounded-2xl px-4 py-3 ${linkCls(l.href.slice(1))} hover:bg-[#0B369A]/5`}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
