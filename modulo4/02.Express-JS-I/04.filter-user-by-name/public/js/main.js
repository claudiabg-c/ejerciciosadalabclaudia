"use strict";

// post new user

document
  .querySelector(".js-btn-post-new-user")
  .addEventListener("click", () => {
    const inputName = document.querySelector(".js-input-name");
    const inputEmail = document.querySelector(".js-input-email");

    // create query params
    const queryParams = `?userName=${inputName.value}&userEmail=${inputEmail.value}`;

    fetch("http://localhost:3000/user" + queryParams, { method: "POST" })
      .then((response) => response.json())
      .then((responseData) => {
        console.log("Server response:", responseData);
        printJson(".js-post-new-user-result", responseData);
      });
  });

// get users data

const input = document.querySelector(".js-inputsearch");
const inputemail = document.querySelector(".js-inputsearchemail");

document.querySelector(".js-btn-get-users").addEventListener("click", () => {
  if (input.value && inputemail.value !== "") {
    const filter = `?searchUser=${input.value}&searchEmail=${inputemail.value}`;

    fetch("http://localhost:3000/users" + filter)
      .then((response) => response.json())
      .then((responseData) => {
        console.log("Server response:", responseData);
        printJson(".js-get-users-result", responseData);
      });
  } else if (input.value !== "") {
    const filter = `?searchUser=${input.value}`;

    fetch("http://localhost:3000/users" + filter)
      .then((response) => response.json())
      .then((responseData) => {
        console.log("Server response:", responseData);
        printJson(".js-get-users-result", responseData);
      });
  } else if (inputemail.value !== "") {
    const filter = `?searchEmail=${inputemail.value}`;

    fetch("http://localhost:3000/users" + filter)
      .then((response) => response.json())
      .then((responseData) => {
        console.log("Server response:", responseData);
        printJson(".js-get-users-result", responseData);
      });
  } else {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((responseData) => {
        console.log("Server response:", responseData);
        printJson(".js-get-users-result", responseData);
      });
  }
});

// helper

const printJson = (selector, jsonData) => {
  const jsonHtml = JSON.stringify(jsonData, null, 2);
  document.querySelector(selector).innerHTML = jsonHtml;
};
