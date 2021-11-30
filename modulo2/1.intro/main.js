'use strict';

//exercise 1

document.querySelector('h1').innerHTML = 'Esta página no es compatible con la versión actual de tu navegador. Por favor actualízalo a la versión más reciente';

const titleElement = document.querySelector('.title');

//exercise 2

let address;

address = 'Calle Leganitos, 24';
address = 'Calle Mayor, 7';

//exercise 3

titleElement.innerHTML = titleElement.innerHTML + ' mundo';

//exercise 4

const secondElement = document.querySelector('.adalaber');

const oneElement = document.querySelector('.one');

secondElement.innerHTML = secondElement.innerHTML + oneElement.innerHTML;

//exercise 5

const passwordElement = document.querySelector('.password');

passwordElement.innerHTML = '******';

//exercise 6

const loremIpsum = document.querySelector(".lorem");

loremIpsum.innerHTML = `<h2>Lorem ipsum</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
<img src="http://via.placeholder.com/350x150">` ;

//exercise 7

const listElement = document.querySelector('.list');

const content = '<li>1</li><li>2</li><li>3</li>';

listElement.innerHTML = content;

//exercise 8

const sectionB = document.querySelector('.button1');

sectionB.classList.add('opacity');





