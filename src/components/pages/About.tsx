import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { orange } from '@/data'

export function About() {
  // Calculate age dynamically
  const calculateAge = () => {
    const birthDate = new Date(1987, 11, 27) // Month is 0-indexed, so 11 = December
    const today = new Date()
    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDiff = today.getMonth() - birthDate.getMonth()

    // Adjust if birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }

    return age
  }

  const age = calculateAge()
  const fullText = `Hello, my name is Alex Chin. I'm ${age} years old and I'm a tech-guy who lives in Peckham. `

  const [displayedText, setDisplayedText] = useState('')
  const [showHashtag, setShowHashtag] = useState(false)

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
        setTimeout(() => setShowHashtag(true), 200)
      }
    }, 50) // 50ms per character

    return () => clearInterval(typingInterval)
  }, [fullText])

  return (
    <div>
      {/* Hero Section with Typing Effect */}
      <section
        className="min-h-screen flex items-center justify-center px-4 md:px-12"
        style={{ background: orange, fontSize: '2rem' }}
      >
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-white leading-relaxed">
              {displayedText}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: showHashtag ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="bg-dark px-4 inline-block"
              >
                #original
              </motion.span>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
