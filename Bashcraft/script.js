const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const cards = document.querySelectorAll(".slider-card");
    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");
    
    let index = 0; // Current index of the card
  
    function updateSliderPosition() {
      const cardWidth = cards[0].clientWidth + 20; // Get card width + margin
      slider.style.transform = `translateX(-${index * cardWidth}px)`;
    }
  
    nextBtn.addEventListener("click", () => {
      index = (index + 1) % cards.length; // Loop back to start
      updateSliderPosition();
    });
  
    prevBtn.addEventListener("click", () => {
      index = (index - 1 + cards.length) % cards.length; // Loop back to end
      updateSliderPosition();
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const cards = document.querySelectorAll(".slider-card");
    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");
    
    let index = 0; // Current index of the card
  
    function updateSliderPosition() {
      const cardWidth = cards[0].clientWidth + 20; // Get card width + margin
      slider.style.transform = `translateX(-${index * cardWidth}px)`;
    }
  
    nextBtn.addEventListener("click", () => {
      index = (index + 1) % cards.length; // Loop back to start
      updateSliderPosition();
    });
  
    prevBtn.addEventListener("click", () => {
      index = (index - 1 + cards.length) % cards.length; // Loop back to end
      updateSliderPosition();
    });
  
    // Coming Soon Slider
    const comingSoonSlider = document.querySelector(".coming-soon-slider");
    const comingSoonCards = document.querySelectorAll(".coming-soon-card");
    const comingSoonNextBtn = document.querySelector(".coming-soon-next-btn");
    const comingSoonPrevBtn = document.querySelector(".coming-soon-prev-btn");
  
    let comingSoonIndex = 0; // Current index of the coming soon card
  
    function updateComingSoonSliderPosition() {
      const comingSoonCardWidth = comingSoonCards[0].clientWidth + 20; // Get card width + margin
      comingSoonSlider.style.transform = `translateX(-${comingSoonIndex * comingSoonCardWidth}px)`;
    }
  
    comingSoonNextBtn.addEventListener("click", () => {
      comingSoonIndex = (comingSoonIndex + 1) % comingSoonCards.length; // Loop back to start
      updateComingSoonSliderPosition();
    });
  
    comingSoonPrevBtn.addEventListener("click", () => {
      comingSoonIndex = (comingSoonIndex - 1 + comingSoonCards.length) % comingSoonCards.length; // Loop back to end
      updateComingSoonSliderPosition();
    });
  });
  // ++++++++++++++++++++++++++++++++++++++
  gsap.fromTo("#bashcraft-logo", 
    {
      opacity: 0, 
      scale: 0.5, 
      y: -100, 
    },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 2,
      ease: "power2.out",
      delay: 0.5
    }
  );
// +++++++++++++++++++++++++++++++++++++++++++++
  // Select the toggle button and navigation menu
const toggleButton = document.getElementById('nav-toggle');
const navElements = document.getElementById('nav-elements');

// Add event listener to the toggle button
toggleButton.addEventListener('click', () => {
  navElements.classList.toggle('active'); // Toggle the 'active' class to show/hide menu
});