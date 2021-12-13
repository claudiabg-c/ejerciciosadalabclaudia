'use strict'

//exercise 1

const adalaber = {
    name: 'Susana',
    age: '34 años',
    job: 'periodista',
};

const adalaber2 = {
    name: 'Rocío',
    age: '25 años',
    job: 'actriz'
};

console.log(`Mi nombre es ${adalaber.name}, tengo ${adalaber.age}, y soy ${adalaber.job}.`);

console.log(`Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age}, y soy ${adalaber2.job}.`);

//exercise 2

adalaber.run = phrase => `${phrase}`;

adalaber.runAMarathon = distance => `${adalaber.run('Estoy corriendo')} un maratón de ${distance} kilómetros.`

console.log(adalaber.runAMarathon(50));

//exercise 3

adalaber.showBio = function() {
    return 'Mi nombre es ' + this.name + ', tengo ' + this.age + ', y soy ' + this.job;
};

adalaber2.showBio = function() {
    return 'Mi nombre es ' + this.name + ', tengo ' + this.age + ', y soy ' + this.job;
};

console.log(adalaber.showBio());
console.log(adalaber2.showBio());

//exercise 4

const button = document.querySelector('.button');

function showInfo(event) {
    console.log(event);
}

button.addEventListener('click', showInfo);

//exercise 5

const input = document.querySelector('.input');

console.dir(input);

//exercise 6

const pearsBasket = {
    max: 18,
    min: 13,
    current: 14,
    initial: 0,
};

pearsBasket.add = function() {
    this.current++;
};

pearsBasket.remove = function() {
    this.current--;
};

pearsBasket.add();
pearsBasket.remove();

console.log(pearsBasket);

//exercise 7

const job = 'developer';

const user = {};

user["firstName"] = 'Pepe';
user["lastName"] = 'Pérez';
user["age"] = 30;
user["job"] = `${job}`;

const changeUser = user;

changeUser.firstName = 'Agustín';

user.age += 1;

console.log(user);
