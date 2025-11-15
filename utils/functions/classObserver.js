const ELEMENT = document.querySelector('el')

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.attributeName === 'class') {
      if (!ELEMENT.classList.contains('CLASS_NAME')) {
        // do something when CLASS_NAME is removed
      }
    }
  })
})

observer.observe(ELEMENT, {
  attributes: true,
  attributeFilter: ['class'],
})
