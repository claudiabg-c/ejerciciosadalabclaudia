'use strict'

//exercise 5

window.addEventListener('keydown', event => {
    if (event.keyCode === 82) {
        document.querySelector('.body').style.backgroundColor = 'red';
    } else if (event.keyCode === 77) {
        document.querySelector('.body').style.backgroundColor = 'purple';
    } else {
        document.querySelector('.body').style.backgroundColor = 'white';
    }
})

//exercise 6

const form = document.querySelector('.form');
const formText = document.querySelector('.textform')

form.addEventListener('keydown', write);

function write(event) {
    formText.innerHTML = event.currentTarget.value + event.key;
}

//exercise 7

const button = document.querySelector('button');

button.addEventListener('click', () => button.classList.toggle('button'));

//exercise 8

const button2 = document.querySelector('.button2');

function click(event) {
    
const button = event.currentTarget;

button.classList.toggle('button');
}

button2.addEventListener('click', click);

//exercise 9

const teacherIsra = document.querySelector('.teacher--isra');
const teacherBarlos = document.querySelector('.teacher--tuerto');
const teacherNasi = document.querySelector('.teacher--nasi');

teacherIsra.addEventListener('click', changeClass);
teacherBarlos.addEventListener('click', changeClass);
teacherNasi.addEventListener('click', changeClass);

function changeClass(event) {

const selectedTeacher = event.currentTarget;
selectedTeacher.classList.toggle('teacher--selected');

const favorite = selectedTeacher.querySelector('.favorite');    
favorite.innerHTML = changeText(favorite.innerHTML);
}

function changeText(text) {
    if (text === 'Añadir') {
        text = 'Quitar'
    } else {
        text = 'Añadir'
    }
return text;
}