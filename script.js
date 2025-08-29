document.addEventListener("DOMContentLoaded", () => {
  // --- Video Player Functionality ---
  const videoContainer = document.querySelector(".video-container");
  const video = document.getElementById("promo-video");
  const playButton = document.getElementById("play-button");

  if (videoContainer) {
    videoContainer.addEventListener("click", () => {
      if (video.paused) {
        video.play();
        videoContainer.classList.add("playing");
      } else {
        video.pause();
        videoContainer.classList.remove("playing");
      }
    });
  }

  // --- Testimonial Slider Functionality ---
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  let currentSlide = 0;
  let slideInterval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      dots[i].classList.remove("active");
    });
    slides[index].classList.add("active");
    dots[index].classList.add("active");
    currentSlide = index;
  }

  function nextSlide() {
    let newIndex = (currentSlide + 1) % slides.length;
    showSlide(newIndex);
  }

  if (slides.length > 0) {
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        showSlide(index);
        // Reset interval on manual click
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
      });
    });

    // The testimonial should automatically slide from left to right at 5 seconds interval
    slideInterval = setInterval(nextSlide, 5000);
    showSlide(0); // Show the initial slide
  }

  // --- Contact Form Modal Functionality ---
  const contactForm = document.getElementById("contact-form");
  const modal = document.getElementById("success-modal");
  const closeButton = document.querySelector(".close-button");
  const body = document.body;

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent actual form submission

      // On clicking the "Send" in Contact Form icon, a modal should open
      modal.style.display = "block";

      // When any modal is open, the HTML body should not be scrollable
      body.classList.add("no-scroll");
    });
  }

  function closeModal() {
    modal.style.display = "none";
    body.classList.remove("no-scroll");
  }

  if (closeButton) {
    closeButton.addEventListener("click", closeModal);
  }

  // Also close modal if user clicks outside the modal content
  window.addEventListener("click", (e) => {
    if (e.target == modal) {
      closeModal();
    }
  });
});
