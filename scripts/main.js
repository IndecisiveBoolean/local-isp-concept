const bodyListener = document.querySelector("body");

function elementCheck(event) { //checks for the element that was clicked.
  let hamburgerMenu = document.querySelector(".hamburger");
  let mobileMenu = document.querySelector(".nav-bar-container");
  if (event.target != hamburgerMenu && hamburgerMenu.classList.contains("is-active")) {
    hamburgerMenu.classList.remove("is-active");
    mobileMenu.classList.remove("open");
    mobileMenu.classList.add("closed");
  }
  if (event.target === hamburgerMenu) {
    if (hamburgerMenu.classList.contains("is-active")) {
      hamburgerMenu.classList.remove("is-active");
      mobileMenu.classList.remove("open");
      mobileMenu.classList.add("closed");
    } else {
      mobileMenu.classList.remove("closed");
      hamburgerMenu.classList.add("is-active");
      mobileMenu.classList.add("open");
    }
  }
  console.log(event.target);
}

function handleLogoChange(status) { //changes the logo used for larger or small display sizes.
  let telemediaLogo = document.querySelector(".logo");
  let hamburgerMenu = document.querySelector(".hamburger");
  let mobileMenu = document.querySelector(".nav-bar-container");
  if (status === true) {
    telemediaLogo.setAttribute('src', "../images/logos/Telemedia_Logo_black.png")
    hamburgerMenu.classList.remove("hidden");
    mobileMenu.classList.add("closed");
  } else {
    telemediaLogo.setAttribute('src', "../images/logos/Telemedia_Logo_White.png")
    hamburgerMenu.classList.add("hidden");
    mobileMenu.classList.remove("closed");
    mobileMenu.classList.remove("open");
  }
}

window.onresize = () => { //watches browser width to call handleLogoChange when logo should be swapped. 
  if (window.innerWidth <= 908) {
    handleLogoChange(true);
  } else {
    handleLogoChange(false);
  };
};

window.onload = () => { //sets various element attributes to the appropriate values on page load.
  let telemediaLogo = document.querySelector(".logo");
  let hamburgerMenu = document.querySelector(".hamburger");
  let mobileMenu = document.querySelector(".nav-bar-container");
  if (window.innerWidth <= 908) {
    telemediaLogo.setAttribute('src', "./images/logos/Telemedia_Logo_black.png") //sets the black telemedia logo for smaller screens on page load.
    hamburgerMenu.classList.remove("hidden"); //removes the hidden class so that the hamburger menu displays on page load if mobile size.
    mobileMenu.classList.add("closed"); //automaticall sets nav menu to closed.
  } else {
    mobileMenu.classList.remove("closed");
  }
};

bodyListener.addEventListener('click', elementCheck);
particlesJS.load('particles-js', 'particles.js-master/particles_config/particles.json', function () { //loads animated particles background and json config file.
  console.log('callback - particles.js config loaded');
});