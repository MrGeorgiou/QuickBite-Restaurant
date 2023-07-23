//PAGE LOADING
const page = document.querySelector("body");
page.style.display = "none";

function displayPage() {
    page.style.display = "block";
}

document.addEventListener("DOMContentLoaded", displayPage);


//PAGE JUMP/FIXED NAV BAR PROBLEM - FIX 
function fixPagePosition() {
    window.scrollBy(0, -150);
}

window.addEventListener("hashchange", fixPagePosition)

function onLoad() {
    if(window.location.hash) {
        fixPagePosition();
    }
}

window.onload = onLoad 


//NAVIGATION MENU
const navBar = document.querySelector("nav");
const navMenu = document.getElementById("nav-button-menu");
const navMenuExitButton = document.querySelector("#nav-menu-exit img");
const navMenulistElements = document.querySelectorAll("#nav-button-menu li");
const navButton = document.getElementById("nav-button");

const subMenuArrow = document.querySelector("#nav-button-menu li .sub-menu-title-wrapper img");
const subMenuList = document.querySelector("#nav-button-menu li .sub-menu");

let navMenuVisibility = false;
let subMenuVisibility = false;

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
    if(!subMenuArrow) {
    navMenulistElement.addEventListener("click", NavMenuOff);
    }
}

navButton.addEventListener("click", NavMenuOn);
navMenuExitButton.addEventListener("click", NavMenuOff);

function toggleSubMenu() { 
    if(!subMenuVisibility) {
        subMenuArrow.style.transform = "rotate(90deg)";
        subMenuList.style.display = "block";
        subMenuVisibility = true;
    } else {
        subMenuArrow.style.transform = "none";
        subMenuList.style.display = "none";
        subMenuVisibility = false;
    }
}

subMenuArrow.addEventListener("click", toggleSubMenu);


//COPY TO CLIPBOARD
const email = document.getElementById("email");

function copyToClipboard(event) {
    const elementToCopy = event.target.textContent;
    navigator.clipboard.writeText(elementToCopy);
    alert("Email address copied to clipboard!");
}

email.addEventListener("click", copyToClipboard);
