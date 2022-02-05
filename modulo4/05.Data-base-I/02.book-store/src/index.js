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

app.get("/books", (req, res) => {
  const query = db.prepare("SELECT * FROM database ORDER BY title");
  const books = query.all();
  res.json(books);
});

app.get("/books/minprice=:minprice", (req, res) => {
  const query = db.prepare("SELECT * FROM database WHERE price > ?");
  const priceRangeBooks = query.all(req.params.minprice);
  res.json(priceRangeBooks);
});

app.get("/books/inStock", (req, res) => {
  const query = db.prepare("SELECT * FROM database WHERE stock = ?");
  const inStock = query.all("Si");
  res.json(inStock);
});

app.get("/books/paperbook/instock", (req, res) => {
  const query = db.prepare(
    "SELECT * FROM database WHERE stock = ? AND format = ?"
  );
  const paperAndStock = query.all("Si", "Papel");
  res.json(paperAndStock);
});

app.get("/book/:id", (req, res) => {
  const query = db.prepare("SELECT * FROM database WHERE id = ?");
  const bookById = query.get(req.params.id);
  res.json(bookById);
});

app.get("/books/1-3", (req, res) => {
  const query = db.prepare("SELECT * FROM database ORDER BY title LIMIT 3");
  const books1To3 = query.all();
  res.json(books1To3);
});

app.get("/books/3-5", (req, res) => {
  const query = db.prepare(
    "SELECT * FROM database ORDER BY title LIMIT 3 OFFSET 2"
  );
  const books3To5 = query.all();
  res.json(books3To5);
});
