import { motion } from 'framer-motion'
import noiseBg from '@/assets/images/backgrounds/noise.gif'

export function Contact() {
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
                Go crazy &amp;
                <br />
                say hi!
              </h1>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <form action="https://formspree.io/alex@alexchin.co.uk" method="POST">
                <div className="mb-4">
                  <label className="block text-dark font-bold mb-2">
                    What is your name?
                  </label>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-dark"
                    type="text"
                    name="name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-dark font-bold mb-2">
                    What is your email?
                  </label>
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
                <div className="text-right">
                  <button
                    type="submit"
                    className="bg-dark text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors"
                  >
                    Submit
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
