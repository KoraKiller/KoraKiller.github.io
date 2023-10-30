const navtoggle = document.querySelector(".nav-toggle");
const navigation = document.querySelector(".navigation");

navtoggle.addEventListener("click", () => {
  navigation.classList.toggle("navigation_visible");

  if (navMenu.classList.contains("navigation_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});