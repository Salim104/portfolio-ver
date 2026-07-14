"use client";

import { ReactTyped } from "react-typed";
import React from 'react'
import Image from 'next/image'
import profile from '../assets/profile.png'
import { motion } from "motion/react"
import { FaLinkedin, FaGithub } from "react-icons/fa";
import StatusBadge from "./StatusBadge";

const techGroups = [
  {
    category: 'Frontend',
    items: [
      { name: 'Next.js', color: '#FFFFFF' },
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'shadcn/ui', color: '#8B5CF6' },
      { name: 'Tailwind', color: '#38BDF8' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', color: '#83CD29' },
      { name: 'Convex', color: '#EE342F' },
      { name: 'MongoDB', color: '#47A248' },
      { name: 'Firebase', color: '#FFCA28' },
      { name: 'Python', color: '#6DA8D6' },
    ],
  },
  {
    category: 'Design',
    items: [
      { name: 'Figma', color: '#F24E1E' },
      { name: 'Adobe XD', color: '#FF61F6' },
      { name: 'Photoshop', color: '#31A8FF' },
    ],
  },
];

const gridStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const tileVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.92 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 260, damping: 22 } },
};

const TechTile = ({ name, color }) => (
  <motion.div
    variants={tileVariants}
    whileHover={{ y: -3, boxShadow: `0 10px 26px -10px ${color}73` }}
    style={{ '--c': color }}
    className="group inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-body text-white backdrop-blur-sm transition-colors duration-300 hover:border-[color:var(--c)] hover:text-[color:var(--c)] cursor-default"
  >
    {name}
  </motion.div>
);

const TechStack = () => (
  <div id="skills" className="scroll-mt-24">
    <p className="text-[#2BC1EA] text-xs sm:text-sm font-body uppercase tracking-[0.25em] mb-2">
      What I build with
    </p>
    <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight mb-8">
      Tech <span className="text-[#2BC1EA]">Stack</span>
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-6">
      {techGroups.map(({ category, items }) => (
        <div key={category} className="flex flex-col gap-3">
          <span className="text-xs font-heading font-semibold uppercase tracking-[0.18em] text-white/40">
            {category}
          </span>
          <motion.div
            variants={gridStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            {items.map((t) => (
              <TechTile key={t.name} {...t} />
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  </div>
);

const Hero = () => {
  return (
    <section className='relative'>
      <div className='min-h-[calc(100vh-4rem)] flex flex-col justify-center gap-10 lg:gap-12 w-full max-w-[1200px] mx-auto px-4 py-10'>

        {/* Intro */}
        <div className='flex flex-col md:flex-row items-center gap-8 md:gap-10 text-center md:text-left'>
          <div className="relative w-[180px] sm:w-[220px] md:w-[240px] aspect-square shrink-0 rounded-full overflow-hidden">
            <Image
              src={profile}
              alt="Profile"
              fill
              priority
              sizes="240px"
              className="object-cover object-[center_30%]"
            />
          </div>

          <div>
            <StatusBadge color="green">Open to work</StatusBadge>

            <h1 className='mt-4 text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight tracking-tight'>Hi There, I'm Salim</h1>

            <div className="mt-3">
              <ReactTyped
                className="text-[#2BC1EA] text-2xl sm:text-3xl lg:text-4xl font-heading font-semibold"
                strings={["Full-Stack developer"]}
                typeSpeed={120}
              />
            </div>

            <p className="mt-4 text-gray-400 text-base sm:text-lg font-body max-w-xl mx-auto md:mx-0 leading-relaxed">
              From 'Hello World' to production-ready apps. Always learning, always building, always improving.
            </p>

            <div className="flex justify-center md:justify-start gap-8 mt-6">
              <a
                href="https://linkedin.com/in/salim-shaban-7523b5188"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white hover:text-[#2BC1EA] transition-colors duration-300"
              >
                <FaLinkedin size={28} className="text-[#0077B5]" />
                <span className="text-lg font-body">LinkedIn</span>
              </a>

              <a
                href="https://github.com/Salim104"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white hover:text-[#2BC1EA] transition-colors duration-300"
              >
                <FaGithub size={28} />
                <span className="text-lg font-body">GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Tech Stack — spread under the intro, same viewport */}
        <TechStack />

      </div>
    </section>
  )
}

export default Hero