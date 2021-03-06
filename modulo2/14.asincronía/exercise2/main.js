'use strict';

const section = document.querySelector('.section');

let grapes = 0;
let img = 0

const incrementGrapesCounter = () => {
    if (grapes < 12) {
        grapes++;
    }
    const grapeCount = document.querySelector('.grapes');
    grapeCount.innerHTML = grapes;

    if (img < 12) {
        img++;
        const div = document.createElement('div');
        section.appendChild(div);
    };
};

setInterval(incrementGrapesCounter, 1000);
