const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-line">
      <div className="max-w-[90rem] mx-auto px-5 sm:px-10 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <p className="font-display text-3xl text-bone">
          Jullians Amado<span className="text-glow">.</span>
        </p>

        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-[11px] uppercase tracking-[0.18em] text-mute hover:text-bone transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-mute">
          &copy; 2026 · Bogotá
        </p>
      </div>
    </footer>
  )
}
