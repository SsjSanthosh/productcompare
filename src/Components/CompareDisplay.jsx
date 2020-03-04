import React from "react";
import { connect } from "react-redux";
import { openModal } from "./../Redux/productActions";
import Compare from "./Compare";

function CompareDisplay({ products, openModal }) {
  // when compare list is empty
  if (products.length === 0)
    return (
      <div className="container">
        <p className="main-header">No products chosen for comparison.</p>
      </div>
    );
  // when compare list has exactly one product
  if (products.length === 1)
    return (
      <div className="container">
        <p className="main-header">
          Choose one more product to start comparison.
        </p>
      </div>
    );
  // when there are 2 or more products in the compare list
  return (
    <div className="container">
      <div className="Compare-flex">
        <span className="main-header">Now comparing </span>
        <button className="btn btn-edit" onClick={openModal}>
          Edit Attributes{" "}
        </button>
      </div>
      <div className="Compare-display">
        {/* Render each of the products to be compared in their individual components */}
        {products.map(p => (
          <Compare product={p} key={p.id} />
        ))}
      </div>
    </div>
  );
}
// mapping redux store state to component props
const mapStateToProps = state => {
  return {
    products: state.products.products
  };
};

export default connect(mapStateToProps, { openModal })(CompareDisplay);
