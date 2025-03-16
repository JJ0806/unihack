// This code was based on the following video "JavaScript Project: Countdown Timer with Progress Indicator" by EFtechLab (link: https://www.youtube.com/watch?v=uHVPAcaW1VQ). The author of this code if EFtechLab. Modified by SwordGPT2.0.//

const semicircles = document.querySelectorAll('.semicircle');
const timer = document.querySelector('.timer')

let timerLoop;

document.getElementById("start").addEventListener("click", function() {
    const hr = parseInt(document.getElementById("hours").value) || 0;
    const min = parseInt(document.getElementById("minutes").value) || 0;
    const sec = parseInt(document.getElementById("seconds").value) || 0;

    clearInterval(timerLoop);
    resetTimer();
    startCountdown(hr, min, sec);
});

function startCountdown(hr, min, sec) {

    const hours = hr * 1000 * 60 * 60;
    const minutes = min * 1000 * 60;
    const seconds = sec * 1000;
    
    const setTime = hours + minutes + seconds;
    const startTime = Date.now();
    const futureTime = startTime + setTime;2
    
    timerLoop = setInterval(countdownTimer, 1000);
    countdownTimer();

    function countdownTimer() {
        const currentTime = Date.now();
        const remainingTime = futureTime - currentTime;
        const angle = (remainingTime / setTime) * 360;

        if (angle > 180) {
            semicircles[2].style.display = "none";
            semicircles[0].style.transform = "rotate(180deg)";
            semicircles[1].style.transform = `rotate(${angle}deg)`;
        } else {
            semicircles[2].style.display = "block";
            semicircles[0].style.transform = `rotate(${angle}deg)`;
            semicircles[1].style.transform = `rotate(${angle}deg)`;
        }

        const hrs = String(Math.floor((remainingTime / (1000 * 60 * 60)) % 24)).padStart(2, "0");
        const mins = String(Math.floor((remainingTime / (1000 * 60)) % 60)).padStart(2, "0");
        const secs = String(Math.floor((remainingTime / 1000) % 60)).padStart(2, "0");

        timer.innerHTML = `
        <div>${hrs}</div> 
        <div class="colon">:</div> 
        <div>${mins}</div> 
        <div class="colon">:</div> 
        <div>${secs}</div>
        `;

        if (remainingTime <= 1000) {
            semicircles[0].style.backgroundColor = "red";
            semicircles[1].style.backgroundColor = "red";
            timer.style.color = "red";
        }

        if (remainingTime < 0) {
            clearInterval(timerLoop);
            resetTimer();
        }
    }
}

function resetTimer() {

    semicircles[0].style.display = "block";
    semicircles[1].style.display = "block";
    semicircles[2].style.display = "block";

    semicircles[0].style.backgroundColor = "rgb(223, 39, 39)";
    semicircles[1].style.backgroundColor = "rgb(223, 39, 39)";

    semicircles[0].style.transform = "rotate(0deg)";
    semicircles[1].style.transform = "rotate(0deg)";

    timer.innerHTML = `
    <div>00</div> 
    <div class="colon">:</div> 
    <div>00</div> <div class="colon">:</div> 
    <div>00</div>
    `;
    
    timer.style.color = "black";
}
