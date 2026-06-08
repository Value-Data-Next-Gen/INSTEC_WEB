/**
 * URL de la aplicación de gestión INSTEC (app de órdenes, informes/CIT y pagos).
 *
 * Se centraliza aquí para que todos los enlaces de "Iniciar sesión" / "Acceder al
 * portal" del sitio corporativo apunten al mismo destino.
 *
 * Configurable mediante la variable de entorno `NEXT_PUBLIC_APP_URL`.
 * Si no se define, apunta a la app desplegada en Azure App Service. Cuando
 * exista el dominio propio (p. ej. https://app.instec.cl) basta con definir
 * `NEXT_PUBLIC_APP_URL` en Netlify, sin tocar el código.
 */
export const APP_URL: string =
  process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.instecltda.cl'
