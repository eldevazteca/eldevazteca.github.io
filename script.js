const translations = {
  es: {
    'page-title': 'eldevazteca — Edwin, desarrollador móvil',
    'logo': 'Dev Azteca',
    'download-cv': 'Descargar CV',
    'hero-title': 'Hola, soy Edwin',
    'hero-desc': 'Desarrollador de aplicaciones móviles y amante de la cultura <strong style="color: #607040;">Azteca</strong>.',
    'hero-btn': 'Ver Proyectos',
    'projects-title': 'Mis Proyectos',
    'proj-parking-title': 'Proyecto Parking',
    'proj-parking-desc': 'Esta es una app para escriotorio, donde se gestionan los espacios del estacionamiento, los cobros y el control del dinero generado.',
    'proj-access': 'Para ingresar, solicita el acceso mediante el formulario de contacto.',
    'proj-nomi-desc': 'Una app hecha para iOS, que te ayuda a gestionar tu dinero, ingresando ganancias y gastos, los cuales se muestran en gráficas.',
    'proj-abarrotech-desc': 'Esta es una app para escriotorio, es un punto de venta para una tienda de abarrotes típica en México. <br> En colaboración con <strong><a href="https://corvusstack.dev" class="colaboration">corvusstack</a></strong>',
    'proj-savelo-desc': 'Una aplicación que está en busca de ofertas de tiendas departamentales que ofrezcan a un costo más bajo sus productos proximos a caducar. <br> En colaboración con <strong><a href="https://corvusstack.dev" class="colaboration">corvusstack</a></strong>',
    'about-title': '¿Quién es el Dev Azteca?',
    'about-desc': 'Soy un estudiante de último semestre de Ingeniería en Electrónica y Computación en el Centro Universitario de los Valles (CUValles) de la Universidad de Guadajalara, sobre todo soy un desarrollador apasionado por las aplicaciones móviles. Estoy formándome como desarrollador nativo utilizando <strong>Swift</strong> para apps <strong>iOS</strong> y <strong>Kotlin</strong> para <strong>Android</strong> que a su vez, utilizo <strong>KMP</strong> para el desarrollo de apps de escritorio para puntos de venta. <br> Cuento con conocimientos en:',
    'contact-title': 'Contacto',
    'contact-name': 'Nombre',
    'contact-msg': 'Mensaje',
    'contact-btn': 'Enviar mensaje',
    'footer-text': '© 2026 Dev Azteca — Construido con estrés y café ☕️',
    'lang-label': 'EN',
  },
  en: {
    'page-title': 'eldevazteca — Edwin, mobile developer',
    'logo': 'Dev Azteca',
    'download-cv': 'Download CV',
    'hero-title': "Hi, I'm Edwin",
    'hero-desc': 'Mobile developer and lover of the <strong style="color: #607040;">Azteca</strong> culture.',
    'hero-btn': 'View Projects',
    'projects-title': 'My Projects',
    'proj-parking-title': 'Parking Project',
    'proj-parking-desc': 'This is a desktop app that manages parking spaces, charges, and the money generated.',
    'proj-access': 'To access, request entry through the contact form.',
    'proj-nomi-desc': 'An iOS app that helps you manage your money by tracking income and expenses, displayed in charts.',
    'proj-abarrotech-desc': 'This is a desktop app, a point of sale for a typical grocery store in Mexico. <br> In collaboration with <strong><a href="https://corvusstack.dev" class="colaboration">corvusstack</a></strong>',
    'proj-savelo-desc': 'An app that searches for deals at department stores offering lower prices on soon-to-expire products. <br> In collaboration with <strong><a href="https://corvusstack.dev" class="colaboration">corvusstack</a></strong>',
    'about-title': 'Who is the Dev Azteca?',
    'about-desc': 'I am a last-semester student of Electronics and Computer Engineering at the Centro Universitario de los Valles (CUValles) of the University of Guadalajara. Above all, I am a developer passionate about mobile applications. I am training as a native developer, using <strong>Swift</strong> for <strong>iOS</strong> apps and <strong>Kotlin</strong> for <strong>Android</strong>, and I also use <strong>KMP</strong> for desktop point-of-sale app development. <br> I have knowledge in:',
    'contact-title': 'Contact',
    'contact-name': 'Name',
    'contact-msg': 'Message',
    'contact-btn': 'Send message',
    'footer-text': '© 2026 Dev Azteca — Built with stress and coffee ☕️',
    'lang-label': 'ES',
  }
}

function applyLang(lang) {
  const t = translations[lang]

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n
    if (t[key] !== undefined) el.textContent = t[key]
  })

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml
    if (t[key] !== undefined) el.innerHTML = t[key]
  })

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder
    if (t[key] !== undefined) el.placeholder = t[key]
  })

  document.documentElement.lang = lang
  localStorage.setItem('lang', lang)
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang') || 'es'
  applyLang(savedLang)

  const toggleBtn = document.getElementById('langToggle')
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = document.documentElement.lang || 'es'
      applyLang(current === 'es' ? 'en' : 'es')
    })
  }

  const revealEls = document.querySelectorAll('section, .project, .skill')
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 }
  )

  revealEls.forEach(el => {
    el.classList.add('reveal')
    observer.observe(el)
  })
})
