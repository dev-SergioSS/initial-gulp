// -- popups

const popups = document.querySelectorAll('.popup')
const openPopups = document.querySelectorAll('.button-popup')
const closePopups = document.querySelectorAll(
  '.popup__btn-close, .popup__overlay'
)

openPopups.forEach((button) => {
  button.addEventListener('click', function () {
    const popupId = this.getAttribute('data-popup')

    popups.forEach((popup) => {
      if (popup.id === popupId) {
        popup.classList.add('open')
      } else {
        popup.classList.remove('open')
      }
      lockBodyScroll('lock')
      console.log(1)
    })
  })
})

closePopups.forEach((button) => {
  button.addEventListener('click', function () {
    const popup = this.closest('.popup')
    popup.classList.remove('open')
    lockBodyScroll('unlock')
    console.log('close')
  })
})
