import React from "react";
import { connect } from "react-redux";

function Compare({ product, attributes }) {
  // destructuring attributes
  let { price, colors, condition, name, vendors } = product;
  let vendorstring = "";
  // building vendor string
  for (let v of vendors) {
    vendorstring += v + ",";
  }
  // removing last , from the string
  vendorstring = vendorstring.substring(0, vendorstring.length - 1);

  return (
    <div className="Compare">
      <div className="Compare-div">
        <p className="Compare-div-title">Name</p>
        <p className="Compare-div-value">{name}</p>
      </div>
      {/* check if each attribute has been selected ,if yes, render that piece of the component */}
      {attributes.price && (
        <div className="Compare-div">
          <p className="Compare-div-title">Price</p>
          <p className="Compare-div-value">{price}</p>
        </div>
      )}
      {attributes.condition && (
        <div className="Compare-div">
          <p className="Compare-div-title">Condition</p>
          <div
            className={`Compare-div-value ${
              condition === "Fresh" ? "fresh-bg" : "frozen-bg"
            }`}
          >
            {condition}
          </div>
        </div>
      )}

      {attributes.colors && (
        <div className="Compare-div">
          <p className="Compare-div-title">Colors</p>
          <div className="Compare-div-colors">
            {/* rendering small divs with colors described */}
            {colors.map(c => (
              <div
                className="Compare-colors"
                style={{ backgroundColor: c }}
              ></div>
            ))}
          </div>
        </div>
      )}
      {attributes.vendors && (
        <div className="Compare-div">
          <p className="Compare-div-title">Vendors</p>
          <p className="Compare-div-value">{vendorstring}</p>
        </div>
      )}
    </div>
  );
}
// mapping redux store to component state
const mapStateToProps = state => {
  return {
    attributes: state.products.attributes
  };
};

export default connect(mapStateToProps)(Compare);
