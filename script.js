window.onscroll = function() {stickyBar()};

const navbar = document.querySelector('.navbar');
let sticky = navbar.offsetTop;

function stickyBar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky')
    } else {
        navbar.classList.remove('sticky')
    }
}

function navigate(section) {
    let sectionToNav = document.getElementById(section)
    let currentSection = document.querySelector('.active')
    currentSection.classList.replace('active', 'inactive')
    sectionToNav.classList.replace('inactive', 'active')
}