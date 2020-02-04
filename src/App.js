import React from "react";
import "./App.css";
import Wallet from "./components/Wallet";

const App = () => {
  return (
    <div data-test="app-component" className="App">
      <Wallet />
    </div>
  );
};

export default App;
