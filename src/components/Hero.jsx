import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaChevronDown } from 'react-icons/fa'

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center items-center bg-dark overflow-hidden pt-16"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brown/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Profile picture */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className="w-36 h-36 rounded-full shadow-2xl shadow-accent/30 ring-4 ring-gold/20 overflow-hidden">
              <img
                src="/assets/images/yo.jpeg"
                alt="Jullians Mauricio Amado Gutierrez"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-dark" title="Disponible" />
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.p
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gold font-medium text-sm tracking-widest uppercase mb-3"
        >
          Hola, soy
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-light leading-tight mb-4"
        >
          Jullians{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-brown">
            Amado
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl sm:text-2xl text-gold/80 font-medium mb-6"
        >
          Ingeniero de Software en Formación
        </motion.h2>

        {/* Bio */}
        <motion.p
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-light/60 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Estudiante de noveno semestre en la Universidad Manuela Beltrán, Bogotá.
          Especializado en desarrollo web con JavaScript, Python y React.
          Apasionado por construir soluciones eficientes y bien diseñadas.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a href="#proyectos" className="btn-primary text-center">
            Ver mis proyectos
          </a>
          <a href="#contacto" className="btn-outline text-center">
            Contáctame
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex justify-center gap-5 mb-16"
        >
          <a
            href="https://github.com/Jullians1105"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light/50 hover:text-gold transition-colors duration-300 hover:scale-110 transform"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/julliansamado"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light/50 hover:text-gold transition-colors duration-300 hover:scale-110 transform"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>
        </motion.div>
      </div>

      {/* Scroll down indicator */}
      <motion.a
        href="#sobre-mi"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gold/50 hover:text-gold transition-colors duration-300"
        aria-label="Ir a Sobre Mí"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FaChevronDown size={14} />
        </motion.div>
      </motion.a>
    </section>
  )
}
