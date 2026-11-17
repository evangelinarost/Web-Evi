"use client";

import { useEffect, useRef, useState } from "react";
import { hero } from "@/lib/content";

/** Tiempo (ms) que dura la cara sonriente tras un toque, antes de volver sola al original. */
const SMILE_MS = 2000;

/**
 * Sticker de Evii: capa independiente del collage.
 *
 * Capas (cada una con su transformación, para que no se pisen):
 *   posición (este contenedor) > flotación (CSS, respeta "reducir movimiento") > imágenes
 *
 * Expresión:
 *  - Ratón: al pasar el cursor sobre la cara aparece la sonrisa (opacidad, 200 ms).
 *  - Toque: muestra la sonrisa y vuelve al original a los 2 s, o con otro toque.
 *  - Teclado: es un <button>; Enter o Espacio hacen lo mismo que el toque.
 * Ambas imágenes comparten la misma caja, así que no hay saltos al cambiar.
 * El botón sigue la silueta del recorte (clip-path) para no tapar las ventanas vecinas.
 * Sin `smileSrc` (archivo inexistente) el sticker queda solo con la flotación.
 */
export default function Sticker({
  smileSrc,
  className = "",
  style,
}: {
  smileSrc: string | null;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [smile, setSmile] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  const toggle = () => {
    if (timer.current) { clearTimeout(timer.current); timer.current = null; }
    if (smile) { setSmile(false); return; }
    setSmile(true);
    timer.current = setTimeout(() => { setSmile(false); timer.current = null; }, SMILE_MS);
  };

  return (
    <div className={`sticker-group pointer-events-none ${className}`} style={style} data-smile={smile}>
      <div className="sticker-float h-full">
        <div className="relative h-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={hero.stickerSrc}
            alt={hero.stickerAlt}
            draggable={false}
            className="sticker-base absolute inset-0 h-full w-full object-contain drop-shadow-[0_8px_14px_rgba(58,51,46,0.3)]"
          />
          {smileSrc && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={smileSrc}
              alt=""
              aria-hidden
              draggable={false}
              className="sticker-smile absolute inset-0 h-full w-full object-contain drop-shadow-[0_8px_14px_rgba(58,51,46,0.3)]"
            />
          )}
          {smileSrc && (
            <button
              type="button"
              className="sticker-hit"
              aria-label="Cambiar la expresión de Evii"
              aria-pressed={smile}
              onClick={toggle}
            />
          )}
        </div>
      </div>
    </div>
  );
}
