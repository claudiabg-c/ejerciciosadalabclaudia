"use strict";

//exercise 6

const dogBreed = document.querySelector(".breed");
const dogPic = document.querySelector(".dogpic");
let chosenBreed = [];

function randomDog() {
  fetch("https://dog.ceo/api/breeds/list")
    .then((responseDog) => responseDog.json())
    .then((dataDog) => {
      chosenBreed = dataDog.message;
      return fetch("https://api.rand.fun/number/integer?max=94");
    })
    .then((responseNumber) => responseNumber.json())
    .then((dataNumber) => {
      const chosenNumber = dataNumber.result;
      const giveRandomDog = chosenBreed[chosenNumber];
      dogBreed.innerHTML = `${giveRandomDog}`;
      return fetch(`https://dog.ceo/api/breed/${giveRandomDog}/images/random`);
    })
    .then((responseImg) => responseImg.json())
    .then((dataImg) => {
      dogPic.src = dataImg.message;
    });
}

randomDog();
