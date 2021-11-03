window.onload = function () {
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

  // START SCROLL TO TOP BUTTON
  let span = document.querySelector(".up");
  window.onscroll = () => {
    if (scrollY >= 700) {
      span.classList.add("active");
    } else {
      span.classList.remove("active");
    }
  };
  span.onclick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // END SCROLL TO TOP BUTTON
}