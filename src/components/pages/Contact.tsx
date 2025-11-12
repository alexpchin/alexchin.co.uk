import { useState } from 'react'
import { motion } from 'framer-motion'
import noiseBg from '@/assets/images/backgrounds/noise.gif'

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      // Using Web3Forms - free form backend
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setStatus('success')
        setMessage("Thanks for reaching out! I'll get back to you soon.")
        form.reset()
      } else {
        setStatus('error')
        setMessage('Oops! Something went wrong. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Oops! Something went wrong. Please try again.')
    }
  }

  return (
    <div>
      {/* Hero Section with Form */}
      <section
        className="min-h-screen flex items-center justify-center px-4 md:px-12 py-12"
        style={{
          background: `url(${noiseBg}) no-repeat`,
          backgroundSize: 'cover',
          backgroundPosition: '50%',
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Reach out &amp;
                <br />
                say hello!
              </h1>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <form onSubmit={handleSubmit}>
                {/* Web3Forms Access Key - Replace with your own from https://web3forms.com */}
                <input
                  type="hidden"
                  name="access_key"
                  value="2f94561a-3b92-4481-a379-3ce8c708ac9c"
                />
                <input
                  type="hidden"
                  name="subject"
                  value="New Contact Form Submission from alexchin.co.uk"
                />
                <input type="hidden" name="from_name" value="Alex Chin Website" />

                <div className="mb-4">
                  <label className="block text-dark font-bold mb-2">What is your name?</label>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-dark"
                    type="text"
                    name="name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-dark font-bold mb-2">What is your email?</label>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-dark"
                    type="email"
                    name="email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-dark font-bold mb-2">Your message</label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-dark"
                    placeholder="e.g. Hello world"
                    name="message"
                    rows={4}
                    required
                  />
                </div>

                {status !== 'idle' && (
                  <div
                    className={`mb-4 p-3 rounded ${
                      status === 'success'
                        ? 'bg-green-100 text-green-800'
                        : status === 'error'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {status === 'loading' ? 'Sending...' : message}
                  </div>
                )}

                <div className="text-right">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="bg-dark text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? 'Sending...' : 'Submit'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
