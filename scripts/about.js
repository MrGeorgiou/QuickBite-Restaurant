const navAboutPage = document.getElementById("about-pg-nav");
const subMenuAboutPage = document.getElementById("about-sub-menu");
 
if (window.scrollY) {
    navBackgroundColor();
}

function navBackgroundColor() {
    if (window.scrollY < 1) {
        navAboutPage.style.backgroundColor = "transparent"
        subMenuAboutPage.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    } else {
        navAboutPage.style.backgroundColor = "rgba(241, 158, 57, 1)";
        subMenuAboutPage.style.backgroundColor = "rgba(241, 158, 57, 1)";
    }
}

window.addEventListener("scroll", navBackgroundColor);


//WELCOME TEXT HIGHLIGHT ON SCROLL
const greetingText = document.querySelector(".welcome-text#lake-text h1")
window.addEventListener("scroll", () => { highlightText(greetingText) });

// SCROLL BUTTON PROMPT
const downButton = document.getElementById("down-button")
const scrollPrompt = document.getElementById("scroll-prompt")
const downButtonContainer = document.querySelector(".down-button-container")

downButtonContainer.addEventListener("mouseenter", () => { displayPrompt(downButton, scrollPrompt) });
downButtonContainer.addEventListener("mouseleave", () => { resetButton(scrollPrompt, downButton) });
