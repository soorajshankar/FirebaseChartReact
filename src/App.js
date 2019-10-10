import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HelloMessage from "./components/HelloMessage";
import StateExample from "./components/StateExample";
import FCDemo from "./components/FCDemo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React</p>
        <HelloMessage name="sooraj" />
        <HelloMessage name="Tom" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <StateExample />
        <h1>React FC</h1>
        <FCDemo name="Harry"/>
      </header>
    </div>
  );
}

export default App;
