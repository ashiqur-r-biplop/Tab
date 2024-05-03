document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const slideWidth = slides[0].clientWidth;
  const textContainers = document.querySelectorAll(".text-container");

  let counter = 0;
  let isHovering = false;
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
    if (!isHovering) {
      nextSlide();
    }
  }

  // Start auto sliding
  function startAutoSlide() {
    autoSlideInterval = setInterval(autoSlide, 6000);
  }

  startAutoSlide(); // Start auto sliding initially

  // Pause auto sliding on hover
  slider.addEventListener("mouseover", () => {
    isHovering = true;
    clearInterval(autoSlideInterval);
  });

  slider.addEventListener("mouseout", () => {
    isHovering = false;
    startAutoSlide();
  });

  // Next button click event
  nextBtn.addEventListener("click", () => {
    nextSlide();
    if (counter === slides.length - 1) {
      clearInterval(autoSlideInterval);
      startAutoSlide(); // Start auto sliding after reaching last slide
    }
  });

  // Prev button click event
  prevBtn.addEventListener("click", () => {
    prevSlide();
  });

  // Dragging functionality
  let startX;
  let dragLength;

  slider.addEventListener("mousedown", (e) => {
    startX = e.clientX;
    slider.addEventListener("mousemove", mousemoveHandler);
  });

  slider.addEventListener("mouseup", (e) => {
    slider.removeEventListener("mousemove", mousemoveHandler);
    if (dragLength < -50) {
      nextSlide();
      if (counter === slides.length - 1) {
        clearInterval(autoSlideInterval);
        startAutoSlide();
      }
    } else if (dragLength > 50) {
      prevSlide();
    }
  });

  function mousemoveHandler(e) {
    dragLength = e.clientX - startX;
  }

  // Next slide function
  function nextSlide() {
    counter++;
    if (counter >= slides.length) {
      counter = 0;
    }
    slider.style.transform = `translateX(-${counter * slideWidth}px)`;
    animateText();
  }

  // Prev slide function
  function prevSlide() {
    counter--;
    if (counter < 0) {
      counter = slides.length - 1;
    }
    slider.style.transform = `translateX(-${counter * slideWidth}px)`;
    animateText();
  }

  // Add auto slide functionality to prev button
  setInterval(() => {
    if (!isHovering) {
      prevSlide();
    }
  }, 6000);
  setTimeout(() => {
    animateText();
  }, 300);
});
