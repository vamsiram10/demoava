const wrapperMenu = document.querySelector(".wrapper-menu");
const navLinks = document.querySelector(".nav-links");

wrapperMenu.addEventListener("click", function () {
  wrapperMenu.classList.toggle("open");
  navLinks.classList.toggle("active");
});

// Close mobile menu when clicking outside
document.addEventListener("click", function (event) {
  if (!wrapperMenu.contains(event.target) && !navLinks.contains(event.target)) {
    wrapperMenu.classList.remove("open");
    navLinks.classList.remove("active");
  }
});

// Handle dropdown menu in mobile view
const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
  const trigger = dropdown.querySelector(".dropdown-trigger");
  const content = dropdown.querySelector(".dropdown-content");

  trigger.addEventListener("click", function (e) {
    if (window.innerWidth <= 480) {
      e.preventDefault();
      content.style.display =
        content.style.display === "block" ? "none" : "block";
    }
  });
});
