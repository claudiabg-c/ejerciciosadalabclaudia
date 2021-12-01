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

