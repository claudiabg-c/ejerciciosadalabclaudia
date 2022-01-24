import { useEffect, useState } from "react";
import callToApi from "../services/api";
import Loader from "./Loader";

function App() {
  const [searchSerie, setSearchSerie] = useState("");
  const [serie, setSerie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    callToApi(searchSerie).then((resultApi) => {
      setSerie(resultApi);
      setIsLoading(false);
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
      <Loader isLoading={isLoading} />
    </div>
  );
}

export default App;
