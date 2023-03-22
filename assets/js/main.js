/*MOBILE MENU*/
const menuBtn = document.querySelector('.navbar .menu-btn i');
const mobileMenu = document.querySelector('.navbar .nav_menu');
const menuItems = document.querySelectorAll('.navbar .nav_menu a');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    })
})
/*END OF MOBILE MENU*/


/*NAVBAR SHADOW & SCROLL TO TOP BTN*/
const navbar = document.querySelector('.navbar');
const scrollTopBtn = document.querySelector('.scroll-up-btn');

document.addEventListener('scroll', () => {
    let scrolled = window.scrollY;

    if(scrolled > 300) {
        navbar.classList.add('shadow');
        scrollTopBtn.classList.add('show');
    } else {
        navbar.classList.remove('shadow');
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
})
/*END OF NAVBAR SHADOW & SCROLL TO TOP BTN*/

/*FOOTER CURRENT YEAR AUTO UPDATE*/
const year = document.getElementById('year');

currentYear = new Date().getFullYear();
newYear = new Date(`january 01 ${currentYear+1} 00:00:00`);
year.innerHTML = currentYear;