import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>What word do you want to look up?</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="day" />
        </main>
        <footer className="text-center mb-3">
          <a
            href="https://github.com/luchaninova/react_dictionary_app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Open-source code
          </a>{" "}
          by Irina Luchaninova
        </footer>
      </div>
    </div>
  );
}

export default App;
