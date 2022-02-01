const fs = require("fs");

const handleFile = (err, fileContent) => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log(fileContent);
    const jsonData = JSON.parse(fileContent);
    console.log(jsonData);
    jsonData.user = "Claudia";
    jsonData.age = 30;
    console.log(jsonData);
    fs.writeFile("./output-file.json", JSON.stringify(jsonData), (err) => {
      if (err) {
        console.log("Error:", err);
      } else {
        console.log("The file has been saved!");
      }
    });
  }
};

fs.readFile("./input-file.json", "utf8", handleFile);
