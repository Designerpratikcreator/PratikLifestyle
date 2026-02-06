document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");
  const modal = document.getElementById("enquiryModal");
  const openBtn = document.getElementById("openModal");
  const closeBtn = document.querySelector(".close-btn");

  // Theme Toggle
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeToggle.textContent =
      document.body.classList.contains("dark") ? "☀️" : "🌙";
  });

  // Modal Open
  openBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });

  // Modal Close
  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  // Close on outside click
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });
});
