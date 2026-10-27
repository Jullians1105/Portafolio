import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaDownload } from 'react-icons/fa'

const facts = [
  ['Universidad', 'Manuela Beltrán'],
  ['Carrera', 'Ingeniería de Software · 10° semestre'],
  ['Ubicación', 'Bogotá, Colombia'],
  ['Modalidad', 'Trabajo remoto / Presencial Mitsubishi Electric de Colombia'],
]

const traits = [
  'Aprendiz autónomo',
  'Orientado al detalle',
  'Resolución de problemas',
  'Mejora continua',
  'Trabajo en equipo',
  'Metodologías ágiles',
]

const fadeIn = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
}

export default function About() {
  const [photoFailed, setPhotoFailed] = useState(false)

  return (
    <section id="sobre-mi" className="py-28 border-t border-line">
      <div className="max-w-[90rem] mx-auto px-5 sm:px-10">
        <p className="eyebrow mb-10">01 — Sobre mí</p>

        {/* Declaración grande, estilo ESR */}
        <motion.p
          {...fadeIn}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.08] text-bone max-w-6xl"
        >
          Soy Jullians Amado, estudiante de Ingeniería de Software.{' '}
          <span className="text-mute">
            Aprendo rápido, cuido el detalle y entrego software que resuelve problemas reales.
          </span>
        </motion.p>

        <div className="grid lg:grid-cols-12 gap-12 mt-20">
          <motion.div
            {...fadeIn}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 hidden lg:block"
          >
            <div className="relative aspect-[4/5] overflow-hidden border border-line bg-surface">
              {photoFailed ? (
                <div className="w-full h-full flex items-center justify-center font-display text-8xl text-line">
                  JA
                </div>
              ) : (
                <img
                  src="/assets/images/Mauricio Amado.jpg"
                  alt="Jullians Mauricio Amado Gutierrez"
                  onError={() => setPhotoFailed(true)}
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-[filter] duration-700"
                />
              )}
            </div>
          </motion.div>

          <motion.div
            {...fadeIn}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 lg:col-start-6"
          >
            <dl>
              {facts.map(([label, value]) => (
                <div
                  key={label}
                  className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 py-5 border-t border-line"
                >
                  <dt className="eyebrow">{label}</dt>
                  <dd className="font-display text-2xl sm:text-3xl text-bone sm:text-right">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="flex flex-wrap gap-2 py-8 border-t border-line">
              {traits.map((trait) => (
                <span
                  key={trait}
                  className="px-3 py-1.5 border border-line text-[11px] font-mono uppercase tracking-wider text-mute hover:border-glow hover:text-bone transition-colors cursor-default"
                >
                  {trait}
                </span>
              ))}
            </div>

            <a href="/assets/cv/Hoja de vida - Jullians Amado.pdf" download className="btn-primary">
              <FaDownload size={11} />
              Descargar CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
