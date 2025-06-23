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
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    navbar.classList.add('show-upper-right');
    navbar.classList.remove('hide-on-scroll');
  } else if (window.scrollY > 10) {
    navbar.classList.remove('show-upper-right');
    navbar.classList.add('hide-on-scroll');
  } else {
    navbar.classList.remove('show-upper-right');
    navbar.classList.remove('hide-on-scroll');
  }
});

function getCoords(elem) {
  const rect = elem.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
    width: rect.width,
    height: rect.height
  };
}

const morphingPhoto = document.getElementById('morphing-photo');
const aboutImg = document.querySelector('.about-photo');

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val));
}

function updateMorphingPhoto() {
  aboutImg.style.visibility = 'visible';

  // Initial: fixed in upper right
  const initialWidth = 480;
  const initialHeight = 480;
  const initialLeft = window.innerWidth - initialWidth - 40; // 40px from right
  const initialTop = 40; // 40px from top

  const about = getCoords(aboutImg);

  // About image position relative to viewport
  const aboutLeft = about.left - window.scrollX;
  const aboutTop = about.top - window.scrollY;

  // The scroll range for morphing
  const start = 0;
  const end = about.top;
  const scroll = window.scrollY + window.innerHeight / 2;

  let t = (scroll - start) / (end - start);
  t = clamp(t, 0, 1);

  // Instantly set position, no animation
  morphingPhoto.style.left = lerp(initialLeft, aboutLeft, t) + 'px';
  morphingPhoto.style.top = lerp(initialTop, aboutTop, t) + 'px';
  morphingPhoto.style.width = lerp(initialWidth, about.width, t) + 'px';
  morphingPhoto.style.height = lerp(initialHeight, about.height, t) + 'px';

  if (t > 0.8) {
    morphingPhoto.style.border = '4px solid #00bcd4';
  } else {
    morphingPhoto.style.border = 'none';
  }

  aboutImg.style.visibility = 'hidden';
}

window.addEventListener('DOMContentLoaded', updateMorphingPhoto);
window.addEventListener('resize', updateMorphingPhoto);
window.addEventListener('scroll', updateMorphingPhoto);