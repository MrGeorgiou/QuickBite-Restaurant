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
const subMenuListItems = document.querySelectorAll("#nav-button-menu li .sub-menu li");

let navMenuVisibility = false;
let subMenuVisibility = false;

function toggleNavMenu() {
    if (!navMenuVisibility) {
        navMenu.style.display = "block";
        navMenuVisibility = true;
    } else {
        navMenu.style.display = "none";
        navMenuVisibility = false;
        subMenuArrow.style.transform = "none";
        subMenuList.style.display = "none";
        subMenuVisibility = false;
    }
}

for (const navMenulistElement of navMenulistElements) {
    if(!subMenuArrow) {
    navMenulistElement.addEventListener("click", toggleNavMenu);
    }
}

navButton.addEventListener("click", toggleNavMenu);
navMenuExitButton.addEventListener("click", toggleNavMenu);

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

for (const subMenuListItem of subMenuListItems) {
    subMenuListItem.addEventListener("click", toggleNavMenu);
}

subMenuArrow.addEventListener("click", toggleSubMenu);