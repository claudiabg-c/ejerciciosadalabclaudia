'use strict';

const hello = document.querySelector('.hello');

let temp;

const areYouSleeping = () => {
    hello.innerHTML = '¿Te has dormido?';
};

temp = setInterval(areYouSleeping, 10000)

function wakeUp() {
    clearInterval(temp);
    hello.innerHTML = 'Hola, dormilona'
    const areYouSleeping = () => {
        hello.innerHTML = '¿Te has dormido?'
    }

    setInterval(areYouSleeping, 10000)
}

hello.addEventListener('click', wakeUp)