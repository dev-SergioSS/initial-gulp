// -- mobileMenu

const body = document.querySelector('html')
const header = document.querySelector('.header')
const btnsMenu = document.querySelectorAll('.header__btn-menu')
const menu = document.querySelector('.menu')
const menuLink = document.querySelectorAll('.menu__link')

btnsMenu.forEach((btn) =>
  btn.addEventListener('click', function () {
    if (!btn.classList.contains('open')) {
      popups.forEach((el) => el.classList.remove('open'))
    }

    btnsMenu.forEach((btn) => btn.classList.toggle('open'))
    menu.classList.toggle('open')
    body.classList.toggle('lock')
  })
)

for (link of menuLink) {
  link.addEventListener('click', () => {
    btnsMenu.forEach((btn) => btn.classList.remove('open'))
    menu.classList.remove('open')
    lockBodyScroll('unlock')
  })
}

function lockBodyScroll(action) {
  if (action == 'lock') body.classList.add('lock')
  else if (action == 'unlock') body.classList.remove('lock')
}

menuLink.forEach(function (link) {
  var linkText = link.innerText
  link.setAttribute('data-text', linkText)
})

// -- form

const formbtn = document.querySelector('.form button')
const inputs = document.querySelectorAll('.form input[required]')

formbtn.addEventListener('click', (e) => {
  console.log('kl')
  validateForm()
})

inputs.forEach((el) =>
  el.addEventListener('click', (e) => {
    e.target.classList.remove('error')
  })
)

function validateForm() {
  console.log(inputs)
  inputs.forEach(function (input) {
    if (input.value.trim() === '') {
      input.classList.add('error')
    } else {
      input.classList.remove('error')
    }
  })
}
