//WELCOME TEXT HIGHLIGHT ON SCROLL
const welcomeText = document.querySelector(".welcome-text h1");

console.log(welcomeText);
window.addEventListener("scroll", () => { highlightText(welcomeText) });


// SCROLL BUTTON PROMPT
const downButton = document.getElementById("down-button")
const scrollPrompt = document.getElementById("scroll-prompt")
const downButtonContainer = document.querySelector(".down-button-container")

downButtonContainer.addEventListener("mouseenter", () => { displayPrompt(downButton, scrollPrompt) });
downButtonContainer.addEventListener("mouseleave", () => { resetButton(scrollPrompt, downButton) });
