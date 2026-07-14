import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

// WhatsApp number in international format, digits only (no +, spaces or dashes).
// South Africa (+27): local 0633414546 -> 27633414546
const PHONE_NUMBER = '27633414546'
const MESSAGE = "Hi Salim, I saw your portfolio and I'd like to get in touch!"

const WhatsAppButton = () => {
  const href = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(MESSAGE)}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-24 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#25D366]/60"
    >
      <FaWhatsapp size={30} />
    </a>
  )
}

export default WhatsAppButton
