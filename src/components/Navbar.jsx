import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

function Navbar({ data }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ]

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0f]/90 backdrop-blur-lg border-b border-white/10' : ''}`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-lg md:text-xl font-bold text-white">
          {data.name.split(' ')[0]}
          <span className="text-violet-400">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-gray-400 hover:text-violet-400 transition-colors text-sm font-medium">
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Resume Button */}
        <a href="https://drive.google.com/file/d/1MCJUqsGQoc_XsfmnwuV7sG5hS4gqAkve/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hidden md:block px-4 py-2 bg-violet-500/10 border border-violet-500/30 text-violet-300 rounded-lg text-sm font-medium hover:bg-violet-500/20 transition-colors">
          Resume
        </a>

        {/* Mobile Menu Button */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-gray-400 hover:text-violet-400 transition-colors">
          {mobileMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-lg border-b border-white/10"
          >
            <div className="px-4 py-4 space-y-3">
              {links.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="block text-gray-300 hover:text-violet-400 transition-colors text-base font-medium py-2 border-b border-white/5"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="https://drive.google.com/file/d/1MCJUqsGQoc_XsfmnwuV7sG5hS4gqAkve/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: links.length * 0.1 }}
                className="block w-full text-center px-4 py-3 bg-violet-500/20 border border-violet-500/30 text-violet-300 rounded-lg text-sm font-medium mt-4"
              >
                View Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar