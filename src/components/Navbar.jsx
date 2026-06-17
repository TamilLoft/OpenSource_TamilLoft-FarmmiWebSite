import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: 'https://tamilloft.in/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          <a
            href="#"
            className="text-2xl font-bold font-heading bg-gradient-to-r from-dark-green to-accent-green bg-clip-text text-transparent"
          >
            Farmmi
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative px-3 py-2 font-semibold text-gray-800 hover:text-dark-green transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-green transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#"
              className="ml-4 bg-gradient-to-br from-dark-green to-deep-green text-white px-6 py-2.5 rounded-full font-semibold shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 text-sm"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-dark-green transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pt-4 pb-3 border-t border-gray-100 mt-3">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2.5 font-semibold text-gray-800 hover:text-dark-green hover:bg-light-green rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#"
                className="mt-2 bg-gradient-to-br from-dark-green to-deep-green text-white px-6 py-2.5 rounded-full font-semibold text-center text-sm"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
