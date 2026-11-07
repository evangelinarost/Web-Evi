import { services } from "@/lib/content";
import Window from "./Window";

const icons: Record<string, React.ReactNode> = {
  camera: <><path d="M4 8h3l1.5-2h7L17 8h3v11H4z" /><circle cx="12" cy="13" r="3.5" /></>,
  calendar: <><rect x="3.5" y="5" width="17" height="15" rx="2" /><path d="M3.5 10h17M8 3v4M16 3v4" /></>,
  megaphone: <><path d="M4 10v4h3l8 4V6L7 10z" /><path d="M18 9.5a3.5 3.5 0 0 1 0 5" /></>,
  compass: <><circle cx="12" cy="12" r="8.5" /><path d="m15.5 8.5-2 5-5 2 2-5z" /></>,
  layout: <><rect x="3.5" y="4" width="17" height="16" rx="2" /><path d="M3.5 9h17M9 9v11" /></>,
  film: <><rect x="3.5" y="5" width="17" height="14" rx="2" /><path d="m10 9.5 4.5 2.5-4.5 2.5z" /></>,
};

export default function Services() {
  return (
    <section id="servicios" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mb-14 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#0B369A]">{services.eyebrow}</p>
          <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-[#0B369A] sm:text-5xl">
            {services.title}
          </h2>
        </div>

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((s, i) => (
            <li key={s.title} className={`reveal reveal-d${(i % 3) + 1}`}>
              <Window title={s.title} className="h-full transition-transform duration-300 hover:-translate-y-1">
                <div className="p-6 pt-3">
                  <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#C34811]/12 text-[#C34811]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      {icons[s.icon]}
                    </svg>
                  </span>
                  <h3 className="text-xl font-bold text-[#0B369A]">{s.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#0B369A]/75">{s.desc}</p>
                </div>
              </Window>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
