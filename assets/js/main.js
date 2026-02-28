 /*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('navMenu'),
      navToggle = document.getElementById('navToggle'),
      navClose = document.getElementById('navClose');

//   Menu
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show_menu');
    })
}

// Menu Hidden
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show_menu');
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav_link');

const linkAction = () => {
    const navMenu = document.getElementById('navMenu');
    //When we click on each navLink we remove the show_menu element
    navMenu.classList.remove('show_menu');
}
navLink.forEach((n) => {
    n.addEventListener('click', linkAction);
})

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById('header');
    //Add a class if the bottom offset is greater than 50 of the viewport
    window.scrollY >= 50 ? header.classList.add('shadow_header')
                       : header.classList.remove('shadow_header')
}
window.addEventListener('scroll' , shadowHeader);
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUpE1 = document.getElementById('scroll-up');
    if(window.scrollY > 350){
        scrollUpE1.classList.add('show-scroll')
    }
    else{
        scrollUpE1.classList.remove('show-scroll')
    }
};
window.addEventListener('scroll', scrollUp);
console.log(window.scrollY);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector('.nav_menu a[href*= '+ sectionId +']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
    });
}
window.addEventListener('scroll', scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 300,
})

sr.reveal(`.home_data, .about_data, .footer_container`)
sr.reveal(`.home_images`, {delay: 1000})
sr.reveal(`.home_dam-1`, {delay: 1000, scale: 0, rotate: {z:45}})
sr.reveal(`.home_dam-2, .home_dam-3`, {delay: 1400, scale: 0, rotate: {z:45}})
sr.reveal(`.home_dam-4`,  {delay: 1700, scale: 0, rotate: {z:45}})
sr.reveal(`.home_dam-5`,  {delay: 1800, scale: 0, rotate: {z:45}})
sr.reveal(`.about_img-1`,  {delay: 600, origin: 'right'})
sr.reveal(`.about_img-2`,  {delay: 800, origin: 'left'})
sr.reveal(`.about_tootltip-1`,  {delay: 1600, origin: 'left'})
sr.reveal(`.about_tootltip-2`,  {delay: 1800, origin: 'right'})
sr.reveal(`.order_card:nth-child(1)`,  {origin: 'right'})
sr.reveal(`.order_card:nth-child(2)`,  { origin: 'left'})
sr.reveal(`.order_tootltip-1`,  {delay: 800, origin: 'right'})
sr.reveal(`.order_tootltip-2`,  {delay: 800, origin: 'left'})
sr.reveal(`.combo_titles`,  {origin: 'bottom'})
sr.reveal(`.combo_img`,  {delay: 1000})
sr.reveal(`.combo_data`,  {delay: 1600})
sr.reveal(`.combo_numbers`,  {delay: 1600, origin: 'bottom'})
sr.reveal(`.contact_data`,  { origin: 'right'})
sr.reveal(`.contact_info`,  {origin: 'left'})
sr.reveal(`.contact_img-1`,  {delay: 1000, distance:0, scale:0, rotate: {z:-45}})
sr.reveal(`.contact_img-2`,  {delay: 1200, distance:0, scale:0, rotate: {z:45}})
sr.reveal(`.contact_dam-1`,  {delay: 1400,scale:0, rotate: {z:45}})
sr.reveal(`.contact_dam-3`,  {delay: 1600,scale:0, rotate: {z:45}})
sr.reveal(`.contact_dam-2`,  {delay: 1800,scale:0, rotate: {z:45}})
sr.reveal(`.contact_dam-4`,  {delay: 2000,scale:0, rotate: {z:45}})