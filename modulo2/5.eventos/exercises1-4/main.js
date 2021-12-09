'use strict'

//exercise 1

const hello = document.querySelector('.hi');
const button = document.querySelector('.buttonhi')

button.addEventListener('click', () => hello.innerHTML = 'Mi primer click, ¡ole yo y la mujer que me parió!');

//exercise 2

const formName = document.querySelector('.form');
const button2 = document.querySelector('.buttonform');

button2.addEventListener('click', () => console.log(`Hola ${formName.value}`));

//exercise 3

const lorem = document.querySelector('.lorem');
const multiplier = document.querySelector('.loremmultiplier')

lorem.addEventListener('mouseover', () => multiplier.innerHTML += `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus beatae impedit quia blanditiis
iste repellat,
fugiat earum doloremque tempore quam maiores voluptate cupiditate quae praesentium provident. Expedita obcaecati
fugit dolore?`);

//exercise 4

document.querySelector('.body').style.backgroundColor = 'yellowgreen';

function scrollFunction(){
    if (window.scrollY < 250) {
        document.querySelector('.body').style.backgroundColor = 'lightgreen';
    } else {
        document.querySelector('.body').style.backgroundColor = 'green';

    }
}

window.onscroll = function() {
    scrollFunction()
};
