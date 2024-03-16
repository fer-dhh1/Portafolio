// querySelector//
const btnOpen = document.querySelector('.btn--open')
const btnClose = document.querySelector('.btn--close')
const navMenu = document.querySelector('.nav__menu')

btnOpen.onclick = function () {
  navMenu.classList.toggle('show--menu')
}

btnClose.onclick = function () {
  navMenu.classList.remove('show--menu')
}

const links = document.querySelectorAll('.nav__link')
for (const link of links) {
  link.addEventListener('click', function () {
    navMenu.classList.remove('show--menu')
  })
}

//typescript mode//
var typed = new Typed('#typing', {
  strings: ["Hola, mi nombre es", "Hello, my name is", "Bonjour, je m'apelle"],
  typeSpeed: 65,
  loop: true,
  cursorChar: '|'
})

//Dark Mode//
function toggleDarkMode() {
  var body = document.body;
  body.classList.toggle("dark-mode");       
  var theme = body.classList.contains("dark-mode") ? "dark" : "light";
  localStorage.setItem("theme", theme);
}

var savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
}