let navToggle = document.querySelector(".navbar-toggler");
let bars = document.querySelectorAll(".bar");
const navLinks = document.querySelectorAll("nav .nav-link");
const navbar = document.getElementById("navbar");

navToggle.addEventListener("click", function (e) {
  e.preventDefault();
  navToggle.classList.toggle("close");
});

/*------------------Nav Menu Activation------------ */

navLinks.forEach((link, index) => {
    if (
      link.href.includes("#") ||
      activePage === "/" ||
      activePage === "/index.html"
    ) {
      navLinks[0].classList.add("active");
    } else if (link.href.includes(`${activePage}`)) {
      link.classList.add("active");
      navLinks[0].classList.remove("active");
    }
  });

/*------------------Nav Style Change on Scroll------------ */

function navScrollFunction() {
    if (document.documentElement.scrollTop > 0) {
      navbar.classList.add("scroll-change");
    } else {
      navbar.classList.remove("scroll-change");
    }
  }
  document.addEventListener("scroll", () => {
    navScrollFunction();
  });
