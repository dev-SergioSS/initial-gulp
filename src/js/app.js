//^ mobileMenu

const btnMenu = document.querySelector('.header__btn-menu');
const menuContent = document.querySelector('.header__content');
const menuLink = document.querySelectorAll('.menu__link');

if (btnMenu != null) {
  btnMenu.addEventListener('click', function () {
    btnMenu.classList.toggle('open');
    menuContent.classList.toggle('open');
    lockBody('lock');
  });
}

for (link of menuLink) {
  link.addEventListener('click', () => {
    btnMenu.classList.remove('open');
    menuContent.classList.remove('open');
    lockBody('unlock');
  });
}

// function need for 1)mobile menu 2) popup
function lockBody(action) {
  const body = document.querySelector('body');

  if (action == 'lock') {
    body.classList.toggle('lock');
  } else if (action == 'unlock') {
    body.classList.remove('lock');
  }
}
