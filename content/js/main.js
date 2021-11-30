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

  // START SKILLS SCROLl
  let ourSkills = document.getElementById("ourSkills");
  let skills = document.querySelectorAll(".the-progress");
  let scrollIcon = document.querySelector(".up");
  let numbers = document.querySelectorAll(".number");
  let stats = document.querySelector(".awesome-stats");
  let started = false;

  window.onscroll = () => {
    if (scrollY >= 700) {
      // console.log('haaai', scrollY)
      scrollIcon.classList.add("active");
    } else {
      scrollIcon.classList.remove("active");
    }
    // };
    scrollIcon.onclick = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
    if (window.scrollY >= ourSkills.offsetTop - 200) {
      // console.log('skillllllllsss', scrollY)
      skills.forEach((skill) => {
        skill.style.width = skill.dataset.width;
      });
    }
    if (window.scrollY >= stats.offsetTop - 200) {
      // console.log("numbeeerrsss", scrollY);
      if (!started) {
        numbers.forEach((number) => startCount(number));
      }
      started = true;
    }

    function startCount(el) {
      let target = el.dataset.target;
      let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == target) {
          clearInterval(count);
        }
      }, 2000 / target);
    }
  };


  // START TIMER
  let countDownDate = new Date("dec 25 ,2021").getTime();
  let counter = setInterval(() => {
    let dateNow = new Date().getTime();
    let dateDiff = countDownDate - dateNow;
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

    document.querySelector(".days").innerHTML = days < 10 ? `0${days} ` : days;
    document.querySelector(".hours").innerHTML =
      hours < 10 ? `0${hours} ` : hours;
    document.querySelector(".minutes").innerHTML =
      minutes < 10 ? `0${minutes} ` : minutes;
    document.querySelector(".seconds").innerHTML =
      seconds < 10 ? `0${seconds} ` : seconds;
    if (dateDiff < 0) {
      clearInterval(counter);
    }
  });

  // END TIMER
};

// STRAT OTHER LINKS BUTTON
let megaMenu = document.querySelector(".mega-menu");
document.querySelector(".other-links").addEventListener("click", () => {
  megaMenu.classList.toggle("active");
});
document.querySelector(".fa-times").addEventListener("click", () => {
  megaMenu.classList.remove("active");
});
// END OTHER LINKS BUTTON
