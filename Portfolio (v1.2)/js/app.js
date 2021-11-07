function loaded() {
  let load = document.querySelector('.load');
  load.classList.add('loaded');
  document.body.style.overflow = 'auto'
}

function navOpen() {
  let burger = document.querySelector('.nav__burger'),
  navMenu = document.querySelector('.nav__menu'),
  burgerCheck = document.querySelector('.nav__burger__check');

  burger.classList.remove('nav__burgerClose')

  burger.classList.add('nav__burgerOpen');
  navMenu.classList.add('nav__menuOpen');
  burgerCheck.checked = true;
  document.body.style.overflow = 'hidden'
}

function navClose() {
  let burger = document.querySelector('.nav__burger'),
  navMenu = document.querySelector('.nav__menu'),
  burgerCheck = document.querySelector('.nav__burger__check');

  burger.classList.remove('nav__burgerOpen');

  burger.classList.add('nav__burgerClose');
  navMenu.classList.remove('nav__menuOpen');
  burgerCheck.checked = false;
  document.body.style.overflow = 'auto'
}

function navToggle() {
  let burgerCheck = document.querySelector('.nav__burger__check')

  if (!burgerCheck.checked) {
    navOpen()
  } else {
    navClose()
  }
}

let burger = document.querySelector('.nav__burger');

burger.addEventListener('click', navToggle);

window.addEventListener('load', loaded)