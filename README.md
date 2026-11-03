# Web de Evi — Portfolio

Sitio web de portfolio de **Evangelina (Evi)**: contenido y estrategia digital (UGC, Community Management, carruseles, desarrollo web). Es una landing de una sola página con formulario de contacto.

- **Framework:** Next.js 16 (App Router) + React 19 + TypeScript
- **Estilos:** Tailwind CSS 4
- **Formulario de contacto:** Resend (API route de Next.js)
- **Imágenes/videos pesados:** Cloudflare R2 (bucket público)
- **Hosting:** Vercel (deploy automático desde la rama `master`)
- **Repositorio:** https://github.com/gianserassio/Web-Evi

## Requisitos

- [Node.js](https://nodejs.org) **22 o superior** (el proyecto se desarrolló con 22.16)
- npm (viene con Node). Usá **npm**, no yarn/pnpm/bun: el repo incluye `package-lock.json`.
- Git
- [VS Code](https://code.visualstudio.com) y, opcionalmente, [Claude Code](https://claude.com/claude-code)

## Instalación

```bash
git clone https://github.com/gianserassio/Web-Evi.git
cd Web-Evi
npm ci
```

`npm ci` instala exactamente las versiones del `package-lock.json` (más reproducible que `npm install`).

Después creá tu archivo de variables de entorno:

```bash
cp .env.example .env.local      # en Windows cmd: copy .env.example .env.local
```

y completá `RESEND_API_KEY` (ver [Formulario de contacto](#formulario-de-contacto-resend)). Podés levantar el sitio sin la clave: todo se ve igual, solo falla el envío del formulario.

## Ejecutar en local

```bash
npm run dev
```

Abrí http://localhost:3000. Los cambios se ven al guardar.

Otros comandos:

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Compila para producción (conviene correrlo antes de subir cambios) |
| `npm run start` | Sirve la build de producción (requiere `npm run build` antes) |
| `npm run lint` | Revisa el código con ESLint |

## Estructura del proyecto

```
app/
  layout.tsx            Título, descripción (SEO) y fuentes
  page.tsx              Arma la página: orden de las secciones
  globals.css           Estilos globales / Tailwind
  api/contact/route.ts  Endpoint POST /api/contact (envía el mail con Resend)
components/             Una sección por archivo
  Hero, Marquee, Services, Portfolio, Process, About,
  Differentiator, Stats, CTA (contiene el formulario), Footer, Navbar, ScrollReveal
public/                 Archivos estáticos servidos tal cual (/annapurna.png, /reels/...)
```

## Cómo modificar la web

- **Orden de secciones:** `app/page.tsx`.
- **Textos y diseño de una sección:** el archivo correspondiente en `components/`.
- **Portfolio** (`components/Portfolio.tsx`): ahí están las listas de contenido:
  - `reels`: videos verticales de Community Manager (pueden ser locales, `/reels/...`).
  - `carousels`: carruseles, cada uno con sus slides (URLs de R2).
  - `contentGroups`: videos de UGC / Agencia (URLs de R2).
  - `websites`: sitios web desarrollados (nombre, link e imagen en `public/`).
- **Título/descripción para buscadores:** `app/layout.tsx`.
- **Destinatario y remitente de los mails:** `app/api/contact/route.ts`.
- **Contacto, WhatsApp e Instagram:** están escritos directamente en `components/CTA.tsx` y `components/Footer.tsx`.

## Formulario de contacto (Resend)

**Cómo funciona**

1. El formulario está en `components/CTA.tsx` y envía un `POST` a `/api/contact` con `nombre`, `email`, `mensaje` y `servicio` (opcional).
2. `app/api/contact/route.ts` valida que estén nombre, email y mensaje (si no, responde 400) y usa el SDK de [Resend](https://resend.com) para mandar un mail de texto plano.
3. Remitente: `Portfolio Evi <contacto@evirost.com>`. Destinatario: `evangelinarost9@gmail.com`. Ambos están fijos en el código.
4. La clave se lee de la variable de entorno `RESEND_API_KEY`. **Nunca va en el código ni en GitHub.**

**Configurarlo en otra computadora**

1. Entrá a https://resend.com con la cuenta que administra el sitio (pedí acceso a Evi o a quien la gestione).
2. En **API Keys** creá una clave nueva para tu máquina (recomendado: permiso *Sending access*). No reutilices la de producción si no hace falta.
3. Pegala en `.env.local`:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxx
   ```
4. Reiniciá `npm run dev` (Next.js lee las variables al arrancar).
5. Probá el formulario en http://localhost:3000.

**Importante:** el remitente usa el dominio `evirost.com`, que debe estar verificado en esa cuenta de Resend. Si usás otra cuenta de Resend, o un dominio de prueba, tenés que cambiar el `from` en `route.ts` (con una cuenta sin dominio verificado, Resend solo permite `onboarding@resend.dev` y envía únicamente al mail del dueño de la cuenta). **Esos cambios no deben subirse a `master`**, porque romperían el formulario en producción.

## Imágenes y videos (Cloudflare R2)

Los videos y carruseles pesados **no están en el repositorio**: se cargan desde un bucket público de Cloudflare R2 con esta URL base:

```
https://pub-0cd1a326d662425eb94608296f4a31d0.r2.dev
```

(constante `R2` y URLs en `components/Portfolio.tsx`, además de `Hero.tsx` y `About.tsx`). Carpetas actuales del bucket: `ugc/`, `Agencia/`, `Carruseles/`, `carruseles/` y archivos sueltos como `Home.mp4`.

**Para ver y desarrollar el sitio no necesitás nada:** las URLs son públicas.

**Para agregar, reemplazar o borrar archivos necesitás:**

- Acceso a la cuenta de Cloudflare dueña del bucket (**R2 → bucket → Objects**), pedido a Evi o a quien lo administre. El acceso se da desde el panel de Cloudflare; no hay claves de R2 en este repo.
- Flujo para agregar contenido: subir el archivo al bucket → copiar su URL pública → pegarla en el arreglo correspondiente de `components/Portfolio.tsx`.
- Recomendaciones: videos en **MP4 (H.264)** por compatibilidad (los `.mov` no andan en todos los navegadores); carruseles en proporción **4:5**; evitar espacios y caracteres raros en los nombres (si los hay, hay que codificarlos en la URL, por ejemplo `%20`).
- Los archivos originales (carpetas `Carruseles`, `IMagenes` y `Videos`) viven fuera del repositorio, en la computadora de la desarrolladora anterior. Pedí una copia si necesitás editarlos.

Los archivos livianos que sí están en el repo (`public/`) se usan con rutas como `/annapurna.png`.

## Publicar (Vercel)

El proyecto está conectado a Vercel (proyecto `web-evi`) con **deploy automático desde la rama `master`**:

- Cada `git push` a `master` genera un deploy de **Production**.
- Las demás ramas/PRs generan *Preview deployments* con una URL propia para probar.

Flujo recomendado:

```bash
git checkout -b mi-cambio        # trabajá en una rama
npm run build                    # verificá que compila
git add <archivos>
git commit -m "Descripción del cambio"
git push -u origin mi-cambio     # genera un Preview en Vercel
# cuando esté probado: PR en GitHub y merge a master → Production
```

**Variables en Vercel:** `RESEND_API_KEY` debe estar cargada en *Project → Settings → Environment Variables*. Si cambiás una variable en Vercel hay que hacer *Redeploy* para que tome efecto. Para ver o editar el proyecto necesitás que el dueño te invite al equipo de Vercel.

## Trabajar con Claude Code

El repo incluye un `CLAUDE.md` con el contexto del proyecto y las reglas de trabajo. Abrí la carpeta en VS Code, instalá la extensión de Claude Code y lo toma automáticamente.

Opcional: el diseño original se trabajó con skills de diseño frontend (`frontend-design`, `senior-frontend`, `ui-ux-pro-max`, `ui-design-system`). No se versionan; si las querés, instalalas con:

```bash
npx claude-code-templates@latest --skill creative-design/frontend-design --yes
npx claude-code-templates@latest --skill development/senior-frontend --yes
npx claude-code-templates@latest --skill creative-design/ui-ux-pro-max --yes
npx claude-code-templates@latest --skill creative-design/ui-design-system --yes
```

## Checklist para la nueva desarrolladora

- [ ] Instalar Node 22+, Git y VS Code
- [ ] `git clone` + `npm ci`
- [ ] Crear `.env.local` desde `.env.example` y pedir/crear una `RESEND_API_KEY`
- [ ] `npm run dev` y comprobar que la web carga (videos e imágenes desde R2)
- [ ] Pedir acceso a: GitHub (colaboradora del repo), Vercel, Cloudflare R2 y Resend
- [ ] Pedir copia de los materiales originales (`Carruseles`, `IMagenes`, `Videos`)
- [ ] Trabajar en ramas y correr `npm run build` antes de mergear a `master`
