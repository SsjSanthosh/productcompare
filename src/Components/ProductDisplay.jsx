import React, { useState } from "react";
import data from "./../data.json";
import Product from "./Product.jsx";
import "./base.scss";
export default function ProductDisplay() {
  const [products, setProducts] = useState(data);
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
