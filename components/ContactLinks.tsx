import { contact } from "@/lib/content";

/** Botones de contacto: WhatsApp (terracota) e Instagram (borde azul). */
export default function ContactLinks() {
  return (
    <div className="flex flex-wrap justify-center gap-3.5">
      <a
        href={contact.whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-[#C34811] px-[30px] py-4 text-[17px] font-bold text-white no-underline transition hover:bg-[#0B369A]"
      >
        {contact.whatsapp.label}
      </a>
      <a
        href={contact.instagram.href}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border-2 border-[#0B369A] px-7 py-3.5 text-[17px] font-bold text-[#0B369A] no-underline transition hover:bg-[#0B369A] hover:text-white"
      >
        {contact.instagram.label}
      </a>
    </div>
  );
}
