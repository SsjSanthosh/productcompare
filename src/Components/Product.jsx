import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
// import add and remove actions from redux
import { addProduct, removeProduct } from "./../Redux/productActions";

function Product({ product, products, addProduct, removeProduct }) {
  // destructure attributes
  let { name, image, price, description } = product;

  //   checking if product already in the comparing items array
  const [isPresent, setIsPresent] = useState(false);
  useEffect(() => {
    // check to display compare or remove in the hover button
    for (let p of products) {
      if (p.id === product.id) {
        setIsPresent(true);
        break;
      }
    }
  }, [products, product]);
  // function to add product to compare
  const handleAdd = () => {
    addProduct(product);
  };
  // function to remove product from compare
  const handleRemove = () => {
    removeProduct(product.id);
    // resetting isPresent piece of state to change button value
    setIsPresent(false);
  };
  return (
    <div className={`Product `}>
      <div className={`Product-img ${isPresent ? "comparing" : ""}`}>
        <img src={require(`./../${image}`)} alt={name} />
        <button
          className="btn btn-compare"
          onClick={isPresent ? handleRemove : handleAdd}
        >
          {isPresent ? "REMOVE" : "COMPARE"}
        </button>
      </div>
      <div className="Product-details">
        <div className="Product-titles">
          <p className="Product-name">{name}</p>
          <p className="Product-desc">{description}</p>
        </div>
        <div className="Product-price">{price}</div>
      </div>
    </div>
  );
}
// mapping the redux store state to component props
const mapStateToProps = state => {
  return {
    products: state.products.products
  };
};
export default connect(mapStateToProps, { addProduct, removeProduct })(Product);
