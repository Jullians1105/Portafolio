import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaStar, FaRegStar, FaTimes, FaDownload, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString()

const skillCategories = [
  {
    title: 'Desarrollo',
    icon: '💻',
    skills: [
      { name: 'Python', rating: 4 },
      { name: 'JavaScript', rating: 4 },
      { name: 'HTML y CSS', rating: 5 },
      { name: 'SQL', rating: 4 },
      { name: 'React', rating: 3 },
      { name: 'REST APIs', rating: 4 },
    ],
  },
  {
    title: 'Herramientas de Desarrollo',
    icon: '🛠️',
    skills: [
      { name: 'Git / GitHub', rating: 4 },
      { name: 'VSCode', rating: 5 },
      { name: 'Figma', rating: 3 },
    ],
  },
  {
    title: 'Gestión y Productividad',
    icon: '📈',
    skills: [
      { name: 'Notion', rating: 5 },
      { name: 'Power BI', rating: 3 },
      { name: 'Trello', rating: 4 },
    ],
  },
  {
    title: 'Complementarios',
    icon: '🔧',
    skills: [
      { name: 'Manejo de roles y autenticación', rating: 3 },
      { name: 'Metodologías ágiles Scrum', rating: 4 },
    ],
  },
]

const softSkills = [
  'Responsabilidad',
  'Adaptabilidad',
  'Liderazgo',
  'Puntualidad',
  'Trabajo en equipo',
  'Comunicación asertiva',
  'Capacidad de análisis',
  'Manejo del estrés',
  'Mejora continua',
]

const certifications = [
  {
    date: 'Mar 2026',
    name: 'Enterprise Full Stack with Spring Boot 4 and Angular 21',
    issuer: 'Dev Senior Code',
    file: '/assets/certificates/cert-fullstack.pdf',
    type: 'pdf',
  },
  {
    date: 'Mar 2026',
    name: 'Gestión de Amenazas Cibernéticas',
    issuer: 'Cisco Networking Academy',
    file: '/assets/certificates/cert-amenazas.pdf',
    type: 'pdf',
  },
  {
    date: 'Oct 2024',
    name: 'Google Cloud Computing Foundations',
    issuer: 'Google Cloud',
    file: '/assets/certificates/cert-google-cloud.png',
    type: 'image',
  },
  {
    date: 'Sep 2024',
    name: 'Scrum Fundamentals Certified',
    issuer: 'SCRUM study',
    file: '/assets/certificates/cert-scrum.pdf',
    type: 'pdf',
  },
  {
    date: 'Ago 2024',
    name: 'NDG Linux Unhatched',
    issuer: 'Cisco Networking Academy',
    file: '/assets/certificates/cert-linux.pdf',
    type: 'pdf',
  },
  {
    date: 'May 2023',
    name: 'Python Essentials 1',
    issuer: 'Cisco Networking Academy',
    file: '/assets/certificates/cert-python.pdf',
    type: 'pdf',
  },
  {
    date: '2023',
    name: 'Oracle Cloud Data Management Foundations Associate',
    issuer: 'Oracle',
    file: '/assets/certificates/cert-oracle.png',
    type: 'image',
  },
]

function CertModal({ cert, onClose }) {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [pageWidth, setPageWidth] = useState(700)

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setPageNumber((p) => Math.min(p + 1, numPages || 1))
      if (e.key === 'ArrowLeft') setPageNumber((p) => Math.max(p - 1, 1))
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'

    const updateWidth = () => {
      setPageWidth(Math.min(window.innerWidth - 80, 700))
    }
    updateWidth()
    window.addEventListener('resize', updateWidth)

    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
      window.removeEventListener('resize', updateWidth)
    }
  }, [onClose, numPages])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.93, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.93, y: 24 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="relative bg-[#111010] border border-brown/20 rounded-2xl shadow-2xl w-full max-w-3xl max-h-[92vh] flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 px-6 py-4 border-b border-brown/20 flex-shrink-0">
            <div className="min-w-0">
              <p className="text-gold/70 text-xs font-mono mb-1">{cert.date} · {cert.issuer}</p>
              <h3 className="text-light font-semibold text-sm leading-snug truncate">{cert.name}</h3>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <a
                href={cert.file}
                download
                className="inline-flex items-center gap-1.5 text-xs text-gold/60 hover:text-gold border border-brown/30 hover:border-gold/40 px-3 py-1.5 rounded-lg transition-all duration-200"
              >
                <FaDownload size={10} />
                Descargar
              </a>
              <button
                onClick={onClose}
                className="text-light/30 hover:text-light transition-colors duration-200 p-1.5 rounded-lg hover:bg-white/5"
                aria-label="Cerrar"
              >
                <FaTimes size={16} />
              </button>
            </div>
          </div>

          {/* Certificate content */}
          <div className="flex-1 overflow-y-auto flex flex-col items-center py-6 px-4 gap-4 min-h-0 bg-[#0d0c0c]">
            {cert.type === 'image' ? (
              <img
                src={cert.file}
                alt={cert.name}
                className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-2xl"
              />
            ) : (
              <Document
                file={cert.file}
                onLoadSuccess={({ numPages }) => { setNumPages(numPages); setPageNumber(1) }}
                loading={
                  <div className="flex items-center justify-center h-64 text-gold/40 text-sm">
                    Cargando certificado...
                  </div>
                }
                error={
                  <div className="flex items-center justify-center h-64 text-gold/40 text-sm">
                    No se pudo cargar el certificado.
                  </div>
                }
              >
                <Page
                  pageNumber={pageNumber}
                  width={pageWidth}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  className="rounded-xl overflow-hidden shadow-2xl"
                />
              </Document>
            )}

            {/* Pagination — only for multi-page PDFs */}
            {cert.type === 'pdf' && numPages > 1 && (
              <div className="flex items-center gap-4 text-sm text-light/50">
                <button
                  onClick={() => setPageNumber((p) => Math.max(p - 1, 1))}
                  disabled={pageNumber <= 1}
                  className="p-2 rounded-lg hover:bg-white/5 disabled:opacity-30 transition-all"
                >
                  <FaChevronLeft size={12} />
                </button>
                <span className="font-mono text-xs">
                  {pageNumber} / {numPages}
                </span>
                <button
                  onClick={() => setPageNumber((p) => Math.min(p + 1, numPages))}
                  disabled={pageNumber >= numPages}
                  className="p-2 rounded-lg hover:bg-white/5 disabled:opacity-30 transition-all"
                >
                  <FaChevronRight size={12} />
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

function StarRating({ rating, max = 5 }) {
  return (
    <div className="flex gap-0.5" aria-label={`Nivel ${rating} de ${max}`}>
      {Array.from({ length: max }).map((_, i) => (
        <span key={i} className={i < rating ? 'text-gold' : 'text-brown/30'}>
          {i < rating ? <FaStar size={11} /> : <FaRegStar size={11} />}
        </span>
      ))}
    </div>
  )
}

function SkillCard({ category, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card"
    >
      <div className="flex items-center gap-3 mb-5">
        <span className="text-2xl">{category.icon}</span>
        <h3 className="text-light font-semibold">{category.title}</h3>
      </div>
      <ul className="space-y-3">
        {category.skills.map((skill) => (
          <li key={skill.name} className="flex items-center justify-between">
            <span className="text-light/70 text-sm">{skill.name}</span>
            <StarRating rating={skill.rating} />
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function Skills() {
  const [selectedCert, setSelectedCert] = useState(null)

  return (
    <section id="habilidades" className="py-24 bg-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">Capacidades</p>
          <h2 className="section-title">Habilidades</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gold to-brown mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-14">
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.title} category={cat} index={i} />
          ))}
        </div>

        {/* Soft skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-center text-light/60 text-xs tracking-widest uppercase font-medium mb-5">
            Habilidades Blandas
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.08 }}
                className="px-4 py-2 bg-accent/20 border border-brown/30 text-gold/80 text-sm rounded-full font-medium hover:border-gold/50 hover:text-gold transition-all duration-200 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          id="certificaciones"
        >
          <div className="text-center mb-10">
            <p className="section-subtitle">Formación</p>
            <h2 className="section-title">Certificaciones</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-gold to-brown mx-auto mt-4 rounded-full" />
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-brown/20 to-transparent -translate-x-1/2" />

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`relative pl-12 md:pl-0 md:w-1/2 ${
                    index % 2 === 0
                      ? 'md:pr-12 md:text-right md:ml-0'
                      : 'md:ml-auto md:pl-12'
                  }`}
                >
                  {/* Dot */}
                  <div
                    className={`absolute top-4 w-3 h-3 rounded-full bg-gold border-2 border-dark shadow-sm shadow-gold/50 ${
                      index % 2 === 0
                        ? 'left-2.5 md:left-auto md:-right-1.5 md:translate-x-1/2'
                        : 'left-2.5 md:-left-1.5 md:-translate-x-1/2'
                    }`}
                  />

                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="card hover:border-gold/40 w-full text-left cursor-pointer group transition-all duration-200 hover:shadow-lg hover:shadow-gold/10"
                  >
                    <span className="inline-block text-gold text-xs font-mono mb-2 bg-accent/20 px-2 py-0.5 rounded">
                      {cert.date}
                    </span>
                    <h4 className="text-light font-semibold text-sm leading-snug mb-1 group-hover:text-gold transition-colors duration-200">
                      {cert.name}
                    </h4>
                    <div className="flex items-center justify-between">
                      <p className="text-gold/60 text-xs">{cert.issuer}</p>
                      <span className="text-gold/30 text-xs group-hover:text-gold/60 transition-colors duration-200">
                        Ver certificado →
                      </span>
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {selectedCert && (
        <CertModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
      )}
    </section>
  )
}
