const header = document.querySelector("header");
const headerLinks = document.querySelectorAll(".headerLink");
const burger = document.querySelector(".burgerMenu");
const mobileMenu = document.querySelector(".headerLinks");

let menuOpen = false;

window.addEventListener("scroll", function () {
  if (!menuOpen) {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }
});

burger.addEventListener("click", () => {
  menuOpen = !menuOpen;

  if (menuOpen) {
    burger.classList.add("active");
    header.style.backdropFilter = "none";
    burger.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    mobileMenu.classList.add("active");
    document.body.classList.add("menu-open");
    document.body.style.overflow = "hidden";
  } else {
    closeMenu();
  }
});

function closeMenu() {
  menuOpen = false;
  burger.classList.remove("active");
  burger.innerHTML = '<i class="fa-solid fa-bars"></i>';
  mobileMenu.classList.remove("active");
  document.body.classList.remove("menu-open");
  document.body.style.overflow = "visible";

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

headerLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});
