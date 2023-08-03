const navAboutPage = document.getElementById("about-pg-nav");
const subMenuAboutPage = document.getElementById("about-sub-menu");

subMenuAboutPage.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
 
function navBackgroundFadein() {
    const navAboutPageOpacityMax = "rgba(241, 158, 57, 0.9)";
    const value = window.scrollY;
    const rgbaOpacityValue = value * 0.001;

    if (navAboutPage.style.backgroundColor !== navAboutPageOpacityMax  || rgbaOpacityValue < navAboutPageOpacityMax) {
        subMenuAboutPage.style.backgroundColor = "rgba(241, 158, 57, " + rgbaOpacityValue + ")";
        navAboutPage.style.backgroundColor = "rgba(241, 158, 57, " + rgbaOpacityValue + ")";
    }
}

window.addEventListener("scroll", navBackgroundFadein);
