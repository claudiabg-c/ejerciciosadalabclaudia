const express = require("express");
const cors = require("cors");
const films = require("./films-data.json");

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

// endpoints

app.get("/es/film:filmId.html", (req, res) => {
  let filmData = films.find((film) => film.id === req.params.filmId);

  if (filmData) {
    const filterByYear = filmData.awards.filter(
      (award) => award.year === req.query.awardsYear
    );

    if (filterByYear.length > 0) {
      filmData = {
        ...filmData,
        awards: filterByYear,
      };
    }

    filmData.title = filmData.title || "";
    filmData.year = filmData.year || "";
    filmData.director = filmData.director || "";
    filmData.country = filmData.country || "";
    filmData.awards = filmData.awards || "";
    res.render("pages/film", filmData);
  } else {
    res.render("pages/film-not-found");
  }
});
