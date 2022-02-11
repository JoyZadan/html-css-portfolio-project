// This code snippet was from FlorinPop's YouTube tutorial 
const hamburger = document.getElementById("hamburger");
const navbarUL = document.getElementById("navbar-ul");

hamburger.addEventListener("click", () => {
    navbarUL.classList.toggle("show");
});