"use client";

import React from 'react'
import Image from 'next/image'
import profile from '../assets/profile.png'
import { useState } from 'react';
import { motion } from "motion/react"



const Aboutme = () => {
 let text ="I am a problem solver, who contributes to open source projects, as well as answering questions in forums and helping people with code, create and maintain websites by writing code, troubleshooting and revising code.I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications."


  const [isExpanded, setIsExpanded] = useState(false);


  return (
    <section className='max-w-[1200px] mx-auto  mt-20 flex flex-col justify-center items-center'>
       <h1 className='text-4xl md:text-5xl font-heading font-bold tracking-tight'>ABOUT <span className='text-[#2BC1EA]'>ME</span></h1>
       <div className='w-full grid lg:grid-cols-2 mt-1 items-center '>
        <motion.div whileInView={{ opacity: 1, x: 0 }}
  initial={{ opacity: 0, x: -100 }}
  transition={{ duration: 1.5 }} className='p-6 flex flex-col justify-center'>
            <p className='text-2xl md:text-3xl font-medium mt-8 text-center md:text-left font-heading tracking-tight leading-tight'>
            I am Junior Web developer who loves exploring and 
            learning new technologies.
            </p>

            <p className='text-center md:text-left text-lg md:text-xl mt-8 leading-relaxed font-body text-gray-300'>
          {isExpanded ? text : text.slice(0, 200) + '...'}
          <button onClick={() => setIsExpanded(!isExpanded)} className='text-[#2BC1EA] font-semibold ml-2 hover:underline'>
            {isExpanded ? 'Show Less' : 'Show More'}
          </button>
            </p>

            <button className='bg-[#2BC1EA] text-white w-[180px] mx-auto md:mx-0 px-6 py-3 rounded-md font-bold text-base hover:bg-[#1fa9cf] transition mt-8 font-body'>Download CV</button>

        </motion.div>
        <motion.div whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }} className='flex justify-center items-center mb-8 md:mb-0'>
            <Image
              src={profile}
              alt="profile"
              sizes="(max-width: 768px) 350px, 300px"
              className="w-[350px] mx-auto md:w-[300px] h-auto transition-all duration-1000 ease-in-out animate-cycle"
              style={{ objectFit: 'cover' }}
            />
        </motion.div>
       </div>
       
    </section>
  )
}

export default Aboutme