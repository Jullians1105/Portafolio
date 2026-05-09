import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const projects = [
  {
    id: 1,
    name: 'AguaZero',
    year: '2024-1',
    description:
      'Aplicación móvil en Android Studio para consulta de cortes de agua por localidad en Bogotá. Implementación de filtros por localidad y diseño de interfaz orientada a la consulta rápida de información ciudadana.',
    techs: ['Android Studio', 'Java', 'Kotlin'],
    role: 'Desarrollador Mobile',
    github: 'https://github.com/Jullians1105/AguaZero.git',
    icon: '💧',
    featured: false,
    images: [
      '/assets/images/aguaZero/aguazero1.png',
      '/assets/images/aguaZero/aguazero2.png',
      '/assets/images/aguaZero/aguazero3.png',
    ],
  },
  {
    id: 3,
    name: 'ProgreSync',
    year: '2025-1',
    description:
      'Módulo de seguimiento de actividades para practicantes con validación de estados de entrega y control de fechas límite. Desarrollo de consultas para reportes de avance.',
    techs: ['SQL', 'Backend'],
    role: 'Desarrollador',
    github: 'https://github.com/Jullians1105/ProgreSync.git',
    icon: '📋',
    featured: false,
    images: [
      '/assets/images/progreSync/progresync1.png',
      '/assets/images/progreSync/progresync2.png',
      '/assets/images/progreSync/progresync3.png',
    ],
  },
  {
    id: 2,
    name: 'StreetSync',
    year: '2025-1',
    description:
      'Sistema de análisis de ventas y rendimiento. Definición e implementación de KPIs, diseño de Data Marts y elaboración de reportes analíticos a partir de datos operacionales.',
    techs: ['Data Analytics', 'SQL', 'Power BI'],
    role: 'Desarrollador - Líder',
    github: 'https://github.com/Jullians1105/Erp-StreetSync.git',
    icon: '📊',
    featured: false,
    images: [],
  },
  {
    id: 4,
    name: 'Oficina-GestionContable',
    year: 'Personal',
    description:
      'Implementación de IA y automatización para empresa de contadores. AdminTareas es un bot de Telegram que permite crear tareas en Notion mediante diálogo conversacional, con recordatorios automáticos y control de acceso. Corre en GitHub Actions gratuitamente en horario laboral.',
    techs: ['Python', 'Telegram Bot API', 'Notion API', 'GitHub Actions'],
    role: 'Desarrollador',
    github: 'https://github.com/Jullians1105/Oficina-GestionContable.git',
    icon: '🤖',
    featured: true,
    images: [],
  },
  {
    id: 5,
    name: 'AutomatizarNotionCanvas',
    year: 'Personal',
    description:
      'Automatización de tareas que se generan semanalmente en Canvas. Agrega tareas a Notion con fecha, materia y link, y envía notificaciones a bot de Telegram con descripción de lo agregado.',
    techs: ['Python', 'Canvas API', 'Notion API', 'Telegram Bot API'],
    role: 'Desarrollador',
    github: 'https://github.com/Jullians1105/AutomatizarNotionCanvas.git',
    icon: '⚡',
    featured: true,
    images: [],
  },
]

const containerVariants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

function Lightbox({ images, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex)

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setCurrent((c) => (c + 1) % images.length)
      if (e.key === 'ArrowLeft') setCurrent((c) => (c - 1 + images.length) % images.length)
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose, images.length])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-white/40 hover:text-white transition-colors p-2"
        aria-label="Cerrar"
      >
        <FaTimes size={18} />
      </button>

      {/* Prev */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); setCurrent((c) => (c - 1 + images.length) % images.length) }}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors p-3 hover:bg-white/5 rounded-xl"
          aria-label="Anterior"
        >
          <FaChevronLeft size={18} />
        </button>
      )}

      {/* Image */}
      <motion.div
        key={current}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        className="max-w-4xl max-h-[85vh] flex items-center justify-center"
      >
        <img
          src={images[current]}
          alt={`Captura ${current + 1}`}
          className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
        />
      </motion.div>

      {/* Next */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); setCurrent((c) => (c + 1) % images.length) }}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors p-3 hover:bg-white/5 rounded-xl"
          aria-label="Siguiente"
        >
          <FaChevronRight size={18} />
        </button>
      )}

      {/* Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-6 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setCurrent(i) }}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                i === current ? 'bg-gold w-4' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      )}
    </motion.div>
  )
}

function ProjectCard({ project }) {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const hasImages = project.images && project.images.length > 0

  return (
    <>
      <motion.article
        variants={cardVariants}
        whileHover={{ scale: 1.02, y: -4 }}
        className={`relative card flex flex-col gap-4 hover:shadow-xl hover:shadow-black/40 transition-all duration-300 ${
          project.featured ? 'border-gold/30' : ''
        }`}
      >
        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 right-4">
            <span className="text-xs bg-accent/60 border border-gold/30 text-gold px-2 py-1 rounded-full font-medium">
              Proyecto Personal
            </span>
          </div>
        )}

        {/* Icon + year */}
        <div className="flex items-start justify-between">
          <div className="text-4xl">{project.icon}</div>
          <span className="text-xs text-light/30 font-mono mt-1">{project.year}</span>
        </div>

        {/* Name and role */}
        <div>
          <h3 className="text-light font-bold text-xl mb-1">{project.name}</h3>
          <p className="text-gold/60 text-xs font-medium uppercase tracking-wide">{project.role}</p>
        </div>

        {/* Description */}
        <p className="text-light/60 text-sm leading-relaxed flex-1">{project.description}</p>

        {/* Image thumbnails */}
        {hasImages && (
          <div className="flex gap-2 pt-1">
            {project.images.map((src, i) => (
              <button
                key={i}
                onClick={() => setLightboxIndex(i)}
                className="relative flex-1 overflow-hidden rounded-lg border border-brown/20 hover:border-gold/40 transition-all duration-200 group"
                style={{ aspectRatio: project.id === 1 ? '9/16' : '16/9' }}
                aria-label={`Ver captura ${i + 1}`}
              >
                <img
                  src={src}
                  alt={`${project.name} captura ${i + 1}`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200" />
              </button>
            ))}
          </div>
        )}

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {project.techs.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 bg-dark border border-brown/40 text-gold/70 text-xs rounded-md font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* GitHub link */}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold/70 hover:text-gold text-sm font-medium transition-colors duration-200 mt-auto pt-2 border-t border-brown/20 w-fit"
          >
            <FaGithub size={15} />
            Ver en GitHub
            <FaExternalLinkAlt size={11} />
          </a>
        )}
      </motion.article>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={project.images}
            startIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default function Projects() {
  return (
    <section id="proyectos" className="py-24 bg-gradient-to-b from-dark via-accent/10 to-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">Portafolio</p>
          <h2 className="section-title">Mis Proyectos</h2>
          <p className="text-light/50 max-w-xl mx-auto mt-4">
            Una selección de proyectos académicos y personales que reflejan mis habilidades
            y aprendizajes.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-gold to-brown mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
