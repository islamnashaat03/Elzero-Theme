window.onload = function(){
  let toggleBtn = document.querySelector(".toggle-btn");
  let navLinks = document.querySelector(".navbar__links");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

let animating = false;
let navButton = document.querySelector(".toggle-btn");

navButton.addEventListener("click", function () {
  if (!animating) {
    animating = true;
    this.classList.toggle("open");
    setTimeout(function () {
      animating = false;
    }, 300);
  }
});
}


