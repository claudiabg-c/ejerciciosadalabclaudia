import { useEffect, useState } from "react";
import callToApi from "../services/api";

function App() {
  const [searchSerie, setSearchSerie] = useState("");
  const [serie, setSerie] = useState([]);

  useEffect(() => {
    callToApi(searchSerie).then((resultApi) => {
      setSerie(resultApi);
    });
  }, [searchSerie]);

  const handleSearchInput = (ev) => {
    setSearchSerie(ev.target.value);
  };

  const renderSeries = () => {
    return serie.map((eachSerie, index) => {
      return <li key={index}>{eachSerie.title}</li>;
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
