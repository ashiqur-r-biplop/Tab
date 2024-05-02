function animateText() {
  // Iterate over each text container
  textContainers.forEach((container, index) => {
    if (index === counter) {
      // Add animation class for text and buttons
      container.classList.add("animate");
      const heading = container.querySelector(".section-title");
      const subheading = container.querySelector("h3");
      const buttons = container.querySelector(".buttons");

      // Reset text and buttons positions
      heading.style.transform = "translateX(-100%)";
      heading.style.animation = "text 2s 1";
      subheading.style.transform = "translateY(-100%)";
      buttons.style.transform = "translateY(100%)";
   

      // Add animation effect using setTimeout to stagger the animations
      setTimeout(() => {
        heading.style.transform = "translateX(0)";
        heading.style.animation = "text 2s 1";
        subheading.style.transform = "translateY(0)";
        buttons.style.transform = "translateY(0)";
      }, 100);
    } else {
      // Remove animation class for other slides
      container.classList.remove("animate");
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const slideWidth = slides[0].clientWidth;
  const textContainers = document.querySelectorAll(".text-container");

  let counter = 0;
  let isHovering = false;

  // Auto loop
  let autoSlideInterval = setInterval(() => {
    if (!isHovering) {
      nextSlide();
    }
  }, 5000); // Change slide every 5 seconds

  // Pause on hover
  slider.addEventListener("mouseover", () => {
    isHovering = true;
    clearInterval(autoSlideInterval);
  });

  slider.addEventListener("mouseout", () => {
    isHovering = false;
    autoSlideInterval = setInterval(() => {
      if (!isHovering) {
        nextSlide();
      }
    }, 3000);
  });

  // Next button click event
  nextBtn.addEventListener("click", nextSlide);

  // Prev button click event
  prevBtn.addEventListener("click", prevSlide);

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
  animateText(); // Call animateText() after sliding
}

// Prev slide function
function prevSlide() {
  counter--;
  if (counter < 0) {
    counter = slides.length - 1;
  }
  slider.style.transform = `translateX(-${counter * slideWidth}px)`;
  animateText(); // Call animateText() after sliding
}


  // Text animation function
  function animateText() {
    textContainers.forEach((container, index) => {
      if (index === counter) {
        container.classList.add("animate");
      } else {
        container.classList.remove("animate");
      }
    });
  }
  setTimeout(() => {
    animateText();
  }, 300);
});
