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