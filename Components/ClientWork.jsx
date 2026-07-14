"use client";

import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"
import StatusBadge from "./StatusBadge"

// Fill this array with your real client projects.
// image: put files in /public/images/ and reference as "/images/your-file.png",
//        or import from ../assets/ like the other components.
const clientProjects = [
  {
    id: 1,
    name: "The Hub Inc",
    description: "A South African Apple reseller storefront — customers browse iPhone, Watch, iPad, Mac and accessories, with free delivery, warranty and returns handled end to end.",
    image: "/images/thehub.png",
    liveLink: "https://www.thehubinc.co.za/",
    tags: ["Next.js", "Tailwind", "Clerk Auth", "Resend", "Neon PostgreSQL", "Stripe"],
  },
  {
    id: 2,
    name: "Williams Bikes & Spares",
    description: "An online storefront for a South African bicycle and spare-parts retailer — letting customers browse stock, view products, and get in touch to order.",
    image: "/images/williamsbikesandspares.png",
    liveLink: "https://www.williamsbikesandspares.co.za/",
    tags: ["React", "Tailwind", "Clerk Auth", "Resend", "Convex"],
  },
  {
    id: 3,
    name: "The Kicks Lab",
    description: "A sneaker store web app where users can browse the latest kicks and drops, built with a fast, modern React stack.",
    image: "/images/thekickslab.png",
    liveLink: "https://thekickslab-cov.vercel.app/",
    tags: ["Next.js", "Tailwind", "Clerk Auth", "Resend", "Neon PostgreSQL", "Stripe"],
  },
]

const ClientWork = () => {
  return (
    <section id="client-work" className='max-w-[1200px] mx-auto mt-20 px-8'>
      <div className='flex flex-wrap items-center gap-4 mb-6'>
        <p className='text-[#2BC1EA] text-sm font-body font-semibold uppercase tracking-[0.2em]'>
          Client Work
        </p>
        <StatusBadge color="green">Real client projects</StatusBadge>
      </div>

      <h1 className='text-white text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight leading-[1.15] max-w-[24ch] mb-16'>
        Sites that are live and getting real clients.
      </h1>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
        {clientProjects.map((project) => (
          <motion.div
            key={project.id}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 60 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className='bg-[#002E52] rounded-lg shadow-lg overflow-hidden w-full transform transition-[transform,box-shadow] duration-300 hover:scale-105 hover:shadow-2xl'
          >
            {/* Project Image */}
            <div className='relative h-48 bg-gray-200 overflow-hidden'>
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 380px"
                className='object-cover'
              />
            </div>

            {/* Project Content */}
            <div className='p-6'>
              <h3 className='text-2xl md:text-3xl font-heading font-bold text-white mb-3 tracking-tight'>
                {project.name}
              </h3>
              <p className='text-gray-300 text-base mb-5 leading-relaxed font-body'>
                {project.description}
              </p>

              {/* Tags */}
              {project.tags?.length > 0 && (
                <div className='flex flex-wrap gap-2 mb-6'>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className='bg-[#0a3d63] text-gray-200 px-3 py-1 rounded-full text-xs font-body border border-[#2BC1EA]/30'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Action Button */}
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className='inline-block bg-[#2BC1EA] text-white px-6 py-2 rounded-md font-bold text-base hover:bg-[#25a8cc] transition-all duration-200 font-body'
              >
                View
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default ClientWork
