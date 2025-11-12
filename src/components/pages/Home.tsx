import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { projects, recommendations, red } from '@/data'
import smilingImg from '@/assets/images/backgrounds/smiling.png'
// @ts-expect-error - particleslider.js is not a typescript file
import ParticleSlider from '@/lib/particleslider.js'
import { ImageCarousel } from '@/components/base/ImageCarousel'

export function Home() {
  useEffect(() => {
    // Initialize particle slider
    new ParticleSlider({
      ptlGap: 1,
      mouseForce: 100,
      color: red,
      ptlSize: 2,
    })

    // Cleanup timeouts on unmount
    return () => {
      let id = window.setTimeout(() => {}, 0)
      while (id--) {
        window.clearTimeout(id)
      }
    }
  }, [])

  return (
    <div>
      {/* Hero Section with Particle Slider */}
      <section
        id="particle-slider"
        className="relative h-screen bg-primary overflow-hidden"
        style={{ color: '#FFFFFF', background: '#1500ff', textAlign: 'left' }}
      >
        <div className="slides" style={{ display: 'none' }}>
          <div className="slide" data-src={smilingImg} />
        </div>
        <canvas className="draw" style={{ position: 'absolute', top: 0, left: 0 }} />
      </section>

      {/* Slogan Section */}
      <section className="min-h-screen bg-dark flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <p className="text-white text-2xl mb-4">Hi,</p>
          <h2 className="text-white text-5xl md:text-7xl font-bold mb-6">I build things</h2>
          <h3 className="text-secondary text-3xl md:text-4xl">
            Me === Digital entrepreneur & teacher.
          </h3>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="min-h-[50vh] bg-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-dark">
            Recent Projects
          </h2>
          <p className="text-center text-dark mb-12 px-4">
            I work on projects from concept to creation and advise on technology startups.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="min-w-[320px]"
              >
                <div className="bg-white rounded-none overflow-hidden shadow-none border border-dark">
                  <div className="max-h-80 overflow-hidden bg-dark border-b border-dark">
                    {Array.isArray(project.image) ? (
                      <ImageCarousel images={project.image} alt={project.title} />
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-5 text-dark">{project.title}</h3>
                    <p className="text-sm text-dark mb-2">
                      <time>{project.role}</time>
                    </p>
                    <p className="text-dark">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommendations Section */}
      <section className="min-h-screen bg-light py-20 px-4">
        <div className="container mx-auto" style={{ maxWidth: '80vw' }}>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-dark">Recommendations</h2>
          <div className="space-y-6">
            {recommendations.map((rec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-lg p-6 shadow-md border border-gray-200"
              >
                <div className="flex items-start mb-4">
                  <img
                    src={rec.image}
                    alt={rec.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-dark">{rec.name}</h3>
                    <p className="text-sm text-gray-600">{rec.date}</p>
                  </div>
                </div>
                <p className="text-dark leading-relaxed">{rec.quote}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
