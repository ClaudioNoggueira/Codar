// MOBILE NAVIGATION
const mobileButtonEl = document.querySelector(".mobile-nav-button");
mobileButtonEl.addEventListener(`click`, function () {
  const headerEl = document.querySelector(`header`);
  headerEl.classList.toggle(`nav-open`);
});
