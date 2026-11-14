# Fotos de terreno mejoradas (procedencia)

Fotos **reales** de INSTEC (originales en `crypgo/package/public/images/documentation/ndt-*.jpg`, que se mantienen intactos).
Se mejoraron con Codex (`codex exec -m gpt-6-astra`, edición de imagen) el 2026-11-13: exposición, balance de blancos, nitidez y ruido.
Instrucción: no agregar ni quitar nada; pantallas y números idénticos; sin texto ni logos. Se revisaron antes/después una por una.
El degradé de marca, los indicadores y el logo se agregan en la web (CSS), no en la imagen.

| Archivo web | Original | Sesión Codex |
|---|---|---|
| `terreno/ejes-mecanizados.webp` (+ `-960`) | `documentation/ndt-ejes-mecanizados.jpg` | `01a1d773-05ab-7f23-ac01-4e0317597e2c` |
| `terreno/equipo-inspeccion.webp` (+ `-960`) | `documentation/ndt-equipo-inspeccion.jpg` | `01a1d773-061b-7eb1-9af7-7ebf36fb4c28` |
| `terreno/inspeccion-planta.webp` (+ `-960`) | `documentation/ndt-inspeccion-planta.jpg` | `01a1d773-061b-7ae2-ad49-8653c3b3ee35` |
| `terreno/inspeccion-terreno.webp` (+ `-960`) | `documentation/ndt-inspeccion-terreno.jpg` | `01a1d774-54f8-7ea2-88de-15b6c89a977e` |
| `terreno/molino-inspeccion.webp` (+ `-960`) | `documentation/ndt-molino-inspeccion.jpg` | `01a1d76e-2a98-7ac0-9b83-33826a342223` |
| `terreno/particulas-magneticas-turbina.webp` (+ `-960`) | `documentation/ndt-particulas-magneticas-turbina.jpg` | `01a1d774-6abf-71b1-bf60-d9f475901116` |
| `terreno/particulas-magneticas-yugo.webp` (+ `-960`) | `documentation/ndt-particulas-magneticas-yugo.jpg` | `01a1d774-b293-77e0-8db0-7ffb4d65f5b3` |
| `terreno/particulas-magneticas-yugo-2.webp` (+ `-960`) | `documentation/ndt-particulas-magneticas-yugo-2.jpg` | `01a1d775-9bd5-77b3-9569-87120afb5e6a` |
| `terreno/rodete-francis.webp` (+ `-960`) | `documentation/ndt-rodete-francis.jpg` | `01a1d775-bea8-7171-98ef-4c6a9186b4c9` |
| `terreno/rodete-francis-2.webp` (+ `-960`) | `documentation/ndt-rodete-francis-2.jpg` | `01a1d776-14da-7461-b3c9-5e302f685595` |
| `terreno/tambor-taller.webp` (+ `-960`) | `documentation/ndt-tambor-taller.jpg` | `01a1d777-3236-7c83-b00c-10af2a0388b3` |
| `terreno/trabajo-terreno.webp` (+ `-960`) | `documentation/ndt-trabajo-terreno.jpg` | `01a1d777-468a-7cb3-a2dc-3cc27bef3483` |
| `terreno/ultrasonido-barra.webp` (+ `-960`) | `documentation/ndt-ultrasonido-barra.jpg` | `01a1d777-8eb1-7141-86c1-fa74f11a0c1d` |
| `terreno/ultrasonido-eje.webp` (+ `-960`) | `documentation/ndt-ultrasonido-eje.jpg` | `01a1d778-bdcb-71a3-b20e-8ac316677b8e` |
| `terreno/ultrasonido-omniscan.webp` (+ `-960`) | `documentation/ndt-ultrasonido-omniscan.jpg` | `01a1d778-eb63-7f70-b505-a908301a60bd` |
| `terreno/ultrasonido-rodete.webp` (+ `-960`) | `documentation/ndt-ultrasonido-rodete.jpg` | `01a1d779-48c6-7831-a14e-7ca19cb39525` |

> `molino-inspeccion` se hizo con la primera versión del prompt (grading con sombras hacia verde); se revisó y no tiene tintes ni cambios de contenido.

## Prompt (versión final)

```
Usa tu herramienta de generación/edición de imágenes para EDITAR la foto adjunta. Es una foto REAL de trabajo de terreno de una empresa chilena de ensayos no destructivos; tiene que seguir siendo esa misma foto.

Conserva EXACTAMENTE: el encuadre, los objetos, las piezas, las manos y guantes, los equipos, los cables y el fondo. Las pantallas de los equipos y cualquier número o texto visible deben quedar idénticos, dígito por dígito. No agregues ni quites nada, no cambies formas ni posiciones, no inventes detalles, no agregues texto ni logos.

Mejora solo la toma, como lo haría un retocador profesional de fotografía industrial:
- exposición y rango dinámico equilibrados (recupera altas luces y abre sombras sin aplanar);
- balance de blancos neutro, sin dominantes amarillas o azules;
- más nitidez y micro-contraste en el metal y las soldaduras; menos ruido;
- un grading sobrio: sombras apenas más profundas y frías, medios tonos y colores naturales. NO tiñas de verde las superficies, los bordes ni el metal; el verde de marca se agrega después en la web.
- si aparece una placa de identificación de un tercero, una patente o un logo de cliente legible, difumínalo de forma discreta (las marcas de los equipos de medición pueden quedar).

Salida: una sola imagen, misma proporción que la original (horizontal 4:3), en la mayor resolución posible. No escribas archivos tú: solo genera la imagen.
```
