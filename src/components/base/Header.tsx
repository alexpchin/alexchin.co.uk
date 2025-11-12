import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Github, Instagram, Menu, X } from 'lucide-react'
import type { Route, Social } from '@/types'

interface HeaderProps {
  routes: Route[]
  socials: Social[]
}

const iconMap = {
  'github-square': Github,
  instagram: Instagram,
}

export function Header({ routes, socials }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={`transition-all duration-300 ${
          isOpen
            ? 'bg-dark h-screen w-screen fixed'
            : 'bg-transparent backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <div className="flex-shrink-0">
              <Link
                to="/"
                className="text-white text-xl font-bold hover:text-secondary transition-colors"
                onClick={closeMenu}
              >
                AC
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex space-x-6">
                {routes.map((route) => (
                  <Link
                    key={route.path}
                    to={route.path}
                    className={`text-white hover:text-secondary transition-colors ${
                      location.pathname === route.path ? 'text-secondary' : ''
                    }`}
                  >
                    {route.title}
                  </Link>
                ))}
              </div>
              <div className="flex space-x-4">
                {socials.map((social, index) => {
                  const Icon = iconMap[social.icon as keyof typeof iconMap]
                  return (
                    <a
                      key={index}
                      href={social.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-secondary transition-colors"
                    >
                      <Icon size={20} />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-white hover:text-secondary transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden flex flex-col items-center justify-center h-[calc(100vh-4rem)] space-y-8">
              <div className="flex flex-col items-center space-y-6 text-2xl">
                {routes.map((route) => (
                  <Link
                    key={route.path}
                    to={route.path}
                    className={`text-white hover:text-secondary transition-colors ${
                      location.pathname === route.path ? 'text-secondary' : ''
                    }`}
                    onClick={closeMenu}
                  >
                    {route.title}
                  </Link>
                ))}
              </div>
              <div className="flex space-x-6 mt-8">
                {socials.map((social, index) => {
                  const Icon = iconMap[social.icon as keyof typeof iconMap]
                  return (
                    <a
                      key={index}
                      href={social.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-secondary transition-colors"
                    >
                      <Icon size={28} />
                    </a>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
