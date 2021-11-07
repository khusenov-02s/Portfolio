function navopen() {
  let burger = document.querySelector('.burger'),
    burgerCheck = document.querySelector('#burger__check1'),
    navMenu = document.querySelector('.nav__menu'),
    bg = document.querySelector('.bg');

  burger.classList.add('burgerOpen');
  burger.classList.remove('burgerClose');
  burgerCheck.checked = true;
  navMenu.classList.add('navOpen');
  bg.classList.add('bgOpen');
  bg.classList.remove('bgClose');
  document.body.style.overflow = 'hidden'
}

function navClose() {
  let burger = document.querySelector('.burger'),
    burgerCheck = document.querySelector('#burger__check1'),
    navMenu = document.querySelector('.nav__menu'),
    bg = document.querySelector('.bg');

  burger.classList.add('burgerClose')
  burger.classList.remove('burgerOpen')
  burgerCheck.checked = false;
  navMenu.classList.remove('navOpen');
  bg.classList.remove('bgOpen');
  bg.classList.add('bgClose');
  document.body.style.overflow = 'auto'
}

function navToggle() {
  let burgerCheck = document.querySelector('#burger__check1')

  if (!burgerCheck.checked) {
    navopen()
  } else {
    navClose()
  }
}

let burger = document.querySelector('.burger');

burger.addEventListener('click', navToggle)