'use strict';

const teachers = document.querySelector('.teachers');

const selectTeacher = (event) => {

    event.target.classList.toggle('teacher--selected');

const changeText = event.target.querySelector('.favorite');

if (changeText.innerHTML === 'Quitar') {
    changeText.innerHTML = 'Añadir';
} else if (changeText.innerHTML === 'Añadir') {
    changeText.innerHTML = 'Quitar';
}
};

teachers.addEventListener('click', selectTeacher);