'user strict'

//exercise 1

function workWithMovies() {

const movies = [
    '500 days of summer',
    'Harry Potter',
    'When Harry met Sally'
];

movies[3] = 'About time';

console.log(movies);

movies[1] = 'Love Actually';

console.log(movies);

movies[3] = 'Bridget Jones';

console.log(movies);

};

workWithMovies();

//exercise 2

for (let i = 1; i <= 10; i++) {
    console.log('Voy por la vuelta ' + i);
};

//exercise 3

for (let acc = 0; acc < 20; acc+=2) {
    console.log('El resultado es: ' + acc)    
};

//exercise 4

for (let moonYear = 2017; moonYear <= 2017+15*3; moonYear+=3) {
    console.log('5 de octubre de ' + moonYear)    
};

//exercise 5

function average() {

const numbers = [8, 30, 3, 33, 88];

numbers[5] = 5;

let sum = 0;

for (let i = 0; i < numbers.length; i++) {

  sum = sum + numbers[i];  
}

const media = sum / numbers.length;

return media.toFixed(3);

};

console.log(average());

//exercise 6

const sendBtn = document.querySelector('.submit');
const pcMessage = document.querySelector('.message');

function noSend(event) {
    event.preventDefault();
};

function printForm() {
    let input = document.querySelectorAll('.input');
    for (let printInArray of input) {
        printInArray = [];
        printInArray = input.value;
        pcMessage.innerHTML=(`¡A mi también me encantó el libro "${input[0].value}" y el de "${input[1].value}"! ¡Y también me gustaron las películas de "${input[2].value}" y "${input[3].value}"! Tenemos mucho en común, humana.`);
    }
};

sendBtn.addEventListener('click', noSend);
sendBtn.addEventListener('click', printForm);

//exercise 7

const adalabers = [
    {
        name: 'María', 
        age: 29, 
        job: 'diseñadora'
    },
    {
        name: 'Lucía', 
        age: 31, 
        job: 'ingeniera química'
    },
    {
        name: 'Susana', 
        age: 34, 
        job: 'periodista'
    },
    {
        name: 'Rocío', 
        age: 25, 
        job: 'actriz'
    },
    {
        name: 'Inmaculada', 
        age: 21, 
        job: 'diseñadora'
    }
];

function countAdalabers(adalabers){
    return adalabers.length;
};

function averageAge(adalabers) {
    let sumAges = 0;
    
    for (let index = 0; index < adalabers.length; index++) {
      sumAges += adalabers[index].age;  
    }
    
    let mediaAge = sumAges / adalabers.length;
    
    return mediaAge;
};

function theYoungest(adalabers) {
    let minimum = adalabers[0].age;
    let name = adalabers[0].name;
    
    for (let index = 0; index < adalabers.length; index++) {
        if(minimum > adalabers[index].age){
           minimum = adalabers[index].age;
           name = adalabers[index].name
        }
    }

    return name;
};

function countDesigners(adalabers) {
    let count = 0;

    for (let index = 0; index < adalabers.length; index++) {
        if (adalabers[index].job === 'diseñadora'){
            count++;
        }
    }

    return count;
};

console.log(countAdalabers(adalabers));
console.log(averageAge(adalabers));
console.log(theYoungest(adalabers));
console.log(countDesigners(adalabers));

//exercise 8

const button = document.querySelectorAll('.button');

function addClass(){
    const background = document.querySelector('.body');
    background.classList.toggle('changebackground');
};

for (let index = 0; index < button.length; index++) {
    button[index].addEventListener('click', addClass);
}

//exercise 10

const items = [
    'Ada',
    1815,
    ['Informática', 'Matemática', 'Escritora'],
    {
      mother: 'Anna Isabella',
      father: 'Lord Byron'
    }
  ];

console.log(items);

function getDataFromTheArray(){
let position = items.indexOf();

    for (let index = 0; index < items.length; index++) {
        position++;
            console.log(`El dato ${items[index]} está en la posición ${position} y es de tipo ${typeof(items)[index]}`);
        }
    }

getDataFromTheArray();