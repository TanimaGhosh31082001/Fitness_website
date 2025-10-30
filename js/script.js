// nav connection
const navbartoggler = document.querySelector(".navbar-toggler");
const navlinks = document.getElementById("nav-links");

let nav = false;

function myfunction() {
  if (nav == false) {
    navlinks.style.display = "block";
    nav = true;
  } else {
    navlinks.style.display = "none";
    nav = false;
  }
  console.log(nav);
}
navbartoggler.addEventListener("click", myfunction);

const trainerSwiper = new Swiper(".trainer-swiper", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: { slidesPerView: 1 },
    993: { slidesPerView: 2 },
    1400: { slidesPerView: 3 },
  },
});

const coachswiper = new Swiper(".coach-swiper", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: { slidesPerView: 1 },
    992: { slidesPerView: 2 },
    1400: { slidesPerView: 3 },
  },
});



