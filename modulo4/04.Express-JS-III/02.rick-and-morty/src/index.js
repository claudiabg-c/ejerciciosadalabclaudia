const express = require("express");
const cors = require("cors");
const data = require("./data/rick-and-morty.json");

const app = express();

app.use(express.json());
app.use(cors());

const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

app.get("/users/:id", (req, res) => {
  console.log("Url param userId:", req.params.id);
  const findData = data.results.find(
    (eachdata) => `${eachdata.id}` === req.params.id
  );
  res.json(findData);
});

app.get("/users/:id/episodes", (req, res) => {
  console.log("Url param userId:", req.params.id);
  const findData = data.results.find(
    (eachdata) => `${eachdata.id}` === req.params.id
  );
  res.json(findData.episode);
});
