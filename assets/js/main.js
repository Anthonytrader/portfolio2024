/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

/*===== DARK MODE OR LIGHT MODE =====*/
document.addEventListener('DOMContentLoaded', function() {
    // Obtener el botón del modo oscuro
    const darkModeBtn = document.getElementById('dark-mode-btn');
    // Obtener el botón del modo claro
    const lightModeBtn = document.getElementById('light-mode-btn');

    // Agregar un event listener al botón del modo oscuro
    darkModeBtn.addEventListener('click', function() {
        // Agregar la clase dark-mode al cuerpo del documento
        document.body.classList.add('dark-mode');
        // Remover la clase light-mode del cuerpo del documento
        document.body.classList.remove('light-mode');
    });

    // Agregar un event listener al botón del modo claro
    lightModeBtn.addEventListener('click', function() {
        // Agregar la clase light-mode al cuerpo del documento
        document.body.classList.add('light-mode');
        // Remover la clase dark-mode del cuerpo del documento
        document.body.classList.remove('dark-mode');
    });
});
/*===== Description card =====*/
function showDescription(card) {
    card.querySelector('.card_img img').style.opacity = '0.5'; // Hacer la imagen transparente
    card.querySelector('.card__description').style.visibility = 'visible'; // Mostrar la descripción
}

function hideDescription(card) {
    card.querySelector('.card_img img').style.opacity = '1'; // Restaurar la opacidad de la imagen
    card.querySelector('.card__description').style.visibility = 'hidden'; // Ocultar la descripción
}

/*===== TRANSLATE DOCUMENT=====*/
// Función para traducir a inglés
function translateToEnglish() {
    document.querySelectorAll('[data-es]').forEach(element => {
        element.innerText = element.dataset.en;
    });
}

// Función para traducir a español
function translateToSpanish() {
    document.querySelectorAll('[data-en]').forEach(element => {
        element.innerText = element.dataset.es;
    });
}
document.getElementById('translate-to-english').addEventListener('click', translateToEnglish);
document.getElementById('translate-to-spanish').addEventListener('click', translateToSpanish);




sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
