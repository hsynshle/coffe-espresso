// * Html'den Javascript'e eleman Ã§ekme
const nav = document.querySelector("nav");
const menuBtn = document.querySelector("#menu-btn");

// menuBtn'e tÄ±klanÄ±nca nav elemanÄ±na class ekle Ã§Ä±kar

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});