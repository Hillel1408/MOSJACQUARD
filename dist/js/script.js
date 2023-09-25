const btn = document.querySelector(".open-mobile-menu");
const header = document.querySelector(".header");
const close = document.querySelector(".close-mobile-menu");

btn.addEventListener("click", () => {
  header.classList.add("active");
  document.body.style.overflow = "hidden";
});
close.addEventListener("click", () => {
  header.classList.remove("active");
  document.body.style.overflow = "initial";
});

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
