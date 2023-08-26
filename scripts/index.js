//WELCOME TEXT HIGHLIGHT ON SCROLL
const welcomeText = document.querySelector(".welcome-text h1");

console.log(welcomeText);
window.addEventListener("scroll", () => { highlightText(welcomeText) });


// SCROLL BUTTON PROMPT
const downButton = document.getElementById("down-button")
const scrollPrompt = document.getElementById("scroll-prompt")
const downButtonContainer = document.querySelector(".button-container.down")

downButtonContainer.addEventListener("mouseenter", () => { displayPrompt(downButton, scrollPrompt) });
downButtonContainer.addEventListener("mouseleave", () => { resetButton(scrollPrompt, downButton) });

const sideButton = document.getElementById("side-button")
const continuePrompt = document.getElementById("continue-prompt")
const sideButtonContainer = document.querySelector(".button-container.side")

sideButtonContainer.addEventListener("mouseenter", () => { displayPrompt(sideButton, continuePrompt) });
sideButtonContainer.addEventListener("mouseleave", () => { resetButton(continuePrompt, sideButton) });
