"use strict";

//exercise 1

function getPsw() {
  fetch("https://api.rand.fun/number/integer")
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".js-result").innerHTML = data.result;
    });
}

document.querySelector(".js-psw").addEventListener("click", getPsw);

//exercise 2

const askForADog = document.querySelector(".js-dog");

function newChihuahua() {
  fetch("https://dog.ceo/api/breed/chihuahua/images/random")
    .then((response) => response.json())
    .then((data) => {
      const img = document.querySelector("img");
      img.src = data.message;
      img.alt = "Un perro";
    });
  askForADog.innerHTML = "Enseñame otro chihuahua";
}

askForADog.addEventListener("click", newChihuahua);

//exercises 3 and 4

const form = document.querySelector(".search");
const formBtn = document.querySelector(".searchbtn");
let nameGit = document.querySelector(".gitname");
let imageGit = document.querySelector(".gitimg");
let reposGit = document.querySelector(".gitrepos");
let reposList = document.querySelector(".reposlist");

function sendInfo() {
  let username = form.value;
  fetch(`https://api.github.com/users/${username}`)
    .then((response) => response.json())
    .then((data) => {
      nameGit.innerHTML = data.name;
      imageGit.src = data.avatar_url;
      reposGit.innerHTML = data.public_repos;
      return fetch(`${data.repos_url}`);
    })
    .then((responseRepos) => responseRepos.json())
    .then((dataRepo) => {
      reposList.innerHTML = "";
      for (let index = 0; index < dataRepo.length; index++) {
        reposList.innerHTML += `<li>${dataRepo[index].name}</li>`;
      }
    });
}

formBtn.addEventListener("click", sendInfo);
