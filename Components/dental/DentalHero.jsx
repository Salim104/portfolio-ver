import React from 'react'
import StatusBadge from '../StatusBadge'
import Button from './Button'
import { whatsappHref } from './config'

const DentalHero = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 sm:px-8 pt-2 pb-16 sm:pt-8 sm:pb-24">
      <div className="max-w-3xl">
        <StatusBadge color="cyan">Free 2-week pilot</StatusBadge>

        <h1 className="mt-4 sm:mt-6 text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-[1.1] tracking-tight">
          Never Miss a Patient <span className="text-[#2BC1EA]">Call</span> Again
        </h1>

        <p className="mt-6 text-gray-300 text-lg sm:text-xl font-body leading-relaxed">
          An AI receptionist for your dental practice that answers every call, 24/7. It books
          appointments straight into your calendar, answers the questions your front desk
          repeats all day — hours, medical aid, pricing — and flags a real emergency to you
          immediately.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Button href={whatsappHref} className="w-full sm:w-auto">
            Start Your Free Pilot
          </Button>
        </div>

        <p className="mt-8 text-sm text-gray-500 font-body">
          Built in Johannesburg for South African practices. No setup fee, no contract.
        </p>
      </div>
    </section>
  )
}

export default DentalHero
