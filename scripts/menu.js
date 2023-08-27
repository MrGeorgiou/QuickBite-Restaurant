const sideButton = document.getElementById("side-button")
const continuePrompt = document.getElementById("continue-prompt")
const sideButtonContainer = document.querySelector(".button-container.side")

sideButtonContainer.addEventListener("mouseenter", () => { displayPrompt(sideButton, continuePrompt) });
sideButtonContainer.addEventListener("mouseleave", () => { resetButton(continuePrompt, sideButton) });
