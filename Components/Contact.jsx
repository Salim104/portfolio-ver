import React from 'react'
import { Mail } from 'lucide-react'

const Contact = () => {
  return (
    <footer id="contact" className='max-w-[1200px] mx-auto mt-20 px-8'>
      <div className='border-t border-white/10 py-8'>
        <a
          href="mailto:salimshaban885@gmail.com"
          className='flex items-center gap-3 text-gray-400 hover:text-[#2BC1EA] transition-colors duration-200'
        >
          <Mail size={18} />
          <span className='text-sm sm:text-base break-all font-body'>salimshaban885@gmail.com</span>
        </a>
      </div>
    </footer>
  )
}

export default Contact
