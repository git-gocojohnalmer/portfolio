function toggleMenu(){
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
} 

function toggleSubmenu(event) {
    const submenu = event.currentTarget.nextElementSibling;
    const icon = event.currentTarget.querySelector('.submenu-icon');
    submenu.classList.toggle('open');
    icon.classList.toggle('open');
}

const menuLinks = document.querySelectorAll('.menu-link');
const submenuLinks = document.querySelectorAll('.submenu-link');