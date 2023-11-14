import React from "react";
import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Search</h1>
        <Weather />
        <br />
        <p>
          <a
            href="https://github.com/Theresa7777/weather-react2"
            className="Gitlink"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by Theresa Obuladike for a React Project.
        </p>
      </header>
    </div>
  );
}

export default App;
