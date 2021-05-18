"use strict";

const images = document.querySelectorAll("[data-image]");
const overlay = document.querySelector( "#overlay" );
const closePopup = document.querySelector( "[data-close]" );

const clearImage = () => {
    overlay.children[0].setAttribute("src", "");
}
images.forEach( img => {
    img.addEventListener('click', e => {
        overlay.classList.add("active");
        clearImage();
        overlay.children[0].setAttribute("src", e.target.getAttribute("src"));
    });
});

closePopup.addEventListener( 'click', () => {
    overlay.classList.remove('active' );
    clearImage();
});