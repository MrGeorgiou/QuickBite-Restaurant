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