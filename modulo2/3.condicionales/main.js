'use strict';

//exercise 1

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.it/300x300';
// avatar que eligió el usuario al registrarse
let userAvatar = 'http://www.fillmurray.com/300/300';

const avatar = document.querySelector('.user__avatar');

const userNoAvatar = '';
avatar.src = DEFAULT_AVATAR;

const userYesAvatar = !'';
avatar.src = userAvatar;

avatar.src = `${userAvatar || DEFAULT_AVATAR}`;

//exercise 2

const myName = 'Claudia';

const welcome = document.querySelector('.welcometext');

if (myName === 'Claudia') {
    welcome.innerHTML = `Bienvenida, ${myName}`;
} else {
    welcome.innerHTML = `Lo siento pero el usuario que has introducido no está registrado`;
}

//exercise 3

const number = 8;

if (number === 0) {
    console.log('El número es 0')
  } else if (number < 0) {
    console.log('El número es negativo')
  } else if (number > 12 && number <= 20) {
    console.log('El número más 2 es mayor que 13 pero menor o igual que 20')
  } else if (number > 20 && number < 50) {
    console.log('El número es mayor que 20 pero menor que 50')
  } else {
    console.log('el número no es 123123125')
  }

  //exercise 4

  const humanAge = 8;
  let dogAge;

  if (humanAge === 1) {
      console.log(dogAge = 15)
  } else if (humanAge === 2) {
      console.log(dogAge = 15 + 9)
  } else {
      console.log(dogAge = 15 + 9 + (`${humanAge}` - 2) * 5)
  }

  //exercise 5

const rainbow = document.querySelector('.div');

const warning = `<div>
<h2>AVISO</h2>
<P>Tenga cuidado</P>
</div>`;

const error = `<div>
<h2>ERROR</h2>
<P>Ha surgido un error</P>
</div>`;

const success = `<div> 
<h2>CORRECTO</h2>
<P>Los datos son correctos</P>
</div>`;

  if (rainbow.classList.contains ('success')){
  rainbow.innerHTML = `${success}`;
  } else if (rainbow.classList.contains ('error')) {
      rainbow.innerHTML = `${error}`;
  } else if (rainbow.classList.contains('warning')){
      rainbow.innerHTML = `${warning}`;
  }

  //exercise 6

let avocados;
const avocadoPrice = 1.5;
const money = 33;

avocados = 0 ? money <= avocadoPrice : money / avocadoPrice;

console.log(avocados);

//exercise 7

let ingredient = 'Pollo';

switch (ingredient) {
  case 'Pollo':
    console.log('Filete con patatas');
    break;
  case 'Merluza':
    console.log('Merlucita en salsa verde');
    break;
  case 'Espinacas':
    console.log('Espinacas rehogadas');
    break;
  default:
    console.log('Nada en la nevera');
}

//exercise 8

const year = 2021;
let nextLeapYear = year + 4 - (`${year}` % 4);

console.log(nextLeapYear);