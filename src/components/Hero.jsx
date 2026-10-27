import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaPause, FaPlay } from 'react-icons/fa'

const techs = [
  'JavaScript',
  'Python',
  'React',
  'SQL',
  'Java',
  'Kotlin',
  'Power BI',
  'Notion API',
  'Telegram Bot API',
  'GitHub Actions',
  'Figma',
  'Scrum',
]

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
const CELL = 11

// Campo de glifos en forma de ola; se ilumina cerca del cursor.
function GlyphField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let cols = 0
    let rows = 0
    let grid = []
    let mask = []
    let w = 0
    let h = 0
    let t = 0
    let raf
    let last = 0
    const mouse = { x: -999, y: -999 }

    const resize = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1)
      const rect = canvas.getBoundingClientRect()
      w = rect.width
      h = rect.height
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.font = '10px "JetBrains Mono", monospace'
      ctx.textBaseline = 'top'
      cols = Math.floor(w / CELL)
      rows = Math.floor(h / CELL)
      grid = Array.from({ length: cols * rows }, () => GLYPHS[(Math.random() * GLYPHS.length) | 0])
      mask = Array.from({ length: cols * rows }, () => Math.random())
    }

    const draw = (time) => {
      raf = requestAnimationFrame(draw)
      if (time - last < 40) return
      last = time
      t += 0.02

      // Cambia unos pocos glifos por cuadro
      for (let i = 0; i < 40; i++) {
        grid[(Math.random() * grid.length) | 0] = GLYPHS[(Math.random() * GLYPHS.length) | 0]
      }

      ctx.clearRect(0, 0, w, h)
      for (let c = 0; c < cols; c++) {
        const env =
          rows * 0.34 * (0.55 + 0.45 * Math.sin(c * 0.045 + t) * Math.sin(c * 0.013 - t * 0.6)) +
          rows * 0.08
        for (let r = 0; r < rows; r++) {
          const dy = Math.abs(r - rows / 2)
          if (dy > env) continue
          const a = 1 - dy / env
          const idx = c * rows + r
          if (mask[idx] > a * 1.15) continue

          const x = c * CELL
          const y = r * CELL
          const d = Math.hypot(x - mouse.x, y - mouse.y)
          if (d < 110) {
            ctx.fillStyle = `rgba(255,255,255,${0.95 - d / 160})`
          } else {
            ctx.fillStyle = `rgba(75,75,255,${0.25 + a * 0.7})`
          }
          ctx.fillText(grid[idx], x, y)
        }
      }
    }

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    resize()
    if (reduceMotion) {
      draw(100)
      cancelAnimationFrame(raf)
    } else {
      raf = requestAnimationFrame(draw)
    }
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMove)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full" aria-hidden="true" />
}

const reveal = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
}

export default function Hero() {
  const [paused, setPaused] = useState(false)

  return (
    <section id="inicio" className="relative min-h-screen flex flex-col overflow-hidden">
      <div className="relative z-10 max-w-[90rem] w-full mx-auto px-5 sm:px-10 pt-32">
        <h1 className="font-display text-[clamp(2.4rem,6vw,5.8rem)] leading-[1.05] text-bone">
          <span className="block">
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Software <span className="mark">a la medida</span>,
            </motion.span>
          </span>
          <span className="block">
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
            >
              pensado para <span className="mark">resolver problemas</span> reales.
            </motion.span>
          </span>
        </h1>

        <div className="mt-10 grid md:grid-cols-12 gap-8 items-end">
          <motion.p
            variants={reveal}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.55 }}
            className="md:col-span-6 lg:col-span-5 text-bone/80 text-sm leading-relaxed"
          >
            Ingeniero de software en formación, de Bogotá. Desarrollo web con JavaScript, Python y
            React, y automatizo lo repetitivo para que tú ganes tiempo.
          </motion.p>

          <motion.div
            variants={reveal}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.7 }}
            className="md:col-span-6 lg:col-span-7 flex items-center gap-4 md:justify-end"
          >
            <a href="#contacto" className="btn-primary">
              Escríbeme
            </a>
            <a href="#proyectos" className="btn-link">
              Ver proyectos
            </a>
          </motion.div>
        </div>
      </div>

      {/* Arte de glifos */}
      <div className="relative flex-1 min-h-[16rem] mt-6">
        <div className="absolute inset-0 [mask-image:linear-gradient(180deg,transparent,#000_25%)]">
          <GlyphField />
        </div>
      </div>

      {/* Franja de tecnologías */}
      <div className="relative z-10 border-t border-line bg-ink">
        <div className="max-w-[90rem] mx-auto px-5 sm:px-10 flex items-center gap-6 py-5">
          <button
            onClick={() => setPaused(!paused)}
            className="shrink-0 flex items-center gap-2 text-mute hover:text-bone transition-colors"
            aria-label={paused ? 'Reanudar marquesina' : 'Pausar marquesina'}
          >
            {paused ? <FaPlay size={9} /> : <FaPause size={9} />}
            <span className="eyebrow hidden sm:inline">Stack</span>
          </button>
          <div className="flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
            <div
              className="marquee-track flex w-max gap-12"
              style={{ animationPlayState: paused ? 'paused' : 'running' }}
            >
              {[...techs, ...techs].map((tech, i) => (
                <span key={i} className="font-display text-2xl text-mute whitespace-nowrap">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
