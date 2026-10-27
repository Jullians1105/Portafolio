import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaDownload, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
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
    date: 'May 2026',
    name: 'Hacking Ético',
    issuer: 'Cisco Networking Academy',
    file: '/assets/certificates/cert-hacking-etico.pdf',
    type: 'pdf',
  },
  {
    date: 'Abr 2026',
    name: 'Ethical Hacker',
    issuer: 'Cisco Networking Academy',
    file: '/assets/certificates/cert-ethical-hacker.pdf',
    type: 'pdf',
  },
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
    date: 'Nov 2025',
    name: 'Introduction to CSS',
    issuer: 'Sololearn',
    file: '/assets/certificates/cert-css-sololearn.jpg',
    type: 'image',
  },
  {
    date: 'Feb 2025',
    name: 'Introduction to HTML',
    issuer: 'Sololearn',
    file: '/assets/certificates/cert-html-sololearn.png',
    type: 'image',
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
    issuer: 'SCRUMstudy',
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
    date: 'Mar 2023',
    name: 'Excel Avanzado',
    issuer: 'Academia',
    file: '/assets/certificates/cert-excel-avanzado.pdf',
    type: 'pdf',
  },
  {
    date: 'Feb 2023',
    name: 'Excel Intermedio',
    issuer: 'Academia',
    file: '/assets/certificates/cert-excel-intermedio.pdf',
    type: 'pdf',
  },
  {
    date: '2023',
    name: 'Oracle Cloud Data Management Foundations Associate',
    issuer: 'Oracle',
    file: '/assets/certificates/cert-oracle.png',
    type: 'image',
  },
  {
    date: '2023',
    name: 'Networking Academy Learn-A-Thon — Participante',
    issuer: 'Cisco Networking Academy',
    file: '/assets/certificates/cert-learnathon-cisco.png',
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
          className="relative bg-surface border border-brown/20  shadow-2xl w-full max-w-3xl max-h-[92vh] flex flex-col overflow-hidden"
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
          <div className="flex-1 overflow-y-auto flex flex-col items-center py-6 px-4 gap-4 min-h-0 bg-ink">
            {cert.type === 'image' ? (
              <img
                src={cert.file}
                alt={cert.name}
                className="max-w-full max-h-[70vh] object-contain  shadow-2xl"
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
                  className=" overflow-hidden shadow-2xl"
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

function Rating({ rating, max = 5 }) {
  return (
    <div className="flex gap-1" aria-label={`Nivel ${rating} de ${max}`}>
      {Array.from({ length: max }).map((_, i) => (
        <span key={i} className={`w-2 h-2 ${i < rating ? 'bg-volt' : 'bg-line'}`} />
      ))}
    </div>
  )
}

export default function Skills() {
  const [selectedCert, setSelectedCert] = useState(null)

  return (
    <section id="habilidades" className="py-28 border-t border-line">
      <div className="max-w-[90rem] mx-auto px-5 sm:px-10">
        <p className="eyebrow mb-6">03 — Habilidades</p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="section-title text-bone max-w-4xl mb-16"
        >
          Las herramientas con las que <span className="mark">construyo</span>.
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 border-t border-line">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="py-8 sm:pr-8 border-b border-line"
            >
              <h3 className="font-display text-3xl text-bone mb-6">{cat.title}</h3>
              <ul className="space-y-3">
                {cat.skills.map((skill) => (
                  <li key={skill.name} className="flex items-center justify-between gap-4">
                    <span className="text-bone/70 text-sm">{skill.name}</span>
                    <Rating rating={skill.rating} />
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Habilidades blandas */}
        <div className="py-14 border-b border-line">
          <p className="eyebrow mb-5">Habilidades blandas</p>
          <p className="font-display text-3xl sm:text-5xl leading-tight text-mute">
            {softSkills.map((skill, i) => (
              <span key={skill}>
                <span className="hover:text-bone transition-colors">{skill}</span>
                {i < softSkills.length - 1 && <span className="text-line"> / </span>}
              </span>
            ))}
          </p>
        </div>

        {/* Certificaciones */}
        <div id="certificaciones" className="pt-24">
          <p className="eyebrow mb-6">Formación</p>
          <h2 className="section-title text-bone mb-12">Certificaciones</h2>

          <ul className="border-t border-line">
            {certifications.map((cert) => (
              <li key={cert.file} className="border-b border-line">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="group w-full grid grid-cols-12 gap-x-4 gap-y-1 items-baseline py-5 text-left cursor-pointer hover:bg-surface transition-colors px-2 -mx-2"
                >
                  <span className="col-span-4 sm:col-span-2 font-mono text-[11px] uppercase tracking-wider text-mute">
                    {cert.date}
                  </span>
                  <span className="col-span-8 sm:col-span-6 font-display text-2xl leading-tight text-bone group-hover:text-glow transition-colors">
                    {cert.name}
                  </span>
                  <span className="col-span-8 col-start-5 sm:col-start-auto sm:col-span-3 text-xs text-mute">
                    {cert.issuer}
                  </span>
                  <span className="hidden sm:block col-span-1 text-right text-mute group-hover:text-bone transition-colors">
                    ↗
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {selectedCert && <CertModal cert={selectedCert} onClose={() => setSelectedCert(null)} />}
    </section>
  )
}
