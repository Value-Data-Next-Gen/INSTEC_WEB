# INSTEC — Handoff

Estado y guía de continuidad del sitio corporativo de **INSTEC – Ingeniería e
Inspecciones Técnicas** (ensayos no destructivos, Chile).

_Última actualización: 2026-11-13 (rediseño ficha técnica, notas, SEO y GA4)._

---

## 1. Resumen técnico

| | |
|---|---|
| **Repo** | `github.com/Value-Data-Next-Gen/INSTEC_WEB` |
| **Stack** | Next.js 15 · React 19 · Tailwind v4 · framer-motion |
| **Render** | Static export (`output: 'export'`; build en `.next`, export en `out/`) |
| **Base de build** | `crypgo/package` |
| **Hosting** | Netlify (deploy automático desde `main`) |
| **Marca** | Sistema de las piezas de LinkedIn: verde `#14BF85`, oscuro `#07382A`, Archivo + JetBrains Mono. Estilos en `src/styles/instec.css` |
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

## 2.c Qué se hizo (nov 2026 — rama `feat/rediseno-linkedin-seo`)

- **SEO técnico:**
  - Se eliminó el fallback SPA, que devolvía la home con 200 en cualquier URL.
  - 404 real, `robots.txt` y `sitemap.xml` estáticos; el sitemap incluye las notas con su fecha.
  - Dominio principal `https://instecltda.cl`. `instec.cl` y `www.instec.cl` redirigen con 301 (`netlify.toml`).
  - Se eliminaron `/signin` y `/signup`.
  - JSON-LD con `sameAs` a LinkedIn y logo limpio (`images/logo/instec-logo.png`). OG nueva (`images/og-instec.jpg`).
- **GA4:** propiedad "INSTEC (instecltda.cl)" en la cuenta de Analytics de Value Data (43770219), flujo web 16338483362, ID **G-75HGV8G13H**, definido en `netlify.toml`.
- **Rediseño en el sistema de las piezas de LinkedIn:**
  - La home es una "ficha técnica de servicio": cotización por método, pieza y lugar que abre WhatsApp con el mensaje escrito; la figura cambia según el método.
  - Tabla de métodos, galería de 16 figuras reales, hoja de ruta + CIT (8 preguntas), clientes confirmados, notas y contacto.
  - `/servicios` y `/nosotros` rehechas solo con datos confirmados.
  - `/proyectos` se retiró (mostraba trabajos sin respaldo: PDVSA, SIDOR…) y redirige con 301 a `/#terreno`.
- **Notas técnicas:** `/notas/` y 13 notas `/notas/<slug>/`, hechas desde los posts de LinkedIn (`src/content/notas.ts`), con TechArticle + BreadcrumbList.
- **Fotos:** 16 fotos reales mejoradas con Codex (luz y nitidez; sin cambios de contenido) en `public/images/terreno/`. Procedencia en `docs/fotos-terreno.md` y en los `.json` junto a cada imagen. Los originales están intactos en `documentation/`.
- **Contexto de producto:** `PRODUCT.md`.

### Pendientes nuevos
1. **URLs de cada post de LinkedIn:** agregar `linkedinUrl` en `src/content/notas.ts`. Hoy el botón lleva a la página de la empresa.
2. **Confirmar que la app del CIT ya opera:** la nota del CIT dice que es digital y que la hizo Value Data (`// REVISAR`).
3. **Otros clientes del sitio antiguo** (Colbún, Sermin, Minera Candelaria, Sandvik, Ferroman…): no se publicaron sin confirmación.
4. **Search Console:** verificar `instecltda.cl` y enviar el sitemap.
5. **Nueva nota:** para publicar una, agregar el objeto en `src/content/notas.ts` y su portada en `public/images/notas/`.

---

## 3. Pendientes de jul 2026 (estado al 2026-11-13)

1. ~~Google Analytics~~ — **resuelto**: `NEXT_PUBLIC_GA_ID = G-75HGV8G13H` en `netlify.toml`.
2. ~~Redes sociales~~ — **resuelto**: LinkedIn real (`linkedin.com/company/instec-ltda/`); se quitó el placeholder de Facebook.
3. ~~Dominio~~ — **resuelto**: `SITE.url = https://instecltda.cl` y 301 desde `instec.cl`.
4. **Otros datos de contacto** (si cambian): teléfonos, correo y dirección viven en `src/lib/site.ts`.

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
