import React from 'react'

const base =
  'inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 font-body font-bold text-base transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#2BC1EA]/60 focus:ring-offset-2 focus:ring-offset-[#05070F]'

const variants = {
  primary: 'bg-[#2BC1EA] text-white hover:bg-[#25a8cc]',
  outline:
    'bg-transparent text-[#2BC1EA] border border-[#2BC1EA] hover:bg-[#2BC1EA] hover:text-white',
  whatsapp: 'bg-[#25D366] text-white hover:bg-[#1fb356]',
}

const Button = ({ variant = 'primary', className = '', href, ...props }) => {
  const classes = `${base} ${variants[variant] ?? variants.primary} ${className}`

  if (href) {
    const external = href.startsWith('http')
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...props}
      />
    )
  }

  return <button className={classes} {...props} />
}

export default Button
