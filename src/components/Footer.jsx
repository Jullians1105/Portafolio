import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa'

const socialLinks = [
  {
    icon: FaGithub,
    href: 'https://github.com/Jullians1105',
    label: 'GitHub',
  },
  {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/julliansamado',
    label: 'LinkedIn',
  },
]

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre Mí', href: '#sobre-mi' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-brown/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg shadow-2xl shadow-accent/30 ring-4 ring-gold/20 ring-offset-4 ring-offset-dark overflow-hidden">
                <img
                  src="/assets/images/yo.jpeg"
                  alt="Jullians Mauricio Amado Gutierrez"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <span className="text-light font-semibold">
                Jullians<span className="text-gold">.</span>
              </span>
            </div>
            <p className="text-light/40 text-sm leading-relaxed">
              Estudiante de Ingeniería de Software apasionado por el desarrollo web y la automatización.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-gold/60 text-xs font-medium uppercase tracking-widest mb-4">
              Navegación
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-light/50 hover:text-gold text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-gold/60 text-xs font-medium uppercase tracking-widest mb-4">
              Redes
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 rounded-lg bg-brown/10 border border-brown/20 flex items-center justify-center text-light/50 hover:text-gold hover:border-gold/30 hover:bg-gold/5 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon size={17} />
                  </motion.a>
                )
              })}
            </div>
            <p className="text-light/30 text-xs mt-4">
              julliansamado@gmail.com
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-brown/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-light/30 text-xs">
            &copy; 2025 Jullians Mauricio Amado Gutierrez. Todos los derechos reservados.
          </p>
          <p className="text-light/30 text-xs flex items-center gap-1.5">
            Hecho con{' '}
            <FaHeart size={10} className="text-accent" />{' '}
            en Bogotá, Colombia
          </p>
        </div>
      </div>
    </footer>
  )
}
