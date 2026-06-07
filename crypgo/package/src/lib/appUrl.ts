/**
 * URL de la aplicación de gestión INSTEC (app de órdenes, informes/CIT y pagos).
 *
 * Se centraliza aquí para que todos los enlaces de "Iniciar sesión" / "Acceder al
 * portal" del sitio corporativo apunten al mismo destino.
 *
 * Configurable mediante la variable de entorno `NEXT_PUBLIC_APP_URL`.
 * Si no se define, se usa el valor por defecto `https://app.instec.cl`.
 */
export const APP_URL: string =
  process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.instec.cl'
