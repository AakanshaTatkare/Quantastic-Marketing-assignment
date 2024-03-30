const slider = document.querySelector(".slider");
const slides = document.querySelector(".slides");

let isTransitioning = false;

function slide() {
  if (isTransitioning) return;
  isTransitioning = true;

  const firstSlide = slides.children[0];
  slides.style.transition = "transform 0.5s ease";
  slides.style.transform = "translateX(-100%)";

  setTimeout(() => {
    slides.appendChild(firstSlide);
    slides.style.transition = "none";
    slides.style.transform = "translateX(0)";
    isTransitioning = false;
  }, 500);
}

setInterval(slide, 3000);

let slideIndexCustom = 0;
const slidesCustom = document.querySelectorAll(".slide-custom");

function showSlidesCustom() {
  slideIndexCustom++;
  if (slideIndexCustom >= slidesCustom.length - 2) {
    slideIndexCustom = 0;
  }
  const translateValue = -slideIndexCustom * (100 / slidesCustom.length);
  document.querySelector(
    ".slider-custom"
  ).style.transform = `translateX(${translateValue}%)`;
  setTimeout(showSlidesCustom, 3000);
}

showSlidesCustom();
