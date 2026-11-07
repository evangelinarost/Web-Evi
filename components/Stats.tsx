const stats = [
  {
    value: "+200",
    label: "Videos creados",
    accent: "text-[#C34811]",
  },
  {
    value: "~40",
    label: "Marcas trabajadas",
    accent: "text-[#1F3FA0]",
  },
  {
    value: "+150k",
    label: "Seguidores generados",
    accent: "text-[#0B369A]",
  },
];

export default function Stats() {
  return (
    <section className="relative py-28 px-6 overflow-hidden bg-[#ECE7E2]">
      {/* Blobs */}
      <div className="pointer-events-none absolute top-0 left-0 w-[350px] h-[350px] rounded-full bg-[#C34811]/10 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-[#1F3FA0]/8 blur-[80px]" />

      {/* Dot grid */}
      <div className="dot-grid absolute inset-0 opacity-50" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="reveal text-center mb-16">
          <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-[#C34811] mb-4">
            <span className="w-4 h-px bg-[#C34811]" />
            En números
            <span className="w-4 h-px bg-[#C34811]" />
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0E2159]">
            Resultados que{" "}
            <span className="text-[#C34811]">hablan solos</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`reveal reveal-d${i + 1} group relative rounded-2xl p-8 border border-[#0E2159]/8 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center`}
            >
              <p className={`text-5xl font-black mb-2 ${stat.accent}`}>
                {stat.value}
              </p>
              <p className="text-sm font-bold text-[#0E2159]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
