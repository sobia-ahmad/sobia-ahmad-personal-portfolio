// Grabbing classes
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.main-navbar ul');
const navLinks = document.querySelectorAll('.main-navbar a');

allEventListeners();

// Functions of all event listeners
function allEventListeners() {
  // Toggle event
  navToggler.addEventListener('click', togglerClick);
  // Nav link event
  navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}