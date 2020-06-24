var nav = document.querySelector('.navigation');
var cart = document.querySelector('.cart')
var icon = document.querySelector('.header-logo');
var searchMobile = document.querySelector('.searchBar');
console.log(searchMobile)

function openMenu () {
    console.log('clicked');
    mobileNav.classList.toggle('mobile-nav__active');
    hamburger.classList.toggle('is-active');
    searchMobile.classList.toggle('hide-animation');

}

var hamburger = document.querySelector('.hamburger');
var mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', openMenu);