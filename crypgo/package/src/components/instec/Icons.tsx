import { Icon } from '@iconify/react/dist/offline'
import whatsapp from '@iconify/icons-ion/logo-whatsapp'
import linkedin from '@iconify/icons-ion/logo-linkedin'
import arrow from '@iconify/icons-ion/arrow-forward'
import menu from '@iconify/icons-ion/menu'
import close from '@iconify/icons-ion/close'
import check from '@iconify/icons-ion/checkmark'
import prev from '@iconify/icons-ion/chevron-back'
import next from '@iconify/icons-ion/chevron-forward'
import mail from '@iconify/icons-ion/mail-outline'
import phone from '@iconify/icons-ion/call-outline'
import pin from '@iconify/icons-ion/location-outline'
import login from '@iconify/icons-ion/log-in-outline'
import external from '@iconify/icons-ion/open-outline'

// Íconos de Ionicons empaquetados (sin pedidos a la API de Iconify en runtime).
const ICONS = { whatsapp, linkedin, arrow, menu, close, check, prev, next, mail, phone, pin, login, external }

export type IconName = keyof typeof ICONS

export const Ic = ({ name, className }: { name: IconName; className?: string }) => (
  <Icon icon={ICONS[name]} className={className} aria-hidden='true' />
)
