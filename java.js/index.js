// const menuToggle = document.querySelector("#menu-togle");
// const mobileNavContainer = document.querySelector("#mobile-nav");

// menuToggle.onclick = function () {
//   menuToggle.classList.toggle("menu-icon-active");
//   mobileNavContainer.classList.toggle("mobile-nav--active");
// };

//  картинки слайдер

// const next = document.getElementById("btn-next");
// const video = document.querySelectorAll(".intro__video");
// const photo = document.querySelectorAll("text1");

// let index = 0;

// const activeSlide = (n) => {
//   for (slide of video) {
//     slide.classList.remove("active");
//   }
//   video[n].classList.add("active");
// };

// const nextSlide = () => {
//   if (index == video.length - 1) {
//     index = 0;
//     activeSlide(index);
//   } else {
//     index++;
//     activeSlide(index);
//   }
// };
// next.addEventListener("click", nextSlide);

// const interval = setInterval(nextSlide, 5000);

/////////////////////////////////////////// Time

function countdown(dateEnd) {
  var timer, days, hours, minutes, seconds;

  dateEnd = new Date(dateEnd);
  dateEnd = dateEnd.getTime();

  if (isNaN(dateEnd)) {
    return;
  }

  timer = setInterval(calculate, 1000);

  function calculate() {
    var dateStart = new Date();
    var dateStart = new Date(
      dateStart.getUTCFullYear(),
      dateStart.getUTCMonth(),
      dateStart.getUTCDate(),
      dateStart.getUTCHours(),
      dateStart.getUTCMinutes(),
      dateStart.getUTCSeconds()
    );
    var timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000);

    if (timeRemaining >= 0) {
      days = parseInt(timeRemaining / 86400);
      timeRemaining = timeRemaining % 86400;
      hours = parseInt(timeRemaining / 3600);
      timeRemaining = timeRemaining % 3600;
      minutes = parseInt(timeRemaining / 60);
      timeRemaining = timeRemaining % 60;
      seconds = parseInt(timeRemaining);

      document.getElementById("days").innerHTML = parseInt(days, 10);
      document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
      document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
      document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
    } else {
      return;
    }
  }

  function display(days, hours, minutes, seconds) {}
}

countdown("10/25/2020 08:00:00 AM");

//............... калькулятор
