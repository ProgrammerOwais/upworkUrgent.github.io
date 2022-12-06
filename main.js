let semiCircles = document.querySelectorAll(".semi-circle");
let input = document.querySelector(".input");
let startbtn = document.querySelector(".btn");

startbtn.addEventListener("click", () => {
    if (input.value == "" || input.value == 0) {
        alert("Please field the input with numbers");
        return;
    }
    let setTime = input.value * 1000;
    let startTime = Date.now();
    let futureTime = startTime + setTime;
    let timer = document.querySelector(".timer");
    const timerloop = setInterval(countDownTimer);

    function countDownTimer(params) {
        const currentTime = Date.now();
        const remainingTime = futureTime - currentTime;
        const angle = (remainingTime / setTime) * 360;

        // progress indicator
        if (angle > 180) {
            semiCircles[2].style.display = "none";
            semiCircles[0].style.transform = "rotate(180deg)";
            semiCircles[1].style.transform = `rotate(${angle}deg)`;
        } else {
            semiCircles[2].style.display = "block";
            semiCircles[0].style.transform = `rotate(${angle}deg)`;
            semiCircles[1].style.transform = `rotate(${angle}deg)`;
        }

        // timer
        const sec = Math.floor((remainingTime / 1000) % 60);
        timer.innerHTML = `
  <div>${sec}</div>
`;

        //end
        if (remainingTime < 0) {
            clearInterval(timerloop);
            semiCircles[0].style.display = "none";
            semiCircles[1].style.display = "none";
            semiCircles[2].style.display = "none";
            timer.innerHTML = `
  <div>0</div>
`;
        }
    }
});
