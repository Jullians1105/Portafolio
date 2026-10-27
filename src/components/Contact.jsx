import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const EMAIL = 'julliansamado@gmail.com'

const messages = { email: 'Correo copiado', Teléfono: 'Teléfono copiado' }

const contactMethods = [
  { label: 'Teléfono', value: '316 711 7358', copy: true },
  { label: 'GitHub', value: 'github.com/Jullians1105', href: 'https://github.com/Jullians1105', external: true },
  { label: 'LinkedIn', value: 'in/julliansamado', href: 'https://www.linkedin.com/in/julliansamado', external: true },
]

// Copia al portapapeles y avisa durante 2 s qué se copió.
function useCopy() {
  const [copied, setCopied] = useState(null)
  const timer = useRef(null)

  useEffect(() => () => clearTimeout(timer.current), [])

  const copy = async (key, text) => {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      // Respaldo para navegadores sin la API del portapapeles
      const area = document.createElement('textarea')
      area.value = text
      area.style.position = 'fixed'
      area.style.opacity = '0'
      document.body.appendChild(area)
      area.select()
      document.execCommand('copy')
      document.body.removeChild(area)
    }
    setCopied(key)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setCopied(null), 2000)
  }

  return [copied, copy]
}

export default function Contact() {
  const [copied, copy] = useCopy()

  return (
    <section id="contacto" className="bg-volt text-white py-28">
      <div className="max-w-[90rem] mx-auto px-5 sm:px-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/70 mb-10">
          04 — Contacto
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="font-display text-[clamp(4rem,14vw,13rem)] leading-[0.85]"
        >
          Hablemos.
        </motion.h2>

        <p className="mt-8 max-w-xl text-white/80 leading-relaxed">
          Estoy disponible para oportunidades, proyectos o simplemente para conversar sobre
          desarrollo de software.
        </p>

        <button
          onClick={() => copy('email', EMAIL)}
          className="mt-12 block text-left font-display text-[clamp(1.35rem,6.6vw,3.75rem)] underline underline-offset-[0.18em] decoration-white/40 hover:decoration-white transition-colors cursor-pointer"
          aria-label="Copiar correo"
        >
          {EMAIL}
        </button>
        <ul className="mt-20 border-t border-white/30">
          {contactMethods.map((method) => {
            const rowClass =
              'group w-full flex items-baseline justify-between gap-4 py-5 text-left hover:bg-white hover:text-volt transition-colors px-2 -mx-2 cursor-pointer'
            const content = (
              <>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em]">
                  {method.label}
                </span>
                <span className="font-display text-2xl sm:text-3xl">
                  {method.value}{' '}
                  <span className="opacity-60">↗</span>
                </span>
              </>
            )

            return (
              <li key={method.label} className="border-b border-white/30">
                {method.copy ? (
                  <button
                    onClick={() => copy(method.label, method.value)}
                    className={rowClass}
                    aria-label={`Copiar ${method.label.toLowerCase()}`}
                  >
                    {content}
                  </button>
                ) : (
                  <a href={method.href} target="_blank" rel="noopener noreferrer" className={rowClass}>
                    {content}
                  </a>
                )}
              </li>
            )
          })}
        </ul>
      </div>

      <AnimatePresence>
        {copied && (
          <motion.div
            key={copied}
            role="status"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[80] flex items-center gap-2 bg-white text-black px-5 py-3 text-sm font-medium shadow-2xl"
          >
            <span aria-hidden="true">✓</span>
            {messages[copied]}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
