// Scroll Animation for All Contents
const animatedElements = document.querySelectorAll(".scroll-animation");

window.addEventListener("scroll", () => {
  const triggerHeight = window.innerHeight * 0.8; // Trigger when 80% of the viewport height is reached

  animatedElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;

    // Add animation when element comes into view
    if (elementTop < triggerHeight && elementBottom > 0) {
      element.classList.add("visible");
    } else {
      // Remove animation when element leaves the viewport
      element.classList.remove("visible");
    }
  });
});

// Dark/Light Mode Toggle
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  themeToggle.textContent = body.classList.contains("light-mode") ? "🌞" : "🌙";
});

// Back-to-Top Button Functionality
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Navbar Scroll Behavior
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) { // Trigger after scrolling 100px
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});