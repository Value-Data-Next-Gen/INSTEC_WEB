# INSTEC — Handoff

Estado y guía de continuidad del sitio corporativo de **INSTEC – Ingeniería e
Inspecciones Técnicas** (ensayos no destructivos, Chile).

_Última actualización: 2026-07-21._

---

## 1. Resumen técnico

| | |
|---|---|
| **Repo** | `github.com/Value-Data-Next-Gen/INSTEC_WEB` |
| **Stack** | Next.js 15 · React 19 · Tailwind v4 · framer-motion |
| **Render** | Static export (`output: 'export'`; build en `.next`, export en `out/`) |
| **Base de build** | `crypgo/package` |
| **Hosting** | Netlify (deploy automático desde `main`) |
| **Marca** | Verde `#1DAE61`; sistema de utilidades `nicepage-*` en `globals.css` |
| **Idioma** | Español (Chile) |

### Comandos
```bash
cd crypgo/package
npm install
npm run dev        # desarrollo (localhost:3000)
npm run build      # export estático -> crypgo/package/out
```

---

## 2. Qué se hizo (jun 2026)

- **WhatsApp** unificado a **+56 9 9997 2647** en todo el sitio (botón flotante,
  footer, hero, contacto), con tracking. Antes el del footer iba a `#`.
- **Hero rediseñado**: se eliminó el marco tipo "ventana de navegador";
  titular fuerte, fondo refinado, stats con divisores, badges de
  certificación/experiencia.
- **Carrusel premium** con fondo difuminado (foto completa sobre relleno
  borroso), imágenes más grandes y transiciones suaves.
- **SEO**: OpenGraph + Twitter card, JSON-LD `ProfessionalService`, canonical y
  metadatos por página; imagen OG branded.
- **Analítica**: GA4 + captura UTM (30 días) + eventos `whatsapp_click` /
  `cta_click` / `form_start` / `generate_lead`.
- **UX**: formulario con envío por email o WhatsApp + éxito inline (sin
  `alert()`) y validación nativa; menú móvil visible sobre hero claro;
  `scroll-padding` para anclas; `focus-visible`; `prefers-reduced-motion`;
  mejor orden de secciones en la home.

Entregado vía PR #2 (squash) → **mergeado a `main`** (commit `9016d46`).

---

## 2.b Qué se hizo (jul 2026 — commit `80066cd`)

- **Fotos reales nuevas**: se incorporaron 9 fotos de terreno/taller (ensayos UT,
  MT, rodetes Francis, molino en planta) optimizadas a `public/images/documentation/`
  (`ndt-molino-inspeccion`, `ndt-ultrasonido-barra/-eje/-rodete`,
  `ndt-particulas-magneticas-turbina`, `ndt-rodete-francis(-2)`,
  `ndt-ejes-mecanizados`, `ndt-tambor-taller`). Fuente original (pesada, **no
  versionada**): carpeta `Instec ltda/` en la raíz local.
- **Hero y Servicios**: carruseles actualizados con las fotos nuevas. En Servicios
  se **eliminó el gradiente rotatorio morado/rosa** (herencia del template) que
  tapaba las fotos; ahora se ven con tinte verde de marca + backdrop blur.
- **Nosotros / Contacto**: fondo de foto difuminado on-brand (verde), legible.
- **Nueva sección "Nuestro trabajo en terreno"** (`components/Home/galeria/`):
  galería masonry con lightbox que usa las 9 fotos. Insertada en la home entre
  Servicios y Clientes (ancla `#galeria`).
- **Fix botones muertos** en Servicios: "Conocer Más"→`#galeria` (ahora "Ver
  nuestro trabajo") y "Más información"→`#contacto`.
- **Fix de config** (causaba 404 falsos en dev y `out/` corrupto):
  se eliminó `distDir: 'out'` de `next.config.js` (con eso `next dev` sobreescribía
  el export publicado); menú con trailing slash para coincidir con `trailingSlash: true`.

> ⚠️ **Nota dev**: en `npm run dev`, el **primer** acceso a cada ruta compila en
> caliente y puede tardar bastante (se observó hasta ~5 min en frío, luego 1-2 s).
> No es un bug de navegación. Para revisar rápido, servir el build:
> `npm run build && npx serve out`. **No** correr dos `next dev` a la vez.

---

## 3. ⚠️ Pendientes antes de cerrar producción

Todo se configura en un solo lugar salvo el GA ID (variable de entorno).

1. **Google Analytics** — definir `NEXT_PUBLIC_GA_ID` (formato `G-XXXXXXXXXX`)
   en las variables de entorno de **Netlify**. Sin esto, la analítica no
   registra nada (los eventos quedan no-op). Ver `.env.example`.

2. **Redes sociales** — reemplazar las URLs placeholder en
   `crypgo/package/src/lib/site.ts` → `SITE.social.facebook` y
   `SITE.social.linkedin` (hoy apuntan a las home genéricas).

3. **Dominio** — confirmar/ajustar `SITE.url` en `lib/site.ts`
   (hoy `https://www.instec.cl`). Afecta canonical y OpenGraph (`og:url`,
   `og:image` absoluta).

4. **Otros datos de contacto** (si cambian) — teléfono secundario, email,
   dirección y horarios viven en `lib/site.ts` y `components/Home/contacto`.

> Tras cambiar cualquiera de estos, `git push` a `main` redepliega solo.

---

## 4. Dónde está cada cosa

| Tema | Archivo |
|---|---|
| Config central (contacto, WhatsApp, redes, dominio) | `src/lib/site.ts` |
| Helper de metadatos por página (SEO/OG) | `src/lib/seo.ts` |
| Analítica GA4 + eventos | `src/lib/analytics.ts` |
| Captura UTM | `src/lib/utm.ts` |
| Carga de GA + init UTM | `src/components/Analytics/index.tsx` |
| Metadatos raíz + JSON-LD | `src/app/layout.tsx` |
| Hero + carrusel | `src/components/Home/Hero/` |
| Carrusel de servicios | `src/components/Home/work/ServiceImageCarousel.tsx` |
| Galería "trabajo en terreno" + lightbox | `src/components/Home/galeria/index.tsx` |
| Orden de secciones de la home | `src/app/page.tsx` |
| Menú de navegación | `src/components/Layout/Header/Navigation/menuData.tsx` |
| Formulario de contacto | `src/components/Home/contacto/index.tsx` |
| URL del portal de clientes | `src/lib/appUrl.ts` (`NEXT_PUBLIC_APP_URL`) |
| Imagen OG | `public/images/og-default.png` (generada con Pillow) |
| Fotos NDT | `public/images/documentation/` |

---

## 5. Notas / decisiones

- **Envío del formulario**: usa `mailto:` (abre el cliente de correo) o
  WhatsApp. No hay backend. Si más adelante se quiere recepción server-side,
  conectar un endpoint (Netlify Forms / función) en `handleSubmit`.
- **Portal "Iniciar sesión"** apunta a `NEXT_PUBLIC_APP_URL`
  (default `https://app.instecltda.cl`).
- El sitio depende de JS para revelar secciones al hacer scroll (`useInView`),
  comportamiento normal en este stack.
