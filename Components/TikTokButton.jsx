import React from 'react'
import { FaTiktok } from 'react-icons/fa'

const TIKTOK_URL = 'https://www.tiktok.com/@salimdev_codes'

const TikTokButton = () => {
  return (
    <a
      href={TIKTOK_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow on TikTok"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-black text-white border border-white/40 ring-1 ring-white/10 shadow-lg shadow-black/40 transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#FE2C55]/60"
    >
      <FaTiktok size={26} />
    </a>
  )
}

export default TikTokButton
