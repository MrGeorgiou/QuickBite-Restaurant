//PAGE LOADING
const page = document.querySelector("body");
page.style.display = "none";

function displayPage() {
    page.style.display = "block";
}

document.addEventListener("DOMContentLoaded", displayPage);


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

document.addEventListener("DOMContentLoaded", displayPage);


//COPY TO CLIPBOARD
const email = document.getElementById("email");

function copyToClipboard(event) {
    const elementToCopy = event.target.textContent;
    navigator.clipboard.writeText(elementToCopy);
    alert("Email address copied to clipboard!");
}

email.addEventListener("click", copyToClipboard);
