import { useEffect, useState } from "react";
import callToApi from "../services/api";
import "../styles/App.scss";

function App() {
  const [searchSerie, setSearchSerie] = useState("");
  const [serie, setSerie] = useState([]);

  useEffect(() => {
    callToApi(searchSerie).then((resultApi) => {
      setSerie(resultApi);
    });
  }, [searchSerie]);

  console.log(serie);

  const handleSearchInput = (ev) => {
    setSearchSerie(ev.target.value);
  };

  console.log(searchSerie);

  const renderSeries = () => {
    return serie.map((eachSerie) => {
      return <li>{eachSerie.title}</li>;
    });
  };

  return (
    <div className="App">
      <input type="text" value={searchSerie} onChange={handleSearchInput} />
      <ul>{renderSeries()}</ul>
    </div>
  );
}

export default App;
