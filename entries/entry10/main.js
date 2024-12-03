
let body = document.body;


function turnOnLight() {
  body.classList.toggle("light");
  button.classList.toggle("buttonOn");
  const newImage = document.createElement("img");
  newImage.src = "https://mystickermania.com/cdn/stickers/cute-cats/pizza-cat-512x512.png";
  newImage.alt = "Order Image";
  newImage.style.position = "fixed";
  newImage.style.top = "50%";
  newImage.style.left = "50%";
  newImage.style.transform = "translate(-50%, -50%)";
  newImage.style.zIndex = "1000";
  document.body.appendChild(newImage);
  
}

let button = document.querySelector(".button");
button.addEventListener("click", turnOnLight);

document.addEventListener("wancheng", () => {
  const mediaQuery = window.matchMedia("(max-width: 768px)");
  if (mediaQuery.matches) {
    document.querySelector(".hamburger").style.width = "90%";
    document.querySelector(".hamburger").style.height = "auto";
    document.querySelector("h1").style.fontSize = "32px";
  }
  if (orderButton) {
    orderButton.style.position = "relative";
    orderButton.style.top = "20px";
    orderButton.style.marginTop = "20px";
    orderButton.style.left = "20px"; 

}
});

