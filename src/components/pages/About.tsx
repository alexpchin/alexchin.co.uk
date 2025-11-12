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
  const text = `Hello, my name is Alex Chin. I'm ${age} years old and I'm a tech-guy who lives in Peckham. `
  
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
              {text}
              <span className="bg-dark px-4 inline-block">#original</span>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
