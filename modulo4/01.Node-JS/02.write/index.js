const fs = require("fs");

const myObject = {
  user: "Mari Carmen",
  email: "mari@gmail.com",
  age: 28,
};

console.log(myObject);

const handleWriteFile = (err) => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log("The file has been saved!");
  }
};

fs.writeFile("./output.txt", JSON.stringify(myObject), handleWriteFile);
