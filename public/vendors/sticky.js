
(function () {
  'use strict';

  // ======= Sticky
  window.onscroll = function () {
    const ud_header = document.querySelector('header');
    const sticky = ud_header.offsetTop;

    if (window.pageYOffset > sticky) {
      ud_header.classList.add('sticky');
    } else {
      ud_header.classList.remove('sticky');
    }

    // show or hide the back-top-top button
    const backToTop = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      backToTop.style.display = 'flex';
    } else {
      backToTop.style.display = 'none';
    }
  };
});

// Mobile Menu
const menuToggler = document.querySelector('.menu-toggler');
const menuWrapper = document.querySelector('.menu-wrapper');

menuToggler.addEventListener('click', () => {
  menuWrapper.classList.toggle('show');
  document.body.classList.toggle('overflow-y-hidden');
  menuToggler.querySelector('.cross').classList.toggle('hidden');
  menuToggler.querySelector('.menu').classList.toggle('hidden');
});

//===== close navbar-collapse when a  clicked
document.querySelectorAll('.navbar li:not(.submenu-item) a').forEach((e) =>
  e.addEventListener('click', () => {
    menuWrapper.classList.toggle('show');
    document.body.classList.toggle('overflow-y-hidden');
    menuToggler.querySelector('.cross').classList.toggle('hidden');
    menuToggler.querySelector('.menu').classList.toggle('hidden');
  })
);

 
// Sub-menu
const submenuItems = document.querySelectorAll('.submenu-item');
submenuItems.forEach((el) => {
  const submenuLink = el.querySelector('a');
  if (submenuLink) {
    submenuLink.addEventListener('click', () => {
      submenuLink.classList.toggle('active');
      const submenu = el.querySelector('.submenu');
      if (submenu) {
        submenu.classList.toggle('hidden');
      }
    });
  }
});

 