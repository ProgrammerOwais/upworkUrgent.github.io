let semiCircles = document.querySelectorAll(".semi-circle");
let input = document.querySelector(".input");
let startbtn = document.querySelector(".btn");
let hideCircle = document.querySelector(".hide-circle");

// semiCircles[0].style.display = "block";
// semiCircles[2].style.display = "block";

startbtn.addEventListener("click", () => {
    if (input.value == "" || input.value == 0) {
        alert("Please field the input with numbers");
        return;
    }

    semiCircles[0].style.display = "block";
    semiCircles[1].style.display = "block";
    semiCircles[2].style.display = "block";

    let setTime = input.value * 1000;
    let startTime = Date.now();
    let futureTime = startTime + setTime;
    let timer = document.querySelector(".timer");
    const timerloop = setInterval(countDownTimer);

    function countDownTimer(params) {
        const currentTime = Date.now();
        const remainingTime = futureTime - currentTime;
        const angle = (remainingTime / setTime) * 360;

        hideCircle.style.display = "none";
        // progress indicator
        if (angle > 180) {
            semiCircles[2].style.display = "none";
            semiCircles[0].style.transform = "rotate(180deg)";
            semiCircles[1].style.transform = `rotate(-${angle}deg)`;
            semiCircles[1].style.opacity = "1";
        } else {
            semiCircles[2].style.display = "block";
            semiCircles[0].style.transform = `rotate(-${angle}deg)`;
            semiCircles[1].style.transform = `rotate(-${angle}deg)`;

            hideCircle.style.display = "block";
        }

        // timer
        const sec = Math.floor(remainingTime / 1000);
        timer.innerHTML = `
  <div> <p class = "time">${sec + 1}</p></div>
`;

        //end
        if (remainingTime < 0) {
            clearInterval(timerloop);
            semiCircles[0].style.display = "none";
            semiCircles[1].style.display = "none";
            semiCircles[2].style.display = "none";
            timer.innerHTML = `
  <div><p class = "time">0</p></div>
`;
        }
    }
});
