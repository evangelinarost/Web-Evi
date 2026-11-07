"use client";

import { useState } from "react";
import { hero } from "@/lib/content";

/**
 * Sticker animado, como capa independiente del collage.
 * Capas (cada una con su propia transformación, para que no se pisen):
 *   profundidad (cursor) > entrada > flote > hover (zoom)
 *
 * Expresión: si existe la versión sonriente (`smileSrc`), el sticker tiene su PROPIO control
 * (un botón con la silueta del recorte), separado del de la ventana "Creación de contenido":
 *   - ratón: al pasar el cursor sobre la cara aparece la sonrisa (opacidad, 200 ms);
 *   - táctil: cada toque alterna entre las dos imágenes;
 *   - teclado: el foco muestra la sonrisa.
 * Ambas imágenes ocupan exactamente el mismo espacio (inset-0, object-contain), sin saltos.
 * Sin `smileSrc` no hay control propio y el toque cae en la ventana de abajo.
 */
export default function Sticker({
  className = "",
  style,
  smileSrc,
}: {
  className?: string;
  style?: React.CSSProperties;
  smileSrc: string | null;
}) {
  const [smileOk, setSmileOk] = useState(true);
  const [smile, setSmile] = useState(false);
  const hasSmile = !!smileSrc && smileOk;

  const onToggle = () => {
    // Con ratón la expresión depende del hover; solo en táctil se alterna al tocar.
    if (window.matchMedia("(hover: none)").matches) setSmile((v) => !v);
  };

  return (
    <div
      className={`sticker-depth sticker-group pointer-events-none ${className}`}
      style={style}
      data-smile={smile}
    >
      <div className="sticker-enter h-full">
        <div className="sticker-float h-full">
          <div className="sticker-hover relative h-full origin-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={hero.stickerSrc}
              alt={hero.stickerAlt}
              draggable={false}
              className="absolute inset-0 h-full w-full object-contain drop-shadow-[0_12px_14px_rgba(11,54,154,0.35)]"
            />
            {hasSmile && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={smileSrc!}
                alt=""
                aria-hidden
                draggable={false}
                onError={() => setSmileOk(false)}
                className="sticker-smile absolute inset-0 h-full w-full object-contain drop-shadow-[0_12px_14px_rgba(11,54,154,0.35)]"
              />
            )}
            {hasSmile && (
              <button
                type="button"
                className="sticker-hit"
                aria-label="Cambiar la expresión de Evii"
                aria-pressed={smile}
                onClick={onToggle}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
