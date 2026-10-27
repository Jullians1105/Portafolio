import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

// `color` y `pattern` generan el arte impreso del disco; `kind` es la etiqueta lateral.
const projects = [
  {
    id: 1,
    name: 'AguaZero',
    kind: 'App móvil',
    year: '2024-1',
    description:
      'Aplicación móvil en Android Studio para consulta de cortes de agua por localidad en Bogotá. Implementación de filtros por localidad y diseño de interfaz orientada a la consulta rápida de información ciudadana.',
    techs: ['Android Studio', 'Java', 'Kotlin'],
    role: 'Desarrollador Mobile',
    github: 'https://github.com/Jullians1105/AguaZero.git',
    color: '#2B2BFF',
    pattern: 'rings',
    cover: '/assets/images/aguaZero/aguazero3.png',
    coverStyle: { backgroundSize: '100% auto', backgroundPosition: '50% 30%' },
    portrait: true,
    images: [
      '/assets/images/aguaZero/aguazero1.png',
      '/assets/images/aguaZero/aguazero2.png',
      '/assets/images/aguaZero/aguazero3.png',
    ],
  },
  {
    id: 3,
    name: 'ProgreSync',
    kind: 'Backend · SQL',
    year: '2025-1',
    description:
      'Módulo de seguimiento de actividades para practicantes con validación de estados de entrega y control de fechas límite. Desarrollo de consultas para reportes de avance.',
    techs: ['SQL', 'Backend'],
    role: 'Desarrollador',
    github: 'https://github.com/Jullians1105/ProgreSync.git',
    color: '#B5A642',
    pattern: 'stripes',
    cover: '/assets/images/progreSync/progresync1.png',
    coverStyle: { backgroundSize: '308% auto', backgroundPosition: '40.7% 32%' },
    images: [
      '/assets/images/progreSync/progresync1.png',
      '/assets/images/progreSync/progresync2.png',
      '/assets/images/progreSync/progresync3.png',
    ],
  },
  {
    id: 2,
    name: 'StreetSync',
    kind: 'Analítica de datos',
    year: '2025-1',
    description:
      'Sistema de análisis de ventas y rendimiento. Definición e implementación de KPIs, diseño de Data Marts y elaboración de reportes analíticos a partir de datos operacionales.',
    techs: ['Data Analytics', 'SQL', 'Power BI'],
    role: 'Desarrollador - Líder',
    github: 'https://github.com/Jullians1105/Erp-StreetSync.git',
    color: '#2F6B4F',
    pattern: 'grid',
    cover: '/assets/images/streetSync/cover.png',
    illustration: 'dashboard',
    images: [],
  },
  {
    id: 4,
    name: 'GESTCON',
    label: 'Gestión Contable',
    kind: 'Automatización · IA',
    year: 'Personal',
    description:
      'Implementación de IA y automatización para empresa de contadores. AdminTareas es un bot de Telegram que permite crear tareas en Notion mediante diálogo conversacional, con recordatorios automáticos y control de acceso. Corre en GitHub Actions gratuitamente en horario laboral.',
    techs: ['Python', 'Telegram Bot API', 'Notion API', 'GitHub Actions'],
    role: 'Desarrollador',
    github: 'https://github.com/Jullians1105/GestionContable.git',
    color: '#C2462B',
    pattern: 'sun',
    cover: '/assets/images/gestionContable/cover.png',
    illustration: 'bot',
    images: [],
  },
  {
    id: 5,
    name: 'AutomatizarNotionCanvas',
    label: 'Notion × Canvas',
    kind: 'Automatización',
    year: 'Personal',
    description:
      'Automatización de tareas que se generan semanalmente en Canvas. Agrega tareas a Notion con fecha, materia y link, y envía notificaciones a bot de Telegram con descripción de lo agregado.',
    techs: ['Python', 'Canvas API', 'Notion API', 'Telegram Bot API'],
    role: 'Desarrollador',
    github: 'https://github.com/Jullians1105/AutomatizarNotionCanvas.git',
    color: '#7A4FA0',
    pattern: 'dots',
    cover: '/assets/images/notionCanvas/cover.png',
    illustration: 'sync',
    images: [],
  },
]

const artPatterns = {
  rings: { backgroundImage: 'repeating-radial-gradient(circle, rgba(255,255,255,.12) 0 2px, transparent 2px 14px)' },
  stripes: { backgroundImage: 'repeating-linear-gradient(45deg, rgba(0,0,0,.12) 0 8px, transparent 8px 16px)' },
  grid: {
    backgroundImage:
      'linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)',
    backgroundSize: '22px 22px',
  },
  sun: { backgroundImage: 'repeating-conic-gradient(rgba(255,255,255,.1) 0 7deg, transparent 7deg 14deg)' },
  dots: {
    backgroundImage: 'radial-gradient(rgba(255,255,255,.22) 2px, transparent 2.2px)',
    backgroundSize: '16px 16px',
  },
}

const pad = (n) => String(n).padStart(2, '0')

function useDiscSize() {
  const calc = () =>
    Math.round(Math.min(520, window.innerWidth * 0.8, Math.max(260, window.innerHeight * 0.6)))
  const [size, setSize] = useState(calc)

  useEffect(() => {
    const onResize = () => setSize(calc())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return size
}

// Verdadero solo si la imagen existe; si no, el disco muestra su ilustración.
function useImageExists(src) {
  const [exists, setExists] = useState(false)

  useEffect(() => {
    setExists(false)
    if (!src) return undefined
    const img = new Image()
    img.onload = () => setExists(true)
    img.src = src
    return () => {
      img.onload = null
    }
  }, [src])

  return exists
}

// Ilustraciones para los proyectos que aún no tienen captura.
// Zonas libres del disco (viewBox 100): franja de título y = 14-31, aro central x/y = 37.5-62.5
// y franja de tecnologías y = 83-91. Los dibujos van solo en el resto.
function Illustration({ kind }) {
  const w = 'rgba(255,255,255,'

  return (
    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" aria-hidden="true">
      {kind === 'dashboard' && (
        <>
          {/* Barras a los lados del aro */}
          {[10, 16, 22].map((h, i) => (
            <rect key={`l${i}`} x={14 + i * 7.5} y={62 - h} width="5.5" height={h} rx="1" fill={`${w}${0.4 + i * 0.2})`} />
          ))}
          {[14, 20, 26].map((h, i) => (
            <rect key={`r${i}`} x={64 + i * 7.5} y={62 - h} width="5.5" height={h} rx="1" fill={`${w}${0.4 + i * 0.2})`} />
          ))}
          {/* Línea de tendencia bajo el aro */}
          <polyline
            points="18,77 31,73 43,75 56,69 69,71 82,66"
            fill="none"
            stroke={`${w}.9)`}
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
          {[18, 31, 43, 56, 69, 82].map((x, i) => (
            <circle key={x} cx={x} cy={[77, 73, 75, 69, 71, 66][i]} r="1.4" fill="#fff" />
          ))}
        </>
      )}

      {kind === 'bot' && (
        <>
          {/* Burbujas de chat a los lados del aro */}
          <rect x="12" y="38" width="22" height="9" rx="4.5" fill={`${w}.92)`} />
          <rect x="16" y="41.4" width="14" height="1.8" rx="0.9" fill="#C2462B" />
          <rect x="66" y="52" width="22" height="9" rx="4.5" fill={`${w}.4)`} />
          <rect x="70" y="55.4" width="14" height="1.8" rx="0.9" fill="#fff" />
          {/* Tareas creadas en Notion, bajo el aro */}
          {[66, 72, 78].map((y, i) => (
            <g key={y}>
              <rect x="20" y={y - 1} width="60" height="4.6" rx="1.2" fill={`${w}${0.22 + i * 0.05})`} />
              <rect x="22.5" y={y + 0.3} width="2" height="2" rx="0.4" fill="none" stroke="#fff" strokeWidth="0.5" />
              <rect x="28" y={y + 0.7} width={[26, 34, 20][i]} height="1.4" rx="0.7" fill={`${w}.85)`} />
            </g>
          ))}
        </>
      )}

      {kind === 'sync' && (
        <>
          {/* Tarjeta Canvas (izquierda del aro) */}
          <rect x="10" y="40" width="24" height="20" rx="2.5" fill={`${w}.92)`} />
          <rect x="13" y="43.5" width="10" height="2" rx="1" fill="#7A4FA0" />
          <rect x="13" y="48" width="18" height="1.5" rx="0.75" fill="#7A4FA0" opacity=".45" />
          <rect x="13" y="52" width="14" height="1.5" rx="0.75" fill="#7A4FA0" opacity=".45" />
          {/* Tarjeta Notion (derecha del aro) */}
          <rect x="66" y="40" width="24" height="20" rx="2.5" fill={`${w}.2)`} stroke={`${w}.8)`} strokeWidth="0.5" />
          {[44, 49.5, 55].map((y) => (
            <g key={y}>
              <rect x="69" y={y} width="2.4" height="2.4" rx="0.5" fill="none" stroke="#fff" strokeWidth="0.5" />
              <rect x="74" y={y + 0.4} width="12" height="1.5" rx="0.75" fill={`${w}.85)`} />
            </g>
          ))}
          {/* Flecha por encima del aro */}
          <path d="M26 37 Q50 30 74 37 M70.5 33.8 L74 37 L69.8 38.8" fill="none" stroke="#fff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          {/* Calendario semanal bajo el aro */}
          {Array.from({ length: 7 }).map((_, i) => (
            <rect key={i} x={20 + i * 8.9} y="68" width="7" height="10" rx="1.4" fill={`${w}${i === 3 ? 0.9 : 0.25})`} />
          ))}
        </>
      )}
    </svg>
  )
}

// Disco con el arte impreso en toda la cara y un aro plateado, como en A24.
function PrintedDisc({ project, size }) {
  const hub = size * 0.25
  const coverLoaded = useImageExists(project.cover)

  return (
    <div
      className="relative rounded-full overflow-hidden"
      style={{
        width: size,
        height: size,
        background: `linear-gradient(140deg, ${project.color}, ${project.color}cc 55%, #000 190%)`,
        boxShadow: 'inset 0 0 0 2px rgba(255,255,255,.55), 0 0 0 1px rgba(0,0,0,.25)',
      }}
    >
      {coverLoaded ? (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("${project.cover}")`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            ...project.coverStyle,
          }}
        />
      ) : (
        <>
          <div className="absolute inset-0" style={artPatterns[project.pattern]} />
          <Illustration kind={project.illustration} />
        </>
      )}

      {/* Franja superior: nombre y año, sobre fondo propio para que nada se pise */}
      <div
        className="absolute inset-x-0 flex flex-col items-center justify-center text-center text-white"
        style={{
          top: size * 0.14,
          height: size * 0.17,
          background: 'rgba(8,9,15,.62)',
          backdropFilter: 'blur(3px)',
          WebkitBackdropFilter: 'blur(3px)',
        }}
      >
        <p
          className="font-sans font-medium tracking-tight leading-none px-[10%]"
          style={{ fontSize: size * 0.07 }}
        >
          {project.label || project.name}
        </p>
        <p
          className="font-mono uppercase tracking-[0.25em] text-white/70"
          style={{ fontSize: Math.max(7, size * 0.02), marginTop: size * 0.015 }}
        >
          Jullians Amado · {project.year}
        </p>
      </div>

      {/* Franja inferior: tecnologías */}
      <div
        className="absolute inset-x-0 flex items-center justify-center text-center"
        style={{
          top: size * 0.83,
          height: size * 0.08,
          background: 'rgba(8,9,15,.62)',
          backdropFilter: 'blur(3px)',
          WebkitBackdropFilter: 'blur(3px)',
        }}
      >
        <p
          className="font-mono uppercase tracking-[0.12em] text-white/75 whitespace-nowrap"
          style={{ fontSize: Math.max(6, size * 0.017) }}
        >
          {project.techs.slice(0, 3).join(' · ')}
        </p>
      </div>

      {/* Aro plateado del centro */}
      <div
        className="absolute rounded-full"
        style={{
          width: hub,
          height: hub,
          top: (size - hub) / 2,
          left: (size - hub) / 2,
          background:
            'radial-gradient(circle, #ECECE7 0 33%, #d4d5da 34% 62%, #a9abb4 63% 100%)',
          boxShadow: '0 0 0 1px rgba(0,0,0,.2)',
        }}
      />
    </div>
  )
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
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-white/40 hover:text-white transition-colors p-2"
        aria-label="Cerrar"
      >
        <FaTimes size={18} />
      </button>

      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            setCurrent((c) => (c - 1 + images.length) % images.length)
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors p-3"
          aria-label="Anterior"
        >
          <FaChevronLeft size={18} />
        </button>
      )}

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
          className="max-w-full max-h-[85vh] object-contain shadow-2xl"
        />
      </motion.div>

      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            setCurrent((c) => (c + 1) % images.length)
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors p-3"
          aria-label="Siguiente"
        >
          <FaChevronRight size={18} />
        </button>
      )}

      {images.length > 1 && (
        <div className="absolute bottom-6 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation()
                setCurrent(i)
              }}
              className={`h-1.5 rounded-full transition-all duration-200 ${
                i === current ? 'bg-volt w-4' : 'bg-white/30 w-1.5'
              }`}
              aria-label={`Captura ${i + 1}`}
            />
          ))}
        </div>
      )}
    </motion.div>
  )
}

function ProjectDetail({ project }) {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.35 }}
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-graphite/50 mb-3">
          {project.year} · {project.role}
        </p>
        <h3 className="font-display text-5xl sm:text-6xl leading-none mb-6 break-words">
          {project.name}
        </h3>
        <p className="text-graphite/70 leading-relaxed max-w-2xl">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-6">
          {project.techs.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 border border-graphite/20 font-mono text-[11px] uppercase tracking-wider"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.images.length > 0 && (
          <div className="flex gap-3 mt-8">
            {project.images.map((src, i) => (
              <button
                key={src}
                onClick={() => setLightboxIndex(i)}
                className="relative overflow-hidden border border-graphite/15 hover:border-volt transition-colors group"
                style={{
                  aspectRatio: project.portrait ? '9/16' : '16/9',
                  height: project.portrait ? 160 : undefined,
                  width: project.portrait ? undefined : 'calc(33% - 8px)',
                }}
                aria-label={`Ver captura ${i + 1}`}
              >
                <img
                  src={src}
                  alt={`${project.name} captura ${i + 1}`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </button>
            ))}
          </div>
        )}

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-dark mt-8"
          >
            <FaGithub size={14} />
            Ver en GitHub ↗
          </a>
        )}
      </motion.div>

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

const discVariants = {
  enter: (dir) => ({ x: dir * 320, opacity: 0, rotate: dir * 14 }),
  center: { x: 0, opacity: 1, rotate: 0 },
  exit: (dir) => ({ x: dir * -320, opacity: 0, rotate: dir * -14 }),
}

export default function Projects() {
  const [[selected, direction], setState] = useState([0, 1])
  const size = useDiscSize()
  const last = projects.length - 1
  const project = projects[selected]

  const go = useCallback(
    (index) => {
      const next = Math.min(last, Math.max(0, index))
      setState(([current]) => (next === current ? [current, 1] : [next, next > current ? 1 : -1]))
    },
    [last],
  )

  const handleKey = (e) => {
    if (e.key === 'ArrowRight') go(selected + 1)
    if (e.key === 'ArrowLeft') go(selected - 1)
  }

  return (
    <section id="proyectos" className="bg-paper text-graphite overflow-hidden">
      {/* Escenario del disco */}
      <motion.div
        onPanEnd={(_, info) => {
          if (info.offset.x < -60) go(selected + 1)
          else if (info.offset.x > 60) go(selected - 1)
        }}
        tabIndex={0}
        onKeyDown={handleKey}
        role="group"
        aria-label="Carrusel de proyectos"
        className="relative outline-none min-h-[44rem] h-screen max-h-[60rem] touch-pan-y"
      >
        <div className="absolute top-24 left-5 sm:left-10 right-5 sm:right-10 flex justify-between">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em]">02 — Proyectos</span>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-graphite/50 hidden sm:block">
            Arrastra o usa ← →
          </span>
        </div>

        {/* Etiquetas laterales */}
        <AnimatePresence mode="wait">
          <motion.span
            key={`k-${project.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute left-5 sm:left-10 top-1/2 -translate-y-1/2 text-sm hidden sm:block"
          >
            {project.kind}
          </motion.span>
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.span
            key={`y-${project.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute right-5 sm:right-10 top-1/2 -translate-y-1/2 text-sm hidden sm:block"
          >
            {project.year}
          </motion.span>
        </AnimatePresence>

        {/* Disco inclinado en perspectiva */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ perspective: 1500 }}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={project.id}
              custom={direction}
              variants={discVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              style={{ filter: 'drop-shadow(0 40px 30px rgba(0,0,0,.28))' }}
            >
              <div style={{ transform: 'rotateX(48deg) rotateZ(-32deg)' }}>
                <div className="record-spin">
                  <PrintedDisc project={project} size={size} />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Contador con dígitos que ruedan */}
        <div className="absolute bottom-8 left-5 sm:left-10 flex items-end gap-3">
          <div className="flex font-display leading-none text-[clamp(5rem,13vw,10rem)] overflow-hidden h-[1.05em] pb-[0.08em]">
            {pad(selected + 1)
              .split('')
              .map((digit, i) => (
                <AnimatePresence key={i} mode="popLayout" initial={false}>
                  <motion.span
                    key={digit}
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '-100%' }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block"
                  >
                    {digit}
                  </motion.span>
                </AnimatePresence>
              ))}
          </div>
          <span className="font-mono text-[11px] tracking-[0.2em] text-graphite/50 pb-2">
            / {pad(projects.length)}
          </span>
        </div>

        <div className="absolute bottom-8 right-5 sm:right-10 flex items-center gap-3">
          <button
            onClick={() => go(selected - 1)}
            disabled={selected === 0}
            className="w-11 h-11 border border-graphite/30 flex items-center justify-center hover:bg-graphite hover:text-paper disabled:opacity-25 disabled:pointer-events-none transition-colors"
            aria-label="Proyecto anterior"
          >
            <FaChevronLeft size={12} />
          </button>
          <button
            onClick={() => go(selected + 1)}
            disabled={selected === last}
            className="w-11 h-11 border border-graphite/30 flex items-center justify-center hover:bg-graphite hover:text-paper disabled:opacity-25 disabled:pointer-events-none transition-colors"
            aria-label="Proyecto siguiente"
          >
            <FaChevronRight size={12} />
          </button>
        </div>
      </motion.div>

      {/* Índice + detalle */}
      <div className="max-w-[90rem] mx-auto px-5 sm:px-10 pt-12 pb-28 grid lg:grid-cols-12 gap-12 border-t border-graphite/15">
        <div className="lg:col-span-4 self-start">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-graphite/50 mb-4">
            Índice
          </p>
          <ol className="border-b border-graphite/15">
            {projects.map((p, i) => (
              <li key={p.id}>
                <button
                  onClick={() => go(i)}
                  className={`w-full flex items-baseline gap-4 py-3.5 border-t border-graphite/15 text-left transition-colors ${
                    i === selected ? 'text-volt' : 'hover:text-volt'
                  }`}
                >
                  <span className="font-mono text-[11px] text-graphite/50">{pad(i + 1)}</span>
                  <span className="text-sm flex-1 min-w-0 truncate">{p.name}</span>
                  <span className="font-mono text-[11px] text-graphite/50">{p.year}</span>
                </button>
              </li>
            ))}
          </ol>
        </div>

        <div className="lg:col-span-8 min-h-[22rem]">
          <AnimatePresence mode="wait">
            <ProjectDetail key={project.id} project={project} />
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
