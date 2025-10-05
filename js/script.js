function toggleMenu() {
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

document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scroll effect for all links
    const allLinks = document.querySelectorAll('a[href^="#"]');

    allLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Add animations for sections when scrolling
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.details-container, article, .section__text, .btn-container');

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate-in');
            }
        });
    };

    // Run once on page load
    animateOnScroll();

    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);

    // Add hover effects for navigation links
    const navLinks = document.querySelectorAll('.nav-links li a');

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });

        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add interactive effects for tech stack items
    const techItems = document.querySelectorAll('article');

    techItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

const menuLinks = document.querySelectorAll('.menu-link');
const submenuLinks = document.querySelectorAll('.submenu-link');
