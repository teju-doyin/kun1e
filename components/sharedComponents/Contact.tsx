'use client'
import React, { useState } from "react"

type Status = 'idle' | 'loading' | 'success' | 'error'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (!res.ok) throw new Error()
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch {
      console.log(status)
      setStatus('error')
    }
  }

  return (
    <div className="bg-off-white py-12">
      <div className="w-[95%] mx-auto mb-12">
        <p className="text-2xl mb-4 tracking-wider">Tell me about your idea</p>
        <form onSubmit={handleSubmit}>
          <div className="input-div flex-col mb-4">
            <label className="text-[13px]" htmlFor="name">Name*</label>
            <input
              type="text"
              id="name"
              className="pl-1"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-div flex-col mb-4">
            <label className="text-[13px]" htmlFor="email">Email address*</label>
            <input
              type="email"
              id="email"
              className="pl-1"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-div flex-col mb-8">
            <label className="text-[13px]" htmlFor="message">Project description</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full tracking-widest bg-black text-white py-2 rounded-xs cursor-pointer disabled:opacity-50"
          >
            {status === 'loading' ? 'Sending...' : 'Send'}
          </button>

          {status === 'success' && (
            <p className="text-sm text-green-600 mt-3 text-center">Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="text-sm text-red-500 mt-3 text-center">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </div>
  )
}

export default Contact