"use client";

import React from 'react'
import { motion } from 'framer-motion'

const Background = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 bg-[#05070F]">
            {/* Deep base gradient — midnight navy fading to near-black */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        'radial-gradient(130% 100% at 50% -10%, #0E1733 0%, #080B1A 45%, #05070F 100%)'
                }}
            />

            {/* Accent glow 1 — cyan */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], x: [0, 100, 0], y: [0, 50, 0] }}
                transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
                className="absolute top-[-12%] left-[-10%] w-[520px] h-[520px] rounded-full bg-[#2BC1EA] opacity-[0.10] blur-[130px]"
            />

            {/* Accent glow 2 — deep indigo */}
            <motion.div
                animate={{ scale: [1, 1.5, 1], x: [0, -100, 0], y: [0, 100, 0] }}
                transition={{ duration: 25, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
                className="absolute top-[40%] right-[-12%] w-[420px] h-[420px] rounded-full bg-[#1E3A8A] opacity-[0.14] blur-[130px]"
            />

            {/* Accent glow 3 — teal */}
            <motion.div
                animate={{ scale: [1, 1.3, 1], x: [0, 100, 0], y: [0, -50, 0] }}
                transition={{ duration: 30, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
                className="absolute bottom-[-12%] left-[18%] w-[620px] h-[620px] rounded-full bg-[#06b6d4] opacity-[0.08] blur-[150px]"
            />

            {/* Faint grid for subtle structure */}
            <div
                className="absolute inset-0 opacity-[0.025]"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
                    backgroundSize: '64px 64px'
                }}
            />

            {/* Edge vignette to focus the center */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        'radial-gradient(125% 125% at 50% 30%, transparent 45%, rgba(0,0,0,0.6) 100%)'
                }}
            />

            {/* Whisper of grain for texture */}
            <div
                className="absolute inset-0 opacity-[0.035] mix-blend-soft-light"
                style={{
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"
                }}
            />
        </div>
    )
}

export default Background
