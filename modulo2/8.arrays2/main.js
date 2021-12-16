'use strict';

//exercise 1

const numbers1to100 = [];

function get100Numbers() {
    let addNumbers = 0;

    for (let numbers = 1; numbers <= 100; numbers++) {
    addNumbers = numbers1to100.push(numbers);
    }
    
    console.log(numbers1to100);
};

get100Numbers();


//exercise 2

function getReversed100Numbers() {
    console.log(numbers1to100.reverse());
};

getReversed100Numbers();

//exercise 3

const lostNumbers = [4, 8, 15, 16, 23, 42];
const pairNumbers = [];
const multipleOfThree = [];

function bestLostNumber() {
    
    let addPairs;
    for (let index = 0; index < lostNumbers.length; index++) {

        if (lostNumbers[index] % 2 === 0) {
        addPairs = pairNumbers.push(lostNumbers[index]);
        };
    }

    let multiplesOf3;
    for (let index = 0; index < lostNumbers.length; index++) {

        if (lostNumbers[index] % 3 === 0) {
        multiplesOf3 = multipleOfThree.push(lostNumbers[index]);
        };
    };

    const bestOfThemAll = pairNumbers.concat(multipleOfThree);

    console.log(pairNumbers);
    console.log(multipleOfThree);
    console.log(bestOfThemAll);
};

bestLostNumber();

//exercise 4 --------------- INCOMPLETO

const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    {
      name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
      completed: false
    }
];

const taskList = document.querySelector('.tasks');
const title = document.querySelector('.title');


function render() {
for (let index = 0; index < tasks.length; index++) {

    if (tasks[index].completed) {
        taskList.innerHTML += `<li class="completed" id=${tasks[index].completed}><input type="checkbox" class="input" checked>${tasks[index].name}</li>`;
    } else {
        taskList.innerHTML += `<li id=${tasks[index].completed}><input type="checkbox" class="input" unchecked>${tasks[index].name}</li>`;
    };
};

const allCheckboxs = taskList.querySelectorAll('input');

console.log(allCheckboxs);

for(const eachCheckbox of allCheckboxs) {
    eachCheckbox.addEventListener('click', checkAndUncheck);
};

};

function checkAndUncheck(event) {
    console.log(event.currentTarget.parentNode);
    event.currentTarget.parentNode.classList.toggle('completed');
    console.log(event.currentTarget.id);
};  

render();



//------------------------------------------------ MAL, PARA REVISAR


function completedTasks() {

for (let index = 0; index <= tasks.length; index++) {

    if (tasks[index].completed) {
        index ++;
    };
    return index;
};
};
console.log(completedTasks());

function getDataFromTheArray(){
    
    let position = tasks.indexOf();
    
    for (let index = 0; index < tasks.length; index++) {

        title.innerHTML =`Tienes ${tasks.length} tareas. ${tasks[index].completed} completadas y ${tasks[index].completed === false} por realizar`;
    }
};

getDataFromTheArray();


//exercise 5

const tree = [
'▲',
'▲▲',
'▲▲▲',
'▲▲▲▲',
'▲▲▲▲▲'
];

for (const treeParts of tree) {
    console.log(treeParts);
}

//exercise 6

tree.unshift('★');
tree.push('|');

for (const treeParts of tree) {
    console.log(treeParts);
}

//exercise 7

const wholeTree = tree.splice(0, 7, '     ★','     ▲', '    ▲▲▲', '   ▲▲▲▲▲', '  ▲▲▲▲▲▲▲', ' ▲▲▲▲▲▲▲▲▲', '     |');

 for (const treeParts of tree) {
    console.log(treeParts);
};