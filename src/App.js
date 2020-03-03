import React from "react";

import "./App.css";
import ProductDisplay from "./Components/ProductDisplay";
import CompareDisplay from "./Components/CompareDisplay";
import AttributeModal from "./Components/AttributeModal";

function App() {
  return (
    <div className="App">
      <ProductDisplay />
      <CompareDisplay />
      <AttributeModal />
    </div>
  );
}

export default App;
