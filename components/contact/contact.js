// __________________NAVIGATION____________________


const navBar = document.querySelector('nav');
const navButton = document.querySelector('.navButton');
const responsiveNav = document.querySelector('.responsiveNav');

const outClick = document.querySelector('.out');

const navLink = document.querySelector('.navLink');


navButton.addEventListener('click', () => {

    navBar.classList.toggle('active');
    responsiveNav.classList.toggle('responsiveActive');

});


navLink.addEventListener('click', () => {


    navBar.classList.remove('active');
    responsiveNav.classList.remove('responsiveActive');



})


outClick.addEventListener('click', () => {

    navBar.classList.remove('active');
    responsiveNav.classList.remove('responsiveActive');

})