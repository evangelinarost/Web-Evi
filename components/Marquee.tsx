const words = [
  "Contenido Digital",
  "UGC",
  "Estrategia",
  "Redes Sociales",
  "Desarrollo Web",
  "Marca Personal",
  "Crecimiento",
  "Creatividad",
];

interface MarqueeProps {
  dark?: boolean;
}

export default function Marquee({ dark = false }: MarqueeProps) {
  const items = [...words, ...words];

  return (
    <div
      className={`relative overflow-hidden py-4 ${
        dark ? "bg-[#0E2159]" : "bg-[#C34811]"
      }`}
    >
      <div className="marquee-track">
        {items.map((word, i) => (
          <span
            key={i}
            className={`inline-flex items-center gap-4 px-6 text-sm font-bold tracking-widest uppercase whitespace-nowrap ${
              dark ? "text-white/30" : "text-white/80"
            }`}
          >
            {word}
            <span className={dark ? "text-[#C34811]/50" : "text-white/40"}>
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
