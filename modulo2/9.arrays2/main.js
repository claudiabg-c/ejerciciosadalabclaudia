"use strict";

//exercise 1

const numbers1to100 = [];

function get100Numbers() {
  let addNumbers = 0;

  for (let numbers = 1; numbers <= 100; numbers++) {
    addNumbers = numbers1to100.push(numbers);
  }

  console.log(numbers1to100);
}

get100Numbers();

//exercise 2

function getReversed100Numbers() {
  console.log(numbers1to100.reverse());
}

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
    }
  }

  let multiplesOf3;
  for (let index = 0; index < lostNumbers.length; index++) {
    if (lostNumbers[index] % 3 === 0) {
      multiplesOf3 = multipleOfThree.push(lostNumbers[index]);
    }
  }

  const bestOfThemAll = pairNumbers.concat(multipleOfThree);

  console.log(pairNumbers);
  console.log(multipleOfThree);
  console.log(bestOfThemAll);
}

bestLostNumber();

//exercise 4

const tasks = [
  { name: "Recoger setas en el campo", completed: true },
  { name: "Comprar pilas", completed: true },
  { name: "Poner una lavadora de blancos", completed: true },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
  },
];

const taskList = document.querySelector(".tasks");
const title = document.querySelector(".title");

function render() {
  taskList.innerHTML = "";

  for (let index = 0; index < tasks.length; index++) {
    if (tasks[index].completed) {
      taskList.innerHTML += `<li class="completed"><input type="checkbox" class="input" id=${index} checked>${tasks[index].name}</li>`;
    } else {
      taskList.innerHTML += `<li><input type="checkbox" class="input" id=${index} unchecked>${tasks[index].name}</li>`;
    }
  }
  const allCheckboxs = document.querySelectorAll(".input");

  for (const eachCheckbox of allCheckboxs) {
    eachCheckbox.addEventListener("click", checkAndUncheck);
  }
}

function completedTasks() {
  let completedEvent = 0;
  let uncompletedEvent = 0;
  for (let index = 0; index < tasks.length; index++) {
    if (tasks[index].completed === true) {
      completedEvent++;
    } else {
      uncompletedEvent++;
    }
  }

  const completed = completedEvent;
  const uncompleted = uncompletedEvent;

  function getDataFromTheArray() {
    for (let index = 0; index < tasks.length; index++) {
      title.innerHTML = `Tienes 
    ${tasks.length} tareas. ${completed} completadas y 
    ${uncompleted} por realizar`;
    }
  }

  getDataFromTheArray();
}

function checkAndUncheck(event) {
  const positionTask = event.currentTarget.id;
  if (tasks[positionTask].completed) {
    tasks[positionTask].completed = false;
  } else {
    tasks[positionTask].completed = true;
  }

  render();

  completedTasks();
}

completedTasks();

render();

//exercise 5

const tree = ["▲", "▲▲", "▲▲▲", "▲▲▲▲", "▲▲▲▲▲"];

for (const treeParts of tree) {
  console.log(treeParts);
}

//exercise 6

tree.unshift("★");
tree.push("|");

for (const treeParts of tree) {
  console.log(treeParts);
}

//exercise 7

let triangle = '▲';
const height = 5;
let star = '★'

star = ' '.repeat(height - 1);
console.log(star + '★')
for (let i = 0; i < height; i++) {
  let row = '';

  for (let space = 0; space < height - 1 - i; space++) {
    row += ' ';
  }
  for (let j = 0; j < i * 2 + 1; j++) {
    row += triangle;
  }
  console.log(row);
}
let base = ' '.repeat(height - 1);
console.log(base + "|");