import React from "react";
import { connect } from "react-redux";
import { openModal } from "./../Redux/productActions";
import Compare from "./Compare";

function CompareDisplay({ products, openModal }) {
  if (products.length === 0)
    return (
      <div className="container">
        <p className="main-header">No products chosen for comparison.</p>
      </div>
    );
  if (products.length === 1)
    return (
      <div className="container">
        <p className="main-header">
          Choose one more product to start comparison.
        </p>
      </div>
    );
  return (
    <div className="container">
      <div className="Compare-flex">
        <p className="main-header">Now comparing - </p>
        <button className="btn btn-edit" onClick={openModal}>
          Add/Remove Attributes{" "}
        </button>
      </div>
      <div className="Compare-display">
        {products.map(p => (
          <Compare product={p} key={p.id} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    products: state.products.products
  };
};

export default connect(mapStateToProps, { openModal })(CompareDisplay);
