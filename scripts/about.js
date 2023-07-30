const navAboutPage = document.getElementById("about-pg-nav");
const subMenuAboutPage = document.getElementById("about-sub-menu");

subMenuAboutPage.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
 console.log(navAboutPage);
function navBackgroundFadein() {
  
    
    console.log(window.scrollY)
    let value = window.scrollY;

    if (value > 200) {
        subMenuAboutPage.style.backgroundColor = "rgba(241, 158, 57, 0.9)";
        navAboutPage.style.backgroundColor = "rgba(241, 158, 57, 0.9)";
    } else if (value > 150) {
        subMenuAboutPage.style.backgroundColor = "rgba(241, 158, 57, 0.6)";
        navAboutPage.style.backgroundColor = "rgba(241, 158, 57, 0.6)";
    } else if (value > 100) {
        subMenuAboutPage.style.backgroundColor = "rgba(241, 158, 57, 0.3)";    
      navAboutPage.style.backgroundColor = "rgba(241, 158, 57, 0.3)";
    } else {
        subMenuAboutPage.style.backgroundColor = "rgba(0, 0, 0, 0.5)";;
        navAboutPage.style.backgroundColor = "transparent";
    }
    //     navAboutPage.style.backgroundColor = "rgba(241, 158, 57, 0)"
    // } 
    // } else if (value > 150) {
    //     navAboutPage.style.backgroundColor = "rgba(241, 158, 57, 0.7);"
    // } else {
    //     navAboutPage.style.backgroundColor = "rgba(241, 158, 57, 0.9);"
    // }
    
}

window.addEventListener("scroll", navBackgroundFadein);
