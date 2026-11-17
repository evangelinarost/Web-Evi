import type { CSSProperties } from "react";

/**
 * Imagen real si el archivo existe; si no, un marcador visible (nunca un enlace roto).
 * `src` ya viene resuelto con publicAsset() desde la página.
 */
export default function Shot({
  src,
  alt,
  label,
  className = "",
  style,
}: {
  src: string | null;
  alt: string;
  label: string;
  className?: string;
  style?: CSSProperties;
}) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} loading="lazy" decoding="async" className={`block h-full w-full object-cover ${className}`} style={style} />;
  }
  return (
    <div
      role="img"
      aria-label={`Marcador de imagen: ${alt}`}
      className={`flex h-full w-full items-center justify-center p-3 text-center text-xs font-bold text-[#ECE7E2] ${className}`}
    >
      [{label}]
    </div>
  );
}
