'use strict';

const section = document.querySelector('.section');

let grapes = 0;
let img = 0
let newYear;

const incrementGrapesCounter = () => {
    grapes++;
    img++;
    const div = document.createElement('div');
    section.appendChild(div);
    const grapeCount = document.querySelector('.grapes');
    grapeCount.innerHTML = grapes;

    if (grapes === 12) {
        clearInterval(newYear);
    }

};

newYear = setInterval(incrementGrapesCounter, 1000);