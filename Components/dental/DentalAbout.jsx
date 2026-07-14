import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import profile from '../../assets/profile.png'

/**
 * Sits above the hero, so it has to stay short: on a phone the headline
 * "Never Miss a Patient Call Again" must still land inside the first screen.
 * That's why the photo is inline with the heading rather than stacked above it.
 */
const DentalAbout = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 sm:px-8 pt-3 pb-4 sm:pt-6 sm:pb-8">
      <div className="max-w-3xl mx-auto rounded-2xl bg-[#002E52] border border-white/10 p-4 sm:p-8">
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="relative w-20 sm:w-28 aspect-square shrink-0 rounded-full overflow-hidden">
            <Image
              src={profile}
              alt="Salim Shaban"
              fill
              sizes="112px"
              className="object-cover object-[center_30%]"
            />
          </div>

          <div className="min-w-0">
            <p className="text-[#2BC1EA] text-[10px] sm:text-xs font-body uppercase tracking-[0.2em] sm:tracking-[0.25em] mb-1.5">
              Who builds this
            </p>
            <h2 className="text-lg sm:text-2xl font-heading font-bold text-white tracking-tight leading-snug">
              Built by Salim, a Johannesburg full-stack developer
            </h2>
          </div>
        </div>

        <p className="mt-3 sm:mt-4 text-gray-300 text-sm sm:text-base font-body leading-relaxed">
          I build software for South African businesses — marketplaces, storefronts, and the quiet
          systems that run behind them. You deal with me directly, not a call centre.
        </p>

        <Link
          href="/"
          className="mt-3 sm:mt-4 inline-flex items-center gap-1.5 text-[#2BC1EA] text-sm sm:text-base font-body font-medium hover:text-[#25a8cc] transition-colors duration-200"
        >
          See my other work
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </section>
  )
}

export default DentalAbout
