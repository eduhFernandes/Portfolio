// const myObserver = new IntersectionObserver((entries) => observerElement(entries))

// const elementsAnimation = document.querySelectorAll('.hidden')
// const elementsAnimationTitle = document.querySelectorAll('.hidden-title')

// elementsAnimation.forEach( element => {
//     myObserver.observe(element)
// })

// elementsAnimationTitle.forEach( element => {
//     myObserver.observe(element)
// })

// const observerElement = (entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('show')
//         } else {
//             entry.target.classList.remove('show')
//         }
//     })
// }

AOS.init();

const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.naveg-pag');
const menuLinks = document.querySelectorAll('.naveg-pag a');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.classList.toggle('menu-open');
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
    });
});

document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
});