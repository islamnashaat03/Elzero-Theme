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
  // let scrollIcon = document.querySelector(".up");
  // window.onscroll = () => {
  //   if (scrollY >= 700) {
  //     console.log('haaai', scrollY)
  //     scrollIcon.classList.add("active");
  //   } else {
  //     scrollIcon.classList.remove("active");
  //   }
  // };
  // scrollIcon.onclick = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };
  // END SCROLL TO TOP BUTTON

  // START SKILLS SCROLl
  let ourSkills = document.getElementById("ourSkills");
  let skills = document.querySelectorAll(".the-progress");
  let scrollIcon = document.querySelector(".up");

  window.onscroll = () => {
    if (scrollY >= 700) {
      console.log('haaai', scrollY)
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
      console.log('skillllllllsss', scrollY)
      skills.forEach((skill) => {
        skill.style.width = skill.dataset.width;
      });
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