"use client";

import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"
import StatusBadge from "./StatusBadge"

const FeaturedProject = () => {
  const techStack = {
    frontend: ['Tailwind', 'TypeScript', 'shadcn'],
    backend: ['Convex', 'Resend', 'Clerk Auth'],
  }

  return (
    <section id="projects" className='max-w-[1200px] mx-auto mt-20 px-8'>
      <div className='flex flex-wrap items-center gap-4 mb-16'>
        <h1 className='text-4xl md:text-5xl font-heading font-bold tracking-tight'>
          <span className='text-[#2BC1EA]'>Projects</span>
        </h1>
        <StatusBadge color="green">Live with real users</StatusBadge>
      </div>

      <div className='bg-[#002E52] rounded-2xl shadow-2xl overflow-hidden grid lg:grid-cols-2 items-stretch'>
        {/* Project Preview Image */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className='relative h-56 sm:h-72 lg:h-full min-h-[14rem]'
        >
          <Image
            src="/images/riderplug-project.png"
            alt="RiderPlug project preview"
            fill
            sizes="(max-width: 1024px) 100vw, 600px"
            className='object-cover object-top'
          />
        </motion.div>

        {/* Project Content */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className='p-6 sm:p-8 md:p-10 flex flex-col justify-center'
        >
          <h2 className='text-3xl md:text-4xl font-heading font-bold text-white mb-4 tracking-tight'>
            Rider<span className='text-[#2BC1EA]'>Plug</span>
          </h2>

          <p className='text-gray-300 text-base md:text-lg mb-8 leading-relaxed font-body'>
            RiderPlug is a peer-to-peer marketplace I built for South African
            gig-economy delivery riders — Uber Eats and Takealot drivers — to buy
            and sell gear, parts, and side-hustle items locally. Built in public
            and documented end-to-end on TikTok, it uses zone-based browsing,
            seller ratings, a saved wishlist, and WhatsApp as the transaction
            layer to keep deals quick, local, and familiar.
          </p>

          {/* Tech Stack */}
          <div className='mb-8 grid grid-cols-2 gap-6'>
            <div>
              <h3 className='text-xs uppercase tracking-wider text-[#2BC1EA] font-bold mb-3 font-body'>
                Frontend
              </h3>
              <div className='flex flex-wrap gap-2'>
                {techStack.frontend.map((tech) => (
                  <span
                    key={tech}
                    className='bg-[#0a3d63] text-gray-200 px-3 py-1 rounded-full text-xs font-body border border-[#2BC1EA]/30'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className='text-xs uppercase tracking-wider text-[#2BC1EA] font-bold mb-3 font-body'>
                Backend
              </h3>
              <div className='flex flex-wrap gap-2'>
                {techStack.backend.map((tech) => (
                  <span
                    key={tech}
                    className='bg-[#0a3d63] text-gray-200 px-3 py-1 rounded-full text-xs font-body border border-[#2BC1EA]/30'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className='flex flex-wrap gap-3'>
            <a
              href="https://github.com/Salim104/portfolioo"
              target="_blank"
              rel="noopener noreferrer"
              className='bg-[#2BC1EA] text-white px-6 py-2 rounded-md font-bold text-base hover:bg-[#25a8cc] transition-all duration-200 font-body'
            >
              Code
            </a>
            <a
              href="https://www.riderplug.co.za/"
              target="_blank"
              rel="noopener noreferrer"
              className='bg-transparent text-[#2BC1EA] border border-[#2BC1EA] px-6 py-2 rounded-md font-bold text-base hover:bg-[#2BC1EA] hover:text-white transition-all duration-200 font-body'
            >
              Live
            </a>
            <a
              href="https://vt.tiktok.com/ZSQmyeN9A/"
              target="_blank"
              rel="noopener noreferrer"
              className='bg-transparent text-[#2BC1EA] border border-[#2BC1EA] px-6 py-2 rounded-md font-bold text-base hover:bg-[#2BC1EA] hover:text-white transition-all duration-200 font-body'
            >
              TikTok
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedProject
