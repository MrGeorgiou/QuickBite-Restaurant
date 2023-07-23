//PARALLAX EFFECT
const foreground = document.getElementById("foreground-2")
const middle = document.getElementById("middle");
const text = document.getElementById("text");
const scrollPrompt = document.getElementById("scroll-prompt");

function parallaxEffect() {
    let value = window.scrollY;
    scrollPrompt.textContent ="";
    foreground.style.top = value * 0.3 + "px";
    middle.style.top = value * 0.4 + "px";
    text.style.top = value * 1.2 + "px";
    text.style.opacity = 1 - (value / 150);
}

window.addEventListener("scroll", parallaxEffect);