"use client";

import React, { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import Button from './Button'
import { whatsappHref, CONTACT_EMAIL } from './config'

const inputClasses =
  'w-full rounded-md bg-[#05070F]/60 border border-white/10 px-4 py-3 text-white font-body placeholder:text-gray-500 focus:outline-none focus:border-[#2BC1EA] transition-colors duration-200'

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', practice: '', phone: '', message: '' })

  const update = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  // No backend on this site — the form composes an email instead of dropping the lead.
  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = `AI receptionist pilot — ${form.practice || form.name}`
    const body = [
      `Name: ${form.name}`,
      `Practice: ${form.practice}`,
      `Phone: ${form.phone}`,
      '',
      form.message,
    ].join('\n')

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-4 text-left">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cta-name" className="sr-only">
            Your name
          </label>
          <input
            id="cta-name"
            type="text"
            required
            placeholder="Your name"
            value={form.name}
            onChange={update('name')}
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="cta-practice" className="sr-only">
            Practice name
          </label>
          <input
            id="cta-practice"
            type="text"
            placeholder="Practice name"
            value={form.practice}
            onChange={update('practice')}
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="cta-phone" className="sr-only">
          Phone number
        </label>
        <input
          id="cta-phone"
          type="tel"
          required
          placeholder="Phone number"
          value={form.phone}
          onChange={update('phone')}
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="cta-message" className="sr-only">
          Message
        </label>
        <textarea
          id="cta-message"
          rows={3}
          placeholder="Anything you want me to know (optional)"
          value={form.message}
          onChange={update('message')}
          className={`${inputClasses} resize-none`}
        />
      </div>

      <Button type="submit" variant="outline" className="w-full">
        Send an email instead
      </Button>
    </form>
  )
}

const DentalFinalCta = () => {
  return (
    <section id="contact" className="max-w-[1200px] mx-auto px-6 sm:px-8 py-16 sm:py-24 scroll-mt-16">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight leading-tight">
          Ready to stop <span className="text-[#2BC1EA]">missing calls</span>?
        </h2>

        <p className="mt-5 text-gray-300 text-base sm:text-lg font-body leading-relaxed">
          Message me on WhatsApp and I will set up your free 2-week pilot. It takes about fifteen
          minutes of your time.
        </p>

        <div className="mt-9 flex justify-center">
          <Button href={whatsappHref} variant="whatsapp" className="w-full sm:w-auto">
            <FaWhatsapp size={22} />
            Chat on WhatsApp
          </Button>
        </div>

        <div className="mt-12 pt-10 border-t border-white/10">
          <p className="text-sm text-gray-400 font-body">
            Not a WhatsApp person? Leave your details and I will call you back.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default DentalFinalCta
