import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { skills, students } from '@/data'
import teachingBg from '@/assets/images/backgrounds/teaching.gif'

export function Teaching() {
  const [visibleCount, setVisibleCount] = useState(10)
  const showMore = () => setVisibleCount((prev) => prev + 10)
  const visibleStudents = students.slice(0, visibleCount)

  return (
    <div>
      {/* Hero Section with Background */}
      <section
        className="min-h-screen flex items-center justify-center px-4 md:px-12"
        style={{
          background: `url(${teachingBg}) #111111 no-repeat`,
          backgroundSize: 'cover',
          backgroundPosition: '50%',
        }}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Over 300 students have taught me how to code better.
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white"
            >
              <p className="mb-4">
                I began teaching people to code at{' '}
                <a
                  href="https://generalassemb.ly/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  General Assembly
                </a>{' '}
                London in 2014 as a teaching assistant. After learning the ropes, I began teaching
                my own classes as a Lead Instructor shortly after, eventually became Head of
                Curriculum in in 2016.
              </p>
              <p>
                I <Heart className="text-danger fill-current inline-block align-middle" size={20} />{' '}
                helping people to learn new skills and am always amazed at how discovering a new
                skill always seems to bring the most out of people.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="min-h-screen bg-white flex items-center justify-center py-20 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">Skills</h2>
          <p className="text-dark mb-8">My technology toolbox.</p>
          <div className="flex flex-wrap justify-center gap-2">
            {skills.map((skill, index) => (
              <motion.i
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                className={`${skill} text-5xl md:text-7xl p-1`}
                title={skill}
              />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Student Recommendations Section */}
      <section className="min-h-screen bg-primary py-20 px-4">
        <div className="container mx-auto" style={{ maxWidth: '80vw' }}>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">What students say</h2>
          <div className="space-y-6">
            {visibleStudents.map((student, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: Math.min(index, 5) * 0.05 }}
                className="bg-white rounded-lg p-6 shadow-md border border-gray-200"
              >
                <div className="flex items-start mb-4">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 flex-shrink-0"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-dark">{student.name}</h3>
                    <p className="text-sm text-gray-600">{student.date}</p>
                  </div>
                </div>
                <p className="text-dark leading-relaxed">{student.quote}</p>
              </motion.div>
            ))}
          </div>

          {visibleCount < students.length && (
            <div className="text-center mt-12">
              <button
                onClick={showMore}
                className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Load More ({students.length - visibleCount} remaining)
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
