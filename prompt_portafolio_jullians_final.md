# PROMPT PARA PORTAFOLIO WEB PERSONAL INTERACTIVO CON AUDIO
## JULLIANS MAURICIO AMADO GUTIERREZ

---

## 📚 CONTEXTO ACADÉMICO

**Programa:** Ingeniería de Software  
**Universidad:** Universidad Manuela Beltrán  
**Actividad:** Creación de un Portafolio Web Personal Interactivo con Integración de Audio  
**Semestre:** Noveno (en curso)

### Objetivo de la Actividad
Diseñar y desarrollar una página web tipo portafolio profesional que permita presentar el perfil académico y profesional del estudiante en Ingeniería de Software, incorporando elementos multimedia como audio para mejorar la experiencia del usuario y fortalecer las competencias en ingeniería de software.

---

## 🎯 OBJETIVO GENERAL DEL PORTAFOLIO
Crear un portafolio web personal moderno, minimalista y elegante para Jullians Mauricio Amado Gutierrez, Ingeniero de Software en formación. El sitio debe ser una SPA (Single Page Application) con navegación suave, efectos visuales sutiles, experiencia de usuario excepcional e **integración de audio de presentación personal**.

---

## 📋 INFORMACIÓN PERSONAL

**Nombre:** Jullians Mauricio Amado Gutierrez  
**Profesión:** Estudiante de Ingeniería de Software (Noveno semestre - Universidad Manuela Beltrán)  
**Email:** julliansamado@gmail.com  
**Teléfono:** 3167117358  
**Ubicación:** Bogotá, Colombia  
**GitHub:** https://github.com/Jullians1105  
**LinkedIn:** https://www.linkedin.com/in/julliansamado  

**Foto de perfil:** Usar la foto del CV (profesional, gafas, camisa blanca)

**Resumen profesional:** Estudiante de ingeniería de software con dominio práctico en desarrollo web y backend. Especializado en JavaScript, Python y React. Aprendiz autónomo con enfoque en soluciones eficientes, atención al detalle y metodologías ágiles.

---

## 🎨 ESPECIFICACIONES DE DISEÑO

### Paleta de Colores (OBLIGATORIA)
```
Primary Dark: #0A0908 (Negro muy oscuro - fondo/base)
Primary Accent: #49111C (Vino profundo - acentos principales)
Light Background: #F2F4F3 (Blanco cálido - fondo secundario)
Warm Gold: #A9927D (Dorado cálido - detalles, hover)
Dark Brown: #5E503F (Marrón oscuro - textos secundarios, divisores)
```

### Estilo Visual
- **Concepto:** Moderno, minimalista con efectos visuales elegantes
- **Efectos:** Scroll suave, hover effects refinados, transiciones fluidas
- **Tipografía:** Limpia y legible (sans-serif moderno)
- **Espaciado:** Generoso, respira
- **Componentes:** Tarjetas sutiles, botones con hover effect, iconos modernos

### Características de Diseño
- Scroll suave en toda la página
- Efectos hover elegantes en botones, links y tarjetas de proyectos
- Transiciones fluidas entre secciones
- Animaciones sutiles al cargar elementos
- Diseño responsive (mobile-first)
- Dark mode opcional (si lo deseas integrar)

---

## 🏗️ ESTRUCTURA DEL SITIO (SPA - Single Page App)

### Secciones Principales (En orden de aparición):

#### 1. **HERO / INICIO**
- Navegación fija/sticky con logo y menu (Home, About, Projects, Skills, Contact)
- Imagen/avatar de perfil circular
- Nombre: "Jullians Mauricio Amado Gutierrez"
- Título: "Ingeniero de Software"
- Resumen corto (2-3 líneas)
- CTA buttons: "Ver mis proyectos" + "Contactame"
- Scroll down indicator con animación

#### 1.5 **AUDIO DE PRESENTACIÓN PERSONAL** ⭐ [REQUERIMIENTO ACADÉMICO]
Una sección destacada en el Hero o inmediatamente después que incluya:

**Características:**
- Título: "Mi Presentación Personal" o "Audio de Bienvenida"
- Descrición: "Conoceme mejor escuchando mi presentación"
- **Reproductor de audio personalizado con:**
  * Botón de reproducir/pausar elegante
  * Indicador visual de progreso (barra de progreso)
  * Duración del audio visible
  * Volumen control (opcional pero recomendado)
  * Ícono de altavoz animado
  * Efecto visual cuando está reproduciéndose

**Contenido del audio:**
El audio debe contener una presentación personal de Jullians con aprox. 30-60 segundos donde mencione:
- Nombre completo: "Jullians Mauricio Amado Gutierrez"
- Profesión: "Estudiante de Ingeniería de Software"
- Especialidades: "Desarrollo web, backend con Node.js, Python"
- Características personales: "Aprendiz autónomo, orientado al detalle"
- Objetivo: "Busco contribuir con soluciones de software eficientes"

**Ejemplo de guión:**
"Hola, mi nombre es Jullians Mauricio Amado Gutierrez. Soy estudiante de noveno semestre de Ingeniería de Software en la Universidad Manuela Beltrán. Mi especialidad está en desarrollo web y backend, con sólidos conocimientos en JavaScript, Python y React. Me caracterizo por ser un aprendiz autónomo, con atención al detalle y capacidad de solución de problemas. Este es mi portafolio profesional donde encontrarás mis proyectos, habilidades y certificaciones. Espero que disfrutes conociendo mi trabajo."

**Especificaciones técnicas del audio:**
- Formato: MP3 o WAV
- Duración: 30-60 segundos
- Calidad: 128kbps mínimo
- Grabado desde celular o computador (naturalidad bienvenida)
- El archivo debe estar embebido en el portafolio

**Almacenamiento del audio:**
- El archivo de audio debe estar en la carpeta `/public/assets/audio/` del proyecto
- Debe ser importado correctamente en React
- Debe funcionar sin necesidad de backend

**Estilos del reproductor:**
- Usar colores de la paleta principal (#A9927D para acento)
- Hover effects elegantes
- Animación sutil del ícono cuando está reproduciéndose
- Responsive en móvil

#### 2. **SOBRE MÍ (About)**
- Foto de perfil a un lado
- Descripción detallada del perfil profesional (máx 250 palabras)
- Información académica:
  - Institución: Universidad Manuela Beltrán
  - Carrera: Ingeniería de Software
  - Estado: Estudiante Noveno Semestre
- Años de experiencia: En desarrollo académico y práctico
- Características personales: Aprendiz autónomo, orientado al detalle, problema-solver, comprometido con mejora continua
- Botón: "Descargar CV" (PDF descargable con nombre "Hoja de vida - Jullians Amado.pdf")

#### 3. **PROYECTOS (Projects)**
Mostrar 5 proyectos en tarjetas/cards con:
- Imagen/thumbnail del proyecto (si existe, sino un ícono representativo)
- Nombre del proyecto
- Descripción breve (2-3 líneas)
- Tecnologías usadas (chips/tags)
- Links: GitHub (si aplica) + Demo/más info
- Hover effects: zoom suave, cambio de color, revelar botones

**PROYECTOS A INCLUIR:**

1. **AguaZero** (2024-1)
   - Descripción: Aplicación móvil en Android Studio para consulta de cortes de agua por localidad en Bogotá. Implementación de filtros por localidad y diseño de interfaz orientada a la consulta rápida de información ciudadana.
   - Tecnologías: Android Studio, Java/Kotlin
   - Rol: Desarrollador Mobile
   - Link: Solo descripción (es académico)

2. **StreetSync** (2025-1)
   - Descripción: Sistema de análisis de ventas y rendimiento. Definición e implementación de KPIs, diseño de Data Marts y elaboración de reportes analíticos a partir de datos operacionales.
   - Tecnologías: Data Analytics, SQL, Power BI
   - Rol: Desarrollador - Líder
   - Link: Solo descripción (es académico)

3. **ProgreSync** (2025-1)
   - Descripción: Módulo de seguimiento de actividades para practicantes con validación de estados de entrega y control de fechas límite. Desarrollo de consultas para reportes de avance.
   - Tecnologías: SQL, Backend
   - Rol: Desarrollador
   - Link: Solo descripción (es académico)

4. **Oficina-GestionContable** ⭐ (Proyecto Personal)
   - Descripción: Implementación de IA y automatización para empresa de contadores. AdminTareas es un bot de Telegram que permite crear tareas en Notion mediante diálogo conversacional, con recordatorios automáticos y control de acceso. Corre en GitHub Actions gratuitamente en horario laboral (L-V 8am-6pm, Sáb 8am-12pm, hora Colombia).
   - Características destacadas:
     * Creación de tareas en 5 pasos desde Telegram
     * Recordatorios automáticos de tareas que vencen el día (10:30am y 4:30pm)
     * Control de acceso para administrador y director
     * Búsqueda flexible de empleados por nombre
   - Tecnologías: Python, Telegram Bot API, Notion API, GitHub Actions
   - Rol: Desarrollador
   - Link GitHub: https://github.com/Jullians1105/Oficina-GestionContable.git

5. **AutomatizarNotionCanvas** ⭐ (Proyecto Personal)
   - Descripción: Automatización de tareas que se generan semanalmente en Canvas. Agrega tareas a Notion con fecha, materia y link, y envía notificaciones a bot de Telegram con descripción de lo agregado.
   - Tecnologías: Python, Canvas API, Notion API, Telegram Bot API
   - Rol: Desarrollador
   - Link GitHub: https://github.com/Jullians1105/AutomatizarNotionCanvas.git

#### 4. **HABILIDADES (Skills)**
Mostrar en 4 categorías con visual hierarchy:

**DESARROLLO**
- Python ★★★★★
- JavaScript ★★★★☆
- HTML y CSS ★★★★☆
- SQL ★★★★☆
- React ★★★★☆
- REST APIs ★★★☆☆

**HERRAMIENTAS DE DESARROLLO**
- Git / GitHub ★★★★★
- VSCode ★★★★★
- Figma ★★★★★

**GESTIÓN Y PRODUCTIVIDAD**
- Notion ★★★★★
- Power BI ★★★★★
- Trello ★★★☆☆

**COMPLEMENTARIOS**
- Manejo de roles y autenticación ★★★★★
- Metodologías ágiles Scrum ★★★★★

**HABILIDADES BLANDAS** (en subtitular o sección pequeña)
- Responsabilidad, Adaptabilidad, Liderazgo, Puntualidad
- Trabajo en equipo, Comunicación asertiva
- Capacidad de análisis, Manejo del estrés, Enfoque en mejora continua

#### 5. **CERTIFICACIONES (Certifications)** [OPCIONAL - incluir en subsección de Skills]
- Mar 2026: Enterprise Full Stack with Spring Boot 4 and Angular 21 – Dev Senior Code
- Mar 2026: Gestión de Amenazas Cibernéticas – Cisco Networking Academy
- Oct 2024: Google Cloud Computing Foundations – Google Cloud
- Sep 2024: Scrum Fundamentals Certified – SCRUM study
- Ago 2024: NDG Linux Unhatched – Cisco Networking Academy
- May 2023: Python Essentials 1 – Cisco Networking Academy
- 2023: Oracle Cloud Data Management Foundations Associate – Oracle

#### 6. **CONTACTO (Contact)**
- Título: "¿Hablamos?"
- Descripción breve: "Estoy disponible para discutir oportunidades, proyectos o simplemente conversar sobre desarrollo de software."
- Métodos de contacto:
  - Email: julliansamado@gmail.com (link mailto)
  - Teléfono: 3167117358 (link tel)
  - GitHub: https://github.com/Jullians1105 (botón con ícono)
  - LinkedIn: https://www.linkedin.com/in/julliansamado (botón con ícono)
- Opcionales: Formulario simple de contacto (solo recopilar datos, sin enviar emails)
- Footer con año y crédito

---

## 🛠️ ESPECIFICACIONES TÉCNICAS

### Stack Tecnológico
- **Framework:** React
- **Styling:** Tailwind CSS
- **Componentes:** Usar shadcn/ui si necesita complejidad, sino HTML puro
- **Animaciones:** Framer Motion o CSS puro (smooth, no excesivas)
- **Iconos:** React Icons o Lucide
- **Routing:** React Router o scroll-based (SPA suave)
- **Responsive:** Mobile-first, totalmente responsive

### Funcionalidades Requeridas
1. ✅ Navegación SPA suave entre secciones (sin recargas)
2. ✅ Scroll suave y animaciones al entrar en viewport
3. ✅ Efectos hover elegantes en botones, links y tarjetas
4. ✅ Botón "Descargar CV" funcional (descargar PDF "Hoja de vida - Jullians Amado.pdf")
5. ✅ Links de contacto funcionales (mailto, tel, GitHub, LinkedIn)
6. ✅ Responsive en mobile, tablet y desktop
7. ✅ Barra de navegación sticky/fixed con menú
8. ✅ Animaciones de carga de contenido (fade-in, slide-up)
9. ✅ Scroll-to-top button en footer
10. ✅ Sección de certificaciones (expandible o en subsección)

### NO incluir
- ❌ Formulario de contacto que envíe emails
- ❌ Colores muy vibrantes (mantener minimalismo)
- ❌ Animaciones excesivas o que ralenticen la página
- ❌ Multi-página tradicional (todo debe ser SPA)
- ❌ Audio de fondo que se reproduzca automáticamente (debe ser iniciado por usuario)
- ❌ Múltiples audios confusos (solo 1 audio de presentación clara)

---

## 📱 CONSIDERACIONES DE UX/UI

1. **Navegación:** Menú sticky en header con scroll suave a cada sección
2. **Tipografía:** Sans-serif moderno (Inter, Poppins, Outfit o similar)
3. **Espaciado:** Padding y márgenes generosos (18-32px entre secciones)
4. **Tarjetas de proyectos:** Con hover effect que revelan botones/detalles
5. **Sección de skills:** Visual con barras de progreso o iconos
6. **Transiciones:** Todas suave (250-350ms), no abruptas
7. **Mobile:** Menú hamburguesa en móvil, navegación táctil clara
8. **Accesibilidad:** Contrastes adecuados, alt text en imágenes, ARIA labels si necesario

---

## 🎬 ANIMACIONES Y EFECTOS ESPERADOS

- **Hero:** Fade-in de elementos al cargar, slide-down suave
- **Scroll:** Parallax sutil o cambio de opacidad
- **Botones:** Hover con cambio de fondo/color y shadow
- **Tarjetas de proyectos:** Zoom suave (1.02x) + cambio de shadow al hover
- **Secciones:** Fade-in al hacer scroll hacia ellas
- **Transiciones entre secciones:** Smooth scroll behavior
- **Links:** Underline animado o cambio de color

---

## 📦 ARCHIVOS NECESARIOS

1. **PDF del CV:** "Hoja de vida - Jullians Amado.pdf" (debe estar disponible para descargar)
2. **Foto de perfil:** Usar la del CV (imagen cuadrada o circular)
3. **Favicon:** (opcional, pero recomendado)
4. **Imágenes de proyectos:** (opcional, si no existen usar placeholders con iconos)

---

## ✅ CHECKLIST DE ENTREGABLES

- [ ] SPA completamente funcional con navegación suave
- [ ] Todas las 6 secciones implementadas (Hero, About, Projects, Skills, Certifications, Contact)
- [ ] **INTEGRACIÓN DE AUDIO** (Requerimiento académico)
  - [ ] Reproductor de audio con botones Play/Pause
  - [ ] Barra de progreso del audio
  - [ ] Control de volumen
  - [ ] Audio de presentación personal (30-60 segundos)
  - [ ] Archivo de audio embebido en /public/assets/audio/
  - [ ] Funciona sin autoplay (debe iniciarlo el usuario)
- [ ] Paleta de colores exacta según especificación
- [ ] Efectos visuales: scroll suave, hover effects, transiciones
- [ ] Responsivo en todos los dispositivos
- [ ] CV descargable en PDF
- [ ] Links de contacto funcionales (mailto, tel, GitHub, LinkedIn)
- [ ] Animaciones suaves sin ralenteos
- [ ] Código limpio, comentado y bien estructurado
- [ ] Performance optimizado
- [ ] Accesibilidad básica (contraste, alt text)
- [ ] **Documentación de la actividad** (incluir archivo README explicando)
  - [ ] Objetivo del portafolio
  - [ ] Tecnologías utilizadas
  - [ ] Dificultades encontradas
  - [ ] Conclusiones y aprendizajes

---

## 💡 NOTAS FINALES

- El sitio debe reflejar profesionalismo y atención al detalle (como menciona en su CV)
- Minimizar el ruido visual manteniendo elegancia
- Priorizar la experiencia del usuario sobre efectos excesivos
- Asegurar que la información principal sea accesible en primeros 2 segundos
- El portafolio es una extensión de la marca personal de Jullians
- Debe ser fácil de actualizar en el futuro (estructura modular recomendada)

---

## 💡 NOTAS FINALES

- El sitio debe reflejar profesionalismo y atención al detalle (como menciona en su CV)
- Minimizar el ruido visual manteniendo elegancia
- Priorizar la experiencia del usuario sobre efectos excesivos
- Asegurar que la información principal sea accesible en primeros 2 segundos
- El portafolio es una extensión de la marca personal de Jullians
- Debe ser fácil de actualizar en el futuro (estructura modular recomendada)

---

## 📤 ENTREGABLES ACADÉMICOS REQUERIDOS

Según la actividad académica, se deben incluir/entregar:

1. ✅ **Link del portafolio realizado**
   - GitHub Pages o Vercel/Netlify con el proyecto desplegado
   - URL funcional y pública

2. ✅ **Código fuente organizado**
   - Estructura de carpetas clara:
     ```
     portfolio/
     ├── public/
     │   ├── assets/
     │   │   ├── audio/
     │   │   │   └── presentacion-personal.mp3
     │   │   ├── images/
     │   │   └── cv/
     │   │       └── Hoja_de_vida_-_Jullians_Amado.pdf
     │   └── index.html
     ├── src/
     │   ├── components/
     │   ├── pages/
     │   ├── styles/
     │   ├── App.jsx
     │   └── index.jsx
     ├── README.md
     └── package.json
     ```
   - Código comentado y legible
   - Commits claros en Git

3. ✅ **Archivo de audio utilizado**
   - Guardar en `/public/assets/audio/presentacion-personal.mp3`
   - Duración: 30-60 segundos
   - Contenido: Presentación personal completa
   - Formato: MP3 o WAV (128kbps mínimo)

4. ✅ **Capturas de pantalla del funcionamiento**
   - Screenshot del Hero/Inicio
   - Screenshot de la sección de Audio (reproductor)
   - Screenshot de Proyectos
   - Screenshot de Skills/Habilidades
   - Screenshot de Contact
   - Screenshot responsive en móvil
   - Evidencia de que el audio funciona (player visible)

5. ✅ **Documento README.md explicando:**

   ```markdown
   # Portafolio Web Personal - Jullians Mauricio Amado Gutierrez
   
   ## Objetivo del Portafolio
   [Descripción del objetivo: presentar perfil profesional, demostrar habilidades, etc.]
   
   ## Tecnologías Utilizadas
   - React 18
   - Tailwind CSS
   - Framer Motion (animaciones)
   - React Router
   - React Icons
   - HTML5 Audio API
   
   ## Descripción de Secciones
   - **Hero**: Presentación inicial con foto y CTA
   - **Audio**: Reproductor de presentación personal
   - **About**: Información académica y profesional
   - **Projects**: 5 proyectos con descripciones
   - **Skills**: Habilidades técnicas con rating
   - **Certifications**: Certificaciones académicas
   - **Contact**: Links de contacto y redes sociales
   
   ## Características Implementadas
   - ✅ SPA con navegación suave
   - ✅ Reproductor de audio personalizado
   - ✅ Efectos visuales: hover, scroll, transiciones
   - ✅ Responsive design (mobile, tablet, desktop)
   - ✅ CV descargable en PDF
   - ✅ Paleta de colores personalizada
   - ✅ Animaciones sutiles con Framer Motion
   
   ## Dificultades Encontradas
   [Detallar problemas técnicos, soluciones aplicadas, learning outcomes]
   
   ## Conclusiones y Aprendizajes
   [Reflexión sobre el desarrollo, competencias fortalecidas, mejoras futuras]
   
   ## Cómo Ejecutar Localmente
   ```bash
   npm install
   npm start
   ```
   
   ## Autor
   Jullians Mauricio Amado Gutierrez
   Estudiante de Ingeniería de Software
   Universidad Manuela Beltrán
   ```

---

## 🚀 INSTRUCCIÓN FINAL

Desarrolla un portafolio web moderno, minimalista y visualmente atractivo siguiendo EXACTAMENTE estas especificaciones. El resultado debe ser una SPA en React + Tailwind CSS que demuestre habilidades de desarrollo web, con atención especial a:

1. **UX/UI** - Diseño elegante y minimalista
2. **Animaciones** - Suaves y profesionales
3. **Integración de Audio** - Reproductor funcional y elegante (REQUERIMIENTO ACADÉMICO)
4. **Responsividad** - Perfecto en todos los dispositivos
5. **Código limpio** - Organizado y comentado para evaluación académica

El sitio debe funcionar sin necesidad de backend, usando solo archivos estáticos. Incluir toda la documentación académica requerida para la evaluación.

**¡Adelante con la creación! 🎯**
