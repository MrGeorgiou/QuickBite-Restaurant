// SCROLL BUTTON PROMPT
const downButton = document.getElementById("down-button")
const scrollPrompt = document.getElementById("scroll-prompt")
const downButtonContainer = document.getElementById("down-button-container")

function displayPrompt() {
    downButton.style.display = "none";
    scrollPrompt.style.display = "block";
}

function resetButton() {
    scrollPrompt.style.display = "none";
    downButton.style.display = "block";
}


console.log(downButtonContainer)
downButtonContainer.addEventListener("mouseenter", displayPrompt)
downButtonContainer.addEventListener("mouseleave", resetButton)


//WELCOME TEXT HIGHLIGHT ON SCROLL
const welcomeText = document.getElementById("text-and-button");
window.addEventListener("scroll", () => { highlightText(welcomeText) });