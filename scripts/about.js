const navAboutPage = document.getElementById("about-pg-nav");
const subMenuAboutPage = document.getElementById("about-sub-menu");

subMenuAboutPage.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
 
if (window.scrollY) {
    navBackgroundFadein();
}

function navBackgroundFadein() {
    const navAboutPageOpacityMax = "rgba(241, 158, 57, 0.9)";
    const value = window.scrollY;
    const rgbaOpacityValue = value * 0.002;

    if (navAboutPage.style.backgroundColor !== navAboutPageOpacityMax  || rgbaOpacityValue < navAboutPageOpacityMax) {
        subMenuAboutPage.style.backgroundColor = "rgba(241, 158, 57, " + rgbaOpacityValue + ")";
        navAboutPage.style.backgroundColor = "rgba(241, 158, 57, " + rgbaOpacityValue + ")";
    }

    if (window.scrollY < 10) {
        subMenuAboutPage.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    }
}


window.addEventListener("scroll", navBackgroundFadein);
