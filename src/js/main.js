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

document.addEventListener('scroll', function () {
  console.log('scroll')

  let header = document.querySelector('header')
  if (window.scrollY > 250) header.classList.add('fixed-on')
  else header.classList.remove('fixed-on')
})
