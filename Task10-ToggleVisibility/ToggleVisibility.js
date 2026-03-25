const btn = document.getElementById("toggle-btn");
const section = document.getElementById("content-section");

btn.addEventListener("click", () => {
    section.classList.toggle("hidden");
});