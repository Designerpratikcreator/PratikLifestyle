document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");
  const modal = document.getElementById("enquiryModal");
  const openBtn = document.getElementById("openModal");
  const closeBtn = document.querySelector(".close-btn");

  // --- Theme Toggle ---
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  });

  // --- Modal Logic ---
  openBtn.addEventListener("click", () => modal.classList.remove("hidden"));
  closeBtn.addEventListener("click", () => modal.classList.add("hidden"));
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.add("hidden");
  });

  // --- Multi-Image Slider Logic ---
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

    nextBtn.addEventListener("click", () => {
      index = (index + 1) % images.length;
      updateSlider();
    });

    prevBtn.addEventListener("click", () => {
      index = (index - 1 + images.length) % images.length;
      updateSlider();
    });
  });
});
