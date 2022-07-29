import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <header className="App-header">hello</header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
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
