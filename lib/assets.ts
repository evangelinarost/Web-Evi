import { existsSync } from "node:fs";
import path from "node:path";

/**
 * Devuelve la ruta pública si el archivo existe en /public (se evalúa en el servidor, al
 * compilar). Sirve para que una imagen se active sola cuando se la agrega, y mientras tanto
 * se muestre un marcador, sin enlaces rotos.
 */
export function publicAsset(publicPath: string | null | undefined): string | null {
  if (!publicPath) return null;
  const file = path.join(process.cwd(), "public", publicPath.replace(/^\//, ""));
  return existsSync(file) ? publicPath : null;
}
