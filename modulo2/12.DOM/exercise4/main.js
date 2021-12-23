'use strict';

const div = document.querySelector('div');
const paragraph = document.querySelector('p');

const heightDiv = div.offsetHeight;
const heightThirdDiv = 140 / 3;

div.style.height = '46.666666666666664px';
div.style.background = 'green';

console.log(heightDiv);
console.log(heightThirdDiv);

