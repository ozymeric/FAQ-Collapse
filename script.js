const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      // this is the takeaway of this project.
      // targeting the parentNode for an event,
      // and how to add and remove a class by using toggle method.
      // the rest of this project is pure css.
        toggle.parentNode.classList.toggle('active')
    })
})
