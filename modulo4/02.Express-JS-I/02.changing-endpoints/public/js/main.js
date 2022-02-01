document.querySelector(".js-btn-get-users").addEventListener("click", () => {
  const response = {
    users: [{ name: "Sofía" }, { name: "María" }],
  };
  fetch("http://localhost:3500/users", {
    method: "POST",
    body: response,
  })
    .then((response) => response.json())
    .then((responseData) => {
      console.log("Data:", responseData);
      printJson(".js-get-users-result", responseData);
    });
});

document
  .querySelector(".js-btn-post-new-user")
  .addEventListener("click", () => {
    const requestData = {
      userName: document.querySelector(".js-username").value,
    };

    fetch("http://localhost:3500/users/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log("Data:", responseData);
        printJson(".js-get-post-new-user-result", responseData);
      });
  });

const printJson = (selector, jsonData) => {
  const jsonHtml = JSON.stringify(jsonData, null, 2);
  document.querySelector(selector).innerHTML = jsonHtml;
};
