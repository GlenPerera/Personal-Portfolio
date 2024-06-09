document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const navbar = document.querySelector(".navbar");

  menuIcon.addEventListener("click", function () {
    navbar.classList.toggle("show");
  });
});

// Smooth scrolling function
function smoothScroll(target, duration) {
  var targetId = target.startsWith("#") ? target.slice(1) : target; // Remove '#' if present
  var targetElement = document.getElementById(targetId);
  if (!targetElement) return; // Exit if target element not found
  var targetPosition = targetElement.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var scrollAmount = easeInOutQuad(
      timeElapsed,
      startPosition,
      distance,
      duration
    );
    window.scrollTo(0, scrollAmount);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Create a success message element
  const successMessage = document.createElement("p");
  successMessage.classList.add("success-message"); // Add a CSS class for styling
  successMessage.textContent = "Your message has been sent!";

  // Get the form's parent element (usually the section)
  const formContainer = contactForm.parentElement;

  // Insert the success message after the form
  formContainer.insertBefore(successMessage, contactForm.nextSibling);

  // Optionally, clear the form after a short delay
  setTimeout(() => {
    contactForm.reset(); // Clear form fields
    successMessage.remove(); // Remove the success message after a while
  }, 3000); // Adjust delay in milliseconds (3 seconds here)
});

window.addEventListener("scroll", function () {
  var scrollToTopButton = document.getElementById("scrollToTop");

  // Show scroll-to-top button when user scrolls down
  if (window.scrollY > 100) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

// Scroll to top when the button is clicked
document.getElementById("scrollToTop").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scrolling
  });
});
