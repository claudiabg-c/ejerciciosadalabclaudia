'use strict';

//exerise 1

const marks = [5, 4, 6, 7, 9];

const inflatedMarks = marks.map((mark) => mark + 1);

console.log(inflatedMarks);

//exercise 2

const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];

const sayHi = names.map((name) => 'Bienvenida ' + name);

console.log(sayHi);

//exercises 3 and 4

const users = [
    { name: "María", isPremium: false },
    { name: "Lucía", isPremium: true },
    { name: "Susana", isPremium: true },
    { name: "Rocío", isPremium: false },
    { name: "Inmaculada", isPremium: false },
];

const premiumUsers = users.filter(user => user.isPremium);
const notPremium = users.filter(user => user.isPremium === false);

if (premiumUsers) {
    const hiPremium = premiumUsers.map((namePremium) => 'Bienvenida ' + namePremium.name + '. Gracias por confiar en nosotros');
    console.log(hiPremium);
}

if (notPremium) {
    const hiNonPremium = notPremium.map((nameNonPremium) => 'Bienvenida ' + nameNonPremium.name);
    console.log(hiNonPremium);
}

console.log(premiumUsers);

//exercise 5

const pins = [2389, 2384, 2837, 5232, 8998];

const pairPin = pins.filter(pairPin => pairPin % 2 === 0);

console.log(pairPin);

//exercise 6

const users2 = [
    { name: "María", isPremium: false, pin: 2389 },
    { name: "Lucía", isPremium: true, pin: 2384 },
    { name: "Susana", isPremium: true, pin: 2837 },
    { name: "Rocío", isPremium: false, pin: 5232 },
    { name: "Inmaculada", isPremium: false, pin: 8998 },
];

const pairUser = users2.filter(pairUser => pairUser.pin % 2 === 0);

console.log(pairUser);

//exercise 7

const incidence = users2.find((users2) => users2.pin === 5232)
const incidencePosition = users2.findIndex((users2) => users2.pin === 5232)

users2.splice(3, 1);

console.log(incidence);
console.log(incidencePosition);
console.log(users2);

//exercise 8

const times = [56, 9, 45, 28, 35];

const sum = times.reduce((acc, number) => acc + number);
const media = sum / times.length;

console.log(media);

//exercise 9

const runners = [
    { name: "Gregory Goyle", time: 56 },
    { name: "Nymphadora Tonks", time: 9 },
    { name: "Luna Lovegood", time: 45 },
    { name: "Cedric Diggory", time: 28 },
    { name: "Cho Chang", time: 35 },
];

const winner = runners.reduce((acc, number) => acc.time > number.time ? acc = number : acc);

console.log(winner);

//exercise 10

const runners2 = [
    { name: "Gregory Goyle", time: 56, student: true },
    { name: "Nymphadora Tonks", time: 9, student: false },
    { name: "Luna Lovegood", time: 45, student: true },
    { name: "Cedric Diggory", time: 28, student: true },
    { name: "Cho Chang", time: 35, student: true },
];

const students = runners2.filter(students => students.student);
const winnerStudent = students.reduce((acc, number) => acc.time > number.time ? acc = number : acc);

console.log(winnerStudent);

//exercise 11

times.sort((a, b) => a - b)
runners2.sort((a, b) => a.time - b.time)

console.log(times);
console.log(runners2);

//exercise 12

users2.sort((a, b) => a.name.localeCompare(b.name));

console.log(users2);