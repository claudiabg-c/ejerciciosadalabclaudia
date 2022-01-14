import { useEffect, useState } from "react";
import callToApi from "../services/api";
import "../styles/App.scss";

function App() {
  const [showData, setShowData] = useState([]);

  useEffect(() => {
    callToApi().then((response) => {
      setShowData(response);
    });
  }, []);

  const renderShow = () => {
    return showData.map((eachShow, index) => {
      return <li key={index}>{eachShow.showTitle}</li>;
    });
  };

  return (
    <div className="App">
      <ul>{renderShow()}</ul>
    </div>
  );
}

export default App;
