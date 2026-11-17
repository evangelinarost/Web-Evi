import type { CSSProperties } from "react";

/** Círculo decorativo. Se oculta en celular (menos de 900 px), como en el diseño. */
export default function Circle({
  size,
  color,
  style,
}: {
  size: number;
  color: "azul" | "terracota";
  style: CSSProperties;
}) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute z-0 rounded-full max-[900px]:hidden"
      style={{ width: size, height: size, background: color === "azul" ? "#0B369A" : "#C34811", ...style }}
    />
  );
}
