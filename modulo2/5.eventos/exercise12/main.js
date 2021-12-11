'use strict';

const teachers = document.querySelector('.teachers');

const selectTeacher = (event) => {

    event.target.classList.toggle('teacher--selected');

const favorite = event.target.querySelector('.favorite');   
 
favorite.innerHTML = changeText(favorite.innerHTML);

function changeText(text) {
    if (text === 'Añadir') {
        text = 'Quitar'
    } else {
        text = 'Añadir'
    }
return text;
}

};

teachers.addEventListener('click', selectTeacher);