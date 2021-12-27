'use strict';

const chronometer = document.querySelector('.chronometer');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');

let timer = 1;
let temp;

const incrementTimer = () => {
    chronometer.innerHTML = timer++;
}

temp = setInterval(incrementTimer, 1000);

function stopTimer() {
    clearInterval(temp)
}

function startTimer() {
    let timer = 0;
    const incrementTimer = () => {
        chronometer.innerHTML = timer++;
    }
    temp = setInterval(incrementTimer, 1000);

}

stopBtn.addEventListener('click', stopTimer)
startBtn.addEventListener('click', startTimer)
