const express = require("express");
const cors = require("cors");
const Database = require("better-sqlite3");

// create app server
const app = express();

// set express middlewares
app.use(express.json());
app.use(cors());

// set template engine middlewares
app.set("view engine", "ejs");

// init express aplication
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

const db = new Database("./database.db", {
  verbose: console.log,
});

app.get("/articles", (req, res) => {
  const query = db.prepare("SELECT * FROM database");
  const articles = query.all();
  res.json(articles);
});

app.get("/article/:id", (req, res) => {
  const query = db.prepare("SELECT * FROM database WHERE id = ?");
  const selectedArticle = query.all(req.params.id);
  res.json(selectedArticle);
});

app.get("/article", (req, res) => {
  const query = db.prepare(
    `SELECT * FROM database WHERE title LIKE '%${req.query.titleSearch}%'`
  );
  const selectedTitle = query.all();
  res.json(selectedTitle);
});
