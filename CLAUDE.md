# Contexto del proyecto

Portfolio de una sola página para Evi (contenido y estrategia digital). Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4. Idioma del sitio y de la documentación: **español**.

Ver `README.md` para instalación, estructura y publicación.

## Comandos

- `npm ci` — instalar dependencias (usar npm, hay `package-lock.json`)
- `npm run dev` — desarrollo en http://localhost:3000
- `npm run build` — compilar; correrlo antes de commitear cambios de código
- `npm run lint`

## Reglas

- `master` despliega a producción en Vercel automáticamente: trabajar en ramas y no hacer push directo a `master` sin que compile.
- **Nunca** commitear secretos. `RESEND_API_KEY` va en `.env.local` (ignorado por git); `.env.example` solo lleva nombres, sin valores.
- No cambiar el `from`/`to` de `app/api/contact/route.ts` ni la configuración de Resend, Vercel o R2 sin acuerdo explícito.
- Videos e imágenes pesados viven en Cloudflare R2 (URL base en `components/Portfolio.tsx`), no en `public/`. Usar MP4 (H.264) y carruseles 4:5.
- Cada sección de la página es un componente en `components/`; el orden se define en `app/page.tsx`.
- Mantener el diseño existente salvo que se pida lo contrario.
- Next.js 16 puede diferir de lo que conoces: ante dudas de API, consultar la documentación oficial.
