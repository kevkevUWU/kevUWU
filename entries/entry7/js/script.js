
document.getElementById("menu").addEventListener("click", () => {
  const hamburger = document.getElementById("hamburger");
  hamburger.classList.toggle("open_side");
  hamburger.classList.remove("open_top");
});

document.getElementById("locations").addEventListener("click", () => {
  const hamburger = document.getElementById("hamburger");
  hamburger.classList.toggle("open_top");
  hamburger.classList.remove("open_side");
});
