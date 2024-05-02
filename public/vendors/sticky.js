
// Mobile Menu
const menuToggler = document.querySelector('.menu-toggler');
const menuWrapper = document.querySelector('.menu-wrapper');

menuToggler.addEventListener('click', () => {
  menuWrapper.classList.toggle('show');
  document.body.classList.toggle('overflow-y-hidden');
  menuToggler.querySelector('.cross').classList.toggle('hidden');
  menuToggler.querySelector('.menu').classList.toggle('hidden');
});

// //===== close navbar-collapse when a  clicked
// document.querySelectorAll('.navbar li:not(.submenu-item) a').forEach((e) =>
//   e.addEventListener('click', () => {
//     menuWrapper.classList.toggle('show');
//     document.body.classList.toggle('overflow-y-hidden');
//     menuToggler.querySelector('.cross').classList.toggle('hidden');
//     menuToggler.querySelector('.menu').classList.toggle('hidden');
//   })
// );

 
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

 