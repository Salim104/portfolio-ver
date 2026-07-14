import React from 'react'
import { PhoneMissed, Clock, MessagesSquare } from 'lucide-react'

const problems = [
  {
    icon: PhoneMissed,
    title: 'After-hours calls go nowhere',
    body: "A patient with a cracked tooth calls at 19:00, hits voicemail, and books with the practice down the road. You never even know it happened.",
  },
  {
    icon: Clock,
    title: 'Reception drowns at peak hours',
    body: 'Between 08:00 and 10:00 the phone rings while patients are checking in. Someone always gets put on hold, and some of them just hang up.',
  },
  {
    icon: MessagesSquare,
    title: 'The same three questions, all day',
    body: '"What time do you close?" "Do you take Discovery?" "How much is a cleaning?" Your front desk answers these dozens of times a week instead of doing real work.',
  },
]

const DentalProblem = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 sm:px-8 py-16 sm:py-24">
      <p className="text-[#2BC1EA] text-xs sm:text-sm font-body uppercase tracking-[0.25em] mb-3">
        The problem
      </p>
      <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight max-w-2xl">
        Every missed call is a patient who booked <span className="text-[#2BC1EA]">somewhere else</span>
      </h2>

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {problems.map((problem) => {
          const Icon = problem.icon
          return (
            <div
              key={problem.title}
              className="bg-[#002E52] border border-white/10 rounded-2xl p-6 sm:p-7"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#0a3d63] border border-[#2BC1EA]/30">
                <Icon size={20} className="text-[#2BC1EA]" />
              </div>
              <h3 className="mt-5 text-xl font-heading font-bold text-white tracking-tight">
                {problem.title}
              </h3>
              <p className="mt-3 text-gray-300 text-base font-body leading-relaxed">
                {problem.body}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default DentalProblem
