import { useState } from "react";

const App = () => {
  // Estados

  const [series, setSeries] = useState([
    { id: "123", name: "Juego de tronos" },
    { id: "456", name: "Las chicas Gilmore" },
    { id: "678", name: "Gambito de Dama" },
  ]);
  const [favorites, setFavorites] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchIsFavorite, setSearchIsFavorite] = useState(false);

  // Eventos

  const handleFavorite = (ev) => {
    const clickedSerieId = ev.currentTarget.id;
    const foundSerie = series.find((serie) => serie.id === clickedSerieId);
    foundSerie.isFavorite = !foundSerie.isFavorite;
    if (foundSerie.isFavorite) {
      favorites.push(foundSerie);
    } else {
      const index = favorites.findIndex((favorite) => favorite === foundSerie);
      favorites.splice(index, 1);
    }
    setFavorites(favorites);
    setSeries([...series]);
  };

  const handleSearchName = (ev) => {
    setSearchName(ev.target.value);
  };

  const handleSearchIsFavorite = (ev) => {
    setSearchIsFavorite(ev.target.checked);
  };

  // Funciones de renderizado

  const renderSeries = () => {
    if (searchIsFavorite === true) {
      return favorites.map((favorite) => {
        return (
          <li key={favorite.id} id={favorite.id} onClick={handleFavorite}>
            <h2>{favorite.name}</h2>
            <p>Es mi serie favorita: {favorite.isFavorite ? "Sí" : "No"}</p>
          </li>
        );
      });
    } else {
      return (
        series
          // Filtramos por nombre
          .filter((serie) => {
            return serie.name.toLowerCase().includes(searchName.toLowerCase());
          })
          // Mapeamos
          .map((serie) => {
            return (
              <li key={serie.id} id={serie.id} onClick={handleFavorite}>
                <h2>{serie.name}</h2>
                <p>Es mi serie favorita: {serie.isFavorite ? "Sí" : "No"}</p>
              </li>
            );
          })
      );
    }
  };

  return (
    <div>
      <h1>Lista de series:</h1>

      <ul>{renderSeries()}</ul>

      <form>
        <label htmlFor="searchName">Buscar por nombre de serie</label>
        <input
          type="text"
          id="searchName"
          value={searchName}
          onChange={handleSearchName}
        />
        <label htmlFor="searchIsFavorite">Mostrar solo las favoritas</label>
        <input
          type="checkbox"
          id="searchIsFavorite"
          checked={searchIsFavorite}
          onChange={handleSearchIsFavorite}
        />
      </form>
    </div>
  );
};

export default App;
