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

const thumbs = new Swiper(".intro__content-thumbs", {
  slidesPerView: 4,
  width: 500,
});

const slider = new Swiper(".intro__content-slider", {
  thumbsContainerClass: "intro__content-thumbs-wrapper",
  swiper: "intro__content-thumbs",
  multipleActiveThumbs: true,
  thumbs: { swiper: thumbs },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

slider.init();
