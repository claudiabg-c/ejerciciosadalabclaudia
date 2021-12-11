'use strict'

//exercise 1

const adalaber = {
    name: 'Susana',
    age: '34 años',
    job: 'periodista',
};

console.log(`Mi nombre es ${adalaber.name}, tengo ${adalaber.age}, y soy ${adalaber.job}`);

//exercise 2

adalaber.run = function () {
    return 'Estoy corriendo';
};

console.log(adalaber.run());

//exercise 3

adalaber.showBio = function() {
    console.log(`Mi nombre es ${this.name}, tengo ${this.age}, y soy ${this.job}`);
}

adalaber.showBio();


//exercise 6
const pearsBasket = {
    max: 18,
    min: 13,
    current: 14,
    initial: 0,
}

const pearsBasket2 = {};

pearsBasket2.max = 11;
pearsBasket2.min = 5;
pearsBasket2.current = 6;
pearsBasket2.initial = 0;

pearsBasket2.add = function () {
    this.current++;
}

pearsBasket2.add();