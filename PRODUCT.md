# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Principales:** jefes de mantenimiento, calidad y producción en maestranzas, metalmecánica, montaje de estructuras, minería y energía (Chile). Necesitan contratar un ensayo no destructivo (END) o una inspección con respaldo normativo, y luego recibir un certificado que su mandante acepte.
- **También:** inspectores técnicos de obra (ITO) y mandantes que exigen el certificado.
- Son técnicos: buscan la norma, el método y el criterio de aceptación, no frases de marketing.
- Muchos llegan desde la página de LinkedIn de INSTEC (links con UTM en el primer comentario) o buscando en Google un método o una norma.

## Product Purpose

Sitio corporativo de **INSTEC Ltda. – Ingeniería e Inspecciones Técnicas** (Santiago).

- Debe posicionar a INSTEC en Google para búsquedas de ensayos no destructivos, métodos y normas en Chile. Este objetivo lo pidió el usuario (2026-11-13).
- Debe convertir esas visitas, y las que llegan desde LinkedIn, en solicitudes de cotización por WhatsApp o por el formulario.
- Debe dar acceso al portal de clientes (certificados).
- **Éxito:** mejor posicionamiento orgánico, contactos medidos en GA4 (eventos `generate_lead`, `whatsapp_click` y `cta_click`, ya implementados) y tráfico de LinkedIn atribuido por UTM.

## Positioning

INSTEC habla de norma y método antes que de adjetivos.

- Su contenido técnico (norma explicada, método, defecto de la semana, cómo trabajamos) ya se publica en LinkedIn y se convierte en notas propias del sitio.
- Lo respaldan inspectores certificados (ISO 9712, Nivel II/III, según el sitio actual), fotos reales de terreno y taller, y un Certificado de Inspección Técnica (CIT) digital con las fotos de terreno asociadas a la orden.

## Operating Context

- **Dominio principal:** `https://instecltda.cl` (confirmado 2026-11-13). `instec.cl`, `www.instec.cl` y `www.instecltda.cl` redirigen con 301 al principal.
- **Contacto:**
  - WhatsApp +56 9 9997 2647 (principal).
  - Teléfono secundario +56 9 5758 9575.
  - Correo instec@instec.cl.
  - Dirección: Santiago, Región Metropolitana.
- **LinkedIn:** https://www.linkedin.com/company/instec-ltda/. Se publica un post por día hábil a las 10:00, con pilares por día (lunes método, martes norma, miércoles caso de terreno, jueves defecto, viernes cómo trabajamos).
- **Portal de clientes ("Iniciar sesión"):** app de certificados de INSTEC (`NEXT_PUBLIC_APP_URL`; hoy https://instec-app.azurewebsites.net, más adelante https://app.instecltda.cl).
- **Analítica:** GA4 en una propiedad dentro de la cuenta de Google Analytics de Value Data (pedido 2026-11-13). El ID se define en Netlify como `NEXT_PUBLIC_GA_ID`.
- **Hosting:** Netlify, con deploy automático desde `main`. Static export de Next.js 15 en `crypgo/package`.

## Capabilities and Constraints

- **Servicios:**
  - Ensayos no destructivos: ultrasonido (UT, incluido phased array), partículas magnéticas (MT), líquidos/tintas penetrantes (PT), radiografía (RT), corrientes de Eddy (ET) e inspección visual (VT).
  - Control de calidad y asesorías: normas ASME, ASTM, AWS e ISO; auditorías; capacitación.
  - Metrología: espesores, control dimensional y evaluación estructural.
  - Inspección en terreno y en taller.
- **Proceso:** visita previa → ejecución de ensayos → informe técnico / CIT → seguimiento.
- **Sitio estático, sin backend:**
  - El formulario envía por `mailto:` o WhatsApp.
  - Toda página debe poder exportarse de forma estática.
- **Value Data:** el sitio de INSTEC **puede** decir que la app del CIT digital la hizo Value Data y enlazar a valuedata.cl. Antes de presentarla como "en uso", hay que confirmar con Gonzalo que ya opera.
- **Sin decidir:** el ID de GA4 (se crea en la cuenta VD) y cuándo cambia el portal a app.instecltda.cl.

## Brand Commitments

- **Nombre:** INSTEC Ltda. – Ingeniería e Inspecciones Técnicas. La marca se compone en texto, "INSTEC / LTDA", en verde.
- **Referencia visual vinculante (usuario, 2026-11-13):** rehacer el sitio con el formato de las piezas de INSTEC en LinkedIn, profesionalizado.
  - Las piezas y sus plantillas están en `../Agente Marketing closr/linkedin-imagenes/` (`render_instec*.py` y `render_s4*_instec.py`).
  - La marca está en `../Agente Marketing closr/contexto/instec.md`.
  - Nunca usar el indigo de Value Data ni el teal de Gonzalo en piezas de INSTEC.
- **Fotos reales (usuario, 2026-11-13):**
  - No se pierden las fotos reales.
  - Se mejoran con Codex y se presentan con degradé de marca.
  - Llevan indicadores (etiqueta técnica del método o pieza) y el logo, como en las piezas de LinkedIn.
- **Voz:**
  - Técnica y clara, en español de Chile, de "tú".
  - Norma y método antes que adjetivos.
  - Prohibido: "100 % confiable", "líderes", "los mejores" y cifras sin respaldo.

## Evidence on Hand

- **Cifras confirmadas por el usuario (2026-11-13):** más de 30 años de trayectoria, más de 500 proyectos, más de 14 clientes activos y 95 % de satisfacción.
- **Clientes confirmados (2026-11-13):** ANDRITZ, Revesol y Maestranza Diesel.
- **16 fotos reales de terreno y taller** en `crypgo/package/public/images/documentation/`:
  - UT con equipos SIUI y Olympus OmniScan.
  - MT con yugo sobre rodete Francis.
  - Medición de espesores con Elcometer.
  - Molino en planta, rodetes Francis, tambor, ejes mecanizados y barras.
  - Los originales pesados están en la carpeta local `Instec ltda/`, que no se versiona.
- **Contenido técnico publicado en LinkedIn:** el texto completo está en `../Agente Marketing closr/planes/2026-10-26-semana.md`, `2026-11-02-semana.md` y `2026-11-09-semana.md`, y las piezas en `linkedin-imagenes/instec-*`. Temas:
  - ISO 9712
  - Ultrasonido
  - Socavación
  - Tintas penetrantes
  - ASME V
  - Partículas magnéticas
  - Porosidad
  - CIT digital
  - RT o UT
  - ISO 5817
  - Muestreo
  - Falta de fusión
  - Antes del ensayo
- **Fondos generados con Codex** en `linkedin-imagenes/fondos/s4*-in-*.png`. Son solo ambientación: nunca se presentan como trabajo real de INSTEC.
- **Ausencias que no se inventan:**
  - Testimonios.
  - Casos con datos de clientes.
  - Números de CIT.
  - Planos.
  - Informes de clientes.
- En fotos de terreno se tapan placas, logos de terceros y patentes.

## Product Principles

1. **Norma y método primero.** Cada afirmación técnica cita la norma o el método. El adjetivo se gana con evidencia.
2. **Probar con terreno real.** Las fotos reales de INSTEC son la prueba. La ambientación generada nunca reemplaza un caso.
3. **El conocimiento vive en el dominio propio.** Cada tema que se publica en LinkedIn tiene su página indexable en instecltda.cl, y LinkedIn la distribuye.
4. **Un camino claro a la cotización.** WhatsApp y el formulario siempre están a un paso, y cada contacto se mide.
5. **Nada sin respaldo.** Solo se usan las cifras, los clientes y los claims confirmados.
