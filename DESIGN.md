---
name: INSTEC Ltda.
description: Ficha técnica de ensayos no destructivos, en el formato de las piezas de INSTEC en LinkedIn.
colors:
  g: "#14bf85"
  g6: "#0fa876"
  g7: "#0A7A55"
  g50: "#e9fbf4"
  g100: "#c9f4e3"
  dark: "#07382a"
  deep: "#04281e"
  ink: "#0f172a"
  body: "#334155"
  muted: "#5b6b80"
  line: "#e2e8f0"
  surf: "#f8fafc"
  paper: "#ffffff"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(38px, 4vw, 60px)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(32px, 3.4vw, 50px)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "21px"
    fontWeight: 800
    lineHeight: 1.2
  lead:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(17px, 1.35vw, 20px)"
    fontWeight: 500
    lineHeight: 1.5
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  prose:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.65
  rail:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "13px"
    fontWeight: 700
    letterSpacing: "0.1em"
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "12px"
    fontWeight: 700
    letterSpacing: "0.1em"
  figure-number:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "clamp(26px, 2.3vw, 36px)"
    fontWeight: 700
    lineHeight: 1.1
    fontFeature: "\"tnum\""
  wordmark:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "30px"
    fontWeight: 900
    lineHeight: 0.82
    letterSpacing: "-0.01em"
rounded:
  tag: "4px"
  control: "8px"
  sheet: "10px"
  panel: "12px"
  pill: "999px"
spacing:
  ruler: "24px"
  ruler-mobile: "12px"
  gutter: "clamp(20px, 4vw, 56px)"
  header: "72px"
  grid: "40px"
  section: "clamp(64px, 9vw, 112px)"
  max-width: "1320px"
components:
  button-primary:
    backgroundColor: "{colors.g}"
    textColor: "{colors.deep}"
    rounded: "{rounded.control}"
    padding: "16px 22px"
  button-primary-hover:
    backgroundColor: "{colors.g6}"
    textColor: "{colors.deep}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.g7}"
    rounded: "{rounded.control}"
    padding: "16px 22px"
  button-ghost-hover:
    backgroundColor: "{colors.g50}"
    textColor: "{colors.g7}"
  button-ghost-on-dark:
    backgroundColor: "transparent"
    textColor: "{colors.g}"
    rounded: "{rounded.control}"
  button-sm:
    padding: "10px 14px"
    rounded: "7px"
  chip:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "5px"
    padding: "6px 10px"
  chip-selected:
    backgroundColor: "{colors.dark}"
    textColor: "{colors.g}"
  ficha:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.sheet}"
  ficha-key:
    backgroundColor: "{colors.g50}"
    textColor: "{colors.g7}"
    typography: "{typography.label}"
    width: "128px"
  figure-tag:
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.tag}"
    padding: "6px 10px"
  figure-caption:
    textColor: "{colors.paper}"
    rounded: "{rounded.panel}"
    padding: "18px 20px"
  callout:
    backgroundColor: "{colors.g}"
    textColor: "{colors.deep}"
    rounded: "{rounded.sheet}"
    padding: "20px 24px"
  tag-norma:
    backgroundColor: "{colors.g50}"
    textColor: "{colors.g7}"
    rounded: "{rounded.tag}"
    padding: "3px 8px"
  header:
    backgroundColor: "{colors.paper}"
    height: "{spacing.header}"
  rail:
    textColor: "{colors.g7}"
    typography: "{typography.rail}"
  rail-on-dark:
    textColor: "{colors.g}"
    typography: "{typography.rail}"
  data-row:
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    padding: "20px 0"
  data-row-hover:
    backgroundColor: "{colors.g50}"
---

# Design System: INSTEC Ltda.

## Overview

**Creative North Star: "La Ficha Técnica de Servicio"**

El sitio es una hoja de datos de inspección, no un folleto. Cada sección es un campo de la ficha: se abre con su rail en mono sobre una línea de tinta de 2 px, el contenido se ordena en filas y celdas con borde y la cotización se llena en la ficha misma. El mundo viene de las piezas de INSTEC en LinkedIn (verde de marca, noche verde, regla con marcas, fotos reales numeradas como figuras) y aquí se profesionaliza: menos ornamento, más estructura de documento.

La densidad es de documento técnico: tablas, listas con filas separadas por líneas de 1 px y celdas de clave/valor, nunca filas de tarjetas iguales. Las superficies son de dos familias: claras (blanco, con grilla de plano verde muy tenue en héroes y en algunas secciones) y oscuras (noche verde con grilla blanca tenue que se desvanece hacia abajo; verde profundo en figuras y footer). La foto real de terreno o taller es la prueba y se presenta como figura: degradé verde oscuro, marcas de regla en el borde, etiqueta "Fig. 0X · método" en mono y la marca "INSTEC / LTDA".

El rechazo visual confirmado y sostenido en todas las páginas construidas: nada de filas de tarjetas de servicios iguales y nada de números de sección ni kickers sobre los titulares de sección o de página.

**Key Characteristics:**
- Regla con marcas fija en el borde izquierdo de toda página.
- Rail en mono de borde a borde con línea de tinta de 2 px como encabezado de cada campo.
- Fichas y hojas con borde de tinta de 2 px y radio de 10 px; filas internas con líneas de 1 px.
- Fotos reales como figuras numeradas sobre degradé verde oscuro.
- Plano: la profundidad la dan bordes, superficies y degradés, no sombras.
- Mono sólo para datos: claves, códigos de método, figuras, fechas, cifras.

## Colors

Un verde de marca saturado sobre tinta azul pizarra y blanco de plano, con un par de verdes casi negros para la noche.

### Primary
- **Verde INSTEC** (`g`): rellenos de botón principal, callout sólido, marcas de la regla, subrayado de navegación, punto de la etiqueta de figura, foco, texto verde sobre fondos oscuros y la marca "INSTEC / LTDA".
- **Verde Presionado** (`g6`): sólo el hover del botón principal.
- **Verde Texto** (`g7`): el verde para texto sobre fondos claros: rail, etiquetas, claves de la ficha, códigos de método, énfasis de titulares, enlaces y botón fantasma.

### Secondary
- **Noche Verde** (`dark`): fondo de las secciones oscuras (con dos halos radiales de verde al 24 % y 12 %), chip seleccionado, cabecera de la hoja CIT, mitad derecha del header partido.
- **Verde Profundo** (`deep`): fondo de figuras y footer, texto sobre rellenos verdes, final del degradé de foto.

### Neutral
- **Tinta Pizarra** (`ink`): titulares, bordes de 2 px de fichas, rails y tablas, texto de valores.
- **Texto Pizarra** (`body`): cuerpo de texto sobre papel.
- **Gris Nota** (`muted`): bajadas, fechas, encabezados de tabla, ayudas.
- **Línea** (`line`): separadores de 1 px entre filas, borde del header y de chips en reposo.
- **Superficie** (`surf`): barra de acción de la ficha.
- **Tinte Verde** (`g50`): fondo de las claves de la ficha, hover de filas y de botón fantasma, tags de norma.
- **Verde Hielo** (`g100`): borde de la regla y de los tags de norma.
- **Papel** (`paper`): fondo base, siempre con la grilla de plano en las zonas de héroe.

Sobre la noche, el texto usa verdes claros sin token: `#e6f7f0` (texto general y footer), `#c8efdf` (bajada), `#d1fae5` (pie de figura chica), `#b7e6d3` y `#8fcab3` (footer). Los vidrios sobre foto usan `rgba(4, 30, 22, 0.72–0.8)`, un verde algo más oscuro que `deep` que tampoco tiene token.

### Named Rules
**La Regla del Verde por Superficie.** El verde de marca rellena y marca; sobre papel, el texto verde va en `g7`, y sobre noche en `g`. La única excepción es el logotipo en texto, que va en `g` también sobre blanco.

**La Regla de las Dos Familias.** Las superficies claras son blanco (con o sin grilla de plano) y las oscuras son `dark` o `deep`. No hay grises medios ni fondos de otra familia de color.

## Typography

**Display Font:** Archivo (con system-ui, sans-serif)
**Body Font:** Archivo (con system-ui, sans-serif)
**Label/Mono Font:** JetBrains Mono (con ui-monospace, monospace)

**Character:** Archivo en 800 da titulares compactos y grotescos, de ficha industrial; JetBrains Mono en 700 y mayúsculas espaciadas pone la voz de instrumento en rails, claves y figuras. Ambas autoalojadas con next/font (Archivo 400–900, Mono 500 y 700).

### Hierarchy
- **Display** (800, clamp(38px, 4vw, 60px), 1.02, -0.02em, `text-wrap: balance`): H1 del héroe. La palabra o frase clave va en `em` sin cursiva, en verde.
- **Headline** (800, clamp(32px, 3.4vw, 50px), 1.02): H2 de sección, a 22 px bajo el rail.
- **Title** (800, 21px, 1.2): nombre de método en la tabla, título en listas de notas; 23 px en los pasos del proceso; clamp(22px, 1.9vw, 28px) en los H2 de la prosa de una nota.
- **Lead** (500, clamp(17px, 1.35vw, 20px), 1.5, máx. 62ch): bajadas bajo titulares, en `muted`.
- **Body** (400, 16px, 1.5, máx. 60ch): celdas de tabla y pasos. La prosa de las notas sube a 18px/1.65 con máx. 72ch.
- **Rail** (Mono 700, 13px, 0.1em, mayúsculas): encabezado de cada campo.
- **Label** (Mono 700, 12px, 0.1–0.12em, mayúsculas): claves de la ficha, lugar de la figura, pasos, encabezados de tabla y de footer.
- **Cifra** (Mono 700, clamp(26px, 2.3vw, 36px), cifras tabulares): indicadores 30+ / 500+ / 14+ / 95 %. El código de método en la tabla usa Mono 700 a 26 px.
- **Marca** (Archivo 900, 30 px / 22 px / 15 px): sólo el logotipo en texto "INSTEC" sobre "LTDA" (800, 0.08em).

### Named Rules
**La Regla del Dato en Mono.** Mono sólo para datos y rótulos: claves, códigos, figuras, fechas, cifras, chips, rails, rótulos de grupo y de columna. Nunca para titulares display ni prosa corrida.

**La Regla del Énfasis Verde.** El énfasis en titulares es color (`g7` en papel, `g` en noche), nunca cursiva ni subrayado.

## Layout

El cuerpo deja a la izquierda el ancho de la regla (24 px; 12 px bajo 640 px) y todo el contenido corre a su derecha. El header es sticky de 72 px con fondo blanco al 96 % y desenfoque; en las páginas con héroe partido continúa la columna clara y la oscura (degradé duro al 54 %) y en 1024 px o menos vuelve a blanco.

El héroe es una ficha partida 54/46: columna de papel con rail, H1, bajada, ficha y celdas de indicadores al pie; figura oscura a sangre a la derecha. Alto mínimo `min(100svh − header, 940px)` (720 px en páginas interiores). Bajo 1024 px se apila y la figura toma 4:3.

Las secciones usan padding vertical clamp(64px, 9vw, 112px) y el gutter lateral clamp(20px, 4vw, 56px), con contenido a un máximo de 1320 px. La cabecera de sección es una grilla 1.1fr / 0.9fr (titular a la izquierda, bajada o callout a la derecha, alineados abajo) que se apila bajo 900 px. La grilla de plano mide 40 px en ambas superficies.

Los contenidos repetidos se ordenan como hojas de datos: tabla de métodos de 4 columnas (132 px · qué detecta · ten en cuenta · 200 px), listas de notas en filas y la galería de terreno en grilla de 12 columnas con módulos 7×3, 5×2, 5×1 y 3×2 y 12 px de separación (2 columnas bajo 900 px). Puntos de quiebre observados: 640, 900, 1024, 1180 (navegación a menú) y 1360 px.

### Named Rules
**La Regla de la Regla.** La regla con marcas (marca corta cada 12 px, larga cada 60 px, en `g`, con borde derecho de 2 px en `g100`) acompaña toda página por el borde izquierdo. Es la firma del mundo; no se quita ni se duplica a la derecha.

**La Regla del Rail.** Cada campo se abre con un rail de borde a borde: dos extremos en mono (qué es / dónde o cuántos) sobre una línea de tinta de 2 px. Sin números de sección. En móvil queda en una sola línea, con la fecha o el dato corto a la derecha. Una etiqueta suelta y corta encima de un titular no es un rail.

## Elevation & Depth

El sistema es plano. La estructura la dan los bordes (tinta de 2 px para fichas, hojas, rails y tablas; línea de 1 px entre filas), el contraste entre papel y noche, los halos radiales verdes de la noche y el degradé verde oscuro sobre las fotos. Los vidrios sobre foto (etiqueta y pie de figura) son verde oscuro translúcido con borde verde al 45–60 % y `blur(6px)`.

### Shadow Vocabulary
- **Flotante** (`box-shadow: 0 10px 30px -8px rgba(4, 40, 30, 0.55)`): sólo el botón flotante de WhatsApp, que aparece tras la primera pantalla.
- **Lámina** (`box-shadow: 0 18px 40px -24px rgba(4, 40, 30, 0.5)`): la imagen de la pieza de LinkedIn al costado de una nota.
- **Barrido** (`box-shadow: 0 0 24px 4px rgba(20, 191, 133, 0.55)`): la línea de escaneo verde que cruza la figura al cambiar de método.
- **Foco de campo** (`box-shadow: inset 3px 0 0 #14bf85`): la celda de la ficha con foco.

### Named Rules
**La Regla del Borde de Tinta.** Lo que en otro sitio sería una tarjeta con sombra aquí es una hoja con borde de tinta de 2 px. Las sombras de elevación sólo existen para lo que flota sobre la página (WhatsApp) o para la lámina de LinkedIn al costado de una nota; el barrido y la barra de foco no son elevación.

## Shapes

Esquinas suavemente redondeadas y pocas: 4 px para etiquetas de figura y tags de norma, 8 px para botones y controles de 44 px, 10 px para fichas, hojas, callouts y figuras de la galería, 12 px para el pie de figura y el bloque de pregunta de las notas, píldora sólo para el WhatsApp flotante. Los separadores y las marcas de regla son rectos. Las figuras a sangre del héroe no tienen radio. Las listas de la prosa llevan un guion verde de 12×2 px en vez de viñeta.

## Components

### Buttons
Rellenos, compactos y pesados, como el botón de las piezas.
- **Shape:** esquinas de control (8 px; 7 px en la variante chica), borde de 2 px del mismo color del relleno.
- **Primary:** relleno `g`, texto `deep`, Archivo 800 a 17 px, padding 16×22 px, ícono SVG de 18 px a la izquierda o flecha a la derecha.
- **Hover / Focus:** hover a `g6`; al presionar baja 1 px; foco con contorno de 2 px en `g` a 3 px de distancia. Transiciones de 0.2 s con `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Ghost:** transparente con borde `g` y texto `g7`; hover con tinte `g50`. Sobre noche, texto `g`, borde verde al 70 % y hover verde al 12 %.
- **Chico:** 14 px, padding 10×14 px, para acciones dentro de listas, header y notas.

### Chips
- **Style:** Mono 700 a 13 px, padding 6×10 px, radio 5 px, borde de 1.5 px en `line`, fondo papel, texto `ink`. Hover con borde `g`.
- **State:** seleccionado (`aria-pressed`) con fondo `dark` y texto `g`. Se usan como selector de método en la ficha y como filtros de notas.

### Cards / Containers
- **Corner Style:** hoja (10 px).
- **Background:** papel; la cabecera de la hoja CIT va en `dark` con texto `g` en mono.
- **Shadow Strategy:** ninguna (ver Elevation & Depth).
- **Border:** tinta de 2 px por fuera; filas internas separadas por 1 px en `line`.
- **Internal Padding:** filas de 10–14 px verticales y 14–18 px laterales.

### Inputs / Fields
- **Style:** la ficha. Cada fila es clave (128 px, Mono 700 12 px en `g7` sobre `g50`, con línea derecha de 1 px) y valor (input sin borde, Archivo 500 16 px en `ink`). La barra de acción final va en `surf` con el botón principal y la alternativa por correo.
- **Focus:** la celda de valor se aclara a `#fbfffd` y gana una barra interna verde de 3 px a la izquierda.
- **Móvil:** bajo 640 px la clave se apila sobre el valor.

### Navigation
- **Header:** marca a la izquierda, enlaces Archivo 600 a 15 px en `ink` con subrayado inferior de 2 px en `g` en hover y en la página actual, acciones (Portal clientes en fantasma, WhatsApp en principal) a la derecha.
- **Móvil (≤ 1180 px):** botón de menú de 44 px con borde `line`; panel a pantalla completa sobre la superficie noche con enlaces Archivo 800 a 26 px separados por líneas blancas al 15 %.
- **Footer:** sobre `deep`, encabezados de columna en Mono 700 12 px en `g`, enlaces `#e6f7f0` con hover `g` y línea legal en mono 12 px.

### Figura
La firma del mundo: una foto real presentada como figura de informe.
- Fondo `deep`, foto `object-fit: cover`, degradé verde oscuro de arriba (50 %) y de abajo (90 % a sólido) más un velo lateral.
- Marcas de regla en el borde derecho (marca cada 12 px en verde al 90 %).
- Etiqueta arriba a la izquierda: "Fig. 0X · método", Mono 700 12 px en mayúsculas, blanco sobre vidrio verde oscuro con borde verde al 60 %, radio 4 px y un punto verde de 7 px.
- Pie abajo: panel de vidrio (radio 12 px, borde verde al 45 %) con el lugar en etiqueta verde, el pie en Archivo 700 y la marca chica a la derecha.
- En la galería, las figuras tienen radio 10 px, borde verde al 35 %, zoom de 1.035 en hover y abren un lightbox con fondo verde oscuro al 88 %.
- Al elegir un método, una línea verde barre la figura de izquierda a derecha en 0.9 s y revela la foto nueva; sin animación con `prefers-reduced-motion`.

### Callout
Bloque sólido en `g` con texto `deep` en Archivo 800 a clamp(17px, 1.35vw, 20px), padding 20×24 px y radio 10 px. Lleva la frase que decide (como en la lámina "RT o UT"); hoy aparece una sola vez, en la cabecera de Métodos.

### Hoja de datos (tabla y listas)
Tabla y listas abren con borde superior de tinta de 2 px; cada fila cierra con 1 px en `line` y en hover gana un tinte `g50` que se desvanece hacia la derecha. Fecha y pilar en mono a la izquierda, título en Archivo 800 y flecha SVG en `g7` al final.

### Indicadores
Cuatro celdas al pie del héroe, cada una con borde superior de tinta de 2 px y separadas por 1 px en `line`: cifra en mono tabular y rótulo en Archivo 700 a 11 px en mayúsculas, `muted`. Dos columnas bajo 640 px.

## Do's and Don'ts

### Do:
- **Do** abrir cada campo con el rail de borde a borde: mono 13 px, dos extremos y línea de tinta de 2 px.
- **Do** presentar cada foto real como figura: degradé `deep`, marcas de regla, etiqueta "Fig. 0X · método" y marca "INSTEC / LTDA".
- **Do** ordenar contenidos repetidos como hoja de datos (tabla, filas con líneas de 1 px, clave/valor), con borde superior de tinta de 2 px.
- **Do** usar `g7` para texto verde sobre papel y `g` sobre noche (salvo el logotipo).
- **Do** mantener la regla con marcas en el borde izquierdo de toda página nueva.
- **Do** usar íconos SVG de Ionicons, empaquetados vía Iconify offline, a 18–22 px.

### Don't:
- **Don't** poner números de sección ni etiquetas sueltas (kickers) sobre los titulares de sección o de página; el rail es el único encabezado de campo. Ordinales de paso y rótulos de grupo son datos, no kickers.
- **Don't** armar filas de tarjetas de servicios iguales; los servicios y las notas se listan como hoja de datos.
- **Don't** usar el indigo de Value Data ni el teal de Gonzalo en ninguna superficie de INSTEC.
- **Don't** poner etiqueta de figura ni presentar como trabajo real una ambientación generada con Codex.
- **Don't** dar sombra de elevación a fichas, hojas, tablas o figuras; su estructura es el borde.
- **Don't** usar mono para titulares display o prosa corrida, ni cursiva para el énfasis.
- **Don't** tomar como sistema los tokens legacy de `globals.css` del template anterior.


> **Ajuste de contraste (2026-11-14):** `g7` pasó de `#0C8A60` (el verde "activo" de las piezas de LinkedIn) a `#0A7A55`, porque el original no alcanzaba AA (4.5:1) en textos de 12–13 px. Ahora da 5.35:1 sobre blanco, 4.98:1 sobre `g50` y 5.11:1 sobre `surf`. En las piezas impresas o de LinkedIn se puede seguir usando `#0C8A60`.
