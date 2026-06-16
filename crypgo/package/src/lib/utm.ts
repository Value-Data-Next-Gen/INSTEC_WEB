/**
 * Captura y persistencia de parámetros UTM (atribución de campañas).
 *
 * Al primer ingreso se guardan los UTM de la URL en localStorage durante 30
 * días, para inyectarlos luego en formularios y eventos de conversión.
 * (Mismo patrón usado en el resto de los sitios de ValueData.)
 */

const UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
] as const

type UtmKey = (typeof UTM_KEYS)[number]
export type UtmParams = Partial<Record<UtmKey, string>>

const STORAGE_KEY = 'instec_utm'
const TTL_MS = 30 * 24 * 60 * 60 * 1000 // 30 días

/** Lee los UTM de la URL actual y, si existen, los persiste. */
export const captureUtmParams = (): void => {
  if (typeof window === 'undefined') return

  const params = new URLSearchParams(window.location.search)
  const captured: UtmParams = {}
  UTM_KEYS.forEach((key) => {
    const value = params.get(key)
    if (value) captured[key] = value
  })

  if (Object.keys(captured).length === 0) return

  try {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ params: captured, savedAt: Date.now() })
    )
  } catch {
    /* localStorage no disponible */
  }
}

/** Devuelve los UTM persistidos si no han expirado. */
export const getUtmParams = (): UtmParams => {
  if (typeof window === 'undefined') return {}
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return {}
    const { params, savedAt } = JSON.parse(raw) as {
      params: UtmParams
      savedAt: number
    }
    if (Date.now() - savedAt > TTL_MS) {
      window.localStorage.removeItem(STORAGE_KEY)
      return {}
    }
    return params ?? {}
  } catch {
    return {}
  }
}
