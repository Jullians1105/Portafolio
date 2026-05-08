import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa'

const contactMethods = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'julliansamado@gmail.com',
    href: 'mailto:julliansamado@gmail.com',
    description: 'Escríbeme en cualquier momento',
  },
  {
    icon: FaPhone,
    label: 'Teléfono',
    value: '316 711 7358',
    href: 'tel:+573167117358',
    description: 'Disponible de lunes a viernes',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'github.com/Jullians1105',
    href: 'https://github.com/Jullians1105',
    description: 'Mira mis proyectos y código',
    external: true,
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'in/julliansamado',
    href: 'https://www.linkedin.com/in/julliansamado',
    description: 'Conectemos profesionalmente',
    external: true,
  },
]

const containerVariants = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Contact() {
  return (
    <section id="contacto" className="py-24 bg-gradient-to-b from-dark via-accent/15 to-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">Hablemos</p>
          <h2 className="section-title">¿Hablamos?</h2>
          <p className="text-light/50 max-w-xl mx-auto mt-4 leading-relaxed">
            Estoy disponible para discutir oportunidades, proyectos o simplemente
            conversar sobre desarrollo de software.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-gold to-brown mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Contact cards */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {contactMethods.map((method) => {
            const Icon = method.icon
            return (
              <motion.a
                key={method.label}
                variants={cardVariants}
                href={method.href}
                target={method.external ? '_blank' : undefined}
                rel={method.external ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.02, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="group card flex items-start gap-4 hover:border-gold/50 hover:shadow-lg hover:shadow-black/30 transition-all duration-300 no-underline"
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-brown/20 border border-gold/20 flex items-center justify-center group-hover:border-gold/40 group-hover:from-gold/30 group-hover:to-brown/30 transition-all duration-300">
                  <Icon size={20} className="text-gold" />
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <p className="text-gold/60 text-xs font-medium uppercase tracking-wide mb-1">
                    {method.label}
                  </p>
                  <p className="text-light font-semibold text-sm truncate group-hover:text-gold transition-colors duration-300">
                    {method.value}
                  </p>
                  <p className="text-light/40 text-xs mt-0.5">{method.description}</p>
                </div>
              </motion.a>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-14"
        >
          <p className="text-light/40 text-sm mb-5">
            O si prefieres enviarme un correo directamente
          </p>
          <motion.a
            href="mailto:julliansamado@gmail.com"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="btn-primary inline-flex items-center gap-2"
          >
            <FaEnvelope size={14} />
            Enviar correo
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
