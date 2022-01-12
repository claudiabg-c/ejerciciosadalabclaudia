import "../styles/App.css";

function App() {
  const handleInput = (event) => {
    event.preventDefault();
    console.log(event.key);
  };
  return (
    <div className="App">
      <form onSubmit={handleInput}>
        <input type="text" onKeyUp={handleInput} />
      </form>
    </div>
  );
}

export default App;
