import React from 'react'
import { PhoneCall, CalendarCheck, MessageSquareText } from 'lucide-react'

const steps = [
  {
    icon: PhoneCall,
    title: 'The AI answers the call',
    body: 'On the first ring, day or night. It greets the caller in your practice name and understands what they actually want.',
  },
  {
    icon: CalendarCheck,
    title: 'It checks your calendar',
    body: 'Live availability, real slots. No double bookings, no callbacks to confirm a time that was never free.',
  },
  {
    icon: MessageSquareText,
    title: 'It books and sends you a summary',
    body: 'The appointment lands in your calendar and you get a short summary of who called and why.',
  },
]

const DentalHowItWorks = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 sm:px-8 py-16 sm:py-24">
      <p className="text-[#2BC1EA] text-xs sm:text-sm font-body uppercase tracking-[0.25em] mb-3">
        How it works
      </p>
      <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight max-w-2xl">
        Three steps. Nothing for your team to learn.
      </h2>

      <div className="mt-12 grid md:grid-cols-3 gap-6 md:gap-8">
        {steps.map((step, i) => {
          const Icon = step.icon
          return (
            <div key={step.title} className="relative">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#0a3d63] border border-[#2BC1EA]/30">
                  <Icon size={20} className="text-[#2BC1EA]" />
                </div>
                <span className="text-5xl font-heading font-bold text-white/[0.08] leading-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-heading font-bold text-white tracking-tight">
                {step.title}
              </h3>
              <p className="mt-3 text-gray-300 text-base font-body leading-relaxed">
                {step.body}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default DentalHowItWorks
