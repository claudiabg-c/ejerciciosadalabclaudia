'use strict'

const link1 = document.querySelector('.link1');
const link2 = document.querySelector('.link2');
const link3 = document.querySelector('.link3');
const section1 = document.querySelector('#section1');
const section2 = document.querySelector('#section2');
const section3 = document.querySelector('#section3');

const scrollSection1 = section1.getBoundingClientRect();
const scrollSection2 = section2.getBoundingClientRect();
const scrollSection3 = section3.getBoundingClientRect();

function handleLink1(event) {
    event.preventDefault();
    window.scrollTo({
        top: scrollSection1.top,
        behavior: 'smooth'
    })
}

function handleLink2(event) {
    event.preventDefault();
    window.scrollTo({
        top: scrollSection2.top,
        behavior: 'smooth'
    })
}

function handleLink3(event) {
    event.preventDefault();
    window.scrollTo({
        top: Number(scrollSection3.top) + Number(scrollSection2.top),
        behavior: 'smooth'
    })
}

link1.addEventListener('click', handleLink1);
link2.addEventListener('click', handleLink2);
link3.addEventListener('click', handleLink3);