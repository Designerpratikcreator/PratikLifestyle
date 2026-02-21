document.addEventListener("DOMContentLoaded", () => {
  // Theme Toggle
  const themeToggle = document.getElementById("themeToggle");
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  });

  // Slider Logic for each card
  const propertyCards = document.querySelectorAll(".property-card");

  propertyCards.forEach((card) => {
    const track = card.querySelector(".slider-track");
    const nextBtn = card.querySelector(".next");
    const prevBtn = card.querySelector(".prev");
    const images = track.querySelectorAll("img");
    let index = 0;

    const updateSlider = () => {
      track.style.transform = `translateX(-${index * 100}%)`;
    };

    nextBtn.addEventListener("click", (e) => {
      e.preventDefault();
      index = (index + 1) % images.length;
      updateSlider();
    });

    prevBtn.addEventListener("click", (e) => {
      e.preventDefault();
      index = (index - 1 + images.length) % images.length;
      updateSlider();
    });
  });

  // Simple Form Submission Handler
  const buyForm = document.querySelector(".buying-form");
  buyForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for your application! Our agent will contact you soon.");
    buyForm.reset();
  });
});
