const express = require("express");
const cors = require("cors");

// create server
const app = express();

// set express middleware
app.use(express.json());
app.use(cors());

// create app server
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

app.get("/response-a", (req, res) => {
  res.json({ result: "ok" });
});

app.get("/response-b", (req, res) => {
  const htmlCode = `
  <!DOCTYPE html>
  <html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Prueba</title>
  </head>
  <body>
    <h1>Esta es una página de prueba</h1>
  </body>
  </html>`;
  res.send(htmlCode);
});

app.get("/response-c", (req, res) => {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  console.log(randomNumber);
  if (randomNumber % 2 === 0) {
    res.redirect("https://www.youtube.com/");
  } else {
    res.redirect("https://www.instagram.com/");
  }
});

app.get("/response-d", (req, res) => {
  if (req.query.user === "1" || req.query.user === "2") {
    res.status(200).json({ result: "ok" });
  } else {
    res.status(404).json({ result: "error: invalid query param" });
  }
});
