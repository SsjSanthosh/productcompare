import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addProduct, removeProduct } from "./../Redux/productActions";
// import Cherry from "./../images/Cherry.png";
function Product({ product, products, addProduct, removeProduct }) {
  let {
    name,
    image,
    price,

    description
  } = product;

  //   checking if product already in the comparing items array
  const [isPresent, setIsPresent] = useState(false);
  useEffect(() => {
    for (let p of products) {
      if (p.id === product.id) {
        setIsPresent(true);
        break;
      }
    }
  }, [products, product]);
  const handleAdd = () => {
    addProduct(product);
  };

  const handleRemove = () => {
    removeProduct(product.id);
    setIsPresent(false);
  };
  return (
    <div className={`Product `}>
      <div className={`Product-img ${isPresent ? "comparing" : ""}`}>
        {/* <img src="../images/Cherry.png" /> */}
        <img src={require(`./../${image}`)} alt={name} />
        <button
          className="btn btn-compare"
          onClick={isPresent ? handleRemove : handleAdd}
        >
          {isPresent ? "Remove" : "Compare"}
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

const mapStateToProps = state => {
  return {
    products: state.products.products
  };
};
export default connect(mapStateToProps, { addProduct, removeProduct })(Product);
