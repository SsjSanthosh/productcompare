import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ProductDisplay from "./Components/ProductDisplay";
import CompareDisplay from "./Components/CompareDisplay";

function App() {
  return (
    <div className="App">
      <ProductDisplay />
      <CompareDisplay />
    </div>
  );
}

export default App;
