document.addEventListener("DOMContentLoaded", () => {
	document.querySelector("#menu").addEventListener("click", () => {
	   document.querySelector("#hamburger").classList.toggle("open_side");
	   document.querySelector("#hamburger").classList.remove("open_top");
	});
 
	document.querySelector("#locations").addEventListener("click", () => {
	   document.querySelector("#hamburger").classList.toggle("open_top");
	   document.querySelector("#hamburger").classList.remove("open_side");
	});
 });
 