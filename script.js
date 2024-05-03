document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const slideWidth = slides[0].clientWidth;
  const textContainers = document.querySelectorAll(".text-container");

  let counter = 0;
  let autoSlideInterval;

  // Function to animate text
  function animateText() {
    textContainers.forEach((container, index) => {
      if (index === counter) {
        container.classList.add("animate");
      } else {
        container.classList.remove("animate");
      }
    });
  }

  // Auto slide function
  function autoSlide() {
    nextSlide();
  }

  // Start auto sliding
  function startAutoSlide() {
    autoSlideInterval = setInterval(autoSlide, 6000);
  }

  startAutoSlide(); // Start auto sliding initially

  // Pause auto sliding on hover
  slider.addEventListener("mouseover", () => {
    clearInterval(autoSlideInterval);
  });

  slider.addEventListener("mouseout", () => {
    startAutoSlide();
  });

  // Next and Prev button click events
  nextBtn.addEventListener("click", () => {
    clearInterval(autoSlideInterval);
    nextSlide();
    startAutoSlide(); // Restart auto sliding after manual navigation
  });

  prevBtn.addEventListener("click", () => {
    clearInterval(autoSlideInterval);
    prevSlide();
    startAutoSlide(); // Restart auto sliding after manual navigation
  });

  // Next slide function
  function nextSlide() {
    counter = (counter + 1) % slides.length;
    slider.style.transform = `translateX(-${counter * slideWidth}px)`;
    animateText();
  }

  // Prev slide function
  function prevSlide() {
    counter = (counter - 1 + slides.length) % slides.length;
    slider.style.transform = `translateX(-${counter * slideWidth}px)`;
    animateText();
  }

  // Initialize text animation
  setTimeout(() => {
    animateText();
  }, 300);
});
