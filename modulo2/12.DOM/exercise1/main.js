'use strict';

const numbers = [1, 2, 3];
const ul = document.querySelector('.list');

for (const eachNumber of numbers) {
    const list = document.createElement('li');
    ul.appendChild(list)
    const numbersInList = document.createTextNode(eachNumber);
    list.appendChild(numbersInList);
}


