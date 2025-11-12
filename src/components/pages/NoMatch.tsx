import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export function NoMatch() {
  return (
    <div className="min-h-screen bg-dark flex items-center justify-center px-4 pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-white"
      >
        <h1 className="text-9xl font-bold mb-4 text-secondary">404</h1>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Page Not Found</h2>
        <p className="text-xl mb-8 text-gray-400">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-block bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-lg transition-colors"
        >
          Go Home
        </Link>
      </motion.div>
    </div>
  )
}
