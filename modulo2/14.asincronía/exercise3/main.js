'use strict';

const seconds = document.querySelector('.seconds');
const minutes = document.querySelector('.minutes');
const letterS = document.querySelector('.letters');
const letterSMin = document.querySelector('.lettersmin');
const messageSeconds = document.querySelector('.messageseconds');
const messageMinutes = document.querySelector('.messageminutes');

let countSec = 1;
let countMin = 0;

const incrementSeconds = () => {
    if (countSec < 60) {
        countSec++;
        seconds.innerHTML = countSec;
        letterS.innerHTML = 's';
    } else {
        messageSeconds.classList.add('hidden');
    }
};

const incrementMinutes = () => {
    countMin++;
    messageMinutes.classList.remove('hidden');
    minutes.innerHTML = countMin;
    letterSMin.innerHTML = 's';
};

setInterval(incrementSeconds, 1000);
setInterval(incrementMinutes, 60000);

