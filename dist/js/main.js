/*
  -----------------------
    T Y P E W R I T E R
  -----------------------
*/

class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    };

    type() {
        // CURRENT WORD INDEX
        const current = this.wordIndex % this.words.length;
        // GET TEXT
        const fullTxt = this.words[current];

        // CHECK IF DELETING
        if (this.isDeleting) {
            // REMOVE CHARACTERS
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            // ADD CHARACTERS
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        // ADD TEXT TO ELEMEMT
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        // TYPING SPEED
        let typeSpeed = 300;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        // WORD COMPLETE
        if (!this.isDeleting && this.txt === fullTxt) {
            // PAUSE TYPING
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            // NEXT WORD
            this.wordIndex++;
            // PAUSE TYPING
            typeSpeed = 350;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
};


// LOAD TO DOM
document.addEventListener('DOMContentLoaded', init);

// START
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // CALL FUNCTION
    new TypeWriter(txtElement, words, wait);
};


/*
  -------------------
    M E N U   B A R
  -------------------
*/


// SELECT DOM ITEMS

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// BEGINNING MENU STATE

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);
menu.addEventListener('click', toggleMenu);
menuNav.addEventListener('click', toggleMenu);
menuBranding.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        // UPDATE MENU STATE
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        // UPDATE MENU STATE
        showMenu = false;
    }
}


/*
  -----------------------------
    S M O O T H   S C R O L L 
  -----------------------------
*/


$(document).ready(function () {

    var scrollLink = $('.scroll');

    // SMOOTH SCROLL
    scrollLink.click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 500);
    });

    // UPDATE CURRENT LINK
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {

            var sectionOffset = $(this.hash).offset().top - 20;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('current');
                $(this).parent().siblings().removeClass('current');
            }
        })
    })
})

/*
  -----------------------------
    S C R O L L   R E V E A L 
  -----------------------------
*/

window.sr = ScrollReveal();
sr.reveal('.job1', {
    duration: 2000,
    delay: 300,
    reset: true,
    useDelay: 'always',
    origin: 'bottom',
    distance: '30px'
})
sr.reveal('.job2', {
    duration: 2000,
    delay: 600,
    reset: true,
    useDelay: 'always',
    origin: 'bottom',
    distance: '30px'
})
sr.reveal('.job3', {
    duration: 2000,
    delay: 900,
    reset: true,
    useDelay: 'always',
    origin: 'bottom',
    distance: '30px'
})
sr.reveal('.phone', {
    duration: 2000,
    delay: 300,
    reset: true,
    useDelay: 'always',
    origin: 'bottom',
    distance: '30px'
})
sr.reveal('.email', {
    duration: 2000,
    delay: 700,
    reset: true,
    useDelay: 'always',
    origin: 'bottom',
    distance: '30px'
})