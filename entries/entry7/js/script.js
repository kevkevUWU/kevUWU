
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

document.querySelectorAll(".bun.top .seed").forEach(seed => {
  seed.addEventListener("click", () => {
    const seedName = seed.textContent.trim();
    let url = "";
    
    switch(seedName) {
      case "7th Street Burger":
        url = "https://7thstreetburger.com";
        break;
      case "Burgers on B":
        url = "https://burgersonb.com";
        break;
      case "Burger World":
        url = "https://burgerworldnyc.com/lander";
        break;
      case "Burgermania":
        url = "http://burgermanias.com";
        break;
      case "Smacking Burger":
        url = "https://www.smackingburger.com";
        break;
      case "PLNT Burger":
        url = "https://www.plntburger.com";
        break;
      case "Smash Burger":
        url = "https://smashburger.com";
        break;

    }
    if (url) {
      window.location.href = url;
    }
  });
  
});
document.querySelector(".menu_link.menu_1").addEventListener("click", () => {
  window.location.href = "https://kevkevuwu.github.io/kevUWU/entries/entry7/js/index2.html";
});

document.querySelector(".menu_link.menu_2").addEventListener("click", () => {
  window.location.href = "https://en.wikipedia.org/wiki/History_of_hamburgers";
});


document.querySelector(".menu_link.menu_4").addEventListener("click", () => {
  window.location.href = "https://www.breakfastideas.com";
});
