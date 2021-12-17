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
      console.log(chosenBreed);
      return fetch("https://api.rand.fun/number/integer?max=94");
    })
    .then((responseNumber) => responseNumber.json())
    .then((dataNumber) => {
      const chosenNumber = dataNumber.result;
      console.log(chosenNumber);
      const giveRandomDog = chosenBreed[chosenNumber];
      console.log(giveRandomDog);
      dogBreed.innerHTML = `${giveRandomDog}`;
      return fetch(`https://dog.ceo/api/breed/${giveRandomDog}/images/random`);
    })
    .then((responseImg) => responseImg.json())
    .then((dataImg) => {
      dogPic.src = dataImg.message;
    });
}

randomDog();
