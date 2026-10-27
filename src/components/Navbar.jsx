import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#inicio')

  useEffect(() => {
    const handleScroll = () => {
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const el = document.getElementById(navLinks[i].href.slice(1))
        if (el && el.getBoundingClientRect().top <= 160) {
          setActiveLink(navLinks[i].href)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setIsOpen(false)
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
    }
  }, [isOpen])

  const handleLinkClick = (href) => {
    setActiveLink(href)
    setIsOpen(false)
  }

  return (
    <>
      {/* Píldora flotante central */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-[60] w-[min(92vw,26rem)]">
        <div className="flex items-center justify-between bg-black border border-line px-4 h-12">
          <a
            href="#inicio"
            onClick={() => handleLinkClick('#inicio')}
            className="font-display text-2xl text-white leading-none"
            aria-label="Inicio"
          >
            JA
          </a>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/70">
            Jullians Amado
          </span>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-[5px] p-2 -mr-2"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
          >
            <span
              className={`block w-5 h-px bg-white transition-transform duration-300 ${
                isOpen ? 'translate-y-[3px] rotate-45' : ''
              }`}
            />
            <span
              className={`block w-5 h-px bg-white transition-transform duration-300 ${
                isOpen ? '-translate-y-[3px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </header>

      <a
        href="#contacto"
        className="hidden md:block fixed top-4 right-6 z-[60] h-12 leading-[3rem] px-5 bg-white text-ink font-mono text-[10px] uppercase tracking-[0.22em] hover:bg-volt hover:text-white transition-colors"
      >
        Contacto
      </a>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-ink flex flex-col justify-center px-5 sm:px-12"
            aria-label="Principal"
          >
            <ul className="max-w-3xl w-full mx-auto">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.06 }}
                  className="border-b border-line"
                >
                  <a
                    href={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className="group flex items-baseline gap-5 py-4 sm:py-5"
                  >
                    <span className="font-mono text-[11px] text-mute">0{i + 1}</span>
                    <span
                      className={`font-display text-5xl sm:text-7xl leading-none transition-colors ${
                        activeLink === link.href ? 'text-glow' : 'text-bone group-hover:text-glow'
                      }`}
                    >
                      {link.label}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
