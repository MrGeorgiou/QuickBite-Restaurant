//NAVIGATION MENU
const navBar = document.querySelector("nav");
const navMenu = document.getElementById("nav-button-menu");
const navMenuExitButton = document.querySelector("#nav-menu-exit img");
const navMenulistElements = document.querySelectorAll("#nav-button-menu li");
const navButton = document.getElementById("nav-button");

let navMenuVisibility = false;

function NavMenuOn() {
    if (!navMenuVisibility) {
        navMenu.style.display = "block";
        navMenuVisibility = true;
    } 
}

function NavMenuOff() {
        navMenu.style.display = "none";
        navMenuVisibility = false;
}

for (const navMenulistElement of navMenulistElements) {
    navMenulistElement.addEventListener("click", NavMenuOff);
}

navButton.addEventListener("click", NavMenuOn);
navMenuExitButton.addEventListener("click", NavMenuOff);


//PARALLAX EFFECT
const middle = document.getElementById("middle");
const text = document.getElementById("text");
const scrollPrompt = document.getElementById("scroll-prompt")

function parallaxEffect() {
    let value = window.scrollY;
    scrollPrompt.textContent ="";
    middle.style.top = value * 0.4 + "px";
    text.style.top = value * 1.5 + "px";
}

window.addEventListener("scroll", parallaxEffect);