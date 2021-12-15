'use strict';

//exercise 1

const numbers1to100 = [get100Numbers()];

function get100Numbers() {
    for (let i = 1; i <= 100; i++) {
    console.log(i);
    };
};

//exercise 2 ------ PENDIENTE DE TERMINAR

function getReversed100Numbers() {
    console.log(numbers1to100.reverse());
};

getReversed100Numbers();