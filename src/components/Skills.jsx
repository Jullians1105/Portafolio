import { motion } from 'framer-motion'
import { FaStar, FaRegStar } from 'react-icons/fa'

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
  },
  {
    date: 'Mar 2026',
    name: 'Gestión de Amenazas Cibernéticas',
    issuer: 'Cisco Networking Academy',
  },
  {
    date: 'Oct 2024',
    name: 'Google Cloud Computing Foundations',
    issuer: 'Google Cloud',
  },
  {
    date: 'Sep 2024',
    name: 'Scrum Fundamentals Certified',
    issuer: 'SCRUM study',
  },
  {
    date: 'Ago 2024',
    name: 'NDG Linux Unhatched',
    issuer: 'Cisco Networking Academy',
  },
  {
    date: 'May 2023',
    name: 'Python Essentials 1',
    issuer: 'Cisco Networking Academy',
  },
  {
    date: '2023',
    name: 'Oracle Cloud Data Management Foundations Associate',
    issuer: 'Oracle',
  },
]

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

                  <div className="card hover:border-gold/40">
                    <span className="inline-block text-gold text-xs font-mono mb-2 bg-accent/20 px-2 py-0.5 rounded">
                      {cert.date}
                    </span>
                    <h4 className="text-light font-semibold text-sm leading-snug mb-1">
                      {cert.name}
                    </h4>
                    <p className="text-gold/60 text-xs">{cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
