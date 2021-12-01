//exercise 2

const superWave = document.querySelector('.super-wave');

superWave.classList.add("span");

//exercise 5

const hoursOfLife = (365 * 24) * 30;

console.log(hoursOfLife);

//exercise 7

const nameStudent = 'Lola';

const helloStudent = document.querySelector('.hello');

helloStudent.innerHTML = `Hola ${nameStudent}, encantada de conocerte.`;

//exercise 8

const firstDogImage = 'https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg';
const thirdDogName = 'Lana';

const dogList = document.querySelector(".dogs");

dogList.innerHTML = `<li>${firstDogName} <img src="${firstDogImage}"> </li>
<li>${secondDogName} <img src="${secondDogImage}"> </li>
<li>${thirdDogName} <img src="${thirdDogImage}"> </li>`;

//exercise 9

const myName = 'Claudia Berrocal';

console.log('Claudia Berrocal is ' + myName.length + ' code units long');

//exercise 10

// const ageUser = document.querySelector('.age');

// console.log(ageUser);

// const secondHoursOfLife = parseInt(ageUser.innerHTML) * 24 * 365;

// console.log(secondHoursOfLife);
