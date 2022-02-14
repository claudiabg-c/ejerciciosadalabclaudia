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

const db = new Database("./books.db", {
  verbose: console.log,
});

app.get("/books", (req, res) => {
  const query = db.prepare("SELECT * FROM books ORDER BY title");
  const books = query.all();
  res.json(books);
});

app.get("/books/minprice=:minprice", (req, res) => {
  const query = db.prepare("SELECT * FROM books WHERE price > ?");
  const priceRangeBooks = query.all(req.params.minprice);
  res.json(priceRangeBooks);
});

app.get("/books/inStock", (req, res) => {
  const query = db.prepare("SELECT * FROM books WHERE stock = ?");
  const inStock = query.all("Si");
  res.json(inStock);
});

app.get("/books/paperbook/instock", (req, res) => {
  const query = db.prepare(
    "SELECT * FROM books WHERE stock = ? AND format = ?"
  );
  const paperAndStock = query.all("Si", "Papel");
  res.json(paperAndStock);
});

app.get("/book/:id", (req, res) => {
  const query = db.prepare("SELECT * FROM books WHERE id = ?");
  const bookById = query.get(req.params.id);
  res.json(bookById);
});

app.get("/books/1-3", (req, res) => {
  const query = db.prepare("SELECT * FROM books ORDER BY title LIMIT 3");
  const books1To3 = query.all();
  res.json(books1To3);
});

app.get("/books/3-5", (req, res) => {
  const query = db.prepare(
    "SELECT * FROM books ORDER BY title LIMIT 3 OFFSET 2"
  );
  const books3To5 = query.all();
  res.json(books3To5);
});

app.patch("/books/updatetitle/:id", (req, res) => {
  const query = db.prepare("UPDATE books SET title = ? WHERE id = ?");
  const update = query.run(req.body.title, req.params.id);
  res.json(update);
});

app.patch("/books/updatestock/:stock", (req, res) => {
  const query = db.prepare("UPDATE books SET stock = ? WHERE format = 'Papel'");
  const update = query.run(req.params.stock);
  res.json(update);
});

app.put("/books/updatebook/:id", (req, res) => {
  const query = db.prepare(
    "UPDATE books SET title = ?, author = ?, synopsis = ?, price = ?, stock = ?, format = ? WHERE id = ?"
  );
  const update = query.run(
    req.body.title,
    req.body.author,
    req.body.synopsis,
    req.body.price,
    req.body.stock,
    req.body.format,
    req.params.id
  );
  res.json(update);
});

app.post("/books/addbook", (req, res) => {
  const title = req.body.title;
  const author = req.body.author;
  const synopsis = req.body.synopsis || "";
  const price = req.body.price || 0;
  const stock = req.body.stock || "Si";
  const format = req.body.format || "Digital";

  if (req.body.title && req.body.author) {
    const query = db.prepare(
      "INSERT INTO books (title, author, synopsis, price, stock, format) VALUES (?, ?, ?, ?, ?, ?);"
    );
    const update = query.run(title, author, synopsis, price, stock, format);
    res.json(update);
  } else {
    res.json({ result: "Invalid input data" });
  }
});
