import { motion } from 'framer-motion'
import { FaDownload, FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa'

const traits = [
  'Aprendiz Autónomo',
  'Orientado al Detalle',
  'Problema-Solver',
  'Mejora Continua',
  'Trabajo en Equipo',
  'Metodologías Ágiles',
]

export default function About() {
  return (
    <section id="sobre-mi" className="py-24 bg-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">Conóceme</p>
          <h2 className="section-title">Sobre Mí</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gold to-brown mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center md:items-start gap-6"
          >
            <div className="relative">
              <div className="w-52 h-52 rounded-full bg-gradient-to-br from-gold via-brown to-accent flex items-center justify-center text-5xl font-bold text-dark shadow-2xl shadow-accent/30 ring-4 ring-gold/20 ring-offset-4 ring-offset-dark">
                JA
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-2 rounded-full border border-gold/10" />
              <div className="absolute -inset-4 rounded-full border border-gold/5" />
            </div>

            {/* Quick info cards */}
            <div className="flex flex-col gap-3 w-full max-w-xs">
              <div className="flex items-center gap-3 bg-dark/60 border border-brown/20 rounded-lg px-4 py-3">
                <FaGraduationCap className="text-gold flex-shrink-0" size={18} />
                <div>
                  <p className="text-light text-sm font-medium">Universidad Manuela Beltrán</p>
                  <p className="text-gold/60 text-xs">Ingeniería de Software · 9° Semestre</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-dark/60 border border-brown/20 rounded-lg px-4 py-3">
                <FaMapMarkerAlt className="text-gold flex-shrink-0" size={18} />
                <div>
                  <p className="text-light text-sm font-medium">Bogotá, Colombia</p>
                  <p className="text-gold/60 text-xs">Disponible para trabajo remoto</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div className="space-y-4 text-light/70 leading-relaxed">
              <p>
                Soy <span className="text-light font-semibold">Jullians Mauricio Amado Gutierrez</span>,
                estudiante de Ingeniería de Software en noveno semestre con dominio práctico en
                desarrollo web y backend.
              </p>
              <p>
                Me especializo en <span className="text-gold">JavaScript</span>,{' '}
                <span className="text-gold">Python</span> y{' '}
                <span className="text-gold">React</span>, construyendo soluciones que
                combinan buenas prácticas de código con una experiencia de usuario cuidada.
              </p>
              <p>
                Soy un aprendiz autónomo con enfoque en soluciones eficientes, atención al
                detalle y metodologías ágiles. Disfruto automatizar procesos, trabajar en
                equipo y entregar software que realmente resuelve problemas reales.
              </p>
            </div>

            {/* Trait badges */}
            <div>
              <p className="text-gold/60 text-xs tracking-widest uppercase mb-3 font-medium">
                Características
              </p>
              <div className="flex flex-wrap gap-2">
                {traits.map((trait) => (
                  <motion.span
                    key={trait}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 bg-accent/30 border border-accent/50 text-gold/80 text-xs rounded-full font-medium hover:border-gold/50 hover:text-gold transition-all duration-200 cursor-default"
                  >
                    {trait}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Download CV */}
            <motion.a
              href="/assets/cv/Hoja_de_vida_-_Jullians_Amado.pdf"
              download
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 btn-primary w-fit"
            >
              <FaDownload size={14} />
              Descargar CV
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
