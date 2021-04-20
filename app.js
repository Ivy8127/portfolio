const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector('.nav-list');
const Links = document.querySelectorAll('.nav-list li');

hamburger.addEventListener('click',()=>{
    navLinks.classList.toggle('open')
    hamburger.classList.toggle('is-active')

})