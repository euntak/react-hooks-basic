import React from "react";
import ReactDOM from "react-dom";
import CounterClass from "./CounterClass";
import CounterFunction from "./CounterFunction";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <CounterClass />
      <CounterFunction />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
