const navAboutPage = document.getElementById("about-pg-nav");
const subMenuAboutPage = document.getElementById("about-sub-menu");
 
if (window.scrollY) {
    navBackgroundFadein();
}

function navBackgroundFadein() {
console.log(window.scrollY);
    if (window.scrollY < 1) {
        navAboutPage.style.backgroundColor = "transparent"
        subMenuAboutPage.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    } else {
        navAboutPage.style.backgroundColor = "rgba(241, 158, 57, 1)";
        subMenuAboutPage.style.backgroundColor = "rgba(241, 158, 57, 1)";
    }
}

window.addEventListener("scroll", navBackgroundFadein);



const greetingText = document.querySelector("div#text")
window.addEventListener("scroll", () => { highlightText(greetingText) });