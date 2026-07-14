import React from 'react'

/**
 * Same atmosphere as the portfolio's <Background />, but with the animated
 * blobs frozen — this page gets opened cold on phones from an Instagram DM,
 * so nothing here should keep the compositor busy after paint.
 */
const DentalBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 bg-[#05070F]">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(130% 100% at 50% -10%, #0E1733 0%, #080B1A 45%, #05070F 100%)',
        }}
      />

      <div className="absolute top-[-12%] left-[-10%] w-[520px] h-[520px] rounded-full bg-[#2BC1EA] opacity-[0.10] blur-[130px]" />
      <div className="absolute top-[40%] right-[-12%] w-[420px] h-[420px] rounded-full bg-[#1E3A8A] opacity-[0.14] blur-[130px]" />
      <div className="absolute bottom-[-12%] left-[18%] w-[620px] h-[620px] rounded-full bg-[#06b6d4] opacity-[0.08] blur-[150px]" />

      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(125% 125% at 50% 30%, transparent 45%, rgba(0,0,0,0.6) 100%)',
        }}
      />
    </div>
  )
}

export default DentalBackground
