const navAboutPage = document.getElementById("about-pg-nav");
const subMenuAboutPage = document.getElementById("about-sub-menu");

subMenuAboutPage.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
 
function navBackgroundFadein() {
    const navAboutPageOpacityMax = "rgba(241, 158, 57, 0.9)";
    const value = window.scrollY;
    const rgbaOpacityValue = value * 0.002;

    if (navAboutPage.style.backgroundColor !== navAboutPageOpacityMax  || rgbaOpacityValue < navAboutPageOpacityMax) {
        subMenuAboutPage.style.backgroundColor = "rgba(241, 158, 57, " + rgbaOpacityValue + ")";
        navAboutPage.style.backgroundColor = "rgba(241, 158, 57, " + rgbaOpacityValue + ")";
    }
}

// function navBackgroundFadein() {
//     const navAboutPageOpacityMax = "rgba(241, 158, 57, 0.9)";
//     const value = window.scrollY;
//     const rgbaOpacityValue = value * 0.002;
//     const navBackgroundColor = navAboutPage.style.backgroundColor;
//     let navBackgroundOpacity = navBackgroundColor.substr(19);
//     navBackgroundOpacity = navBackgroundOpacity.slice(0, -1);

//     // if (navAboutPage.style.backgroundColor !== navAboutPageOpacityMax  && 
//     if (navBackgroundOpacity <= 0.9) {
//         subMenuAboutPage.style.backgroundColor = "rgba(241, 158, 57, " + rgbaOpacityValue + ")";
//         navAboutPage.style.backgroundColor = "rgba(241, 158, 57, " + rgbaOpacityValue + ")";
//     } 

//     console.log(navBackgroundColor);
//     console.log(navBackgroundOpacity);
// }


window.addEventListener("scroll", navBackgroundFadein);
