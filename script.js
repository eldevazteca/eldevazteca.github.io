document.addEventListener('DOMContentLoaded', () => {
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
