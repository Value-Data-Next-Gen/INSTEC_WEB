---
version: 1
slug: "crypgo-package-src-app-page-tsx"
primary_target: "crypgo/package/src/app/page.tsx"
related_targets: ["crypgo/package/src/components/instec/HeroFicha.tsx"]
---

# Home (instecltda.cl/)

**Modo:** Persuade.

**Audiencia y tarea:** jefes de mantención, calidad y producción, ITO y mandantes. Llegan desde Google (método o norma) o desde LinkedIn (UTM). La tarea es entender que INSTEC hace END con norma, método y certificado, verlo probado en terreno y pedir cotización.

**Acción principal:** solicitud de cotización en forma de ficha (método, pieza, lugar). Abre WhatsApp con un mensaje prellenado. Las alternativas son el correo y el portal de clientes.

**Prueba:**
- 16 fotos reales mejoradas (`/images/terreno/`).
- Cifras confirmadas: 30+ años, 500+ proyectos, 14+ clientes activos, 95 % de satisfacción.
- Clientes confirmados: ANDRITZ, Revesol, Maestranza Diesel.
- Inspectores ISO 9712 y CIT digital.
- Notas técnicas de LinkedIn.

**Restricciones:**
- Static export, sin backend.
- Se mantienen los eventos GA4 existentes (`whatsapp_click`, `cta_click`, `form_start`, `generate_lead`) y la captura de UTM.
- La ambientación de Codex nunca se presenta como trabajo real.
- Sin claims nuevos.

**Momento memorable:** la ficha con la cotización integrada al lado de la foto real con su figura numerada ("Fig. 01 · UT · Phased array").

**Sin resolver:** URLs de posts individuales de LinkedIn (no las tenemos; se enlaza a la página de la empresa).

## Direction contract

**THESIS:** La home es una ficha técnica de servicio. Cada sección es un campo de la ficha, encabezado por su rail en mono con línea de 2 px (sin números ni kickers), y la cotización se llena en la ficha misma. Rechaza el hero centrado con botón sobre foto y la fila de tarjetas de servicios iguales.

**OWN-WORLD:** El sistema de las piezas de INSTEC en LinkedIn.
- **Colores:** verde `#14BF85` (hover `#0FA876`, texto `#0C8A60`), oscuro `#07382A` / `#04281E`, tinte `#E9FBF4`, tinta `#0F172A`.
- **Tipografía:** Archivo 800/900 en titulares y JetBrains Mono para rail, etiquetas, chips, figuras e indicadores.
- **Elementos fijos:**
  - Regla con marcas en el borde izquierdo.
  - Papel de grilla de plano en las zonas claras y noche verde con grilla tenue en las oscuras.
  - Rail superior en mono con línea de 2 px.
  - Tarjetas oscuras con borde verde translúcido.
  - Fotos reales con degradé verde oscuro, etiqueta de figura en mono y marca "INSTEC / LTDA".

**STORY:**
1. **Entiende:** END con norma, método y criterio de aceptación, en terreno o taller.
2. **Cree:** fotos reales numeradas como figuras, cifras confirmadas y normas citadas.
3. **Hace:** completa la ficha y pide cotización por WhatsApp.

**FIRST VIEWPORT:** Dos columnas a pantalla completa.
- **Izquierda (54 %, papel de grilla):**
  - Rail mono "Ficha de servicio · END / Santiago · Chile".
  - H1 de hasta 60 px, "Inspección con norma, método y *criterio de aceptación*.", con el énfasis en verde.
  - Bajada.
  - Ficha de cotización con borde de tinta 2 px: fila MÉTODO con chips UT/RT/MT/PT/VT/ET/Espesores/No sé, fila PIEZA y fila LUGAR (inputs reales), y una barra de acción con "Pedir cotización por WhatsApp →".
  - Indicadores 30+ / 500+ / 14+ / 95 % en celdas mono al pie.
- **Derecha (46 %, oscura):**
  - Foto real OmniScan a sangre con degradé.
  - Marcas de regla en el borde.
  - Etiqueta "Fig. 01 · UT · Phased array".
  - Tarjeta inferior con pie de foto y marca.
  - Portal de clientes y WhatsApp arriba a la derecha.
- **Interacción firma:** elegir un método en la ficha cambia la figura de la derecha a una foto real de ese método, con su etiqueta, y prellena el mensaje de WhatsApp.

**FORM:** Ficha técnica de servicio, posición 4 de 7 en la lista. seed:73d2f01172fa06f3

**FINISH:** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

**Decisiones de build (2026-11-13):** se quitó el kicker sobre el titular y los números de sección (regla de calidad; las piezas de LinkedIn ya lo habían quitado por repetir el rail). Los indicadores se integran al pie de la ficha. El WhatsApp flotante aparece solo después de la primera pantalla.
