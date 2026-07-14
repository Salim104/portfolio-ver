import React from 'react'

const palettes = {
  green: {
    wrap: 'bg-green-500/15 text-green-400 border-green-500/30',
    dot: 'bg-green-400',
  },
  cyan: {
    wrap: 'bg-[#2BC1EA]/15 text-[#2BC1EA] border-[#2BC1EA]/30',
    dot: 'bg-[#2BC1EA]',
  },
}

const StatusBadge = ({ children, color = 'green' }) => {
  const p = palettes[color] ?? palettes.green
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs sm:text-sm font-body font-medium whitespace-nowrap ${p.wrap}`}
    >
      <span className={`h-2 w-2 rounded-full ${p.dot}`} />
      {children}
    </span>
  )
}

export default StatusBadge
