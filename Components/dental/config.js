// Single place to update the contact details used across the /dental landing page.

// International format, digits only (no +, spaces or dashes).
// South Africa (+27): local 063 341 4546 -> 27633414546
export const WHATSAPP_NUMBER = '27633414546'

export const WHATSAPP_MESSAGE =
  "Hi Salim, I run a dental practice and I'd like to set up the free 2-week AI receptionist pilot."

export const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`

export const CONTACT_EMAIL = 'salimshaban885@gmail.com'
