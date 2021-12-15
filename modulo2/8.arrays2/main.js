'use strict';

//exercise 1

const numbers1to100 = [];

function get100Numbers() {
    let addNumbers = 0;

    for (let numbers = 1; numbers <= 100; numbers++) {
    addNumbers = numbers1to100.push(numbers);
    }
    
    console.log(numbers1to100);
};

get100Numbers();


//exercise 2

function getReversed100Numbers() {
    console.log(numbers1to100.reverse());
};

getReversed100Numbers();


