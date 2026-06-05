document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menu-toggle')
  const nav = document.getElementById('nav')

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open')
      toggle.setAttribute('aria-label', nav.classList.contains('open') ? 'Cerrar menú' : 'Abrir menú')
    })

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open')
        toggle.setAttribute('aria-label', 'Abrir menú')
      })
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
