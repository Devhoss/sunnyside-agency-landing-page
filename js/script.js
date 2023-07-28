navToggle = document.querySelector(".menu-icon");
links = document.querySelector(".links");

navToggle.addEventListener("click", () => {
  links.classList.toggle("show-links");
});
