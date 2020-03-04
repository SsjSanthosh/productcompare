import React, { useState } from "react";
// import data from json
import data from "./../data.json";
import Product from "./Product.jsx";
import "./Styles/base.scss";
export default function ProductDisplay() {
  // set data for the state with hooks
  const [products, setProducts] = useState(data);
  // render all the products in their seperate component
  const productRender = products.map(product => {
    return <Product product={product} key={product.id} />;
  });
  return (
    <div className="container">
      <p className="main-header">Compare products</p>
      <div className="Product-display">{productRender}</div>
    </div>
  );
}
