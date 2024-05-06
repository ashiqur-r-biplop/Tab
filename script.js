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
// addressing Your Concerns js start
// JavaScript fallback for hover effect
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.querySelector(".card-content").style.transform = "rotateY(180deg)";
  });

  card.addEventListener("mouseleave", () => {
    card.querySelector(".card-content").style.transform = "rotateY(0deg)";
  });
});

// addressing Your Concerns js end
// tab js code
function handleTab(boxId, TabIndex) {
  const Tab = document.getElementById(TabIndex);
  const TabBox = document.getElementById(boxId);
  const activeTab = Tab?.id;
  console.log(Tab);
  if (activeTab == "tab-1" || TabIndex == "tab-1") {
    const tabIndexTwo = document.getElementById("tab-box-2");
    const tabIndexThree = document.getElementById("tab-box-3");
    const tabIndexFour = document.getElementById("tab-box-4");
    const tabIndexFive = document.getElementById("tab-box-5");
    tabIndexTwo.classList.remove("tab-box-active");
    tabIndexThree.classList.remove("tab-box-active");
    tabIndexFour.classList.remove("tab-box-active");
    tabIndexFive.classList.remove("tab-box-active");
    TabBox.classList.add("tab-box-active");
    // add tab active class
    const tabTwo = document.getElementById("tab-2");
    const tabThree = document.getElementById("tab-3");
    const tabFour = document.getElementById("tab-4");
    const tabFive = document.getElementById("tab-5");
    tabTwo.classList.remove("activeTab");
    tabThree.classList.remove("activeTab");
    tabFour.classList.remove("activeTab");
    tabFive.classList.remove("activeTab");
    Tab.classList.add("activeTab");
  } else if (activeTab == "tab-2") {
    const tabIndexOne = document.getElementById("tab-box-1");
    const tabIndexThree = document.getElementById("tab-box-3");
    const tabIndexFour = document.getElementById("tab-box-4");
    const tabIndexFive = document.getElementById("tab-box-5");
    tabIndexOne.classList.remove("tab-box-active");
    tabIndexThree.classList.remove("tab-box-active");
    tabIndexFour.classList.remove("tab-box-active");
    tabIndexFive.classList.remove("tab-box-active");
    TabBox.classList.add("tab-box-active");
    // add tab active class
    const tabOne = document.getElementById("tab-1");
    const tabThree = document.getElementById("tab-3");
    const tabFour = document.getElementById("tab-4");
    const tabFive = document.getElementById("tab-5");
    tabOne.classList.remove("activeTab");
    tabThree.classList.remove("activeTab");
    tabFour.classList.remove("activeTab");
    tabFive.classList.remove("activeTab");
    Tab.classList.add("activeTab");
  } else if (activeTab == "tab-3") {
    const tabIndexOne = document.getElementById("tab-box-1");
    const tabIndexTwo = document.getElementById("tab-box-2");
    const tabIndexFour = document.getElementById("tab-box-4");
    const tabIndexFive = document.getElementById("tab-box-5");
    tabIndexOne.classList.remove("tab-box-active");
    tabIndexTwo.classList.remove("tab-box-active");
    tabIndexFour.classList.remove("tab-box-active");
    tabIndexFive.classList.remove("tab-box-active");
    TabBox.classList.add("tab-box-active");
    // add tab active class
    const tabOne = document.getElementById("tab-1");
    const tabTwo = document.getElementById("tab-2");
    const tabFour = document.getElementById("tab-4");
    const tabFive = document.getElementById("tab-5");
    tabOne.classList.remove("activeTab");
    tabTwo.classList.remove("activeTab");
    tabFour.classList.remove("activeTab");
    tabFive.classList.remove("activeTab");
    Tab.classList.add("activeTab");
  } else if (activeTab == "tab-4") {
    const tabIndexOne = document.getElementById("tab-box-1");
    const tabIndexTwo = document.getElementById("tab-box-2");
    const tabIndexThree = document.getElementById("tab-box-3");
    const tabIndexFive = document.getElementById("tab-box-5");
    tabIndexOne.classList.remove("tab-box-active");
    tabIndexTwo.classList.remove("tab-box-active");
    tabIndexThree.classList.remove("tab-box-active");
    tabIndexFive.classList.remove("tab-box-active");
    TabBox.classList.add("tab-box-active");
    // add tab active class
    const tabOne = document.getElementById("tab-1");
    const tabTwo = document.getElementById("tab-2");
    const tabThree = document.getElementById("tab-3");
    const tabFive = document.getElementById("tab-5");
    tabOne.classList.remove("activeTab");
    tabTwo.classList.remove("activeTab");
    tabThree.classList.remove("activeTab");
    tabFive.classList.remove("activeTab");
    Tab.classList.add("activeTab");
  } else if (activeTab == "tab-5") {
    const tabIndexOne = document.getElementById("tab-box-1");
    const tabIndexTwo = document.getElementById("tab-box-2");
    const tabIndexThree = document.getElementById("tab-box-3");
    const tabIndexFour = document.getElementById("tab-box-4");
    tabIndexOne.classList.remove("tab-box-active");
    tabIndexTwo.classList.remove("tab-box-active");
    tabIndexThree.classList.remove("tab-box-active");
    tabIndexFour.classList.remove("tab-box-active");
    TabBox.classList.add("tab-box-active");
    // add tab active class
    const tabOne = document.getElementById("tab-1");
    const tabTwo = document.getElementById("tab-2");
    const tabThree = document.getElementById("tab-3");
    const tabFour = document.getElementById("tab-4");

    tabOne.classList.remove("activeTab");
    tabTwo.classList.remove("activeTab");
    tabThree.classList.remove("activeTab");
    tabFour.classList.remove("activeTab");
    Tab.classList.add("activeTab");
  }
}
handleTab("tab-box-1", "tab-1");
